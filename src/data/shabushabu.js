// しゃぶしゃぶ (Shabu-shabu) — swish thin meat in broth, pick a dipping sauce, finish with shime.
export const shabushabu = {
  id: 'shabushabu',
  title: 'Shabu-shabu',
  titleJp: 'しゃぶしゃぶ',
  emoji: '🍲',
  description: 'Swish thin-sliced meat in hot broth — pick a soup, a dipping sauce, and finish with shime.',
  lines: [
    {
      speaker: 'staff',
      jp: 'いらっしゃいませ！何名様ですか？',
      ruby: 'いらっしゃいませ！<ruby>何名様<rt>なんめいさま</rt></ruby>ですか？',
      romaji: 'Irasshaimase! Nan-mei-sama desu ka?',
      zh: '歡迎光臨！請問幾位呢？',
      en: 'Welcome! How many people?'
    },
    {
      speaker: 'you',
      jp: '二人です。しゃぶしゃぶをお願いします。',
      ruby: '<ruby>二人<rt>ふたり</rt></ruby>です。しゃぶしゃぶをお<ruby>願<rt>ねが</rt></ruby>いします。',
      romaji: 'Futari desu. Shabu-shabu o onegai shimasu.',
      zh: '兩位。我們要吃涮涮鍋。',
      en: 'Two people. Shabu-shabu, please.'
    },
    {
      speaker: 'staff',
      jp: 'お出汁は昆布だしと辛口、どちらにしますか？',
      say: 'おだしはこんぶだしとからくち、どちらにしますか？',
      ruby: 'お<ruby>出汁<rt>だし</rt></ruby>は<ruby>昆布<rt>こんぶ</rt></ruby>だしと<ruby>辛口<rt>からくち</rt></ruby>、どちらにしますか？',
      romaji: 'O-dashi wa konbu-dashi to kara-kuchi, dochira ni shimasu ka?',
      zh: '湯底要昆布高湯還是辣味，要選哪一種呢？',
      en: 'For the broth, kombu dashi or the spicy one — which would you like?'
    },
    {
      speaker: 'you',
      jp: '昆布だしでお願いします。食べ放題はありますか？',
      say: 'こんぶだしでおねがいします。たべほうだいはありますか？',
      ruby: '<ruby>昆布<rt>こんぶ</rt></ruby>だしでお<ruby>願<rt>ねが</rt></ruby>いします。<ruby>食<rt>た</rt></ruby>べ<ruby>放題<rt>ほうだい</rt></ruby>はありますか？',
      romaji: 'Konbu-dashi de onegai shimasu. Tabe-hōdai wa arimasu ka?',
      zh: '請給昆布高湯。有吃到飽方案嗎？',
      en: 'Kombu dashi, please. Do you have an all-you-can-eat option?'
    },
    {
      speaker: 'staff',
      jp: 'はい、九十分の食べ放題コースがございます。',
      say: 'はい、きゅうじゅっぷんのたべほうだいコースがございます。',
      ruby: 'はい、<ruby>九十分<rt>きゅうじゅっぷん</rt></ruby>の<ruby>食<rt>た</rt></ruby>べ<ruby>放題<rt>ほうだい</rt></ruby>コースがございます。',
      romaji: 'Hai, kyū-juppun no tabe-hōdai kōsu ga gozaimasu.',
      zh: '有的，有九十分鐘的吃到飽套餐。',
      en: 'Yes, we have a 90-minute all-you-can-eat course.'
    },
    {
      speaker: 'you',
      jp: 'それにします。お肉は牛しゃぶと豚しゃぶをください。',
      say: 'それにします。おにくはぎゅうしゃぶとぶたしゃぶをください。',
      ruby: 'それにします。お<ruby>肉<rt>にく</rt></ruby>は<ruby>牛<rt>ぎゅう</rt></ruby>しゃぶと<ruby>豚<rt>ぶた</rt></ruby>しゃぶをください。',
      romaji: 'Sore ni shimasu. O-niku wa gyū-shabu to buta-shabu o kudasai.',
      zh: '就選那個。肉要牛肉涮涮和豬肉涮涮。',
      en: "I'll take that. For meat, beef shabu and pork shabu, please."
    },
    {
      speaker: 'you',
      jp: 'すみません、どうやって食べますか？',
      ruby: 'すみません、どうやって<ruby>食<rt>た</rt></ruby>べますか？',
      romaji: 'Sumimasen, dō yatte tabemasu ka?',
      zh: '不好意思，這個怎麼吃呢？',
      en: 'Excuse me, how do I eat this?'
    },
    {
      speaker: 'staff',
      jp: 'お肉を出汁に入れて、十秒ほど揺らしてください。',
      say: 'おにくをだしにいれて、じゅうびょうほどゆらしてください。',
      ruby: 'お<ruby>肉<rt>にく</rt></ruby>を<ruby>出汁<rt>だし</rt></ruby>に<ruby>入<rt>い</rt></ruby>れて、<ruby>十秒<rt>じゅうびょう</rt></ruby>ほど<ruby>揺<rt>ゆ</rt></ruby>らしてください。',
      romaji: 'O-niku o dashi ni irete, jū-byō hodo yurashite kudasai.',
      zh: '把肉放進高湯裡，輕輕涮十秒左右就好。',
      en: 'Put the meat in the broth and swish it for about ten seconds.'
    },
    {
      speaker: 'staff',
      jp: 'タレはポン酢とごまだれがございます。',
      say: 'タレはポンずとごまだれがございます。',
      ruby: 'タレは<ruby>ポン酢<rt>ポンず</rt></ruby>とごまだれがございます。',
      romaji: 'Tare wa pon-zu to goma-dare ga gozaimasu.',
      zh: '沾醬有柚子醋和芝麻醬。',
      en: 'For dipping sauce, we have ponzu and sesame sauce.'
    },
    {
      speaker: 'you',
      jp: 'ごまだれにします。野菜を追加してください。',
      say: 'ごまだれにします。やさいをついかしてください。',
      ruby: 'ごまだれにします。<ruby>野菜<rt>やさい</rt></ruby>を<ruby>追加<rt>ついか</rt></ruby>してください。',
      romaji: 'Goma-dare ni shimasu. Yasai o tsuika shite kudasai.',
      zh: '我選芝麻醬。請再加點蔬菜。',
      en: "I'll go with sesame sauce. Please add more vegetables."
    },
    {
      speaker: 'you',
      jp: '締めはうどんでお願いします。',
      say: 'しめはうどんでおねがいします。',
      ruby: '<ruby>締<rt>し</rt></ruby>めはうどんでお<ruby>願<rt>ねが</rt></ruby>いします。',
      romaji: 'Shime wa udon de onegai shimasu.',
      zh: '最後收尾請給我烏龍麵。',
      en: 'For the finish, udon please.'
    },
    {
      speaker: 'you',
      jp: 'ごちそうさま。お会計お願いします。',
      ruby: 'ごちそうさま。お<ruby>会計<rt>かいけい</rt></ruby>お<ruby>願<rt>ねが</rt></ruby>いします。',
      romaji: 'Gochisōsama. O-kaikei onegai shimasu.',
      zh: '謝謝招待。麻煩結帳。',
      en: 'Thanks for the meal. The bill, please.'
    }
  ],
  menu: [
    {
      title: 'お肉 · Meat',
      items: [
        { emoji: '🥩', jp: '牛しゃぶ', say: 'ぎゅうしゃぶ', ruby: '<ruby>牛<rt>ぎゅう</rt></ruby>しゃぶ', romaji: 'gyū-shabu', zh: '牛肉涮涮', en: 'beef shabu', desc: '薄切牛肉，在高湯裡輕涮幾秒，柔嫩又多汁。' },
        { emoji: '🥓', jp: '豚しゃぶ', say: 'ぶたしゃぶ', ruby: '<ruby>豚<rt>ぶた</rt></ruby>しゃぶ', romaji: 'buta-shabu', zh: '豬肉涮涮', en: 'pork shabu', desc: '薄切豬肉，涮過後清爽不油膩，沾醬最對味。' },
        { emoji: '🐷', jp: 'あぐー豚（沖縄）', say: 'あぐーぶた（おきなわ）', ruby: 'あぐー<ruby>豚<rt>ぶた</rt></ruby>（<ruby>沖縄<rt>おきなわ</rt></ruby>）', romaji: 'agū-buta (Okinawa)', zh: '阿古豬（沖繩）', en: 'Agu pork (Okinawa)', desc: '沖繩高級豬品牌，油脂甘甜清爽、入口即化。' },
        { emoji: '🐖', jp: '黒豚', say: 'くろぶた', ruby: '<ruby>黒豚<rt>くろぶた</rt></ruby>', romaji: 'kuro-buta', zh: '黑豬', en: 'kurobuta (black pork)', desc: '鹿兒島黑毛豬，肉質細緻、油脂鮮甜有層次。' },
        { emoji: '🐑', jp: 'ラム', ruby: 'ラム', romaji: 'ramu', zh: '羊肉（小羊）', en: 'lamb', desc: '小羊肉，風味獨特、油脂香濃，喜歡羊味者必試。' }
      ]
    },
    {
      title: '野菜・きのこ · Veg & mushrooms',
      items: [
        { emoji: '🥗', jp: '野菜盛り合わせ', say: 'やさいもりあわせ', ruby: '<ruby>野菜<rt>やさい</rt></ruby><ruby>盛<rt>も</rt></ruby>り<ruby>合<rt>あ</rt></ruby>わせ', romaji: 'yasai moriawase', zh: '綜合蔬菜拼盤', en: 'assorted vegetables', desc: '多種蔬菜的綜合拼盤，份量足、搭配涮肉剛剛好。' },
        { emoji: '🥬', jp: '白菜', say: 'はくさい', ruby: '<ruby>白菜<rt>はくさい</rt></ruby>', romaji: 'hakusai', zh: '大白菜', en: 'napa cabbage', desc: '大白菜，吸飽湯汁後甘甜多汁，火鍋必備。' },
        { emoji: '🌿', jp: '春菊', say: 'しゅんぎく', ruby: '<ruby>春菊<rt>しゅんぎく</rt></ruby>', romaji: 'shungiku', zh: '茼蒿', en: 'chrysanthemum greens', desc: '茼蒿，帶獨特清香微苦，是涮涮鍋的經典青菜。' },
        { emoji: '🌿', jp: 'ねぎ', ruby: 'ねぎ', romaji: 'negi', zh: '蔥', en: 'green onion', desc: '大蔥，煮過後甜味釋出、柔軟入味。' },
        { emoji: '🍄', jp: 'しいたけ', ruby: 'しいたけ', romaji: 'shiitake', zh: '香菇', en: 'shiitake mushroom', desc: '香菇，鮮味濃郁，能為湯底增添香氣。' },
        { emoji: '🍄', jp: 'えのき', ruby: 'えのき', romaji: 'enoki', zh: '金針菇', en: 'enoki mushroom', desc: '金針菇，細長爽脆、吸湯後滑順好入口。' },
        { emoji: '🍲', jp: '豆腐', say: 'とうふ', ruby: '<ruby>豆腐<rt>とうふ</rt></ruby>', romaji: 'tōfu', zh: '豆腐', en: 'tofu', desc: '豆腐，吸滿高湯後柔嫩鮮甜、暖胃。' },
        { emoji: '🍜', jp: 'しらたき', ruby: 'しらたき', romaji: 'shirataki', zh: '蒟蒻絲', en: 'shirataki noodles', desc: '蒟蒻絲，低卡爽口、Q彈有嚼勁。' }
      ]
    },
    {
      title: '締め・タレ · Finish & sauces',
      items: [
        { emoji: '🍜', jp: 'うどん', ruby: 'うどん', romaji: 'udon', zh: '烏龍麵', en: 'udon', desc: '收尾用烏龍麵，下進精華湯底吸滿鮮味。' },
        { emoji: '🍜', jp: '中華麺', say: 'ちゅうかめん', ruby: '<ruby>中華麺<rt>ちゅうかめん</rt></ruby>', romaji: 'chūka-men', zh: '中華麵（拉麵）', en: 'ramen noodles', desc: '收尾用中華麵，彈牙口感配上濃縮湯頭。' },
        { emoji: '🍚', jp: '雑炊', say: 'ぞうすい', ruby: '<ruby>雑炊<rt>ぞうすい</rt></ruby>', romaji: 'zōsui', zh: '雜炊（鍋粥）', en: 'rice porridge', desc: '把白飯與蛋加入剩湯煮成的鍋粥，是最經典的收尾。' },
        { emoji: '🍋', jp: 'ポン酢', say: 'ポンず', ruby: '<ruby>ポン酢<rt>ポンず</rt></ruby>', romaji: 'pon-zu', zh: '柚子醋醬', en: 'ponzu', desc: '柑橘風味醬油醋，清爽酸香、最能解膩。' },
        { emoji: '🥜', jp: 'ごまだれ', ruby: 'ごまだれ', romaji: 'goma-dare', zh: '芝麻醬', en: 'sesame sauce', desc: '濃郁香醇的芝麻醬，包裹肉片格外順口。' }
      ]
    }
  ],
  phrases: [
    {
      title: 'よく使う一言 · Handy phrases',
      items: [
        { jp: '食べ放題はありますか？', say: 'たべほうだいはありますか？', ruby: '<ruby>食<rt>た</rt></ruby>べ<ruby>放題<rt>ほうだい</rt></ruby>はありますか？', zh: '有吃到飽方案嗎？', en: 'Do you have an all-you-can-eat option?' },
        { jp: 'どうやって食べますか？', ruby: 'どうやって<ruby>食<rt>た</rt></ruby>べますか？', zh: '這個怎麼吃呢？', en: 'How do I eat this?' },
        { jp: '何秒くらい茹でますか？', say: 'なんびょうくらいゆでますか？', ruby: '<ruby>何秒<rt>なんびょう</rt></ruby>くらい<ruby>茹<rt>ゆ</rt></ruby>でますか？', zh: '大概要涮幾秒呢？', en: 'About how many seconds should I cook it?' },
        { jp: 'タレのおすすめは？', ruby: 'タレのおすすめは？', zh: '沾醬有推薦的嗎？', en: 'Which sauce do you recommend?' },
        { jp: '野菜を追加してください。', say: 'やさいをついかしてください。', ruby: '<ruby>野菜<rt>やさい</rt></ruby>を<ruby>追加<rt>ついか</rt></ruby>してください。', zh: '請再加點蔬菜。', en: 'Please add more vegetables.' },
        { jp: '締めはうどんでお願いします。', say: 'しめはうどんでおねがいします。', ruby: '<ruby>締<rt>し</rt></ruby>めはうどんでお<ruby>願<rt>ねが</rt></ruby>いします。', zh: '最後收尾請給我烏龍麵。', en: 'For the finish, udon please.' }
      ]
    }
  ]
}
