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
      title: 'お肉 · Meat',
      items: [
        { emoji: '🥩', jp: 'カルビ', ruby: 'カルビ', romaji: 'karubi', zh: '牛五花', en: 'short rib' },
        { emoji: '🥩', jp: '上カルビ', say: 'じょうカルビ', ruby: '<ruby>上<rt>じょう</rt></ruby>カルビ', romaji: 'jō-karubi', zh: '上等牛五花', en: 'premium short rib' },
        { emoji: '🥩', jp: 'ハラミ', ruby: 'ハラミ', romaji: 'harami', zh: '牛橫膈膜', en: 'skirt steak' },
        { emoji: '👅', jp: 'タン', ruby: 'タン', romaji: 'tan', zh: '牛舌', en: 'beef tongue' },
        { emoji: '🥩', jp: 'ロース', ruby: 'ロース', romaji: 'rōsu', zh: '里肌肉', en: 'loin' },
        { emoji: '🥓', jp: '豚トロ', say: 'とんトロ', ruby: '<ruby>豚<rt>とん</rt></ruby>トロ', romaji: 'ton-toro', zh: '松阪豬', en: 'pork jowl' },
        { emoji: '🍗', jp: '鶏もも', say: 'とりもも', ruby: '<ruby>鶏<rt>とり</rt></ruby>もも', romaji: 'tori-momo', zh: '雞腿肉', en: 'chicken thigh' },
        { emoji: '🍢', jp: 'ホルモン', ruby: 'ホルモン', romaji: 'horumon', zh: '牛腸', en: 'beef intestines' }
      ]
    },
    {
      title: 'サイド · Sides',
      items: [
        { emoji: '🍚', jp: 'ライス', ruby: 'ライス', romaji: 'raisu', zh: '白飯', en: 'rice' },
        { emoji: '🌶', jp: 'キムチ', ruby: 'キムチ', romaji: 'kimuchi', zh: '泡菜', en: 'kimchi' },
        { emoji: '🥬', jp: 'ナムル', ruby: 'ナムル', romaji: 'namuru', zh: '韓式涼拌菜', en: 'seasoned vegetables' },
        { emoji: '🥬', jp: 'サンチュ', ruby: 'サンチュ', romaji: 'sanchu', zh: '生菜', en: 'lettuce wraps' },
        { emoji: '🍲', jp: 'わかめスープ', ruby: 'わかめスープ', romaji: 'wakame sūpu', zh: '海帶芽湯', en: 'seaweed soup' },
        { emoji: '🍚', jp: 'ビビンバ', ruby: 'ビビンバ', romaji: 'bibinba', zh: '石鍋拌飯', en: 'bibimbap' }
      ]
    }
  ]
}
