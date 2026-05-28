/* =====================================================================
   英語復習ツール — App Logic
   ===================================================================== */

// =====================================================================
// UNLOCK CHAIN  （クリアすると次が解放される順番）
// =====================================================================
const UNLOCK_CHAIN = {
  vocab: {
    flashcard: { next: { category: 'vocab',   mode: 'quiz' } },
    quiz:      { next: { category: 'vocab',   mode: 'fill' } },
    fill:      { next: { category: 'reading', mode: 'translate' }, completesSection: 'vocab' },
  },
  reading: {
    translate:     { next: { category: 'reading', mode: 'english' } },
    english:       { next: { category: 'reading', mode: 'comprehension' } },
    comprehension: { next: { category: 'reading', mode: 'rewrite' } },
    rewrite:       { next: { category: 'grammar', mode: 'rules' }, completesSection: 'reading' },
  },
  grammar: {
    rules:       { next: { category: 'grammar', mode: 'fill' } },
    fill:        { next: { category: 'grammar', mode: 'rearrange' } },
    rearrange:   { next: { category: 'grammar', mode: 'composition' } },
    composition: { next: null, completesSection: 'grammar' },
  },
};

const CARD_ID = {
  vocab:   { flashcard: 'card-vocab-flashcard', quiz: 'card-vocab-quiz', fill: 'card-vocab-fill' },
  reading: { translate: 'card-reading-translate', english: 'card-reading-english', comprehension: 'card-reading-comprehension', rewrite: 'card-reading-rewrite' },
  grammar: { rules: 'card-grammar-rules', fill: 'card-grammar-fill', rearrange: 'card-grammar-rearrange', composition: 'card-grammar-composition' },
};

const MODE_LABELS = {
  vocab:   { flashcard: 'フラッシュカード', quiz: '4択クイズ', fill: '穴埋め（例文）' },
  reading: { translate: '和訳確認', english: '英訳練習', comprehension: '内容確認クイズ', rewrite: 'アレンジ版問題' },
  grammar: { rules: 'ルール確認', fill: '穴埋め問題', rearrange: '並べ替え問題', composition: 'AI英作文' },
};

const SECTION_LABELS = { vocab: '単語モード', reading: '本文モード', grammar: '文法モード' };

