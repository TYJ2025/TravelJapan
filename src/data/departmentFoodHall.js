// デパ地下で買い物 — shopping deli food, bento, sweets and signature specialties in a department-store basement.
export const departmentFoodHall = {
  id: 'department-store-food-hall',
  title: 'Depachika Shopping',
  titleJp: 'デパ地下で買い物',
  emoji: '🏬',
  staffAvatar: '🏬',
  staffLabel: '店員 · Food Hall Staff',
  description: 'Shop a department-store basement (depachika): order deli food by weight, choose bento and sweets, and ask about cooling, gifts and store specialties.',
  menuTabLabel: '品項・名物 · Items & specialties',
  menuIntro: '🔊 聽發音 · 🎤 練習品項與百貨名物 · 點一下商品展開購買句型',
  menuPatternLabel: '購買句型 · Purchase patterns',
  lines: [
    {
      speaker: 'staff',
      jp: 'いらっしゃいませ。ご注文はお決まりですか？',
      say: 'いらっしゃいませ。ごちゅうもんわおきまりですか？',
      ruby: 'いらっしゃいませ。ご<ruby>注文<rt>ちゅうもん</rt></ruby>はお<ruby>決<rt>き</rt></ruby>まりですか？',
      romaji: 'Irasshaimase. Gochūmon wa okimari desu ka?',
      zh: '歡迎光臨。您決定要買什麼了嗎？',
      en: 'Welcome. Have you decided what you would like?'
    },
    {
      speaker: 'you',
      jp: 'このローストビーフを百グラムお願いします。',
      say: 'このローストビーフをひゃくグラムおねがいします。',
      ruby: 'このローストビーフを<ruby>百<rt>ひゃく</rt></ruby>グラムお<ruby>願<rt>ねが</rt></ruby>いします。',
      romaji: 'Kono rōsuto bīfu o hyaku guramu onegai shimasu.',
      zh: '這個烤牛肉，請給我 100 公克。',
      en: 'One hundred grams of this roast beef, please.'
    },
    {
      speaker: 'staff',
      jp: 'はい。薄切りでよろしいですか？',
      say: 'はい。うすぎりでよろしいですか？',
      ruby: 'はい。<ruby>薄切<rt>うすぎ</rt></ruby>りでよろしいですか？',
      romaji: 'Hai. Usugiri de yoroshii desu ka?',
      zh: '好的。切薄片可以嗎？',
      en: 'Certainly. Would thin slices be all right?'
    },
    {
      speaker: 'you',
      jp: 'はい、薄切りでお願いします。ソースも付けてもらえますか？',
      say: 'はい、うすぎりでおねがいします。ソースもつけてもらえますか？',
      ruby: 'はい、<ruby>薄切<rt>うすぎ</rt></ruby>りでお<ruby>願<rt>ねが</rt></ruby>いします。ソースも<ruby>付<rt>つ</rt></ruby>けてもらえますか？',
      romaji: 'Hai, usugiri de onegai shimasu. Sōsu mo tsukete moraemasu ka?',
      zh: '好，請切薄片。也可以附醬汁嗎？',
      en: 'Yes, thin slices, please. Could I have sauce as well?'
    },
    {
      speaker: 'staff',
      jp: 'かしこまりました。こちらのサラダはいかがですか？',
      say: 'かしこまりました。こちらのサラダわいかがですか？',
      ruby: 'かしこまりました。こちらのサラダはいかがですか？',
      romaji: 'Kashikomarimashita. Kochira no sarada wa ikaga desu ka?',
      zh: '好的。這份沙拉要不要一起帶呢？',
      en: 'Certainly. How about this salad?'
    },
    {
      speaker: 'you',
      jp: '二人分ください。',
      say: 'ふたりぶんください。',
      ruby: '<ruby>二人分<rt>ふたりぶん</rt></ruby>ください。',
      romaji: 'Futaribun kudasai.',
      zh: '請給我兩人份。',
      en: 'Two portions, please.'
    },
    {
      speaker: 'staff',
      jp: 'こちらは量り売りです。二百グラムほどでよろしいですか？',
      say: 'こちらわはかりうりです。にひゃくグラムほどでよろしいですか？',
      ruby: 'こちらは<ruby>量<rt>はか</rt></ruby>り<ruby>売<rt>う</rt></ruby>りです。<ruby>二百<rt>にひゃく</rt></ruby>グラムほどでよろしいですか？',
      romaji: 'Kochira wa hakariuri desu. Nihyaku guramu hodo de yoroshii desu ka?',
      zh: '這是秤重販售。大約 200 公克可以嗎？',
      en: 'This is sold by weight. Would about 200 grams be all right?'
    },
    {
      speaker: 'you',
      jp: 'はい、それでお願いします。',
      say: 'はい、それでおねがいします。',
      ruby: 'はい、それでお<ruby>願<rt>ねが</rt></ruby>いします。',
      romaji: 'Hai, sore de onegai shimasu.',
      zh: '好，就這樣。',
      en: 'Yes, that will be fine.'
    },
    {
      speaker: 'staff',
      jp: 'ほかにはいかがですか？',
      say: 'ほかにわいかがですか？',
      ruby: 'ほかにはいかがですか？',
      romaji: 'Hoka ni wa ikaga desu ka?',
      zh: '還需要其他的嗎？',
      en: 'Would you like anything else?'
    },
    {
      speaker: 'you',
      jp: 'このお弁当を二つと、ショートケーキを二つお願いします。',
      say: 'このおべんとうをふたつと、ショートケーキをふたつおねがいします。',
      ruby: 'このお<ruby>弁当<rt>べんとう</rt></ruby>を<ruby>二<rt>ふた</rt></ruby>つと、ショートケーキを<ruby>二<rt>ふた</rt></ruby>つお<ruby>願<rt>ねが</rt></ruby>いします。',
      romaji: 'Kono obentō o futatsu to, shōto kēki o futatsu onegai shimasu.',
      zh: '這個便當兩份，草莓鮮奶油蛋糕兩個，麻煩您。',
      en: 'Two of these boxed meals and two shortcakes, please.'
    },
    {
      speaker: 'staff',
      jp: 'ケーキのお持ち歩き時間はどのくらいですか？',
      say: 'ケーキのおもちあるきじかんわどのくらいですか？',
      ruby: 'ケーキのお<ruby>持<rt>も</rt></ruby>ち<ruby>歩<rt>ある</rt></ruby>き<ruby>時間<rt>じかん</rt></ruby>はどのくらいですか？',
      romaji: 'Kēki no omochiaruki jikan wa dono kurai desu ka?',
      zh: '蛋糕大約會帶著走多久呢？',
      en: 'About how long will you be carrying the cake?'
    },
    {
      speaker: 'you',
      jp: '二時間くらいです。保冷剤を入れていただけますか？',
      say: 'にじかんくらいです。ほれいざいをいれていただけますか？',
      ruby: '<ruby>二時間<rt>にじかん</rt></ruby>くらいです。<ruby>保冷剤<rt>ほれいざい</rt></ruby>を<ruby>入<rt>い</rt></ruby>れていただけますか？',
      romaji: 'Nijikan kurai desu. Horeizai o irete itadakemasu ka?',
      zh: '大約兩個小時。可以幫我放保冷劑嗎？',
      en: 'About two hours. Could you include an ice pack?'
    },
    {
      speaker: 'staff',
      jp: 'はい、保冷剤をお付けします。お召し上がりは今日中にお願いします。',
      say: 'はい、ほれいざいをおつけします。おめしあがりわきょうじゅうにおねがいします。',
      ruby: 'はい、<ruby>保冷剤<rt>ほれいざい</rt></ruby>をお<ruby>付<rt>つ</rt></ruby>けします。お<ruby>召<rt>め</rt></ruby>し<ruby>上<rt>あ</rt></ruby>がりは<ruby>今日中<rt>きょうじゅう</rt></ruby>にお<ruby>願<rt>ねが</rt></ruby>いします。',
      romaji: 'Hai, horeizai o otsuke shimasu. Omeshiagari wa kyōjū ni onegai shimasu.',
      zh: '好的，會附上保冷劑。請在今天內食用。',
      en: 'Certainly, I will include an ice pack. Please enjoy it today.'
    },
    {
      speaker: 'you',
      jp: 'わかりました。手提げ袋を一枚お願いします。',
      say: 'わかりました。てさげぶくろをいちまいおねがいします。',
      ruby: 'わかりました。<ruby>手提<rt>てさ</rt></ruby>げ<ruby>袋<rt>ぶくろ</rt></ruby>を<ruby>一枚<rt>いちまい</rt></ruby>お<ruby>願<rt>ねが</rt></ruby>いします。',
      romaji: 'Wakarimashita. Tesage-bukuro o ichimai onegai shimasu.',
      zh: '了解。麻煩給我一個提袋。',
      en: 'I understand. One carry bag, please.'
    },
    {
      speaker: 'staff',
      jp: '全部で四千八百円です。',
      say: 'ぜんぶでよんせんはっぴゃくえんです。',
      ruby: '<ruby>全部<rt>ぜんぶ</rt></ruby>で<ruby>四千八百円<rt>よんせんはっぴゃくえん</rt></ruby>です。',
      romaji: 'Zenbu de yonsen happyaku en desu.',
      zh: '一共是 4,800 日圓。',
      en: 'The total is 4,800 yen.'
    },
    {
      speaker: 'you',
      jp: 'クレジットカードでお願いします。',
      ruby: 'クレジットカードでお<ruby>願<rt>ねが</rt></ruby>いします。',
      romaji: 'Kurejitto kādo de onegai shimasu.',
      zh: '我用信用卡付款。',
      en: 'By credit card, please.'
    }
  ],
  phrases: [
    {
      title: '量り売り · Buying by weight',
      items: [
        { jp: 'これを百グラムください。', say: 'これをひゃくグラムください。', ruby: 'これを<ruby>百<rt>ひゃく</rt></ruby>グラムください。', zh: '這個請給我 100 公克。', en: 'One hundred grams of this, please.' },
        { jp: '二人分ください。', say: 'ふたりぶんください。', ruby: '<ruby>二人分<rt>ふたりぶん</rt></ruby>ください。', zh: '請給我兩人份。', en: 'Two portions, please.' },
        { jp: '少し多めにしてください。', say: 'すこしおおめにしてください。', ruby: '<ruby>少<rt>すこ</rt></ruby>し<ruby>多<rt>おお</rt></ruby>めにしてください。', zh: '請多給一點。', en: 'Please make it a little more.' },
        { jp: '薄切りにしてください。', say: 'うすぎりにしてください。', ruby: '<ruby>薄切<rt>うすぎ</rt></ruby>りにしてください。', zh: '請切薄片。', en: 'Please slice it thinly.' }
      ]
    },
    {
      title: '持ち歩き・保存 · Carrying and storage',
      items: [
        { jp: 'お持ち歩きは二時間くらいです。', say: 'おもちあるきわにじかんくらいです。', ruby: 'お<ruby>持<rt>も</rt></ruby>ち<ruby>歩<rt>ある</rt></ruby>きは<ruby>二時間<rt>にじかん</rt></ruby>くらいです。', zh: '我會帶著走大約兩個小時。', en: 'I will be carrying it for about two hours.' },
        { jp: '保冷剤を入れていただけますか？', say: 'ほれいざいをいれていただけますか？', ruby: '<ruby>保冷剤<rt>ほれいざい</rt></ruby>を<ruby>入<rt>い</rt></ruby>れていただけますか？', zh: '可以幫我放保冷劑嗎？', en: 'Could you include an ice pack?' },
        { jp: '常温で持ち歩けますか？', say: 'じょうおんでもちあるけますか？', ruby: '<ruby>常温<rt>じょうおん</rt></ruby>で<ruby>持<rt>も</rt></ruby>ち<ruby>歩<rt>ある</rt></ruby>けますか？', zh: '可以在常溫下帶著走嗎？', en: 'Can I carry it at room temperature?' },
        { jp: '賞味期限はいつまでですか？', say: 'しょうみきげんわいつまでですか？', ruby: '<ruby>賞味期限<rt>しょうみきげん</rt></ruby>はいつまでですか？', zh: '賞味期限到什麼時候？', en: 'What is the best-before date?' }
      ]
    },
    {
      title: 'お弁当・お惣菜 · Bento and deli food',
      items: [
        { jp: 'おすすめのお弁当はどれですか？', say: 'おすすめのおべんとうわどれですか？', ruby: 'おすすめのお<ruby>弁当<rt>べんとう</rt></ruby>はどれですか？', zh: '推薦的便當是哪一款？', en: 'Which boxed meal do you recommend?' },
        { jp: 'ソースを付けてもらえますか？', say: 'ソースをつけてもらえますか？', ruby: 'ソースを<ruby>付<rt>つ</rt></ruby>けてもらえますか？', zh: '可以附醬汁嗎？', en: 'Could I have sauce as well?' },
        { jp: 'お箸を二膳お願いします。', say: 'おはしをにぜんおねがいします。', ruby: 'お<ruby>箸<rt>はし</rt></ruby>を<ruby>二膳<rt>にぜん</rt></ruby>お<ruby>願<rt>ねが</rt></ruby>いします。', zh: '麻煩兩雙筷子。', en: 'Two pairs of chopsticks, please.' },
        { jp: '今日中に食べたほうがいいですか？', say: 'きょうじゅうにたべたほうがいいですか？', ruby: '<ruby>今日中<rt>きょうじゅう</rt></ruby>に<ruby>食<rt>た</rt></ruby>べたほうがいいですか？', zh: '最好在今天內吃完嗎？', en: 'Should I eat it today?' }
      ]
    },
    {
      title: '手土産・包装 · Gifts and wrapping',
      items: [
        { jp: '自宅用です。', say: 'じたくようです。', ruby: '<ruby>自宅用<rt>じたくよう</rt></ruby>です。', zh: '這是自己家裡要吃的。', en: 'It is for home.' },
        { jp: '贈答用に包装してください。', say: 'ぞうとうようにほうそうしてください。', ruby: '<ruby>贈答用<rt>ぞうとうよう</rt></ruby>に<ruby>包装<rt>ほうそう</rt></ruby>してください。', zh: '請包裝成送禮用。', en: 'Please wrap it as a gift.' },
        { jp: '手提げ袋を一枚ください。', say: 'てさげぶくろをいちまいください。', ruby: '<ruby>手提<rt>てさ</rt></ruby>げ<ruby>袋<rt>ぶくろ</rt></ruby>を<ruby>一枚<rt>いちまい</rt></ruby>ください。', zh: '請給我一個提袋。', en: 'One carry bag, please.' },
        { jp: 'のしを付けてもらえますか？', say: 'のしをつけてもらえますか？', ruby: 'のしを<ruby>付<rt>つ</rt></ruby>けてもらえますか？', zh: '可以加上禮品熨斗紙嗎？', en: 'Could you add a noshi gift wrapper?' }
      ]
    },
    {
      title: 'デパ地下の名物 · Finding store specialties',
      items: [
        { jp: 'このお店でしか買えない商品はありますか？', say: 'このおみせでしかかえないしょうひんわありますか？', ruby: 'このお<ruby>店<rt>みせ</rt></ruby>でしか<ruby>買<rt>か</rt></ruby>えない<ruby>商品<rt>しょうひん</rt></ruby>はありますか？', zh: '有只有這家店才買得到的商品嗎？', en: 'Do you have anything available only at this store?' },
        { jp: '伊勢丹限定のお菓子はありますか？', say: 'いせたんげんていのおかしわありますか？', ruby: '<ruby>伊勢丹<rt>いせたん</rt></ruby><ruby>限定<rt>げんてい</rt></ruby>のお<ruby>菓子<rt>かし</rt></ruby>はありますか？', zh: '有伊勢丹限定的甜點嗎？', en: 'Do you have Isetan-exclusive sweets?' },
        { jp: '日本橋三越限定の手土産を探しています。', say: 'にほんばしみつこしげんていのてみやげをさがしています。', ruby: '<ruby>日本橋三越<rt>にほんばしみつこし</rt></ruby><ruby>限定<rt>げんてい</rt></ruby>の<ruby>手土産<rt>てみやげ</rt></ruby>を<ruby>探<rt>さが</rt></ruby>しています。', zh: '我在找日本橋三越限定的伴手禮。', en: 'I am looking for a Nihombashi Mitsukoshi-exclusive gift.' },
        { jp: '大丸東京で人気のお弁当はどれですか？', say: 'だいまるとうきょうでにんきのおべんとうわどれですか？', ruby: '<ruby>大丸東京<rt>だいまるとうきょう</rt></ruby>で<ruby>人気<rt>にんき</rt></ruby>のお<ruby>弁当<rt>べんとう</rt></ruby>はどれですか？', zh: '大丸東京最受歡迎的便當是哪一款？', en: 'Which bento is popular at Daimaru Tokyo?' },
        { jp: '阪急うめだの名物を教えてください。', say: 'はんきゅううめだのめいぶつをおしえてください。', ruby: '<ruby>阪急<rt>はんきゅう</rt></ruby>うめだの<ruby>名物<rt>めいぶつ</rt></ruby>を<ruby>教<rt>おし</rt></ruby>えてください。', zh: '請告訴我阪急梅田的名物。', en: 'Please tell me the specialties at Hankyu Umeda.' },
        { jp: '冷蔵品と常温品を分けてください。', say: 'れいぞうひんとじょうおんひんをわけてください。', ruby: '<ruby>冷蔵品<rt>れいぞうひん</rt></ruby>と<ruby>常温品<rt>じょうおんひん</rt></ruby>を<ruby>分<rt>わ</rt></ruby>けてください。', zh: '請把冷藏品和常溫品分開包。', en: 'Please pack refrigerated and room-temperature items separately.' }
      ]
    }
  ],
  menu: [
    {
      title: 'お惣菜・量り売り · Deli and by-weight food',
      items: [
        { emoji: '🥩', jp: 'ローストビーフ', ruby: 'ローストビーフ', romaji: 'rōsuto bīfu', zh: '烤牛肉', en: 'roast beef', desc: '百貨熟食櫃常可依公克數購買，通常可選切片厚薄並附醬汁。' },
        { emoji: '🥗', jp: 'デリサラダ', ruby: 'デリサラダ', romaji: 'deri sarada', zh: '熟食沙拉', en: 'deli salad', desc: '馬鈴薯沙拉、南瓜沙拉與海鮮沙拉等常以秤重方式販售。' },
        { emoji: '🥔', jp: 'コロッケ', ruby: 'コロッケ', romaji: 'korokke', zh: '可樂餅', en: 'croquette', desc: '常有牛肉、蟹肉與馬鈴薯口味；適合直接外帶。' },
        { emoji: '🍗', jp: 'からあげ', ruby: 'からあげ', romaji: 'karaage', zh: '日式炸雞', en: 'fried chicken', desc: '可按份或按重量購買；可詢問是否附檸檬或醬料。' },
        { emoji: '🍢', jp: '焼き鳥', say: 'やきとり', ruby: '<ruby>焼<rt>や</rt></ruby>き<ruby>鳥<rt>とり</rt></ruby>', romaji: 'yakitori', zh: '烤雞肉串', en: 'grilled chicken skewers', desc: '常見鹽味與醬燒口味，可指定想買的串數。' },
        { emoji: '🍤', jp: '海老フライ', say: 'えびフライ', ruby: '<ruby>海老<rt>えび</rt></ruby>フライ', romaji: 'ebi furai', zh: '炸蝦', en: 'fried shrimp', desc: '百貨熟食區常見的洋食炸物，可搭配塔塔醬。' }
      ]
    },
    {
      title: 'お弁当・ご飯 · Bento and rice dishes',
      items: [
        { emoji: '🍱', jp: '幕の内弁当', say: 'まくのうちべんとう', ruby: '<ruby>幕<rt>まく</rt></ruby>の<ruby>内弁当<rt>うちべんとう</rt></ruby>', romaji: 'makunouchi bentō', zh: '幕之內便當', en: 'variety bento', desc: '白飯搭配烤魚、炸物、煮物等多樣配菜，是經典日式便當。' },
        { emoji: '🍱', jp: 'うな重', say: 'うなじゅう', ruby: 'うな<ruby>重<rt>じゅう</rt></ruby>', romaji: 'unajū', zh: '鰻魚重箱便當', en: 'grilled eel box', desc: '蒲燒鰻魚鋪在白飯上的高級便當，常見於百貨的專櫃。' },
        { emoji: '🍣', jp: 'ちらし寿司', say: 'ちらしずし', ruby: 'ちらし<ruby>寿司<rt>ずし</rt></ruby>', romaji: 'chirashi-zushi', zh: '散壽司', en: 'scattered sushi', desc: '醋飯上鋪魚料、蛋絲與蔬菜，適合外帶分享。' },
        { emoji: '🍙', jp: 'おこわ', ruby: 'おこわ', romaji: 'okowa', zh: '糯米飯', en: 'sticky rice', desc: '以糯米和栗子、菇類或山菜炊煮，可單買一盒或搭配便當。' },
        { emoji: '🍛', jp: 'カツサンド', ruby: 'カツサンド', romaji: 'katsu sando', zh: '炸豬排三明治', en: 'pork cutlet sandwich', desc: '厚切炸豬排夾麵包，是百貨地下層常見的熱門外帶餐點。' },
        { emoji: '🥟', jp: 'いなり寿司', say: 'いなりずし', ruby: 'いなり<ruby>寿司<rt>ずし</rt></ruby>', romaji: 'inari-zushi', zh: '豆皮壽司', en: 'inari sushi', desc: '甜鹹豆皮包醋飯，方便攜帶，也常成盒販售。' }
      ]
    },
    {
      title: 'ケーキ・和菓子 · Cakes and Japanese sweets',
      items: [
        { emoji: '🍰', jp: 'ショートケーキ', ruby: 'ショートケーキ', romaji: 'shōto kēki', zh: '草莓鮮奶油蛋糕', en: 'Japanese shortcake', desc: '日本常說的ショートケーキ多指鮮奶油與草莓蛋糕，需要冷藏保存。' },
        { emoji: '🍓', jp: 'いちご大福', say: 'いちごだいふく', ruby: 'いちご<ruby>大福<rt>だいふく</rt></ruby>', romaji: 'ichigo daifuku', zh: '草莓大福', en: 'strawberry daifuku', desc: '草莓與紅豆餡包在麻糬皮中，是春季常見的和菓子。' },
        { emoji: '🥞', jp: 'どら焼き', say: 'どらやき', ruby: 'どら<ruby>焼<rt>や</rt></ruby>き', romaji: 'dorayaki', zh: '銅鑼燒', en: 'dorayaki', desc: '兩片蜂蜜蛋糕夾紅豆餡，常溫可攜帶，適合當伴手禮。' },
        { emoji: '🍪', jp: '焼き菓子', say: 'やきがし', ruby: '<ruby>焼<rt>や</rt></ruby>き<ruby>菓子<rt>がし</rt></ruby>', romaji: 'yakigashi', zh: '烘焙小點', en: 'baked sweets', desc: '餅乾、費南雪與瑪德蓮等常溫點心，常可選禮盒包裝。' },
        { emoji: '🍩', jp: 'バウムクーヘン', ruby: 'バウムクーヘン', romaji: 'baumukūhen', zh: '年輪蛋糕', en: 'baumkuchen', desc: '層層烘烤的蛋糕，是百貨甜點區很常見的伴手禮。' },
        { emoji: '🍵', jp: '羊羹', say: 'ようかん', ruby: '<ruby>羊羹<rt>ようかん</rt></ruby>', romaji: 'yōkan', zh: '羊羹', en: 'sweet bean jelly', desc: '以紅豆與寒天製成的傳統和菓子，保存期通常較長。' }
      ]
    },
    {
      title: '食材・サービス · Pantry food and services',
      items: [
        { emoji: '🧀', jp: 'チーズ', ruby: 'チーズ', romaji: 'chīzu', zh: '起司', en: 'cheese', desc: '百貨食品樓層常有進口起司專櫃，可請店員推薦搭配或切片。' },
        { emoji: '🥓', jp: '生ハム', say: 'なまハム', ruby: '<ruby>生<rt>なま</rt></ruby>ハム', romaji: 'nama hamu', zh: '生火腿', en: 'cured ham', desc: '常以薄切方式秤重販售，適合搭配起司或麵包。' },
        { emoji: '🥖', jp: 'パン', ruby: 'パン', romaji: 'pan', zh: '麵包', en: 'bread', desc: '常見精品麵包、可頌與吐司；有些櫃位可切片。' },
        { emoji: '🧊', jp: '保冷剤', say: 'ほれいざい', ruby: '<ruby>保冷剤<rt>ほれいざい</rt></ruby>', romaji: 'horeizai', zh: '保冷劑', en: 'ice pack', desc: '購買冷藏甜點或熟食時，可依攜帶時間向店員索取。' },
        { emoji: '🛍️', jp: '手提げ袋', say: 'てさげぶくろ', ruby: '<ruby>手提<rt>てさ</rt></ruby>げ<ruby>袋<rt>ぶくろ</rt></ruby>', romaji: 'tesage-bukuro', zh: '提袋', en: 'carry bag', desc: '百貨櫃位常提供品牌提袋；冷藏食品可另外確認是否需要保冷袋。' },
        { emoji: '🎁', jp: '包装', say: 'ほうそう', ruby: '<ruby>包装<rt>ほうそう</rt></ruby>', romaji: 'hōsō', zh: '禮品包裝', en: 'gift wrapping', desc: '買伴手禮時可告知「贈答用」，並詢問包裝與熨斗紙服務。' }
      ]
    },
    {
      title: '伊勢丹新宿店 · Isetan Shinjuku specialties',
      items: [
        { emoji: '🍬', jp: 'グミッツェル', ruby: 'グミッツェル', romaji: 'gumittseru', zh: 'Gumitzel 脆皮軟糖', en: 'Gumitzel crunchy gummies', desc: '〈ヒトツブカンロ〉的招牌軟糖；外層酥脆、內層柔軟，適合常溫攜帶。' },
        { emoji: '🐈', jp: 'ネコのトランプ缶', ruby: 'ネコのトランプ<ruby>缶<rt>かん</rt></ruby>', romaji: 'neko no toranpu kan', zh: '貓咪撲克牌鐵盒巧克力', en: 'cat playing-card chocolate tin', desc: '〈青山デカーボ〉伊勢丹新宿店限定；附貓咪公仔的巧克力禮盒。' },
        { emoji: '🥐', jp: 'ミルフィユ', ruby: 'ミルフィユ', romaji: 'mirufiyu', zh: '千層酥禮盒', en: 'mille-feuille assortment', desc: '〈MILLI MILLI〉伊勢丹新宿店限定；以日式素材搭配精緻派皮的禮盒。' },
        { emoji: '🍯', jp: 'デボンシャーハニーケーキ', ruby: 'デボンシャーハニーケーキ', romaji: 'debonshā hanī kēki', zh: '德文郡蜂蜜蛋糕', en: 'Devonshire honey cake', desc: '〈Mielurire〉伊勢丹新宿店限定；使用蜂蜜製作的濃郁奶油蛋糕。' }
      ]
    },
    {
      title: '日本橋三越本店 · Nihombashi Mitsukoshi specialties',
      items: [
        { emoji: '🍣', jp: '変わり志乃多八種', say: 'かわりしのだはっしゅ', ruby: '<ruby>変<rt>か</rt></ruby>わり<ruby>志乃多<rt>しのだ</rt></ruby><ruby>八種<rt>はっしゅ</rt></ruby>', romaji: 'kawari shinoda hasshu', zh: '八款變化豆皮壽司', en: 'eight assorted inari sushi', desc: '〈人形町志乃多寿司總本店〉日本橋三越限定；一次品嚐八種口味的豆皮壽司。' },
        { emoji: '🍵', jp: '和の茶マカロン', say: 'わのちゃマカロン', ruby: '<ruby>和<rt>わ</rt></ruby>の<ruby>茶<rt>ちゃ</rt></ruby>マカロン', romaji: 'wa no cha makaron', zh: '和茶馬卡龍', en: 'Japanese tea macarons', desc: '〈日本橋 和の茶 伊藤園〉日本橋三越限定；抹茶甘納許帶出微苦茶香。' },
        { emoji: '🫘', jp: 'ふくみ天平', say: 'ふくみてんびん', ruby: 'ふくみ<ruby>天平<rt>てんびん</rt></ruby>', romaji: 'fukumi tenbin', zh: 'Fukumi Tenbin 手作最中', en: 'Fukumi Tenbin make-your-own monaka', desc: '〈たねや〉的經典手作最中；將求肥紅豆餡夾入香脆餅殼後享用。' },
        { emoji: '🍡', jp: '小形羊羹', say: 'こがたようかん', ruby: '<ruby>小形<rt>こがた</rt></ruby><ruby>羊羹<rt>ようかん</rt></ruby>', romaji: 'kogata yōkan', zh: '小形羊羹', en: 'mini yokan', desc: '〈とらや〉的獨立包裝羊羹；適合常溫攜帶與送禮。' }
      ]
    },
    {
      title: '大丸東京店 · Daimaru Tokyo specialties',
      items: [
        { emoji: '🍱', jp: 'シウマイ弁当', ruby: 'シウマイ<ruby>弁当<rt>べんとう</rt></ruby>', romaji: 'shūmai bentō', zh: '燒賣便當', en: 'shumai bento', desc: '〈崎陽軒〉的招牌便當；以經典燒賣為主角，適合搭新幹線時外帶。' },
        { emoji: '🐟', jp: '銀だら西京焼弁当', say: 'ぎんだらさいきょうやきべんとう', ruby: '<ruby>銀<rt>ぎん</rt></ruby>だら<ruby>西京焼<rt>さいきょうやき</rt></ruby><ruby>弁当<rt>べんとう</rt></ruby>', romaji: 'gindara saikyōyaki bentō', zh: '銀鱈西京燒便當', en: 'miso-marinated black cod bento', desc: '〈築地 魚弁 味の浜藤〉的代表魚便當；脂香銀鱈搭配西京味噌風味。' },
        { emoji: '🍤', jp: '天むす', say: 'てんむす', ruby: '<ruby>天<rt>てん</rt></ruby>むす', romaji: 'tenmusu', zh: '天婦羅飯糰', en: 'tempura rice balls', desc: '〈地雷也〉的一口大小蝦天婦羅飯糰，適合當點心或差入。' },
        { emoji: '🥮', jp: '揚最中', say: 'あげもなか', ruby: '<ruby>揚最中<rt>あげもなか</rt></ruby>', romaji: 'age monaka', zh: '炸最中', en: 'fried monaka wafer', desc: '〈駒込 中里〉東京限定的胡麻油炸最中，外層帶鹹香；保存期很短，建議當日確認。' }
      ]
    },
    {
      title: '阪急うめだ本店 · Hankyu Umeda specialties',
      items: [
        { emoji: '🥟', jp: '豚まん', say: 'ぶたまん', ruby: '<ruby>豚<rt>ぶた</rt></ruby>まん', romaji: 'butaman', zh: '551 豬肉包', en: '551 pork bun', desc: '〈551蓬莱〉大阪名物；熱食與攜帶時間可在櫃位確認。' },
        { emoji: '🥔', jp: 'グランカルビー', ruby: 'グランカルビー', romaji: 'guran karubī', zh: 'Grand Calbee 厚切洋芋片', en: 'Grand Calbee premium potato crisps', desc: '阪急梅田地下甜點區的熱門厚切洋芋片品牌，適合作常溫伴手禮。' },
        { emoji: '🍘', jp: 'ハッピーターンズ', ruby: 'ハッピーターンズ', romaji: 'happī tānzu', zh: 'Happy Turns 風味米果', en: 'Happy Turns flavored rice crackers', desc: '阪急梅田常見的人氣米果禮盒，適合分送與常溫攜帶。' },
        { emoji: '🥩', jp: '牛めし', say: 'ぎゅうめし', ruby: '<ruby>牛<rt>ぎゅう</rt></ruby>めし', romaji: 'gyūmeshi', zh: '牛肉飯便當', en: 'beef rice bento', desc: '〈牛めし つの田〉的牛肉飯便當；適合在關西旅程中外帶食用。' }
      ]
    }
  ]
}
