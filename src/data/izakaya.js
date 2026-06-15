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
      en: 'Welcome! How many people?'
    },
    {
      speaker: 'you',
      jp: '三人です。',
      ruby: '<ruby>三人<rt>さんにん</rt></ruby>です。',
      romaji: 'San-nin desu.',
      en: 'Three people.'
    },
    {
      speaker: 'staff',
      jp: 'お席へご案内します。こちら、お通しです。',
      ruby: 'お<ruby>席<rt>せき</rt></ruby>へご<ruby>案内<rt>あんない</rt></ruby>します。こちら、お<ruby>通<rt>とお</rt></ruby>しです。',
      romaji: 'O-seki e go-annai shimasu. Kochira, o-tōshi desu.',
      en: "I'll show you to your seats. Here is your otoshi (appetizer)."
    },
    {
      speaker: 'you',
      jp: 'すみません、お通しは頼んでいませんが…',
      ruby: 'すみません、お<ruby>通<rt>とお</rt></ruby>しは<ruby>頼<rt>たの</rt></ruby>んでいませんが…',
      romaji: 'Sumimasen, o-tōshi wa tanonde imasen ga…',
      en: "Excuse me, I didn't order this otoshi…"
    },
    {
      speaker: 'staff',
      jp: 'お通しは席料として、お一人三百円いただいております。',
      ruby: 'お<ruby>通<rt>とお</rt></ruby>しは<ruby>席料<rt>せきりょう</rt></ruby>として、お<ruby>一人<rt>ひとり</rt></ruby><ruby>三百円<rt>さんびゃくえん</rt></ruby>いただいております。',
      romaji: 'O-tōshi wa seki-ryō to shite, o-hitori sanbyaku-en itadaite orimasu.',
      en: 'The otoshi is a table charge of 300 yen per person.'
    },
    {
      speaker: 'you',
      jp: 'なるほど、わかりました。まず、生ビールを三つください。',
      ruby: 'なるほど、わかりました。まず、<ruby>生<rt>なま</rt></ruby>ビールを<ruby>三<rt>みっ</rt></ruby>つください。',
      romaji: 'Naruhodo, wakarimashita. Mazu, nama-bīru o mittsu kudasai.',
      en: 'I see, understood. First, three draft beers please.'
    },
    {
      speaker: 'staff',
      jp: '生ビール三つですね。かしこまりました。',
      ruby: '<ruby>生<rt>なま</rt></ruby>ビール<ruby>三<rt>みっ</rt></ruby>つですね。かしこまりました。',
      romaji: 'Nama-bīru mittsu desu ne. Kashikomarimashita.',
      en: 'Three draft beers, got it. Certainly.'
    },
    {
      speaker: 'you',
      jp: 'おすすめの料理はありますか？',
      ruby: 'おすすめの<ruby>料理<rt>りょうり</rt></ruby>はありますか？',
      romaji: 'Osusume no ryōri wa arimasu ka?',
      en: 'Do you have any recommended dishes?'
    },
    {
      speaker: 'staff',
      jp: '焼き鳥の盛り合わせと、だし巻き卵が人気です。',
      ruby: '<ruby>焼<rt>や</rt></ruby>き<ruby>鳥<rt>とり</rt></ruby>の<ruby>盛<rt>も</rt></ruby>り<ruby>合<rt>あ</rt></ruby>わせと、だし<ruby>巻<rt>ま</rt></ruby>き<ruby>卵<rt>たまご</rt></ruby>が<ruby>人気<rt>にんき</rt></ruby>です。',
      romaji: 'Yakitori no moriawase to, dashimaki-tamago ga ninki desu.',
      en: 'The assorted grilled skewers and the rolled omelette are popular.'
    },
    {
      speaker: 'you',
      jp: 'じゃあ、焼き鳥の盛り合わせとだし巻き卵をお願いします。',
      ruby: 'じゃあ、<ruby>焼<rt>や</rt></ruby>き<ruby>鳥<rt>とり</rt></ruby>の<ruby>盛<rt>も</rt></ruby>り<ruby>合<rt>あ</rt></ruby>わせとだし<ruby>巻<rt>ま</rt></ruby>き<ruby>卵<rt>たまご</rt></ruby>をお<ruby>願<rt>ねが</rt></ruby>いします。',
      romaji: 'Jā, yakitori no moriawase to dashimaki-tamago o onegai shimasu.',
      en: 'Then, the assorted skewers and the rolled omelette please.'
    },
    {
      speaker: 'staff',
      jp: '焼き鳥はタレと塩、どちらにしますか？',
      ruby: '<ruby>焼<rt>や</rt></ruby>き<ruby>鳥<rt>とり</rt></ruby>はタレと<ruby>塩<rt>しお</rt></ruby>、どちらにしますか？',
      romaji: 'Yakitori wa tare to shio, dochira ni shimasu ka?',
      en: 'For the skewers, sauce or salt — which would you like?'
    },
    {
      speaker: 'you',
      jp: 'タレでお願いします。',
      ruby: 'タレでお<ruby>願<rt>ねが</rt></ruby>いします。',
      romaji: 'Tare de onegai shimasu.',
      en: 'Sauce, please.'
    },
    {
      speaker: 'you',
      jp: 'すみません、飲み放題はありますか？',
      ruby: 'すみません、<ruby>飲<rt>の</rt></ruby>み<ruby>放題<rt>ほうだい</rt></ruby>はありますか？',
      romaji: 'Sumimasen, nomihōdai wa arimasu ka?',
      en: 'Excuse me, do you have all-you-can-drink?'
    },
    {
      speaker: 'staff',
      jp: 'はい、二時間で千五百円です。ラストオーダーは三十分前です。',
      ruby: 'はい、<ruby>二時間<rt>にじかん</rt></ruby>で<ruby>千五百円<rt>せんごひゃくえん</rt></ruby>です。ラストオーダーは<ruby>三十分前<rt>さんじゅっぷんまえ</rt></ruby>です。',
      romaji: 'Hai, ni-jikan de sen-gohyaku-en desu. Rasuto ōdā wa sanjuppun-mae desu.',
      en: 'Yes, 1,500 yen for two hours. Last order is 30 minutes before the end.'
    },
    {
      speaker: 'you',
      jp: 'じゃあ、飲み放題にします。次はハイボールをください。',
      ruby: 'じゃあ、<ruby>飲<rt>の</rt></ruby>み<ruby>放題<rt>ほうだい</rt></ruby>にします。<ruby>次<rt>つぎ</rt></ruby>はハイボールをください。',
      romaji: 'Jā, nomihōdai ni shimasu. Tsugi wa haibōru o kudasai.',
      en: "Then, I'll do all-you-can-drink. Next, a highball please."
    },
    {
      speaker: 'you',
      jp: 'すみません、お会計お願いします。別々でできますか？',
      ruby: 'すみません、お<ruby>会計<rt>かいけい</rt></ruby>お<ruby>願<rt>ねが</rt></ruby>いします。<ruby>別々<rt>べつべつ</rt></ruby>でできますか？',
      romaji: 'Sumimasen, o-kaikei onegai shimasu. Betsubetsu de dekimasu ka?',
      en: 'Excuse me, the bill please. Can we pay separately?'
    },
    {
      speaker: 'staff',
      jp: '申し訳ございません、お会計はご一緒になります。',
      ruby: '<ruby>申<rt>もう</rt></ruby>し<ruby>訳<rt>わけ</rt></ruby>ございません、お<ruby>会計<rt>かいけい</rt></ruby>はご<ruby>一緒<rt>いっしょ</rt></ruby>になります。',
      romaji: 'Mōshiwake gozaimasen, o-kaikei wa go-issho ni narimasu.',
      en: "I'm sorry, the bill must be paid together."
    }
  ]
}
