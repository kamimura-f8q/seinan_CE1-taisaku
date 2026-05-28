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

];
