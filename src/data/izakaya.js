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
      title: 'ビール · Beer',
      items: [
        { emoji: '🍺', jp: '生ビール', say: 'なまビール', ruby: '<ruby>生<rt>なま</rt></ruby>ビール', romaji: 'nama-bīru', zh: '生啤酒', en: 'draft beer', desc: '最經典的桶裝生啤，冰涼暢快。' },
        { emoji: '🍺', jp: 'メガジョッキ', ruby: 'メガジョッキ', romaji: 'mega jokki', zh: '超大杯生啤', en: 'mega mug beer', desc: '超大容量啤酒杯，份量十足。' },
        { emoji: '🍺', jp: '瓶ビール', say: 'びんビール', ruby: '<ruby>瓶<rt>びん</rt></ruby>ビール', romaji: 'bin-bīru', zh: '瓶裝啤酒', en: 'bottled beer', desc: '瓶裝啤酒，常見大瓶分著倒。' },
        { emoji: '🍺', jp: '黒ビール', say: 'くろビール', ruby: '<ruby>黒<rt>くろ</rt></ruby>ビール', romaji: 'kuro-bīru', zh: '黑啤酒', en: 'dark beer', desc: '深焙麥芽釀造，香氣濃醇微苦。' },
        { emoji: '🍺', jp: 'ノンアルコールビール', ruby: 'ノンアルコールビール', romaji: 'non-arukōru bīru', zh: '無酒精啤酒', en: 'non-alcoholic beer', desc: '不含酒精的啤酒風味飲料。' }
      ]
    },
    {
      title: 'サワー・酎ハイ · Sours & chuhai',
      items: [
        { emoji: '🍋', jp: 'レモンサワー', ruby: 'レモンサワー', romaji: 'remon sawā', zh: '檸檬沙瓦', en: 'lemon sour', desc: '燒酎兌蘇打加檸檬，清爽解膩、最受歡迎。' },
        { emoji: '🍋', jp: 'メガレモンサワー', ruby: 'メガレモンサワー', romaji: 'mega remon sawā', zh: '超大杯檸檬沙瓦', en: 'mega lemon sour', desc: '超大杯的檸檬沙瓦。' },
        { emoji: '🟢', jp: 'ライムサワー', ruby: 'ライムサワー', romaji: 'raimu sawā', zh: '萊姆沙瓦', en: 'lime sour', desc: '萊姆風味的沙瓦，清新微酸。' },
        { emoji: '🍊', jp: 'グレープフルーツサワー', ruby: 'グレープフルーツサワー', romaji: 'gurēpufurūtsu sawā', zh: '葡萄柚沙瓦', en: 'grapefruit sour', desc: '葡萄柚果香，微苦回甘。' },
        { emoji: '🥛', jp: 'カルピスサワー', ruby: 'カルピスサワー', romaji: 'karupisu sawā', zh: '可爾必思沙瓦', en: 'Calpis sour', desc: '加可爾必思，酸甜順口好入喉。' },
        { emoji: '🍇', jp: '巨峰サワー', say: 'きょほうサワー', ruby: '<ruby>巨峰<rt>きょほう</rt></ruby>サワー', romaji: 'kyohō sawā', zh: '巨峰葡萄沙瓦', en: 'kyoho grape sour', desc: '巨峰葡萄風味，香甜多汁。' },
        { emoji: '🍵', jp: 'ウーロンハイ', ruby: 'ウーロンハイ', romaji: 'ūron-hai', zh: '烏龍燒酎', en: 'oolong-shochu highball', desc: '燒酎兌烏龍茶，順口不甜。' },
        { emoji: '🍵', jp: '緑茶ハイ', say: 'りょくちゃハイ', ruby: '<ruby>緑茶<rt>りょくちゃ</rt></ruby>ハイ', romaji: 'ryokucha-hai', zh: '綠茶燒酎', en: 'green-tea highball', desc: '燒酎兌綠茶，清爽回甘。' }
      ]
    },
    {
      title: 'ハイボール・ウイスキー · Highball & whisky',
      items: [
        { emoji: '🥃', jp: 'ハイボール', ruby: 'ハイボール', romaji: 'haibōru', zh: '威士忌蘇打（高球）', en: 'highball', desc: '威士忌兌蘇打水，清爽暢快。' },
        { emoji: '🥃', jp: 'メガハイボール', ruby: 'メガハイボール', romaji: 'mega haibōru', zh: '超大杯高球', en: 'mega highball', desc: '超大杯的威士忌蘇打。' },
        { emoji: '🥤', jp: 'コークハイ', ruby: 'コークハイ', romaji: 'kōku-hai', zh: '可樂高球', en: 'whisky & cola', desc: '威士忌兌可樂，甜順好喝。' },
        { emoji: '🫚', jp: 'ジンジャーハイ', ruby: 'ジンジャーハイ', romaji: 'jinjā-hai', zh: '薑汁高球', en: 'whisky & ginger ale', desc: '威士忌兌薑汁汽水，辛香爽口。' },
        { emoji: '🥃', jp: 'ウイスキー（ロック）', ruby: 'ウイスキー（ロック）', romaji: 'uisukī (rokku)', zh: '威士忌（加冰）', en: 'whisky on the rocks', desc: '純威士忌加大冰塊，慢慢品飲。' },
        { emoji: '🥃', jp: 'ウイスキー（水割り）', say: 'ウイスキー（みずわり）', ruby: 'ウイスキー（<ruby>水割<rt>みずわ</rt></ruby>り）', romaji: 'uisukī (mizuwari)', zh: '威士忌（加水）', en: 'whisky with water', desc: '威士忌加水稀釋，順口易飲。' }
      ]
    },
    {
      title: '焼酎・泡盛 · Shochu & awamori',
      items: [
        { emoji: '🍶', jp: '芋焼酎', say: 'いもじょうちゅう', ruby: '<ruby>芋焼酎<rt>いもじょうちゅう</rt></ruby>', romaji: 'imo-jōchū', zh: '地瓜燒酎', en: 'sweet-potato shochu', desc: '以地瓜釀造，香氣濃郁有個性。' },
        { emoji: '🍶', jp: '麦焼酎', say: 'むぎじょうちゅう', ruby: '<ruby>麦焼酎<rt>むぎじょうちゅう</rt></ruby>', romaji: 'mugi-jōchū', zh: '麥燒酎', en: 'barley shochu', desc: '以大麥釀造，口感清爽柔順。' },
        { emoji: '🍶', jp: '米焼酎', say: 'こめじょうちゅう', ruby: '<ruby>米焼酎<rt>こめじょうちゅう</rt></ruby>', romaji: 'kome-jōchū', zh: '米燒酎', en: 'rice shochu', desc: '以米釀造，溫潤淡雅。' },
        { emoji: '🌺', jp: '泡盛（ロック）', say: 'あわもり（ロック）', ruby: '<ruby>泡盛<rt>あわもり</rt></ruby>（ロック）', romaji: 'awamori (rokku)', zh: '泡盛（加冰）', en: 'awamori on the rocks', desc: '沖繩特產蒸餾酒，以泰國米製成、酒勁強。' },
        { emoji: '🌺', jp: '泡盛（水割り）', say: 'あわもり（みずわり）', ruby: '<ruby>泡盛<rt>あわもり</rt></ruby>（<ruby>水割<rt>みずわ</rt></ruby>り）', romaji: 'awamori (mizuwari)', zh: '泡盛（加水）', en: 'awamori with water', desc: '泡盛加水稀釋，較好入口。' },
        { emoji: '🏺', jp: '古酒', say: 'クース', ruby: '<ruby>古酒<rt>クース</rt></ruby>', romaji: 'kūsu', zh: '泡盛陳年古酒', en: 'aged awamori', desc: '熟成三年以上的泡盛，圓潤香醇。' }
      ]
    },
    {
      title: '日本酒 · Sake',
      items: [
        { emoji: '🍶', jp: '冷酒', say: 'れいしゅ', ruby: '<ruby>冷酒<rt>れいしゅ</rt></ruby>', romaji: 'reishu', zh: '冷酒', en: 'chilled sake', desc: '冰鎮的日本酒，口感清爽。' },
        { emoji: '♨️', jp: '熱燗', say: 'あつかん', ruby: '<ruby>熱燗<rt>あつかん</rt></ruby>', romaji: 'atsukan', zh: '熱清酒', en: 'warm sake', desc: '溫熱的日本酒，香氣更醇厚。' },
        { emoji: '🍶', jp: '純米酒', say: 'じゅんまいしゅ', ruby: '<ruby>純米酒<rt>じゅんまいしゅ</rt></ruby>', romaji: 'junmai-shu', zh: '純米酒', en: 'junmai sake', desc: '純米釀造，米香飽滿、口感扎實。' },
        { emoji: '🍶', jp: '大吟醸', say: 'だいぎんじょう', ruby: '<ruby>大吟醸<rt>だいぎんじょう</rt></ruby>', romaji: 'daiginjō', zh: '大吟釀', en: 'daiginjo sake', desc: '高度精米的高級清酒，香氣華麗。' }
      ]
    },
    {
      title: 'ワイン · Wine',
      items: [
        { emoji: '🍷', jp: '赤ワイン', say: 'あかワイン', ruby: '<ruby>赤<rt>あか</rt></ruby>ワイン', romaji: 'aka-wain', zh: '紅酒', en: 'red wine', desc: '紅葡萄酒，單寧與果香、配肉料理。' },
        { emoji: '🥂', jp: '白ワイン', say: 'しろワイン', ruby: '<ruby>白<rt>しろ</rt></ruby>ワイン', romaji: 'shiro-wain', zh: '白酒（白葡萄酒）', en: 'white wine', desc: '白葡萄酒，清爽果香、配海鮮。' },
        { emoji: '🍾', jp: 'スパークリングワイン', ruby: 'スパークリングワイン', romaji: 'supākuringu wain', zh: '氣泡酒', en: 'sparkling wine', desc: '帶氣泡的葡萄酒，清新爽口。' },
        { emoji: '🍷', jp: 'グラスワイン', ruby: 'グラスワイン', romaji: 'gurasu wain', zh: '單杯葡萄酒', en: 'glass of wine', desc: '以單杯計的葡萄酒，紅白可選。' }
      ]
    },
    {
      title: 'カクテル · Cocktails',
      items: [
        { emoji: '🍸', jp: 'カシスオレンジ', ruby: 'カシスオレンジ', romaji: 'kashisu orenji', zh: '黑醋栗柳橙', en: 'cassis & orange', desc: '黑醋栗利口酒加柳橙汁，酸甜好入口。' },
        { emoji: '🍸', jp: 'カシスソーダ', ruby: 'カシスソーダ', romaji: 'kashisu sōda', zh: '黑醋栗蘇打', en: 'cassis & soda', desc: '黑醋栗利口酒兌蘇打，清爽。' },
        { emoji: '🍸', jp: 'ジントニック', ruby: 'ジントニック', romaji: 'jin tonikku', zh: '琴通寧', en: 'gin & tonic', desc: '琴酒加通寧水與萊姆，清爽微苦。' },
        { emoji: '🌿', jp: 'モヒート', ruby: 'モヒート', romaji: 'mohīto', zh: '莫希托', en: 'mojito', desc: '蘭姆酒加薄荷、萊姆與蘇打。' },
        { emoji: '🍹', jp: 'カンパリソーダ', ruby: 'カンパリソーダ', romaji: 'kanpari sōda', zh: '金巴利蘇打', en: 'Campari & soda', desc: '金巴利兌蘇打，微苦帶草本香。' },
        { emoji: '🍑', jp: 'ファジーネーブル', ruby: 'ファジーネーブル', romaji: 'fajī nēburu', zh: '蜜桃柳橙', en: 'fuzzy navel', desc: '水蜜桃利口酒加柳橙汁，香甜易飲。' }
      ]
    },
    {
      title: 'ソフトドリンク · Soft drinks',
      items: [
        { emoji: '🍵', jp: 'ウーロン茶', ruby: 'ウーロン<ruby>茶<rt>ちゃ</rt></ruby>', romaji: 'ūron-cha', zh: '烏龍茶', en: 'oolong tea' },
        { emoji: '🍵', jp: '緑茶', say: 'りょくちゃ', ruby: '<ruby>緑茶<rt>りょくちゃ</rt></ruby>', romaji: 'ryokucha', zh: '綠茶', en: 'green tea' },
        { emoji: '🥤', jp: 'コーラ', ruby: 'コーラ', romaji: 'kōra', zh: '可樂', en: 'cola' },
        { emoji: '🫚', jp: 'ジンジャーエール', ruby: 'ジンジャーエール', romaji: 'jinjā ēru', zh: '薑汁汽水', en: 'ginger ale' },
        { emoji: '🍊', jp: 'オレンジジュース', ruby: 'オレンジジュース', romaji: 'orenji jūsu', zh: '柳橙汁', en: 'orange juice' },
        { emoji: '🧃', jp: 'ミックスジュース', ruby: 'ミックスジュース', romaji: 'mikkusu jūsu', zh: '綜合果汁', en: 'mixed juice' }
      ]
    },
    {
      title: '焼鳥 · Skewers',
      items: [
        { emoji: '🍢', jp: 'もも貴族焼き', say: 'ももきぞくやき', ruby: 'もも<ruby>貴族焼<rt>きぞくや</rt></ruby>き', romaji: 'momo kizoku-yaki', zh: '招牌雞腿肉串', en: 'signature thigh skewer' },
        { emoji: '🍢', jp: 'むね貴族焼き', say: 'むねきぞくやき', ruby: 'むね<ruby>貴族焼<rt>きぞくや</rt></ruby>き', romaji: 'mune kizoku-yaki', zh: '招牌雞胸肉串', en: 'signature breast skewer' },
        { emoji: '🍢', jp: 'ねぎま', ruby: 'ねぎま', romaji: 'negima', zh: '蔥段雞肉串', en: 'chicken & leek' },
        { emoji: '🍢', jp: 'せせり', ruby: 'せせり', romaji: 'seseri', zh: '雞頸肉', en: 'chicken neck' },
        { emoji: '🍡', jp: 'つくね', ruby: 'つくね', romaji: 'tsukune', zh: '雞肉丸', en: 'chicken meatball' },
        { emoji: '🥚', jp: '月見つくね', say: 'つきみつくね', ruby: '<ruby>月見<rt>つきみ</rt></ruby>つくね', romaji: 'tsukimi-tsukune', zh: '月見雞肉丸（附蛋黃）', en: 'meatball with egg yolk' },
        { emoji: '🍢', jp: '砂ぎも', say: 'すなぎも', ruby: '<ruby>砂<rt>すな</rt></ruby>ぎも', romaji: 'sunagimo', zh: '雞胗', en: 'gizzard' },
        { emoji: '🍢', jp: 'とりかわ', ruby: 'とりかわ', romaji: 'torikawa', zh: '雞皮', en: 'chicken skin' },
        { emoji: '🍢', jp: 'ぼんじり', ruby: 'ぼんじり', romaji: 'bonjiri', zh: '雞尾椎（七里香）', en: 'chicken tail' },
        { emoji: '🍗', jp: '手羽先', say: 'てばさき', ruby: '<ruby>手羽先<rt>てばさき</rt></ruby>', romaji: 'tebasaki', zh: '雞翅', en: 'chicken wing' },
        { emoji: '🍢', jp: 'レバー', ruby: 'レバー', romaji: 'rebā', zh: '雞肝', en: 'liver' },
        { emoji: '❤️', jp: 'ハツ', ruby: 'ハツ', romaji: 'hatsu', zh: '雞心', en: 'chicken heart' },
        { emoji: '🥓', jp: '豚バラ串', say: 'ぶたバラぐし', ruby: '<ruby>豚<rt>ぶた</rt></ruby>バラ<ruby>串<rt>ぐし</rt></ruby>', romaji: 'buta-bara-gushi', zh: '豬五花串', en: 'pork belly skewer' },
        { emoji: '🫑', jp: 'ピー玉串', say: 'ピーたまぐし', ruby: 'ピー<ruby>玉串<rt>たまぐし</rt></ruby>', romaji: 'pī-tama-gushi', zh: '青椒洋蔥串', en: 'pepper & onion skewer' }
      ]
    },
    {
      title: '逸品料理 · Specialties',
      items: [
        { emoji: '🍗', jp: '名物トリキの唐揚げ', say: 'めいぶつトリキのからあげ', ruby: '<ruby>名物<rt>めいぶつ</rt></ruby>トリキの<ruby>唐揚<rt>からあ</rt></ruby>げ', romaji: 'meibutsu toriki no kara-age', zh: '招牌炸雞', en: 'signature fried chicken' },
        { emoji: '🍳', jp: '山芋鉄板焼', say: 'やまいもてっぱんやき', ruby: '<ruby>山芋鉄板焼<rt>やまいもてっぱんやき</rt></ruby>', romaji: 'yamaimo teppan-yaki', zh: '山藥鐵板燒', en: 'grilled yam' },
        { emoji: '🥬', jp: 'やみつきキャベツ', ruby: 'やみつきキャベツ', romaji: 'yamitsuki kyabetsu', zh: '涮嘴高麗菜', en: 'addictive cabbage' },
        { emoji: '🍳', jp: 'だし巻き玉子', say: 'だしまきたまご', ruby: 'だし<ruby>巻<rt>ま</rt></ruby>き<ruby>玉子<rt>たまご</rt></ruby>', romaji: 'dashimaki-tamago', zh: '高湯煎蛋捲', en: 'rolled omelette' },
        { emoji: '🥒', jp: 'もろきゅう', ruby: 'もろきゅう', romaji: 'morokyū', zh: '味噌小黃瓜', en: 'cucumber with miso' },
        { emoji: '🍟', jp: 'ポテトフライ', ruby: 'ポテトフライ', romaji: 'poteto furai', zh: '薯條', en: 'french fries' },
        { emoji: '🫛', jp: '枝豆', say: 'えだまめ', ruby: '<ruby>枝豆<rt>えだまめ</rt></ruby>', romaji: 'edamame', zh: '毛豆', en: 'edamame' },
        { emoji: '🧊', jp: '冷奴', say: 'ひややっこ', ruby: '<ruby>冷奴<rt>ひややっこ</rt></ruby>', romaji: 'hiyayakko', zh: '冷豆腐', en: 'cold tofu' },
        { emoji: '🐟', jp: '刺身の盛り合わせ', say: 'さしみのもりあわせ', ruby: '<ruby>刺身<rt>さしみ</rt></ruby>の<ruby>盛<rt>も</rt></ruby>り<ruby>合<rt>あ</rt></ruby>わせ', romaji: 'sashimi no moriawase', zh: '生魚片拼盤', en: 'assorted sashimi' }
      ]
    },
    {
      title: 'ご飯もの・デザート · Rice & dessert',
      items: [
        { emoji: '🍚', jp: 'とり釜飯', say: 'とりかまめし', ruby: 'とり<ruby>釜飯<rt>かまめし</rt></ruby>', romaji: 'tori-kamameshi', zh: '雞肉釜飯', en: 'chicken kamameshi' },
        { emoji: '🍙', jp: '焼きおにぎり', say: 'やきおにぎり', ruby: '<ruby>焼<rt>や</rt></ruby>きおにぎり', romaji: 'yaki-onigiri', zh: '烤飯糰', en: 'grilled rice ball' },
        { emoji: '🍚', jp: 'お茶漬け', say: 'おちゃづけ', ruby: 'お<ruby>茶漬<rt>ちゃづ</rt></ruby>け', romaji: 'ochazuke', zh: '茶泡飯', en: 'rice with tea broth' },
        { emoji: '🍨', jp: 'バニラアイス', ruby: 'バニラアイス', romaji: 'banira aisu', zh: '香草冰淇淋', en: 'vanilla ice cream' },
        { emoji: '🍮', jp: '杏仁豆腐', say: 'あんにんどうふ', ruby: '<ruby>杏仁豆腐<rt>あんにんどうふ</rt></ruby>', romaji: 'annin-dōfu', zh: '杏仁豆腐', en: 'almond tofu' }
      ]
    }
  ],
  phrases: [
    {
      title: 'よく使う一言 · Handy phrases',
      items: [
        { jp: 'とりあえず生で。', say: 'とりあえずなまで。', ruby: 'とりあえず<ruby>生<rt>なま</rt></ruby>で。', zh: '先來杯生啤。', en: 'A draft beer to start, please.' },
        { jp: 'メニューを見せてください。', ruby: 'メニューを<ruby>見<rt>み</rt></ruby>せてください。', zh: '請給我看菜單。', en: 'Please show me the menu.' },
        { jp: '取り皿をください。', say: 'とりざらをください。', ruby: '<ruby>取<rt>と</rt></ruby>り<ruby>皿<rt>ざら</rt></ruby>をください。', zh: '請給我小盤子。', en: 'Could I have a small plate?' },
        { jp: '同じものをもう一つください。', ruby: '<ruby>同<rt>おな</rt></ruby>じものをもう<ruby>一<rt>ひと</rt></ruby>つください。', zh: '再給我一份一樣的。', en: 'One more of the same, please.' },
        { jp: 'ラストオーダーは何時ですか？', ruby: 'ラストオーダーは<ruby>何時<rt>なんじ</rt></ruby>ですか？', zh: '最後點餐是幾點?', en: 'What time is last order?' },
        { jp: 'おすすめのお酒はありますか？', ruby: 'おすすめのお<ruby>酒<rt>さけ</rt></ruby>はありますか？', zh: '有推薦的酒嗎?', en: 'Do you have a recommended drink?' },
        { jp: 'お会計、別々でお願いします。', ruby: 'お<ruby>会計<rt>かいけい</rt></ruby>、<ruby>別々<rt>べつべつ</rt></ruby>でお<ruby>願<rt>ねが</rt></ruby>いします。', zh: '結帳請分開算。', en: 'Separate checks, please.' }
      ]
    }
  ]
}
