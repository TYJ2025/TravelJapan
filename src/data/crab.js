// かに料理店 — choosing a crab course, cooking style and asking for help at the table.
export const crab = {
  id: 'crab-cuisine',
  title: 'Crab Cuisine',
  titleJp: 'かに料理',
  emoji: '🦀',
  staffAvatar: '🦀',
  staffLabel: '店員 · Staff',
  description: 'Browse Japanese crab brands, species, cuts and cooking styles, then order a crab course with confidence.',
  lines: [
    {
      speaker: 'staff',
      jp: 'いらっしゃいませ。何名様ですか？',
      say: 'いらっしゃいませ。なんめいさまですか？',
      ruby: 'いらっしゃいませ。<ruby>何名様<rt>なんめいさま</rt></ruby>ですか？',
      romaji: 'Irasshaimase. Nanmei-sama desu ka?',
      zh: '歡迎光臨。請問幾位？',
      en: 'Welcome. How many people?'
    },
    {
      speaker: 'you',
      jp: '二人です。',
      say: 'ふたりです。',
      ruby: '<ruby>二人<rt>ふたり</rt></ruby>です。',
      romaji: 'Futari desu.',
      zh: '兩位。',
      en: 'Two people.'
    },
    {
      speaker: 'staff',
      jp: 'こちらへどうぞ。本日のおすすめは、ずわいがにの会席です。',
      say: 'こちらえどうぞ。ほんじつのおすすめわ、ずわいがにのかいせきです。',
      ruby: 'こちらへどうぞ。<ruby>本日<rt>ほんじつ</rt></ruby>のおすすめは、ずわいがにの<ruby>会席<rt>かいせき</rt></ruby>です。',
      romaji: 'Kochira e dōzo. Honjitsu no osusume wa, zuwai-gani no kaiseki desu.',
      zh: '這邊請。今天推薦的是松葉蟹會席料理。',
      en: "This way, please. Today's recommendation is a snow-crab course."
    },
    {
      speaker: 'you',
      jp: '会席には何が入っていますか？',
      say: 'かいせきにわなにがはいっていますか？',
      ruby: '<ruby>会席<rt>かいせき</rt></ruby>には<ruby>何<rt>なに</rt></ruby>が<ruby>入<rt>はい</rt></ruby>っていますか？',
      romaji: 'Kaiseki ni wa nani ga haitte imasu ka?',
      zh: '會席料理裡面有哪些？',
      en: 'What is included in the course?'
    },
    {
      speaker: 'staff',
      jp: 'かに刺し、焼きがに、かに鍋と雑炊が付いています。',
      say: 'かにさし、やきがに、かになべとぞうすいがついています。',
      ruby: 'かに<ruby>刺<rt>さ</rt></ruby>し、<ruby>焼<rt>や</rt></ruby>きがに、かに<ruby>鍋<rt>なべ</rt></ruby>と<ruby>雑炊<rt>ぞうすい</rt></ruby>が<ruby>付<rt>つ</rt></ruby>いています。',
      romaji: 'Kani-sashi, yaki-gani, kani-nabe to zōsui ga tsuite imasu.',
      zh: '包含生蟹、烤蟹、蟹鍋和雜炊。',
      en: 'It includes crab sashimi, grilled crab, crab hot pot and rice porridge.'
    },
    {
      speaker: 'you',
      jp: '生ものは苦手なので、火を通した料理に替えられますか？',
      say: 'なまものわにがてなので、ひをとおしたりょうりにかえられますか？',
      ruby: '<ruby>生<rt>なま</rt></ruby>ものは<ruby>苦手<rt>にがて</rt></ruby>なので、<ruby>火<rt>ひ</rt></ruby>を<ruby>通<rt>とお</rt></ruby>した<ruby>料理<rt>りょうり</rt></ruby>に<ruby>替<rt>か</rt></ruby>えられますか？',
      romaji: 'Namamono wa nigate na node, hi o tōshita ryōri ni kaeraremasu ka?',
      zh: '我不太敢吃生食，可以換成煮熟的料理嗎？',
      en: 'I am not comfortable with raw food. Could it be changed to a cooked dish?'
    },
    {
      speaker: 'staff',
      jp: 'はい、かに刺しを蒸しがにに替えられます。',
      say: 'はい、かにさしをむしがににかえられます。',
      ruby: 'はい、かに<ruby>刺<rt>さ</rt></ruby>しを<ruby>蒸<rt>む</rt></ruby>しがにに<ruby>替<rt>か</rt></ruby>えられます。',
      romaji: 'Hai, kani-sashi o mushi-gani ni kaeraremasu.',
      zh: '可以，能把生蟹換成蒸蟹。',
      en: 'Yes, we can change the crab sashimi to steamed crab.'
    },
    {
      speaker: 'you',
      jp: 'では、その会席を二人分お願いします。',
      say: 'では、そのかいせきをふたりぶんおねがいします。',
      ruby: 'では、その<ruby>会席<rt>かいせき</rt></ruby>を<ruby>二人分<rt>ふたりぶん</rt></ruby>お<ruby>願<rt>ねが</rt></ruby>いします。',
      romaji: 'Dewa, sono kaiseki o futaribun onegai shimasu.',
      zh: '那麼，這份會席料理要兩人份。',
      en: 'Then, two of those courses, please.'
    },
    {
      speaker: 'staff',
      jp: 'かしこまりました。お飲み物はいかがですか？',
      say: 'かしこまりました。おのみものわいかがですか？',
      ruby: 'かしこまりました。お<ruby>飲<rt>の</rt></ruby>み<ruby>物<rt>もの</rt></ruby>はいかがですか？',
      romaji: 'Kashikomarimashita. Onomimono wa ikaga desu ka?',
      zh: '好的。需要飲料嗎？',
      en: 'Certainly. Would you like anything to drink?'
    },
    {
      speaker: 'you',
      jp: '日本酒を二合お願いします。',
      say: 'にほんしゅをにごうおねがいします。',
      ruby: '<ruby>日本酒<rt>にほんしゅ</rt></ruby>を<ruby>二合<rt>にごう</rt></ruby>お<ruby>願<rt>ねが</rt></ruby>いします。',
      romaji: 'Nihonshu o ni-gō onegai shimasu.',
      zh: '麻煩清酒兩合。',
      en: 'Two gō of sake, please.'
    },
    {
      speaker: 'staff',
      jp: 'かしこまりました。かに鍋は火が通ったらお召し上がりください。',
      say: 'かしこまりました。かになべわひがとおったらおめしあがりください。',
      ruby: 'かしこまりました。かに<ruby>鍋<rt>なべ</rt></ruby>は<ruby>火<rt>ひ</rt></ruby>が<ruby>通<rt>とお</rt></ruby>ったらお<ruby>召<rt>め</rt></ruby>し<ruby>上<rt>あ</rt></ruby>がりください。',
      romaji: 'Kashikomarimashita. Kani-nabe wa hi ga tōttara omeshiagari kudasai.',
      zh: '好的。蟹鍋煮熟後請享用。',
      en: 'Certainly. Please enjoy the crab hot pot once it is cooked through.'
    },
    {
      speaker: 'you',
      jp: '殻のむき方を教えてもらえますか？',
      say: 'からのむきかたをおしえてもらえますか？',
      ruby: '<ruby>殻<rt>から</rt></ruby>のむき<ruby>方<rt>かた</rt></ruby>を<ruby>教<rt>おし</rt></ruby>えてもらえますか？',
      romaji: 'Kara no mukikata o oshiete moraemasu ka?',
      zh: '可以教我怎麼剝蟹殼嗎？',
      en: 'Could you show me how to remove the shell?'
    },
    {
      speaker: 'staff',
      jp: 'もちろんです。こちらのはさみをお使いください。',
      say: 'もちろんです。こちらのはさみをおつかいください。',
      ruby: 'もちろんです。こちらのはさみをお<ruby>使<rt>つか</rt></ruby>いください。',
      romaji: 'Mochiron desu. Kochira no hasami o otsukai kudasai.',
      zh: '當然可以。請用這把剪刀。',
      en: 'Of course. Please use these scissors.'
    },
    {
      speaker: 'you',
      jp: 'ありがとうございます。',
      ruby: 'ありがとうございます。',
      romaji: 'Arigatō gozaimasu.',
      zh: '謝謝。',
      en: 'Thank you.'
    }
  ],
  phrases: [
    {
      title: '料理を選ぶ · Choosing crab dishes',
      items: [
        { jp: 'おすすめのかに料理は何ですか？', say: 'おすすめのかにりょうりわなんですか？', ruby: 'おすすめのかに<ruby>料理<rt>りょうり</rt></ruby>は<ruby>何<rt>なん</rt></ruby>ですか？', zh: '推薦的螃蟹料理是什麼？', en: 'What crab dish do you recommend?' },
        { jp: '焼きがにをお願いします。', say: 'やきがにをおねがいします。', ruby: '<ruby>焼<rt>や</rt></ruby>きがにをお<ruby>願<rt>ねが</rt></ruby>いします。', zh: '麻煩來烤蟹。', en: 'Grilled crab, please.' },
        { jp: 'かに鍋を二人前お願いします。', say: 'かになべをふたりまえおねがいします。', ruby: 'かに<ruby>鍋<rt>なべ</rt></ruby>を<ruby>二人前<rt>ふたりまえ</rt></ruby>お<ruby>願<rt>ねが</rt></ruby>いします。', zh: '麻煩蟹鍋兩人份。', en: 'Crab hot pot for two, please.' },
        { jp: '生ものは苦手です。', say: 'なまものわにがてです。', ruby: '<ruby>生<rt>なま</rt></ruby>ものは<ruby>苦手<rt>にがて</rt></ruby>です。', zh: '我不太敢吃生食。', en: 'I am not comfortable with raw food.' }
      ]
    },
    {
      title: '食べるとき · At the table',
      items: [
        { jp: 'これはどうやって食べますか？', say: 'これわどうやってたべますか？', ruby: 'これはどうやって<ruby>食<rt>た</rt></ruby>べますか？', zh: '這個要怎麼吃？', en: 'How do I eat this?' },
        { jp: '殻のむき方を教えてください。', say: 'からのむきかたをおしえてください。', ruby: '<ruby>殻<rt>から</rt></ruby>のむき<ruby>方<rt>かた</rt></ruby>を<ruby>教<rt>おし</rt></ruby>えてください。', zh: '請教我怎麼剝蟹殼。', en: 'Please show me how to remove the shell.' },
        { jp: '雑炊をお願いします。', say: 'ぞうすいをおねがいします。', ruby: '<ruby>雑炊<rt>ぞうすい</rt></ruby>をお<ruby>願<rt>ねが</rt></ruby>いします。', zh: '麻煩來雜炊。', en: 'Rice porridge, please.' },
        { jp: '取り皿をもう一枚ください。', say: 'とりざらをもういちまいください。', ruby: '<ruby>取<rt>と</rt></ruby>り<ruby>皿<rt>ざら</rt></ruby>をもう<ruby>一枚<rt>いちまい</rt></ruby>ください。', zh: '請再給我一個分食盤。', en: 'One more small plate, please.' }
      ]
    },
    {
      title: '産地・量を聞く · Asking about origin and portion size',
      items: [
        { jp: '今日のかには、どこの産地ですか？', say: 'きょうのかにわ、どこのさんちですか？', ruby: '<ruby>今日<rt>きょう</rt></ruby>のかには、どこの<ruby>産地<rt>さんち</rt></ruby>ですか？', zh: '今天的螃蟹是哪個產地？', en: 'Where is today’s crab from?' },
        { jp: 'タグ付きのかにはありますか？', say: 'タグつきのかにわありますか？', ruby: 'タグ<ruby>付<rt>つ</rt></ruby>きのかにはありますか？', zh: '有附產地標籤的螃蟹嗎？', en: 'Do you have tagged, branded crab?' },
        { jp: '二人で一杯だと、足りますか？', say: 'ふたりでいっぱいだと、たりますか？', ruby: '<ruby>二人<rt>ふたり</rt></ruby>で<ruby>一杯<rt>いっぱい</rt></ruby>だと、<ruby>足<rt>た</rt></ruby>りますか？', zh: '兩個人吃一整隻夠嗎？', en: 'Would one whole crab be enough for two people?' },
        { jp: '一人前はどのくらいの量ですか？', say: 'ひとりまえわどのくらいのりょうですか？', ruby: '<ruby>一人前<rt>ひとりまえ</rt></ruby>はどのくらいの<ruby>量<rt>りょう</rt></ruby>ですか？', zh: '一人份大約有多少？', en: 'How large is one serving?' }
      ]
    },
    {
      title: '状態・部位を選ぶ · Choosing condition and cut',
      items: [
        { jp: '活がにですか、それともボイルですか？', say: 'かつがにですか、それともボイルですか？', ruby: '<ruby>活<rt>かつ</rt></ruby>がにですか、それともボイルですか？', zh: '是活蟹，還是已經水煮的？', en: 'Is it live crab or already boiled?' },
        { jp: '脚の身が多いものをお願いします。', say: 'あしのみがおおいものをおねがいします。', ruby: '<ruby>脚<rt>あし</rt></ruby>の<ruby>身<rt>み</rt></ruby>が<ruby>多<rt>おお</rt></ruby>いものをお<ruby>願<rt>ねが</rt></ruby>いします。', zh: '想要蟹腳肉多的。', en: 'I would like one with plenty of leg meat.' },
        { jp: 'かに味噌と内子も食べたいです。', say: 'かにみそとうちこもたべたいです。', ruby: 'かに<ruby>味噌<rt>みそ</rt></ruby>と<ruby>内子<rt>うちこ</rt></ruby>も<ruby>食<rt>た</rt></ruby>べたいです。', zh: '我也想吃蟹膏和內子。', en: 'I would also like crab tomalley and inner roe.' },
        { jp: '甲殻類にアレルギーがあります。だしにも入っていますか？', say: 'こうかくるいにアレルギーがあります。だしにもはいっていますか？', ruby: '<ruby>甲殻類<rt>こうかくるい</rt></ruby>にアレルギーがあります。だしにも<ruby>入<rt>はい</rt></ruby>っていますか？', zh: '我對甲殼類過敏，高湯裡也有嗎？', en: 'I am allergic to crustaceans. Is it also in the broth?' }
      ]
    }
  ],
  menu: [
    {
      title: 'ブランドずわいがに · Regional snow-crab brands',
      items: [
        { emoji: '🦀', jp: 'ずわいがに', ruby: 'ずわいがに', romaji: 'zuwai-gani', zh: '雪蟹／楚蟹', en: 'snow crab', desc: '日本冬季最具代表性的食用蟹，肉質細緻、甜味清雅；各產地會以不同品牌名販售。' },
        { emoji: '🏷️', jp: '越前がに', say: 'えちぜんがに', ruby: '<ruby>越前<rt>えちぜん</rt></ruby>がに', romaji: 'echizen-gani', zh: '越前蟹（福井）', en: 'Echizen snow crab', desc: '福井縣越前町等港口水揚げ的雄性ズワイガニ，為知名高級品牌蟹。' },
        { emoji: '👑', jp: '越前がに「極」', say: 'えちぜんがに きわみ', ruby: '<ruby>越前<rt>えちぜん</rt></ruby>がに「<ruby>極<rt>きわみ</rt></ruby>」', romaji: 'echizen-gani kiwami', zh: '越前蟹「極」（福井頂級）', en: 'Echizen crab Kiwami', desc: '越前蟹中通過重量、甲殼寬度與蟹螯等嚴格標準的最頂級認定品；通常是高價單點。' },
        { emoji: '🏷️', jp: '松葉がに', say: 'まつばがに', ruby: '<ruby>松葉<rt>まつば</rt></ruby>がに', romaji: 'matsuba-gani', zh: '松葉蟹（山陰）', en: 'Matsuba snow crab', desc: '鳥取、島根等山陰地區水揚げ的雄性ズワイガニ，蟹肉飽滿、甜味高雅。' },
        { emoji: '🏷️', jp: '加能ガニ', say: 'かのうがに', ruby: '<ruby>加能<rt>かのう</rt></ruby>ガニ', romaji: 'kanō-gani', zh: '加能蟹（石川）', en: 'Kanō snow crab', desc: '石川縣水揚げ的雄性ズワイガニ品牌，常可在金澤等地的冬季菜單看到。' },
        { emoji: '👑', jp: '加能ガニ「輝」', say: 'かのうがに かがやき', ruby: '<ruby>加能<rt>かのう</rt></ruby>ガニ「<ruby>輝<rt>かがやき</rt></ruby>」', romaji: 'kanō-gani kagayaki', zh: '加能蟹「輝」（石川頂級）', en: 'Kanō crab Kagayaki', desc: '符合石川縣重量與外觀等高標準的加能蟹頂級品牌；常見於特別套餐或預約料理。' },
        { emoji: '🏷️', jp: '間人ガニ', say: 'たいざがに', ruby: '<ruby>間人<rt>たいざ</rt></ruby>ガニ', romaji: 'taiza-gani', zh: '間人蟹（京都丹後）', en: 'Taiza snow crab', desc: '京都丹後半島間人港水揚げ的松葉蟹品牌，產量少、屬高級選擇。' },
        { emoji: '🏷️', jp: '柴山がに', say: 'しばやまがに', ruby: '<ruby>柴山<rt>しばやま</rt></ruby>がに', romaji: 'shibayama-gani', zh: '柴山蟹（兵庫）', en: 'Shibayama snow crab', desc: '兵庫縣柴山港水揚げ的松葉蟹品牌；旅館與料理店常依重量、形狀與肉質分級。' },
        { emoji: '🏷️', jp: '津居山がに', say: 'ついやまがに', ruby: '<ruby>津居山<rt>ついやま</rt></ruby>がに', romaji: 'tsuiyama-gani', zh: '津居山蟹（兵庫豐岡）', en: 'Tsuiyama snow crab', desc: '兵庫縣津居山港水揚げ的松葉蟹；在城崎溫泉一帶的冬季菜單特別常見。' },
        { emoji: '🏷️', jp: '舞鶴かに', say: 'まいづるかに', ruby: '<ruby>舞鶴<rt>まいづる</rt></ruby>かに', romaji: 'maizuru-gani', zh: '舞鶴蟹（京都）', en: 'Maizuru snow crab', desc: '京都府舞鶴港水揚げ的雄性ズワイガニ品牌；常見於京都北部的冬季料理。' },
        { emoji: '🫧', jp: '水がに', say: 'みずがに', ruby: '<ruby>水<rt>みず</rt></ruby>がに', romaji: 'mizu-gani', zh: '水蟹／脫殼雪蟹', en: 'soft-shell snow crab', desc: '剛脫殼不久、殼較軟的雄性ズワイガニ。肉質清爽水潤，通常比硬殼蟹容易入手。' }
      ]
    },
    {
      title: '雌がに・紅ずわい · Female and red snow crab',
      items: [
        { emoji: '🦀', jp: 'セコガニ', ruby: 'セコガニ', romaji: 'seko-gani', zh: '雌雪蟹（セコ蟹）', en: 'female snow crab', desc: '山陰一帶對雌性ズワイガニ的常見稱呼，體型較小但外子與內子風味濃郁。' },
        { emoji: '🦀', jp: '香箱ガニ', say: 'こうばこがに', ruby: '<ruby>香箱<rt>こうばこ</rt></ruby>ガニ', romaji: 'kōbako-gani', zh: '香箱蟹（石川雌雪蟹）', en: 'Kōbako crab', desc: '石川縣對雌性ズワイガニ的稱呼，常見卵與蟹膏，是金澤冬季限定的熱門食材。' },
        { emoji: '🦀', jp: 'コッペガニ', ruby: 'コッペガニ', romaji: 'koppe-gani', zh: '雌雪蟹（兵庫／京都丹後稱呼）', en: 'female snow crab', desc: '兵庫與京都丹後一帶對雌性ズワイガニ的常用名稱；重點在內子、外子與蟹膏。' },
        { emoji: '🦀', jp: '親がに', say: 'おやがに', ruby: '<ruby>親<rt>おや</rt></ruby>がに', romaji: 'oya-gani', zh: '雌雪蟹（別稱）', en: 'female snow crab', desc: '雌性ズワイガニ的地方別稱之一；菜單看見不同名稱時，可向店家確認是否為雌雪蟹。' },
        { emoji: '🟠', jp: '内子', say: 'うちこ', ruby: '<ruby>内子<rt>うちこ</rt></ruby>', romaji: 'uchiko', zh: '內子／未成熟卵巢', en: 'inner roe', desc: '雌雪蟹甲殼內的橘紅色未成熟卵巢，口感濃郁綿密。' },
        { emoji: '🟤', jp: '外子', say: 'そとこ', ruby: '<ruby>外子<rt>そとこ</rt></ruby>', romaji: 'sotoko', zh: '外子／腹部蟹卵', en: 'outer roe', desc: '附著在雌雪蟹腹部的卵，顆粒感明顯，常與內子、蟹肉一起享用。' },
        { emoji: '🦀', jp: 'ベニズワイガニ', say: 'べにずわいがに', ruby: 'ベニズワイガニ', romaji: 'beni-zuwai-gani', zh: '紅雪蟹', en: 'red snow crab', desc: '深海蟹種，蟹肉含水量較高、甜味明顯；常用於蟹肉可樂餅、焗烤等料理。' },
        { emoji: '🦀', jp: 'オオズワイガニ', say: 'おおずわいがに', ruby: '<ruby>大<rt>おお</rt></ruby>ズワイガニ', romaji: 'ō-zuwai-gani', zh: '大雪蟹', en: 'bairdi crab', desc: '與ズワイガニ近似的蟹種，肉量較多；在北海道等地的鮮魚店或菜單也可能看見。' }
      ]
    },
    {
      title: '北海道・地方のかに · Hokkaido and regional crabs',
      items: [
        { emoji: '🦀', jp: 'タラバガニ', ruby: 'タラバガニ', romaji: 'taraba-gani', zh: '帝王蟹', en: 'king crab', desc: '蟹腳粗大、肉質飽滿有彈性，適合烤或水煮；在分類上與寄居蟹較接近。' },
        { emoji: '🦀', jp: 'アブラガニ', say: 'あぶらがに', ruby: 'アブラガニ', romaji: 'abura-gani', zh: '油蟹', en: 'blue king crab', desc: '外觀與口感接近帝王蟹的北方蟹種。點餐或購買時可確認品種與產地。' },
        { emoji: '🦀', jp: '毛ガニ', say: 'けがに', ruby: '<ruby>毛<rt>け</rt></ruby>ガニ', romaji: 'ke-gani', zh: '毛蟹', en: 'horsehair crab', desc: '北海道代表蟹種，蟹肉細嫩，蟹膏濃郁鮮甜，常整隻水煮供應。' },
        { emoji: '🦀', jp: '花咲ガニ', say: 'はなさきがに', ruby: '<ruby>花咲<rt>はなさき</rt></ruby>ガニ', romaji: 'hanasaki-gani', zh: '花咲蟹', en: 'hanasaki crab', desc: '北海道根室周邊特色蟹種，風味濃厚，肉質緊實且帶鮮明海味。' },
        { emoji: '🦀', jp: 'クリガニ', say: 'くりがに', ruby: '<ruby>栗<rt>くり</rt></ruby>ガニ', romaji: 'kuri-gani', zh: '栗蟹', en: 'helmet crab', desc: '北日本春季常見的蟹種，蟹膏風味濃，常以水煮或味噌湯供應。' },
        { emoji: '🦀', jp: 'ワタリガニ', ruby: 'ワタリガニ', romaji: 'watari-gani', zh: '梭子蟹／渡蟹', en: 'swimming crab', desc: '日本也常稱ガザミ，適合做味噌湯、義大利麵或蒸煮，抱卵期前後特別受歡迎。' },
        { emoji: '🦀', jp: 'ガザミ', ruby: 'ガザミ', romaji: 'gazami', zh: '日本梭子蟹', en: 'gazami swimming crab', desc: 'ワタリガニ類中常在日本菜單標示的名稱；常用於蒸煮、清湯或義大利麵。' },
        { emoji: '🕷️', jp: 'タカアシガニ', say: 'たかあしがに', ruby: 'タカアシガニ', romaji: 'takaashi-gani', zh: '高腳蟹', en: 'Japanese spider crab', desc: '駿河灣、伊豆一帶可見的大型蟹種，腳長醒目，常以水煮或燒烤呈現。' }
      ]
    },
    {
      title: '姿・部位・状態 · Whole crab, cuts and condition',
      items: [
        { emoji: '🦀', jp: '活がに', say: 'かつがに', ruby: '<ruby>活<rt>かつ</rt></ruby>がに', romaji: 'katsu-gani', zh: '活蟹', en: 'live crab', desc: '仍存活的螃蟹，通常現點現煮或現處理；價格與供應依當日漁獲而異。' },
        { emoji: '❄️', jp: '生がに', say: 'なまがに', ruby: '<ruby>生<rt>なま</rt></ruby>がに', romaji: 'nama-gani', zh: '生蟹／未烹調蟹', en: 'raw uncooked crab', desc: '指未烹調的蟹，不必然代表可生食；可確認標示是「生食用」還是「加熱用」。' },
        { emoji: '♨️', jp: '浜茹でがに', say: 'はまゆでがに', ruby: '<ruby>浜茹<rt>はまゆ</rt></ruby>でがに', romaji: 'hamayude-gani', zh: '港口現煮蟹', en: 'harbor-boiled crab', desc: '在漁港或產地煮好的螃蟹，適合直接品嘗原味；冷食前可問是否需要回溫。' },
        { emoji: '🧊', jp: '冷凍がに', say: 'れいとうがに', ruby: '<ruby>冷凍<rt>れいとう</rt></ruby>がに', romaji: 'reitō-gani', zh: '冷凍蟹', en: 'frozen crab', desc: '非產季也常見的供應形式；可詢問是否已解凍、是否適合刺身或需加熱。' },
        { emoji: '🦀', jp: '姿がに', say: 'すがたがに', ruby: '<ruby>姿<rt>すがた</rt></ruby>がに', romaji: 'sugata-gani', zh: '整隻螃蟹', en: 'whole crab', desc: '整隻供應，能吃到蟹腳、蟹身與蟹膏；菜單也會標示「一杯」。' },
        { emoji: '🦵', jp: 'かに脚', say: 'かにあし', ruby: 'かに<ruby>脚<rt>あし</rt></ruby>', romaji: 'kani-ashi', zh: '蟹腳', en: 'crab legs', desc: '肉量最多、最常單點的部位。烤蟹、涮蟹與水煮蟹腳皆常見。' },
        { emoji: '🦞', jp: 'かに爪', say: 'かにつめ', ruby: 'かに<ruby>爪<rt>つめ</rt></ruby>', romaji: 'kani-tsume', zh: '蟹螯／蟹鉗', en: 'crab claws', desc: '肉質紮實、甜味集中。常做成天婦羅、炸物或水煮拼盤。' },
        { emoji: '🦀', jp: '肩肉', say: 'かたにく', ruby: '<ruby>肩肉<rt>かたにく</rt></ruby>', romaji: 'kata-niku', zh: '肩肉／蟹身', en: 'shoulder meat', desc: '連接蟹腳的身體部位，鮮味濃但需較費工取肉，適合鍋物或拌飯。' },
        { emoji: '🍥', jp: 'むき身', say: 'むきみ', ruby: 'むき<ruby>身<rt>み</rt></ruby>', romaji: 'muki-mi', zh: '去殼蟹肉', en: 'shelled crab meat', desc: '已去殼、可直接吃的蟹肉，適合不想剝殼或與同行者分享時點用。' },
        { emoji: '🍥', jp: '棒肉', say: 'ぼうにく', ruby: '<ruby>棒肉<rt>ぼうにく</rt></ruby>', romaji: 'bō-niku', zh: '整條蟹腳肉', en: 'whole leg meat', desc: '完整取出的蟹腳肉，常見於壽司、沙拉、涮鍋或高級拼盤。' },
        { emoji: '🛡️', jp: '甲羅盛り', say: 'こうらもり', ruby: '<ruby>甲羅盛<rt>こうらも</rt></ruby>り', romaji: 'kōra-mori', zh: '蟹殼盛盤', en: 'crab-shell presentation', desc: '將蟹肉、蟹膏或蟹卵盛回甲殼中，方便享用也適合作為下酒菜。' },
        { emoji: '➗', jp: '半身', say: 'はんみ', ruby: '<ruby>半身<rt>はんみ</rt></ruby>', romaji: 'hanmi', zh: '半隻／半身蟹', en: 'half crab', desc: '整隻螃蟹的一半，適合一人或作為多道菜中的一品。' }
      ]
    },
    {
      title: '定番のかに料理 · Classic crab dishes',
      items: [
        { emoji: '🦀', jp: 'かに刺し', say: 'かにさし', ruby: 'かに<ruby>刺<rt>さ</rt></ruby>し', romaji: 'kani-sashi', zh: '生蟹肉', en: 'raw crab sashimi', desc: '新鮮蟹肉生食，口感柔滑、甜味明顯；介意生食可改熟食。' },
        { emoji: '♨️', jp: '茹でがに', say: 'ゆでがに', ruby: '<ruby>茹<rt>ゆ</rt></ruby>でがに', romaji: 'yude-gani', zh: '水煮螃蟹', en: 'boiled crab', desc: '最能品嘗蟹肉原味的做法，通常直接搭配醋或蟹醋。' },
        { emoji: '🔥', jp: '焼きがに', say: 'やきがに', ruby: '<ruby>焼<rt>や</rt></ruby>きがに', romaji: 'yaki-gani', zh: '烤蟹', en: 'grilled crab', desc: '炭火或烤網加熱，蟹肉香氣更濃、甜味更集中。' },
        { emoji: '♨️', jp: '蒸しがに', say: 'むしがに', ruby: '<ruby>蒸<rt>む</rt></ruby>しがに', romaji: 'mushi-gani', zh: '蒸蟹', en: 'steamed crab', desc: '以蒸氣保留水分與鮮甜，肉質柔嫩、味道較清爽。' },
        { emoji: '🥘', jp: 'かにしゃぶ', ruby: 'かにしゃぶ', romaji: 'kani-shabu', zh: '蟹肉涮涮鍋', en: 'crab shabu-shabu', desc: '將薄蟹肉在高湯中快速涮熟，口感細緻、最適合共享。' },
        { emoji: '🍲', jp: 'かに鍋', say: 'かになべ', ruby: 'かに<ruby>鍋<rt>なべ</rt></ruby>', romaji: 'kani-nabe', zh: '蟹鍋', en: 'crab hot pot', desc: '以蟹、高湯與蔬菜同煮，最後常用湯底做雜炊。' },
        { emoji: '🍲', jp: 'かにすき', ruby: 'かにすき', romaji: 'kani-suki', zh: '關西風蟹壽喜鍋', en: 'Kansai-style crab hot pot', desc: '以昆布、醬油等風味高湯煮蟹與蔬菜的關西常見鍋物；味道通常比清湯鍋更濃。' },
        { emoji: '🍲', jp: 'かにちり', ruby: 'かにちり', romaji: 'kani-chiri', zh: '蟹肉清湯鍋', en: 'crab chiri hot pot', desc: '以清淡昆布高湯煮蟹與蔬菜，吃時蘸柑橘醋；能凸顯蟹本身的甜味。' },
        { emoji: '🔥', jp: 'かにバター焼き', say: 'かにバターやき', ruby: 'かにバター<ruby>焼<rt>や</rt></ruby>き', romaji: 'kani batā-yaki', zh: '奶油煎蟹', en: 'butter-grilled crab', desc: '以奶油煎烤蟹肉或蟹腳，香氣濃郁，適合不吃生食的人。' },
        { emoji: '🍤', jp: 'かに天ぷら', say: 'かにてんぷら', ruby: 'かに<ruby>天<rt>てん</rt></ruby>ぷら', romaji: 'kani tenpura', zh: '蟹肉天婦羅', en: 'crab tempura', desc: '蟹腳或蟹肉裹薄麵衣油炸，外脆內甜，常搭配天婦羅醬或鹽。' },
        { emoji: '🍗', jp: 'かに唐揚げ', say: 'かにからあげ', ruby: 'かに<ruby>唐揚<rt>からあ</rt></ruby>げ', romaji: 'kani karaage', zh: '炸蟹', en: 'fried crab', desc: '常以軟殼蟹、小型蟹或蟹螯製作；外殼酥脆、適合下酒。' },
        { emoji: '🍽️', jp: 'かにフライ', ruby: 'かにフライ', romaji: 'kani furai', zh: '炸蟹排', en: 'breaded fried crab', desc: '蟹肉裹麵包粉油炸，常搭配塔塔醬；和蟹肉奶油可樂餅不同，口感較有纖維感。' }
      ]
    },
    {
      title: '一品・しめ · Sides and finishers',
      items: [
        { emoji: '🟤', jp: 'かに味噌', say: 'かにみそ', ruby: 'かに<ruby>味噌<rt>みそ</rt></ruby>', romaji: 'kani-miso', zh: '蟹膏', en: 'crab tomalley', desc: '蟹的內臟醬，味道濃郁鮮香，適合配清酒或拌飯。' },
        { emoji: '🔥', jp: 'かに甲羅焼き', say: 'かにこうらやき', ruby: 'かに<ruby>甲羅焼<rt>こうらや</rt></ruby>き', romaji: 'kani kōra-yaki', zh: '烤蟹殼', en: 'grilled crab shell', desc: '將蟹膏、蟹肉等放在蟹殼上烤，香氣濃厚。' },
        { emoji: '🍶', jp: '甲羅酒', say: 'こうらざけ', ruby: '<ruby>甲羅酒<rt>こうらざけ</rt></ruby>', romaji: 'kōra-zake', zh: '蟹殼清酒', en: 'crab-shell sake', desc: '在烤過的蟹殼中倒入熱清酒，帶有濃厚蟹膏香氣；僅限飲酒者點用。' },
        { emoji: '🥟', jp: 'かにクリームコロッケ', ruby: 'かにクリームコロッケ', romaji: 'kani kurīmu korokke', zh: '蟹肉奶油可樂餅', en: 'crab cream croquette', desc: '外酥內滑的奶油蟹肉餡，適合不吃生食或帶小孩時點用。' },
        { emoji: '🧀', jp: 'かにグラタン', ruby: 'かにグラタン', romaji: 'kani guratan', zh: '蟹肉焗烤', en: 'crab gratin', desc: '蟹肉配白醬與起司焗烤，口感溫和濃郁；常見於洋食與居酒屋菜單。' },
        { emoji: '🥚', jp: 'かに玉', say: 'かにたま', ruby: 'かに<ruby>玉<rt>たま</rt></ruby>', romaji: 'kani-tama', zh: '蟹肉滑蛋', en: 'crab omelet', desc: '蟹肉與蛋做成的中華風料理，常淋甜酸芡汁；菜單也可能寫作「天津かに玉」。' },
        { emoji: '🥟', jp: 'かに焼売', say: 'かにしゅうまい', ruby: 'かに<ruby>焼売<rt>しゅうまい</rt></ruby>', romaji: 'kani shūmai', zh: '蟹肉燒賣', en: 'crab shumai', desc: '包入蟹肉或蟹風味餡的蒸點，常是居酒屋、小菜或伴手禮品項。' },
        { emoji: '🥚', jp: 'かに茶碗蒸し', say: 'かにちゃわんむし', ruby: 'かに<ruby>茶碗蒸<rt>ちゃわんむ</rt></ruby>し', romaji: 'kani chawan-mushi', zh: '蟹肉茶碗蒸', en: 'crab egg custard', desc: '蒸蛋加入蟹肉與高湯，口感柔滑，常作為會席料理中的一道。' },
        { emoji: '🍚', jp: 'かに雑炊', say: 'かにぞうすい', ruby: 'かに<ruby>雑炊<rt>ぞうすい</rt></ruby>', romaji: 'kani zōsui', zh: '蟹雜炊', en: 'crab rice porridge', desc: '用蟹鍋高湯加入白飯與蛋煮成，是鍋物最經典的收尾。' },
        { emoji: '🍚', jp: 'かに飯', say: 'かにめし', ruby: 'かに<ruby>飯<rt>めし</rt></ruby>', romaji: 'kani-meshi', zh: '蟹肉飯', en: 'crab rice', desc: '以蟹肉鋪在白飯或調味飯上；車站便當、食堂與餐廳皆可能看見。' },
        { emoji: '🍚', jp: 'かに釜飯', say: 'かにかまめし', ruby: 'かに<ruby>釜飯<rt>かまめし</rt></ruby>', romaji: 'kani kamameshi', zh: '蟹肉釜飯', en: 'crab pot rice', desc: '蟹肉與高湯在小鍋中炊煮，米飯吸收蟹的鮮味。' },
        { emoji: '🍙', jp: 'かに炊き込みご飯', say: 'かにたきこみごはん', ruby: 'かに<ruby>炊<rt>た</rt></ruby>き<ruby>込<rt>こ</rt></ruby>みご<ruby>飯<rt>はん</rt></ruby>', romaji: 'kani takikomi-gohan', zh: '蟹肉炊飯', en: 'crab mixed rice', desc: '蟹肉與高湯、調味料一起炊煮的米飯，風味均勻、適合分享。' },
        { emoji: '🍣', jp: 'かに寿司', say: 'かにずし', ruby: 'かに<ruby>寿司<rt>ずし</rt></ruby>', romaji: 'kani-zushi', zh: '蟹肉壽司', en: 'crab sushi', desc: '以蟹腳肉、蟹身或蟹肉鬆製作的壽司；可確認是本蟹肉或蟹風味食材。' },
        { emoji: '🍣', jp: 'かに押し寿司', say: 'かにおしずし', ruby: 'かに<ruby>押<rt>お</rt></ruby>し<ruby>寿司<rt>ずし</rt></ruby>', romaji: 'kani oshi-zushi', zh: '蟹肉押壽司', en: 'pressed crab sushi', desc: '將蟹肉與醋飯壓製成型的地方風壽司，適合外帶或作為收尾。' },
        { emoji: '🍲', jp: 'かに汁', say: 'かにじる', ruby: 'かに<ruby>汁<rt>じる</rt></ruby>', romaji: 'kani-jiru', zh: '蟹湯／蟹味噌湯', en: 'crab soup', desc: '用蟹殼、蟹身與味噌或清湯熬成的湯品；地方市場與食堂常見。' },
        { emoji: '🥢', jp: 'かに面', say: 'かにめん', ruby: 'かに<ruby>面<rt>めん</rt></ruby>', romaji: 'kani-men', zh: '蟹面（石川地方料理）', en: 'Kani-men crab-shell dish', desc: '石川金澤常見的冬季料理：將雌蟹肉、內子與外子盛在甲殼中，再以高湯烹煮。' },
        { emoji: '🍱', jp: 'かに会席', say: 'かにかいせき', ruby: 'かに<ruby>会席<rt>かいせき</rt></ruby>', romaji: 'kani kaiseki', zh: '螃蟹會席套餐', en: 'crab kaiseki course', desc: '包含多種蟹料理的套餐，常有刺身、烤蟹、蟹鍋與雜炊。' },
        { emoji: '🦀', jp: 'かに尽くしコース', say: 'かにづくしコース', ruby: 'かに<ruby>尽<rt>づ</rt></ruby>くしコース', romaji: 'kani-zukushi kōsu', zh: '全蟹料理套餐', en: 'all-crab course', desc: '以不同蟹種與烹調法組成的全蟹套餐，適合首次體驗蟹料理。' }
      ]
    }
  ]
}
