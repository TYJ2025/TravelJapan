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
      say: 'あと、すなぎもはありますか？',
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
      title: '鶏串 · Chicken skewers',
      items: [
        { emoji: '🍗', jp: 'もも', ruby: 'もも', romaji: 'momo', zh: '雞腿肉', en: 'chicken thigh', desc: '雞大腿肉，油脂與肉汁豐富，最受歡迎的基本款。' },
        { emoji: '🍢', jp: 'ねぎま', ruby: 'ねぎま', romaji: 'negima', zh: '蔥段雞肉串', en: 'chicken & leek', desc: '雞腿肉與大蔥交替串燒，甜蔥配雞肉超經典。' },
        { emoji: '🍢', jp: 'せせり', ruby: 'せせり', romaji: 'seseri', zh: '雞頸肉', en: 'chicken neck', desc: '雞脖子肉，一隻雞只有一點點，彈牙有嚼勁。' },
        { emoji: '🍡', jp: 'つくね', ruby: 'つくね', romaji: 'tsukune', zh: '雞肉丸', en: 'chicken meatball', desc: '雞絞肉做成的肉丸，常沾蛋黃或醬汁享用。' },
        { emoji: '🍗', jp: 'ささみ', ruby: 'ささみ', romaji: 'sasami', zh: '雞柳', en: 'chicken tender', desc: '雞里肌，脂肪最少、口感柔嫩清爽。' },
        { emoji: '🍗', jp: '鶏むね', say: 'とりむね', ruby: '<ruby>鶏<rt>とり</rt></ruby>むね', romaji: 'tori-mune', zh: '雞胸肉', en: 'chicken breast', desc: '雞胸肉，低脂清爽、肉質紮實。' },
        { emoji: '🍢', jp: '砂肝', say: 'すなぎも', ruby: '<ruby>砂肝<rt>すなぎも</rt></ruby>', romaji: 'sunagimo', zh: '雞胗', en: 'gizzard', desc: '雞的胃（砂囊），脆脆的特殊口感。' },
        { emoji: '🍢', jp: 'レバー', ruby: 'レバー', romaji: 'rebā', zh: '雞肝', en: 'liver', desc: '雞肝，綿密濃郁、鐵味十足。' },
        { emoji: '🤍', jp: '白レバー', say: 'しろレバー', ruby: '<ruby>白<rt>しろ</rt></ruby>レバー', romaji: 'shiro-rebā', zh: '白肝（嫩肝）', en: 'creamy chicken liver', desc: '脂肪豐厚的高級雞肝，入口即化如鵝肝，數量稀少。' },
        { emoji: '❤️', jp: 'ハツ', ruby: 'ハツ', romaji: 'hatsu', zh: '雞心', en: 'chicken heart', desc: '雞心，結實彈牙、口感獨特。' },
        { emoji: '🍢', jp: '皮', say: 'かわ', ruby: '<ruby>皮<rt>かわ</rt></ruby>', romaji: 'kawa', zh: '雞皮', en: 'chicken skin', desc: '雞皮，烤到金黃香脆、油香四溢。' },
        { emoji: '🍢', jp: 'ぼんじり', ruby: 'ぼんじり', romaji: 'bonjiri', zh: '雞尾椎（七里香）', en: 'chicken tail', desc: '雞尾巴根部的肉，油脂豐富、又稱「七里香」。' },
        { emoji: '🍗', jp: '手羽先', say: 'てばさき', ruby: '<ruby>手羽先<rt>てばさき</rt></ruby>', romaji: 'tebasaki', zh: '雞翅', en: 'chicken wing', desc: '雞翅前段，皮脆多汁、適合用手啃。' },
        { emoji: '🍗', jp: '手羽元', say: 'てばもと', ruby: '<ruby>手羽元<rt>てばもと</rt></ruby>', romaji: 'tebamoto', zh: '雞翅腿', en: 'chicken drumette', desc: '雞翅根部（小雞腿），肉較多、紮實多汁。' },
        { emoji: '🦴', jp: '軟骨', say: 'なんこつ', ruby: '<ruby>軟骨<rt>なんこつ</rt></ruby>', romaji: 'nankotsu', zh: '雞軟骨', en: 'chicken cartilage', desc: '雞胸或膝部軟骨，喀滋喀滋的脆口零負擔。' }
      ]
    },
    {
      title: '豚・牛串 · Pork & beef skewers',
      items: [
        { emoji: '🥓', jp: '豚バラ', say: 'ぶたバラ', ruby: '<ruby>豚<rt>ぶた</rt></ruby>バラ', romaji: 'buta-bara', zh: '豬五花', en: 'pork belly', desc: '豬五花，油脂豐厚、烤後香氣十足。' },
        { emoji: '🍢', jp: '豚串', say: 'ぶたぐし', ruby: '<ruby>豚串<rt>ぶたぐし</rt></ruby>', romaji: 'buta-gushi', zh: '豬肉串', en: 'pork skewer', desc: '豬肉串，份量足、口感紮實。' },
        { emoji: '👅', jp: '牛タン', say: 'ぎゅうタン', ruby: '<ruby>牛<rt>ぎゅう</rt></ruby>タン', romaji: 'gyū-tan', zh: '牛舌', en: 'beef tongue', desc: '牛舌，彈嫩有嚼勁，配鹽與檸檬最對味。' },
        { emoji: '🥩', jp: '豚トロ', say: 'とんトロ', ruby: '<ruby>豚<rt>とん</rt></ruby>トロ', romaji: 'ton-toro', zh: '松阪豬', en: 'pork jowl', desc: '豬頸肉（松阪豬），油花細緻、脆嫩多汁。' }
      ]
    },
    {
      title: '野菜串 · Vegetable skewers',
      items: [
        { emoji: '🍄', jp: 'しいたけ', ruby: 'しいたけ', romaji: 'shiitake', zh: '香菇', en: 'shiitake mushroom', desc: '香菇，烤後鮮味濃縮、飽滿多汁。' },
        { emoji: '🍄', jp: 'エリンギ', ruby: 'エリンギ', romaji: 'eringi', zh: '杏鮑菇', en: 'king oyster mushroom', desc: '杏鮑菇，口感紮實有嚼勁、像鮑魚。' },
        { emoji: '🫑', jp: 'ピーマン', ruby: 'ピーマン', romaji: 'pīman', zh: '青椒', en: 'green pepper', desc: '青椒，微苦清爽、可解油膩。' },
        { emoji: '🧅', jp: '玉ねぎ', say: 'たまねぎ', ruby: '<ruby>玉<rt>たま</rt></ruby>ねぎ', romaji: 'tamanegi', zh: '洋蔥', en: 'onion', desc: '洋蔥，烤後變得香甜多汁。' },
        { emoji: '🌿', jp: 'ねぎ', ruby: 'ねぎ', romaji: 'negi', zh: '蔥', en: 'green onion', desc: '大蔥，烤後甜味釋出、柔軟多汁。' },
        { emoji: '🥓', jp: 'アスパラベーコン', ruby: 'アスパラベーコン', romaji: 'asupara-bēkon', zh: '蘆筍培根捲', en: 'asparagus & bacon', desc: '蘆筍用培根捲起燒烤，鹹香多汁。' },
        { emoji: '🌰', jp: '銀杏', say: 'ぎんなん', ruby: '<ruby>銀杏<rt>ぎんなん</rt></ruby>', romaji: 'ginnan', zh: '銀杏', en: 'ginkgo nuts', desc: '銀杏果，微苦回甘、口感Q彈，秋季限定感。' },
        { emoji: '🧄', jp: 'にんにく', ruby: 'にんにく', romaji: 'ninniku', zh: '蒜頭', en: 'garlic', desc: '整顆蒜頭燒烤，鬆軟香甜、不嗆。' }
      ]
    },
    {
      title: '一品料理 · Sides',
      items: [
        { emoji: '🫛', jp: '枝豆', say: 'えだまめ', ruby: '<ruby>枝豆<rt>えだまめ</rt></ruby>', romaji: 'edamame', zh: '毛豆', en: 'edamame', desc: '鹽味毛豆，配啤酒的經典前菜。' },
        { emoji: '🥬', jp: 'キャベツ', ruby: 'キャベツ', romaji: 'kyabetsu', zh: '高麗菜', en: 'raw cabbage', desc: '生高麗菜，常附味噌或鹽醬，清爽解膩。' },
        { emoji: '🍗', jp: '鶏の唐揚げ', say: 'とりのからあげ', ruby: '<ruby>鶏<rt>とり</rt></ruby>の<ruby>唐揚<rt>からあ</rt></ruby>げ', romaji: 'tori no kara-age', zh: '炸雞塊', en: 'fried chicken', desc: '日式炸雞，外酥內多汁，居酒屋必點。' },
        { emoji: '🍚', jp: '鶏スープ', say: 'とりスープ', ruby: '<ruby>鶏<rt>とり</rt></ruby>スープ', romaji: 'tori-sūpu', zh: '雞湯', en: 'chicken soup', desc: '雞高湯，溫順暖胃、收尾良伴。' }
      ]
    },
    {
      title: '鳥貴族メニューから · Torikizoku selections',
      items: [
        { emoji: '🍢', jp: 'もも貴族焼 たれ', say: 'ももきぞくやき たれ', ruby: 'もも<ruby>貴族焼<rt>きぞくやき</rt></ruby> たれ', romaji: 'momo kizokuyaki tare', zh: '鳥貴族雞腿串（醬汁）', en: 'Torikizoku thigh skewer with sauce', desc: '鳥貴族菜單的雞腿串醬汁口味。' },
        { emoji: '🍢', jp: 'むね貴族焼 塩', say: 'むねきぞくやき しお', ruby: 'むね<ruby>貴族焼<rt>きぞくやき</rt></ruby> <ruby>塩<rt>しお</rt></ruby>', romaji: 'mune kizokuyaki shio', zh: '鳥貴族雞胸串（鹽味）', en: 'Torikizoku breast skewer with salt', desc: '鳥貴族菜單的雞胸串鹽味。' },
        { emoji: '🍢', jp: 'せせり', ruby: 'せせり', romaji: 'seseri', zh: '雞頸肉', en: 'chicken neck', desc: '鳥貴族菜單的鹽烤雞頸肉。' },
        { emoji: '❤️', jp: 'ハート（ハツ）塩', say: 'ハート ハツ しお', ruby: 'ハート（ハツ）<ruby>塩<rt>しお</rt></ruby>', romaji: 'hāto hatsu shio', zh: '鹽烤雞心', en: 'salted chicken heart', desc: '鳥貴族菜單的鹽烤雞心。' },
        { emoji: '🍢', jp: 'かわ塩', say: 'かわしお', ruby: 'かわ<ruby>塩<rt>しお</rt></ruby>', romaji: 'kawa shio', zh: '鹽烤雞皮', en: 'salted chicken skin', desc: '鳥貴族菜單的鹽烤雞皮。' },
        { emoji: '🍢', jp: '砂ずり（砂肝）', say: 'すなずり すなぎも', ruby: '<ruby>砂<rt>すな</rt></ruby>ずり（<ruby>砂肝<rt>すなぎも</rt></ruby>）', romaji: 'sunazuri sunagimo', zh: '雞胗', en: 'chicken gizzard', desc: '鳥貴族菜單的雞胗串。' },
        { emoji: '🦴', jp: 'やげんなんこつ', ruby: 'やげんなんこつ', romaji: 'yagen nankotsu', zh: '雞胸軟骨', en: 'chicken breast cartilage', desc: '鳥貴族菜單的鹽烤雞胸軟骨。' },
        { emoji: '🍢', jp: '三角（ぼんじり）', say: 'さんかく ぼんじり', ruby: '<ruby>三角<rt>さんかく</rt></ruby>（ぼんじり）', romaji: 'sankaku bonjiri', zh: '雞尾椎肉', en: 'chicken tail', desc: '鳥貴族菜單將雞尾椎標為三角。' },
        { emoji: '🧀', jp: 'つくねチーズ焼', say: 'つくねチーズやき', ruby: 'つくねチーズ<ruby>焼<rt>や</rt></ruby>', romaji: 'tsukune chīzu yaki', zh: '起司雞肉丸串', en: 'cheese chicken-meatball skewer', desc: '鳥貴族菜單的起司雞肉丸串。' },
        { emoji: '🍢', jp: 'むね明太マヨ焼', say: 'むねめんたいマヨやき', ruby: 'むね<ruby>明太<rt>めんたい</rt></ruby>マヨ<ruby>焼<rt>や</rt></ruby>', romaji: 'mune mentai mayo yaki', zh: '明太子美乃滋雞胸串', en: 'cod-roe mayo chicken-breast skewer', desc: '鳥貴族菜單的明太子美乃滋雞胸串。' },
        { emoji: '🫛', jp: '国産枝豆', say: 'こくさんえだまめ', ruby: '<ruby>国産<rt>こくさん</rt></ruby><ruby>枝豆<rt>えだまめ</rt></ruby>', romaji: 'kokusan edamame', zh: '國產毛豆', en: 'Japanese-grown edamame', desc: '鳥貴族菜單的快速小菜。' },
        { emoji: '🥬', jp: 'キャベツ盛', say: 'キャベツもり', ruby: 'キャベツ<ruby>盛<rt>も</rt></ruby>', romaji: 'kyabetsu mori', zh: '高麗菜拼盤', en: 'cabbage platter', desc: '鳥貴族菜單的快速小菜。' }
      ]
    }
  ],
  phrases: [
    {
      title: 'よく使う一言 · Handy phrases',
      items: [
        { jp: 'タレでお願いします。', ruby: 'タレでお<ruby>願<rt>ねが</rt></ruby>いします。', zh: '請用醬汁口味。', en: 'With sauce, please.' },
        { jp: '塩でお願いします。', ruby: '<ruby>塩<rt>しお</rt></ruby>でお<ruby>願<rt>ねが</rt></ruby>いします。', zh: '請用鹽味。', en: 'With salt, please.' },
        { jp: 'おすすめの盛り合わせはありますか？', ruby: 'おすすめの<ruby>盛<rt>も</rt></ruby>り<ruby>合<rt>あ</rt></ruby>わせはありますか？', zh: '有推薦的拼盤嗎?', en: 'Do you have a recommended assortment?' },
        { jp: 'これは何の部位ですか？', ruby: 'これは<ruby>何<rt>なん</rt></ruby>の<ruby>部位<rt>ぶい</rt></ruby>ですか？', zh: '這是哪個部位?', en: 'Which cut is this?' },
        { jp: '同じものをもう一本ください。', ruby: '<ruby>同<rt>おな</rt></ruby>じものをもう<ruby>一本<rt>いっぽん</rt></ruby>ください。', zh: '再給我一串一樣的。', en: 'One more skewer of the same, please.' },
        { jp: '半分ずつできますか？', ruby: '<ruby>半分<rt>はんぶん</rt></ruby>ずつできますか？', zh: '可以一半醬汁一半鹽味嗎?', en: 'Can I get half sauce and half salt?' }
      ]
    }
  ]
}
