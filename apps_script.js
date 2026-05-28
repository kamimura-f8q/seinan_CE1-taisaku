/**
 * 英語復習ツール — Google Apps Script バックエンド
 *
 * ■ セットアップ手順 ■
 * 1. Google スプレッドシートを新規作成
 * 2. 拡張機能 → Apps Script → このファイルの内容を貼り付け
 * 3. デプロイ → 新しいデプロイ → 種類：ウェブアプリ
 *    - 次のユーザーとして実行：自分
 *    - アクセスできるユーザー：全員
 * 4. デプロイ → URLをコピー
 * 5. 英語復習ツールの「設定」→「Google Apps Script URL」に貼り付け
 *
 * ■ スプレッドシートの構成 ■
 * シート「記録」  : 生徒の取り組みログ（教員が見る追跡データ）
 * シート「進捗」  : モードのクリア状況（クロスデバイス保存用）
 */

const SHEET_RECORDS  = '記録';
const SHEET_PROGRESS = '進捗';

// =============================================================
// GET: 進捗データの取得（クロスデバイス再開用）
// =============================================================
function doGet(e) {
  try {
    const action = e.parameter.action;
    if (action !== 'getProgress') {
      return jsonResponse({ ok: false, error: 'Unknown action' });
    }

    const cls = e.parameter.cls;
    const num = e.parameter.num;
    if (!cls || !num) {
      return jsonResponse({ ok: false, error: 'Missing cls or num' });
    }

    const ss    = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = getOrCreateSheet(ss, SHEET_PROGRESS,
      ['クラス', '出席番号', 'レッスンID', 'カテゴリ', 'モード', '解放済み', 'クリア済み', '更新日時']);

    const data = sheet.getDataRange().getValues();
    const progress = {}; // { lessonId: [{category, mode, unlocked, cleared}] }

    for (let i = 1; i < data.length; i++) {
      const [rowCls, rowNum, lessonId, category, mode, unlocked, cleared] = data[i];
      if (String(rowCls) !== String(cls) || String(rowNum) !== String(num)) continue;
      if (!progress[lessonId]) progress[lessonId] = [];
      progress[lessonId].push({
        category: String(category),
        mode:     String(mode),
        unlocked: unlocked === true || unlocked === 'TRUE',
        cleared:  cleared  === true || cleared  === 'TRUE',
      });
    }

    return jsonResponse({ ok: true, progress });

  } catch (err) {
    return jsonResponse({ ok: false, error: err.message });
  }
}

// =============================================================
// POST: 記録の保存・進捗の更新
// =============================================================
function doPost(e) {
  try {
    const body   = JSON.parse(e.postData.contents);
    const action = body.action;
    const ss     = SpreadsheetApp.getActiveSpreadsheet();

    // ── アクティビティログ（教員追跡用） ──
    if (action === 'logActivity') {
      const sheet = getOrCreateSheet(ss, SHEET_RECORDS,
        ['クラス', '出席番号', '日時', 'Lesson', 'モード', 'スコア', '合計', '正答率(%)']);

      sheet.appendRow([
        body.cls,
        body.num,
        new Date(),
        body.lessonTitle,
        body.modeLabel,
        body.score,
        body.total,
        body.pct,
      ]);

      // 書式設定（正答率の色分け）
      const lastRow = sheet.getLastRow();
      const pctCell = sheet.getRange(lastRow, 8); // H列: 正答率
      const pct     = Number(body.pct);
      if (pct === 100) {
        pctCell.setBackground('#c6efce'); // 緑
      } else if (pct >= 80) {
        pctCell.setBackground('#ffeb9c'); // 黄
      } else {
        pctCell.setBackground('#ffc7ce'); // 赤
      }

      return jsonResponse({ ok: true });
    }

    // ── 進捗の保存（クロスデバイス用） ──
    if (action === 'saveProgress') {
      const sheet = getOrCreateSheet(ss, SHEET_PROGRESS,
        ['クラス', '出席番号', 'レッスンID', 'カテゴリ', 'モード', '解放済み', 'クリア済み', '更新日時']);

      const data = sheet.getDataRange().getValues();
      let found  = false;

      for (let i = 1; i < data.length; i++) {
        const [rowCls, rowNum, rowLesson, rowCat, rowMode] = data[i];
        if (
          String(rowCls)    === String(body.cls)      &&
          String(rowNum)    === String(body.num)      &&
          String(rowLesson) === String(body.lessonId) &&
          String(rowCat)    === String(body.category) &&
          String(rowMode)   === String(body.mode)
        ) {
          sheet.getRange(i + 1, 6, 1, 3).setValues([[true, body.cleared, new Date()]]);
          found = true;
          break;
        }
      }

      if (!found) {
        sheet.appendRow([
          body.cls,
          body.num,
          body.lessonId,
          body.category,
          body.mode,
          true,           // 解放済み
          body.cleared,
          new Date(),
        ]);
      }

      return jsonResponse({ ok: true });
    }

    return jsonResponse({ ok: false, error: 'Unknown action' });

  } catch (err) {
    return jsonResponse({ ok: false, error: err.message });
  }
}

// =============================================================
// ヘルパー
// =============================================================
function getOrCreateSheet(ss, name, headers) {
  let sheet = ss.getSheetByName(name);
  if (!sheet) {
    sheet = ss.insertSheet(name);
    sheet.appendRow(headers);
    // ヘッダー行を太字・背景色に
    const headerRange = sheet.getRange(1, 1, 1, headers.length);
    headerRange.setFontWeight('bold');
    headerRange.setBackground('#4a6ea8');
    headerRange.setFontColor('#ffffff');
  }
  return sheet;
}

function jsonResponse(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
