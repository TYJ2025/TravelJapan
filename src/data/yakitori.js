// 焼き鳥屋 (Yakitori shop) — skewers by the piece, tare vs shio, sold-out items.
export const yakitori = {
  id: 'yakitori',
  title: 'Yakitori Shop',
  titleJp: '焼き鳥屋',
  emoji: '🍢',
  description: 'Order skewers one by one — sauce or salt, by the piece, and sold-out items.',
  lines: [
    {
      speaker: 'staff',
      jp: 'いらっしゃいませ！カウンター席へどうぞ。',
      ruby: 'いらっしゃいませ！カウンター<ruby>席<rt>せき</rt></ruby>へどうぞ。',
      romaji: 'Irasshaimase! Kauntā-seki e dōzo.',
      zh: '歡迎光臨！請坐吧台座位。',
      en: 'Welcome! Please take a seat at the counter.'
    },
    {
      speaker: 'you',
      jp: 'ありがとうございます。まず、生ビールを一つください。',
      ruby: 'ありがとうございます。まず、<ruby>生<rt>なま</rt></ruby>ビールを<ruby>一<rt>ひと</rt></ruby>つください。',
      romaji: 'Arigatō gozaimasu. Mazu, nama-bīru o hitotsu kudasai.',
      zh: '謝謝。先來一杯生啤酒。',
      en: 'Thank you. First, one draft beer please.'
    },
    {
      speaker: 'staff',
      jp: 'はい。焼き鳥は何にしますか？',
      ruby: 'はい。<ruby>焼<rt>や</rt></ruby>き<ruby>鳥<rt>とり</rt></ruby>は<ruby>何<rt>なに</rt></ruby>にしますか？',
      romaji: 'Hai. Yakitori wa nani ni shimasu ka?',
      zh: '好的。烤雞串要點什麼呢？',
      en: 'Sure. What yakitori would you like?'
    },
    {
      speaker: 'you',
      jp: 'おすすめの盛り合わせはありますか？',
      ruby: 'おすすめの<ruby>盛<rt>も</rt></ruby>り<ruby>合<rt>あ</rt></ruby>わせはありますか？',
      romaji: 'Osusume no moriawase wa arimasu ka?',
      zh: '有推薦的綜合拼盤嗎？',
      en: 'Do you have a recommended assortment?'
    },
    {
      speaker: 'staff',
      jp: 'はい、五本の盛り合わせがおすすめです。',
      ruby: 'はい、<ruby>五本<rt>ごほん</rt></ruby>の<ruby>盛<rt>も</rt></ruby>り<ruby>合<rt>あ</rt></ruby>わせがおすすめです。',
      romaji: 'Hai, go-hon no moriawase ga osusume desu.',
      zh: '有的，推薦五串的綜合拼盤。',
      en: 'Yes, the five-skewer assortment is recommended.'
    },
    {
      speaker: 'you',
      jp: 'じゃあ、それをください。タレでお願いします。',
      ruby: 'じゃあ、それをください。タレでお<ruby>願<rt>ねが</rt></ruby>いします。',
      romaji: 'Jā, sore o kudasai. Tare de onegai shimasu.',
      zh: '那就來那個。請用醬汁口味。',
      en: "Then I'll have that. With sauce, please."
    },
    {
      speaker: 'staff',
      jp: 'かしこまりました。他にご注文は？',
      ruby: 'かしこまりました。<ruby>他<rt>ほか</rt></ruby>にご<ruby>注文<rt>ちゅうもん</rt></ruby>は？',
      romaji: 'Kashikomarimashita. Hoka ni go-chūmon wa?',
      zh: '好的。還需要點別的嗎？',
      en: 'Certainly. Anything else?'
    },
    {
      speaker: 'you',
      jp: 'ねぎまとつくねを一本ずつ、塩でお願いします。',
      ruby: 'ねぎまとつくねを<ruby>一本<rt>いっぽん</rt></ruby>ずつ、<ruby>塩<rt>しお</rt></ruby>でお<ruby>願<rt>ねが</rt></ruby>いします。',
      romaji: 'Negima to tsukune o ippon zutsu, shio de onegai shimasu.',
      zh: '蔥段雞肉串和雞肉丸各一串，請用鹽味。',
      en: 'One negima and one tsukune each, with salt please.'
    },
    {
      speaker: 'you',
      jp: 'あと、砂肝はありますか？',
      ruby: 'あと、<ruby>砂肝<rt>すなぎも</rt></ruby>はありますか？',
      romaji: 'Ato, sunagimo wa arimasu ka?',
      zh: '還有，有雞胗嗎？',
      en: 'Also, do you have gizzard?'
    },
    {
      speaker: 'staff',
      jp: 'はい、ございます。一本でよろしいですか？',
      ruby: 'はい、ございます。<ruby>一本<rt>いっぽん</rt></ruby>でよろしいですか？',
      romaji: 'Hai, gozaimasu. Ippon de yoroshii desu ka?',
      zh: '有的。一串可以嗎？',
      en: 'Yes, we do. Is one skewer okay?'
    },
    {
      speaker: 'you',
      jp: 'はい、一本ください。',
      ruby: 'はい、<ruby>一本<rt>いっぽん</rt></ruby>ください。',
      romaji: 'Hai, ippon kudasai.',
      zh: '好的，請給我一串。',
      en: 'Yes, one please.'
    },
    {
      speaker: 'you',
      jp: 'すみません、レバーはまだ残っていますか？',
      ruby: 'すみません、レバーはまだ<ruby>残<rt>のこ</rt></ruby>っていますか？',
      romaji: 'Sumimasen, rebā wa mada nokotte imasu ka?',
      zh: '不好意思，雞肝還有剩嗎？',
      en: 'Excuse me, do you still have liver left?'
    },
    {
      speaker: 'staff',
      jp: '申し訳ありません、レバーは売り切れです。',
      ruby: '<ruby>申<rt>もう</rt></ruby>し<ruby>訳<rt>わけ</rt></ruby>ありません、レバーは<ruby>売<rt>う</rt></ruby>り<ruby>切<rt>き</rt></ruby>れです。',
      romaji: 'Mōshiwake arimasen, rebā wa urikire desu.',
      zh: '很抱歉，雞肝已經賣完了。',
      en: "I'm sorry, the liver is sold out."
    },
    {
      speaker: 'you',
      jp: 'わかりました。じゃあ、手羽先をください。',
      ruby: 'わかりました。じゃあ、<ruby>手羽先<rt>てばさき</rt></ruby>をください。',
      romaji: 'Wakarimashita. Jā, tebasaki o kudasai.',
      zh: '了解。那就請給我雞翅。',
      en: "Understood. Then I'll have chicken wings."
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
      title: '串 · Skewers',
      items: [
        { emoji: '🍗', jp: 'もも', ruby: 'もも', romaji: 'momo', zh: '雞腿肉', en: 'chicken thigh' },
        { emoji: '🍢', jp: 'ねぎま', ruby: 'ねぎま', romaji: 'negima', zh: '蔥段雞肉串', en: 'chicken & leek' },
        { emoji: '🍡', jp: 'つくね', ruby: 'つくね', romaji: 'tsukune', zh: '雞肉丸', en: 'chicken meatball' },
        { emoji: '🍢', jp: '砂肝', ruby: '<ruby>砂肝<rt>すなぎも</rt></ruby>', romaji: 'sunagimo', zh: '雞胗', en: 'gizzard' },
        { emoji: '🍢', jp: 'レバー', ruby: 'レバー', romaji: 'rebā', zh: '雞肝', en: 'liver' },
        { emoji: '🍢', jp: '皮', ruby: '<ruby>皮<rt>かわ</rt></ruby>', romaji: 'kawa', zh: '雞皮', en: 'chicken skin' },
        { emoji: '❤️', jp: 'ハツ', ruby: 'ハツ', romaji: 'hatsu', zh: '雞心', en: 'chicken heart' },
        { emoji: '🍗', jp: '手羽先', ruby: '<ruby>手羽先<rt>てばさき</rt></ruby>', romaji: 'tebasaki', zh: '雞翅', en: 'chicken wing' },
        { emoji: '🍢', jp: 'ぼんじり', ruby: 'ぼんじり', romaji: 'bonjiri', zh: '雞屁股', en: "chicken tail" },
        { emoji: '🍄', jp: 'しいたけ', ruby: 'しいたけ', romaji: 'shiitake', zh: '香菇', en: 'shiitake mushroom' },
        { emoji: '🥓', jp: 'アスパラベーコン', ruby: 'アスパラベーコン', romaji: 'asupara-bēkon', zh: '蘆筍培根捲', en: 'asparagus & bacon' }
      ]
    }
  ]
}
