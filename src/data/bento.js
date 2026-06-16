// お弁当・駅弁 (Bento / Ekiben) — buying a boxed meal at a shop or train station.
export const bento = {
  id: 'bento',
  title: 'Bento / Ekiben',
  titleJp: 'お弁当',
  emoji: '🍱',
  description: 'Buy a boxed meal at a station or shop — pick a bento, ask them to heat it, and grab chopsticks.',
  lines: [
    {
      speaker: 'staff',
      jp: 'いらっしゃいませ。お弁当はいかがですか？',
      say: 'いらっしゃいませ。おべんとうはいかがですか？',
      ruby: 'いらっしゃいませ。お<ruby>弁当<rt>べんとう</rt></ruby>はいかがですか？',
      romaji: 'Irasshaimase. O-bentō wa ikaga desu ka?',
      zh: '歡迎光臨。要不要來個便當呢？',
      en: 'Welcome. Would you like a bento?'
    },
    {
      speaker: 'you',
      jp: 'はい。一番人気はどれですか？',
      say: 'はい。いちばんにんきはどれですか？',
      ruby: 'はい。<ruby>一番<rt>いちばん</rt></ruby><ruby>人気<rt>にんき</rt></ruby>はどれですか？',
      romaji: 'Hai. Ichiban ninki wa dore desu ka?',
      zh: '好的。最受歡迎的是哪一個呢？',
      en: 'Yes. Which one is the most popular?'
    },
    {
      speaker: 'staff',
      jp: 'こちらの幕の内弁当が一番人気です。',
      say: 'こちらのまくのうちべんとうがいちばんにんきです。',
      ruby: 'こちらの<ruby>幕<rt>まく</rt></ruby>の<ruby>内<rt>うち</rt></ruby><ruby>弁当<rt>べんとう</rt></ruby>が<ruby>一番<rt>いちばん</rt></ruby><ruby>人気<rt>にんき</rt></ruby>です。',
      romaji: 'Kochira no maku-no-uchi bentō ga ichiban ninki desu.',
      zh: '這個幕之內便當最受歡迎。',
      en: 'This makunouchi bento is the most popular.'
    },
    {
      speaker: 'you',
      jp: 'おすすめの駅弁はありますか？',
      say: 'おすすめのえきべんはありますか？',
      ruby: 'おすすめの<ruby>駅弁<rt>えきべん</rt></ruby>はありますか？',
      romaji: 'Osusume no ekiben wa arimasu ka?',
      zh: '有推薦的車站便當嗎？',
      en: 'Do you have a recommended ekiben?'
    },
    {
      speaker: 'staff',
      jp: 'はい、この地域の海鮮弁当が人気です。',
      say: 'はい、このちいきのかいせんべんとうがにんきです。',
      ruby: 'はい、この<ruby>地域<rt>ちいき</rt></ruby>の<ruby>海鮮<rt>かいせん</rt></ruby><ruby>弁当<rt>べんとう</rt></ruby>が<ruby>人気<rt>にんき</rt></ruby>です。',
      romaji: 'Hai, kono chiiki no kaisen bentō ga ninki desu.',
      zh: '有的，這個地區的海鮮便當很受歡迎。',
      en: 'Yes, this region’s seafood bento is popular.'
    },
    {
      speaker: 'you',
      jp: 'じゃあ、唐揚げ弁当を一つください。',
      say: 'じゃあ、からあげべんとうをひとつください。',
      ruby: 'じゃあ、<ruby>唐揚<rt>からあ</rt></ruby>げ<ruby>弁当<rt>べんとう</rt></ruby>を<ruby>一<rt>ひと</rt></ruby>つください。',
      romaji: 'Jā, kara-age bentō o hitotsu kudasai.',
      zh: '那麼，請給我一個炸雞便當。',
      en: 'Then, one fried-chicken bento please.'
    },
    {
      speaker: 'staff',
      jp: '温めますか？',
      say: 'あたためますか？',
      ruby: '<ruby>温<rt>あたた</rt></ruby>めますか？',
      romaji: 'Atatamemasu ka?',
      zh: '要幫您加熱嗎？',
      en: 'Shall I heat it up?'
    },
    {
      speaker: 'you',
      jp: 'はい、温めてもらえますか？',
      say: 'はい、あたためてもらえますか？',
      ruby: 'はい、<ruby>温<rt>あたた</rt></ruby>めてもらえますか？',
      romaji: 'Hai, atatamete moraemasu ka?',
      zh: '好，可以幫我加熱嗎？',
      en: 'Yes, could you heat it up?'
    },
    {
      speaker: 'you',
      jp: 'すみません、お箸をください。',
      say: 'すみません、おはしをください。',
      ruby: 'すみません、お<ruby>箸<rt>はし</rt></ruby>をください。',
      romaji: 'Sumimasen, o-hashi o kudasai.',
      zh: '不好意思，請給我筷子。',
      en: 'Excuse me, chopsticks please.'
    },
    {
      speaker: 'staff',
      jp: '割り箸をお付けしますね。お会計は六百円です。',
      say: 'わりばしをおつけしますね。おかいけいはろっぴゃくえんです。',
      ruby: '<ruby>割<rt>わ</rt></ruby>り<ruby>箸<rt>ばし</rt></ruby>をお<ruby>付<rt>つ</rt></ruby>けしますね。お<ruby>会計<rt>かいけい</rt></ruby>は<ruby>六百円<rt>ろっぴゃくえん</rt></ruby>です。',
      romaji: 'Waribashi o o-tsuke shimasu ne. O-kaikei wa roppyaku-en desu.',
      zh: '會附上免洗筷喔。結帳是六百日圓。',
      en: 'I’ll include disposable chopsticks. That’ll be 600 yen.'
    },
    {
      speaker: 'you',
      jp: 'カードで払えますか？',
      say: 'カードではらえますか？',
      ruby: 'カードで<ruby>払<rt>はら</rt></ruby>えますか？',
      romaji: 'Kādo de haraemasu ka?',
      zh: '可以用信用卡付款嗎？',
      en: 'Can I pay by card?'
    },
    {
      speaker: 'staff',
      jp: 'はい、大丈夫です。ありがとうございました。',
      say: 'はい、だいじょうぶです。ありがとうございました。',
      ruby: 'はい、<ruby>大丈夫<rt>だいじょうぶ</rt></ruby>です。ありがとうございました。',
      romaji: 'Hai, daijōbu desu. Arigatō gozaimashita.',
      zh: '好的，沒問題。謝謝您。',
      en: 'Yes, that’s fine. Thank you very much.'
    }
  ],
  menu: [
    {
      title: 'お弁当 · Bento boxes',
      items: [
        { emoji: '🍱', jp: '幕の内弁当', say: 'まくのうちべんとう', ruby: '<ruby>幕<rt>まく</rt></ruby>の<ruby>内<rt>うち</rt></ruby><ruby>弁当<rt>べんとう</rt></ruby>', romaji: 'maku-no-uchi bentō', zh: '幕之內便當', en: 'makunouchi bento', desc: '經典綜合便當，白飯配魚、玉子燒與多樣小菜，最均衡。' },
        { emoji: '🍙', jp: 'のり弁当', say: 'のりべんとう', ruby: 'のり<ruby>弁当<rt>べんとう</rt></ruby>', romaji: 'nori bentō', zh: '海苔便當', en: 'nori bento', desc: '白飯鋪上海苔與柴魚，配炸魚或竹輪，便宜經典。' },
        { emoji: '🍗', jp: '唐揚げ弁当', say: 'からあげべんとう', ruby: '<ruby>唐揚<rt>からあ</rt></ruby>げ<ruby>弁当<rt>べんとう</rt></ruby>', romaji: 'kara-age bentō', zh: '炸雞便當', en: 'fried-chicken bento', desc: '日式炸雞塊配白飯，外酥內多汁，份量十足。' },
        { emoji: '🐟', jp: '鮭弁当', say: 'さけべんとう', ruby: '<ruby>鮭<rt>さけ</rt></ruby><ruby>弁当<rt>べんとう</rt></ruby>', romaji: 'sake bentō', zh: '鮭魚便當', en: 'salmon bento', desc: '烤鹽鮭配白飯的定番便當，鹹香下飯。' },
        { emoji: '🥩', jp: '焼肉弁当', say: 'やきにくべんとう', ruby: '<ruby>焼肉<rt>やきにく</rt></ruby><ruby>弁当<rt>べんとう</rt></ruby>', romaji: 'yakiniku bentō', zh: '燒肉便當', en: 'grilled-meat bento', desc: '甜鹹醬燒肉鋪在白飯上，香氣濃郁、滿足感高。' },
        { emoji: '🥩', jp: '牛肉弁当', say: 'ぎゅうにくべんとう', ruby: '<ruby>牛肉<rt>ぎゅうにく</rt></ruby><ruby>弁当<rt>べんとう</rt></ruby>', romaji: 'gyūniku bentō', zh: '牛肉便當', en: 'beef bento', desc: '醬煮或燒烤牛肉鋪滿白飯，車站名物之一。' },
        { emoji: '🍤', jp: 'とんかつ弁当', say: 'とんかつべんとう', ruby: 'とんかつ<ruby>弁当<rt>べんとう</rt></ruby>', romaji: 'tonkatsu bentō', zh: '炸豬排便當', en: 'tonkatsu bento', desc: '酥炸豬排淋上醬汁配白飯，厚實有飽足感。' },
        { emoji: '🍳', jp: 'ハンバーグ弁当', say: 'ハンバーグべんとう', ruby: 'ハンバーグ<ruby>弁当<rt>べんとう</rt></ruby>', romaji: 'hanbāgu bentō', zh: '漢堡排便當', en: 'hamburg-steak bento', desc: '多汁漢堡排淋上濃郁醬汁配白飯，大人小孩都愛。' },
        { emoji: '🍣', jp: '海鮮弁当', say: 'かいせんべんとう', ruby: '<ruby>海鮮<rt>かいせん</rt></ruby><ruby>弁当<rt>べんとう</rt></ruby>', romaji: 'kaisen bentō', zh: '海鮮便當', en: 'seafood bento', desc: '鋪滿生魚片或海鮮的便當，常見於沿海車站。' },
        { emoji: '🍤', jp: '天ぷら弁当', say: 'てんぷらべんとう', ruby: '<ruby>天<rt>てん</rt></ruby>ぷら<ruby>弁当<rt>べんとう</rt></ruby>', romaji: 'tenpura bentō', zh: '天婦羅便當', en: 'tempura bento', desc: '炸蝦與蔬菜天婦羅配白飯，酥脆清爽。' },
        { emoji: '🥡', jp: '中華弁当', say: 'ちゅうかべんとう', ruby: '<ruby>中華<rt>ちゅうか</rt></ruby><ruby>弁当<rt>べんとう</rt></ruby>', romaji: 'chūka bentō', zh: '中華便當', en: 'Chinese-style bento', desc: '糖醋肉、燒賣與炒飯等中式組合，份量豐盛。' },
        { emoji: '🍲', jp: 'カツ丼弁当', say: 'カツどんべんとう', ruby: 'カツ<ruby>丼<rt>どん</rt></ruby><ruby>弁当<rt>べんとう</rt></ruby>', romaji: 'katsudon bentō', zh: '豬排丼便當', en: 'katsudon bento', desc: '炸豬排以蛋汁與醬汁煮過鋪在飯上，甜鹹下飯。' }
      ]
    },
    {
      title: '駅弁・名物 · Ekiben & specialties',
      items: [
        { emoji: '🍗', jp: '鶏めし弁当', say: 'とりめしべんとう', ruby: '<ruby>鶏<rt>とり</rt></ruby>めし<ruby>弁当<rt>べんとう</rt></ruby>', romaji: 'torimeshi bentō', zh: '雞肉飯便當', en: 'chicken rice bento', desc: '雞肉與雞汁炊煮的味付飯，九州車站名物。' },
        { emoji: '👅', jp: '牛タン弁当', say: 'ぎゅうタンべんとう', ruby: '<ruby>牛<rt>ぎゅう</rt></ruby>タン<ruby>弁当<rt>べんとう</rt></ruby>', romaji: 'gyū-tan bentō', zh: '牛舌便當', en: 'beef-tongue bento', desc: '仙台名物炭烤厚切牛舌配麥飯，彈嫩鹹香。' },
        { emoji: '🍣', jp: 'いくら弁当', say: 'いくらべんとう', ruby: 'いくら<ruby>弁当<rt>べんとう</rt></ruby>', romaji: 'ikura bentō', zh: '鮭魚卵便當', en: 'salmon-roe bento', desc: '鋪滿鮭魚卵的北海道名物，粒粒爆漿鮮甜。' },
        { emoji: '🍱', jp: 'うなぎ弁当', say: 'うなぎべんとう', ruby: 'うなぎ<ruby>弁当<rt>べんとう</rt></ruby>', romaji: 'unagi bentō', zh: '鰻魚便當', en: 'eel bento', desc: '蒲燒鰻魚淋上甜醬鋪在飯上，香氣四溢的奢華駅弁。' },
        { emoji: '🦀', jp: 'かに飯', say: 'かにめし', ruby: 'かに<ruby>飯<rt>めし</rt></ruby>', romaji: 'kani-meshi', zh: '螃蟹飯', en: 'crab rice', desc: '蟹肉鋪滿味付飯，北海道與北陸的人氣駅弁。' },
        { emoji: '🍲', jp: '釜飯', say: 'かまめし', ruby: '<ruby>釜飯<rt>かまめし</rt></ruby>', romaji: 'kamameshi', zh: '釜飯', en: 'kamameshi (pot rice)', desc: '陶釜炊煮的什錦飯，附保溫陶器，橫川駅名物。' },
        { emoji: '🐟', jp: 'ますの寿司', say: 'ますのすし', ruby: 'ますの<ruby>寿司<rt>すし</rt></ruby>', romaji: 'masu no sushi', zh: '鱒魚壽司', en: 'trout sushi', desc: '富山名物，鱒魚押壽司以竹葉圓形包覆，酸香味美。' }
      ]
    },
    {
      title: 'おにぎり・軽食 · Onigiri & light',
      items: [
        { emoji: '🍙', jp: 'おにぎり（鮭）', say: 'おにぎりさけ', ruby: 'おにぎり（<ruby>鮭<rt>さけ</rt></ruby>）', romaji: 'onigiri (sake)', zh: '鮭魚飯糰', en: '"salmon rice ball"', desc: '包入烤鮭魚的三角飯糰，最經典的口味。' },
        { emoji: '🍙', jp: 'おにぎり（梅）', say: 'おにぎりうめ', ruby: 'おにぎり（<ruby>梅<rt>うめ</rt></ruby>）', romaji: 'onigiri (ume)', zh: '梅子飯糰', en: '"pickled-plum rice ball"', desc: '包入酸梅的飯糰，酸鹹開胃、清爽解膩。' },
        { emoji: '🍙', jp: 'おにぎり（昆布）', say: 'おにぎりこんぶ', ruby: 'おにぎり（<ruby>昆布<rt>こんぶ</rt></ruby>）', romaji: 'onigiri (konbu)', zh: '昆布飯糰', en: '"kelp rice ball"', desc: '包入甜煮昆布的飯糰，鹹甜溫潤的定番口味。' },
        { emoji: '🍙', jp: 'おにぎり（ツナマヨ）', ruby: 'おにぎり（ツナマヨ）', romaji: 'onigiri (tsuna-mayo)', zh: '鮪魚美乃滋飯糰', en: '"tuna-mayo rice ball"', desc: '鮪魚拌美乃滋的飯糰，香濃綿密、人氣最高。' },
        { emoji: '🍙', jp: 'おにぎり（明太子）', say: 'おにぎりめんたいこ', ruby: 'おにぎり（<ruby>明太子<rt>めんたいこ</rt></ruby>）', romaji: 'onigiri (mentaiko)', zh: '明太子飯糰', en: '"spicy-cod-roe rice ball"', desc: '包入辣味明太子的飯糰，鹹辣鮮香、九州風味。' },
        { emoji: '🥪', jp: 'サンドイッチ', ruby: 'サンドイッチ', romaji: 'sandoitchi', zh: '三明治', en: 'sandwich', desc: '便利商店常見的夾餡三明治，快速填飽肚子。' },
        { emoji: '🥟', jp: '焼売', say: 'しゅうまい', ruby: '<ruby>焼売<rt>しゅうまい</rt></ruby>', romaji: 'shūmai', zh: '燒賣', en: 'shumai', desc: '蒸豬肉燒賣，橫濱名物，冷食也美味的駅弁配菜。' },
        { emoji: '🍗', jp: 'からあげ単品', say: 'からあげたんぴん', ruby: 'からあげ<ruby>単品<rt>たんぴん</rt></ruby>', romaji: 'kara-age tanpin', zh: '炸雞單點', en: '"fried chicken (à la carte)"', desc: '單買的日式炸雞塊，外酥內嫩、隨手小食。' }
      ]
    },
    {
      title: 'お飲み物 · Drinks',
      items: [
        { emoji: '🍵', jp: 'お茶', say: 'おちゃ', ruby: 'お<ruby>茶<rt>ちゃ</rt></ruby>', romaji: 'o-cha', zh: '茶', en: 'tea', desc: '瓶裝日本茶，解膩配便當的基本選擇。' },
        { emoji: '🍵', jp: '緑茶', say: 'りょくちゃ', ruby: '<ruby>緑茶<rt>りょくちゃ</rt></ruby>', romaji: 'ryokucha', zh: '綠茶', en: 'green tea', desc: '無糖綠茶，清爽回甘、最搭日式便當。' },
        { emoji: '☕', jp: 'コーヒー', ruby: 'コーヒー', romaji: 'kōhī', zh: '咖啡', en: 'coffee', desc: '罐裝或瓶裝咖啡，旅途提神良伴。' },
        { emoji: '💧', jp: '水', say: 'みず', ruby: '<ruby>水<rt>みず</rt></ruby>', romaji: 'mizu', zh: '水', en: 'water', desc: '瓶裝礦泉水，清爽無負擔。' },
        { emoji: '🍺', jp: 'ビール', ruby: 'ビール', romaji: 'bīru', zh: '啤酒', en: 'beer', desc: '罐裝啤酒，搭駅弁在車上小酌的經典享受。' },
        { emoji: '🍊', jp: 'オレンジジュース', ruby: 'オレンジジュース', romaji: 'orenji jūsu', zh: '柳橙汁', en: 'orange juice', desc: '瓶裝柳橙汁，酸甜清爽、適合孩童。' }
      ]
    }
  ],
  phrases: [
    {
      title: 'よく使う一言 · Handy phrases',
      items: [
        { jp: '一番人気はどれですか？', say: 'いちばんにんきはどれですか？', ruby: '<ruby>一番<rt>いちばん</rt></ruby><ruby>人気<rt>にんき</rt></ruby>はどれですか？', zh: '最受歡迎的是哪一個？', en: 'Which one is the most popular?' },
        { jp: '温めてもらえますか？', say: 'あたためてもらえますか？', ruby: '<ruby>温<rt>あたた</rt></ruby>めてもらえますか？', zh: '可以幫我加熱嗎？', en: 'Could you heat it up?' },
        { jp: 'お箸をください。', say: 'おはしをください。', ruby: 'お<ruby>箸<rt>はし</rt></ruby>をください。', zh: '請給我筷子。', en: 'Chopsticks, please.' },
        { jp: '持ち帰りです。', say: 'もちかえりです。', ruby: '<ruby>持<rt>も</rt></ruby>ち<ruby>帰<rt>かえ</rt></ruby>りです。', zh: '我要外帶。', en: 'It’s to take out.' },
        { jp: '賞味期限はいつですか？', say: 'しょうみきげんはいつですか？', ruby: '<ruby>賞味<rt>しょうみ</rt></ruby><ruby>期限<rt>きげん</rt></ruby>はいつですか？', zh: '賞味期限是什麼時候？', en: 'When is the best-before date?' },
        { jp: '袋をください。', say: 'ふくろをください。', ruby: '<ruby>袋<rt>ふくろ</rt></ruby>をください。', zh: '請給我袋子。', en: 'A bag, please.' }
      ]
    }
  ]
}
