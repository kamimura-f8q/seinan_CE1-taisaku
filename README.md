# 英語復習ツール

**Revised COMET English Communication I** の授業内容を復習できるWebアプリです。単語・本文・文法の3モードを段階的にクリアしていく仕組みになっています。

## 使い方

1. `index.html` をブラウザで開く（ダブルクリックでOK）
2. Lessonを選ぶ
3. 単語モード → 本文モード → 文法モードの順に解放されていく
4. 各モードで100%を取ると次のモードが解放される

> インターネット接続不要。**AI英作文採点**のみClaudeのAPIキーが必要です。

---

## デプロイ（GitHub Pages）

1. このリポジトリをGitHubにpush
2. リポジトリの **Settings → Pages** を開く
3. Source を **Deploy from a branch** → `main` / `(root)` に設定
4. 表示されたURLをクラス全員に共有する

---

## AI英作文採点の設定

文法モードの「AI英作文」にはClaude APIキーが必要です。

1. [Anthropic Console](https://console.anthropic.com/) でAPIキーを取得
2. ツールを開き、右下の **⚙️ 設定** をクリック
3. APIキーを入力して「保存」

キーはブラウザの `localStorage` にのみ保存されます。外部サーバーには送信されません。

---

## ファイル構成

```
english_review/
├── index.html   # 画面テンプレート（通常変更不要）
├── style.css    # スタイル（通常変更不要）
├── app.js       # アプリロジック（通常変更不要）
└── data.js      # レッスンデータ ← コンテンツ追加はここだけ
```

---

## 新しいLessonの追加方法

`data.js` の `LESSONS` 配列に以下の形式でオブジェクトを追加します。

```javascript
{
  id: "L04",
  title: "Lesson 4",
  subtitle: "レッスンのタイトル",

  // 単語リスト
  vocabulary: [
    { en: "英単語", ja: "日本語訳", example: "This is an ___ sentence.", exampleAnswer: "英単語" }
  ],

  // 本文（original = 教科書本文、rewrite = リライト版）
  texts: [
    {
      id: "original",
      label: "本文",
      isRewrite: false,
      sentences: [
        { en: "English sentence.", ja: "日本語訳。" }
      ]
    },
    {
      id: "rewrite",
      label: "リライト版",
      isRewrite: true,
      sentences: [
        { en: "Simpler sentence.", ja: "簡単な日本語訳。" }
      ]
    }
  ],

  // 内容確認クイズ（セッションごとにシャッフルして最大12問出題）
  comprehensionQuestions: [
    // 〇×問題
    { question: "問題文", type: "truefalse", answer: true },
    // 4択問題
    { question: "問題文", type: "multiple", options: ["A","B","C","D"], answer: 0 },
    // 記述問題（キーワードマッチング）
    { question: "問題文", type: "text", answer: "模範解答", keywords: ["必須キーワード"] }
  ],

  // 文法
  grammar: {
    rules: [
      {
        title: "文法ルール名",
        explanation: "説明文",
        examples: [
          { en: "例文（英語）", ja: "例文（日本語）" }
        ]
      }
    ],
    fillBlanks: [
      { instruction: "指示文", sentence: "Fill in the ___ blank.", answer: "the", hint: "ヒント" }
    ],
    rearrange: [
      { instruction: "指示文", words: ["並", "べ", "替", "え"], answer: "並べ替え", ja: "日本語訳" }
    ],
    composition: [
      { prompt: "英作文のお題", hint: "ヒント", modelAnswer: "模範解答" }
    ]
  }
}
```

---

## 動作環境

モダンブラウザ（Chrome / Firefox / Safari / Edge）で動作します。IE非対応。