// =====================================================================
// APP
// =====================================================================
const App = (() => {
  let currentLesson = null;
  let currentCategory = null;
  let currentMode = null;
  let questions = [];
  let qIndex = 0;
  let score = 0;
  let answered = false;
  let rearrangeSelected = [];
  let rearrangeWords = [];

  // ---------------------------------------------------------------
  // USER STATE
  // ---------------------------------------------------------------
  let currentUser = { cls: '', num: '' };  // クラス・出席番号

  function userKey() {
    return currentUser.cls && currentUser.num
      ? `${currentUser.cls}_${currentUser.num}`
      : 'guest';
  }

  // ---------------------------------------------------------------
  // PROGRESS  (localStorage)
  // ---------------------------------------------------------------
  const progressKey = id => `er_progress_${userKey()}_${id}`;

  function loadProgress(lessonId) {
    try { return JSON.parse(localStorage.getItem(progressKey(lessonId))) || {}; }
    catch { return {}; }
  }

  function saveProgress(lessonId, progress) {
    localStorage.setItem(progressKey(lessonId), JSON.stringify(progress));
  }

  function isUnlocked(progress, category, mode) {
    if (category === 'vocab' && mode === 'flashcard') return true;
    return !!(progress[`${category}_${mode}`]?.unlocked);
  }

  function isCleared(progress, category, mode) {
    return !!(progress[`${category}_${mode}`]?.cleared);
  }

  function markCleared(lessonId, category, mode) {
    const progress = loadProgress(lessonId);
    progress[`${category}_${mode}`] = { unlocked: true, cleared: true };
    const chain = UNLOCK_CHAIN[category][mode];
    if (chain?.next) {
      const { category: nc, mode: nm } = chain.next;
      if (!progress[`${nc}_${nm}`]) progress[`${nc}_${nm}`] = {};
      progress[`${nc}_${nm}`].unlocked = true;
    }
    saveProgress(lessonId, progress);
    return chain;
  }

  function getLessonProgress(lessonId) {
    const progress = loadProgress(lessonId);
    let clearedCount = 0, total = 0;
    for (const cat of Object.keys(CARD_ID)) {
      for (const mode of Object.keys(CARD_ID[cat])) {
        total++;
        if (isCleared(progress, cat, mode)) clearedCount++;
      }
    }
    return { clearedCount, total };
  }

  function resetLessonProgress(lessonId) {
    localStorage.removeItem(progressKey(lessonId));
  }

  // ---------------------------------------------------------------
  // ACTIVITY RECORDS  (localStorage per user)
  // ---------------------------------------------------------------
  function recordsKey() { return `er_records_${userKey()}`; }

  function loadRecords() {
    try { return JSON.parse(localStorage.getItem(recordsKey())) || []; }
    catch { return []; }
  }

  function saveRecord(lessonId, category, mode, sc, total, pct) {
    const records = loadRecords();
    records.push({
      lessonId,
      category,
      mode,
      score: sc,
      total,
      pct,
      date: new Date().toISOString(),
    });
    // 最新200件を保持
    if (records.length > 200) records.splice(0, records.length - 200);
    localStorage.setItem(recordsKey(), JSON.stringify(records));
  }

  // ---------------------------------------------------------------
  // GOOGLE APPS SCRIPT  (クラウド連携)
  // ---------------------------------------------------------------
  const DEFAULT_GS_URL = 'https://script.google.com/macros/s/AKfycbyvM_fPUHd4MkP_VvwAlFc23LlIqiK9kCfaZsJQW9GxYQAUoVclIxnEfj5oKrsfGep2eg/exec';
  function getGsUrl() { return localStorage.getItem('er_gs_url') || DEFAULT_GS_URL; }

  async function cloudPost(body) {
    const url = getGsUrl();
    if (!url || !currentUser.cls) return;
    try {
      await fetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
      });
    } catch { /* 通信失敗は無視 */ }
  }

  async function syncProgressFromCloud() {
    const url = getGsUrl();
    if (!url || !currentUser.cls) { showLessonSelect(); return; }
    showToast('進捗をクラウドから読み込み中…');
    try {
      const res = await fetch(
        `${url}?action=getProgress&cls=${encodeURIComponent(currentUser.cls)}&num=${encodeURIComponent(currentUser.num)}`
      );
      const data = await res.json();
      if (data.ok && data.progress) {
        // クラウドの進捗をローカルにマージ（クリア済み優先）
        LESSONS.forEach(lesson => {
          const local = loadProgress(lesson.id);
          let changed = false;
          (data.progress[String(lesson.id)] || []).forEach(entry => {
            const mk = `${entry.category}_${entry.mode}`;
            if (!local[mk]) local[mk] = {};
            if (!local[mk].unlocked && entry.unlocked) { local[mk].unlocked = true; changed = true; }
            if (!local[mk].cleared && entry.cleared)   { local[mk].cleared  = true; changed = true; }
          });
          if (changed) saveProgress(lesson.id, local);
        });
        showToast('進捗を同期しました');
      }
    } catch { showToast('クラウド同期できませんでした（ローカルデータを使用）'); }
    showLessonSelect();
  }

  async function cloudSaveCleared(lessonId, category, mode) {
    await cloudPost({
      action: 'saveProgress',
      cls: currentUser.cls,
      num: currentUser.num,
      lessonId,
      category,
      mode,
      cleared: true,
    });
  }

  async function cloudLogActivity(lessonId, category, mode, sc, total, pct) {
    await cloudPost({
      action: 'logActivity',
      cls: currentUser.cls,
      num: currentUser.num,
      lessonId,
      lessonTitle: `Lesson ${lessonId}`,
      modeLabel: MODE_LABELS[category][mode],
      score: sc,
      total,
      pct,
    });
  }

  // ---------------------------------------------------------------
  // SCREENS
  // ---------------------------------------------------------------
  function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    window.scrollTo(0, 0);
  }

  // ---------------------------------------------------------------
  // LOGIN
  // ---------------------------------------------------------------
  function showLogin() { showScreen('screen-login'); }

  function selectClass(btn) {
    document.querySelectorAll('#class-selector .class-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
  }

  function submitLogin() {
    const selectedBtn = document.querySelector('#class-selector .class-btn.selected');
    const cls = selectedBtn ? selectedBtn.dataset.value : '';
    const num = (document.getElementById('login-num').value || '').trim();
    if (!cls) { showToast('クラスを選択してください'); return; }
    if (!num) { showToast('出席番号を入力してください'); return; }
    currentUser = { cls, num };
    localStorage.setItem('er_user', JSON.stringify(currentUser));
    // クラウドがあれば進捗同期、なければそのままレッスン選択へ
    if (getGsUrl()) { syncProgressFromCloud(); }
    else { showLessonSelect(); }
  }

  function logout() {
    currentUser = { cls: '', num: '' };
    localStorage.removeItem('er_user');
    closeSettings();
    // ログイン画面に戻る（入力フィールドをリセット）
    document.querySelectorAll('#class-selector .class-btn').forEach(b => b.classList.remove('selected'));
    const numEl = document.getElementById('login-num');
    if (numEl) numEl.value = '';
    showLogin();
    showToast('ログアウトしました');
  }

  function showLessonSelect() {
    renderLessonList();
    // ユーザーバッジを更新
    const badge = document.getElementById('user-badge');
    if (badge) {
      badge.textContent = currentUser.cls
        ? `${currentUser.cls}・${currentUser.num}番`
        : '';
    }
    showScreen('screen-lesson-select');
  }

  function renderLessonList() {
    const el = document.getElementById('lesson-list');
    el.innerHTML = LESSONS.map(lesson => {
      const { clearedCount, total } = getLessonProgress(lesson.id);
      const pct = Math.round((clearedCount / total) * 100);
      const allDone = clearedCount === total;
      return `
        <div class="lesson-card ${allDone ? 'lesson-complete' : ''}" onclick="App.selectLesson(${lesson.id})">
          ${allDone ? '<div class="lesson-complete-badge">🏆 コンプリート</div>' : ''}
          <div class="lesson-card-body">
            <div class="lesson-card-number">Lesson ${lesson.id}</div>
            <div class="lesson-card-title">${lesson.title}</div>
            <div class="lesson-card-sub">${lesson.subtitle}</div>
            <div class="lesson-card-progress">
              <div class="lesson-card-progress-label">${clearedCount} / ${total} クリア</div>
              <div class="lesson-card-progress-bar">
                <div class="lesson-card-progress-fill" style="width:${pct}%"></div>
              </div>
            </div>
          </div>
        </div>`;
    }).join('');
  }

  function selectLesson(lessonId) {
    currentLesson = LESSONS.find(l => l.id === lessonId);
    showModeMap();
  }

  // ---------------------------------------------------------------
  // MODE MAP
  // ---------------------------------------------------------------
  function showModeMap() {
    if (!currentLesson) return;
    document.getElementById('mode-map-title').textContent = currentLesson.title;
    document.getElementById('mode-map-subtitle').textContent = currentLesson.subtitle;

    const progress = loadProgress(currentLesson.id);

    for (const cat of Object.keys(CARD_ID)) {
      for (const mode of Object.keys(CARD_ID[cat])) {
        const card = document.getElementById(CARD_ID[cat][mode]);
        if (!card) continue;
        const unlocked = isUnlocked(progress, cat, mode);
        const cleared  = isCleared(progress, cat, mode);

        card.classList.toggle('locked', !unlocked);
        card.classList.toggle('cleared', cleared);

        const statusEl = card.querySelector('.mode-status');
        let lockEl = card.querySelector('.lock-icon');
        if (!lockEl) { lockEl = document.createElement('span'); lockEl.className = 'lock-icon'; card.appendChild(lockEl); }

        if (!unlocked)    { statusEl.textContent = 'ロック中';      lockEl.textContent = '🔒'; }
        else if (cleared) { statusEl.textContent = '✅ クリア済み'; lockEl.textContent = ''; }
        else              { statusEl.textContent = '挑戦しよう！';   lockEl.textContent = ''; }
      }
    }

    const vocabDone   = isCleared(progress, 'vocab',   'fill');
    const readingDone = isCleared(progress, 'reading', 'rewrite');

    document.getElementById('section-reading').classList.toggle('locked', !vocabDone);
    document.getElementById('section-grammar').classList.toggle('locked', !readingDone);
    document.getElementById('arrow-to-reading').classList.toggle('unlocked', vocabDone);
    document.getElementById('arrow-to-grammar').classList.toggle('unlocked', readingDone);

    showScreen('screen-mode-map');
  }

  // ---------------------------------------------------------------
  // START MODE
  // ---------------------------------------------------------------
  function startMode(category, mode) {
    const progress = loadProgress(currentLesson.id);
    if (!isUnlocked(progress, category, mode)) return;

    if (category === 'grammar' && mode === 'composition') {
      const key = localStorage.getItem('er_api_key');
      if (!key) { openApiKeyModal(category, mode); return; }
    }

    currentCategory = category;
    currentMode = mode;
    questions = buildQuestions(category, mode);
    qIndex = 0;
    score = 0;
    answered = false;

    document.getElementById('quiz-title').textContent =
      `${currentLesson.title} — ${MODE_LABELS[category][mode]}`;
    updateProgressBar();
    renderQuestion();
    showScreen('screen-quiz');
  }

  // ---------------------------------------------------------------
  // BUILD QUESTIONS
  // ---------------------------------------------------------------
  function buildQuestions(category, mode) {
    const L = currentLesson;
    if (category === 'vocab') {
      const voc = shuffle([...L.vocabulary]);
      return voc;
    }
    if (category === 'reading') {
      const sentences = L.texts.find(t => !t.isRewrite)?.sentences || [];
      if (mode === 'translate')     return [...sentences];
      if (mode === 'english')       return [...sentences];
      if (mode === 'comprehension') return shuffle([...L.comprehensionQuestions]).slice(0, Math.min(12, L.comprehensionQuestions.length));
      if (mode === 'rewrite') {
        const rwSentences = L.texts.find(t => t.isRewrite)?.sentences || [];
        const qs = shuffle([...(L.rewriteQuestions || [])]);
        return [{ type: 'rewrite_passage', sentences: rwSentences }, ...qs];
      }
    }
    if (category === 'grammar') {
      if (mode === 'rules')       return [{ type: 'all_rules', rules: L.grammar.rules }];
      if (mode === 'fill')        return shuffle([...L.grammar.fillBlanks]);
      if (mode === 'rearrange')   return shuffle([...L.grammar.rearrange]);
      if (mode === 'composition') return [...L.grammar.composition];
    }
    return [];
  }

  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  // ---------------------------------------------------------------
  // RENDER QUESTION
  // ---------------------------------------------------------------
  function renderQuestion() {
    updateProgressBar();
    answered = false;
    hide('btn-check'); hide('btn-next'); hide('btn-finish');

    const q = questions[qIndex];
    const content = document.getElementById('quiz-content');
    content.innerHTML = '';

    const cat = currentCategory, mode = currentMode;

    if      (cat === 'vocab'   && mode === 'flashcard')    renderFlashcard(q, content);
    else if (cat === 'vocab'   && mode === 'quiz')         renderVocabQuiz(q, content);
    else if (cat === 'vocab'   && mode === 'spelling')     renderSpelling(q, content);
    else if (cat === 'vocab'   && mode === 'fill')         renderVocabFill(q, content);
    else if (cat === 'reading' && mode === 'translate')    renderTranslate(q, content);
    else if (cat === 'reading' && mode === 'english')      renderEnglish(q, content);
    else if (cat === 'reading' && mode === 'comprehension') renderComprehension(q, content);
    else if (cat === 'reading' && mode === 'rewrite')      renderRewrite(q, content);
    else if (cat === 'grammar' && mode === 'rules')        renderGrammarRules(q, content);
    else if (cat === 'grammar' && mode === 'fill')         renderGrammarFill(q, content);
    else if (cat === 'grammar' && mode === 'rearrange')    renderRearrange(q, content);
    else if (cat === 'grammar' && mode === 'composition')  renderComposition(q, content);
  }

  // ---------------------------------------------------------------
  // FLASHCARD
  // ---------------------------------------------------------------
  function renderFlashcard(q, content) {
    content.innerHTML = `
      <p class="instruction-label">カードをタップして裏返す</p>
      <div class="flashcard-wrap">
        <div class="flashcard" id="fc" onclick="document.getElementById('fc').classList.toggle('flipped')">
          <div class="flashcard-face front">
            <div class="flashcard-word">${q.en}</div>
            <div class="flashcard-tap">👆 タップして日本語を確認</div>
          </div>
          <div class="flashcard-face back">
            <div class="flashcard-hint">英語：<strong>${q.en}</strong></div>
            <div class="flashcard-answer">${q.ja}</div>
          </div>
        </div>
      </div>
      <div style="margin-top:24px;text-align:center">
        <p style="font-size:.85rem;color:var(--text-muted);margin-bottom:12px">覚えていましたか？</p>
        <div class="self-eval-btns">
          <button class="btn-correct" onclick="App.flashcardEval(true)">✅ 覚えてた</button>
          <button class="btn-incorrect" onclick="App.flashcardEval(false)">❌ 覚えてなかった</button>
        </div>
      </div>`;
  }

  function flashcardEval(correct) {
    if (correct) score++;
    if (qIndex >= questions.length - 1) finishMode();
    else nextQuestion();
  }

  // ---------------------------------------------------------------
  // VOCAB QUIZ（4択）
  // ---------------------------------------------------------------
  function renderVocabQuiz(q, content) {
    const wrongs = shuffle(currentLesson.vocabulary.filter(w => w.en !== q.en)).slice(0, 3);
    const opts   = shuffle([q, ...wrongs]);
    const letters = ['A', 'B', 'C', 'D'];
    content.innerHTML = `
      <p class="instruction-label">次の英単語の意味を選びなさい</p>
      <p class="question-text" style="font-size:1.8rem;text-align:center;padding:16px 0;font-weight:800">${q.en}</p>
      <div class="options-list">
        ${opts.map((o, i) => `
          <button class="option-btn" onclick="App.selectOption(this,${o.ja===q.ja},'${escHtml(q.ja)}')">
            <span class="option-letter">${letters[i]}</span>${o.ja}
          </button>`).join('')}
      </div>`;
  }

  function selectOption(btn, correct, correctAnswer) {
    if (answered) return;
    answered = true;
    btn.classList.add(correct ? 'correct' : 'incorrect');
    if (correct) {
      score++;
    } else {
      document.querySelectorAll('.option-btn').forEach(b => {
        if (b.textContent.trim().includes(correctAnswer)) b.classList.add('correct');
      });
    }
    document.querySelectorAll('.option-btn').forEach(b => b.disabled = true);
    showNextOrFinish();
  }

  // ---------------------------------------------------------------
  // SPELLING
  // ---------------------------------------------------------------
  function renderSpelling(q, content) {
    content.innerHTML = `
      <p class="instruction-label">日本語を見て英単語をスペルする</p>
      <p class="question-text" style="font-size:1.5rem;text-align:center;padding:20px 0">${q.ja}</p>
      <div class="text-input-wrap">
        <input type="text" id="spell-input" placeholder="英単語を入力..." autocomplete="off" autocorrect="off" spellcheck="false" />
      </div>`;
    const inp = document.getElementById('spell-input');
    inp.addEventListener('keydown', e => { if (e.key === 'Enter') checkAnswer(); });
    inp.focus();
    show('btn-check');
  }

  // ---------------------------------------------------------------
  // VOCAB FILL（4択）
  // ---------------------------------------------------------------
  function renderVocabFill(q, content) {
    const display = q.example.replace('___', '<span class="blank-target">________</span>');
    const wrongs = shuffle(currentLesson.vocabulary.filter(w => w.en !== q.en)).slice(0, 3);
    const opts   = shuffle([q.exampleAnswer, ...wrongs.map(w => w.en)]);
    const letters = ['A', 'B', 'C', 'D'];
    content.innerHTML = `
      <p class="instruction-label">空欄に入る語を選びなさい</p>
      <p class="question-text">${display}</p>
      <p class="hint-label">💡 意味：${q.ja}</p>
      <div class="options-list">
        ${opts.map((o, i) => `
          <button class="option-btn" onclick="App.selectOption(this,${o.toLowerCase()===q.exampleAnswer.toLowerCase()},'${escHtml(q.exampleAnswer)}')">
            <span class="option-letter">${letters[i]}</span>${o}
          </button>`).join('')}
      </div>`;
  }

  // ---------------------------------------------------------------
  // TRANSLATE（和訳確認）
  // ---------------------------------------------------------------
  function renderTranslate(q, content) {
    content.innerHTML = `
      <p class="instruction-label">英文を読んで和訳を確認しよう</p>
      <div class="sentence-card">
        <div class="sentence-en">${q.en}</div>
        <div class="sentence-ja-wrap">
          <button class="reveal-btn" onclick="App.revealTranslation('${escHtml(q.ja)}')">和訳を表示 ▼</button>
        </div>
      </div>
      <div style="margin-top:24px;text-align:center">
        <p style="font-size:.85rem;color:var(--text-muted);margin-bottom:12px">理解できましたか？</p>
        <div class="self-eval-btns">
          <button class="btn-correct" onclick="App.flashcardEval(true)">✅ 理解できた</button>
          <button class="btn-incorrect" onclick="App.flashcardEval(false)">❌ もう一度確認</button>
        </div>
      </div>`;
  }

  function revealTranslation(ja) {
    const wrap = document.querySelector('.sentence-ja-wrap');
    if (wrap) wrap.innerHTML = `<div class="sentence-ja">${ja}</div>`;
  }

  // ---------------------------------------------------------------
  // ENGLISH（英文空所補充 4択）
  // ---------------------------------------------------------------
  function renderEnglish(q, content) {
    const { displaySentence, correctAnswer, options } = makeReadingFillBlank(q);
    const letters = ['A', 'B', 'C', 'D'];
    content.innerHTML = `
      <p class="instruction-label">空欄に入る語を選びなさい</p>
      <p class="question-text">${displaySentence}</p>
      <p class="hint-label">🇯🇵 ${q.ja}</p>
      <div class="options-list">
        ${options.map((o, i) => `
          <button class="option-btn" onclick="App.selectOption(this,${o.toLowerCase()===correctAnswer.toLowerCase()},'${escHtml(correctAnswer)}')">
            <span class="option-letter">${letters[i]}</span>${o}
          </button>`).join('')}
      </div>`;
  }

  function makeReadingFillBlank(q) {
    const vocab = currentLesson.vocabulary;
    const vocabSet = new Set(vocab.map(v => v.en.toLowerCase()));
    const stopWords = new Set([
      'a','an','the','is','are','was','were','be','been','being','have','has','had',
      'do','does','did','will','would','could','should','may','might','must','can',
      'i','you','he','she','it','we','they','me','him','her','us','them',
      'my','your','his','its','our','their','this','that','these','those',
      'and','but','or','so','yet','not','if','than','when','where','while',
      'also','just','very','more','most','some','all','any','there','here','then',
    ]);
    const preps = new Set([
      'in','on','at','to','for','of','with','by','from','into',
      'about','as','through','between','after','before','during','without',
    ]);
    const clean = w => w.replace(/[^a-zA-Z]/g, '').toLowerCase();
    const strip = w => w.replace(/[.,!?;:'"]/g, '');
    const allSentences = currentLesson.texts.flatMap(t => t.sentences);
    const tokens = q.en.split(' ');

    // ─── 熟語候補（前置詞＋非語彙コンテンツ語）を収集 ───
    const phraseCandidates = [];
    for (let i = 0; i < tokens.length - 1; i++) {
      const w2 = clean(tokens[i + 1]);
      if (preps.has(clean(tokens[i])) && w2.length >= 4 && !stopWords.has(w2) && !vocabSet.has(w2)) {
        phraseCandidates.push(i);
      }
    }

    // 他の文から熟語プール
    const phrasePool = [];
    for (const s of allSentences) {
      if (s.en === q.en) continue;
      const toks = s.en.split(' ');
      for (let i = 0; i < toks.length - 1; i++) {
        const w2 = clean(toks[i + 1]);
        if (preps.has(clean(toks[i])) && w2.length >= 4 && !stopWords.has(w2) && !vocabSet.has(w2)) {
          phrasePool.push(`${strip(toks[i])} ${strip(toks[i + 1])}`);
        }
      }
    }

    let blankStart = -1, blankEnd = -1, correctAnswer = '';

    // 熟語ブランクを使う（候補あり＆選択肢3つ以上確保できる場合）
    if (phraseCandidates.length > 0 && phrasePool.length >= 3) {
      const bi = phraseCandidates[Math.floor(Math.random() * phraseCandidates.length)];
      blankStart = bi; blankEnd = bi + 1;
      correctAnswer = `${strip(tokens[bi])} ${strip(tokens[bi + 1])}`;
    }

    // 単語ブランク（語彙リスト外のコンテンツ語）
    if (blankStart === -1) {
      for (const i of shuffle(tokens.map((_, i) => i))) {
        const c = clean(tokens[i]);
        if (c.length >= 4 && !stopWords.has(c) && !vocabSet.has(c)) {
          blankStart = i; blankEnd = i; correctAnswer = strip(tokens[i]); break;
        }
      }
    }
    // 最終フォールバック（語彙でも可）
    if (blankStart === -1) {
      for (const i of shuffle(tokens.map((_, i) => i))) {
        const c = clean(tokens[i]);
        if (c.length >= 3 && !stopWords.has(c)) {
          blankStart = i; blankEnd = i; correctAnswer = strip(tokens[i]); break;
        }
      }
    }
    if (blankStart === -1) { blankStart = 0; blankEnd = 0; correctAnswer = strip(tokens[0]); }

    // 表示文の構築
    const blankIndices = new Set();
    for (let i = blankStart; i <= blankEnd; i++) blankIndices.add(i);
    let placed = false;
    const displaySentence = tokens.reduce((acc, w, i) => {
      if (blankIndices.has(i)) { if (!placed) { acc.push('<span class="blank-target">________</span>'); placed = true; } }
      else acc.push(w);
      return acc;
    }, []).join(' ');

    // 選択肢プール（熟語 or 単語）
    const isPhrase = blankStart !== blankEnd;
    let pool;
    if (isPhrase) {
      pool = [...new Set(phrasePool.filter(p => p.toLowerCase() !== correctAnswer.toLowerCase()))];
    } else {
      const wordSet = new Set();
      for (const s of allSentences) {
        if (s.en === q.en) continue;
        s.en.split(' ').forEach(w => {
          const c = strip(w); const lc = c.toLowerCase();
          if (c.length >= 4 && !stopWords.has(lc) && !vocabSet.has(lc) && lc !== correctAnswer.toLowerCase())
            wordSet.add(c);
        });
      }
      pool = [...wordSet];
      if (pool.length < 3) pool.push(...vocab.map(v => v.en).filter(w => w.toLowerCase() !== correctAnswer.toLowerCase()));
    }

    const distractors = shuffle(pool).slice(0, 3);
    const options = shuffle([correctAnswer, ...distractors]);
    return { displaySentence, correctAnswer, options };
  }

  // ---------------------------------------------------------------
  // COMPREHENSION（内容確認クイズ）
  // ---------------------------------------------------------------
  function renderComprehension(q, content) {
    if (q.type === 'truefalse') {
      content.innerHTML = `
        <p class="instruction-label">本文の内容に合えば T，間違いなら F を選びなさい</p>
        <p class="question-text">${q.question}</p>
        <div class="options-list">
          <button class="option-btn" onclick="App.selectOption(this,${q.answer===true},'${q.answer ? 'T（正しい）' : 'F（間違い）'}')">
            <span class="option-letter">T</span>正しい（True）
          </button>
          <button class="option-btn" onclick="App.selectOption(this,${q.answer===false},'${q.answer ? 'T（正しい）' : 'F（間違い）'}')">
            <span class="option-letter">F</span>間違い（False）
          </button>
        </div>`;
    } else if (q.type === 'multiple') {
      const letters = ['A', 'B', 'C', 'D'];
      content.innerHTML = `
        <p class="instruction-label">最も適切なものを選びなさい</p>
        <p class="question-text">${q.question}</p>
        <div class="options-list">
          ${q.options.map((o, i) => `
            <button class="option-btn" onclick="App.selectOption(this,${i===q.answer},'${escHtml(q.options[q.answer])}')">
              <span class="option-letter">${letters[i]}</span>${o}
            </button>`).join('')}
        </div>`;
    } else {
      content.innerHTML = `
        <p class="instruction-label">次の問いに答えなさい（キーワードが含まれていれば正解）</p>
        <p class="question-text">${q.question}</p>
        <div class="text-input-wrap">
          <input type="text" id="comp-input" placeholder="答えを入力..." />
        </div>`;
      const inp = document.getElementById('comp-input');
      inp.addEventListener('keydown', e => { if (e.key === 'Enter') checkAnswer(); });
      inp.focus();
      show('btn-check');
    }
  }

  // ---------------------------------------------------------------
  // REWRITE
  // ---------------------------------------------------------------
  function renderRewrite(q, content) {
    // 本文折りたたみHTML（全問題共通、最初は閉じた状態）
    const rwSentences = currentLesson.texts.find(t => t.isRewrite)?.sentences || [];
    const passageAccordion = `
      <div class="passage-accordion">
        <button class="passage-accordion-summary" onclick="this.closest('.passage-accordion').classList.toggle('open')">
          📖 アレンジ版を確認する
        </button>
        <div class="passage-accordion-body">
          ${rwSentences.map(s => `<p class="rewrite-sentence">${s.en}</p>`).join('')}
        </div>
      </div>`;

    if (q.type === 'rewrite_passage') {
      // リライト版本文を全文表示（最初のスライド）
      content.innerHTML = `
        <p class="instruction-label">📖 アレンジ版本文を読みましょう</p>
        <div class="rewrite-passage-card">
          ${rwSentences.map(s => `<p class="rewrite-sentence">${s.en}</p>`).join('')}
        </div>
        <p class="rewrite-passage-note">アレンジ版をよく読んで、次の問題に答えましょう</p>`;
      score++; // 本文読了は常に正解扱い
      showNextOrFinish();

    } else if (q.type === 'truefalse') {
      content.innerHTML = `
        ${passageAccordion}
        <p class="instruction-label">本文の内容に合えば T，違えば F を選びなさい</p>
        <p class="question-text">${q.question}</p>
        <div class="options-list">
          <button class="option-btn" onclick="App.selectOption(this,${q.answer===true},'${q.answer ? 'T（正しい）' : 'F（間違い）'}')">
            <span class="option-letter">T</span>正しい（True）
          </button>
          <button class="option-btn" onclick="App.selectOption(this,${q.answer===false},'${q.answer ? 'T（正しい）' : 'F（間違い）'}')">
            <span class="option-letter">F</span>間違い（False）
          </button>
        </div>`;

    } else if (q.type === 'multiple') {
      const letters = ['A', 'B', 'C', 'D'];
      content.innerHTML = `
        ${passageAccordion}
        <p class="instruction-label">最も適切なものを選びなさい</p>
        <p class="question-text">${q.question}</p>
        <div class="options-list">
          ${q.options.map((o, i) => `
            <button class="option-btn" onclick="App.selectOption(this,${i===q.answer},'${escHtml(q.options[q.answer])}')">
              <span class="option-letter">${letters[i]}</span>${o}
            </button>`).join('')}
        </div>`;

    } else if (q.type === 'underline') {
      const letters = ['A', 'B', 'C', 'D'];
      content.innerHTML = `
        ${passageAccordion}
        <p class="instruction-label">アンダーラインの部分に注意して答えなさい</p>
        <div class="rewrite-underline-passage">${q.passage}</div>
        <p class="question-text">${q.question}</p>
        <div class="options-list">
          ${q.options.map((o, i) => `
            <button class="option-btn" onclick="App.selectOption(this,${i===q.answer},'${escHtml(q.options[q.answer])}')">
              <span class="option-letter">${letters[i]}</span>${o}
            </button>`).join('')}
        </div>`;
    }
  }

  // ---------------------------------------------------------------
  // GRAMMAR RULES
  // ---------------------------------------------------------------
  function renderGrammarRules(q, content) {
    const rules = q.rules || [];
    content.innerHTML = `
      <p class="instruction-label">文法ルールを確認してから「結果を見る」を押してください</p>
      ${rules.map(r => `
        <div class="rule-card">
          <div class="rule-title">${r.title}</div>
          <div class="rule-explanation">${r.explanation}</div>
          <div class="rule-examples">
            ${r.examples.map(ex => `
              <div class="rule-example">
                <div class="rule-example-en">${ex.en}</div>
                <div class="rule-example-ja">${ex.ja}</div>
              </div>`).join('')}
          </div>
        </div>`).join('')}`;
    score = 1;
    show('btn-finish');
  }

  // ---------------------------------------------------------------
  // GRAMMAR FILL
  // ---------------------------------------------------------------
  function renderGrammarFill(q, content) {
    const display = q.sentence.replace('___', '<span class="blank-target">___</span>');
    content.innerHTML = `
      <p class="instruction-label">${q.instruction}</p>
      <p class="question-text">${display}</p>
      ${q.hint ? `<p class="hint-label">💡 ${q.hint}</p>` : ''}
      <div class="text-input-wrap">
        <input type="text" id="gfill-input" placeholder="答えを入力..." autocomplete="off" autocorrect="off" spellcheck="false" />
      </div>`;
    const inp = document.getElementById('gfill-input');
    inp.addEventListener('keydown', e => { if (e.key === 'Enter') checkAnswer(); });
    inp.focus();
    show('btn-check');
  }

  // ---------------------------------------------------------------
  // REARRANGE（並べ替え）
  // ---------------------------------------------------------------
  function renderRearrange(q, content) {
    rearrangeSelected = [];
    rearrangeWords = shuffle([...q.words]);

    content.innerHTML = `
      <p class="instruction-label">${q.instruction}</p>
      <p class="hint-label">🇯🇵 ${q.ja}</p>
      <p style="font-size:.8rem;color:var(--text-muted);margin-bottom:6px">語をタップして並べてください</p>
      <div class="word-bank" id="word-bank">
        ${rearrangeWords.map((w, i) => `
          <span class="word-chip" id="chip-${i}" onclick="App.selectWord(${i},'${escHtml(w)}')">${w}</span>`).join('')}
      </div>
      <p style="font-size:.78rem;color:var(--text-muted);margin:8px 0 4px">並べた順番：（タップして戻す）</p>
      <div class="answer-area" id="rearrange-answer"></div>`;
    show('btn-check');
  }

  function selectWord(idx, word) {
    const chip = document.getElementById(`chip-${idx}`);
    if (!chip || chip.classList.contains('used')) return;
    chip.classList.add('used');
    rearrangeSelected.push({ idx, word });
    renderAnswerArea();
  }

  function removeWord(pos) {
    const removed = rearrangeSelected.splice(pos, 1)[0];
    document.getElementById(`chip-${removed.idx}`)?.classList.remove('used');
    renderAnswerArea();
  }

  function renderAnswerArea() {
    const area = document.getElementById('rearrange-answer');
    if (!area) return;
    area.innerHTML = rearrangeSelected.map((item, i) =>
      `<span class="answer-chip" onclick="App.removeWord(${i})">${item.word}</span>`
    ).join('');
  }

  // ---------------------------------------------------------------
  // COMPOSITION（AI英作文）
  // ---------------------------------------------------------------
  function renderComposition(q, content) {
    content.innerHTML = `
      <p class="instruction-label">次の日本語を英語に訳しなさい</p>
      <p class="composition-prompt">${q.prompt}</p>
      <p class="hint-label">💡 ${q.hint}</p>
      <div class="text-input-wrap">
        <textarea id="comp-textarea" rows="3" placeholder="英文を入力..."></textarea>
      </div>
      <div id="ai-feedback-area"></div>`;
    show('btn-check');
  }

  // ---------------------------------------------------------------
  // CHECK ANSWER
  // ---------------------------------------------------------------
  function checkAnswer() {
    if (answered) return;
    const cat = currentCategory, mode = currentMode;
    const q = questions[qIndex];

    if (cat === 'vocab' && mode === 'spelling') {
      const inp = document.getElementById('spell-input');
      const val = inp.value.trim().toLowerCase();
      const correct = val === q.en.toLowerCase();
      if (correct) score++;
      inp.classList.add(correct ? 'correct' : 'incorrect');
      inp.disabled = true;
      if (!correct) appendReveal(`正解：${q.en}`);
      answered = true;
      showNextOrFinish();

    } else if ((cat === 'reading' && (mode === 'comprehension' || mode === 'rewrite')) && q.type === 'text') {
      checkTextInput('comp-input', q.keywords || [], q.answer);

    } else if (cat === 'grammar' && mode === 'fill') {
      const inp = document.getElementById('gfill-input');
      const val = inp.value.trim().toLowerCase().replace(/\s+/g, ' ');
      const correct = val === q.answer.toLowerCase();
      if (correct) score++;
      inp.classList.add(correct ? 'correct' : 'incorrect');
      inp.disabled = true;
      if (!correct) appendReveal(`正解：${q.answer}`);
      answered = true;
      showNextOrFinish();

    } else if (cat === 'grammar' && mode === 'rearrange') {
      const userAns = rearrangeSelected.map(i => i.word).join(' ').toLowerCase().replace(/\s+/g, ' ');
      const correct  = userAns === q.answer.toLowerCase();
      if (correct) score++;
      const area = document.getElementById('rearrange-answer');
      if (area) area.style.borderColor = correct ? 'var(--cleared-color)' : '#dc2626';
      if (!correct) appendReveal(`正解：${q.answer}`);
      answered = true;
      document.querySelectorAll('.word-chip, .answer-chip').forEach(c => c.style.pointerEvents = 'none');
      showNextOrFinish();

    } else if (cat === 'grammar' && mode === 'composition') {
      const ta = document.getElementById('comp-textarea');
      const val = ta.value.trim();
      if (!val) { ta.focus(); return; }
      ta.disabled = true;
      answered = true;
      runAIFeedback(val, q);

    } else {
      showNextOrFinish();
    }
  }

  function checkTextInput(inputId, keywords, correctAnswer) {
    const inp = document.getElementById(inputId);
    if (!inp) { showNextOrFinish(); return; }
    const val = inp.value.trim().toLowerCase();
    const hit = keywords.some(k => val.includes(k.toLowerCase()));
    if (hit) score++;
    inp.classList.add(hit ? 'correct' : 'incorrect');
    inp.disabled = true;
    if (!hit) appendReveal(`解答例：${correctAnswer}`);
    answered = true;
    showNextOrFinish();
  }

  function appendReveal(text) {
    const content = document.getElementById('quiz-content');
    const box = document.createElement('div');
    box.className = 'answer-reveal';
    box.innerHTML = text;
    content.appendChild(box);
  }

  // ---------------------------------------------------------------
  // AI FEEDBACK
  // ---------------------------------------------------------------
  async function runAIFeedback(userText, q) {
    const area = document.getElementById('ai-feedback-area');
    area.innerHTML = `<div class="ai-feedback-box"><div class="ai-loading">🤖 AIが採点中...</div></div>`;
    hide('btn-check');

    const apiKey = localStorage.getItem('er_api_key');
    const systemPrompt = `You are an English grammar teacher for Japanese high school students.
Evaluate the student's English sentence briefly in Japanese.
Format exactly as:
【評価】〇（正解）/ △（惜しい）/ ×（要修正）
【コメント】（日本語で1〜2文）
【模範解答】${q.modelAnswer}`;

    try {
      const res = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
          'anthropic-version': '2023-06-01',
          'anthropic-dangerous-direct-browser-access': 'true',
        },
        body: JSON.stringify({
          model: 'claude-haiku-4-5-20251001',
          max_tokens: 256,
          system: systemPrompt,
          messages: [{ role: 'user', content: `問題：${q.prompt}\n生徒の解答：${userText}` }],
        }),
      });

      if (!res.ok) throw new Error(res.status);
      const data = await res.json();
      const fb = data.content[0].text;
      if (fb.includes('【評価】〇')) score++;

      area.innerHTML = `
        <div class="ai-feedback-box">
          <h4>🤖 AIフィードバック</h4>
          <div class="ai-feedback-content">${escHtml(fb)}</div>
        </div>`;
    } catch {
      score++;
      area.innerHTML = `
        <div class="ai-feedback-box">
          <h4>模範解答</h4>
          <div class="ai-feedback-content">${escHtml(q.modelAnswer)}</div>
          <p style="font-size:.78rem;color:#dc2626;margin-top:6px">※ AI接続エラー。模範解答と比較してください。</p>
        </div>`;
    }
    showNextOrFinish();
  }

  // ---------------------------------------------------------------
  // NAVIGATION
  // ---------------------------------------------------------------
  function showNextOrFinish() {
    hide('btn-check');
    if (qIndex < questions.length - 1) show('btn-next');
    else show('btn-finish');
  }

  function nextQuestion() {
    qIndex++;
    renderQuestion();
  }

  function updateProgressBar() {
    const total   = questions.length;
    const current = qIndex + 1;
    const pct     = total > 0 ? Math.round((qIndex / total) * 100) : 0;
    const fill = document.getElementById('quiz-progress-bar');
    if (fill) fill.style.width = pct + '%';
    const txt = document.getElementById('quiz-progress-text');
    if (txt) txt.textContent = `${current} / ${total}`;
    const sc = document.getElementById('current-score');
    if (sc) sc.textContent = score;
    const tot = document.getElementById('total-questions');
    if (tot) tot.textContent = total;
  }

  function finishMode() {
    const total   = questions.length;
    const pct     = total > 0 ? Math.round((score / total) * 100) : 100;
    const cleared = pct === 100;

    // アクティビティを記録（ローカル＋クラウド）
    saveRecord(currentLesson.id, currentCategory, currentMode, score, total, pct);
    cloudLogActivity(currentLesson.id, currentCategory, currentMode, score, total, pct);

    let chain = null;
    if (cleared) {
      chain = markCleared(currentLesson.id, currentCategory, currentMode);
      cloudSaveCleared(currentLesson.id, currentCategory, currentMode);
    }

    const emoji = pct === 100 ? '🎉' : pct >= 80 ? '👍' : '📚';
    document.getElementById('result-emoji').textContent = emoji;
    document.getElementById('result-title').textContent = MODE_LABELS[currentCategory][currentMode];
    document.getElementById('result-score').textContent = `${score} / ${total}（${pct}%）`;
    document.getElementById('result-score').style.color  = pct === 100 ? 'var(--cleared-color)' : pct >= 80 ? 'var(--primary)' : '#dc2626';

    const msgs = {
      100: '満点クリア！素晴らしい！次のモードが解放されました！',
      80:  'あと少し！満点（100%）でクリアになります。もう一度挑戦しよう！',
      0:   'もう一度復習してから再挑戦しよう！満点（100%）でクリアになります。',
    };
    document.getElementById('result-message').textContent = pct === 100 ? msgs[100] : pct >= 80 ? msgs[80] : msgs[0];

    const unlockEl = document.getElementById('result-unlock');
    if (cleared && chain?.next) {
      const { category, mode } = chain.next;
      unlockEl.textContent = `🔓 「${MODE_LABELS[category][mode]}」が解放されました！`;
      unlockEl.style.display = 'block';
    } else if (cleared && chain?.completesSection) {
      const nextSection = { vocab: '本文モード', reading: '文法モード', grammar: null };
      const next = nextSection[chain.completesSection];
      unlockEl.textContent = next
        ? `🔓 ${SECTION_LABELS[chain.completesSection]}コンプリート！「${next}」が解放されました！`
        : `🏆 ${SECTION_LABELS[chain.completesSection]}コンプリート！全モード制覇おめでとう！`;
      unlockEl.style.display = 'block';
    } else {
      unlockEl.style.display = 'none';
    }

    showScreen('screen-result');
  }

  function retryMode() { startMode(currentCategory, currentMode); }

  // ---------------------------------------------------------------
  // SETTINGS PANEL
  // ---------------------------------------------------------------
  function openSettings() {
    // ユーザー表示
    const userStatus = document.getElementById('settings-user-status');
    if (userStatus) userStatus.textContent = currentUser.cls
      ? `✅ ${currentUser.cls}・${currentUser.num}番`
      : '未ログイン';
    // API Key
    const key = localStorage.getItem('er_api_key');
    const keyStatus = document.getElementById('api-key-status');
    if (keyStatus) keyStatus.textContent = key ? '✅ 設定済み' : '未設定';
    const inp = document.getElementById('api-key-input');
    if (inp) inp.value = key || '';
    // GS URL
    const gsUrl = getGsUrl();
    const gsStatus = document.getElementById('gs-url-status');
    if (gsStatus) gsStatus.textContent = gsUrl ? '✅ 設定済み' : '未設定';
    const gsInp = document.getElementById('gs-url-input');
    if (gsInp) gsInp.value = gsUrl;
    document.getElementById('modal-settings').style.display = 'flex';
  }

  function saveGsUrl() {
    const val = (document.getElementById('gs-url-input').value || '').trim();
    if (!val.startsWith('https://script.google.com')) {
      showToast('正しいApps Script URLを入力してください'); return;
    }
    localStorage.setItem('er_gs_url', val);
    const s = document.getElementById('gs-url-status');
    if (s) s.textContent = '✅ 設定済み';
    showToast('Apps Script URLを保存しました');
  }

  function clearGsUrl() {
    localStorage.removeItem('er_gs_url');
    const inp = document.getElementById('gs-url-input');
    if (inp) inp.value = '';
    const s = document.getElementById('gs-url-status');
    if (s) s.textContent = '未設定';
    showToast('Apps Script URLを削除しました');
  }

  function closeSettings() {
    document.getElementById('modal-settings').style.display = 'none';
  }

  function saveApiKey() {
    const val = document.getElementById('api-key-input').value.trim();
    if (val) {
      localStorage.setItem('er_api_key', val);
      const s = document.getElementById('api-key-status');
      if (s) s.textContent = '✅ 設定済み';
      showToast('APIキーを保存しました');
    }
  }

  function clearApiKey() {
    localStorage.removeItem('er_api_key');
    const inp = document.getElementById('api-key-input');
    if (inp) inp.value = '';
    const s = document.getElementById('api-key-status');
    if (s) s.textContent = '未設定';
    showToast('APIキーを削除しました');
  }

  function confirmResetLesson() {
    if (!currentLesson) return;
    if (!confirm(`「${currentLesson.title}」の進捗をリセットしますか？\nクリア済みのモードがすべて未クリアに戻ります。`)) return;
    resetLessonProgress(currentLesson.id);
    closeSettings();
    showModeMap();
    showToast('進捗をリセットしました');
  }

  // ---------------------------------------------------------------
  // API KEY MODAL（旧 → 設定パネルに統合）
  // ---------------------------------------------------------------
  let pendingCategory = null, pendingMode = null;

  function openApiKeyModal(category, mode) {
    pendingCategory = category;
    pendingMode     = mode;
    openSettings();
  }

  function closeApiKeyModal() { closeSettings(); }

  function saveApiKeyAndStart() {
    saveApiKey();
    closeSettings();
    if (pendingCategory) {
      startMode(pendingCategory, pendingMode);
      pendingCategory = pendingMode = null;
    }
  }

  // ---------------------------------------------------------------
  // FEEDBACK SCREEN
  // ---------------------------------------------------------------
  function showFeedback() {
    const label = document.getElementById('feedback-user-label');
    if (label) label.textContent = currentUser.cls
      ? `${currentUser.cls}・${currentUser.num}番`
      : '';
    renderFeedback();
    showScreen('screen-feedback');
  }

  function renderFeedback() {
    const content = document.getElementById('feedback-content');
    const records = loadRecords();
    const progress = {};
    LESSONS.forEach(l => { progress[l.id] = loadProgress(l.id); });

    if (records.length === 0) {
      content.innerHTML = `
        <div class="feedback-empty">
          <div style="font-size:3rem;margin-bottom:12px">📊</div>
          <p>まだ記録がありません。<br>問題に取り組むと記録が表示されます！</p>
        </div>`;
      return;
    }

    // モードごとの最新スコアと挑戦回数を集計
    const stats = {}; // key: `${lessonId}_${cat}_${mode}`
    records.forEach(r => {
      const k = `${r.lessonId}_${r.category}_${r.mode}`;
      if (!stats[k]) stats[k] = { attempts: 0, lastPct: 0, bestPct: 0, lessonId: r.lessonId, category: r.category, mode: r.mode };
      stats[k].attempts++;
      stats[k].lastPct = r.pct;
      stats[k].bestPct = Math.max(stats[k].bestPct, r.pct);
    });

    // 全体達成率
    const allPcts = Object.values(stats).map(s => s.lastPct);
    const avgPct = allPcts.length ? Math.round(allPcts.reduce((a, b) => a + b, 0) / allPcts.length) : 0;

    // 弱点（直近スコア<80%）
    const weakItems = Object.values(stats).filter(s => s.lastPct < 80).sort((a, b) => a.lastPct - b.lastPct);

    let html = '';

    // 総合サマリー
    html += `
      <div class="feedback-summary-bar">
        <div class="feedback-summary-pct">${avgPct}%</div>
        <div>
          <div style="font-weight:800;font-size:.93rem">全体の平均スコア</div>
          <div class="feedback-summary-label">${records.length}回 取り組んだ記録があります</div>
        </div>
      </div>`;

    // 弱点セクション
    if (weakItems.length > 0) {
      html += `
        <div class="feedback-weak-section">
          <div class="feedback-weak-title">⚠️ 苦手な単元（直近スコア 80%未満）</div>
          <div class="feedback-weak-list">
            ${weakItems.map(s => `
              <span class="feedback-weak-chip"
                    onclick="App.selectLesson(${s.lessonId});App.startMode('${s.category}','${s.mode}')">
                L${s.lessonId} ${MODE_LABELS[s.category][s.mode]}
                <span style="opacity:.7"> ${s.lastPct}%</span>
              </span>`).join('')}
          </div>
        </div>`;
    }

    // レッスン別詳細
    LESSONS.forEach(lesson => {
      const lessonHasData = Object.values(stats).some(s => s.lessonId === lesson.id);
      if (!lessonHasData) return;

      const prog = progress[lesson.id];
      const clearedCount = Object.values(CARD_ID).flatMap(m => Object.keys(m)).filter((_, i) => {
        const cats = Object.keys(CARD_ID);
        const cat = cats[Math.floor(i / 4)];
        return false; // simplified — just show mode rows
      }).length;

      html += `<div class="feedback-lesson-block">`;
      html += `<div class="feedback-lesson-header">📚 ${lesson.title} <span style="opacity:.75;font-weight:500;font-size:.83rem">— ${lesson.subtitle}</span></div>`;

      for (const cat of Object.keys(CARD_ID)) {
        for (const mode of Object.keys(CARD_ID[cat])) {
          const k = `${lesson.id}_${cat}_${mode}`;
          const s = stats[k];
          if (!s) continue;
          const cls = s.lastPct >= 80 ? 'high' : s.lastPct >= 60 ? 'mid' : 'low';
          html += `
            <div class="feedback-mode-row">
              <div class="feedback-mode-name">${MODE_LABELS[cat][mode]}</div>
              <div class="feedback-bar-wrap">
                <div class="feedback-bar-fill ${cls}" style="width:${s.lastPct}%"></div>
              </div>
              <div class="feedback-pct ${cls}">${s.lastPct}%</div>
              <div class="feedback-count">${s.attempts}回</div>
              <button class="feedback-retry-btn"
                      onclick="App.selectLesson(${lesson.id});App.startMode('${cat}','${mode}')">
                もう一度
              </button>
            </div>`;
        }
      }
      html += `</div>`;
    });

    content.innerHTML = html;
  }

  // ---------------------------------------------------------------
  // TOAST
  // ---------------------------------------------------------------
  function showToast(msg) {
    let t = document.getElementById('toast');
    if (!t) {
      t = document.createElement('div');
      t.id = 'toast';
      document.body.appendChild(t);
    }
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(t._tid);
    t._tid = setTimeout(() => t.classList.remove('show'), 2200);
  }

  // ---------------------------------------------------------------
  // UTILS
  // ---------------------------------------------------------------
  function show(id) { const el = document.getElementById(id); if (el) el.style.display = ''; }
  function hide(id) { const el = document.getElementById(id); if (el) el.style.display = 'none'; }

  function escHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;')
      .replace(/>/g, '&gt;').replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // ---------------------------------------------------------------
  // KEYBOARD SHORTCUTS
  // ---------------------------------------------------------------
  function initKeyboard() {
    document.addEventListener('keydown', e => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      const next = document.getElementById('btn-next');
      const fin  = document.getElementById('btn-finish');
      if (e.key === 'ArrowRight' || e.key === 'n') {
        if (next?.style.display !== 'none') nextQuestion();
        else if (fin?.style.display !== 'none') finishMode();
      }
      if (e.key === ' ') {
        const fc = document.getElementById('fc');
        if (fc) { e.preventDefault(); fc.classList.toggle('flipped'); }
      }
    });
  }

  // ---------------------------------------------------------------
  // INIT
  // ---------------------------------------------------------------
  function init() {
    initKeyboard();
    // 保存済みユーザーがいればそのままレッスン選択へ
    const saved = localStorage.getItem('er_user');
    if (saved) {
      try {
        const u = JSON.parse(saved);
        if (u.cls && u.num) {
          currentUser = u;
          showLessonSelect();
          return;
        }
      } catch { /* 無視 */ }
    }
    showLogin();
  }

  return {
    init,
    // 画面遷移
    showLessonSelect, selectLesson, showModeMap, showFeedback,
    // ログイン
    selectClass, submitLogin, logout,
    // クイズ
    startMode,
    flashcardEval, selectOption, revealTranslation,
    selectWord, removeWord,
    checkAnswer, nextQuestion, finishMode, retryMode,
    // 設定
    openSettings, closeSettings,
    saveApiKey, clearApiKey, saveApiKeyAndStart,
    saveGsUrl, clearGsUrl,
    confirmResetLesson,
    // 旧モーダル互換
    openApiKeyModal, closeApiKeyModal,
  };
})();

document.addEventListener('DOMContentLoaded', () => App.init());
