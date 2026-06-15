// 大衆食堂 (Taishū shokudō) — casual everyday eatery serving teishoku set meals.
export const shokudo = {
  id: 'shokudo',
  title: 'Casual Diner (Shokudo)',
  titleJp: '大衆食堂',
  emoji: '🍚',
  description: 'Order an everyday set meal — pick your rice size, ask the daily special, and refill rice.',
  lines: [
    {
      speaker: 'staff',
      jp: 'いらっしゃいませ！お好きな席にどうぞ。',
      ruby: 'いらっしゃいませ！お<ruby>好<rt>す</rt></ruby>きな<ruby>席<rt>せき</rt></ruby>にどうぞ。',
      romaji: 'Irasshaimase! O-suki na seki ni dōzo.',
      zh: '歡迎光臨！請坐喜歡的位子。',
      en: 'Welcome! Please sit anywhere you like.'
    },
    {
      speaker: 'you',
      jp: 'ありがとうございます。今日の日替わり定食は何ですか？',
      say: 'ありがとうございます。きょうのひがわりていしょくはなんですか？',
      ruby: 'ありがとうございます。<ruby>今日<rt>きょう</rt></ruby>の<ruby>日替<rt>ひが</rt></ruby>わり<ruby>定食<rt>ていしょく</rt></ruby>は<ruby>何<rt>なん</rt></ruby>ですか？',
      romaji: 'Arigatō gozaimasu. Kyō no higawari teishoku wa nan desu ka?',
      zh: '謝謝。今天的每日定食是什麼？',
      en: "Thank you. What's today's daily special set?"
    },
    {
      speaker: 'staff',
      jp: '本日は鯖の塩焼き定食です。',
      say: 'ほんじつはさばのしおやきていしょくです。',
      ruby: '<ruby>本日<rt>ほんじつ</rt></ruby>は<ruby>鯖<rt>さば</rt></ruby>の<ruby>塩焼<rt>しおや</rt></ruby>き<ruby>定食<rt>ていしょく</rt></ruby>です。',
      romaji: 'Honjitsu wa saba no shioyaki teishoku desu.',
      zh: '今天是鹽烤鯖魚定食。',
      en: "Today it's the salt-grilled mackerel set."
    },
    {
      speaker: 'you',
      jp: 'じゃあ、生姜焼き定食をお願いします。',
      say: 'じゃあ、しょうがやきていしょくをおねがいします。',
      ruby: 'じゃあ、<ruby>生姜焼<rt>しょうがや</rt></ruby>き<ruby>定食<rt>ていしょく</rt></ruby>をお<ruby>願<rt>ねが</rt></ruby>いします。',
      romaji: 'Jā, shōgayaki teishoku o onegai shimasu.',
      zh: '那麼，請給我薑燒豬肉定食。',
      en: "Then I'll have the ginger pork set, please."
    },
    {
      speaker: 'staff',
      jp: 'かしこまりました。ご飯の量はどうしますか？',
      say: 'かしこまりました。ごはんのりょうはどうしますか？',
      ruby: 'かしこまりました。ご<ruby>飯<rt>はん</rt></ruby>の<ruby>量<rt>りょう</rt></ruby>はどうしますか？',
      romaji: 'Kashikomarimashita. Gohan no ryō wa dō shimasu ka?',
      zh: '好的。飯量要怎麼樣呢？',
      en: 'Certainly. How much rice would you like?'
    },
    {
      speaker: 'you',
      jp: 'ご飯大盛りは無料ですか？',
      say: 'ごはんおおもりはむりょうですか？',
      ruby: 'ご<ruby>飯<rt>はん</rt></ruby><ruby>大盛<rt>おおも</rt></ruby>りは<ruby>無料<rt>むりょう</rt></ruby>ですか？',
      romaji: 'Gohan ōmori wa muryō desu ka?',
      zh: '白飯大碗是免費的嗎？',
      en: 'Is a large rice portion free?'
    },
    {
      speaker: 'staff',
      jp: 'はい、大盛りは無料です。',
      say: 'はい、おおもりはむりょうです。',
      ruby: 'はい、<ruby>大盛<rt>おおも</rt></ruby>りは<ruby>無料<rt>むりょう</rt></ruby>です。',
      romaji: 'Hai, ōmori wa muryō desu.',
      zh: '是的，大碗免費。',
      en: 'Yes, large is free.'
    },
    {
      speaker: 'you',
      jp: 'じゃあ、大盛りでお願いします。',
      say: 'じゃあ、おおもりでおねがいします。',
      ruby: 'じゃあ、<ruby>大盛<rt>おおも</rt></ruby>りでお<ruby>願<rt>ねが</rt></ruby>いします。',
      romaji: 'Jā, ōmori de onegai shimasu.',
      zh: '那麼，請給我大碗。',
      en: 'Then a large portion, please.'
    },
    {
      speaker: 'you',
      jp: 'すみません、お冷をください。',
      say: 'すみません、おひやをください。',
      ruby: 'すみません、お<ruby>冷<rt>ひや</rt></ruby>をください。',
      romaji: 'Sumimasen, o-hiya o kudasai.',
      zh: '不好意思，請給我一杯水。',
      en: 'Excuse me, some water please.'
    },
    {
      speaker: 'you',
      jp: 'ご飯のおかわりはできますか？',
      say: 'ごはんのおかわりはできますか？',
      ruby: 'ご<ruby>飯<rt>はん</rt></ruby>のおかわりはできますか？',
      romaji: 'Gohan no okawari wa dekimasu ka?',
      zh: '白飯可以再添一碗嗎？',
      en: 'Can I get a refill of rice?'
    },
    {
      speaker: 'staff',
      jp: 'はい、おかわり自由です。どうぞ。',
      say: 'はい、おかわりじゆうです。どうぞ。',
      ruby: 'はい、おかわり<ruby>自由<rt>じゆう</rt></ruby>です。どうぞ。',
      romaji: 'Hai, okawari jiyū desu. Dōzo.',
      zh: '是的，可以免費續飯。請用。',
      en: 'Yes, free refills. Go ahead.'
    },
    {
      speaker: 'you',
      jp: 'ごちそうさまでした。とても美味しかったです。',
      say: 'ごちそうさまでした。とてもおいしかったです。',
      ruby: 'ごちそうさまでした。とても<ruby>美味<rt>おい</rt></ruby>しかったです。',
      romaji: 'Gochisōsama deshita. Totemo oishikatta desu.',
      zh: '謝謝招待。非常好吃。',
      en: 'Thank you for the meal. It was delicious.'
    },
    {
      speaker: 'you',
      jp: 'お会計お願いします。',
      say: 'おかいけいおねがいします。',
      ruby: 'お<ruby>会計<rt>かいけい</rt></ruby>お<ruby>願<rt>ねが</rt></ruby>いします。',
      romaji: 'O-kaikei onegai shimasu.',
      zh: '麻煩結帳。',
      en: 'The bill, please.'
    }
  ],
  menu: [
    {
      title: '定食 · Set meals',
      items: [
        { emoji: '🍱', jp: '日替わり定食', say: 'ひがわりていしょく', ruby: '<ruby>日替<rt>ひが</rt></ruby>わり<ruby>定食<rt>ていしょく</rt></ruby>', romaji: 'higawari teishoku', zh: '每日定食', en: 'daily special set', desc: '每天更換主菜的定食，通常最划算、最受常客喜愛。' },
        { emoji: '🐟', jp: '焼き魚定食', say: 'やきざかなていしょく', ruby: '<ruby>焼<rt>や</rt></ruby>き<ruby>魚<rt>ざかな</rt></ruby><ruby>定食<rt>ていしょく</rt></ruby>', romaji: 'yakizakana teishoku', zh: '烤魚定食', en: 'grilled fish set', desc: '以鹽烤鯖魚或鮭魚為主菜，配飯與味噌湯的家常定食。' },
        { emoji: '🐖', jp: '生姜焼き定食', say: 'しょうがやきていしょく', ruby: '<ruby>生姜焼<rt>しょうがや</rt></ruby>き<ruby>定食<rt>ていしょく</rt></ruby>', romaji: 'shōgayaki teishoku', zh: '薑燒豬肉定食', en: 'ginger pork set', desc: '薄切豬肉以薑汁醬油拌炒，下飯又經典的人氣定食。' },
        { emoji: '🍗', jp: '唐揚げ定食', say: 'からあげていしょく', ruby: '<ruby>唐揚<rt>からあ</rt></ruby>げ<ruby>定食<rt>ていしょく</rt></ruby>', romaji: 'kara-age teishoku', zh: '炸雞塊定食', en: 'fried chicken set', desc: '日式炸雞為主菜，外酥內多汁，份量十足的定食。' },
        { emoji: '🍖', jp: 'とんかつ定食', say: 'とんかつていしょく', ruby: 'とんかつ<ruby>定食<rt>ていしょく</rt></ruby>', romaji: 'tonkatsu teishoku', zh: '炸豬排定食', en: 'pork cutlet set', desc: '酥炸豬排佐豬排醬，附高麗菜絲與白飯的飽足定食。' },
        { emoji: '🐟', jp: 'アジフライ定食', say: 'あじフライていしょく', ruby: 'アジフライ<ruby>定食<rt>ていしょく</rt></ruby>', romaji: 'aji-furai teishoku', zh: '炸竹筴魚定食', en: 'fried horse mackerel set', desc: '酥炸竹筴魚配塔塔醬或中濃醬，平價食堂的招牌。' },
        { emoji: '🍳', jp: 'ハンバーグ定食', say: 'はんばーぐていしょく', ruby: 'ハンバーグ<ruby>定食<rt>ていしょく</rt></ruby>', romaji: 'hanbāgu teishoku', zh: '漢堡排定食', en: 'hamburg steak set', desc: '日式漢堡排淋上醬汁，大人小孩都愛的洋風定食。' },
        { emoji: '🍣', jp: '刺身定食', say: 'さしみていしょく', ruby: '<ruby>刺身<rt>さしみ</rt></ruby><ruby>定食<rt>ていしょく</rt></ruby>', romaji: 'sashimi teishoku', zh: '生魚片定食', en: 'sashimi set', desc: '當日新鮮生魚片拼盤，配飯與味噌湯的清爽定食。' }
      ]
    },
    {
      title: '丼・麺 · Rice bowls & noodles',
      items: [
        { emoji: '🍚', jp: '親子丼', say: 'おやこどん', ruby: '<ruby>親子丼<rt>おやこどん</rt></ruby>', romaji: 'oyako-don', zh: '親子丼', en: 'chicken & egg bowl', desc: '雞肉與滑蛋以高湯煮成，鋪在白飯上的經典丼飯。' },
        { emoji: '🍚', jp: '牛丼', say: 'ぎゅうどん', ruby: '<ruby>牛丼<rt>ぎゅうどん</rt></ruby>', romaji: 'gyū-don', zh: '牛丼', en: 'beef bowl', desc: '醬汁燉煮的薄切牛肉與洋蔥蓋飯，快速又下飯。' },
        { emoji: '🍚', jp: 'カツ丼', say: 'かつどん', ruby: 'カツ<ruby>丼<rt>どん</rt></ruby>', romaji: 'katsu-don', zh: '豬排丼', en: 'pork cutlet bowl', desc: '炸豬排與滑蛋以高湯煮過後蓋在飯上的豪華丼飯。' },
        { emoji: '🍤', jp: '天丼', say: 'てんどん', ruby: '<ruby>天丼<rt>てんどん</rt></ruby>', romaji: 'ten-don', zh: '天丼', en: 'tempura bowl', desc: '炸蝦與蔬菜天婦羅淋上甜醬汁的蓋飯。' },
        { emoji: '🍜', jp: 'ラーメン', ruby: 'ラーメン', romaji: 'rāmen', zh: '拉麵', en: 'ramen', desc: '醬油或味噌湯頭的拉麵，食堂常見的暖胃選擇。' },
        { emoji: '🍲', jp: 'うどん', ruby: 'うどん', romaji: 'udon', zh: '烏龍麵', en: 'udon', desc: '粗白麵條配清爽柴魚高湯，口感滑順的麵食。' },
        { emoji: '🍜', jp: 'そば', ruby: 'そば', romaji: 'soba', zh: '蕎麥麵', en: 'soba', desc: '蕎麥製細麵，可熱湯或冷沾，香氣樸實。' },
        { emoji: '🍛', jp: 'カレーライス', ruby: 'カレーライス', romaji: 'karē-raisu', zh: '咖哩飯', en: 'curry rice', desc: '濃稠日式咖哩淋在白飯上，平價又療癒的國民料理。' }
      ]
    },
    {
      title: 'サイド · Sides',
      items: [
        { emoji: '🥣', jp: '味噌汁', say: 'みそしる', ruby: '<ruby>味噌汁<rt>みそしる</rt></ruby>', romaji: 'miso-shiru', zh: '味噌湯', en: 'miso soup', desc: '味噌湯，定食常見的暖胃配湯。' },
        { emoji: '🥒', jp: '漬物', say: 'つけもの', ruby: '<ruby>漬物<rt>つけもの</rt></ruby>', romaji: 'tsukemono', zh: '醃菜', en: 'pickles', desc: '日式醃漬蔬菜，清爽解膩的配菜。' },
        { emoji: '🍚', jp: 'ご飯', say: 'ごはん', ruby: 'ご<ruby>飯<rt>はん</rt></ruby>', romaji: 'gohan', zh: '白飯', en: 'rice', desc: '白米飯，可單點或加大盛、續碗。' },
        { emoji: '🥚', jp: '生卵', say: 'なまたまご', ruby: '<ruby>生卵<rt>なまたまご</rt></ruby>', romaji: 'nama-tamago', zh: '生雞蛋', en: 'raw egg', desc: '生雞蛋，可拌入熱飯做成蛋拌飯。' }
      ]
    }
  ],
  phrases: [
    {
      title: 'よく使う一言 · Handy phrases',
      items: [
        { jp: '日替わり定食は何ですか？', say: 'ひがわりていしょくはなんですか？', ruby: '<ruby>日替<rt>ひが</rt></ruby>わり<ruby>定食<rt>ていしょく</rt></ruby>は<ruby>何<rt>なん</rt></ruby>ですか？', zh: '每日定食是什麼？', en: "What's the daily special set?" },
        { jp: 'ご飯大盛りにできますか？', say: 'ごはんおおもりにできますか？', ruby: 'ご<ruby>飯<rt>はん</rt></ruby><ruby>大盛<rt>おおも</rt></ruby>りにできますか？', zh: '白飯可以加大碗嗎？', en: 'Can I get a large rice portion?' },
        { jp: 'おかわりください。', ruby: 'おかわりください。', zh: '請再添一碗。', en: 'A refill, please.' },
        { jp: 'お冷をください。', say: 'おひやをください。', ruby: 'お<ruby>冷<rt>ひや</rt></ruby>をください。', zh: '請給我一杯水。', en: 'Some water, please.' },
        { jp: '定食にできますか？', say: 'ていしょくにできますか？', ruby: '<ruby>定食<rt>ていしょく</rt></ruby>にできますか？', zh: '可以做成定食嗎？', en: 'Can I make it a set meal?' },
        { jp: 'お会計お願いします。', say: 'おかいけいおねがいします。', ruby: 'お<ruby>会計<rt>かいけい</rt></ruby>お<ruby>願<rt>ねが</rt></ruby>いします。', zh: '麻煩結帳。', en: 'The bill, please.' }
      ]
    }
  ]
}
