// Local & street food — a ramen shop ticket machine, then a takoyaki street stall.
export const localfood = {
  id: 'localfood',
  title: 'Local & Street Food',
  titleJp: 'ローカル・屋台グルメ',
  emoji: '🍢',
  description: 'A ramen ticket machine and a takoyaki street stall — cash, toppings, noodle firmness.',
  lines: [
    {
      speaker: 'you',
      jp: 'すみません、この食券機の使い方を教えてください。',
      ruby: 'すみません、この<ruby>食券機<rt>しょっけんき</rt></ruby>の<ruby>使<rt>つか</rt></ruby>い<ruby>方<rt>かた</rt></ruby>を<ruby>教<rt>おし</rt></ruby>えてください。',
      romaji: 'Sumimasen, kono shokken-ki no tsukaikata o oshiete kudasai.',
      zh: '不好意思，可以教我怎麼使用這台售票機嗎？',
      en: 'Excuse me, could you tell me how to use this ticket machine?'
    },
    {
      speaker: 'staff',
      jp: 'お金を入れて、食べたいラーメンのボタンを押してください。',
      ruby: 'お<ruby>金<rt>かね</rt></ruby>を<ruby>入<rt>い</rt></ruby>れて、<ruby>食<rt>た</rt></ruby>べたいラーメンのボタンを<ruby>押<rt>お</rt></ruby>してください。',
      romaji: 'O-kane o irete, tabetai rāmen no botan o oshite kudasai.',
      zh: '先投入錢，再按下您想吃的拉麵按鈕。',
      en: 'Insert your money, then press the button for the ramen you want.'
    },
    {
      speaker: 'you',
      jp: '一番人気はどれですか？',
      ruby: '<ruby>一番<rt>いちばん</rt></ruby><ruby>人気<rt>にんき</rt></ruby>はどれですか？',
      romaji: 'Ichiban ninki wa dore desu ka?',
      zh: '哪一個最受歡迎呢？',
      en: 'Which one is the most popular?'
    },
    {
      speaker: 'staff',
      jp: 'この豚骨ラーメンです。トッピングは別のボタンで選べます。',
      say: 'このとんこつラーメンです。トッピングは別のボタンで選べます。',
      ruby: 'この<ruby>豚骨<rt>とんこつ</rt></ruby>ラーメンです。トッピングは<ruby>別<rt>べつ</rt></ruby>のボタンで<ruby>選<rt>えら</rt></ruby>べます。',
      romaji: 'Kono tonkotsu rāmen desu. Toppingu wa betsu no botan de erabemasu.',
      zh: '這個豚骨拉麵。配料可以用另外的按鈕選擇。',
      en: "This tonkotsu ramen. You can choose toppings with the separate buttons."
    },
    {
      speaker: 'you',
      jp: '味玉を追加できますか？',
      say: 'あじたまを追加できますか？',
      ruby: '<ruby>味玉<rt>あじたま</rt></ruby>を<ruby>追加<rt>ついか</rt></ruby>できますか？',
      romaji: 'Ajitama o tsuika dekimasu ka?',
      zh: '可以加一顆滷蛋嗎？',
      en: 'Can I add a seasoned egg?'
    },
    {
      speaker: 'staff',
      jp: 'はい、こちらのボタンです。食券を私に渡してください。',
      ruby: 'はい、こちらのボタンです。<ruby>食券<rt>しょっけん</rt></ruby>を<ruby>私<rt>わたし</rt></ruby>に<ruby>渡<rt>わた</rt></ruby>してください。',
      romaji: 'Hai, kochira no botan desu. Shokken o watashi ni watashite kudasai.',
      zh: '好的，就是這個按鈕。請把餐券交給我。',
      en: 'Yes, this button. Please hand me the meal ticket.'
    },
    {
      speaker: 'staff',
      jp: '麺の硬さはどうしますか？',
      ruby: '<ruby>麺<rt>めん</rt></ruby>の<ruby>硬<rt>かた</rt></ruby>さはどうしますか？',
      romaji: 'Men no katasa wa dō shimasu ka?',
      zh: '麵的軟硬度要怎麼樣呢？',
      en: 'How would you like the noodle firmness?'
    },
    {
      speaker: 'you',
      jp: '普通でお願いします。',
      ruby: '<ruby>普通<rt>ふつう</rt></ruby>でお<ruby>願<rt>ねが</rt></ruby>いします。',
      romaji: 'Futsū de onegai shimasu.',
      zh: '普通就好，麻煩你了。',
      en: 'Normal, please.'
    },
    {
      speaker: 'staff',
      jp: '味の濃さは？',
      ruby: '<ruby>味<rt>あじ</rt></ruby>の<ruby>濃<rt>こ</rt></ruby>さは？',
      romaji: 'Aji no kosa wa?',
      zh: '味道的濃淡呢？',
      en: 'And the flavor strength?'
    },
    {
      speaker: 'you',
      jp: '少し薄めでお願いします。',
      ruby: '<ruby>少<rt>すこ</rt></ruby>し<ruby>薄<rt>うす</rt></ruby>めでお<ruby>願<rt>ねが</rt></ruby>いします。',
      romaji: 'Sukoshi usume de onegai shimasu.',
      zh: '麻煩淡一點，謝謝。',
      en: 'A little lighter, please.'
    },
    {
      speaker: 'you',
      jp: 'たこ焼きを一つください。',
      ruby: 'たこ<ruby>焼<rt>や</rt></ruby>きを<ruby>一<rt>ひと</rt></ruby>つください。',
      romaji: 'Takoyaki o hitotsu kudasai.',
      zh: '請給我一份章魚燒。',
      en: 'One order of takoyaki, please.'
    },
    {
      speaker: 'staff',
      jp: '八個入りと十二個入りがありますよ。',
      ruby: '<ruby>八個入<rt>はちこい</rt></ruby>りと<ruby>十二個入<rt>じゅうにこい</rt></ruby>りがありますよ。',
      romaji: 'Hachi-ko-iri to jūni-ko-iri ga arimasu yo.',
      zh: '我們有八顆裝和十二顆裝喔。',
      en: 'We have 8-piece and 12-piece servings.'
    },
    {
      speaker: 'you',
      jp: '八個入りで、ソースとマヨネーズ両方かけてください。',
      ruby: '<ruby>八個入<rt>はちこい</rt></ruby>りで、ソースとマヨネーズ<ruby>両方<rt>りょうほう</rt></ruby>かけてください。',
      romaji: 'Hachi-ko-iri de, sōsu to mayonēzu ryōhō kakete kudasai.',
      zh: '我要八顆裝，醬汁和美乃滋都幫我加上去。',
      en: 'The 8-piece, with both sauce and mayonnaise on top, please.'
    },
    {
      speaker: 'staff',
      jp: 'はい！熱いので気をつけてね。五百円です。',
      ruby: 'はい！<ruby>熱<rt>あつ</rt></ruby>いので<ruby>気<rt>き</rt></ruby>をつけてね。<ruby>五百円<rt>ごひゃくえん</rt></ruby>です。',
      romaji: 'Hai! Atsui node ki o tsukete ne. Gohyaku-en desu.',
      zh: '來囉！很燙要小心喔。一共五百日圓。',
      en: "Here! It's hot, so be careful. That's 500 yen."
    },
    {
      speaker: 'you',
      jp: '現金しかだめですか？',
      ruby: '<ruby>現金<rt>げんきん</rt></ruby>しかだめですか？',
      romaji: 'Genkin shika dame desu ka?',
      zh: '只能付現金嗎？',
      en: 'Is it cash only?'
    },
    {
      speaker: 'staff',
      jp: 'ごめんね、ここは現金だけなんだ。',
      ruby: 'ごめんね、ここは<ruby>現金<rt>げんきん</rt></ruby>だけなんだ。',
      romaji: 'Gomen ne, koko wa genkin dake nanda.',
      zh: '不好意思，我們這裡只收現金。',
      en: 'Sorry, this place is cash only.'
    },
    {
      speaker: 'you',
      jp: '大丈夫です。はい、五百円。ごちそうさま！',
      ruby: '<ruby>大丈夫<rt>だいじょうぶ</rt></ruby>です。はい、<ruby>五百円<rt>ごひゃくえん</rt></ruby>。ごちそうさま！',
      romaji: 'Daijōbu desu. Hai, gohyaku-en. Gochisōsama!',
      zh: '沒問題。來，五百日圓。謝謝招待！',
      en: "No problem. Here, 500 yen. Thanks for the food!"
    }
  ],
  menu: [
    {
      title: 'ラーメン・麺 · Ramen & noodles',
      items: [
        { emoji: '🍜', jp: '豚骨ラーメン', say: 'とんこつラーメン', ruby: '<ruby>豚骨<rt>とんこつ</rt></ruby>ラーメン', romaji: 'tonkotsu rāmen', zh: '豚骨拉麵', en: 'pork-bone ramen', desc: '豬骨長時間熬煮的濃白湯頭，香濃醇厚。' },
        { emoji: '🍜', jp: '醤油ラーメン', say: 'しょうゆラーメン', ruby: '<ruby>醤油<rt>しょうゆ</rt></ruby>ラーメン', romaji: 'shōyu rāmen', zh: '醬油拉麵', en: 'soy-sauce ramen', desc: '醬油基底的清澈湯頭，香氣足、最經典。' },
        { emoji: '🍜', jp: '味噌ラーメン', say: 'みそラーメン', ruby: '<ruby>味噌<rt>みそ</rt></ruby>ラーメン', romaji: 'miso rāmen', zh: '味噌拉麵', en: 'miso ramen', desc: '味噌調味的濃郁湯頭，源自北海道、暖身暖胃。' },
        { emoji: '🍜', jp: '塩ラーメン', say: 'しおラーメン', ruby: '<ruby>塩<rt>しお</rt></ruby>ラーメン', romaji: 'shio rāmen', zh: '鹽味拉麵', en: 'salt ramen', desc: '鹽味調味的清淡湯頭，清爽不膩、滋味純粹。' },
        { emoji: '🍜', jp: 'つけ麺', say: 'つけめん', ruby: 'つけ<ruby>麺<rt>めん</rt></ruby>', romaji: 'tsukemen', zh: '沾麵', en: 'dipping noodles', desc: '麵與濃醬分開上桌，沾著吃的Q彈粗麵。' },
        { emoji: '🍜', jp: '焼きそば', say: 'やきそば', ruby: '<ruby>焼<rt>や</rt></ruby>きそば', romaji: 'yakisoba', zh: '炒麵', en: 'fried noodles', desc: '醬汁炒麵配高麗菜豬肉，屋台必備香氣。' },
        { emoji: '🍜', jp: '焼きうどん', say: 'やきうどん', ruby: '<ruby>焼<rt>や</rt></ruby>きうどん', romaji: 'yaki-udon', zh: '炒烏龍麵', en: 'fried udon', desc: '粗烏龍麵拌炒醬汁與蔬菜，彈牙有飽足感。' }
      ]
    },
    {
      title: '屋台の鉄板 · Griddle stalls',
      items: [
        { emoji: '🐙', jp: 'たこ焼き', say: 'たこやき', ruby: 'たこ<ruby>焼<rt>や</rt></ruby>き', romaji: 'takoyaki', zh: '章魚燒', en: 'octopus balls', desc: '麵糊包章魚塊烤成圓球，淋醬汁與柴魚片。' },
        { emoji: '🥞', jp: 'お好み焼き', say: 'おこのみやき', ruby: 'お<ruby>好<rt>この</rt></ruby>み<ruby>焼<rt>や</rt></ruby>き', romaji: 'okonomiyaki', zh: '大阪燒', en: 'savory pancake', desc: '高麗菜麵糊鐵板煎成的鹹餅，淋醬撒柴魚。' },
        { emoji: '🍳', jp: 'もんじゃ焼き', say: 'もんじゃやき', ruby: 'もんじゃ<ruby>焼<rt>や</rt></ruby>き', romaji: 'monjayaki', zh: '文字燒', en: 'monja griddle cake', desc: '東京風的稀麵糊鐵板燒，用小鏟邊煎邊吃。' },
        { emoji: '🦑', jp: 'いか焼き', say: 'いかやき', ruby: 'いか<ruby>焼<rt>や</rt></ruby>き', romaji: 'ikayaki', zh: '烤魷魚', en: 'grilled squid', desc: '整隻魷魚刷醬鐵板燒烤，鹹香有嚼勁。' },
        { emoji: '🥢', jp: 'はしまき', ruby: 'はしまき', romaji: 'hashimaki', zh: '筷子卷大阪燒', en: 'okonomiyaki on a stick', desc: '捲在筷子上的大阪燒，方便邊走邊吃。' }
      ]
    },
    {
      title: '串・揚げ物 · Skewers & fried',
      items: [
        { emoji: '🍗', jp: '唐揚げ', say: 'からあげ', ruby: '<ruby>唐揚<rt>からあ</rt></ruby>げ', romaji: 'kara-age', zh: '日式炸雞', en: 'fried chicken', desc: '醃過的雞塊裹粉酥炸，外酥內多汁。' },
        { emoji: '🌭', jp: 'フランクフルト', ruby: 'フランクフルト', romaji: 'furankufuruto', zh: '德式香腸', en: 'frankfurter', desc: '粗大香腸串著烤，多汁彈牙、祭典常見。' },
        { emoji: '🌭', jp: 'アメリカンドッグ', ruby: 'アメリカンドッグ', romaji: 'amerikan doggu', zh: '美式熱狗棒', en: 'corn dog', desc: '香腸裹麵衣油炸的熱狗棒，沾番茄醬或糖。' },
        { emoji: '🐂', jp: '牛串', say: 'ぎゅうぐし', ruby: '<ruby>牛串<rt>ぎゅうぐし</rt></ruby>', romaji: 'gyū-gushi', zh: '牛肉串', en: 'beef skewer', desc: '牛肉塊串著炭烤，鹹香多汁、份量十足。' },
        { emoji: '🍢', jp: '焼き鳥', say: 'やきとり', ruby: '<ruby>焼<rt>や</rt></ruby>き<ruby>鳥<rt>とり</rt></ruby>', romaji: 'yakitori', zh: '烤雞串', en: 'grilled chicken skewer', desc: '雞肉串炭火燒烤，可選醬汁或鹽味。' },
        { emoji: '🦑', jp: 'イカ天', say: 'イカてん', ruby: 'イカ<ruby>天<rt>てん</rt></ruby>', romaji: 'ika-ten', zh: '炸魷魚天婦羅', en: 'fried squid tempura', desc: '魷魚裹麵衣酥炸，香脆有嚼勁的小點。' },
        { emoji: '🥔', jp: 'じゃがバター', ruby: 'じゃがバター', romaji: 'jaga-batā', zh: '奶油烤馬鈴薯', en: 'buttered potato', desc: '整顆馬鈴薯蒸烤後抹奶油，鬆軟濃香。' },
        { emoji: '🌽', jp: '焼きとうもろこし', say: 'やきとうもろこし', ruby: '<ruby>焼<rt>や</rt></ruby>きとうもろこし', romaji: 'yaki-tōmorokoshi', zh: '烤玉米', en: 'grilled corn', desc: '玉米刷醬油炭烤，香甜焦香、屋台招牌。' }
      ]
    },
    {
      title: '甘味・スイーツ · Sweets',
      items: [
        { emoji: '🐟', jp: 'たい焼き', say: 'たいやき', ruby: 'たい<ruby>焼<rt>や</rt></ruby>き', romaji: 'taiyaki', zh: '鯛魚燒', en: 'fish-shaped cake', desc: '鯛魚造型的烤餅，內包紅豆餡或卡士達。' },
        { emoji: '🟡', jp: '大判焼き', say: 'おおばんやき', ruby: '<ruby>大判<rt>おおばん</rt></ruby><ruby>焼<rt>や</rt></ruby>き', romaji: 'ōban-yaki', zh: '紅豆餅', en: 'round filled cake', desc: '圓盤狀的烤餅，內餡飽滿、又稱今川燒。' },
        { emoji: '🍡', jp: '団子', say: 'だんご', ruby: '<ruby>団子<rt>だんご</rt></ruby>', romaji: 'dango', zh: '糰子', en: 'sweet dumplings', desc: '糯米丸串成一串，常刷醬油或紅豆餡。' },
        { emoji: '🍎', jp: 'りんご飴', say: 'りんごあめ', ruby: 'りんご<ruby>飴<rt>あめ</rt></ruby>', romaji: 'ringo-ame', zh: '蘋果糖', en: 'candy apple', desc: '蘋果裹上鮮紅糖衣，外脆內爽脆。' },
        { emoji: '☁️', jp: '綿あめ', say: 'わたあめ', ruby: '<ruby>綿<rt>わた</rt></ruby>あめ', romaji: 'wata-ame', zh: '棉花糖', en: 'cotton candy', desc: '砂糖紡成的蓬鬆棉花糖，祭典的童年回憶。' },
        { emoji: '🍌', jp: 'チョコバナナ', ruby: 'チョコバナナ', romaji: 'choko-banana', zh: '巧克力香蕉', en: 'chocolate banana', desc: '香蕉裹巧克力撒糖珠，祭典經典甜點。' },
        { emoji: '🧁', jp: 'ベビーカステラ', ruby: 'ベビーカステラ', romaji: 'bebī-kasutera', zh: '一口蜂蜜蛋糕', en: 'baby castella', desc: '一口大小的小雞蛋糕，鬆軟香甜。' },
        { emoji: '🍧', jp: 'かき氷', say: 'かきごおり', ruby: 'かき<ruby>氷<rt>ごおり</rt></ruby>', romaji: 'kakigōri', zh: '刨冰', en: 'shaved ice', desc: '碎冰淋上糖漿，夏日祭典的消暑甜品。' },
        { emoji: '🥞', jp: 'クレープ', ruby: 'クレープ', romaji: 'kurēpu', zh: '可麗餅', en: 'crepe', desc: '薄餅捲入鮮奶油水果，捲成方便手拿的甜點。' }
      ]
    },
    {
      title: '軽食 · Light bites',
      items: [
        { emoji: '🥟', jp: '肉まん', say: 'にくまん', ruby: '<ruby>肉<rt>にく</rt></ruby>まん', romaji: 'nikuman', zh: '肉包', en: 'steamed pork bun', desc: '蒸熱的豬肉餡包子，熱呼呼最適合冬天。' },
        { emoji: '🍙', jp: 'おにぎり', ruby: 'おにぎり', romaji: 'onigiri', zh: '飯糰', en: 'rice ball', desc: '白飯包餡捏成三角形，外裹海苔、方便填肚。' },
        { emoji: '🍠', jp: '焼き芋', say: 'やきいも', ruby: '<ruby>焼<rt>や</rt></ruby>き<ruby>芋<rt>いも</rt></ruby>', romaji: 'yaki-imo', zh: '烤地瓜', en: 'roasted sweet potato', desc: '石烤地瓜鬆軟香甜，冬季街頭的暖心點心。' },
        { emoji: '🍶', jp: '甘酒', say: 'あまざけ', ruby: '<ruby>甘酒<rt>あまざけ</rt></ruby>', romaji: 'amazake', zh: '甜米釀', en: 'sweet rice drink', desc: '米麹發酵的甜米釀飲，溫熱暖身、幾乎無酒精。' }
      ]
    }
  ],
  phrases: [
    {
      title: 'よく使う一言 · Handy phrases',
      items: [
        { jp: '一番人気はどれですか？', ruby: '<ruby>一番<rt>いちばん</rt></ruby><ruby>人気<rt>にんき</rt></ruby>はどれですか？', zh: '最受歡迎的是哪個?', en: 'Which is the most popular?' },
        { jp: '持ち帰りできますか？', ruby: '<ruby>持<rt>も</rt></ruby>ち<ruby>帰<rt>かえ</rt></ruby>りできますか？', zh: '可以外帶嗎?', en: 'Can I take it to go?' },
        { jp: 'ここで食べられますか？', ruby: 'ここで<ruby>食<rt>た</rt></ruby>べられますか？', zh: '可以在這裡吃嗎?', en: 'Can I eat here?' },
        { jp: '現金しか使えませんか？', ruby: '<ruby>現金<rt>げんきん</rt></ruby>しか<ruby>使<rt>つか</rt></ruby>えませんか？', zh: '只能用現金嗎?', en: 'Is it cash only?' },
        { jp: '辛さは選べますか？', ruby: '<ruby>辛<rt>から</rt></ruby>さは<ruby>選<rt>えら</rt></ruby>べますか？', zh: '辣度可以選嗎?', en: 'Can I choose the spice level?' },
        { jp: '温めてもらえますか？', ruby: '<ruby>温<rt>あたた</rt></ruby>めてもらえますか？', zh: '可以幫我加熱嗎?', en: 'Could you heat it up?' },
        { jp: '袋をください。', ruby: '<ruby>袋<rt>ふくろ</rt></ruby>をください。', zh: '請給我袋子。', en: 'A bag, please.' }
      ]
    }
  ]
}
