/* =====================================================================
   英語復習ツール — Lesson Data
   教科書: Revised COMET English Communication I
   ===================================================================== */

const LESSONS = [

  // ================================================================
  // LESSON 01  From the Window of the Shinkansen
  // ================================================================
  {
    id: 1,
    title: "Lesson 1",
    subtitle: "From the Window of the Shinkansen",

    // ------ 単語 ------
    vocabulary: [
      { en: "travel",     ja: "旅行する",           example: "I ___ by Shinkansen from Osaka to Tokyo.",           exampleAnswer: "traveled",  exampleJa: "私は新幹線で大阪から東京へ旅行しました。" },
      { en: "window",     ja: "窓",                 example: "From the ___, I enjoyed many wonderful views.",       exampleAnswer: "window",    exampleJa: "窓から、すばらしい景色をたくさん楽しみました。" },
      { en: "wonderful",  ja: "すばらしい",          example: "From the window, I enjoyed many ___ views.",         exampleAnswer: "wonderful", exampleJa: "窓から、すばらしい景色をたくさん楽しみました。" },
      { en: "view",       ja: "景色",               example: "From the window, I enjoyed many wonderful ___.",      exampleAnswer: "views",     exampleJa: "窓から、すばらしい景色をたくさん楽しみました。" },
      { en: "tower",      ja: "塔",                 example: "In Kyoto, I saw the five-story ___, Gojunoto.",      exampleAnswer: "tower",     exampleJa: "京都では、五重塔（ごじゅうのとう）を見ました。" },
      { en: "castle",     ja: "城",                 example: "On the way to Nagoya, there was a ___.",             exampleAnswer: "castle",    exampleJa: "名古屋へ向かう途中にお城がありました。" },
      { en: "check",      ja: "～を確認する",        example: "I ___ the map and found it was Kiyosu Castle.",      exampleAnswer: "checked",   exampleJa: "地図を確認したら、それは清洲城でした。" },
      { en: "map",        ja: "地図",               example: "I checked the ___ to find the name of the castle.",  exampleAnswer: "map",       exampleJa: "地図を確認して、お城の名前を調べました。" },
      { en: "also",       ja: "～もまた，さらに",    example: "I ___ saw Mt. Fuji in Shizuoka.",                   exampleAnswer: "also",      exampleJa: "静岡では富士山も見ました。" },
      { en: "beautiful",  ja: "美しい",             example: "Mt. Fuji was so ___!",                               exampleAnswer: "beautiful", exampleJa: "富士山はとても美しかったです！" },
      { en: "turn",       ja: "順番",               example: "Now it's your ___.",                                exampleAnswer: "turn",      exampleJa: "今度はあなたの番です。" },
      { en: "experience", ja: "経験",               example: "Tell us about your ___ during vacation.",            exampleAnswer: "experience",exampleJa: "休みの間の経験について話してください。" },
      { en: "vacation",   ja: "休暇，休み",          example: "Tell us about your experiences during ___.",         exampleAnswer: "vacation",  exampleJa: "休みの間の経験について話してください。" },
    ],

    // ------ 本文 ------
    texts: [
      {
        id: "original",
        label: "本文",
        isRewrite: false,
        sentences: [
          { en: "I traveled by Shinkansen from Osaka to Tokyo.",       ja: "私は新幹線で大阪から東京へ旅行しました。" },
          { en: "From the window, I enjoyed many wonderful views.",    ja: "窓から，すばらしい景色をたくさん楽しみました。" },
          { en: "In Kyoto, I saw the five-story tower, Gojunoto.",    ja: "京都では，五重塔を見ました。" },
          { en: "On the way to Nagoya, there was a castle.",          ja: "名古屋へ向かう途中にお城がありました。" },
          { en: "I checked the map, and it was Kiyosu Castle.",       ja: "地図を確認したら，それは清洲城でした。" },
          { en: "I also saw Mt. Fuji in Shizuoka.",                  ja: "静岡では富士山も見ました。" },
          { en: "It was so beautiful!",                               ja: "それはとても美しかったです！" },
          { en: "I took pictures of it.",                             ja: "私はそれの写真を撮りました。" },
          { en: "Now it's your turn.",                                ja: "今度はみなさんの番です。" },
          { en: "Tell us about your experiences during vacation.",    ja: "休みの間の経験について話してください。" },
        ],
      },
      {
        id: "rewrite",
        label: "アレンジ版",
        isRewrite: true,
        sentences: [
          { en: "Ms. Jones is an English teacher from Australia.",                                                           ja: "ジョーンズ先生はオーストラリア出身の英語教師です。" },
          { en: "Last month, she took a Shinkansen trip from Osaka to Tokyo.",                                               ja: "先月，彼女は新幹線で大阪から東京への旅をしました。" },
          { en: "She sat by the window and enjoyed the beautiful scenery along the way.",                                    ja: "彼女は窓際に座り，道中の美しい景色を楽しみました。" },
          { en: "When the Shinkansen passed through Kyoto, she could see Gojunoto, a famous five-story tower.",             ja: "新幹線が京都を通過したとき，有名な五重塔「五重塔」が見えました。" },
          { en: "Between Kyoto and Nagoya, she was surprised to spot an old castle.",                                        ja: "京都と名古屋の間で，彼女は古いお城を見つけて驚きました。" },
          { en: "She checked her map and discovered it was Kiyosu Castle, built over 500 years ago.",                       ja: "地図を確認すると，それは500年以上前に建てられた清洲城だとわかりました。" },
          { en: "The most exciting moment came in Shizuoka, when Mt. Fuji suddenly appeared outside her window.",           ja: "一番興奮した瞬間は静岡で，富士山が突然窓の外に現れたときです。" },
          { en: "She thought it was the most beautiful mountain she had ever seen, so she took many photos.",               ja: "彼女はこれまで見た中で最も美しい山だと思い，たくさん写真を撮りました。" },
          { en: "The whole trip took about two and a half hours, but Ms. Jones felt it was too short.",                     ja: "旅全体で約2時間半かかりましたが，ジョーンズ先生には短すぎると感じました。" },
          { en: "She says she wants to travel by Shinkansen again someday.",                                                 ja: "彼女はいつかまた新幹線で旅したいと言っています。" },
        ],
      },
    ],

    // ------ 内容確認問題（TF問題集・Q&A集・定期考査よりアレンジ） ------
    comprehensionQuestions: [
      // TF問題集より
      { question: "Ms. Jones went from Osaka to Tokyo by Shinkansen.", type: "truefalse", answer: true },
      { question: "Ms. Jones took a plane from Osaka to Tokyo.", type: "truefalse", answer: false },
      { question: "On the Shinkansen, Ms. Jones enjoyed views from the window.", type: "truefalse", answer: true },
      { question: "Because it rained, Ms. Jones did not enjoy the views very much.", type: "truefalse", answer: false },
      { question: "Ms. Jones read some books about Japan on the Shinkansen.", type: "truefalse", answer: false },
      { question: "In Kyoto, Ms. Jones saw Gojunoto.", type: "truefalse", answer: true },
      { question: "Ms. Jones saw a castle on the way to Nagoya.", type: "truefalse", answer: true },
      { question: "The name of the castle was not on the map.", type: "truefalse", answer: false },
      { question: "Ms. Jones asked her friend for the name of the castle.", type: "truefalse", answer: false },
      { question: "The name of the castle was Kiyosu Castle.", type: "truefalse", answer: true },
      { question: "In Shizuoka, Ms. Jones saw Mt. Fuji and took pictures of it.", type: "truefalse", answer: true },
      { question: "Because Mt. Fuji was beautiful, Ms. Jones drew a picture of it.", type: "truefalse", answer: false },
      { question: "Mt. Fuji looked beautiful to Ms. Jones.", type: "truefalse", answer: true },
      // 定期考査用問題よりアレンジ
      { question: "Ms. Jones liked her trip on the Shinkansen.", type: "truefalse", answer: true },
      { question: "Ms. Jones saw the five-story tower in Shizuoka.", type: "truefalse", answer: false },
      // Q&A集よりアレンジ（選択式）
      {
        question: "How did Ms. Jones travel from Osaka to Tokyo?",
        type: "multiple",
        options: ["By plane", "By Shinkansen", "By bus", "By car"],
        answer: 1,
      },
      {
        question: "What did Ms. Jones see in Kyoto?",
        type: "multiple",
        options: ["Kiyosu Castle", "Mt. Fuji", "The five-story tower, Gojunoto", "A dictionary"],
        answer: 2,
      },
      {
        question: "How did Ms. Jones know the name of the castle?",
        type: "multiple",
        options: ["She asked her friend.", "She checked the map.", "She looked it up online.", "She already knew it."],
        answer: 1,
      },
      {
        question: "ジョーンズ先生が大阪から東京に行くまでに見たものを英語で３つ答えなさい。",
        type: "text",
        answer: "Gojunoto, Kiyosu Castle, Mt. Fuji",
        keywords: ["gojunoto", "kiyosu", "fuji"],
      },
      {
        question: "What did Ms. Jones do when she saw Mt. Fuji?",
        type: "multiple",
        options: ["She drew a picture.", "She took pictures of it.", "She wrote about it.", "She called her friend."],
        answer: 1,
      },
    ],

    // ------ アレンジ版問題（英問英答） ------
    rewriteQuestions: [
      { type: "truefalse", question: "Ms. Jones is an English teacher from Australia.", answer: true },
      { type: "truefalse", question: "Ms. Jones traveled from Tokyo to Osaka by Shinkansen.", answer: false },
      { type: "multiple",
        question: "What could Ms. Jones see when the Shinkansen passed through Kyoto?",
        options: ["Kiyosu Castle", "Mt. Fuji", "Gojunoto, a famous five-story tower", "A rice field"],
        answer: 2 },
      { type: "underline",
        passage: "She checked her map and discovered it was Kiyosu Castle, <u>built over 500 years ago</u>.",
        question: "What does the underlined phrase tell us about Kiyosu Castle?",
        options: ["It is a very new building", "It is a very old castle", "It was built by Ms. Jones", "It is located in Kyoto"],
        answer: 1 },
      { type: "truefalse", question: "Ms. Jones thought Mt. Fuji was the most beautiful mountain she had ever seen.", answer: true },
      { type: "multiple",
        question: "How did Ms. Jones feel about the Shinkansen trip?",
        options: ["She thought it was too long.", "She felt it was too short.", "She was bored during the trip.", "She was scared of the speed."],
        answer: 1 },
    ],

    // ------ 文法 ------
    grammar: {
      rules: [
        {
          title: "過去形① — be動詞",
          explanation: "過去の状態を表すときは be動詞を過去形にします。\nam / is → was　　are → were\n\n【否定】was / were not（wasn't / weren't）\n【疑問】Was / Were ＋ 主語 ～?",
          examples: [
            { en: "It was so beautiful!", ja: "それはとても美しかったです！" },
            { en: "Emi was in Spain last year.", ja: "エミは去年スペインにいました。" },
            { en: "Were you tired yesterday?", ja: "あなたはきのう疲れていましたか。" },
            { en: "Bill wasn't at home last Sunday.", ja: "ビルはこの前の日曜日に家にいませんでした。" },
          ],
        },
        {
          title: "過去形② — 一般動詞",
          explanation: "過去の動作を表すときは動詞を過去形にします。\n規則変化：play → played　study → studied\n不規則変化：go → went　see → saw　take → took\n\n【否定】did not（didn't）＋ 動詞の原形\n【疑問】Did ＋ 主語 ＋ 動詞の原形 ～?",
          examples: [
            { en: "I traveled by Shinkansen from Osaka to Tokyo.", ja: "私は新幹線で大阪から東京へ旅行しました。" },
            { en: "I checked the map, and it was Kiyosu Castle.", ja: "地図を確認したら，それは清洲城でした。" },
            { en: "I didn't do my homework yesterday.", ja: "きのう私は宿題をしませんでした。" },
            { en: "Did Mao call you this morning?", ja: "マオは今朝あなたに電話しましたか。" },
          ],
        },
      ],

      // 提出用レポート問題10・ベーシックノート・定期考査よりアレンジ
      fillBlanks: [
        { instruction: "( )内から適切なものを選びなさい。", sentence: "ケンはきのうサッカーをしました。\nKen ___ soccer yesterday.  ( plays / played )", answer: "played", hint: "「きのう」→ 過去形。play の過去形は played" },
        { instruction: "( )内から適切なものを選びなさい。", sentence: "サキは今朝学校に行きました。\nSaki ___ to school this morning.  ( goes / went )", answer: "went", hint: "go の過去形は went（不規則変化）" },
        { instruction: "( )内から適切なものを選びなさい。", sentence: "あのTシャツはかわいい。\nThat T-shirt ___ cute.  ( is / was )", answer: "is", hint: "現在の状態 → 現在形の is" },
        { instruction: "( )に適切な語を入れなさい。", sentence: "あなたは先週忙しかったですか。\n___ you busy last week?", answer: "Were", hint: "be動詞の過去疑問文：Were / Was ＋ 主語？" },
        { instruction: "( )に適切な語を入れなさい。", sentence: "きのう私は宿題をしませんでした。\nI ___ do my homework yesterday.", answer: "didn't", hint: "一般動詞の過去否定：didn't ＋ 動詞の原形" },
        { instruction: "( )に適切な語を入れなさい。", sentence: "マオは今朝あなたに電話しましたか。\n___ Mao call you this morning?", answer: "Did", hint: "一般動詞の過去疑問文：Did ＋ 主語 ＋ 動詞の原形？" },
        { instruction: "( )内から適切なものを選びなさい。", sentence: "ビルはこの前の日曜日に家にいませんでした。\nBill ___ at home last Sunday.  ( didn't / wasn't )", answer: "wasn't", hint: "「家にいなかった」→ be動詞の否定 wasn't" },
        { instruction: "( )内から適切なものを選びなさい。", sentence: "あなたは英語を話しますか。\n___ you speak English?  ( Do / Did )", answer: "Do", hint: "「話しますか」は現在の習慣 → Do" },
        { instruction: "( )内から適切なものを選びなさい。", sentence: "木のそばに古い自転車が１台ありました。\nThere ___ an old bike by the tree.  ( is / was )", answer: "was", hint: "「ありました」→ 過去 was" },
        { instruction: "( )に適切な語を入れなさい。", sentence: "エマは今朝，公園に行きました。\nEmma ___ to the park this morning.", answer: "went", hint: "go の過去形は went" },
        { instruction: "( )に適切な語を入れなさい。", sentence: "ケンタとトムはきのう忙しかった。\nKenta and Tom ___ busy yesterday.", answer: "were", hint: "複数の主語 → were" },
        { instruction: "( )に適切な語を入れなさい。（2語）", sentence: "アヤはこの前の日曜日にテニスをしましたか。\n___ Aya ___ tennis last Sunday?", answer: "Did play", hint: "Did ＋ 主語 ＋ 動詞の原形？" },
      ],

      // 定期考査・提出用レポートよりアレンジ
      rearrange: [
        { instruction: "語句を並べ替えて正しい英文を作りなさい。", words: ["traveled", "I", "by", "Shinkansen", "from", "Osaka", "to", "Tokyo"], answer: "i traveled by shinkansen from osaka to tokyo", ja: "私は新幹線で大阪から東京へ旅行しました。" },
        { instruction: "語句を並べ替えて正しい英文を作りなさい。", words: ["checked", "I", "the", "map", "and", "it", "was", "Kiyosu", "Castle"], answer: "i checked the map and it was kiyosu castle", ja: "地図を確認したら，それは清洲城でした。" },
        { instruction: "語句を並べ替えて正しい英文を作りなさい。", words: ["Were", "you", "busy", "last", "week"], answer: "were you busy last week", ja: "あなたは先週忙しかったですか。" },
        { instruction: "語句を並べ替えて正しい英文を作りなさい。", words: ["Did", "Aya", "play", "tennis", "last", "Sunday"], answer: "did aya play tennis last sunday", ja: "アヤはこの前の日曜日にテニスをしましたか。" },
        { instruction: "語句を並べ替えて正しい英文を作りなさい。", words: ["saw", "I", "Mt.", "Fuji", "also", "in", "Shizuoka"], answer: "i also saw mt. fuji in shizuoka", ja: "静岡では富士山も見ました。" },
        { instruction: "語句を並べ替えて正しい英文を作りなさい。", words: ["Nagoya", "On", "the", "way", "to", "there", "was", "a", "castle"], answer: "on the way to nagoya there was a castle", ja: "名古屋へ向かう途中にお城がありました。" },
      ],

      // 定期考査問題7・ベーシックノートTRY!よりアレンジ
      composition: [
        { prompt: "「私はきのう図書館で勉強しました」という内容の英文を書きなさい。", hint: "study → studied / in the library / yesterday", modelAnswer: "I studied in the library yesterday." },
        { prompt: "「新幹線の窓から，私は富士山を見ました」という内容の英文を書きなさい。", hint: "From the window of the Shinkansen, / see → saw", modelAnswer: "From the window of the Shinkansen, I saw Mt. Fuji." },
        { prompt: "「アキは今朝バスに乗り遅れました」という内容の英文を書きなさい。", hint: "miss → missed / the bus / this morning", modelAnswer: "Aki missed the bus this morning." },
        { prompt: "「あなたはこの前の週末に何をしましたか」という疑問文を書きなさい。", hint: "What / did / do / last weekend？", modelAnswer: "What did you do last weekend?" },
      ],
    },
  },

  // ================================================================
  // LESSON 02  Miniature Art: The World of Tanaka Tatsuya
  // ================================================================
  {
    id: 2,
    title: "Lesson 2",
    subtitle: "Miniature Art: The World of Tanaka Tatsuya",

    // ------ 単語 ------
    vocabulary: [
      { en: "children",   ja: "子どもたち",         example: "___ are climbing up a tree with a ladder.",         exampleAnswer: "Children",   exampleJa: "子どもたちがはしごを使って木に登っています。" },
      { en: "climb",      ja: "～に登る",           example: "Children are ___ing up a tree with a ladder.",      exampleAnswer: "climbing",   exampleJa: "子どもたちがはしごを使って木に登っています。" },
      { en: "ladder",     ja: "はしご",             example: "Children are climbing up a tree with a ___.",       exampleAnswer: "ladder",     exampleJa: "子どもたちははしごを使って木に登っています。" },
      { en: "broccoli",   ja: "ブロッコリー",        example: "Wait, it's not a tree. It's ___!",                  exampleAnswer: "broccoli",   exampleJa: "待って、それは木じゃない。ブロッコリーです！" },
      { en: "dictionary", ja: "辞書",               example: "No, the runners are on a ___!",                     exampleAnswer: "dictionary", exampleJa: "いいえ、ランナーたちは辞書の上にいます！" },
      { en: "creative",   ja: "創造的な",           example: "Tanaka Tatsuya made these ___ miniature artworks.", exampleAnswer: "creative",   exampleJa: "田中達也はこれらの創造的なミニチュア芸術作品を作りました。" },
      { en: "miniature",  ja: "ミニチュアの",        example: "He made these creative ___ artworks.",              exampleAnswer: "miniature",  exampleJa: "彼はこれらの創造的なミニチュア芸術作品を作りました。" },
      { en: "artwork",    ja: "芸術作品",           example: "He made these creative miniature ___.",             exampleAnswer: "artworks",   exampleJa: "彼はこれらの創造的なミニチュア芸術作品を作りました。" },
      { en: "everyday",   ja: "日常の，ありふれた",  example: "He uses ___ objects in unique ways.",               exampleAnswer: "everyday",   exampleJa: "彼は日常的な物を独特な方法で使います。" },
      { en: "object",     ja: "物",                 example: "He uses everyday ___ in unique ways.",              exampleAnswer: "objects",    exampleJa: "彼は日常的な物を独特な方法で使います。" },
      { en: "unique",     ja: "独特の",             example: "He uses everyday objects in ___ ways.",             exampleAnswer: "unique",     exampleJa: "彼は日常的な物を独特な方法で使います。" },
      { en: "feel",       ja: "～と感じる",          example: "He ___ happy when he comes up with good ideas.",   exampleAnswer: "feels",      exampleJa: "よいアイデアが浮かんだとき、彼は幸せな気持ちになります。" },
      { en: "idea",       ja: "考え，アイデア",      example: "He feels happy when he comes up with good ___.",   exampleAnswer: "ideas",      exampleJa: "よいアイデアが浮かんだとき、彼は幸せな気持ちになります。" },
    ],

    // ------ 本文 ------
    texts: [
      {
        id: "original",
        label: "本文",
        isRewrite: false,
        sentences: [
          { en: "Children are climbing up a tree with a ladder.",           ja: "子どもたちがはしごを使って木登りをしています。" },
          { en: "Wait, it's not a tree.",                                   ja: "待って，それは木ではありません。" },
          { en: "It's broccoli!",                                           ja: "それはブロッコリーです！" },
          { en: "Now, look at the four runners.",                           ja: "では，４人のランナーを見てください。" },
          { en: "Where are they?",                                          ja: "彼らはどこにいるのでしょう？" },
          { en: "Are they running on a track?",                            ja: "彼らはトラックを走っているのでしょうか？" },
          { en: "No, they are on a dictionary!",                            ja: "いいえ，彼らは辞書の上にいるのです！" },
          { en: "Tanaka Tatsuya made these creative miniature artworks.",   ja: "田中達也がこれらの創造的なミニチュアの芸術作品を作りました。" },
          { en: "He uses everyday objects in unique ways.",                 ja: "彼は日常にある物を独特な方法で使います。" },
          { en: "He feels happy when he comes up with good ideas.",         ja: "よいアイデアを思いついたとき，彼は幸せを感じます。" },
          { en: "He really enjoys his work.",                              ja: "彼は本当に自分の仕事を楽しんでいます。" },
        ],
      },
      {
        id: "rewrite",
        label: "アレンジ版",
        isRewrite: true,
        sentences: [
          { en: "Have you ever seen a photo of tiny people climbing what looks like a giant tree?",                         ja: "巨大な木のように見えるものをよじ登る小さな人々の写真を見たことがありますか？" },
          { en: "Surprise — the \"tree\" is actually a piece of broccoli!",                                                ja: "驚くことに，その「木」は実はブロッコリーです！" },
          { en: "This is the kind of art that Tanaka Tatsuya creates.",                                                    ja: "これが田中達也が作る芸術作品の一例です。" },
          { en: "He is a miniature artist from Japan, and his photos have become famous all over the world.",              ja: "彼は日本出身のミニチュアアーティストで，その写真は世界中で有名になっています。" },
          { en: "Tanaka uses ordinary things from daily life — vegetables, books, and other household items.",             ja: "田中は野菜，本，その他の日用品など，日常生活の身近なものを使います。" },
          { en: "He arranges them in clever ways to make them look like a completely different world.",                    ja: "それらを巧みに組み合わせて，全く別の世界のように見せます。" },
          { en: "For example, four tiny runners race across the pages of a dictionary as if it were a running track.",    ja: "例えば，小さな4人のランナーが，まるでトラックのように辞書のページを走ります。" },
          { en: "Tanaka says that he feels the happiest when a new creative idea suddenly comes to his mind.",             ja: "田中は，新しい創造的なアイデアが突然浮かんだとき，一番幸せだと言っています。" },
          { en: "Since he started sharing his work online, millions of people have enjoyed his unique view of the world.", ja: "作品をオンラインで発信し始めてから，何百万人もの人がその独特な世界観を楽しんでいます。" },
          { en: "His art shows us that amazing things can come from the simplest everyday objects.",                       ja: "彼の芸術は，最もシンプルな日常の物から驚くべきものが生まれることを教えてくれます。" },
        ],
      },
    ],

    // ------ 内容確認問題（TF問題集・定期考査よりアレンジ） ------
    comprehensionQuestions: [
      // TF問題集より
      { question: "Children are running in the photo on the left.", type: "truefalse", answer: false },
      { question: "The tree in the photo on the left is not real.", type: "truefalse", answer: true },
      { question: "Tanaka used broccoli as a tree.", type: "truefalse", answer: true },
      { question: "Five runners are running in the top right photo.", type: "truefalse", answer: false },
      { question: "In the top right photo, four runners are on a dictionary.", type: "truefalse", answer: true },
      { question: "Tanaka Tatsuya made the miniature artworks in the photos.", type: "truefalse", answer: true },
      { question: "Tanaka uses special objects for his miniature artworks.", type: "truefalse", answer: false },
      { question: "Tanaka uses everyday objects for his artworks in unique ways.", type: "truefalse", answer: true },
      { question: "Tanaka is happy when he comes up with good ideas.", type: "truefalse", answer: true },
      { question: "Tanaka does not like his work very much.", type: "truefalse", answer: false },
      { question: "Tanaka really enjoys his work.", type: "truefalse", answer: true },
      // 定期考査よりアレンジ（選択式）
      {
        question: "The tree in the artwork is real.",
        type: "multiple",
        options: ["T（正しい）", "F（間違い）"],
        answer: 1,
      },
      {
        question: "Tanaka uses everyday objects such as a dictionary and broccoli for his artworks.",
        type: "multiple",
        options: ["T（正しい）", "F（間違い）"],
        answer: 0,
      },
      {
        question: "What does Tanaka use for his miniature artworks?",
        type: "multiple",
        options: ["Special expensive materials", "Everyday objects like broccoli and a dictionary", "Only vegetables", "Tools from a craft shop"],
        answer: 1,
      },
      {
        question: "田中達也はどんなときに幸せを感じますか。本文から日本語で答えなさい。",
        type: "text",
        answer: "よいアイデアを思いついたとき",
        keywords: ["アイデア", "思いつい", "idea", "comes up"],
      },
    ],

    // ------ アレンジ版問題（英問英答） ------
    rewriteQuestions: [
      { type: "truefalse", question: "The \"tree\" in Tanaka's photo is actually broccoli.", answer: true },
      { type: "truefalse", question: "Tanaka Tatsuya is a miniature artist from the United States.", answer: false },
      { type: "multiple",
        question: "What materials does Tanaka use for his artworks?",
        options: ["Expensive art supplies from shops", "Ordinary things from daily life", "Only fresh vegetables", "Miniature toys he buys online"],
        answer: 1 },
      { type: "underline",
        passage: "Four tiny runners race across <u>the pages of a dictionary</u> as if it were a running track.",
        question: "What does the underlined part tell us?",
        options: ["The runners are using dictionaries to study", "A dictionary is used as a running track", "The runners are very fast readers", "A dictionary is a kind of sport"],
        answer: 1 },
      { type: "multiple",
        question: "When does Tanaka feel the happiest?",
        options: ["When he sells his art for a high price", "When a new creative idea suddenly comes to his mind", "When millions of people follow him online", "When he finishes a large artwork"],
        answer: 1 },
      { type: "truefalse", question: "Tanaka's photos have become famous all over the world.", answer: true },
    ],

    // ------ 文法 ------
    grammar: {
      rules: [
        {
          title: "現在進行形",
          explanation: "「（今）～している」という進行中の動作を表す。\n形：am / are / is ＋ 動詞の -ing 形\n\n【否定】am / are / is not ＋ -ing\n【疑問】Am / Are / Is ＋ 主語 ＋ -ing ～?",
          examples: [
            { en: "Children are climbing up a tree with a ladder.", ja: "子どもたちがはしごを使って木登りをしています。" },
            { en: "Are they running on a track?", ja: "彼らはトラックを走っているのでしょうか？" },
            { en: "Mary is playing tennis now.", ja: "メアリーは今テニスをしています。" },
          ],
        },
        {
          title: "過去進行形",
          explanation: "「（そのとき）～していた」という過去の進行中の動作を表す。\n形：was / were ＋ 動詞の -ing 形\n\n【否定】was / were not ＋ -ing\n【疑問】Was / Were ＋ 主語 ＋ -ing ～?",
          examples: [
            { en: "Mary was playing tennis at 3 p.m. yesterday.", ja: "メアリーはきのうの午後3時にテニスをしていました。" },
            { en: "Takuya was sleeping when I called him.", ja: "私が電話したとき，タクヤは眠っていました。" },
            { en: "What were you doing around eight last night?", ja: "昨夜８時ごろ，何をしていましたか。" },
          ],
        },
      ],

      // 文法演習問題①②③④・提出用レポート10よりアレンジ
      fillBlanks: [
        { instruction: "日本語に合うように，( )内の動詞を適切な進行形に変えなさい。", sentence: "私は今音楽を聞いています。\nI ___ to music now.  ( listen )", answer: "am listening", hint: "現在進行形：am/are/is + -ing" },
        { instruction: "日本語に合うように，( )内の動詞を適切な進行形に変えなさい。", sentence: "そのとき，私は川沿いを走っていました。\nI ___ along the river then.  ( run )", answer: "was running", hint: "過去進行形：was/were + -ing　run → running（n を重ねる）" },
        { instruction: "日本語に合うように，( )内の動詞を適切な進行形に変えなさい。", sentence: "少年たちはふざけあっています。\nThe boys ___ fun of each other.  ( make )", answer: "are making", hint: "主語が複数 → are + -ing" },
        { instruction: "日本語に合うように，( )内の動詞を適切な進行形に変えなさい。", sentence: "彼女はテレビゲームをしているのですか。\nIs she ___ a video game?  ( play )", answer: "playing", hint: "Is she ___? の答えは -ing 形だけでOK" },
        { instruction: "日本語に合うように，( )内の動詞を適切な進行形に変えなさい。", sentence: "そのとき，彼らはお気に入りのマンガについて話していました。\nThey ___ about their favorite manga at the time.  ( talk )", answer: "were talking", hint: "過去進行形：were + -ing" },
        { instruction: "日本語に合うように，( )内の動詞を適切な進行形に変えなさい。", sentence: "私の姉は今眠っています。\nMy sister ___ now.  ( sleep )", answer: "is sleeping", hint: "主語が My sister（三人称単数）→ is + -ing" },
        { instruction: "日本語に合うように，( )内の動詞を適切な進行形に変えなさい。", sentence: "昨日の朝，私たちは海で泳いでいました。\nWe ___ in the sea yesterday morning.  ( swim )", answer: "were swimming", hint: "swim → swimming（m を重ねる）" },
        { instruction: "日本語に合うように，( )内の動詞を適切な進行形に変えなさい。", sentence: "ミカは今宿題をしています。\nMika ___ her homework now.  ( do )", answer: "is doing", hint: "do → doing" },
        { instruction: "日本語に合うように，( )内の動詞を適切な進行形に変えなさい。", sentence: "そのとき，ケンとレンは電車を待っていました。\nKen and Ren ___ for the train then.  ( wait )", answer: "were waiting", hint: "主語が複数 → were + -ing" },
        { instruction: "日本語に合うように，( )内の動詞を適切な進行形に変えなさい。", sentence: "そのとき，私は夕食を作っていました。\nI ___ dinner at the time.  ( cook )", answer: "was cooking", hint: "過去進行形：was + -ing" },
        { instruction: "日本語に合うように，( )内の動詞を適切な進行形に変えなさい。", sentence: "私は今電車を待っています。\nI ___ for the train now.  ( wait )", answer: "am waiting", hint: "現在進行形：am + -ing" },
        { instruction: "( )内から適切なものを選びなさい。", sentence: "私が電話をかけたとき，タクヤは眠っていた。\nTakuya ___ when I called him.  ( sleeps / was sleeping )", answer: "was sleeping", hint: "「そのとき眠っていた」→ 過去進行形 was sleeping" },
      ],

      // 文法演習問題⑤よりアレンジ
      rearrange: [
        { instruction: "語句を並べ替えて正しい英文を作りなさい。", words: ["Tom", "is", "washing", "the", "dishes", "now"], answer: "tom is washing the dishes now", ja: "トムは今，皿を洗っています。" },
        { instruction: "語句を並べ替えて正しい英文を作りなさい。", words: ["Mark", "is", "singing", "in", "the", "bathroom"], answer: "mark is singing in the bathroom", ja: "マークは今，お風呂で歌を歌っています。" },
        { instruction: "語句を並べ替えて正しい英文を作りなさい。", words: ["Meg", "was", "using", "the", "Internet", "at", "that", "time"], answer: "meg was using the internet at that time", ja: "メグはそのときインターネットを使っていました。" },
        { instruction: "語句を並べ替えて正しい英文を作りなさい。", words: ["Were", "you", "driving", "a", "car", "then"], answer: "were you driving a car then", ja: "あなたはそのとき車を運転していたのですか。" },
        { instruction: "語句を並べ替えて正しい英文を作りなさい。", words: ["Kayla", "is", "practicing", "judo", "now"], answer: "kayla is practicing judo now", ja: "カイラは今，柔道を練習しています。" },
        { instruction: "語句を並べ替えて正しい英文を作りなさい。", words: ["were", "you", "doing", "What", "around", "eight", "last", "night"], answer: "what were you doing around eight last night", ja: "昨夜８時ごろ，何をしていましたか。" },
      ],

      // 提出用レポート11・定期考査7よりアレンジ
      composition: [
        { prompt: "「私は今夕食を作っているところです」という内容の英文を書きなさい。", hint: "make → making / am + -ing", modelAnswer: "I am making dinner now." },
        { prompt: "「そのとき，私たちは電話で話していました」という内容の英文を書きなさい。", hint: "talk → talking / were + -ing / on the phone / at that time", modelAnswer: "We were talking on the phone at that time." },
        { prompt: "「私はあの映画を見ているとき，幸せを感じます」という内容の英文を書きなさい。", hint: "I feel happy when I ___ / watch → watching / am watching", modelAnswer: "I feel happy when I am watching that movie." },
        { prompt: "「あなたはこの前の日曜日の正午ごろ，何をしていましたか」という内容の英文を書きなさい。", hint: "What / were / doing / around noon / last Sunday", modelAnswer: "What were you doing around noon last Sunday?" },
      ],
    },
  },

  // ================================================================
  // LESSON 03  Onigiri Goes Overseas
  // ================================================================
  {
    id: 3,
    title: "Lesson 3",
    subtitle: "Onigiri Goes Overseas",

    // ------ 単語 ------
    vocabulary: [
      { en: "popular",       ja: "人気のある",                  example: "Onigiri is ___ abroad.",                                    exampleAnswer: "popular",       exampleJa: "おにぎりは海外で人気があります。" },
      { en: "abroad",        ja: "外国で，海外で",             example: "Onigiri, a rice ball, is popular ___.",                     exampleAnswer: "abroad",        exampleJa: "おにぎり（ライスボール）は海外で人気があります。" },
      { en: "even",          ja: "～でさえ",                  example: "You can find onigiri shops in the US, France, and ___ Israel!", exampleAnswer: "even",        exampleJa: "アメリカ、フランス、さらにはイスラエルでもおにぎり店を見つけられます！" },
      { en: "appeal",        ja: "興味を引く，人気を得る",      example: "Why does onigiri ___ to people overseas?",                  exampleAnswer: "appeal",        exampleJa: "なぜおにぎりは海外の人々に人気があるのですか？" },
      { en: "overseas",      ja: "海外で，外国の",             example: "Why does onigiri appeal to people ___?",                    exampleAnswer: "overseas",      exampleJa: "なぜおにぎりは海外の人々に人気があるのですか？" },
      { en: "handy",         ja: "手軽な",                   example: "It is a ___ and healthy fast food.",                         exampleAnswer: "handy",         exampleJa: "それは手軽で健康的なファストフードです。" },
      { en: "healthy",       ja: "健康によい",                example: "It is a handy and ___ fast food.",                           exampleAnswer: "healthy",       exampleJa: "それは手軽で健康的なファストフードです。" },
      { en: "addition",      ja: "追加；in addition＝さらに",  example: "In ___, they can enjoy a variety of fillings.",              exampleAnswer: "addition",      exampleJa: "さらに、さまざまな種類の具を楽しむことができます。" },
      { en: "variety",       ja: "種類；a variety of＝さまざまな", example: "They can enjoy a ___ of fillings.",                    exampleAnswer: "variety",       exampleJa: "さまざまな種類の具を楽しむことができます。" },
      { en: "filling",       ja: "中身，具",                  example: "They can enjoy a variety of ___.",                           exampleAnswer: "fillings",      exampleJa: "さまざまな種類の具を楽しむことができます。" },
      { en: "local",         ja: "地元の",                   example: "They may put their ___ food in it.",                         exampleAnswer: "local",         exampleJa: "地元の食べ物を中に入れることもあります。" },
      { en: "favorite",      ja: "お気に入りの",              example: "Some people see onigiri in their ___ anime.",                exampleAnswer: "favorite",      exampleJa: "お気に入りのアニメでおにぎりを見る人もいます。" },
      { en: "international", ja: "国際的な",                 example: "Today, onigiri is an ___ food.",                             exampleAnswer: "international", exampleJa: "今日、おにぎりは国際的な食べ物です。" },
    ],

    // ------ 本文 ------
    texts: [
      {
        id: "original",
        label: "本文",
        isRewrite: false,
        sentences: [
          { en: "Onigiri, a rice ball, is popular abroad.",                ja: "おにぎり，つまりライスボールは海外で人気です。" },
          { en: "You can find onigiri shops in the US, France, Singapore, and even Israel!", ja: "アメリカ，フランス，シンガポール，そしてイスラエルでもおにぎりの店が見つかります！" },
          { en: "Why does onigiri appeal to people overseas?",             ja: "なぜおにぎりは海外の人々の興味を引くのでしょうか。" },
          { en: "It is a handy and healthy fast food.",                    ja: "それは手軽で健康によいファストフードです。" },
          { en: "In addition, they can enjoy a variety of fillings.",     ja: "さらに，さまざまな具を楽しめます。" },
          { en: "They may put their local food in it.",                   ja: "彼らはそれに現地の食材を入れるかもしれません。" },
          { en: "Also, some people see onigiri in their favorite Japanese anime, and they become interested in it.", ja: "また，好きな日本のアニメでおにぎりを見て興味をもつようになる人もいます。" },
          { en: "Today, onigiri is an international food.",               ja: "今日，おにぎりは国際的な食べ物です。" },
        ],
      },
      {
        id: "rewrite",
        label: "アレンジ版",
        isRewrite: true,
        sentences: [
          { en: "Imagine walking into a small shop in Paris and finding onigiri on the shelf.",                             ja: "パリの小さなお店に入って，棚においてあるおにぎりを見つける場面を想像してみてください。" },
          { en: "This is not a dream — onigiri shops are now open in cities around the world!",                            ja: "これは夢ではありません。おにぎりの店は今や世界中の都市にオープンしています！" },
          { en: "From New York to Tel Aviv, people are falling in love with this simple Japanese food.",                   ja: "ニューヨークからテルアビブまで，人々はこのシンプルな日本食に夢中になっています。" },
          { en: "First, onigiri is easy to carry and eat anywhere, making it the perfect fast food.",                      ja: "まず，おにぎりはどこにでも持ち運んで食べられるので，最高のファストフードです。" },
          { en: "Second, unlike many fast foods, onigiri uses simple natural ingredients and is good for your body.",      ja: "次に，多くのファストフードとは異なり，おにぎりはシンプルな天然食材を使っており，体に良いです。" },
          { en: "Another great thing is that people can fill their onigiri with local flavors from their own culture.",    ja: "さらに良いことに，自分の文化の地元の味をおにぎりの具にすることができます。" },
          { en: "In some countries, shops sell onigiri with unique fillings that you cannot find in Japan.",               ja: "国によっては，日本では見つけられない独特な具を使ったおにぎりを売る店もあります。" },
          { en: "Japanese anime has also played a big role — many fans want to try the food their favorite characters eat.", ja: "日本のアニメも大きな役割を果たしています。多くのファンが，好きなキャラクターが食べるものを試したいと思うのです。" },
          { en: "Thanks to all these reasons, onigiri has grown from a simple rice ball into a food that belongs to the whole world.", ja: "これらの理由から，おにぎりはシンプルなおにぎりから，世界全体のものへと成長しました。" },
        ],
      },
    ],

    // ------ 内容確認問題（TF問題集・定期考査・単語文法テストよりアレンジ） ------
    comprehensionQuestions: [
      // TF問題集より
      { question: "\"Rice ball\" is the English word for onigiri.", type: "truefalse", answer: true },
      { question: "Onigiri is popular only in Japan.", type: "truefalse", answer: false },
      { question: "There are onigiri shops around the world.", type: "truefalse", answer: true },
      { question: "You can find onigiri shops in the United States of America.", type: "truefalse", answer: true },
      { question: "Israel has no onigiri shops.", type: "truefalse", answer: false },
      { question: "Onigiri is a handy food.", type: "truefalse", answer: true },
      { question: "Onigiri is a kind of fast food, so it is not good for your health.", type: "truefalse", answer: false },
      { question: "There is a variety of onigiri fillings.", type: "truefalse", answer: true },
      { question: "People overseas never put their local food in onigiri.", type: "truefalse", answer: false },
      { question: "Some people become interested in onigiri after they see it in their favorite Japanese anime.", type: "truefalse", answer: true },
      { question: "Onigiri may become an international food in the future.", type: "truefalse", answer: false },
      // 定期考査よりアレンジ（選択式）
      {
        question: "Why does onigiri appeal to people overseas? (Choose TWO reasons)",
        type: "multiple",
        options: [
          "It is expensive and rare.",
          "It is a handy and healthy fast food.",
          "People can enjoy a variety of fillings.",
          "It tastes exactly like Japanese food.",
        ],
        answer: 1,
      },
      {
        question: "People can enjoy many kinds of fillings for onigiri.",
        type: "multiple",
        options: ["T（正しい）", "F（間違い）"],
        answer: 0,
      },
      {
        question: "おにぎりの店が見られる国を本文から英語で４つ答えなさい。",
        type: "text",
        answer: "the US, France, Singapore, Israel",
        keywords: ["us", "france", "singapore", "israel"],
      },
      {
        question: "海外でおにぎりに人気の具として，本文から読み取れることを日本語で答えなさい。",
        type: "text",
        answer: "現地の食材（その国の食材）",
        keywords: ["現地", "地元", "local", "その国"],
      },
    ],

    // ------ アレンジ版問題（英問英答） ------
    rewriteQuestions: [
      { type: "truefalse", question: "Onigiri shops are now open in cities around the world.", answer: true },
      { type: "multiple",
        question: "According to the passage, why is onigiri a good fast food?",
        options: ["It is very cheap and filling.", "It is easy to carry, eat anywhere, and good for your body.", "It is cooked fresh in every shop.", "It has many Japanese traditional flavors."],
        answer: 1 },
      { type: "underline",
        passage: "People can fill their onigiri with <u>local flavors from their own culture</u>.",
        question: "What does the underlined part mean?",
        options: ["Everyone eats the same Japanese filling", "People can use food ingredients from their home country", "Local flavors are always spicy", "Only people from France use local fillings"],
        answer: 1 },
      { type: "truefalse", question: "In some countries, shops sell onigiri with fillings that you cannot find in Japan.", answer: true },
      { type: "multiple",
        question: "What role has Japanese anime played in onigiri's popularity?",
        options: ["Anime characters sell onigiri in shops.", "Many fans want to try food their favorite characters eat.", "Anime teaches people how to make onigiri.", "Anime shops give free onigiri to customers."],
        answer: 1 },
      { type: "truefalse", question: "Onigiri is still only popular in Asian countries.", answer: false },
    ],

    // ------ 文法 ------
    grammar: {
      rules: [
        {
          title: "助動詞 can — できる / できない",
          explanation: "can「～できる」　cannot[can't]「～できない」\n形：can ＋ 動詞の原形\n\n※ 助動詞のあとの動詞は常に原形（-s・-ed などつかない）",
          examples: [
            { en: "You can find onigiri shops in the US.", ja: "アメリカでおにぎりの店を見つけることができます。" },
            { en: "Shun can speak English.", ja: "シュンは英語を話すことができます。" },
            { en: "I cannot draw pictures well.", ja: "私はじょうずに絵が描けません。" },
          ],
        },
        {
          title: "助動詞 may — かもしれない",
          explanation: "may「～するかもしれない」\nmay not「～しないかもしれない」\n形：may ＋ 動詞の原形",
          examples: [
            { en: "They may put their local food in it.", ja: "彼らはそれに現地の食材を入れるかもしれません。" },
            { en: "Rena may be at school.", ja: "レナは学校にいるかもしれない。" },
            { en: "It may snow tonight.", ja: "今夜，雪が降るかもしれない。" },
          ],
        },
        {
          title: "助動詞 must — しなくてはいけない / してはいけない",
          explanation: "must「～しなくてはいけない」\nmust not[mustn't]「～してはいけない」（禁止）\n形：must ＋ 動詞の原形",
          examples: [
            { en: "You must be quiet in the library.", ja: "図書館では静かにしなくてはいけません。" },
            { en: "You must not play ball here.", ja: "ここでボール遊びは禁止です。" },
            { en: "Yumi must stay home today.", ja: "ユミは今日家にいなければなりません。" },
          ],
        },
      ],

      // 文法演習問題③・提出用レポート10・単語文法テストAよりアレンジ
      fillBlanks: [
        { instruction: "( )に can, may, must のいずれかを入れなさい。", sentence: "私は今日，担任の先生の手伝いをしなければなりません。\nI ___ help my homeroom teacher today.", answer: "must", hint: "「～しなければならない」→ must" },
        { instruction: "( )に can, may, must のいずれかを入れなさい。", sentence: "スティーブはじょうずにギターを弾くことができます。\nSteve ___ play the guitar well.", answer: "can", hint: "「～できる」→ can" },
        { instruction: "( )に can, can't, may, must, mustn't のいずれかを入れなさい。", sentence: "今，おしゃべりをしてはいけません。\nYou ___ talk now.", answer: "mustn't", hint: "「～してはいけない」→ must not / mustn't" },
        { instruction: "( )に can, can't, may, must のいずれかを入れなさい。", sentence: "今晩は寒いかもしれません。\nIt ___ be cold this evening.", answer: "may", hint: "「～かもしれない」→ may" },
        { instruction: "( )に can, can't, may, must, mustn't のいずれかを入れなさい。", sentence: "母は車を運転することができません。\nMy mother ___ drive a car.", answer: "can't", hint: "「～できない」→ cannot / can't" },
        { instruction: "( )に適切な語を入れなさい。（2語）", sentence: "ここで写真を撮ってはいけません。\nYou ___ ___ take pictures here.", answer: "must not", hint: "「～してはいけない」→ must not（2語）" },
        { instruction: "( )に適切な語を入れなさい。", sentence: "明日は雪が降るかもしれません。\nIt ___ snow tomorrow.", answer: "may", hint: "「～かもしれない」→ may" },
        { instruction: "( )に can, can't, may, must のいずれかを入れなさい。", sentence: "私は早く帰宅しなくてはいけません。\nI ___ go home early.", answer: "must", hint: "「～しなければならない」→ must" },
        { instruction: "( )に can, can't, may, must のいずれかを入れなさい。", sentence: "ビルは納豆が好きではないかもしれない。\nBill ___ not like natto.", answer: "may", hint: "「～しないかもしれない」→ may not" },
        { instruction: "( )に can, can't, may, must のいずれかを入れなさい。", sentence: "ジョンは和食をつくることができる。\nJohn ___ cook Japanese food.", answer: "can", hint: "「～できる」→ can" },
        { instruction: "( )に can, can't, may, must のいずれかを入れなさい。", sentence: "私たちは学校に遅れるかもしれない。\nWe ___ be late for school.", answer: "may", hint: "「～かもしれない」→ may" },
        { instruction: "( )に can, can't, may, must のいずれかを入れなさい。", sentence: "図書館では静かにしていなくてはなりません。\nYou ___ be quiet in the library.", answer: "must", hint: "「～しなければならない」→ must" },
      ],

      // 文法演習問題②・定期考査よりアレンジ
      rearrange: [
        { instruction: "語句を並べ替えて正しい英文を作りなさい。", words: ["Ken", "can", "run", "fast"], answer: "ken can run fast", ja: "ケンは速く走ることができます。" },
        { instruction: "語句を並べ替えて正しい英文を作りなさい。", words: ["It", "may", "snow", "in", "the", "evening"], answer: "it may snow in the evening", ja: "夕方に雪が降るかもしれません。" },
        { instruction: "語句を並べ替えて正しい英文を作りなさい。", words: ["You", "must", "finish", "your", "homework", "by", "tomorrow"], answer: "you must finish your homework by tomorrow", ja: "あなたは明日までに宿題を終えなくてはなりません。" },
        { instruction: "語句を並べ替えて正しい英文を作りなさい。", words: ["He", "can", "speak", "Japanese", "well"], answer: "he can speak japanese well", ja: "彼はじょうずに日本語を話せます。" },
        { instruction: "語句を並べ替えて正しい英文を作りなさい。", words: ["You", "must", "not", "play", "here"], answer: "you must not play here", ja: "ここで遊んではいけません。" },
        { instruction: "語句を並べ替えて正しい英文を作りなさい。", words: ["She", "may", "have", "a", "good", "idea"], answer: "she may have a good idea", ja: "彼女はよい考えがあるかもしれません。" },
        { instruction: "語句を並べ替えて正しい英文を作りなさい。", words: ["This", "news", "may", "not", "be", "true"], answer: "this news may not be true", ja: "このニュースは本当ではないかもしれません。" },
      ],

      // 文法演習問題⑤・定期考査よりアレンジ
      composition: [
        { prompt: "「私はじょうずに泳ぐことができる」という内容の英文を書きなさい。", hint: "can ＋ 動詞の原形 / swim well", modelAnswer: "I can swim well." },
        { prompt: "「明日は雪が降るかもしれない」という内容の英文を書きなさい。", hint: "may ＋ 動詞の原形 / snow / tomorrow", modelAnswer: "It may snow tomorrow." },
        { prompt: "「図書館では静かにしていなくてはなりません」という内容の英文を書きなさい。", hint: "must ＋ 動詞の原形 / be quiet / in the library", modelAnswer: "You must be quiet in the library." },
        { prompt: "「彼は病気かもしれません」という内容の英文を書きなさい。", hint: "may + be / sick", modelAnswer: "He may be sick." },
        { prompt: "「私の弟は自転車に乗ることができません」という内容の英文を書きなさい。", hint: "cannot[can't] ＋ 動詞の原形 / ride a bike", modelAnswer: "My brother cannot ride a bike." },
      ],
    },
  },

  // ================================================================
  // LESSON 04  Pictograms
  // ================================================================
  {
    id: 4,
    title: "Lesson 4",
    subtitle: "Pictograms",

    vocabulary: [
      { en: "elevator",  ja: "エレベーター",           example: "Yes, it is an ___!",                                              exampleAnswer: "elevator",   exampleJa: "そうです，エレベーターです！" },
      { en: "roof",      ja: "屋根",                  example: "You see a sandwich and a bottle under a ___.",                    exampleAnswer: "roof",       exampleJa: "屋根の下にサンドイッチとボトルが見えます。" },
      { en: "cafe",      ja: "喫茶店",                example: "It's not a ___.",                                                 exampleAnswer: "cafe",       exampleJa: "喫茶店ではありません。" },
      { en: "convenient",ja: "便利な",                example: "It is a ___ place to buy things.",                                exampleAnswer: "convenient", exampleJa: "ものを買うのに便利な場所です。" },
      { en: "pictogram", ja: "ピクトグラム",           example: "These are examples of ___s.",                                     exampleAnswer: "pictograms", exampleJa: "これらはピクトグラムの例です。" },
      { en: "simple",    ja: "単純な",                example: "Pictograms are ___ pictures.",                                    exampleAnswer: "simple",     exampleJa: "ピクトグラムは単純な図です。" },
      { en: "common",    ja: "一般的な",              example: "How did pictograms become so ___?",                               exampleAnswer: "common",     exampleJa: "ピクトグラムはどのようにしてこれほど一般的になったのでしょうか。" },
      { en: "facility",  ja: "施設",                  example: "Japan used pictograms for different sports and ___s.",            exampleAnswer: "facilities", exampleJa: "日本はさまざまな競技や施設にピクトグラムを用いました。" },
      { en: "helpful",   ja: "役立つ",               example: "They were ___ for foreign visitors.",                             exampleAnswer: "helpful",    exampleJa: "ピクトグラムは，外国から来た人々に役立ちました。" },
      { en: "update",    ja: "～を更新する",           example: "Sometimes we need to ___ pictograms.",                           exampleAnswer: "update",     exampleJa: "時にはピクトグラムを更新する必要があります。" },
      { en: "include",   ja: "～を含んでいる",         example: "They ___ symbols for wireless networks and charging stations.",  exampleAnswer: "include",    exampleJa: "それらには無線ネットワークや充電スポットを表す記号が含まれています。" },
      { en: "symbol",    ja: "記号",                  example: "They include ___s for wireless networks.",                        exampleAnswer: "symbols",    exampleJa: "それらには無線ネットワークを表す記号が含まれています。" },
      { en: "foreign",   ja: "外国の，外国から来た",  example: "They were helpful for ___ visitors.",                             exampleAnswer: "foreign",    exampleJa: "ピクトグラムは，外国から来た人々に役立ちました。" },
    ],

    texts: [
      {
        id: "original",
        label: "本文",
        isRewrite: false,
        sentences: [
          { en: "Look at Picture A.",                                                                                              ja: "図Aを見てください。" },
          { en: "Some people are in a box.",                                                                                      ja: "箱の中に何人かの人がいます。" },
          { en: "The box goes up and down.",                                                                                      ja: "その箱は上下に動きます。" },
          { en: "What does it mean?",                                                                                             ja: "それは何を意味するでしょうか。" },
          { en: "Yes, it is an elevator!",                                                                                       ja: "そうです，エレベーターです！" },
          { en: "How about Picture B?",                                                                                          ja: "図Bはどうでしょうか。" },
          { en: "You see a sandwich and a bottle under a roof.",                                                                  ja: "屋根の下にサンドイッチとボトルが見えます。" },
          { en: "It's not a cafe.",                                                                                              ja: "喫茶店ではありません。" },
          { en: "It is a convenient place to buy things.",                                                                       ja: "ものを買うのに便利な場所です。" },
          { en: "That's right.",                                                                                                  ja: "その通りです。" },
          { en: "It shows a convenience store.",                                                                                  ja: "それはコンビニエンスストアを表しています。" },
          { en: "These are examples of pictograms.",                                                                             ja: "これらはピクトグラムの例です。" },
          { en: "Pictograms are simple pictures.",                                                                               ja: "ピクトグラムは単純な図です。" },
          { en: "We don't need words to understand them.",                                                                       ja: "ピクトグラムを理解するのにことばは必要ありません。" },
          { en: "How did pictograms become so common?",                                                                         ja: "ピクトグラムは，どのようにしてこれほど一般的になったのでしょうか。" },
          { en: "During the 1964 Tokyo Olympics, Japan used pictograms for different sports and facilities.",                    ja: "1964年の東京オリンピックの間，日本はさまざまな競技や施設にピクトグラムを用いました。" },
          { en: "They were helpful for foreign visitors.",                                                                       ja: "ピクトグラムは，外国から来た人々に役立ちました。" },
          { en: "After that, other countries began to use them.",                                                               ja: "その後，ほかの国々がピクトグラムを使い始めました。" },
          { en: "Now we can see pictograms all over the world.",                                                                ja: "今では，世界中でピクトグラムを見ることができます。" },
          { en: "Sometimes we need to update pictograms.",                                                                      ja: "時にはピクトグラムを更新する必要があります。" },
          { en: "In 2017, Japan added 15 new pictograms.",                                                                     ja: "2017年に，日本は15の新しいピクトグラムを追加しました。" },
          { en: "They include symbols for wireless networks and charging stations.",                                             ja: "それらには無線ネットワークや充電スポットを表す記号が含まれています。" },
          { en: "What kind of pictograms will we see next?",                                                                   ja: "私たちは次にどんなピクトグラムを目にすることになるでしょうか。" },
        ],
      },
      {
        id: "rewrite",
        label: "アレンジ版",
        isRewrite: true,
        sentences: [
          { en: "Have you ever seen a sign on a door that shows a person walking up stairs — without any words?",               ja: "ことばが一切なく，人が階段を上っている絵が描かれたドアのサインを見たことがありますか。" },
          { en: "That picture is called a pictogram, and pictograms are used all over the world today.",                        ja: "その絵はピクトグラムと呼ばれており，ピクトグラムは今日，世界中で使われています。" },
          { en: "A pictogram is a simple image that communicates meaning without using any language.",                          ja: "ピクトグラムとは，ことばを使わずに意味を伝えるシンプルな図です。" },
          { en: "For example, a drawing of people inside a moving box means \"elevator,\" and a picture of food and a drink under a roof means \"convenience store.\"", ja: "例えば，動く箱の中に人がいる絵は「エレベーター」を意味し，屋根の下に食べ物と飲み物がある絵は「コンビニエンスストア」を意味します。" },
          { en: "Because pictograms do not use words, anyone — no matter what language they speak — can understand them.",     ja: "ピクトグラムはことばを使わないため，どんな言語を話す人でも理解できます。" },
          { en: "Pictograms became popular around the world thanks to the 1964 Tokyo Olympics.",                               ja: "ピクトグラムは，1964年の東京オリンピックをきっかけに世界中で広まりました。" },
          { en: "Japan created special pictograms to help foreign visitors find different sports venues and facilities.",       ja: "日本は，外国から来た人々がさまざまな競技会場や施設を見つけるのを助けるために，特別なピクトグラムを作りました。" },
          { en: "The idea was so successful that other countries quickly started using pictograms too.",                       ja: "このアイデアは大成功を収め，他の国々もすぐにピクトグラムを使い始めました。" },
          { en: "Today, you can see pictograms in airports, train stations, hospitals, and public spaces everywhere.",         ja: "今日では，空港，駅，病院，そして至るところの公共スペースでピクトグラムを目にすることができます。" },
          { en: "As technology and society change, new pictograms are needed — Japan added 15 new ones in 2017, including signs for wireless internet and phone-charging stations.", ja: "技術や社会が変化するにつれて，新しいピクトグラムが必要になります。日本は2017年に15の新しいピクトグラムを追加しました。無線インターネットや充電スポットの記号も含まれています。" },
          { en: "Pictograms will continue to grow and change with us, helping people communicate across all languages.",       ja: "ピクトグラムはこれからも私たちとともに変化し続け，あらゆる言語の人々の意思疎通を助けるでしょう。" },
        ],
      },
    ],

    comprehensionQuestions: [
      { question: "No one is in a box in Picture A.", type: "truefalse", answer: false },
      { question: "The box in Picture A goes up and down.", type: "truefalse", answer: true },
      { question: "Picture A shows an elevator.", type: "truefalse", answer: true },
      { question: "In Picture B, you see a sandwich and a bottle on a roof.", type: "truefalse", answer: false },
      { question: "Picture B means a cafe.", type: "truefalse", answer: false },
      { question: "Picture B shows a convenient place to buy something.", type: "truefalse", answer: true },
      { question: "Pictures A and B are both examples of pictograms.", type: "truefalse", answer: true },
      { question: "Words are necessary to understand pictograms.", type: "truefalse", answer: false },
      { question: "Japan used pictograms during the 1964 Tokyo Olympics.", type: "truefalse", answer: true },
      { question: "During the 1964 Tokyo Olympics, Japan used pictograms only for sports.", type: "truefalse", answer: false },
      { question: "Foreign visitors didn't understand the pictograms at the 1964 Tokyo Olympics.", type: "truefalse", answer: false },
      { question: "People use pictograms all over the world now.", type: "truefalse", answer: true },
      { question: "Japan added 25 new pictograms in 2017.", type: "truefalse", answer: false },
      { question: "Japan added pictograms for wireless networks and charging stations in 2017.", type: "truefalse", answer: true },
      {
        question: "What does Picture A show?",
        type: "multiple",
        options: ["A cafe", "A convenience store", "An elevator", "A staircase"],
        answer: 2,
      },
      {
        question: "What does Picture B show?",
        type: "multiple",
        options: ["A cafe", "A convenience store", "An elevator", "A hospital"],
        answer: 1,
      },
      {
        question: "Why were pictograms helpful at the 1964 Tokyo Olympics?",
        type: "multiple",
        options: ["They showed the scores of each game.", "They helped foreign visitors understand sports and facilities.", "They were used as souvenirs.", "They helped athletes find hotels."],
        answer: 1,
      },
      {
        question: "ピクトグラムを理解するのに必要なものは何ですか。本文の内容に合うように日本語で答えなさい。",
        type: "text",
        answer: "ことば（言語）は必要ない",
        keywords: ["ことば", "必要", "words", "need"],
      },
    ],

    rewriteQuestions: [
      { type: "truefalse", question: "Pictograms are simple images that communicate meaning without using language.", answer: true },
      { type: "multiple",
        question: "According to the passage, what does a drawing of people inside a moving box mean?",
        options: ["A staircase", "A bus", "An elevator", "A shopping cart"],
        answer: 2 },
      { type: "truefalse", question: "Only people who speak Japanese can understand pictograms.", answer: false },
      { type: "multiple",
        question: "Why did Japan create special pictograms for the 1964 Tokyo Olympics?",
        options: ["To decorate the sports venues", "To help foreign visitors find different sports venues and facilities", "To teach Japanese culture to athletes", "To win a design award"],
        answer: 1 },
      { type: "underline",
        passage: "The idea was so successful that <u>other countries quickly started using pictograms too</u>.",
        question: "What does the underlined part tell us?",
        options: ["Other countries competed with Japan in creating pictograms", "The use of pictograms spread beyond Japan to other countries", "Other countries already had their own pictograms", "Other countries refused to use Japan's pictograms"],
        answer: 1 },
      { type: "multiple",
        question: "What new pictograms did Japan add in 2017?",
        options: ["Signs for new Olympic sports", "Signs for wireless internet and phone-charging stations", "Signs for new train stations", "Signs for traditional Japanese food"],
        answer: 1 },
    ],

    grammar: {
      rules: [
        {
          title: "to不定詞①「〜すること」（名詞的用法）",
          explanation: "to ＋ 動詞の原形で「〜すること」を表し，文の主語・目的語・補語になる。\n\n【目的語】Ken likes to watch movies.\n【補語】My dream is to be a singer.",
          examples: [
            { en: "Ken likes to watch movies.", ja: "ケンは映画を見ることが好きだ。" },
            { en: "My dream is to be a singer in the future.", ja: "私の夢は将来歌手になることだ。" },
            { en: "I want to go to the zoo.", ja: "私は動物園に行きたい。" },
          ],
        },
        {
          title: "to不定詞②「〜する（ための）」（形容詞的用法）",
          explanation: "to ＋ 動詞の原形が直前の名詞を修飾し，「〜するための」「〜すべき」という意味を表す。\n\n例: something to drink（何か飲むもの）\n　　a lot of places to visit（訪れるべき多くの場所）",
          examples: [
            { en: "I want something to drink.", ja: "何か飲むものがほしい。" },
            { en: "Kyoto has a lot of places to visit.", ja: "京都には訪れるべき場所がたくさんある。" },
            { en: "Chris has no time to watch TV.", ja: "クリスにはテレビを見る時間がない。" },
          ],
        },
        {
          title: "to不定詞③「〜するために」（副詞的用法）",
          explanation: "to ＋ 動詞の原形で「〜するために」（目的）という意味を表す。\n\n例: We went to the park to play soccer.\n　　（サッカーをするために公園へ行った）",
          examples: [
            { en: "We went to the park to play soccer.", ja: "私たちはサッカーをするために公園へ行った。" },
            { en: "My father went out to buy some food.", ja: "父は食料品を買うために外出した。" },
            { en: "Aya got up early to make breakfast.", ja: "アヤは朝食を作るために早起きした。" },
          ],
        },
      ],

      fillBlanks: [
        { instruction: "日本語に合うように，[ ]内から適切な語句を選んで空所に入れなさい。", sentence: "私はプールで泳ぐことが好きだ。\nI like ___ in the pool.  [ to swim / to buy / to drink ]", answer: "to swim", hint: "like + to不定詞「〜することが好きだ」" },
        { instruction: "日本語に合うように，[ ]内から適切な語句を選んで空所に入れなさい。", sentence: "父は食料品を買うために外出した。\nMy father went out ___ some food.  [ to see / to buy / to finish ]", answer: "to buy", hint: "副詞的用法「〜するために」: went out to buy" },
        { instruction: "日本語に合うように，[ ]内から適切な語句を選んで空所に入れなさい。", sentence: "何か飲み物がほしいですか。\nDo you want something ___?  [ to live / to drink / to do ]", answer: "to drink", hint: "形容詞的用法「〜するもの」: something to drink" },
        { instruction: "日本語に合うように，[ ]内から適切な語句を選んで空所に入れなさい。", sentence: "私は今日たくさんすべきことがある。\nI have a lot of things ___ today.  [ to share / to do / to swim ]", answer: "to do", hint: "形容詞的用法「〜すべき」: things to do" },
        { instruction: "日本語に合うように，[ ]内から適切な語句を選んで空所に入れなさい。", sentence: "私は海外で暮らすためにお金をためている。\nI'm saving money ___ overseas.  [ to live / to buy / to visit ]", answer: "to live", hint: "副詞的用法「〜するために」: saving money to live" },
        { instruction: "日本語に合うように，(　)内に適切な語を入れなさい。（各1語）", sentence: "私はこの夏，シドニーに滞在することを決意した。\nI decided (　　　　) (　　　　) in Sydney this summer.", answer: "to stay", hint: "decide + to不定詞「〜することを決意する」" },
        { instruction: "日本語に合うように，(　)内に適切な語を入れなさい。（各1語）", sentence: "ジムは自分を手伝ってくれる人を必要としている。\nJim needs someone (　　　　) (　　　　) him.", answer: "to help", hint: "形容詞的用法: someone to help him" },
        { instruction: "日本語に合うように，(　)内に適切な語を入れなさい。（各1語）", sentence: "エイミーはエリックと会うために駅に行った。\nAmy went to the station (　　　　) (　　　　) Eric.", answer: "to meet", hint: "副詞的用法「〜するために」: went to the station to meet" },
        { instruction: "日本語に合うように，(　)内に適切な語を入れなさい。（各1語）", sentence: "クリスにはテレビを見る時間がない。\nChris has no time (　　　　) (　　　　) TV.", answer: "to watch", hint: "形容詞的用法: no time to watch TV" },
        { instruction: "日本語に合うように，(　)内に適切な語を入れなさい。（各1語）", sentence: "アヤは朝食を作るために早起きした。\nAya got up early (　　　　) (　　　　) breakfast.", answer: "to make", hint: "副詞的用法「〜するために」: got up early to make" },
      ],

      rearrange: [
        { instruction: "語句を並べ替えて正しい英文を作りなさい。", words: ["Gil", "studied", "hard", "to", "become", "a", "doctor"], answer: "gil studied hard to become a doctor", ja: "ギルは医者になるために一生懸命勉強した。" },
        { instruction: "語句を並べ替えて正しい英文を作りなさい。", words: ["I", "need", "someone", "to", "repair", "my", "computer"], answer: "i need someone to repair my computer", ja: "私のコンピュータを修理してくれる人が必要だ。" },
        { instruction: "語句を並べ替えて正しい英文を作りなさい。", words: ["Henry", "tried", "to", "climb", "the", "mountain"], answer: "henry tried to climb the mountain", ja: "ヘンリーはその山に登ろうとした。" },
        { instruction: "語句を並べ替えて正しい英文を作りなさい。", words: ["We", "practiced", "very", "hard", "to", "win", "the", "match"], answer: "we practiced very hard to win the match", ja: "私たちはその試合に勝つために，とても一生懸命に練習した。" },
        { instruction: "語句を並べ替えて正しい英文を作りなさい。", words: ["I", "didn't", "have", "a", "chance", "to", "eat", "all", "day"], answer: "i didn't have a chance to eat all day", ja: "一日中食べる暇がなかった。" },
        { instruction: "語句を並べ替えて正しい英文を作りなさい。", words: ["My", "aunt", "likes", "to", "watch", "movies"], answer: "my aunt likes to watch movies", ja: "私のおばは映画を見ることが好きだ。" },
      ],

      composition: [
        { prompt: "「この週末は買い物に行きたい」という内容の英文を書きなさい。", hint: "want + to不定詞 / go shopping", modelAnswer: "I want to go shopping this weekend." },
        { prompt: "「ショウタは夕食を作るために早く帰宅した」という内容の英文を書きなさい。", hint: "came home early / to + 動詞原形（目的）/ cook dinner", modelAnswer: "Shota came home early to cook dinner." },
        { prompt: "「リクには数学を教えてくれる人が必要だった」という内容の英文を書きなさい。", hint: "needed someone / 形容詞的用法 / to teach him math", modelAnswer: "Riku needed someone to teach him math." },
        { prompt: "「ケントの夢はコンピュータプログラマーになることだ」という内容の英文を書きなさい。", hint: "dream is / to be + 職業名 / computer programmer", modelAnswer: "Kent's dream is to become a computer programmer." },
        { prompt: "「私はいつかロンドンを訪れたい」という内容の英文を書きなさい。", hint: "want + to不定詞 / visit / someday", modelAnswer: "I want to visit London someday." },
      ],
    },
  },

  // ================================================================
  // LESSON 05  Morita Yuko  Hospital Facility Dog Handler
  // ================================================================
  {
    id: 5,
    title: "Lesson 5",
    subtitle: "Morita Yuko  Hospital Facility Dog Handler",

    vocabulary: [
      { en: "handler",   ja: "ハンドラー，専門の世話係",   example: "I'm Morita Yuko, a facility dog ___.",                          exampleAnswer: "handler",   exampleJa: "私は森田優子です。ファシリティドッグのハンドラーです。" },
      { en: "medical",   ja: "医療の",                     example: "They work in hospitals as members of ___ teams.",              exampleAnswer: "medical",   exampleJa: "彼らは病院で医療チームのメンバーとして働きます。" },
      { en: "emotional", ja: "感情の",                     example: "Their job is giving ___ support to children.",                 exampleAnswer: "emotional", exampleJa: "彼らの仕事は，入院中の子どもたちを気持ちの面で支えることです。" },
      { en: "treatment", ja: "治療",                       example: "Sometimes medical ___s are tough.",                            exampleAnswer: "treatments",exampleJa: "ときどき，治療はつらいものです。" },
      { en: "tough",     ja: "つらい，厳しい",             example: "Sometimes medical treatments are ___.",                        exampleAnswer: "tough",     exampleJa: "ときどき，治療はつらいものです。" },
      { en: "pain",      ja: "痛み",                       example: "Children feel ___ and stress.",                                exampleAnswer: "pain",      exampleJa: "子どもたちは痛みやストレスを感じます。" },
      { en: "stress",    ja: "ストレス",                   example: "Children feel pain and ___.",                                  exampleAnswer: "stress",    exampleJa: "子どもたちは痛みやストレスを感じます。" },
      { en: "comfort",   ja: "～を元気づける",             example: "The dogs ___ them by staying with them.",                      exampleAnswer: "comfort",   exampleJa: "ファシリティドッグは，子どもたちといっしょにいることで彼らを元気づけるのです。" },
      { en: "carefully", ja: "注意深く",                   example: "We brush our dogs' hair and teeth ___ every morning.",         exampleAnswer: "carefully", exampleJa: "私たちは毎朝注意深くファシリティドッグの毛にブラシをかけ，歯を磨きます。" },
      { en: "sensitive", ja: "敏感な",                     example: "Dogs are very ___.",                                           exampleAnswer: "sensitive", exampleJa: "ファシリティドッグはとても敏感です。" },
      { en: "nervous",   ja: "不安で，緊張して",           example: "If we are sad or ___, they may feel the same.",                exampleAnswer: "nervous",   exampleJa: "もし私たちが悲しんでいたり不安でいたりすると，彼らも同じように感じるかもしれません。" },
      { en: "bond",      ja: "きずな",                     example: "We have a strong ___!",                                        exampleAnswer: "bond",      exampleJa: "私たちには強いきずながあります！" },
      { en: "support",   ja: "支援，サポート",             example: "Their job is giving emotional ___ to children.",               exampleAnswer: "support",   exampleJa: "彼らの仕事は，入院中の子どもたちを気持ちの面で支えることです。" },
    ],

    texts: [
      {
        id: "original",
        label: "本文",
        isRewrite: false,
        sentences: [
          { en: "I'm Morita Yuko, a facility dog handler.",                                                                     ja: "私は森田優子です。ファシリティドッグのハンドラーです。" },
          { en: "Do you know about hospital facility dogs?",                                                                    ja: "ホスピタルファシリティドッグについて知っていますか。" },
          { en: "They work in hospitals as members of medical teams.",                                                          ja: "彼らは病院で医療チームのメンバーとして働きます。" },
          { en: "Their job is giving emotional support to children in hospitals.",                                              ja: "彼らの仕事は，入院中の子どもたちを気持ちの面で支えることです。" },
          { en: "Sometimes medical treatments are tough.",                                                                      ja: "ときどき，治療はつらいものです。" },
          { en: "Children feel pain and stress.",                                                                              ja: "子どもたちは痛みやストレスを感じます。" },
          { en: "The dogs comfort them by staying with them.",                                                                  ja: "ファシリティドッグは，子どもたちといっしょにいることで彼らを元気づけるのです。" },
          { en: "As handlers, we work with hospital facility dogs.",                                                           ja: "ハンドラーとして，私たちはホスピタルファシリティドッグとともに働きます。" },
          { en: "We also take care of them.",                                                                                   ja: "彼らの世話もします。" },
          { en: "We are always together with them, even at home.",                                                             ja: "私たちはいつでも彼らといっしょにいます。家ででもです。" },
          { en: "There are some important things for handlers.",                                                               ja: "ハンドラーにとって大切なことがいくつかあります。" },
          { en: "First, we must keep facility dogs clean because they work in hospitals.",                                     ja: "第一に，ファシリティドッグは病院で働くので，彼らを清潔にしておかなければなりません。" },
          { en: "We brush our dogs' hair and teeth carefully every morning.",                                                  ja: "私たちは毎朝注意深くファシリティドッグの毛にブラシをかけ，歯を磨きます。" },
          { en: "Second, handlers should always be happy.",                                                                    ja: "第二に，ハンドラーはいつも機嫌よくしている必要があります。" },
          { en: "Dogs are very sensitive.",                                                                                    ja: "ファシリティドッグはとても敏感です。" },
          { en: "If we are sad or nervous, they may feel the same.",                                                          ja: "もし私たちが悲しんでいたり不安でいたりすると，彼らも同じように感じるかもしれません。" },
          { en: "Then they cannot enjoy working.",                                                                             ja: "そうすると彼らは楽しんで仕事をすることができません。" },
          { en: "In addition, handlers and dogs should understand each other.",                                                ja: "さらに，ハンドラーとファシリティドッグはお互いを理解している必要があります。" },
          { en: "We are together twenty-four seven, so we have a strong bond!",                                               ja: "1日24時間週7日いっしょにいるので，私たちには強いきずながあります！" },
        ],
      },
      {
        id: "rewrite",
        label: "アレンジ版",
        isRewrite: true,
        sentences: [
          { en: "At some hospitals in Japan, a special team member walks the halls — not a doctor or nurse, but a trained dog.", ja: "日本のいくつかの病院では，廊下を歩く特別なチームのメンバーがいます。医師でも看護師でもなく，訓練された犬です。" },
          { en: "These dogs are called hospital facility dogs, and their job is to give emotional support to children who are receiving medical treatment.", ja: "これらの犬はホスピタルファシリティドッグと呼ばれ，その仕事は医療を受けている入院中の子どもたちを気持ちの面で支えることです。" },
          { en: "Medical treatments can be painful and stressful for young patients, so having a friendly dog nearby can make a big difference.", ja: "医療行為は幼い患者にとって辛く，ストレスになることがあります。そのため，フレンドリーな犬がそばにいることで，大きな違いが生まれます。" },
          { en: "The dogs comfort children simply by staying with them — their calm presence helps children feel less afraid.", ja: "ファシリティドッグは，ただそばにいるだけで子どもたちを元気づけます。その落ち着いた存在が，子どもたちの恐怖心を和らげるのです。" },
          { en: "Morita Yuko is one of the handlers who works with these special dogs in Japan.", ja: "森田優子さんは，日本でこれらの特別な犬と働くハンドラーの一人です。" },
          { en: "Handlers work alongside the dogs every day in the hospital, but their responsibilities go beyond working hours.", ja: "ハンドラーは毎日病院で犬と一緒に働きますが，その責任は勤務時間外にも及びます。" },
          { en: "Handlers also take full care of their dogs at home — they are together twenty-four hours a day, seven days a week.", ja: "ハンドラーは家でも犬の世話を完全に担います。1日24時間，週7日，常に一緒にいるのです。" },
          { en: "First, the dogs must always be kept clean, because they work in a medical setting; handlers carefully brush the dogs' hair and teeth every single morning.", ja: "まず，犬は医療の場で働くため，常に清潔にしておかなければなりません。ハンドラーは毎朝，犬の毛と歯を丁寧にブラッシングします。" },
          { en: "Second, handlers must always stay in a happy and positive mood, because dogs are very sensitive and can easily pick up on their handler's emotions.", ja: "次に，ハンドラーは常に明るく前向きな気分でいなければなりません。犬はとても敏感で，ハンドラーの感情を簡単に感じ取れるからです。" },
          { en: "If a handler feels sad or nervous, the dog may also feel that way, which means it cannot enjoy working.", ja: "ハンドラーが悲しんだり不安を感じたりすると，犬も同じように感じてしまい，仕事を楽しめなくなってしまいます。" },
          { en: "Finally, the handler and dog must deeply understand each other — and because they spend every hour of every day together, they develop a very strong bond.", ja: "最後に，ハンドラーと犬はお互いを深く理解し合っている必要があります。毎日のすべての時間を共に過ごすからこそ，非常に強いきずなが生まれるのです。" },
        ],
      },
    ],

    comprehensionQuestions: [
      { question: "Morita Yuko is a facility dog handler.", type: "truefalse", answer: true },
      { question: "Hospital facility dogs work in hospitals as leaders of medical teams.", type: "truefalse", answer: false },
      { question: "The job of a hospital facility dog is giving emotional support to children in hospitals.", type: "truefalse", answer: true },
      { question: "Children feel pain and stress when medical treatments are tough.", type: "truefalse", answer: true },
      { question: "Hospital facility dogs stay with the children to comfort them.", type: "truefalse", answer: true },
      { question: "Handlers work with hospital facility dogs.", type: "truefalse", answer: true },
      { question: "Hospital facility dogs always live in hospitals.", type: "truefalse", answer: false },
      { question: "Handlers and hospital facility dogs live together.", type: "truefalse", answer: true },
      { question: "Handlers must keep their facility dogs clean.", type: "truefalse", answer: true },
      { question: "Handlers should always be nervous.", type: "truefalse", answer: false },
      { question: "Facility dogs may feel sad or nervous if their handlers do too.", type: "truefalse", answer: true },
      { question: "Even when facility dogs feel sad or nervous, they enjoy their work.", type: "truefalse", answer: false },
      { question: "Handlers and facility dogs have a strong bond because they are together twenty-four seven.", type: "truefalse", answer: true },
      {
        question: "What is the job of a hospital facility dog?",
        type: "multiple",
        options: ["Performing medical treatments", "Giving emotional support to children in hospitals", "Training young doctors", "Carrying medicine to patients"],
        answer: 1,
      },
      {
        question: "Why must handlers always be happy?",
        type: "multiple",
        options: ["Because the hospital requires it", "Because children like happy handlers", "Because dogs are very sensitive and may feel the same as their handlers", "Because sad handlers make mistakes"],
        answer: 2,
      },
      {
        question: "ハンドラーにとって大切なことを，本文から３つ日本語で答えなさい。",
        type: "text",
        answer: "①清潔にしておく ②いつも機嫌よく ③お互いを理解する",
        keywords: ["清潔", "機嫌", "理解", "clean", "happy", "understand"],
      },
    ],

    rewriteQuestions: [
      { type: "truefalse", question: "Hospital facility dogs are doctors or nurses who help sick children.", answer: false },
      { type: "multiple",
        question: "How do facility dogs help children in hospitals?",
        options: ["By performing medical treatments", "By comforting children and helping them feel less afraid", "By doing exercise with children", "By teaching children during hospital stays"],
        answer: 1 },
      { type: "truefalse", question: "Handlers only take care of the facility dogs during hospital working hours.", answer: false },
      { type: "underline",
        passage: "Dogs are very sensitive and can easily <u>pick up on their handler's emotions</u>.",
        question: "What does the underlined part mean?",
        options: ["Dogs can carry their handler's bags", "Dogs can feel and sense how their handler is feeling", "Dogs pick up objects for their handlers", "Dogs remember their handler's schedule"],
        answer: 1 },
      { type: "multiple",
        question: "What happens if a handler feels sad or nervous?",
        options: ["The dog becomes more active", "The dog may feel the same way and cannot enjoy working", "The hospital finds a new handler", "The dog is taken to another hospital"],
        answer: 1 },
      { type: "multiple",
        question: "Why do handlers and facility dogs develop a strong bond?",
        options: ["Because they are trained together for years before starting work", "Because they spend every hour of every day together", "Because the hospital organizes team-building activities", "Because handlers choose their own dogs"],
        answer: 1 },
    ],

    grammar: {
      rules: [
        {
          title: "動名詞①「〜すること」（動詞の目的語）",
          explanation: "動詞の -ing 形は「〜すること」という意味を表し，特定の動詞の目的語になる。\n\n動名詞を目的語にとる主な動詞:\nenjoy（楽しむ）/ finish（終える）/ stop（やめる）/ practice（練習する）\n\n例: Takeshi stopped talking.（タケシは話すのをやめた。）",
          examples: [
            { en: "Takeshi stopped talking.", ja: "タケシは話すのをやめた。" },
            { en: "I enjoyed singing together.", ja: "私はいっしょに歌うことを楽しんだ。" },
            { en: "We finished cleaning our classroom.", ja: "私たちは教室のそうじを終えた。" },
          ],
        },
        {
          title: "動名詞②「〜すること」（主語・補語）",
          explanation: "動名詞は文の主語や補語にもなる。\n\n【主語】Riding a horse is easy for me.\n【補語】Mary's hobby is collecting old coins.\n\n※ Their job is giving emotional support.（本文より）",
          examples: [
            { en: "Riding a horse is easy for me.", ja: "馬に乗ることは私にとっては簡単だ。" },
            { en: "Mary's hobby is collecting old coins.", ja: "メアリーの趣味は古いコインを集めることです。" },
            { en: "Their job is giving emotional support to children.", ja: "彼らの仕事は，入院中の子どもたちを気持ちの面で支えることです。" },
          ],
        },
        {
          title: "動名詞③「〜することに/なしに」（前置詞の後）",
          explanation: "前置詞（for, at, without, before など）の後には動名詞がくる。\n\n例: Thank you for coming.（来てくれてありがとう。）\n　　She left without saying good-bye.（さよならも言わずに出た。）",
          examples: [
            { en: "Thank you for coming today.", ja: "今日は来てくれてありがとう。" },
            { en: "Some birds are good at catching fish.", ja: "鳥の中には魚を捕るのが得意なものがいる。" },
            { en: "She left the room without saying good-bye.", ja: "彼女はさよならも言わずに部屋を出た。" },
          ],
        },
      ],

      fillBlanks: [
        { instruction: "日本語に合うように，( )内の語を適切な形（動名詞）に変えなさい。", sentence: "父の仕事は，野菜を育てることだ。\nMy father's job is ___ vegetables.  ( grow )", answer: "growing", hint: "動名詞（補語）: job is growing" },
        { instruction: "日本語に合うように，( )内の語を適切な形（動名詞）に変えなさい。", sentence: "私はギターを弾くのを楽しんだ。\nI enjoyed ___ the guitar.  ( play )", answer: "playing", hint: "enjoy + 動名詞: enjoyed playing" },
        { instruction: "日本語に合うように，( )内の語を適切な形（動名詞）に変えなさい。", sentence: "その質問に答えることはとても難しい。\n___ that question is very difficult.  ( answer )", answer: "Answering", hint: "動名詞（主語）: Answering..." },
        { instruction: "日本語に合うように，( )内の語を適切な形（動名詞）に変えなさい。", sentence: "私たちは教室のそうじを終えた。\nWe finished ___ our classroom.  ( clean )", answer: "cleaning", hint: "finish + 動名詞: finished cleaning" },
        { instruction: "日本語に合うように，( )内の語を適切な形（動名詞）に変えなさい。", sentence: "彼女はさよならも言わずに部屋を出た。\nShe left the room without ___ good-bye.  ( say )", answer: "saying", hint: "前置詞 without の後: without saying" },
        { instruction: "日本語に合うように，( )内の語を適切な形（動名詞）に変えなさい。", sentence: "昨晩は電話をありがとう。\nThank you for ___ last night.  ( call )", answer: "calling", hint: "前置詞 for の後: for calling" },
        { instruction: "日本語に合うように，( )内の語を適切な形（動名詞）に変えなさい。", sentence: "魚を料理することは難しい。\n___ fish is difficult.  ( cook )", answer: "Cooking", hint: "動名詞（主語）: Cooking fish is..." },
        { instruction: "日本語に合うように，( )内の語を適切な形（動名詞）に変えなさい。", sentence: "突然，雨が降り始めた。\nIt began ___ suddenly.  ( rain )", answer: "raining", hint: "begin + 動名詞: began raining" },
        { instruction: "日本語に合うように，( )内の語を適切な形（動名詞）に変えなさい。", sentence: "旅行することは，私の趣味のひとつだ。\n___ is one of my hobbies.  ( travel )", answer: "Traveling", hint: "動名詞（主語）: Traveling is..." },
        { instruction: "日本語に合うように，( )内の語を適切な形（動名詞）に変えなさい。", sentence: "私はこの本を読み終えた。\nI finished ___ this book.  ( read )", answer: "reading", hint: "finish + 動名詞: finished reading" },
        { instruction: "日本語に合うように，( )内の語を適切な形（動名詞）に変えなさい。", sentence: "私は公園をジョギングすることに興味がある。\nI'm interested in ___ in the park.  ( run )", answer: "running", hint: "前置詞 in の後: interested in running（run→running）" },
        { instruction: "日本語に合うように，( )内の語を適切な形（動名詞）に変えなさい。", sentence: "ケンはサッカーをするのが好きだ。\nKen likes ___ soccer.  ( play )", answer: "playing", hint: "like + 動名詞: likes playing" },
      ],

      rearrange: [
        { instruction: "語句を並べ替えて正しい英文を作りなさい。", words: ["Asking", "questions", "is", "very", "important"], answer: "asking questions is very important", ja: "質問することはとても大事だ。" },
        { instruction: "語句を並べ替えて正しい英文を作りなさい。", words: ["My", "favorite", "activity", "is", "making", "sweets"], answer: "my favorite activity is making sweets", ja: "私の好きなことはお菓子を作ることです。" },
        { instruction: "語句を並べ替えて正しい英文を作りなさい。", words: ["Ted", "practiced", "speaking", "Japanese"], answer: "ted practiced speaking japanese", ja: "テッドは日本語を話す練習をした。" },
        { instruction: "語句を並べ替えて正しい英文を作りなさい。", words: ["Riding", "a", "horse", "is", "sometimes", "dangerous"], answer: "riding a horse is sometimes dangerous", ja: "馬に乗ることはときどき危険だ。" },
        { instruction: "語句を並べ替えて正しい英文を作りなさい。", words: ["Thank", "you", "for", "sending", "the", "e-mail"], answer: "thank you for sending the e-mail", ja: "Eメールを送ってくれてありがとう。" },
        { instruction: "語句を並べ替えて正しい英文を作りなさい。", words: ["Tom", "made", "a", "speech", "without", "using", "notes"], answer: "tom made a speech without using notes", ja: "トムはメモを使わずにスピーチした。" },
      ],

      composition: [
        { prompt: "「彼女は服を買うことが好きだ」という内容の英文を書きなさい。", hint: "like + 動名詞 / buy → buying / clothes", modelAnswer: "She likes buying clothes." },
        { prompt: "「ケンは昨日漫画を読んで楽しんだ」という内容の英文を書きなさい。", hint: "enjoy + 動名詞 / read → reading / manga / yesterday", modelAnswer: "Ken enjoyed reading manga yesterday." },
        { prompt: "「エイミーの趣味はカラオケを歌うことだ」という内容の英文を書きなさい。", hint: "hobby is + 動名詞 / sing → singing / karaoke", modelAnswer: "Amy's hobby is singing karaoke." },
        { prompt: "「私は空港で働くことに興味がある」という内容の英文を書きなさい。", hint: "be interested in + 動名詞 / work → working / at an airport", modelAnswer: "I'm interested in working at an airport." },
        { prompt: "「英語を勉強することは私にとって大切だ」という内容の英文を書きなさい。", hint: "動名詞（主語）/ Study → Studying / is important for me", modelAnswer: "Studying English is important for me." },
      ],
    },
  },


  // ================================================================
  // LESSON 06  Convenience Stores: Keys to Their Success
  // ================================================================
  {
    id: 6,
    title: "Lesson 6",
    subtitle: "Convenience Stores: Keys to Their Success",

    vocabulary: [
      { en: "key",      ja: "かぎ",      example: "Today, I will talk about three ___ to their success.", exampleAnswer: "keys",    exampleJa: "今日は，その成功の3つのかぎについてお話しします。" },
      { en: "success",  ja: "成功",      example: "Three keys to their ___.",                              exampleAnswer: "success", exampleJa: "その成功の3つのかぎ。" },
      { en: "display",  ja: "陳列",      example: "The first is the ___ of goods.",                        exampleAnswer: "display", exampleJa: "1つ目は，商品の陳列です。" },
      { en: "goods",    ja: "商品",      example: "They see many other ___ along the way.",                exampleAnswer: "goods",   exampleJa: "彼らは途中で多くのほかの商品を目にします。" },
      { en: "item",     ja: "品物",      example: "These ___ are usually at the back of the store.",       exampleAnswer: "items",   exampleJa: "これらの品物はたいてい店の奥にあります。" },
      { en: "customer", ja: "客",        example: "The ___ has to walk through the store.",                exampleAnswer: "customer",exampleJa: "お客さんは店の中を通って歩かなければなりません。" },
      { en: "bright",   ja: "明るい",   example: "The second key is the ___ lights.",                     exampleAnswer: "bright",  exampleJa: "2つ目のかぎは明るい照明です。" },
      { en: "inside",   ja: "中に",     example: "So, they often go ___.",                                 exampleAnswer: "inside",  exampleJa: "それで，人はよく店内に入って行くのです。" },
      { en: "shelf",    ja: "棚",        example: "The third key is the ___.",                              exampleAnswer: "shelves", exampleJa: "3つ目のかぎは棚です。" },
      { en: "bottom",   ja: "最下部",   example: "Customers can see all the goods, from top to ___.",     exampleAnswer: "bottom",  exampleJa: "お客さんはすべての商品を，上から下まで見ることができます。" },
      { en: "sales",    ja: "売上高",   example: "These ideas support convenience store ___.",             exampleAnswer: "sales",   exampleJa: "これらのアイディアがコンビニエンスストアの売り上げを支えています。" },
    ],

    texts: [
      {
        id: "original",
        label: "本文",
        isRewrite: false,
        sentences: [
          { en: "Hello, everyone.",                                                                             ja: "みなさん，こんにちは。" },
          { en: "I think that you often use convenience stores.",                                               ja: "みなさんはよくコンビニエンスストアを利用すると思います。" },
          { en: "Today, I will talk about three keys to their success.",                                        ja: "今日は，その成功の3つのかぎについてお話しします。" },
          { en: "The first is the display of goods.",                                                           ja: "1つ目（のかぎ）は，商品の陳列です。" },
          { en: "Look at this picture.",                                                                        ja: "この図をご覧ください。" },
          { en: "Many people visit convenience stores to buy drinks or bentos.",                                ja: "多くの人が飲み物や弁当を買いにコンビニエンスストアを訪れます。" },
          { en: "However, these items are usually at the back of the store.",                                   ja: "しかし，これらの品物はたいてい店の奥にあります。" },
          { en: "Why?",                                                                                         ja: "どうしてでしょうか。" },
          { en: "Because then the customers have to walk through the store.",                                   ja: "なぜなら，そうするとお客さんは店の中を通って歩かなければならないからです。" },
          { en: "They see many other goods along the way.",                                                     ja: "彼らは途中で多くのほかの商品を目にします。" },
          { en: "As a result, they feel like buying more.",                                                     ja: "その結果，もっと買いたいという気持ちになるのです。" },
          { en: "The second key is the bright lights.",                                                         ja: "2つ目のかぎは明るい照明です。" },
          { en: "Thanks to these lights, people feel that the stores are clean and safe.",                      ja: "これらの照明のおかげで，人々は店が清潔で安全だと感じます。" },
          { en: "Also, they can find the stores easily, even at night.",                                        ja: "また，夜であっても，簡単に店を見つけることができます。" },
          { en: "So, they often go inside.",                                                                    ja: "それで，人はよく店内に入って行くのです。" },
          { en: "The third key is the shelves.",                                                                ja: "3つ目のかぎは棚です。" },
          { en: "In this picture, the shelves are different sizes.",                                            ja: "この絵では，棚の大きさが異なっています。" },
          { en: "This way, customers can see all the goods well, from top to bottom.",                          ja: "このようにすることで，お客さんはすべての商品を，上から下までよく見ることができるのです。" },
          { en: "These ideas support convenience store sales.",                                                  ja: "これらのアイディアがコンビニエンスストアの売り上げを支えています。" },
          { en: "Why don't you find out for yourself?",                                                         ja: "みなさん自身で調べてみてはどうでしょうか。" },
        ],
      },
    ],

    comprehensionQuestions: [
      { question: "The display of goods in convenience stores is the first key to their success.", type: "truefalse", answer: true },
      { question: "Many people visit convenience stores to buy drinks or bentos.", type: "truefalse", answer: true },
      { question: "People usually see the drinks soon after they enter a convenience store.", type: "truefalse", answer: false },
      { question: "Drinks and bentos are usually at the back of a convenience store.", type: "truefalse", answer: true },
      { question: "When customers walk through a convenience store, they see many other goods along the way.", type: "truefalse", answer: true },
      { question: "Even when customers see a lot of goods along the way, they do not want to buy them.", type: "truefalse", answer: false },
      { question: "Bright lights are the second key to the success of convenience stores.", type: "truefalse", answer: true },
      { question: "It is difficult to find a convenience store at night.", type: "truefalse", answer: false },
      { question: "The sizes of the shelves are all the same in convenience stores.", type: "truefalse", answer: false },
      { question: "When the shelves are different sizes, customers can see all the goods well from top to bottom.", type: "truefalse", answer: true },
      { question: "The ideas about lights and shelf sizes support convenience store sales.", type: "truefalse", answer: true },
      {
        question: "What is the first key to convenience stores' success?",
        type: "multiple",
        options: ["The bright lights", "The display of goods", "The shelves", "The low prices"],
        answer: 1,
      },
      {
        question: "Why are drinks and bentos placed at the back of the store?",
        type: "multiple",
        options: ["Because they are heavy", "Because customers have to walk through the store and see other goods", "Because there is no space at the front", "Because they are expensive"],
        answer: 1,
      },
      {
        question: "コンビニエンスストアの3つの成功のかぎを日本語で答えなさい。",
        type: "text",
        answer: "商品の陳列、明るい照明、棚（の工夫）",
        keywords: ["陳列", "照明", "棚"],
      },
    ],

    rewriteQuestions: [],

    grammar: {
      rules: [
        {
          title: "that節 — 「SがVするということ」",
          explanation: "〈動詞 + (that) + 主語 + 動詞〉で「SがVするということ」を表します。\nthat は省略できることがあります。\n\n【主な動詞】\nthink（思う）/ know（知っている）/ say（言う）/ hope（願う）/ feel（感じる）/ tell ＋ 人（人に言う）",
          examples: [
            { en: "I think that you often use convenience stores.", ja: "みなさんはよくコンビニエンスストアを利用すると思います。" },
            { en: "People feel that the stores are clean and safe.", ja: "人々は店が清潔で安全だと感じます。" },
            { en: "People say (that) Paris is a beautiful city.", ja: "人々はパリは美しい都市だと言う。" },
            { en: "Jim told me (that) I should practice more.", ja: "ジムは私にもっと練習するべきだと言った。" },
          ],
        },
      ],

      fillBlanks: [
        { instruction: "[ know ] 私たちは田中さんが入院していることを知っている。", sentence: "We ___ ___ Mr. Tanaka is in the hospital.", answer: "know that", hint: "動詞 + that" },
        { instruction: "[ hope ] 私はあなたの夢が叶うことを願っている。", sentence: "I ___ ___ your dream will come true.", answer: "hope that", hint: "動詞 + that" },
        { instruction: "[ told ] ジョンは私に祖母が大好きだと言った。", sentence: "John ___ ___ ___ he loved his grandmother.", answer: "told me that", hint: "told + 人 + that" },
        { instruction: "( )に適切な語を入れなさい。 私はジャックは来ると思う。", sentence: "I ___ ___ Jack will come.", answer: "think that", hint: "think + that" },
        { instruction: "( )に適切な語を入れなさい。 母は私が新しいコンピュータを欲しがっているのを知っている。", sentence: "My mother ___ ___ I want a new computer.", answer: "knows that", hint: "動詞の形に注意（3単現）" },
      ],

      rearrange: [
        { instruction: "Mark always ___ is money.", words: ["says", "that", "time"], answer: "says that time", ja: "マークはいつも「時は金なり」と言っている。" },
        { instruction: "I ___ is a great actor.", words: ["know", "that", "Shawn"], answer: "know that shawn", ja: "私はショーンがすばらしい俳優だと知っている。" },
        { instruction: "We ___ will visit us again.", words: ["hope", "that", "you"], answer: "hope that you", ja: "私たちはあなたがまた来てくれることを願っている。" },
        { instruction: "I ___ was true.", words: ["that", "the story", "proved"], answer: "proved that the story", ja: "私はその話が真実であることを証明した。" },
        { instruction: "Kate ___ would go to Italy.", words: ["me", "that", "told", "she"], answer: "told me that she", ja: "ケイトは私に彼女はイタリアに行くつもりだと言った。" },
      ],

      composition: [
        { prompt: "「今，こうなるといいな」と願っていることについて，I hope that ... を使って英文を完成させなさい。", hint: "I hope that + 主語 + 動詞...", modelAnswer: "I hope that our team wins the next game." },
        { prompt: "「大切だと思うこと」について，I think that ... を使って英文を完成させなさい。", hint: "I think that + 主語 + 動詞...", modelAnswer: "I think that studying English is important." },
      ],
    },
  },

  // ================================================================
  // LESSON 09  Fashion Waste
  // ================================================================
  {
    id: 9,
    title: "Lesson 9",
    subtitle: "Fashion Waste",

    vocabulary: [
      { en: "offer",    ja: "〜を提供する", example: "Others ___ a repair service to their customers.",              exampleAnswer: "offer",    exampleJa: "顧客に修理サービスを提供する会社もあります。" },
      { en: "waste",    ja: "廃棄物",       example: "Sooner or later, unsold clothes become ___.",                  exampleAnswer: "waste",    exampleJa: "遅かれ早かれ，売れ残りの服は廃棄物になるのです。" },
      { en: "industry", ja: "業界",         example: "The fashion ___ is trying to reduce fashion waste.",           exampleAnswer: "industry", exampleJa: "ファッション業界は，衣料廃棄を減らそうとしています。" },
      { en: "avoid",    ja: "〜を避ける",   example: "We should ___ throwing away clothes so easily.",               exampleAnswer: "avoid",    exampleJa: "私たちは，あまりに簡単に服を捨てるのを避けるべきです。" },
      { en: "unsold",   ja: "売れ残りの",   example: "Sooner or later, ___ clothes become waste.",                   exampleAnswer: "unsold",   exampleJa: "遅かれ早かれ，売れ残りの服は廃棄物になるのです。" },
      { en: "consumer", ja: "消費者",       example: "Fashion waste is a ___ problem too.",                          exampleAnswer: "consumer", exampleJa: "衣料廃棄は消費者の問題でもあります。" },
      { en: "repair",   ja: "修理",         example: "Others offer a ___ service to their customers.",               exampleAnswer: "repair",   exampleJa: "顧客に修理サービスを提供する会社もあります。" },
      { en: "reduce",   ja: "〜を減らす",   example: "We can ___ about 40,000 tons of waste.",                       exampleAnswer: "reduce",   exampleJa: "約4万トンの廃棄を減らすことができます。" },
      { en: "amount",   ja: "量",           example: "We need 130 large trucks each day to carry this ___.",         exampleAnswer: "amount",   exampleJa: "この量の服を運ぶためには，毎日大型トラック130台が必要です。" },
      { en: "trend",    ja: "流行",         example: "They make clothes quickly to keep up with the ___.",           exampleAnswer: "trends",   exampleJa: "それらの会社は流行に遅れずについていくために，急いで服を作ります。" },
    ],

    texts: [
      {
        id: "original",
        label: "本文",
        isRewrite: false,
        sentences: [
          { en: "Do you like fashion?",                                                                                ja: "あなたはファッションが好きですか。" },
          { en: "How often do you buy clothes?",                                                                       ja: "どれくらいの頻度で服を買いますか。" },
          { en: "At stores, we see clothes with all colors and designs.",                                              ja: "店では，あらゆる色やデザインの服を目にします。" },
          { en: "In Japan, about 800,000 tons of new clothes a year are sold.",                                        ja: "日本では，1年に約80万トンの新しい服が売られています。" },
          { en: "At the same time, around 500,000 tons of clothes are thrown away.",                                   ja: "同時に，約50万トンの服が捨てられています。" },
          { en: "We need 130 large trucks each day to carry this amount.",                                             ja: "この量（の服）を運ぶためには，毎日大型トラック130台が必要です。" },
          { en: "Many clothes are produced and sold, but thrown away in the end.",                                     ja: "たくさんの服が生産されて売られますが，最終的には捨てられてしまいます。" },
          { en: "\"Fast fashion\" is one reason for this cycle.",                                                      ja: "「ファストファッション」が，このサイクルの理由の1つです。" },
          { en: "Fast fashion companies produce a large amount of clothes.",                                           ja: "ファストファッションの会社は大量の服を生産します。" },
          { en: "Thanks to this, their products are cheaper than other companies' products.",                          ja: "このおかげで，それらの会社の製品はほかの会社の製品よりも安いのです。" },
          { en: "Also, they make clothes quickly to keep up with the trends.",                                         ja: "また，それらの会社は流行に遅れずについていくために，急いで服を作ります。" },
          { en: "As a result, we can enjoy the newest styles.",                                                        ja: "その結果，私たちは最新のスタイルを楽しむことができます。" },
          { en: "However, fashion trends often change, so the companies are always producing new clothes.",            ja: "しかし，ファッションの流行は頻繁に変わるので，会社は常に新しい服を作っています。" },
          { en: "Sooner or later, unsold clothes become waste.",                                                       ja: "遅かれ早かれ，売れ残りの服は廃棄物になるのです。" },
          { en: "Fashion waste is a consumer problem too.",                                                            ja: "衣料廃棄は消費者の問題でもあります。" },
          { en: "We easily buy new clothes and throw away old ones because they are cheap.",                           ja: "服が安いので，私たちは簡単に新しい服を買って，古い服を捨ててしまいます。" },
          { en: "The fashion industry is trying to reduce fashion waste.",                                             ja: "ファッション業界は，衣料廃棄を減らそうとしています。" },
          { en: "Some companies collect used clothes for recycling.",                                                  ja: "リサイクルのために古着を回収する会社もあります。" },
          { en: "Others offer a repair service to their customers.",                                                   ja: "また，顧客に修理サービスを提供する会社もあります。" },
          { en: "With this service, they can wear their clothes longer.",                                              ja: "このサービスを使って，顧客は服をより長く着ることができます。" },
          { en: "As consumers, what can we do about this waste problem?",                                              ja: "消費者として，私たちはこの廃棄の問題に関して何ができるでしょうか。" },
          { en: "We should avoid throwing away clothes so easily.",                                                    ja: "私たちは，あまりに簡単に服を捨てるのを避けるべきです。" },
          { en: "If we wear our clothes for just one more year, we can reduce about 40,000 tons of waste.",           ja: "自分たちの服を1年だけ（でも）長く着れば，約4万トンの廃棄を減らすことができます。" },
          { en: "Enjoy fashion but love your clothes!",                                                                ja: "ファッションを楽しんで，でも服を大切にしましょう！" },
        ],
      },
    ],

    comprehensionQuestions: [
      { question: "About 800,000 tons of new clothes are sold in Japan each year.", type: "truefalse", answer: true },
      { question: "Around 500,000 tons of clothes are thrown away each year, and 130 large trucks are needed every week to carry them.", type: "truefalse", answer: false },
      { question: "\"Fast fashion\" is one reason why so many clothes are produced, sold, and thrown away.", type: "truefalse", answer: true },
      { question: "The products of fast fashion companies are cheaper because they produce a large amount of clothes.", type: "truefalse", answer: true },
      { question: "Fast fashion companies make clothes quickly to cut costs.", type: "truefalse", answer: false },
      { question: "Fashion waste is not a problem for consumers.", type: "truefalse", answer: false },
      { question: "Some companies collect used clothes to recycle them.", type: "truefalse", answer: true },
      { question: "Customers can wear their clothes longer if they use a repair service.", type: "truefalse", answer: true },
      { question: "We can reduce about 40,000 tons of waste by wearing our clothes for just one more year.", type: "truefalse", answer: true },
      {
        question: "Why are fast fashion companies' products cheaper than other companies' products?",
        type: "multiple",
        options: ["Because they use cheap materials", "Because they produce a large amount of clothes", "Because they sell online only", "Because they don't pay workers"],
        answer: 1,
      },
      {
        question: "What can we do as consumers to reduce fashion waste?",
        type: "multiple",
        options: ["Buy more clothes every season", "Avoid throwing away clothes so easily", "Only buy fast fashion brands", "Throw away old clothes immediately"],
        answer: 1,
      },
      {
        question: "衣料廃棄を減らすためにファッション業界が行っていることを2つ日本語で書きなさい。",
        type: "text",
        answer: "古着のリサイクル回収、修理サービスの提供",
        keywords: ["リサイクル", "修理", "回収"],
      },
    ],

    rewriteQuestions: [],

    grammar: {
      rules: [
        {
          title: "比較級 — 「…より〜だ」",
          explanation: "2つのものを比べるときは比較級を使います。\n①「形容詞 + -er + than」→ 短い形容詞（1〜2音節）\n②「more + 形容詞 + than」→ 長い形容詞（2音節以上）\n③ 不規則変化：good → better / bad → worse / many・much → more\n\n【スペル変化】\n語末が e → -r のみ（nice → nicer）\n語末が 子音字 → 重ねて -er（big → bigger）\n語末が 子音字 + y → y を i に変えて -er（easy → easier）",
          examples: [
            { en: "Their products are cheaper than other companies' products.", ja: "それらの会社の製品はほかの会社の製品よりも安いのです。" },
            { en: "Osaka is smaller than Tokyo.", ja: "大阪は東京より小さい。" },
            { en: "Writing is more difficult than reading.", ja: "書くことは読むことより難しい。" },
            { en: "This new model is better than the old one.", ja: "この新モデルは旧モデルよりよい。" },
          ],
        },
        {
          title: "最上級 — 「最も〜だ」",
          explanation: "3つ以上のものの中で「最も〜」と言うときは最上級を使います。\n①「the + 形容詞 + -est」→ 短い形容詞\n②「the most + 形容詞」→ 長い形容詞\n③ 不規則変化：good → best / bad → worst\n\n範囲を表す語：「…の中で」→ of all / in ＋ 場所・グループ",
          examples: [
            { en: "We can enjoy the newest styles.", ja: "私たちは最新のスタイルを楽しむことができます。" },
            { en: "This stadium is the largest in Japan.", ja: "この競技場は日本で最大だ。" },
            { en: "This question is the most difficult of all.", ja: "この問題はすべての中で最も難しい。" },
            { en: "Tom is the best actor in this drama.", ja: "トムはこのドラマでいちばんよい俳優だ。" },
          ],
        },
      ],

      fillBlanks: [
        { instruction: "[ small ] このスマートフォンはすべての中で一番小さいです。", sentence: "This smartphone is ___ ___ of all.", answer: "the smallest", hint: "the + 最上級 of all" },
        { instruction: "[ good ] ケイトは私たちのチームで一番優秀な選手です。", sentence: "Kate is ___ ___ player on our team.", answer: "the best", hint: "不規則変化 good → best" },
        { instruction: "[ famous ] こちらは，東京で最も有名な寿司屋です。", sentence: "This is ___ ___ ___ sushi restaurant in Tokyo.", answer: "the most famous", hint: "the most + 形容詞" },
        { instruction: "[ popular ] この店ではりんごはみかんより人気があります。", sentence: "Apples are ___ ___ ___ oranges in this shop.", answer: "more popular than", hint: "more + 形容詞 + than" },
        { instruction: "[ tall ] 東京スカイツリーは日本で最も高い建物です。", sentence: "Tokyo Skytree is ___ ___ building in Japan.", answer: "the tallest", hint: "the + 最上級 + 名詞" },
      ],

      rearrange: [
        { instruction: "October ___ .", words: ["is", "warmer", "than", "March"], answer: "is warmer than march", ja: "10月は3月より暖かい。" },
        { instruction: "Kevin ___ this office.", words: ["is", "the busiest", "person", "in"], answer: "is the busiest person in", ja: "ケビンはこの事務所で最も忙しい人だ。" },
        { instruction: "This smartphone ___ that one.", words: ["is", "better", "than"], answer: "is better than", ja: "このスマートフォンはあのスマートフォンよりよい。" },
        { instruction: "This novel ___ that one.", words: ["is", "more", "interesting", "than"], answer: "is more interesting than", ja: "この小説はあの小説よりもおもしろい。" },
        { instruction: "This smartphone ___ all.", words: ["is", "the", "best", "of"], answer: "is the best of", ja: "これはすべての中でいちばんよいスマートフォンだ。" },
        { instruction: "This is ___ in the store.", words: ["expensive", "most", "ring", "the"], answer: "the most expensive ring", ja: "これはその店でいちばん高価な指輪だ。" },
      ],

      composition: [
        { prompt: "身近な人と比較して，「私は○○より〜です」という英文を書きなさい。", hint: "I am + 比較級 + than + 人", modelAnswer: "I am older than my sister." },
        { prompt: "あなたが知っている「世界一のもの」について，最上級を使って英文を書きなさい。", hint: "... is the most[est] ... in the world.", modelAnswer: "The Nile is the longest river in the world." },
      ],
    },
  },

];

