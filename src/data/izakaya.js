// 居酒屋 (Izakaya) — drinks, otoshi, small plates, nomihodai (all-you-can-drink).
export const izakaya = {
  id: 'izakaya',
  title: 'At an Izakaya',
  titleJp: '居酒屋で飲む',
  emoji: '🍶',
  description: 'Drinks, the surprise otoshi charge, grilled skewers and all-you-can-drink.',
  lines: [
    {
      speaker: 'staff',
      jp: 'いらっしゃいませ！何名様ですか？',
      ruby: 'いらっしゃいませ！<ruby>何名様<rt>なんめいさま</rt></ruby>ですか？',
      romaji: 'Irasshaimase! Nanmei-sama desu ka?',
      zh: '歡迎光臨！請問幾位？',
      en: 'Welcome! How many people?'
    },
    {
      speaker: 'you',
      jp: '三人です。',
      ruby: '<ruby>三人<rt>さんにん</rt></ruby>です。',
      romaji: 'San-nin desu.',
      zh: '三位。',
      en: 'Three people.'
    },
    {
      speaker: 'staff',
      jp: 'お席へご案内します。こちら、お通しです。',
      ruby: 'お<ruby>席<rt>せき</rt></ruby>へご<ruby>案内<rt>あんない</rt></ruby>します。こちら、お<ruby>通<rt>とお</rt></ruby>しです。',
      romaji: 'O-seki e go-annai shimasu. Kochira, o-tōshi desu.',
      zh: '我帶您入座。這是您的開胃小菜（otoshi）。',
      en: "I'll show you to your seats. Here is your otoshi (appetizer)."
    },
    {
      speaker: 'you',
      jp: 'すみません、お通しは頼んでいませんが…',
      ruby: 'すみません、お<ruby>通<rt>とお</rt></ruby>しは<ruby>頼<rt>たの</rt></ruby>んでいませんが…',
      romaji: 'Sumimasen, o-tōshi wa tanonde imasen ga…',
      zh: '不好意思，我沒有點這道開胃小菜……',
      en: "Excuse me, I didn't order this otoshi…"
    },
    {
      speaker: 'staff',
      jp: 'お通しは席料として、お一人三百円いただいております。',
      ruby: 'お<ruby>通<rt>とお</rt></ruby>しは<ruby>席料<rt>せきりょう</rt></ruby>として、お<ruby>一人<rt>ひとり</rt></ruby><ruby>三百円<rt>さんびゃくえん</rt></ruby>いただいております。',
      romaji: 'O-tōshi wa seki-ryō to shite, o-hitori sanbyaku-en itadaite orimasu.',
      zh: '開胃小菜是作為座位費，每位收取三百日圓。',
      en: 'The otoshi is a table charge of 300 yen per person.'
    },
    {
      speaker: 'you',
      jp: 'なるほど、わかりました。まず、生ビールを三つください。',
      ruby: 'なるほど、わかりました。まず、<ruby>生<rt>なま</rt></ruby>ビールを<ruby>三<rt>みっ</rt></ruby>つください。',
      romaji: 'Naruhodo, wakarimashita. Mazu, nama-bīru o mittsu kudasai.',
      zh: '原來如此，我明白了。首先，請給我三杯生啤酒。',
      en: 'I see, understood. First, three draft beers please.'
    },
    {
      speaker: 'staff',
      jp: '生ビール三つですね。かしこまりました。',
      ruby: '<ruby>生<rt>なま</rt></ruby>ビール<ruby>三<rt>みっ</rt></ruby>つですね。かしこまりました。',
      romaji: 'Nama-bīru mittsu desu ne. Kashikomarimashita.',
      zh: '三杯生啤酒，好的。沒問題。',
      en: 'Three draft beers, got it. Certainly.'
    },
    {
      speaker: 'you',
      jp: 'おすすめの料理はありますか？',
      ruby: 'おすすめの<ruby>料理<rt>りょうり</rt></ruby>はありますか？',
      romaji: 'Osusume no ryōri wa arimasu ka?',
      zh: '有推薦的料理嗎？',
      en: 'Do you have any recommended dishes?'
    },
    {
      speaker: 'staff',
      jp: '焼き鳥の盛り合わせと、だし巻き卵が人気です。',
      ruby: '<ruby>焼<rt>や</rt></ruby>き<ruby>鳥<rt>とり</rt></ruby>の<ruby>盛<rt>も</rt></ruby>り<ruby>合<rt>あ</rt></ruby>わせと、だし<ruby>巻<rt>ま</rt></ruby>き<ruby>卵<rt>たまご</rt></ruby>が<ruby>人気<rt>にんき</rt></ruby>です。',
      romaji: 'Yakitori no moriawase to, dashimaki-tamago ga ninki desu.',
      zh: '烤雞肉串拼盤和高湯煎蛋捲很受歡迎。',
      en: 'The assorted grilled skewers and the rolled omelette are popular.'
    },
    {
      speaker: 'you',
      jp: 'じゃあ、焼き鳥の盛り合わせとだし巻き卵をお願いします。',
      ruby: 'じゃあ、<ruby>焼<rt>や</rt></ruby>き<ruby>鳥<rt>とり</rt></ruby>の<ruby>盛<rt>も</rt></ruby>り<ruby>合<rt>あ</rt></ruby>わせとだし<ruby>巻<rt>ま</rt></ruby>き<ruby>卵<rt>たまご</rt></ruby>をお<ruby>願<rt>ねが</rt></ruby>いします。',
      romaji: 'Jā, yakitori no moriawase to dashimaki-tamago o onegai shimasu.',
      zh: '那麼，請給我烤雞肉串拼盤和高湯煎蛋捲。',
      en: 'Then, the assorted skewers and the rolled omelette please.'
    },
    {
      speaker: 'staff',
      jp: '焼き鳥はタレと塩、どちらにしますか？',
      ruby: '<ruby>焼<rt>や</rt></ruby>き<ruby>鳥<rt>とり</rt></ruby>はタレと<ruby>塩<rt>しお</rt></ruby>、どちらにしますか？',
      romaji: 'Yakitori wa tare to shio, dochira ni shimasu ka?',
      zh: '烤雞肉串要醬汁還是鹽味，您要哪一種？',
      en: 'For the skewers, sauce or salt — which would you like?'
    },
    {
      speaker: 'you',
      jp: 'タレでお願いします。',
      ruby: 'タレでお<ruby>願<rt>ねが</rt></ruby>いします。',
      romaji: 'Tare de onegai shimasu.',
      zh: '請給我醬汁口味。',
      en: 'Sauce, please.'
    },
    {
      speaker: 'you',
      jp: 'すみません、飲み放題はありますか？',
      ruby: 'すみません、<ruby>飲<rt>の</rt></ruby>み<ruby>放題<rt>ほうだい</rt></ruby>はありますか？',
      romaji: 'Sumimasen, nomihōdai wa arimasu ka?',
      zh: '不好意思，有喝到飽嗎？',
      en: 'Excuse me, do you have all-you-can-drink?'
    },
    {
      speaker: 'staff',
      jp: 'はい、二時間で千五百円です。ラストオーダーは三十分前です。',
      ruby: 'はい、<ruby>二時間<rt>にじかん</rt></ruby>で<ruby>千五百円<rt>せんごひゃくえん</rt></ruby>です。ラストオーダーは<ruby>三十分前<rt>さんじゅっぷんまえ</rt></ruby>です。',
      romaji: 'Hai, ni-jikan de sen-gohyaku-en desu. Rasuto ōdā wa sanjuppun-mae desu.',
      zh: '有的，兩小時一千五百日圓。最後點餐是結束前三十分鐘。',
      en: 'Yes, 1,500 yen for two hours. Last order is 30 minutes before the end.'
    },
    {
      speaker: 'you',
      jp: 'じゃあ、飲み放題にします。次はハイボールをください。',
      ruby: 'じゃあ、<ruby>飲<rt>の</rt></ruby>み<ruby>放題<rt>ほうだい</rt></ruby>にします。<ruby>次<rt>つぎ</rt></ruby>はハイボールをください。',
      romaji: 'Jā, nomihōdai ni shimasu. Tsugi wa haibōru o kudasai.',
      zh: '那麼，我要選喝到飽。接下來請給我一杯高球調酒。',
      en: "Then, I'll do all-you-can-drink. Next, a highball please."
    },
    {
      speaker: 'you',
      jp: 'すみません、お会計お願いします。別々でできますか？',
      ruby: 'すみません、お<ruby>会計<rt>かいけい</rt></ruby>お<ruby>願<rt>ねが</rt></ruby>いします。<ruby>別々<rt>べつべつ</rt></ruby>でできますか？',
      romaji: 'Sumimasen, o-kaikei onegai shimasu. Betsubetsu de dekimasu ka?',
      zh: '不好意思，麻煩結帳。可以分開結帳嗎？',
      en: 'Excuse me, the bill please. Can we pay separately?'
    },
    {
      speaker: 'staff',
      jp: '申し訳ございません、お会計はご一緒になります。',
      ruby: '<ruby>申<rt>もう</rt></ruby>し<ruby>訳<rt>わけ</rt></ruby>ございません、お<ruby>会計<rt>かいけい</rt></ruby>はご<ruby>一緒<rt>いっしょ</rt></ruby>になります。',
      romaji: 'Mōshiwake gozaimasen, o-kaikei wa go-issho ni narimasu.',
      zh: '非常抱歉，帳單必須一起結。',
      en: "I'm sorry, the bill must be paid together."
    }
  ],
  menu: [
    {
      title: 'お飲み物 · Drinks',
      items: [
        { emoji: '🍺', jp: '生ビール', ruby: '<ruby>生<rt>なま</rt></ruby>ビール', romaji: 'nama-bīru', zh: '生啤酒', en: 'draft beer' },
        { emoji: '🥃', jp: 'ハイボール', ruby: 'ハイボール', romaji: 'haibōru', zh: '高球調酒', en: 'highball' },
        { emoji: '🍋', jp: 'レモンサワー', ruby: 'レモンサワー', romaji: 'remon sawā', zh: '檸檬沙瓦', en: 'lemon sour' },
        { emoji: '🍶', jp: '日本酒', ruby: '<ruby>日本酒<rt>にほんしゅ</rt></ruby>', romaji: 'nihonshu', zh: '日本酒', en: 'sake' },
        { emoji: '🍶', jp: '焼酎', ruby: '<ruby>焼酎<rt>しょうちゅう</rt></ruby>', romaji: 'shōchū', zh: '燒酎', en: 'shochu' },
        { emoji: '🍵', jp: 'ウーロン茶', ruby: 'ウーロン<ruby>茶<rt>ちゃ</rt></ruby>', romaji: 'ūron-cha', zh: '烏龍茶', en: 'oolong tea' },
        { emoji: '🥤', jp: 'コーラ', ruby: 'コーラ', romaji: 'kōra', zh: '可樂', en: 'cola' }
      ]
    },
    {
      title: 'お料理 · Food',
      items: [
        { emoji: '🫛', jp: '枝豆', ruby: '<ruby>枝豆<rt>えだまめ</rt></ruby>', romaji: 'edamame', zh: '毛豆', en: 'edamame (soybeans)' },
        { emoji: '🍢', jp: '焼き鳥の盛り合わせ', ruby: '<ruby>焼<rt>や</rt></ruby>き<ruby>鳥<rt>とり</rt></ruby>の<ruby>盛<rt>も</rt></ruby>り<ruby>合<rt>あ</rt></ruby>わせ', romaji: 'yakitori no moriawase', zh: '烤雞肉串拼盤', en: 'assorted grilled skewers' },
        { emoji: '🍗', jp: '唐揚げ', ruby: '<ruby>唐揚<rt>からあ</rt></ruby>げ', romaji: 'kara-age', zh: '炸雞塊', en: 'fried chicken' },
        { emoji: '🍳', jp: 'だし巻き卵', ruby: 'だし<ruby>巻<rt>ま</rt></ruby>き<ruby>卵<rt>たまご</rt></ruby>', romaji: 'dashimaki-tamago', zh: '高湯煎蛋捲', en: 'rolled omelette' },
        { emoji: '🧊', jp: '冷奴', ruby: '<ruby>冷奴<rt>ひややっこ</rt></ruby>', romaji: 'hiyayakko', zh: '冷豆腐', en: 'cold tofu' },
        { emoji: '🐟', jp: '刺身の盛り合わせ', ruby: '<ruby>刺身<rt>さしみ</rt></ruby>の<ruby>盛<rt>も</rt></ruby>り<ruby>合<rt>あ</rt></ruby>わせ', romaji: 'sashimi no moriawase', zh: '生魚片拼盤', en: 'assorted sashimi' },
        { emoji: '🍟', jp: 'ポテトフライ', ruby: 'ポテトフライ', romaji: 'poteto furai', zh: '薯條', en: 'french fries' },
        { emoji: '🥟', jp: '餃子', ruby: '<ruby>餃子<rt>ぎょうざ</rt></ruby>', romaji: 'gyōza', zh: '煎餃', en: 'gyoza dumplings' },
        { emoji: '🍢', jp: '串カツ', ruby: '<ruby>串<rt>くし</rt></ruby>カツ', romaji: 'kushikatsu', zh: '串炸', en: 'fried skewers' },
        { emoji: '🍙', jp: '焼きおにぎり', ruby: '<ruby>焼<rt>や</rt></ruby>きおにぎり', romaji: 'yaki-onigiri', zh: '烤飯糰', en: 'grilled rice ball' },
        { emoji: '🥒', jp: '漬物', ruby: '<ruby>漬物<rt>つけもの</rt></ruby>', romaji: 'tsukemono', zh: '醃漬物', en: 'pickles' },
        { emoji: '🍚', jp: 'お茶漬け', ruby: 'お<ruby>茶漬<rt>ちゃづ</rt></ruby>け', romaji: 'ochazuke', zh: '茶泡飯', en: 'rice with tea broth' }
      ]
    }
  ]
}
