// 会席料理 (Kaiseki) — formal multi-course dinner at a ryokan, course by course.
export const kaiseki = {
  id: 'kaiseki',
  title: 'Kaiseki Dining',
  titleJp: '懐石料理',
  emoji: '🍱',
  description: 'A seasonal kaiseki course — course explanations, dietary notes, local sake pairing and Japanese wine pairing.',
  lines: [
    {
      speaker: 'staff',
      jp: 'お待ちしておりました。お席へご案内します。',
      ruby: 'お<ruby>待<rt>ま</rt></ruby>ちしておりました。お<ruby>席<rt>せき</rt></ruby>へご<ruby>案内<rt>あんない</rt></ruby>します。',
      romaji: 'Omachi shite orimashita. O-seki e go-annai shimasu.',
      zh: '恭候多時了。為您帶位至座席。',
      en: 'We have been expecting you. Let me show you to your seat.'
    },
    {
      speaker: 'you',
      jp: 'ありがとうございます。よろしくお願いします。',
      ruby: 'ありがとうございます。よろしくお<ruby>願<rt>ねが</rt></ruby>いします。',
      romaji: 'Arigatō gozaimasu. Yoroshiku onegai shimasu.',
      zh: '謝謝。麻煩您了。',
      en: 'Thank you. I appreciate it.'
    },
    {
      speaker: 'staff',
      jp: '本日は懐石料理のコースをご用意しております。',
      say: '本日はかいせきりょうりのコースをごよういしております。',
      ruby: '<ruby>本日<rt>ほんじつ</rt></ruby>は<ruby>懐石料理<rt>かいせきりょうり</rt></ruby>のコースをご<ruby>用意<rt>ようい</rt></ruby>しております。',
      romaji: 'Honjitsu wa kaiseki-ryōri no kōsu o go-yōi shite orimasu.',
      zh: '今天為您準備了懷石料理套餐。',
      en: 'Tonight we have prepared a kaiseki course meal for you.'
    },
    {
      speaker: 'staff',
      jp: '一品ずつお持ちしますので、ごゆっくりどうぞ。',
      ruby: '<ruby>一品<rt>いっぴん</rt></ruby>ずつお<ruby>持<rt>も</rt></ruby>ちしますので、ごゆっくりどうぞ。',
      romaji: 'Ippin zutsu o-mochi shimasu node, go-yukkuri dōzo.',
      zh: '我們會一道一道為您上菜，請慢慢享用。',
      en: 'We will bring each dish one by one, so please take your time.'
    },
    {
      speaker: 'staff',
      jp: 'お飲み物はいかがなさいますか。地酒ペアリングと日本ワインペアリングもございます。',
      say: 'おのみものはいかがなさいますか。じざけペアリングとにほんワインペアリングもございます。',
      ruby: 'お<ruby>飲<rt>の</rt></ruby>み<ruby>物<rt>もの</rt></ruby>はいかがなさいますか。<ruby>地酒<rt>じざけ</rt></ruby>ペアリングと<ruby>日本<rt>にほん</rt></ruby>ワインペアリングもございます。',
      romaji: 'O-nomimono wa ikaga nasaimasu ka. Jizake peiringu to Nihon wain peiringu mo gozaimasu.',
      zh: '您想喝點什麼呢？我們也有當地清酒搭配與日本葡萄酒搭配。',
      en: 'What would you like to drink? We also offer local sake pairing and Japanese wine pairing.'
    },
    {
      speaker: 'you',
      jp: '日本ワインのペアリングをお願いします。',
      say: 'にほんワインのペアリングをおねがいします。',
      ruby: '<ruby>日本<rt>にほん</rt></ruby>ワインのペアリングをお<ruby>願<rt>ねが</rt></ruby>いします。',
      romaji: 'Nihon wain no peiringu o onegai shimasu.',
      zh: '麻煩日本葡萄酒搭配。',
      en: 'The Japanese wine pairing, please.'
    },
    {
      speaker: 'staff',
      jp: 'かしこまりました。ソムリエが料理に合わせて選んだ日本ワインを、順にお持ちします。',
      say: 'かしこまりました。ソムリエがりょうりにあわせてえらんだにほんワインを、じゅんにおもちします。',
      ruby: 'かしこまりました。ソムリエが<ruby>料理<rt>りょうり</rt></ruby>に<ruby>合<rt>あ</rt></ruby>わせて<ruby>選<rt>えら</rt></ruby>んだ<ruby>日本<rt>にほん</rt></ruby>ワインを、<ruby>順<rt>じゅん</rt></ruby>にお<ruby>持<rt>も</rt></ruby>ちします。',
      romaji: 'Kashikomarimashita. Somurie ga ryōri ni awasete eranda Nihon wain o, jun ni omochi shimasu.',
      zh: '好的。侍酒師會依料理搭配，依序送上精選的日本葡萄酒。',
      en: 'Certainly. Our sommelier will bring Japanese wines selected to match each course.'
    },
    {
      speaker: 'you',
      jp: 'それと、私はそばアレルギーがあります。',
      say: 'それと、わたしはそばアレルギーがあります。',
      ruby: 'それと、<ruby>私<rt>わたし</rt></ruby>はそばアレルギーがあります。',
      romaji: 'Sore to, watashi wa soba arerugī ga arimasu.',
      zh: '還有，我對蕎麥過敏。',
      en: 'Also, I have a soba (buckwheat) allergy.'
    },
    {
      speaker: 'staff',
      jp: 'かしこまりました。料理長に伝えて、そばを使わないようにいたします。',
      say: 'かしこまりました。りょうりちょうにつたえて、そばをつかわないようにいたします。',
      ruby: 'かしこまりました。<ruby>料理長<rt>りょうりちょう</rt></ruby>に<ruby>伝<rt>つた</rt></ruby>えて、そばを<ruby>使<rt>つか</rt></ruby>わないようにいたします。',
      romaji: 'Kashikomarimashita. Ryōrichō ni tsutaete, soba o tsukawanai yō ni itashimasu.',
      zh: '好的。我會轉達主廚，不使用蕎麥。',
      en: 'Certainly. I will inform the head chef and make sure no soba is used.'
    },
    {
      speaker: 'staff',
      jp: 'こちらが先付でございます。季節の一品です。',
      say: 'こちらがさきづけでございます。きせつのいっぴんです。',
      ruby: 'こちらが<ruby>先付<rt>さきづけ</rt></ruby>でございます。<ruby>季節<rt>きせつ</rt></ruby>の<ruby>一品<rt>いっぴん</rt></ruby>です。',
      romaji: 'Kochira ga sakizuke de gozaimasu. Kisetsu no ippin desu.',
      zh: '這是先付（開胃小菜）。是當季的一道料理。',
      en: 'This is the sakizuke (amuse-bouche). It is a seasonal dish.'
    },
    {
      speaker: 'you',
      jp: 'これはどうやって食べますか。',
      ruby: 'これはどうやって<ruby>食<rt>た</rt></ruby>べますか。',
      romaji: 'Kore wa dō yatte tabemasu ka.',
      zh: '這個要怎麼吃呢？',
      en: 'How do I eat this?'
    },
    {
      speaker: 'staff',
      jp: 'そのままお召し上がりください。次にお造りをお持ちします。',
      say: 'そのままおめしあがりください。つぎにおつくりをおもちします。',
      ruby: 'そのままお<ruby>召<rt>め</rt></ruby>し<ruby>上<rt>あ</rt></ruby>がりください。<ruby>次<rt>つぎ</rt></ruby>にお<ruby>造<rt>つく</rt></ruby>りをお<ruby>持<rt>も</rt></ruby>ちします。',
      romaji: 'Sono mama o-meshiagari kudasai. Tsugi ni o-tsukuri o o-mochi shimasu.',
      zh: '請直接享用即可。接下來會為您送上生魚片。',
      en: 'Please eat it as it is. Next, I will bring the sashimi.'
    },
    {
      speaker: 'you',
      jp: 'どれもとても美味しいです。ごちそうさまでした。',
      say: 'どれもとてもおいしいです。ごちそうさまでした。',
      ruby: 'どれもとても<ruby>美味<rt>おい</rt></ruby>しいです。ごちそうさまでした。',
      romaji: 'Dore mo totemo oishii desu. Gochisōsama deshita.',
      zh: '每一道都非常美味。謝謝招待。',
      en: 'Everything is delicious. Thank you for the meal.'
    }
  ],
  menu: [
    {
      title: 'お品書き（コース） · The course',
      items: [
        { emoji: '🍡', jp: '先付', say: 'さきづけ', ruby: '<ruby>先付<rt>さきづけ</rt></ruby>', romaji: 'sakizuke', zh: '開胃小菜', en: 'amuse-bouche', desc: '這是會席最先上桌、如同前菜的第一道小菜，用來開胃並預告當季的主題。' },
        { emoji: '🥢', jp: '八寸', say: 'はっすん', ruby: '<ruby>八寸<rt>はっすん</rt></ruby>', romaji: 'hassun', zh: '什錦拼盤', en: 'seasonal assorted platter', desc: '這是擺盤精緻的拼盤，集合山珍海味的數種小品，多為下酒小菜，最能展現季節感。' },
        { emoji: '🐟', jp: '向付', say: 'むこうづけ', ruby: '<ruby>向付<rt>むこうづけ</rt></ruby>', romaji: 'mukōzuke', zh: '生魚片小碟', en: 'sashimi side dish', desc: '這是擺在膳食對面、以生魚片為主的一道，是會席中最早登場的鮮味料理。' },
        { emoji: '🍵', jp: 'お椀（吸い物）', say: 'おわん（すいもの）', ruby: 'お<ruby>椀<rt>わん</rt></ruby>（<ruby>吸<rt>す</rt></ruby>い<ruby>物<rt>もの</rt></ruby>）', romaji: 'o-wan (suimono)', zh: '清湯', en: 'clear soup course', desc: '這是以高湯為底的一碗清湯，香氣與滋味最能展現廚師的功力，是會席的核心料理。' },
        { emoji: '🍣', jp: 'お造り（刺身）', say: 'おつくり（さしみ）', ruby: 'お<ruby>造<rt>つく</rt></ruby>り（<ruby>刺身<rt>さしみ</rt></ruby>）', romaji: 'o-tsukuri (sashimi)', zh: '生魚片', en: 'sashimi course', desc: '這是生魚片類的一道，以當季新鮮魚貝切片盛盤，沾醬油與山葵享用。' },
        { emoji: '🔥', jp: '焼き物', say: 'やきもの', ruby: '<ruby>焼<rt>や</rt></ruby>き<ruby>物<rt>もの</rt></ruby>', romaji: 'yakimono', zh: '燒烤料理', en: 'grilled course', desc: '這是燒烤的一道，多為當季魚類，外皮焦香、內裡軟嫩。' },
        { emoji: '🍲', jp: '炊き合わせ', say: 'たきあわせ', ruby: '<ruby>炊<rt>た</rt></ruby>き<ruby>合<rt>あ</rt></ruby>わせ', romaji: 'takiawase', zh: '分煮拼盤', en: 'assorted simmered dish', desc: '這是將數種食材分別燉煮、再一同盛盤的一道，各自保留原味又相映成趣。' },
        { emoji: '🥘', jp: '煮物', say: 'にもの', ruby: '<ruby>煮物<rt>にもの</rt></ruby>', romaji: 'nimono', zh: '燉煮料理', en: 'simmered dish', desc: '這是以高湯細火慢燉的一道，蔬菜或魚肉吸飽湯汁，味道溫潤入味。' },
        { emoji: '🍤', jp: '揚げ物', say: 'あげもの', ruby: '<ruby>揚<rt>あ</rt></ruby>げ<ruby>物<rt>もの</rt></ruby>', romaji: 'agemono', zh: '炸物', en: 'tempura course', desc: '這是酥炸的一道，通常為天婦羅，外酥內嫩，趁熱享用最佳。' },
        { emoji: '🍮', jp: '蒸し物（茶碗蒸し）', say: 'むしもの（ちゃわんむし）', ruby: '<ruby>蒸<rt>む</rt></ruby>し<ruby>物<rt>もの</rt></ruby>（<ruby>茶碗蒸<rt>ちゃわんむ</rt></ruby>し）', romaji: 'mushimono (chawanmushi)', zh: '蒸物（茶碗蒸）', en: 'steamed dish (chawanmushi)', desc: '這是蒸製的一道，多為茶碗蒸，滑嫩的蒸蛋中藏著蝦、菇等配料。' },
        { emoji: '🍢', jp: '強肴', say: 'しいざかな', ruby: '<ruby>強肴<rt>しいざかな</rt></ruby>', romaji: 'shīzakana', zh: '勸酒佳餚', en: 'extra dish to encourage drinking', desc: '這是用來勸酒、額外加上的一道下酒佳餚，讓賓主盡興多飲幾杯。' },
        { emoji: '🥗', jp: '酢の物', say: 'すのもの', ruby: '<ruby>酢<rt>す</rt></ruby>の<ruby>物<rt>もの</rt></ruby>', romaji: 'sunomono', zh: '醋漬涼拌', en: 'vinegared dish', desc: '這是以醋調味的清爽一道，在用餐後段解膩、轉換口味。' },
        { emoji: '🍜', jp: '止め椀（味噌汁）', say: 'とめわん（みそしる）', ruby: '<ruby>止<rt>と</rt></ruby>め<ruby>椀<rt>わん</rt></ruby>（<ruby>味噌汁<rt>みそしる</rt></ruby>）', romaji: 'tome-wan (miso-shiru)', zh: '收尾味噌湯', en: 'closing miso soup', desc: '這是收尾的味噌湯，與白飯一同上桌，告知正餐即將結束。' },
        { emoji: '🍚', jp: '食事（ご飯）', say: 'しょくじ（ごはん）', ruby: '<ruby>食事<rt>しょくじ</rt></ruby>（ご<ruby>飯<rt>はん</rt></ruby>）', romaji: 'shokuji (gohan)', zh: '主食（白飯）', en: 'rice course', desc: '這是作為主食的白飯，常為當季炊飯，與止め椀、香の物一同收尾。' },
        { emoji: '🥬', jp: '香の物', say: 'こうのもの', ruby: '<ruby>香<rt>こう</rt></ruby>の<ruby>物<rt>もの</rt></ruby>', romaji: 'kō no mono', zh: '醬菜', en: 'pickles', desc: '這是搭配白飯的一碟醬菜，清脆爽口、解膩開胃。' },
        { emoji: '🍇', jp: '水菓子（果物）', say: 'みずがし（くだもの）', ruby: '<ruby>水菓子<rt>みずがし</rt></ruby>（<ruby>果物<rt>くだもの</rt></ruby>）', romaji: 'mizugashi (kudamono)', zh: '當季水果', en: 'fresh fruit', desc: '這是餐後的當季水果，清爽多汁，為一餐做溫和的收尾。' },
        { emoji: '🍵', jp: '甘味・抹茶', say: 'かんみ・まっちゃ', ruby: '<ruby>甘味<rt>かんみ</rt></ruby>・<ruby>抹茶<rt>まっちゃ</rt></ruby>', romaji: 'kanmi / matcha', zh: '甜點與抹茶', en: 'sweets & matcha', desc: '這是最後奉上的甜點與一碗抹茶，微苦回甘為整場會席畫下句點。' }
      ]
    },
    {
      title: 'さんぽう西村屋 本店を参考に · Sanpou Nishimuraya-inspired course',
      items: [
        { emoji: '🥢', jp: '季節の前菜', say: 'きせつのぜんさい', ruby: '<ruby>季節<rt>きせつ</rt></ruby>の<ruby>前菜<rt>ぜんさい</rt></ruby>', romaji: 'kisetsu no zensai', zh: '季節前菜', en: 'seasonal appetizer', desc: '參考さんぽう西村屋本店的季節套餐，以當季前菜揭開序幕。' },
        { emoji: '🍵', jp: '椀物', say: 'わんもの', ruby: '<ruby>椀物<rt>わんもの</rt></ruby>', romaji: 'wanmono', zh: '湯品', en: 'soup course', desc: '季節套餐中的椀物（湯品）環節。' },
        { emoji: '🐟', jp: 'お造り', say: 'おつくり', ruby: 'お<ruby>造<rt>つく</rt></ruby>り', romaji: 'otsukuri', zh: '生魚片', en: 'sashimi course', desc: '季節套餐中的生魚片環節。' },
        { emoji: '🐟', jp: '季節の魚料理', say: 'きせつのさかなりょうり', ruby: '<ruby>季節<rt>きせつ</rt></ruby>の<ruby>魚料理<rt>さかなりょうり</rt></ruby>', romaji: 'kisetsu no sakana ryōri', zh: '季節魚料理', en: 'seasonal fish course', desc: '以當日進貨的當季海鮮製作的魚料理。' },
        { emoji: '🥣', jp: '箸休め', say: 'はしやすめ', ruby: '<ruby>箸休<rt>はしやす</rt></ruby>め', romaji: 'hashiyasume', zh: '轉換口味小品', en: 'palate cleanser', desc: '在菜色之間轉換味覺的小品。' },
        { emoji: '🥩', jp: '但馬牛炭火焼き', say: 'たじまぎゅうすみびやき', ruby: '<ruby>但馬牛<rt>たじまぎゅう</rt></ruby><ruby>炭火焼<rt>すみびや</rt></ruby>き', romaji: 'tajima gyū sumibiyaki', zh: '但馬牛炭火燒', en: 'charcoal-grilled Tajima beef', desc: '參考さんぽう西村屋本店以圍爐炭火烹調的但馬牛。' },
        { emoji: '🍚', jp: '飯物', say: 'めしもの', ruby: '<ruby>飯物<rt>めしもの</rt></ruby>', romaji: 'meshimono', zh: '飯食', en: 'rice course', desc: '套餐後段的飯食環節。' },
        { emoji: '🍨', jp: '甘味', say: 'かんみ', ruby: '<ruby>甘味<rt>かんみ</rt></ruby>', romaji: 'kanmi', zh: '甜點', en: 'dessert', desc: '季節套餐的餐後甜點。' }
      ]
    },
    {
      title: 'ペアリング · Pairings',
      items: [
        { emoji: '🍶', jp: '地酒ペアリング', say: 'じざけペアリング', ruby: '<ruby>地酒<rt>じざけ</rt></ruby>ペアリング', romaji: 'jizake peiringu', zh: '當地清酒搭配', en: 'local sake pairing', desc: '參考さんぽう西村屋本店：依季節料理搭配數款當地清酒；供應酒款依季節而異。' },
        { emoji: '🍷', jp: '日本ワインペアリング', say: 'にほんワインペアリング', ruby: '<ruby>日本<rt>にほん</rt></ruby>ワインペアリング', romaji: 'Nihon wain peiringu', zh: '日本葡萄酒搭配', en: 'Japanese wine pairing', desc: '參考さんぽう西村屋本店：由侍酒師依餐點搭配日本葡萄酒；酒款依季節而異。' }
      ]
    }
  ],
  phrases: [
    {
      title: 'よく使う一言 · Handy phrases',
      items: [
        { jp: 'これは何ですか？', ruby: 'これは<ruby>何<rt>なん</rt></ruby>ですか？', zh: '這是什麼？', en: 'What is this?' },
        { jp: 'どうやって食べますか？', ruby: 'どうやって<ruby>食<rt>た</rt></ruby>べますか？', zh: '這個要怎麼吃？', en: 'How do I eat this?' },
        { jp: 'お酒のおすすめはありますか？', say: 'おさけのおすすめはありますか？', ruby: 'お<ruby>酒<rt>さけ</rt></ruby>のおすすめはありますか？', zh: '有推薦的酒嗎？', en: 'Do you have a recommended sake?' },
        { jp: 'アレルギーがあります。', ruby: 'アレルギーがあります。', zh: '我有過敏。', en: 'I have an allergy.' },
        { jp: 'とても美味しいです。', say: 'とてもおいしいです。', ruby: 'とても<ruby>美味<rt>おい</rt></ruby>しいです。', zh: '非常美味。', en: 'It is very delicious.' },
        { jp: 'お料理の説明をお願いします。', say: 'おりょうりのせつめいをおねがいします。', ruby: 'お<ruby>料理<rt>りょうり</rt></ruby>の<ruby>説明<rt>せつめい</rt></ruby>をお<ruby>願<rt>ねが</rt></ruby>いします。', zh: '麻煩為我說明一下這道料理。', en: 'Could you explain the dish, please?' },
        { jp: '日本ワインのペアリングをお願いします。', say: 'にほんワインのペアリングをおねがいします。', ruby: '<ruby>日本<rt>にほん</rt></ruby>ワインのペアリングをお<ruby>願<rt>ねが</rt></ruby>いします。', zh: '麻煩日本葡萄酒搭配。', en: 'The Japanese wine pairing, please.' },
        { jp: '地酒のペアリングはありますか？', say: 'じざけのペアリングわありますか？', ruby: '<ruby>地酒<rt>じざけ</rt></ruby>のペアリングはありますか？', zh: '有當地清酒搭配嗎？', en: 'Do you have a local sake pairing?' },
        { jp: 'この料理に合うワインはどれですか？', say: 'このりょうりにあうワインわどれですか？', ruby: 'この<ruby>料理<rt>りょうり</rt></ruby>に<ruby>合<rt>あ</rt></ruby>うワインはどれですか？', zh: '這道菜適合哪一款葡萄酒？', en: 'Which wine pairs with this dish?' }
      ]
    }
  ]
}
