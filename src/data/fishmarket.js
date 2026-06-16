// 沖縄の魚市場 (Okinawan fish market) — pick fresh seafood, the upstairs restaurant cooks it "持ち上げ" style.
export const fishmarket = {
  id: 'fishmarket',
  title: 'Okinawan Fish Market',
  titleJp: '沖縄の魚市場',
  emoji: '🐠',
  description: 'Pick colorful tropical seafood by weight, then have the upstairs restaurant cook it for you.',
  lines: [
    {
      speaker: 'staff',
      jp: 'いらっしゃい！新鮮な魚が入ってるよ、見ていって！',
      say: 'いらっしゃい！しんせんなさかながはいってるよ、みていって！',
      ruby: 'いらっしゃい！<ruby>新鮮<rt>しんせん</rt></ruby>な<ruby>魚<rt>さかな</rt></ruby>が<ruby>入<rt>はい</rt></ruby>ってるよ、<ruby>見<rt>み</rt></ruby>ていって！',
      romaji: 'Irasshai! Shinsen na sakana ga haitteru yo, mite itte!',
      zh: '歡迎！有新鮮的魚喔，來看看！',
      en: "Welcome! We've got fresh fish in, come take a look!"
    },
    {
      speaker: 'you',
      jp: 'わあ、すごい。今日のおすすめはどれですか？',
      say: 'わあ、すごい。きょうのおすすめはどれですか？',
      ruby: 'わあ、すごい。<ruby>今日<rt>きょう</rt></ruby>のおすすめはどれですか？',
      romaji: 'Wā, sugoi. Kyō no osusume wa dore desu ka?',
      zh: '哇，好厲害。今天推薦哪一個呢？',
      en: "Wow, amazing. What's your recommendation today?"
    },
    {
      speaker: 'staff',
      jp: 'このグルクンは朝獲れだよ。沖縄の県魚なんだ。',
      say: 'このグルクンはあさどれだよ。おきなわのけんぎょなんだ。',
      ruby: 'このグルクンは<ruby>朝<rt>あさ</rt></ruby><ruby>獲<rt>ど</rt></ruby>れだよ。<ruby>沖縄<rt>おきなわ</rt></ruby>の<ruby>県魚<rt>けんぎょ</rt></ruby>なんだ。',
      romaji: 'Kono gurukun wa asa-dore da yo. Okinawa no kengyo nanda.',
      zh: '這個烏尾鮗是今早現撈的喔，是沖繩的縣魚。',
      en: "This gurukun was caught this morning. It's Okinawa's prefectural fish."
    },
    {
      speaker: 'you',
      jp: 'この青い魚は何という魚ですか？',
      say: 'このあおいさかなはなんというさかなですか？',
      ruby: 'この<ruby>青<rt>あお</rt></ruby>い<ruby>魚<rt>さかな</rt></ruby>は<ruby>何<rt>なん</rt></ruby>という<ruby>魚<rt>さかな</rt></ruby>ですか？',
      romaji: 'Kono aoi sakana wa nan to iu sakana desu ka?',
      zh: '這條藍色的魚叫什麼魚呢？',
      en: 'What is this blue fish called?'
    },
    {
      speaker: 'staff',
      jp: 'それはイラブチャー。青いブダイで、刺身がうまいよ。',
      say: 'それはイラブチャー。あおいブダイで、さしみがうまいよ。',
      ruby: 'それはイラブチャー。<ruby>青<rt>あお</rt></ruby>いブダイで、<ruby>刺身<rt>さしみ</rt></ruby>がうまいよ。',
      romaji: 'Sore wa irabuchā. Aoi budai de, sashimi ga umai yo.',
      zh: '那是藍鸚哥魚，是藍色的鸚哥魚，做成生魚片很好吃喔。',
      en: "That's irabuchā — a blue parrotfish. It's great as sashimi."
    },
    {
      speaker: 'you',
      jp: 'いくらですか？量り売りですか？',
      say: 'いくらですか？はかりうりですか？',
      ruby: 'いくらですか？<ruby>量<rt>はか</rt></ruby>り<ruby>売<rt>う</rt></ruby>りですか？',
      romaji: 'Ikura desu ka? Hakari-uri desu ka?',
      zh: '多少錢呢？是秤重賣的嗎？',
      en: 'How much is it? Is it sold by weight?'
    },
    {
      speaker: 'staff',
      jp: 'うん、量り売り。これ一匹で千五百円くらいだよ。',
      say: 'うん、はかりうり。これいっぴきでせんごひゃくえんくらいだよ。',
      ruby: 'うん、<ruby>量<rt>はか</rt></ruby>り<ruby>売<rt>う</rt></ruby>り。これ<ruby>一匹<rt>いっぴき</rt></ruby>で<ruby>千五百円<rt>せんごひゃくえん</rt></ruby>くらいだよ。',
      romaji: 'Un, hakari-uri. Kore ippiki de sen-gohyaku-en kurai da yo.',
      zh: '嗯，秤重賣。這一條大概一千五百日圓喔。',
      en: 'Yeah, by weight. This one is about 1,500 yen.'
    },
    {
      speaker: 'you',
      jp: 'これ、上の食堂で調理してもらえますか？',
      say: 'これ、うえのしょくどうでちょうりしてもらえますか？',
      ruby: 'これ、<ruby>上<rt>うえ</rt></ruby>の<ruby>食堂<rt>しょくどう</rt></ruby>で<ruby>調理<rt>ちょうり</rt></ruby>してもらえますか？',
      romaji: 'Kore, ue no shokudō de chōri shite moraemasu ka?',
      zh: '這個可以在樓上的食堂幫忙料理嗎？',
      en: 'Can the restaurant upstairs cook this for me?'
    },
    {
      speaker: 'staff',
      jp: 'もちろん。調理代は一品五百円もらってるよ。',
      say: 'もちろん。ちょうりだいはいっぴんごひゃくえんもらってるよ。',
      ruby: 'もちろん。<ruby>調理代<rt>ちょうりだい</rt></ruby>は<ruby>一品<rt>いっぴん</rt></ruby><ruby>五百円<rt>ごひゃくえん</rt></ruby>もらってるよ。',
      romaji: 'Mochiron. Chōri-dai wa ippin gohyaku-en moratteru yo.',
      zh: '當然可以。料理費一道收五百日圓喔。',
      en: 'Of course. The cooking fee is 500 yen per dish.'
    },
    {
      speaker: 'you',
      jp: 'じゃあ、半分は刺身に、半分は唐揚げにしてください。',
      say: 'じゃあ、はんぶんはさしみに、はんぶんはからあげにしてください。',
      ruby: 'じゃあ、<ruby>半分<rt>はんぶん</rt></ruby>は<ruby>刺身<rt>さしみ</rt></ruby>に、<ruby>半分<rt>はんぶん</rt></ruby>は<ruby>唐揚<rt>からあ</rt></ruby>げにしてください。',
      romaji: 'Jā, hanbun wa sashimi ni, hanbun wa kara-age ni shite kudasai.',
      zh: '那麼，一半做生魚片，一半做炸的。',
      en: "Then please make half into sashimi and half into kara-age."
    },
    {
      speaker: 'staff',
      jp: 'はいよ。アバサーの味噌汁も付けとく？体が温まるよ。',
      say: 'はいよ。アバサーのみそしるもつけとく？からだがあたたまるよ。',
      ruby: 'はいよ。アバサーの<ruby>味噌汁<rt>みそしる</rt></ruby>も<ruby>付<rt>つ</rt></ruby>けとく？<ruby>体<rt>からだ</rt></ruby>が<ruby>温<rt>あたた</rt></ruby>まるよ。',
      romaji: 'Hai yo. Abasā no miso-shiru mo tsuketoku? Karada ga atatamaru yo.',
      zh: '好的。要不要加一碗刺河魨味噌湯？喝了會暖身喔。',
      en: 'You got it. Want to add abasā miso soup too? It warms you right up.'
    },
    {
      speaker: 'you',
      jp: 'いいですね、それもください。どこで食べられますか？',
      say: 'いいですね、それもください。どこでたべられますか？',
      ruby: 'いいですね、それもください。どこで<ruby>食<rt>た</rt></ruby>べられますか？',
      romaji: 'Ii desu ne, sore mo kudasai. Doko de taberaremasu ka?',
      zh: '不錯耶，那也來一份。在哪裡可以吃呢？',
      en: 'Sounds good, that too please. Where can I eat?'
    },
    {
      speaker: 'staff',
      jp: '二階の食堂へどうぞ。できたら席まで運ぶからね。',
      say: 'にかいのしょくどうへどうぞ。できたらせきまではこぶからね。',
      ruby: '<ruby>二階<rt>にかい</rt></ruby>の<ruby>食堂<rt>しょくどう</rt></ruby>へどうぞ。できたら<ruby>席<rt>せき</rt></ruby>まで<ruby>運<rt>はこ</rt></ruby>ぶからね。',
      romaji: 'Nikai no shokudō e dōzo. Dekitara seki made hakobu kara ne.',
      zh: '請到二樓的食堂。做好了會送到您的座位喔。',
      en: "Head to the second-floor restaurant. We'll bring it to your table when it's ready."
    }
  ],
  menu: [
    {
      title: '沖縄の魚介 · Okinawan seafood',
      items: [
        { emoji: '🐟', jp: 'グルクン', ruby: 'グルクン', romaji: 'gurukun', zh: '烏尾鮗（縣魚）', en: 'gurukun (banana fish)', desc: '沖繩縣魚，肉質清淡，炸成整尾唐揚最常見。' },
        { emoji: '🐠', jp: 'イラブチャー', ruby: 'イラブチャー', romaji: 'irabuchā', zh: '藍鸚哥魚', en: 'blue parrotfish', desc: '藍色的鸚哥魚，肉質清淡軟嫩，做生魚片很受歡迎。' },
        { emoji: '🐡', jp: 'アバサー', ruby: 'アバサー', romaji: 'abasā', zh: '刺河魨', en: 'porcupinefish', desc: '刺河魨，肉緊實少刺，多用來煮味噌湯暖身。' },
        { emoji: '🐟', jp: 'マクブ', ruby: 'マクブ', romaji: 'makubu', zh: '青斑（高級石斑）', en: 'blue-spotted wrasse', desc: '沖繩最高級的隆頭魚之一，白肉細緻，生魚片或鹽烤皆宜。' },
        { emoji: '🐟', jp: 'ミーバイ', ruby: 'ミーバイ', romaji: 'mībai', zh: '石斑魚', en: 'grouper', desc: '石斑魚的沖繩稱呼，肉質彈嫩鮮甜，煮湯或清蒸都好。' },
        { emoji: '🐟', jp: 'タマン', ruby: 'タマン', romaji: 'taman', zh: '星雞魚（黃帶擬鬚鯛）', en: 'emperor fish', desc: '裸頰鯛類白身高級魚，鹽烤與生魚片都美味。' },
        { emoji: '🐟', jp: 'アカジン', ruby: 'アカジン', romaji: 'akajin', zh: '濱鯛類高級魚「赤仁」', en: 'red grouper', desc: '沖繩三大高級魚之一，紅色石斑，鮮味濃郁價格高。' },
        { emoji: '🐟', jp: 'アカマチ', ruby: 'アカマチ', romaji: 'akamachi', zh: '濱鯛／紅雞魚', en: 'red snapper', desc: '濱鯛類高級白身魚，肉質細嫩脂肪豐，生魚片極品。' },
        { emoji: '🐟', jp: 'アオチビキ', ruby: 'アオチビキ', romaji: 'aochibiki', zh: '藍色濱鯛（綠短鰭笛鯛）', en: 'green jobfish', desc: '青灰色的笛鯛類，白肉緊實鮮甜，鹽烤或生魚片皆佳。' },
        { emoji: '🐠', jp: 'アオブダイ', ruby: 'アオブダイ', romaji: 'aobudai', zh: '青鸚哥魚', en: 'blue parrotfish', desc: '大型藍色鸚哥魚，肉質軟嫩清淡，奶油煎或鹽烤皆宜。' },
        { emoji: '🐟', jp: 'グルクマ', ruby: 'グルクマ', romaji: 'gurukuma', zh: '沖繩鯖類（羽鰓鮐）', en: 'Okinawan mackerel', desc: '沖繩近海的小型鯖魚，油脂清爽，鹽烤或炸物皆美味。' },
        { emoji: '🦑', jp: 'セーイカ', ruby: 'セーイカ', romaji: 'sēika', zh: '軟翅仔（大型魷魚）', en: 'bigfin reef squid', desc: '大型軟絲，肉厚甘甜爽脆，生魚片與天婦羅都出色。' },
        { emoji: '🐙', jp: '島蛸', say: 'しまだこ', ruby: '<ruby>島蛸<rt>しまだこ</rt></ruby>', romaji: 'shima-dako', zh: '沖繩章魚', en: 'island octopus', desc: '沖繩近海的章魚，口感彈牙，常做生魚片或醋物。' },
        { emoji: '🐟', jp: '太刀魚', say: 'たちうお', ruby: '<ruby>太刀魚<rt>たちうお</rt></ruby>', romaji: 'tachiuo', zh: '白帶魚', en: 'beltfish', desc: '銀白細長如刀的白身魚，油脂豐潤，鹽烤或天婦羅皆香。' },
        { emoji: '🐟', jp: 'マグロ', ruby: 'マグロ', romaji: 'maguro', zh: '鮪魚', en: 'tuna', desc: '鮪魚，沖繩近海漁獲豐富，價格實惠，生魚片首選。' },
        { emoji: '🐟', jp: 'カツオ', ruby: 'カツオ', romaji: 'katsuo', zh: '鰹魚', en: 'bonito', desc: '鰹魚，肉色暗紅味濃，做生魚片或炙燒（半敲燒）都好。' },
        { emoji: '🦞', jp: '伊勢海老', say: 'いせえび', ruby: '<ruby>伊勢海老<rt>いせえび</rt></ruby>', romaji: 'ise-ebi', zh: '伊勢龍蝦', en: 'spiny lobster', desc: '高級龍蝦，肉質Q彈鮮甜，生吃或鹽烤、味噌湯皆宜。' },
        { emoji: '🦐', jp: '車海老', say: 'くるまえび', ruby: '<ruby>車海老<rt>くるまえび</rt></ruby>', romaji: 'kuruma-ebi', zh: '斑節蝦（明蝦）', en: 'kuruma prawn', desc: '大型明蝦，沖繩養殖盛行，甜度高，鹽烤或天婦羅皆佳。' },
        { emoji: '🦐', jp: 'シャコ', ruby: 'シャコ', romaji: 'shako', zh: '蝦蛄（瀨尿蝦）', en: 'mantis shrimp', desc: '蝦蛄，外形似蝦的甲殼類，肉甜細緻，多水煮或做壽司。' },
        { emoji: '🦀', jp: 'ガザミ', ruby: 'ガザミ', romaji: 'gazami', zh: '梭子蟹（青蟹）', en: 'swimming crab', desc: '游泳蟹的一種，蟹肉鮮甜，煮湯或鹽煮味道濃郁。' },
        { emoji: '🦀', jp: 'ヤシガニ', ruby: 'ヤシガニ', romaji: 'yashi-gani', zh: '椰子蟹', en: 'coconut crab', desc: '椰子蟹，巨大的陸生寄居蟹，肉味濃厚，鹽烤或煮湯為珍味。' },
        { emoji: '🐚', jp: '夜光貝', say: 'やこうがい', ruby: '<ruby>夜光貝<rt>やこうがい</rt></ruby>', romaji: 'yakō-gai', zh: '夜光蠑螺（大型海螺）', en: 'great green turban shell', desc: '大型海螺，口感爽脆，生魚片或奶油煎都很對味。' },
        { emoji: '🐚', jp: 'シャコ貝', say: 'シャコがい', ruby: 'シャコ<ruby>貝<rt>がい</rt></ruby>', romaji: 'shako-gai', zh: '硨磲貝（巨蛤）', en: 'giant clam', desc: '巨型蛤蜊，貝肉清甜爽脆，生吃或奶油煎都好吃。' },
        { emoji: '🌿', jp: 'もずく', ruby: 'もずく', romaji: 'mozuku', zh: '海蘊（水雲藻）', en: 'mozuku seaweed', desc: '沖繩特產的細絲海藻，滑溜爽口，常做成醋物。' },
        { emoji: '🍇', jp: '海ぶどう', say: 'うみぶどう', ruby: '<ruby>海<rt>うみ</rt></ruby>ぶどう', romaji: 'umi-budō', zh: '海葡萄（長莖葡萄藻）', en: 'sea grapes', desc: '沖繩名產綠藻，粒粒如葡萄，咬下啵啵爆漿、海味清爽。' }
      ]
    },
    {
      title: '調理方法 · Cooking styles',
      items: [
        { emoji: '🍣', jp: '刺身', say: 'さしみ', ruby: '<ruby>刺身<rt>さしみ</rt></ruby>', romaji: 'sashimi', zh: '生魚片', en: 'sashimi', desc: '最能品嚐魚的鮮度，新鮮現切沾醬油享用。' },
        { emoji: '🍗', jp: '唐揚げ', say: 'からあげ', ruby: '<ruby>唐揚<rt>からあ</rt></ruby>げ', romaji: 'kara-age', zh: '炸物（唐揚）', en: 'deep-fried', desc: '裹粉油炸，外酥內嫩，整尾炸的グルクン最經典。' },
        { emoji: '🔥', jp: '塩焼き', say: 'しおやき', ruby: '<ruby>塩焼<rt>しおや</rt></ruby>き', romaji: 'shio-yaki', zh: '鹽烤', en: 'salt-grilled', desc: '抹鹽炭烤，凸顯魚本身的鮮味，簡單又美味。' },
        { emoji: '🧈', jp: 'バター焼き', say: 'バターやき', ruby: 'バター<ruby>焼<rt>や</rt></ruby>き', romaji: 'batā-yaki', zh: '奶油煎', en: 'butter-grilled', desc: '用奶油香煎，香氣濃郁，貝類與石斑特別合適。' },
        { emoji: '🍳', jp: '煮付け', say: 'につけ', ruby: '<ruby>煮付<rt>につ</rt></ruby>け', romaji: 'nitsuke', zh: '醬油煮', en: 'simmered', desc: '用醬油、味醂、糖燉煮，甜鹹入味，白身魚最適合。' },
        { emoji: '🍲', jp: '味噌汁／汁物', say: 'みそしる／しるもの', ruby: '<ruby>味噌汁<rt>みそしる</rt></ruby>／<ruby>汁物<rt>しるもの</rt></ruby>', romaji: 'miso-shiru / shirumono', zh: '味噌湯／湯品', en: 'miso soup / soup', desc: '用魚骨或刺河魨熬煮，湯頭鮮甜暖身。' },
        { emoji: '🍤', jp: '天ぷら', say: 'てんぷら', ruby: '<ruby>天<rt>てん</rt></ruby>ぷら', romaji: 'tenpura', zh: '天婦羅', en: 'tempura', desc: '裹薄麵衣油炸，外層酥脆，蝦類與白身魚最適合。' },
        { emoji: '🧂', jp: 'マース煮（塩煮）', say: 'マースに（まーすに）', ruby: 'マース<ruby>煮<rt>に</rt></ruby>（<ruby>塩煮<rt>まーすに</rt></ruby>）', romaji: 'māsu-ni (shio-ni)', zh: '沖繩鹽煮', en: 'Okinawan salt simmer', desc: '沖繩家常做法，只用海鹽與水清燉整尾魚，最能嚐到鮮味。' }
      ]
    }
  ],
  phrases: [
    {
      title: 'よく使う一言 · Handy phrases',
      items: [
        { jp: 'これは何という魚ですか？', say: 'これはなんというさかなですか？', ruby: 'これは<ruby>何<rt>なん</rt></ruby>という<ruby>魚<rt>さかな</rt></ruby>ですか？', zh: '這是什麼魚呢？', en: 'What is this fish called?' },
        { jp: 'おすすめはどれですか？', ruby: 'おすすめはどれですか？', zh: '推薦哪一個呢？', en: 'Which do you recommend?' },
        { jp: 'いくらですか？', ruby: 'いくらですか？', zh: '多少錢呢？', en: 'How much is it?' },
        { jp: '上の食堂で調理してもらえますか？', say: 'うえのしょくどうでちょうりしてもらえますか？', ruby: '<ruby>上<rt>うえ</rt></ruby>の<ruby>食堂<rt>しょくどう</rt></ruby>で<ruby>調理<rt>ちょうり</rt></ruby>してもらえますか？', zh: '可以在樓上的食堂幫忙料理嗎？', en: 'Can the restaurant upstairs cook this for me?' },
        { jp: '調理代はいくらですか？', say: 'ちょうりだいはいくらですか？', ruby: '<ruby>調理代<rt>ちょうりだい</rt></ruby>はいくらですか？', zh: '料理費是多少呢？', en: 'How much is the cooking fee?' },
        { jp: '刺身にしてください。', say: 'さしみにしてください。', ruby: '<ruby>刺身<rt>さしみ</rt></ruby>にしてください。', zh: '請做成生魚片。', en: 'Please make it into sashimi.' }
      ]
    }
  ]
}