// ================================================================
// 英単語ターゲット1200（改訂版） Section 1 — ドリルデータ
// ================================================================
const TARGET_UNITS = [

  // ── Unit 1（Drill 1 / 単語 1〜20）──
  {
    id: 1, title: "Unit 1", subtitle: "Drill 1（単語 1〜20）",
    words: [
      { id:  1, en: "change",  ja: "変える",        pos: "動" },
      { id:  2, en: "learn",   ja: "学ぶ",          pos: "動" },
      { id:  3, en: "help",    ja: "助ける",         pos: "動" },
      { id:  4, en: "need",    ja: "必要とする",     pos: "動" },
      { id:  5, en: "live",    ja: "住む",           pos: "動" },
      { id:  6, en: "ask",     ja: "頼む・尋ねる",   pos: "動" },
      { id:  7, en: "enjoy",   ja: "楽しむ",         pos: "動" },
      { id:  8, en: "wait",    ja: "待つ",           pos: "動" },
      { id:  9, en: "cook",    ja: "料理する",       pos: "動" },
      { id: 10, en: "talk",    ja: "話す",           pos: "動" },
      { id: 11, en: "speak",   ja: "話す（言語を）", pos: "動" },
      { id: 12, en: "meet",    ja: "会う",           pos: "動" },
      { id: 13, en: "mean",    ja: "意味する",       pos: "動" },
      { id: 14, en: "buy",     ja: "買う",           pos: "動" },
      { id: 15, en: "travel",  ja: "旅行する",       pos: "動" },
      { id: 16, en: "build",   ja: "建てる",         pos: "動" },
      { id: 17, en: "close",   ja: "閉じる",         pos: "動" },
      { id: 18, en: "stay",    ja: "滞在する",       pos: "動" },
      { id: 19, en: "move",    ja: "移動させる",     pos: "動" },
      { id: 20, en: "plan",    ja: "計画する",       pos: "動" },
    ],
  },

  // ── Unit 2（Drill 2 / 単語 21〜40）──
  {
    id: 2, title: "Unit 2", subtitle: "Drill 2（単語 21〜40）",
    words: [
      { id: 21, en: "write",   ja: "書く",           pos: "動" },
      { id: 22, en: "listen",  ja: "聞く",           pos: "動" },
      { id: 23, en: "happen",  ja: "起こる",         pos: "動" },
      { id: 24, en: "lose",    ja: "なくす・負ける", pos: "動" },
      { id: 25, en: "stand",   ja: "立つ",           pos: "動" },
      { id: 26, en: "grow",    ja: "育つ",           pos: "動" },
      { id: 27, en: "sound",   ja: "〜に聞こえる",   pos: "動" },
      { id: 28, en: "rain",    ja: "雨が降る",       pos: "動" },
      { id: 29, en: "worry",   ja: "心配する",       pos: "動" },
      { id: 30, en: "teach",   ja: "教える",         pos: "動" },
      { id: 31, en: "hope",    ja: "望む",           pos: "動" },
      { id: 32, en: "hold",    ja: "抱える・持つ",   pos: "動" },
      { id: 33, en: "life",    ja: "人生・生活",     pos: "名" },
      { id: 34, en: "thing",   ja: "こと・もの",     pos: "名" },
      { id: 35, en: "country", ja: "国",             pos: "名" },
      { id: 36, en: "example", ja: "例",             pos: "名" },
      { id: 37, en: "place",   ja: "場所",           pos: "名" },
      { id: 38, en: "part",    ja: "部分",           pos: "名" },
      { id: 39, en: "trip",    ja: "旅行",           pos: "名" },
      { id: 40, en: "problem", ja: "問題",           pos: "名" },
    ],
  },

  // ── Unit 3（Drill 3 / 単語 41〜60）──
  {
    id: 3, title: "Unit 3", subtitle: "Drill 3（単語 41〜60）",
    words: [
      { id: 41, en: "question",  ja: "質問",              pos: "名" },
      { id: 42, en: "color",     ja: "色",                pos: "名" },
      { id: 43, en: "point",     ja: "要点・点",           pos: "名" },
      { id: 44, en: "language",  ja: "言語",              pos: "名" },
      { id: 45, en: "word",      ja: "単語",              pos: "名" },
      { id: 46, en: "health",    ja: "健康",              pos: "名" },
      { id: 47, en: "report",    ja: "レポート",           pos: "名" },
      { id: 48, en: "minute",    ja: "〜分",              pos: "名" },
      { id: 49, en: "reason",    ja: "理由",              pos: "名" },
      { id: 50, en: "line",      ja: "線・路線",           pos: "名" },
      { id: 51, en: "month",     ja: "月",                pos: "名" },
      { id: 52, en: "week",      ja: "週",                pos: "名" },
      { id: 53, en: "date",      ja: "日付",              pos: "名" },
      { id: 54, en: "event",     ja: "行事・イベント",     pos: "名" },
      { id: 55, en: "future",    ja: "将来",              pos: "名" },
      { id: 56, en: "design",    ja: "デザイン",           pos: "名" },
      { id: 57, en: "end",       ja: "終わり",            pos: "名" },
      { id: 58, en: "computer",  ja: "コンピューター",     pos: "名" },
      { id: 59, en: "plant",     ja: "植物",              pos: "名" },
      { id: 60, en: "art",       ja: "美術",              pos: "名" },
    ],
  },

  // ── Unit 4（Drill 4 / 単語 61〜80）──
  {
    id: 4, title: "Unit 4", subtitle: "Drill 4（単語 61〜80）",
    words: [
      { id: 61, en: "chance",    ja: "機会・チャンス",     pos: "名" },
      { id: 62, en: "history",   ja: "歴史",              pos: "名" },
      { id: 63, en: "festival",  ja: "祭り・文化祭",       pos: "名" },
      { id: 64, en: "season",    ja: "季節",              pos: "名" },
      { id: 65, en: "fun",       ja: "楽しさ",            pos: "名" },
      { id: 66, en: "host",      ja: "ホスト・主催者",     pos: "名" },
      { id: 67, en: "message",   ja: "伝言・メッセージ",   pos: "名" },
      { id: 68, en: "step",      ja: "段階",              pos: "名" },
      { id: 69, en: "popular",   ja: "人気のある",         pos: "形" },
      { id: 70, en: "most",      ja: "ほとんどの",         pos: "形" },
      { id: 71, en: "different", ja: "異なる",            pos: "形" },
      { id: 72, en: "such",      ja: "そのような",         pos: "形" },
      { id: 73, en: "last",      ja: "この前の・最後の",   pos: "形" },
      { id: 74, en: "same",      ja: "同じ",              pos: "形" },
      { id: 75, en: "great",     ja: "すばらしい",         pos: "形" },
      { id: 76, en: "open",      ja: "開いている",         pos: "形" },
      { id: 77, en: "own",       ja: "自分自身の",         pos: "形" },
      { id: 78, en: "kind",      ja: "親切な",            pos: "形" },
      { id: 79, en: "difficult", ja: "難しい",            pos: "形" },
      { id: 80, en: "enough",    ja: "十分な",            pos: "形" },
    ],
  },

  // ── Unit 5（Drill 5 / 単語 81〜100）──
  {
    id: 5, title: "Unit 5", subtitle: "Drill 5（単語 81〜100）",
    words: [
      { id:  81, en: "special",   ja: "特別な",           pos: "形" },
      { id:  82, en: "famous",    ja: "有名な",           pos: "形" },
      { id:  83, en: "bad",       ja: "悪い",             pos: "形" },
      { id:  84, en: "short",     ja: "短い",             pos: "形" },
      { id:  85, en: "useful",    ja: "役に立つ",         pos: "形" },
      { id:  86, en: "afraid",    ja: "怖い・心配な",     pos: "形" },
      { id:  87, en: "favorite",  ja: "お気に入りの",     pos: "形" },
      { id:  88, en: "expensive", ja: "高価な",           pos: "形" },
      { id:  89, en: "carry",     ja: "運ぶ",             pos: "動" },
      { id:  90, en: "break",     ja: "壊れる・折れる",   pos: "動" },
      { id:  91, en: "arrive",    ja: "到着する",         pos: "動" },
      { id:  92, en: "fall",      ja: "落ちる",           pos: "動" },
      { id:  93, en: "miss",      ja: "〜がいなくて寂しい", pos: "動" },
      { id:  94, en: "cover",     ja: "覆う",             pos: "動" },
      { id:  95, en: "catch",     ja: "捕まえる",         pos: "動" },
      { id:  96, en: "save",      ja: "救う",             pos: "動" },
      { id:  97, en: "check",     ja: "確認する",         pos: "動" },
      { id:  98, en: "introduce", ja: "紹介する",         pos: "動" },
      { id:  99, en: "join",      ja: "参加する",         pos: "動" },
      { id: 100, en: "clean",     ja: "掃除する",         pos: "動" },
    ],
  },

  // ── Drill 6 (101-120)  動詞 ──────────────────────────────
  {
    id: 6,
    title: "Drill 6",
    subtitle: "101〜120",
    words: [
      { id: 101, en: "answer",    ja: "答える",           pos: "動" },
      { id: 102, en: "throw",     ja: "投げる",           pos: "動" },
      { id: 103, en: "invite",    ja: "招待する",         pos: "動" },
      { id: 104, en: "pick",      ja: "摘み取る・選び出す", pos: "動" },
      { id: 105, en: "die",       ja: "死ぬ",             pos: "動" },
      { id: 106, en: "return",    ja: "戻る・返す",       pos: "動" },
      { id: 107, en: "fly",       ja: "飛ぶ",             pos: "動" },
      { id: 108, en: "cut",       ja: "切る",             pos: "動" },
      { id: 109, en: "hit",       ja: "打つ・ぶつかる",   pos: "動" },
      { id: 110, en: "excuse",    ja: "許す",             pos: "動" },
      { id: 111, en: "wash",      ja: "洗う",             pos: "動" },
      { id: 112, en: "cry",       ja: "叫ぶ・泣く",       pos: "動" },
      { id: 113, en: "borrow",    ja: "借りる",           pos: "動" },
      { id: 114, en: "kill",      ja: "殺す",             pos: "動" },
      { id: 115, en: "push",      ja: "押す",             pos: "動" },
      { id: 116, en: "climb",     ja: "登る",             pos: "動" },
      { id: 117, en: "laugh",     ja: "笑う",             pos: "動" },
      { id: 118, en: "smile",     ja: "ほほえむ",         pos: "動" },
      { id: 119, en: "hurry",     ja: "急ぐ",             pos: "動" },
      { id: 120, en: "cheer",     ja: "元気づける",       pos: "動" },
    ],
  },

  // ── Drill 7 (121-140)  名詞 ──────────────────────────────
  {
    id: 7,
    title: "Drill 7",
    subtitle: "121〜140",
    words: [
      { id: 121, en: "volunteer", ja: "ボランティア",     pos: "名" },
      { id: 122, en: "side",      ja: "側",               pos: "名" },
      { id: 123, en: "front",     ja: "前・正面",         pos: "名" },
      { id: 124, en: "concert",   ja: "コンサート",       pos: "名" },
      { id: 125, en: "fire",      ja: "火事・火",         pos: "名" },
      { id: 126, en: "village",   ja: "村",               pos: "名" },
      { id: 127, en: "lesson",    ja: "レッスン・授業",   pos: "名" },
      { id: 128, en: "light",     ja: "明かり・光",       pos: "名" },
      { id: 129, en: "Internet",  ja: "インターネット",   pos: "名" },
      { id: 130, en: "weather",   ja: "天気",             pos: "名" },
      { id: 131, en: "voice",     ja: "声",               pos: "名" },
      { id: 132, en: "piece",     ja: "1つ・1枚",         pos: "名" },
      { id: 133, en: "goal",      ja: "目標・ゴール",     pos: "名" },
      { id: 134, en: "speech",    ja: "スピーチ",         pos: "名" },
      { id: 135, en: "fan",       ja: "ファン",           pos: "名" },
      { id: 136, en: "dream",     ja: "夢",               pos: "名" },
      { id: 137, en: "mistake",   ja: "間違い",           pos: "名" },
      { id: 138, en: "meter",     ja: "メートル",         pos: "名" },
      { id: 139, en: "land",      ja: "土地・陸",         pos: "名" },
      { id: 140, en: "hundred",   ja: "百",               pos: "名" },
    ],
  },

  // ── Drill 8 (141-160)  名詞・形容詞 ──────────────────────
  {
    id: 8,
    title: "Drill 8",
    subtitle: "141〜160",
    words: [
      { id: 141, en: "thousand",  ja: "千",               pos: "名" },
      { id: 142, en: "million",   ja: "百万",             pos: "名" },
      { id: 143, en: "medicine",  ja: "薬・医学",         pos: "名" },
      { id: 144, en: "uniform",   ja: "制服",             pos: "名" },
      { id: 145, en: "heat",      ja: "暑さ・熱",         pos: "名" },
      { id: 146, en: "evening",   ja: "夕方・晩",         pos: "名" },
      { id: 147, en: "noon",      ja: "正午",             pos: "名" },
      { id: 148, en: "holiday",   ja: "休日・祝日",       pos: "名" },
      { id: 149, en: "course",    ja: "講座・課程",       pos: "名" },
      { id: 150, en: "rule",      ja: "ルール・規則",     pos: "名" },
      { id: 151, en: "forest",    ja: "森林",             pos: "名" },
      { id: 152, en: "farm",      ja: "農場",             pos: "名" },
      { id: 153, en: "treasure",  ja: "大切な物・宝物",   pos: "名" },
      { id: 154, en: "hole",      ja: "穴",               pos: "名" },
      { id: 155, en: "cloud",     ja: "雲",               pos: "名" },
      { id: 156, en: "phone",     ja: "電話・電話機",     pos: "名" },
      { id: 157, en: "sorry",     ja: "すまなく思って",   pos: "形" },
      { id: 158, en: "careful",   ja: "注意深い",         pos: "形" },
      { id: 159, en: "wonderful", ja: "すばらしい",       pos: "形" },
      { id: 160, en: "heavy",     ja: "重い",             pos: "形" },
    ],
  },

  // ── Drill 9 (161-180)  形容詞・副詞 ──────────────────────
  {
    id: 9,
    title: "Drill 9",
    subtitle: "161〜180",
    words: [
      { id: 161, en: "sick",      ja: "病気の",           pos: "形" },
      { id: 162, en: "dear",      ja: "親愛なる",         pos: "形" },
      { id: 163, en: "glad",      ja: "うれしい",         pos: "形" },
      { id: 164, en: "dark",      ja: "暗い",             pos: "形" },
      { id: 165, en: "sad",       ja: "悲しい",           pos: "形" },
      { id: 166, en: "cute",      ja: "かわいい",         pos: "形" },
      { id: 167, en: "free",      ja: "暇な・自由な・無料の", pos: "形" },
      { id: 168, en: "foreign",   ja: "外国の",           pos: "形" },
      { id: 169, en: "low",       ja: "低い",             pos: "形" },
      { id: 170, en: "safe",      ja: "安全な",           pos: "形" },
      { id: 171, en: "angry",     ja: "怒った",           pos: "形" },
      { id: 172, en: "lucky",     ja: "幸運な",           pos: "形" },
      { id: 173, en: "bright",    ja: "輝いて・明るい",   pos: "形" },
      { id: 174, en: "soft",      ja: "柔らかい",         pos: "形" },
      { id: 175, en: "loud",      ja: "（音が）大きい",   pos: "形" },
      { id: 176, en: "even",      ja: "〜でさえ",         pos: "副" },
      { id: 177, en: "back",      ja: "戻って・後ろに",   pos: "副" },
      { id: 178, en: "still",     ja: "まだ・なお",       pos: "副" },
      { id: 179, en: "early",     ja: "早く・早い",       pos: "副" },
      { id: 180, en: "soon",      ja: "すぐに",           pos: "副" },
    ],
  },

  // ── Drill 10 (181-200)  副詞・接続詞・前置詞 ─────────────
  {
    id: 10,
    title: "Drill 10",
    subtitle: "181〜200",
    words: [
      { id: 181, en: "away",      ja: "離れて・遠くへ",   pos: "副" },
      { id: 182, en: "almost",    ja: "ほとんど・ほぼ",   pos: "副" },
      { id: 183, en: "together",  ja: "一緒に",           pos: "副" },
      { id: 184, en: "maybe",     ja: "もしかすると",     pos: "副" },
      { id: 185, en: "once",      ja: "1度・かつて",      pos: "副" },
      { id: 186, en: "else",      ja: "ほかに",           pos: "副" },
      { id: 187, en: "ago",       ja: "（今から）〜前に", pos: "副" },
      { id: 188, en: "straight",  ja: "まっすぐに",       pos: "副" },
      { id: 189, en: "slowly",    ja: "ゆっくりと",       pos: "副" },
      { id: 190, en: "suddenly",  ja: "突然・急に",       pos: "副" },
      { id: 191, en: "until",     ja: "〜するまで",       pos: "接" },
      { id: 192, en: "since",     ja: "〜以来・〜してから", pos: "接" },
      { id: 193, en: "around",    ja: "〜の周りに",       pos: "前" },
      { id: 194, en: "over",      ja: "〜を超えて",       pos: "前" },
      { id: 195, en: "without",   ja: "〜なしに",         pos: "前" },
      { id: 196, en: "through",   ja: "〜を通り抜けて",   pos: "前" },
      { id: 197, en: "between",   ja: "〜の間に",         pos: "前" },
      { id: 198, en: "during",    ja: "〜の間に（ずっと）", pos: "前" },
      { id: 199, en: "behind",    ja: "〜の後ろに",       pos: "前" },
      { id: 200, en: "along",     ja: "〜に沿って",       pos: "前" },
    ],
  },

  // ── Drill 11（熟語① 201〜220）一般動詞を含む熟語 ──
  {
    id: 11, title: "Drill 11", subtitle: "熟語① 201〜220",
    words: [
      { id: 201, en: "come from ~",           ja: "〜から来ている、〜に由来する",         pos: "熟" },
      { id: 202, en: "come true",             ja: "実現する",                             pos: "熟" },
      { id: 203, en: "cut off ~ / cut ~ off", ja: "〜を切り取る",                         pos: "熟" },
      { id: 204, en: "do [try] one's best",   ja: "最善[全力]を尽くす",                   pos: "熟" },
      { id: 205, en: "get off (~)",           ja: "(〜に)降りる",                         pos: "熟" },
      { id: 206, en: "get on (~)",            ja: "(〜に)乗る",                           pos: "熟" },
      { id: 207, en: "get to ~",             ja: "〜(場所)に到着する、達する",            pos: "熟" },
      { id: 208, en: "go through ~",         ja: "〜を通り抜ける、〜を経験する",          pos: "熟" },
      { id: 209, en: "grow up",              ja: "成長する、大人になる",                  pos: "熟" },
      { id: 210, en: "hear of ~",            ja: "〜のことを聞き知る、〜のうわさを聞く", pos: "熟" },
      { id: 211, en: "help oneself (to ~)",  ja: "(〜を)自由にとって食べる[飲む]",       pos: "熟" },
      { id: 212, en: "look for ~",           ja: "〜を探す",                              pos: "熟" },
      { id: 213, en: "look forward to ~",    ja: "〜を楽しみに待つ",                      pos: "熟" },
      { id: 214, en: "look like ~",          ja: "(外見が)〜に似ている；〜のように見える", pos: "熟" },
      { id: 215, en: "pick up ~ / pick ~ up",ja: "〜を拾い上げる；〜を引き書取る；迎えに行く", pos: "熟" },
      { id: 216, en: "speak to [with] ~",    ja: "(〜人)と話す、〜に話しかける",          pos: "熟" },
      { id: 217, en: "take care of ~",       ja: "〜の世話をする；〜に気をつける",        pos: "熟" },
      { id: 218, en: "take off ~ / take ~ off", ja: "〜(衣類など)を脱ぐ；(take offで)離陸する", pos: "熟" },
      { id: 219, en: "take part in ~",       ja: "〜に参加する",                          pos: "熟" },
      { id: 220, en: "think of ~",           ja: "〜を思いつく；〜のことを考える",        pos: "熟" },
    ],
  },

  // ── Drill 12（熟語② 221〜250）副詞・前置詞・接続詞などの熟語 ──
  {
    id: 12, title: "Drill 12", subtitle: "熟語② 221〜250",
    words: [
      { id: 221, en: "after school",          ja: "放課後に",                              pos: "熟" },
      { id: 222, en: "all over (~)",          ja: "(〜の)至る所に[で]",                   pos: "熟" },
      { id: 223, en: "all the time",          ja: "いつでも；その間ずっと",               pos: "熟" },
      { id: 224, en: "at first",             ja: "最初は、初めのうちは",                  pos: "熟" },
      { id: 225, en: "at home",              ja: "在宅して；くつろいで",                  pos: "熟" },
      { id: 226, en: "at last",              ja: "ついに、やっと",                         pos: "熟" },
      { id: 227, en: "at that time",         ja: "その時に(は)、当時(は)",               pos: "熟" },
      { id: 228, en: "at the same time",     ja: "同時に",                                pos: "熟" },
      { id: 229, en: "for a long time",      ja: "長い間",                                pos: "熟" },
      { id: 230, en: "for the first time",   ja: "初めて",                                pos: "熟" },
      { id: 231, en: "in the end",           ja: "結局；最後に",                          pos: "熟" },
      { id: 232, en: "in the future",        ja: "将来",                                  pos: "熟" },
      { id: 233, en: "in this way",          ja: "このようにして",                         pos: "熟" },
      { id: 234, en: "more than ~",          ja: "〜より多い、〜以上",                    pos: "熟" },
      { id: 235, en: "of course",            ja: "もちろん",                               pos: "熟" },
      { id: 236, en: "on one's [the] way (to ~)", ja: "(〜に行く)途中で",                pos: "熟" },
      { id: 237, en: "over there",           ja: "あそこに[で]",                          pos: "熟" },
      { id: 238, en: "these days",           ja: "近ごろ(は)",                            pos: "熟" },
      { id: 239, en: "a kind [sort] of ~",   ja: "一種の、〜のようなもの",                pos: "熟" },
      { id: 240, en: "a lot of ~ / lots of ~", ja: "たくさんの〜",                        pos: "熟" },
      { id: 241, en: "A such as B",          ja: "BのようなA、例えばB",                   pos: "熟" },
      { id: 242, en: "and so on [forth]",    ja: "〜など",                                pos: "熟" },
      { id: 243, en: "here is [are] ~",      ja: "これが〜です、〜をどうぞ",              pos: "熟" },
      { id: 244, en: "How about ~?",         ja: "(提案・勧誘)〜(して)はいかがですか",    pos: "熟" },
      { id: 245, en: "no longer ~",          ja: "もはや〜ない",                          pos: "熟" },
      { id: 246, en: "not only A but (also) B", ja: "AだけでなくBも",                    pos: "熟" },
      { id: 247, en: "so ~ that ...",        ja: "とても〜なので…",                       pos: "熟" },
      { id: 248, en: "too ~ to do",          ja: "あまりに〜なので…できない",             pos: "熟" },
      { id: 249, en: "used to do [be ~]",    ja: "以前はよく…した[〜であった]",           pos: "熟" },
      { id: 250, en: "would like [love] to do", ja: "…したいと思う",                     pos: "熟" },
    ],
  },

  // ── Drill 13（単語 251〜270）動詞① ──
  {
    id: 13, title: "Drill 13", subtitle: "単語① 251〜270",
    words: [
      { id: 251, en: "create",    ja: "を創造する",                   pos: "動" },
      { id: 252, en: "base",      ja: "の基礎を置く",                 pos: "動" },
      { id: 253, en: "repair",    ja: "を修理[修復]する",             pos: "動" },
      { id: 254, en: "fail",      ja: "失敗する；(に)不合格になる",   pos: "動" },
      { id: 255, en: "accept",    ja: "を受け入れる",                 pos: "動" },
      { id: 256, en: "belong",    ja: "属する",                       pos: "動" },
      { id: 257, en: "exchange",  ja: "を交換する；を取り替える",     pos: "動" },
      { id: 258, en: "complete",  ja: "を完成させる、終える",         pos: "動" },
      { id: 259, en: "treat",     ja: "を扱う；を治療する",           pos: "動" },
      { id: 260, en: "cross",     ja: "を横切る；(と)交差する",       pos: "動" },
      { id: 261, en: "hide",      ja: "を隠す；隠れる",               pos: "動" },
      { id: 262, en: "shake",     ja: "を振る；握手をする",           pos: "動" },
      { id: 263, en: "challenge", ja: "に挑戦する",                   pos: "動" },
      { id: 264, en: "connect",   ja: "をつなぐ；を関連づける",       pos: "動" },
      { id: 265, en: "reply",     ja: "返事をする；と答える",         pos: "動" },
      { id: 266, en: "beat",      ja: "を打ち負かす；(を)打つ、たたく", pos: "動" },
      { id: 267, en: "share",     ja: "を分かち合う；を共有する",     pos: "動" },
      { id: 268, en: "observe",   ja: "を観察する；に気づく",         pos: "動" },
      { id: 269, en: "mark",      ja: "にしるしをつける；(〜の)にあたる", pos: "動" },
      { id: 270, en: "burn",      ja: "を燃やす、焦げる；日焼けする", pos: "動" },
    ],
  },

  // ── Drill 14（単語 271〜290）動詞② + 名詞① ──
  {
    id: 14, title: "Drill 14", subtitle: "単語② 271〜290",
    words: [
      { id: 271, en: "locate",    ja: "(be locatedで)位置している；を位置定する", pos: "動" },
      { id: 272, en: "fix",       ja: "を修理する；を固定する",       pos: "動" },
      { id: 273, en: "suit",      ja: "に最適[好都合]である；に似合う", pos: "動" },
      { id: 274, en: "destroy",   ja: "を破壊する",                   pos: "動" },
      { id: 275, en: "control",   ja: "を抑制する、制御する；を管理する", pos: "動" },
      { id: 276, en: "respond",   ja: "返答する；〜に返答する、反応する", pos: "動" },
      { id: 277, en: "depend",    ja: "当てにする；〜によって異なる、次第だ", pos: "動" },
      { id: 278, en: "forgive",   ja: "を許す",                       pos: "動" },
      { id: 279, en: "attack",    ja: "を攻撃する",                   pos: "動" },
      { id: 280, en: "sink",      ja: "沈む",                         pos: "動" },
      { id: 281, en: "appreciate",ja: "に感謝する",                   pos: "動" },
      { id: 282, en: "feed",      ja: "に食べ物[えさ・肥料]を与える", pos: "動" },
      { id: 283, en: "success",   ja: "成功したこと[人]",             pos: "名" },
      { id: 284, en: "mystery",   ja: "謎、未知のこと；神秘；推理小説", pos: "名" },
      { id: 285, en: "ceremony",  ja: "式典、儀式",                   pos: "名" },
      { id: 286, en: "schedule",  ja: "予定(表)；時刻表、時間割",     pos: "名" },
      { id: 287, en: "damage",    ja: "損傷、損害、悪影響",           pos: "名" },
      { id: 288, en: "model",     ja: "型；模型；模範",               pos: "名" },
      { id: 289, en: "search",    ja: "捜索；(データの)検索；を調べる", pos: "名" },
      { id: 290, en: "project",   ja: "計画；事業",                   pos: "名" },
    ],
  },

  // ── Drill 15（単語 291〜310）名詞② ──
  {
    id: 15, title: "Drill 15", subtitle: "単語③ 291〜310",
    words: [
      { id: 291, en: "form",      ja: "形態；形；用紙",               pos: "名" },
      { id: 292, en: "scene",     ja: "場面；現場；光景",             pos: "名" },
      { id: 293, en: "accident",  ja: "事故；偶然",                   pos: "名" },
      { id: 294, en: "contact",   ja: "連絡；接触",                   pos: "名" },
      { id: 295, en: "image",     ja: "イメージ、印象；像、画像",     pos: "名" },
      { id: 296, en: "trust",     ja: "信頼、信用",                   pos: "名" },
      { id: 297, en: "quality",   ja: "質；品質",                     pos: "名" },
      { id: 298, en: "action",    ja: "行動",                         pos: "名" },
      { id: 299, en: "lack",      ja: "不足、ないこと",               pos: "名" },
      { id: 300, en: "spot",      ja: "場所；斑点、汚点",             pos: "名" },
      { id: 301, en: "truth",     ja: "真実、本当のこと",             pos: "名" },
      { id: 302, en: "effort",    ja: "努力",                         pos: "名" },
      { id: 303, en: "type",      ja: "型、タイプ",                   pos: "名" },
      { id: 304, en: "site",      ja: "敷地、土地；(インターネットの)サイト", pos: "名" },
      { id: 305, en: "tool",      ja: "手段；道具",                   pos: "名" },
      { id: 306, en: "couple",    ja: "(同一の)2つ、2人；カップル、夫婦", pos: "名" },
      { id: 307, en: "hero",      ja: "ヒーロー、英雄；(男性の)主人公", pos: "名" },
      { id: 308, en: "courage",   ja: "勇気",                         pos: "名" },
      { id: 309, en: "board",     ja: "(ある目的の)板、掲示板；板(材)；委員会", pos: "名" },
      { id: 310, en: "purpose",   ja: "目的、意図",                   pos: "名" },
    ],
  },

  // ── Drill 16（単語 311〜330）名詞③ + 形容詞① ──
  {
    id: 16, title: "Drill 16", subtitle: "単語④ 311〜330",
    words: [
      { id: 311, en: "waste",      ja: "無駄、浪費；廃棄物",          pos: "名" },
      { id: 312, en: "shape",      ja: "形；状態；体型",              pos: "名" },
      { id: 313, en: "technique",  ja: "技能、技術",                  pos: "名" },
      { id: 314, en: "middle",     ja: "真ん中、中央",                pos: "名" },
      { id: 315, en: "spirit",     ja: "精神、心；(〜s)気分",         pos: "名" },
      { id: 316, en: "partner",    ja: "パートナー；仲間；配偶者",    pos: "名" },
      { id: 317, en: "population", ja: "人口；〜の人口",              pos: "名" },
      { id: 318, en: "fever",      ja: "熱；発熱、熱狂",              pos: "名" },
      { id: 319, en: "method",     ja: "方法",                        pos: "名" },
      { id: 320, en: "structure",  ja: "構造；構造物",                pos: "名" },
      { id: 321, en: "background", ja: "経歴、生い立ち；背景情報；背景", pos: "名" },
      { id: 322, en: "combination",ja: "組み合わせ、結合",            pos: "名" },
      { id: 323, en: "official",   ja: "公式の；公務(上)の",          pos: "形" },
      { id: 324, en: "flat",       ja: "平らな；起伏のない；空気の抜けた", pos: "形" },
      { id: 325, en: "serious",    ja: "深刻な；まじめな；本気の",    pos: "形" },
      { id: 326, en: "ordinary",   ja: "普通の；ありふれた",          pos: "形" },
      { id: 327, en: "private",    ja: "私的な、個人的な；秘密の",    pos: "形" },
      { id: 328, en: "major",      ja: "重大な；主要な；大きい方の",  pos: "形" },
      { id: 329, en: "classical",  ja: "クラシックの；古典的な",      pos: "形" },
      { id: 330, en: "honest",     ja: "正直な；率直な",              pos: "形" },
    ],
  },

  // ── Drill 17（単語 331〜354）形容詞② ──
  {
    id: 17, title: "Drill 17", subtitle: "単語⑤ 331〜354",
    words: [
      { id: 331, en: "excellent",  ja: "とても優れた；すばらしい",    pos: "形" },
      { id: 332, en: "whole",      ja: "全体の",                      pos: "形" },
      { id: 333, en: "central",    ja: "中心(部)の；中心的な",        pos: "形" },
      { id: 334, en: "ancient",    ja: "古代の",                      pos: "形" },
      { id: 335, en: "fantastic",  ja: "とてもすばらしい；空想的な",  pos: "形" },
      { id: 336, en: "regular",    ja: "定期的な；規則正しい；通常の", pos: "形" },
      { id: 337, en: "basic",      ja: "基本的な、初歩的な；重要な",  pos: "形" },
      { id: 338, en: "huge",       ja: "巨大な；莫大な",              pos: "形" },
      { id: 339, en: "empty",      ja: "空の；空いている",            pos: "形" },
      { id: 340, en: "smart",      ja: "頭のよい、賢い",              pos: "形" },
      { id: 341, en: "general",    ja: "大まかな；全般的な",          pos: "形" },
      { id: 342, en: "single",     ja: "たった1つ[1人]の；個々の",    pos: "形" },
      { id: 343, en: "responsible",ja: "責任のある",                  pos: "形" },
      { id: 344, en: "fresh",      ja: "新鮮な；できたての；すがすがしい", pos: "形" },
      { id: 345, en: "familiar",   ja: "熟知している；よく知られている；親しい", pos: "形" },
      { id: 346, en: "native",     ja: "出生地の、母国の；その土地固有の", pos: "形" },
      { id: 347, en: "instant",    ja: "即時の；即座の",              pos: "形" },
      { id: 348, en: "lovely",     ja: "すてきな、すばらしい；美しい", pos: "形" },
      { id: 349, en: "clear",      ja: "明らかな、はっきりした；透明な", pos: "形" },
      { id: 350, en: "convenient", ja: "都合のよい、便利な",          pos: "形" },
      { id: 351, en: "crazy",      ja: "夢中で；ばかげた；いらいらして", pos: "形" },
      { id: 352, en: "funny",      ja: "おかしい、滑稽な；奇妙な",   pos: "形" },
      { id: 353, en: "secret",     ja: "秘密の",                      pos: "形" },
      { id: 354, en: "remote",     ja: "(距離的・時間的に)(遠く)離れた", pos: "形" },
    ],
  },
];
