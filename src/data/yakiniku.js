// 焼肉店 (Yakiniku) — grill-your-own meat, all-you-can-eat, sides, changing the grill.
export const yakiniku = {
  id: 'yakiniku',
  title: 'Yakiniku (Grilled Meat)',
  titleJp: '焼肉店',
  emoji: '🥩',
  description: 'Grill-your-own meat — cuts, all-you-can-eat, sides, and changing the grill net.',
  lines: [
    {
      speaker: 'staff',
      jp: 'いらっしゃいませ。何名様ですか？',
      ruby: 'いらっしゃいませ。<ruby>何名様<rt>なんめいさま</rt></ruby>ですか？',
      romaji: 'Irasshaimase. Nanmei-sama desu ka?',
      zh: '歡迎光臨。請問幾位?',
      en: 'Welcome. How many people?'
    },
    {
      speaker: 'you',
      jp: '二人です。',
      ruby: '<ruby>二人<rt>ふたり</rt></ruby>です。',
      romaji: 'Futari desu.',
      zh: '兩位。',
      en: 'Two people.'
    },
    {
      speaker: 'staff',
      jp: 'お席へどうぞ。まずお飲み物はいかがですか？',
      ruby: 'お<ruby>席<rt>せき</rt></ruby>へどうぞ。まずお<ruby>飲<rt>の</rt></ruby>み<ruby>物<rt>もの</rt></ruby>はいかがですか？',
      romaji: 'O-seki e dōzo. Mazu o-nomimono wa ikaga desu ka?',
      zh: '這邊請坐。先來點飲料如何?',
      en: 'This way to your seats. First, would you like something to drink?'
    },
    {
      speaker: 'you',
      jp: '生ビールを二つお願いします。',
      ruby: '<ruby>生<rt>なま</rt></ruby>ビールを<ruby>二<rt>ふた</rt></ruby>つお<ruby>願<rt>ねが</rt></ruby>いします。',
      romaji: 'Nama-bīru o futatsu onegai shimasu.',
      zh: '請給我兩杯生啤酒。',
      en: 'Two draft beers, please.'
    },
    {
      speaker: 'staff',
      jp: 'ご注文はお決まりですか？',
      ruby: 'ご<ruby>注文<rt>ちゅうもん</rt></ruby>はお<ruby>決<rt>き</rt></ruby>まりですか？',
      romaji: 'Go-chūmon wa o-kimari desu ka?',
      zh: '請問決定好要點什麼了嗎?',
      en: 'Are you ready to order?'
    },
    {
      speaker: 'you',
      jp: '食べ放題はありますか？',
      ruby: '<ruby>食<rt>た</rt></ruby>べ<ruby>放題<rt>ほうだい</rt></ruby>はありますか？',
      romaji: 'Tabehōdai wa arimasu ka?',
      zh: '有吃到飽嗎?',
      en: 'Do you have all-you-can-eat?'
    },
    {
      speaker: 'staff',
      jp: 'はい、九十分で一人三千円です。',
      ruby: 'はい、<ruby>九十分<rt>きゅうじっぷん</rt></ruby>で<ruby>一人<rt>ひとり</rt></ruby><ruby>三千円<rt>さんぜんえん</rt></ruby>です。',
      romaji: 'Hai, kyūjuppun de hitori sanzen-en desu.',
      zh: '有的,九十分鐘每人三千日圓。',
      en: 'Yes, 90 minutes for 3,000 yen per person.'
    },
    {
      speaker: 'you',
      jp: 'じゃあ、二人とも食べ放題でお願いします。',
      ruby: 'じゃあ、<ruby>二人<rt>ふたり</rt></ruby>とも<ruby>食<rt>た</rt></ruby>べ<ruby>放題<rt>ほうだい</rt></ruby>でお<ruby>願<rt>ねが</rt></ruby>いします。',
      romaji: 'Jā, futari tomo tabehōdai de onegai shimasu.',
      zh: '那麼,兩個人都要吃到飽。',
      en: "Then, all-you-can-eat for both of us, please."
    },
    {
      speaker: 'staff',
      jp: 'かしこまりました。まずは何を焼きますか？',
      ruby: 'かしこまりました。まずは<ruby>何<rt>なに</rt></ruby>を<ruby>焼<rt>や</rt></ruby>きますか？',
      romaji: 'Kashikomarimashita. Mazu wa nani o yakimasu ka?',
      zh: '好的。要先烤什麼呢?',
      en: 'Certainly. What will you grill first?'
    },
    {
      speaker: 'you',
      jp: 'カルビとハラミ、タンをください。',
      ruby: 'カルビとハラミ、タンをください。',
      romaji: 'Karubi to harami, tan o kudasai.',
      zh: '請給我牛五花、牛橫膈膜和牛舌。',
      en: 'Short rib, skirt steak, and tongue, please.'
    },
    {
      speaker: 'staff',
      jp: 'はい。お肉はすぐにお持ちします。',
      ruby: 'はい。お<ruby>肉<rt>にく</rt></ruby>はすぐにお<ruby>持<rt>も</rt></ruby>ちします。',
      romaji: 'Hai. O-niku wa sugu ni o-mochi shimasu.',
      zh: '好的。肉馬上為您送來。',
      en: 'Sure. The meat will be right out.'
    },
    {
      speaker: 'you',
      jp: 'すみません、ご飯とキムチも追加でお願いします。',
      ruby: 'すみません、ご<ruby>飯<rt>はん</rt></ruby>とキムチも<ruby>追加<rt>ついか</rt></ruby>でお<ruby>願<rt>ねが</rt></ruby>いします。',
      romaji: 'Sumimasen, gohan to kimuchi mo tsuika de onegai shimasu.',
      zh: '不好意思,再加點白飯和泡菜。',
      en: 'Excuse me, also add rice and kimchi, please.'
    },
    {
      speaker: 'staff',
      jp: '大盛りになさいますか？',
      say: 'おおもりになさいますか？',
      ruby: '<ruby>大盛<rt>おおも</rt></ruby>りになさいますか？',
      romaji: 'Ōmori ni nasaimasu ka?',
      zh: '白飯要大碗的嗎?',
      en: 'Would you like a large portion?'
    },
    {
      speaker: 'you',
      jp: '普通でいいです。',
      ruby: '<ruby>普通<rt>ふつう</rt></ruby>でいいです。',
      romaji: 'Futsū de ii desu.',
      zh: '普通的就好。',
      en: 'Regular is fine.'
    },
    {
      speaker: 'you',
      jp: 'この網、もう変えてもらえますか？',
      say: 'このあみ、もう変えてもらえますか？',
      ruby: 'この<ruby>網<rt>あみ</rt></ruby>、もう<ruby>変<rt>か</rt></ruby>えてもらえますか？',
      romaji: 'Kono ami, mō kaete moraemasu ka?',
      zh: '這個烤網可以幫我換一下嗎?',
      en: 'Could you change this grill net now?'
    },
    {
      speaker: 'staff',
      jp: 'はい、すぐにお取り替えします。',
      ruby: 'はい、すぐにお<ruby>取<rt>と</rt></ruby>り<ruby>替<rt>か</rt></ruby>えします。',
      romaji: 'Hai, sugu ni o-torikae shimasu.',
      zh: '好的,馬上幫您更換。',
      en: 'Yes, I will replace it right away.'
    },
    {
      speaker: 'you',
      jp: 'お腹いっぱいです。お会計お願いします。',
      ruby: 'お<ruby>腹<rt>なか</rt></ruby>いっぱいです。お<ruby>会計<rt>かいけい</rt></ruby>お<ruby>願<rt>ねが</rt></ruby>いします。',
      romaji: 'O-naka ippai desu. O-kaikei onegai shimasu.',
      zh: '我吃飽了。麻煩結帳。',
      en: "I'm full. The bill, please."
    }
  ],
  menu: [
    {
      title: '牛肉 · Beef',
      items: [
        { emoji: '🥩', jp: 'カルビ', ruby: 'カルビ', romaji: 'karubi', zh: '牛五花', en: 'short rib' },
        { emoji: '🥩', jp: '上カルビ', say: 'じょうカルビ', ruby: '<ruby>上<rt>じょう</rt></ruby>カルビ', romaji: 'jō-karubi', zh: '上等牛五花', en: 'premium short rib' },
        { emoji: '🥩', jp: '特上カルビ', say: 'とくじょうカルビ', ruby: '<ruby>特上<rt>とくじょう</rt></ruby>カルビ', romaji: 'tokujō-karubi', zh: '特上牛五花', en: 'top-grade short rib' },
        { emoji: '🥩', jp: 'ハラミ', ruby: 'ハラミ', romaji: 'harami', zh: '牛橫膈膜', en: 'skirt steak' },
        { emoji: '🥩', jp: 'サガリ', ruby: 'サガリ', romaji: 'sagari', zh: '牛吊帶（橫膈膜）', en: 'hanger steak' },
        { emoji: '🥩', jp: 'ロース', ruby: 'ロース', romaji: 'rōsu', zh: '牛里肌', en: 'loin' },
        { emoji: '🥩', jp: 'リブロース', ruby: 'リブロース', romaji: 'ribu-rōsu', zh: '肋眼', en: 'rib loin' },
        { emoji: '🥩', jp: 'ミスジ', ruby: 'ミスジ', romaji: 'misuji', zh: '牛肩胛（三筋）', en: 'top blade' },
        { emoji: '🥩', jp: 'イチボ', ruby: 'イチボ', romaji: 'ichibo', zh: '牛臀肉', en: 'rump cap' },
        { emoji: '🥩', jp: 'ザブトン', ruby: 'ザブトン', romaji: 'zabuton', zh: '牛肩胛裡脊', en: 'chuck flap' }
      ]
    },
    {
      title: 'タン・ホルモン · Tongue & offal',
      items: [
        { emoji: '👅', jp: 'タン', ruby: 'タン', romaji: 'tan', zh: '牛舌', en: 'beef tongue' },
        { emoji: '👅', jp: '上タン', say: 'じょうタン', ruby: '<ruby>上<rt>じょう</rt></ruby>タン', romaji: 'jō-tan', zh: '上等牛舌', en: 'premium tongue' },
        { emoji: '🧂', jp: 'タン塩', say: 'タンしお', ruby: 'タン<ruby>塩<rt>しお</rt></ruby>', romaji: 'tan-shio', zh: '鹽味牛舌', en: 'salted tongue' },
        { emoji: '🍢', jp: 'ホルモン', ruby: 'ホルモン', romaji: 'horumon', zh: '牛腸', en: 'beef intestines' },
        { emoji: '🍢', jp: 'ミノ', ruby: 'ミノ', romaji: 'mino', zh: '牛胃（毛肚）', en: 'beef tripe' },
        { emoji: '🍢', jp: 'シマチョウ', ruby: 'シマチョウ', romaji: 'shimachō', zh: '牛大腸', en: 'large intestine' },
        { emoji: '❤️', jp: 'ハツ', ruby: 'ハツ', romaji: 'hatsu', zh: '牛心', en: 'beef heart' },
        { emoji: '🍢', jp: 'レバー', ruby: 'レバー', romaji: 'rebā', zh: '牛肝', en: 'beef liver' },
        { emoji: '🍢', jp: 'センマイ', ruby: 'センマイ', romaji: 'senmai', zh: '牛百葉', en: 'beef omasum' }
      ]
    },
    {
      title: '豚・鶏 · Pork & chicken',
      items: [
        { emoji: '🥓', jp: '豚カルビ', say: 'ぶたカルビ', ruby: '<ruby>豚<rt>ぶた</rt></ruby>カルビ', romaji: 'buta-karubi', zh: '豬五花', en: 'pork belly' },
        { emoji: '🥓', jp: '豚トロ', say: 'とんトロ', ruby: '<ruby>豚<rt>とん</rt></ruby>トロ', romaji: 'ton-toro', zh: '松阪豬', en: 'pork jowl' },
        { emoji: '🍗', jp: '鶏もも', say: 'とりもも', ruby: '<ruby>鶏<rt>とり</rt></ruby>もも', romaji: 'tori-momo', zh: '雞腿肉', en: 'chicken thigh' }
      ]
    },
    {
      title: '野菜・ご飯・スープ · Veg, rice & soup',
      items: [
        { emoji: '🥗', jp: '野菜盛り合わせ', say: 'やさいもりあわせ', ruby: '<ruby>野菜<rt>やさい</rt></ruby><ruby>盛<rt>も</rt></ruby>り<ruby>合<rt>あ</rt></ruby>わせ', romaji: 'yasai moriawase', zh: '蔬菜拼盤', en: 'assorted vegetables' },
        { emoji: '🍄', jp: 'しいたけ', ruby: 'しいたけ', romaji: 'shiitake', zh: '香菇', en: 'shiitake mushroom' },
        { emoji: '🧅', jp: '玉ねぎ', say: 'たまねぎ', ruby: '<ruby>玉<rt>たま</rt></ruby>ねぎ', romaji: 'tamanegi', zh: '洋蔥', en: 'onion' },
        { emoji: '🥬', jp: 'キムチ', ruby: 'キムチ', romaji: 'kimuchi', zh: '泡菜', en: 'kimchi' },
        { emoji: '🥬', jp: 'ナムル', ruby: 'ナムル', romaji: 'namuru', zh: '韓式涼拌菜', en: 'seasoned vegetables' },
        { emoji: '🥬', jp: 'サンチュ', ruby: 'サンチュ', romaji: 'sanchu', zh: '生菜', en: 'lettuce wraps' },
        { emoji: '🍚', jp: 'ライス', ruby: 'ライス', romaji: 'raisu', zh: '白飯', en: 'rice' },
        { emoji: '🍚', jp: 'ビビンバ', ruby: 'ビビンバ', romaji: 'bibinba', zh: '石鍋拌飯', en: 'bibimbap' },
        { emoji: '🍜', jp: '冷麺', say: 'れいめん', ruby: '<ruby>冷麺<rt>れいめん</rt></ruby>', romaji: 'reimen', zh: '韓式冷麵', en: 'cold noodles' },
        { emoji: '🍲', jp: 'わかめスープ', ruby: 'わかめスープ', romaji: 'wakame sūpu', zh: '海帶芽湯', en: 'seaweed soup' },
        { emoji: '🍲', jp: 'クッパ', ruby: 'クッパ', romaji: 'kuppa', zh: '韓式湯飯', en: 'gukbap (rice soup)' }
      ]
    }
  ],
  phrases: [
    {
      title: 'よく使う一言 · Handy phrases',
      items: [
        { jp: '食べ放題はありますか？', ruby: '<ruby>食<rt>た</rt></ruby>べ<ruby>放題<rt>ほうだい</rt></ruby>はありますか？', zh: '有吃到飽嗎?', en: 'Do you have all-you-can-eat?' },
        { jp: '網を変えてください。', say: 'あみをかえてください。', ruby: '<ruby>網<rt>あみ</rt></ruby>を<ruby>変<rt>か</rt></ruby>えてください。', zh: '請幫我換烤網。', en: 'Please change the grill net.' },
        { jp: 'タレをもらえますか？', ruby: 'タレをもらえますか？', zh: '可以給我醬料嗎?', en: 'Could I get some sauce?' },
        { jp: 'ご飯のおかわりをください。', ruby: 'ご<ruby>飯<rt>はん</rt></ruby>のおかわりをください。', zh: '請再給我一碗飯。', en: 'Another bowl of rice, please.' },
        { jp: 'これはどのくらい焼きますか？', ruby: 'これはどのくらい<ruby>焼<rt>や</rt></ruby>きますか？', zh: '這個要烤多久?', en: 'How long should I grill this?' },
        { jp: '飲み物のおかわりをください。', ruby: '<ruby>飲<rt>の</rt></ruby>み<ruby>物<rt>もの</rt></ruby>のおかわりをください。', zh: '請再給我一杯飲料。', en: 'Another drink, please.' }
      ]
    }
  ]
}
