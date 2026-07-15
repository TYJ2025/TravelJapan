// かに料理店 — choosing a crab course, cooking style and asking for help at the table.
export const crab = {
  id: 'crab-cuisine',
  title: 'Crab Cuisine',
  titleJp: 'かに料理',
  emoji: '🦀',
  staffAvatar: '🦀',
  staffLabel: '店員 · Staff',
  description: 'Choose a crab course, grilled crab or hot pot, and enjoy the meal with confidence.',
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
    }
  ],
  menu: [
    {
      title: 'ブランドずわいがに · Regional snow-crab brands',
      items: [
        { emoji: '🦀', jp: 'ずわいがに', ruby: 'ずわいがに', romaji: 'zuwai-gani', zh: '雪蟹／楚蟹', en: 'snow crab', desc: '日本冬季最具代表性的食用蟹，肉質細緻、甜味清雅；各產地會以不同品牌名販售。' },
        { emoji: '🏷️', jp: '越前がに', say: 'えちぜんがに', ruby: '<ruby>越前<rt>えちぜん</rt></ruby>がに', romaji: 'echizen-gani', zh: '越前蟹（福井）', en: 'Echizen snow crab', desc: '福井縣越前町等港口水揚げ的雄性ズワイガニ，為知名高級品牌蟹。' },
        { emoji: '🏷️', jp: '松葉がに', say: 'まつばがに', ruby: '<ruby>松葉<rt>まつば</rt></ruby>がに', romaji: 'matsuba-gani', zh: '松葉蟹（山陰）', en: 'Matsuba snow crab', desc: '鳥取、島根等山陰地區水揚げ的雄性ズワイガニ，蟹肉飽滿、甜味高雅。' },
        { emoji: '🏷️', jp: '加能ガニ', say: 'かのうがに', ruby: '<ruby>加能<rt>かのう</rt></ruby>ガニ', romaji: 'kanō-gani', zh: '加能蟹（石川）', en: 'Kanō snow crab', desc: '石川縣水揚げ的雄性ズワイガニ品牌，常可在金澤等地的冬季菜單看到。' },
        { emoji: '🏷️', jp: '間人ガニ', say: 'たいざがに', ruby: '<ruby>間人<rt>たいざ</rt></ruby>ガニ', romaji: 'taiza-gani', zh: '間人蟹（京都丹後）', en: 'Taiza snow crab', desc: '京都丹後半島間人港水揚げ的松葉蟹品牌，產量少、屬高級選擇。' }
      ]
    },
    {
      title: '雌がに・紅ずわい · Female and red snow crab',
      items: [
        { emoji: '🦀', jp: 'セコガニ', ruby: 'セコガニ', romaji: 'seko-gani', zh: '雌雪蟹（セコ蟹）', en: 'female snow crab', desc: '山陰一帶對雌性ズワイガニ的常見稱呼，體型較小但外子與內子風味濃郁。' },
        { emoji: '🦀', jp: '香箱ガニ', say: 'こうばこがに', ruby: '<ruby>香箱<rt>こうばこ</rt></ruby>ガニ', romaji: 'kōbako-gani', zh: '香箱蟹（石川雌雪蟹）', en: 'Kōbako crab', desc: '石川縣對雌性ズワイガニ的稱呼，常見卵與蟹膏，是金澤冬季限定的熱門食材。' },
        { emoji: '🦀', jp: 'ベニズワイガニ', say: 'べにずわいがに', ruby: 'ベニズワイガニ', romaji: 'beni-zuwai-gani', zh: '紅雪蟹', en: 'red snow crab', desc: '深海蟹種，蟹肉含水量較高、甜味明顯，常作為較容易入手的蟹料理選擇。' }
      ]
    },
    {
      title: '北海道・地方のかに · Hokkaido and regional crabs',
      items: [
        { emoji: '🦀', jp: 'タラバガニ', ruby: 'タラバガニ', romaji: 'taraba-gani', zh: '帝王蟹', en: 'king crab', desc: '蟹腳粗大、肉質飽滿有彈性，適合烤或水煮；在分類上與寄居蟹較接近。' },
        { emoji: '🦀', jp: '毛ガニ', say: 'けがに', ruby: '<ruby>毛<rt>け</rt></ruby>ガニ', romaji: 'ke-gani', zh: '毛蟹', en: 'horsehair crab', desc: '北海道代表蟹種，蟹肉細嫩，蟹膏濃郁鮮甜，常整隻水煮供應。' },
        { emoji: '🦀', jp: '花咲ガニ', say: 'はなさきがに', ruby: '<ruby>花咲<rt>はなさき</rt></ruby>ガニ', romaji: 'hanasaki-gani', zh: '花咲蟹', en: 'hanasaki crab', desc: '北海道根室周邊特色蟹種，風味濃厚，肉質緊實且帶鮮明海味。' },
        { emoji: '🦀', jp: 'ワタリガニ', ruby: 'ワタリガニ', romaji: 'watari-gani', zh: '梭子蟹／渡蟹', en: 'swimming crab', desc: '日本也常稱ガザミ，適合做味噌湯、義大利麵或蒸煮，抱卵期前後特別受歡迎。' },
        { emoji: '🕷️', jp: 'タカアシガニ', say: 'たかあしがに', ruby: 'タカアシガニ', romaji: 'takaashi-gani', zh: '高腳蟹', en: 'Japanese spider crab', desc: '駿河灣、伊豆一帶可見的大型蟹種，腳長醒目，常以水煮或燒烤呈現。' }
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
        { emoji: '🍲', jp: 'かに鍋', say: 'かになべ', ruby: 'かに<ruby>鍋<rt>なべ</rt></ruby>', romaji: 'kani-nabe', zh: '蟹鍋', en: 'crab hot pot', desc: '以蟹、高湯與蔬菜同煮，最後常用湯底做雜炊。' }
      ]
    },
    {
      title: '一品・しめ · Sides and finishers',
      items: [
        { emoji: '🟤', jp: 'かに味噌', say: 'かにみそ', ruby: 'かに<ruby>味噌<rt>みそ</rt></ruby>', romaji: 'kani-miso', zh: '蟹膏', en: 'crab tomalley', desc: '蟹的內臟醬，味道濃郁鮮香，適合配清酒或拌飯。' },
        { emoji: '🔥', jp: 'かに甲羅焼き', say: 'かにこうらやき', ruby: 'かに<ruby>甲羅焼<rt>こうらや</rt></ruby>き', romaji: 'kani kōra-yaki', zh: '烤蟹殼', en: 'grilled crab shell', desc: '將蟹膏、蟹肉等放在蟹殼上烤，香氣濃厚。' },
        { emoji: '🥟', jp: 'かにクリームコロッケ', ruby: 'かにクリームコロッケ', romaji: 'kani kurīmu korokke', zh: '蟹肉奶油可樂餅', en: 'crab cream croquette', desc: '外酥內滑的奶油蟹肉餡，適合不吃生食或帶小孩時點用。' },
        { emoji: '🍚', jp: 'かに雑炊', say: 'かにぞうすい', ruby: 'かに<ruby>雑炊<rt>ぞうすい</rt></ruby>', romaji: 'kani zōsui', zh: '蟹雜炊', en: 'crab rice porridge', desc: '用蟹鍋高湯加入白飯與蛋煮成，是鍋物最經典的收尾。' },
        { emoji: '🍚', jp: 'かに釜飯', say: 'かにかまめし', ruby: 'かに<ruby>釜飯<rt>かまめし</rt></ruby>', romaji: 'kani kamameshi', zh: '蟹肉釜飯', en: 'crab pot rice', desc: '蟹肉與高湯在小鍋中炊煮，米飯吸收蟹的鮮味。' },
        { emoji: '🍱', jp: 'かに会席', say: 'かにかいせき', ruby: 'かに<ruby>会席<rt>かいせき</rt></ruby>', romaji: 'kani kaiseki', zh: '螃蟹會席套餐', en: 'crab kaiseki course', desc: '包含多種蟹料理的套餐，常有刺身、烤蟹、蟹鍋與雜炊。' },
        { emoji: '🦀', jp: 'かに尽くしコース', say: 'かにづくしコース', ruby: 'かに<ruby>尽<rt>づ</rt></ruby>くしコース', romaji: 'kani-zukushi kōsu', zh: '全蟹料理套餐', en: 'all-crab course', desc: '以不同蟹種與烹調法組成的全蟹套餐，適合首次體驗蟹料理。' }
      ]
    }
  ]
}
