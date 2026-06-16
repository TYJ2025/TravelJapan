// おでん・関東煮 (Oden) — items simmered in dashi broth at izakaya, convenience stores, or oden shops.
export const oden = {
  id: 'oden',
  title: 'Oden',
  titleJp: 'おでん・関東煮',
  emoji: '🍢',
  description: 'Order oden simmered in dashi at a counter — pick your items, add mustard, and refill the broth.',
  lines: [
    {
      speaker: 'staff',
      jp: 'いらっしゃいませ！おでん、何にしますか？',
      ruby: 'いらっしゃいませ！おでん、<ruby>何<rt>なに</rt></ruby>にしますか？',
      romaji: 'Irasshaimase! Oden, nani ni shimasu ka?',
      zh: '歡迎光臨！關東煮要點什麼呢？',
      en: 'Welcome! What oden would you like?'
    },
    {
      speaker: 'you',
      jp: 'こんばんは。おすすめはどれですか？',
      ruby: 'こんばんは。おすすめはどれですか？',
      romaji: 'Konbanwa. Osusume wa dore desu ka?',
      zh: '晚安。哪一個是推薦的呢？',
      en: 'Good evening. Which one do you recommend?'
    },
    {
      speaker: 'staff',
      jp: '大根と卵がよく出ますよ。味がよく染みています。',
      say: 'だいこんとたまごがよく出ますよ。味がよく染みています。',
      ruby: '<ruby>大根<rt>だいこん</rt></ruby>と<ruby>卵<rt>たまご</rt></ruby>がよく<ruby>出<rt>で</rt></ruby>ますよ。<ruby>味<rt>あじ</rt></ruby>がよく<ruby>染<rt>し</rt></ruby>みています。',
      romaji: 'Daikon to tamago ga yoku demasu yo. Aji ga yoku shimite imasu.',
      zh: '蘿蔔和蛋很受歡迎喔，很入味。',
      en: 'The radish and egg sell well. They soak up the flavor nicely.'
    },
    {
      speaker: 'you',
      jp: 'じゃあ、大根と卵をください。',
      say: 'じゃあ、だいこんとたまごをください。',
      ruby: 'じゃあ、<ruby>大根<rt>だいこん</rt></ruby>と<ruby>卵<rt>たまご</rt></ruby>をください。',
      romaji: 'Jā, daikon to tamago o kudasai.',
      zh: '那麼，請給我蘿蔔和蛋。',
      en: "Then I'll have the radish and egg, please."
    },
    {
      speaker: 'you',
      jp: 'これは何ですか？',
      ruby: 'これは<ruby>何<rt>なん</rt></ruby>ですか？',
      romaji: 'Kore wa nan desu ka?',
      zh: '這個是什麼？',
      en: 'What is this?'
    },
    {
      speaker: 'staff',
      jp: 'それは餅巾着です。中にお餅が入っています。',
      say: 'それはもちきんちゃくです。中にお餅が入っています。',
      ruby: 'それは<ruby>餅巾着<rt>もちきんちゃく</rt></ruby>です。<ruby>中<rt>なか</rt></ruby>にお<ruby>餅<rt>もち</rt></ruby>が<ruby>入<rt>はい</rt></ruby>っています。',
      romaji: 'Sore wa mochi-kinchaku desu. Naka ni o-mochi ga haitte imasu.',
      zh: '那是麻糬福袋，裡面包著麻糬。',
      en: "That's a mochi pouch. There's rice cake inside."
    },
    {
      speaker: 'you',
      jp: 'おいしそうですね。それと牛すじもください。',
      say: 'おいしそうですね。それとぎゅうすじもください。',
      ruby: 'おいしそうですね。それと<ruby>牛<rt>ぎゅう</rt></ruby>すじもください。',
      romaji: 'Oishisō desu ne. Sore to gyū-suji mo kudasai.',
      zh: '看起來很好吃呢。還有也請給我牛筋。',
      en: 'That looks good. The beef tendon too, please.'
    },
    {
      speaker: 'you',
      jp: 'すみません、辛子をつけてください。',
      say: 'すみません、からしをつけてください。',
      ruby: 'すみません、<ruby>辛子<rt>からし</rt></ruby>をつけてください。',
      romaji: 'Sumimasen, karashi o tsukete kudasai.',
      zh: '不好意思，請幫我加黃芥末。',
      en: 'Excuse me, please add some mustard.'
    },
    {
      speaker: 'staff',
      jp: 'はい。出汁はお椀につけますか？',
      say: 'はい。だしはお椀につけますか？',
      ruby: 'はい。<ruby>出汁<rt>だし</rt></ruby>はお<ruby>椀<rt>わん</rt></ruby>につけますか？',
      romaji: 'Hai. Dashi wa o-wan ni tsukemasu ka?',
      zh: '好的。要在碗裡加湯汁嗎？',
      en: 'Sure. Shall I add broth to your bowl?'
    },
    {
      speaker: 'you',
      jp: 'はい、出汁を少し足してもらえますか？',
      say: 'はい、だしを少し足してもらえますか？',
      ruby: 'はい、<ruby>出汁<rt>だし</rt></ruby>を<ruby>少<rt>すこ</rt></ruby>し<ruby>足<rt>た</rt></ruby>してもらえますか？',
      romaji: 'Hai, dashi o sukoshi tashite moraemasu ka?',
      zh: '好的，可以幫我加一點湯汁嗎？',
      en: 'Yes, could you add a little broth?'
    },
    {
      speaker: 'staff',
      jp: 'かしこまりました。他にご注文は？',
      ruby: 'かしこまりました。<ruby>他<rt>ほか</rt></ruby>にご<ruby>注文<rt>ちゅうもん</rt></ruby>は？',
      romaji: 'Kashikomarimashita. Hoka ni go-chūmon wa?',
      zh: '好的。還需要點別的嗎？',
      en: 'Certainly. Anything else?'
    },
    {
      speaker: 'you',
      jp: 'いいえ、大丈夫です。お会計お願いします。',
      ruby: 'いいえ、<ruby>大丈夫<rt>だいじょうぶ</rt></ruby>です。お<ruby>会計<rt>かいけい</rt></ruby>お<ruby>願<rt>ねが</rt></ruby>いします。',
      romaji: 'Iie, daijōbu desu. O-kaikei onegai shimasu.',
      zh: '不用了，這樣就好。麻煩結帳。',
      en: "No, that's all. The bill, please."
    }
  ],
  menu: [
    {
      title: '定番の具 · Classic items',
      items: [
        { emoji: '🥬', jp: '大根', say: 'だいこん', ruby: '<ruby>大根<rt>だいこん</rt></ruby>', romaji: 'daikon', zh: '白蘿蔔', en: 'daikon radish', desc: '燉到透明軟爛的白蘿蔔，吸滿高湯，是關東煮的人氣王。' },
        { emoji: '🥚', jp: '卵', say: 'たまご', ruby: '<ruby>卵<rt>たまご</rt></ruby>', romaji: 'tamago', zh: '水煮蛋', en: 'boiled egg', desc: '整顆水煮蛋慢燉入味，蛋黃染上淡淡醬色。' },
        { emoji: '🟤', jp: 'こんにゃく', ruby: 'こんにゃく', romaji: 'konnyaku', zh: '蒟蒻', en: 'konjac', desc: '彈牙有嚼勁的蒟蒻，低熱量又吸湯汁。' },
        { emoji: '🍥', jp: 'ちくわ', ruby: 'ちくわ', romaji: 'chikuwa', zh: '竹輪', en: 'tube fish cake', desc: '中空筒狀的魚漿製品，烤香後燉煮，口感Q彈。' },
        { emoji: '⬜', jp: 'はんぺん', ruby: 'はんぺん', romaji: 'hanpen', zh: '魚板（半片）', en: 'fish cake', desc: '加入山藥打發的鬆軟魚漿製品，入口即化、口感蓬鬆。' },
        { emoji: '🟡', jp: 'がんもどき', ruby: 'がんもどき', romaji: 'ganmodoki', zh: '炸豆腐丸', en: 'fried tofu fritter', desc: '豆腐混蔬菜油炸成丸，吸飽高湯後鬆軟多汁。' },
        { emoji: '🟠', jp: 'さつま揚げ', say: 'さつまあげ', ruby: 'さつま<ruby>揚<rt>あ</rt></ruby>げ', romaji: 'satsuma-age', zh: '炸魚餅', en: 'fried fish cake', desc: '油炸魚漿餅，帶有香氣與彈性，鹹鮮夠味。' },
        { emoji: '🟫', jp: '厚揚げ', say: 'あつあげ', ruby: '<ruby>厚揚<rt>あつあ</rt></ruby>げ', romaji: 'atsu-age', zh: '炸豆腐', en: 'thick fried tofu', desc: '外炸內嫩的厚切油豆腐，吸湯後外韌內軟。' },
        { emoji: '⬜', jp: '焼き豆腐', say: 'やきどうふ', ruby: '<ruby>焼<rt>や</rt></ruby>き<ruby>豆腐<rt>どうふ</rt></ruby>', romaji: 'yaki-dōfu', zh: '烤豆腐', en: 'grilled tofu', desc: '表面烤過的豆腐，較不易散，帶淡淡焦香。' },
        { emoji: '🟩', jp: '昆布', say: 'こんぶ', ruby: '<ruby>昆布<rt>こんぶ</rt></ruby>', romaji: 'konbu', zh: '昆布', en: 'kelp', desc: '打結的昆布，本身既是配料也為高湯增添鮮味。' },
        { emoji: '🥔', jp: 'じゃがいも', ruby: 'じゃがいも', romaji: 'jagaimo', zh: '馬鈴薯', en: 'potato', desc: '整顆馬鈴薯燉到鬆軟綿密，吸滿高湯。' },
        { emoji: '🥬', jp: 'ロールキャベツ', ruby: 'ロールキャベツ', romaji: 'rōru-kyabetsu', zh: '高麗菜捲', en: 'cabbage roll', desc: '高麗菜包肉餡燉煮，吸飽高湯後柔軟多汁。' }
      ]
    },
    {
      title: '練り物 · Fish-cake items',
      items: [
        { emoji: '🍡', jp: 'つみれ', ruby: 'つみれ', romaji: 'tsumire', zh: '魚肉丸', en: 'fish dumpling', desc: '沙丁魚等魚漿捏成的丸子，鮮味濃郁、略帶魚腥香。' },
        { emoji: '🍢', jp: 'つくね', ruby: 'つくね', romaji: 'tsukune', zh: '雞肉丸', en: 'chicken meatball', desc: '雞絞肉做成的肉丸，比魚漿丸更紮實有肉感。' },
        { emoji: '🟫', jp: 'ちくわぶ', ruby: 'ちくわぶ', romaji: 'chikuwabu', zh: '竹輪麩', en: 'wheat-gluten chikuwa', desc: '麵粉製成的竹輪狀關東煮料，東京特有，口感Q糯吸湯。' },
        { emoji: '🍢', jp: 'ごぼう巻き', say: 'ごぼうまき', ruby: 'ごぼう<ruby>巻<rt>ま</rt></ruby>き', romaji: 'gobō-maki', zh: '牛蒡魚漿捲', en: 'burdock fish roll', desc: '牛蒡用魚漿包捲油炸，咬下脆甜帶嚼勁。' },
        { emoji: '🟧', jp: '平天', say: 'ひらてん', ruby: '<ruby>平天<rt>ひらてん</rt></ruby>', romaji: 'hiraten', zh: '扁形炸魚餅', en: 'flat fish cake', desc: '扁平狀的油炸魚漿餅，關西常見，鹹鮮易入味。' },
        { emoji: '🦑', jp: 'イカ巻き', say: 'いかまき', ruby: 'イカ<ruby>巻<rt>ま</rt></ruby>き', romaji: 'ika-maki', zh: '花枝魚漿捲', en: 'squid fish roll', desc: '花枝塊裹入魚漿油炸，海味十足又彈牙。' },
        { emoji: '🐙', jp: 'たこ天', say: 'たこてん', ruby: 'たこ<ruby>天<rt>てん</rt></ruby>', romaji: 'tako-ten', zh: '章魚魚漿餅', en: 'octopus fish cake', desc: '混入章魚塊的炸魚漿餅，吃得到Q彈章魚粒。' }
      ]
    },
    {
      title: '肉・変わり種 · Meat & specials',
      items: [
        { emoji: '🍖', jp: '牛すじ', say: 'ぎゅうすじ', ruby: '<ruby>牛<rt>ぎゅう</rt></ruby>すじ', romaji: 'gyū-suji', zh: '牛筋', en: 'beef tendon', desc: '串成串的牛筋，久燉後膠質滿滿、軟糯入味。' },
        { emoji: '🥓', jp: '豚バラ串', say: 'ぶたバラぐし', ruby: '<ruby>豚<rt>ぶた</rt></ruby>バラ<ruby>串<rt>ぐし</rt></ruby>', romaji: 'buta-bara-gushi', zh: '豬五花串', en: 'pork belly skewer', desc: '豬五花串成串燉煮，油脂在高湯中化開、香濃多汁。' },
        { emoji: '🌭', jp: 'ウインナー', ruby: 'ウインナー', romaji: 'uinnā', zh: '小香腸', en: 'sausage', desc: '小香腸串，鹹香多汁，便利商店關東煮的人氣品項。' },
        { emoji: '👝', jp: '餅巾着', say: 'もちきんちゃく', ruby: '<ruby>餅巾着<rt>もちきんちゃく</rt></ruby>', romaji: 'mochi-kinchaku', zh: '麻糬福袋', en: 'mochi pouch', desc: '油豆腐袋裡包麻糬綁成福袋狀，咬開拉絲又燙口。' },
        { emoji: '🐙', jp: 'たこ', ruby: 'たこ', romaji: 'tako', zh: '章魚', en: 'octopus', desc: '燉煮章魚腳，彈牙有嚼勁、海味十足。' },
        { emoji: '🥚', jp: 'たまご巾着', say: 'たまごきんちゃく', ruby: 'たまご<ruby>巾着<rt>きんちゃく</rt></ruby>', romaji: 'tamago-kinchaku', zh: '雞蛋福袋', en: 'egg pouch', desc: '油豆腐袋裡打入生蛋綁成福袋，煮熟後咬開蛋液濃稠。' },
        { emoji: '🍅', jp: 'トマト', ruby: 'トマト', romaji: 'tomato', zh: '番茄', en: 'tomato', desc: '整顆去皮番茄燉於高湯中，酸甜多汁的新派配料。' },
        { emoji: '🥓', jp: '厚切りベーコン', say: 'あつぎりベーコン', ruby: '<ruby>厚切<rt>あつぎ</rt></ruby>りベーコン', romaji: 'atsugiri-bēkon', zh: '厚切培根', en: 'thick-cut bacon', desc: '厚塊培根燉入高湯，鹹香油潤、為湯頭增添煙燻味。' }
      ]
    },
    {
      title: '薬味・〆 · Condiments & finish',
      items: [
        { emoji: '🟡', jp: '辛子', say: 'からし', ruby: '<ruby>辛子<rt>からし</rt></ruby>', romaji: 'karashi', zh: '黃芥末', en: 'hot mustard', desc: '嗆辣的日式黃芥末，沾關東煮提味解膩的經典佐料。' },
        { emoji: '🍶', jp: '出汁', say: 'だし', ruby: '<ruby>出汁<rt>だし</rt></ruby>', romaji: 'dashi', zh: '高湯', en: 'broth', desc: '燉煮關東煮的鰹魚昆布高湯，可舀進碗裡一起喝。' },
        { emoji: '🍚', jp: '雑炊', say: 'ぞうすい', ruby: '<ruby>雑炊<rt>ぞうすい</rt></ruby>', romaji: 'zōsui', zh: '雜炊（鹹粥）', en: 'rice porridge', desc: '用剩下的關東煮高湯煮成的鹹粥，是暖胃的收尾吃法。' },
        { emoji: '🍙', jp: 'おにぎり', ruby: 'おにぎり', romaji: 'onigiri', zh: '飯糰', en: 'rice ball', desc: '配關東煮的白飯糰，可泡進高湯做成茶泡飯式收尾。' }
      ]
    }
  ],
  phrases: [
    {
      title: 'よく使う一言 · Handy phrases',
      items: [
        { jp: 'おすすめはどれですか？', ruby: 'おすすめはどれですか？', zh: '哪一個是推薦的呢？', en: 'Which one do you recommend?' },
        { jp: 'これは何ですか？', ruby: 'これは<ruby>何<rt>なん</rt></ruby>ですか？', zh: '這個是什麼？', en: 'What is this?' },
        { jp: '大根をください。', say: 'だいこんをください。', ruby: '<ruby>大根<rt>だいこん</rt></ruby>をください。', zh: '請給我蘿蔔。', en: 'The radish, please.' },
        { jp: '辛子をつけてください。', say: 'からしをつけてください。', ruby: '<ruby>辛子<rt>からし</rt></ruby>をつけてください。', zh: '請幫我加黃芥末。', en: 'Please add mustard.' },
        { jp: '盛り合わせはありますか？', ruby: '<ruby>盛<rt>も</rt></ruby>り<ruby>合<rt>あ</rt></ruby>わせはありますか？', zh: '有綜合拼盤嗎？', en: 'Do you have an assortment?' },
        { jp: 'お会計お願いします。', ruby: 'お<ruby>会計<rt>かいけい</rt></ruby>お<ruby>願<rt>ねが</rt></ruby>いします。', zh: '麻煩結帳。', en: 'The bill, please.' }
      ]
    }
  ]
}
