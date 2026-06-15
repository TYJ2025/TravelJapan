// 寿司屋 (Sushi bar) — ordering at the counter, neta, wasabi, seasonal fish.
export const sushi = {
  id: 'sushi',
  title: 'At a Sushi Bar',
  titleJp: 'お寿司屋さんで',
  emoji: '🍣',
  description: 'Order piece by piece at the counter — recommendations, wasabi, seasonal fish.',
  lines: [
    {
      speaker: 'staff',
      jp: 'いらっしゃい！お一人様ですか？',
      ruby: 'いらっしゃい！お<ruby>一人様<rt>ひとりさま</rt></ruby>ですか？',
      romaji: 'Irasshai! O-hitori-sama desu ka?',
      zh: '歡迎光臨!您一位嗎?',
      en: 'Welcome! Just one person?'
    },
    {
      speaker: 'you',
      jp: 'はい、一人です。カウンターでお願いします。',
      ruby: 'はい、<ruby>一人<rt>ひとり</rt></ruby>です。カウンターでお<ruby>願<rt>ねが</rt></ruby>いします。',
      romaji: 'Hai, hitori desu. Kauntā de onegai shimasu.',
      zh: '是的,一個人。請給我吧台座位。',
      en: "Yes, one person. At the counter, please."
    },
    {
      speaker: 'staff',
      jp: 'どうぞ。お飲み物は何にしますか？',
      ruby: 'どうぞ。お<ruby>飲<rt>の</rt></ruby>み<ruby>物<rt>もの</rt></ruby>は<ruby>何<rt>なに</rt></ruby>にしますか？',
      romaji: 'Dōzo. O-nomimono wa nani ni shimasu ka?',
      zh: '請坐。您想喝什麼飲料呢?',
      en: 'Please sit. What would you like to drink?'
    },
    {
      speaker: 'you',
      jp: 'あがりをください。あと、おしぼりをもらえますか？',
      ruby: 'あがりをください。あと、おしぼりをもらえますか？',
      romaji: 'Agari o kudasai. Ato, o-shibori o moraemasu ka?',
      zh: '請給我綠茶。另外,可以給我一條濕毛巾嗎?',
      en: 'Green tea please. Also, could I get a hand towel?'
    },
    {
      speaker: 'staff',
      jp: 'はい、どうぞ。何から握りましょう？',
      ruby: 'はい、どうぞ。<ruby>何<rt>なに</rt></ruby>から<ruby>握<rt>にぎ</rt></ruby>りましょう？',
      romaji: 'Hai, dōzo. Nani kara nigirimashō?',
      zh: '來,請用。要先幫您捏哪一種呢?',
      en: 'Here you go. What shall I make first?'
    },
    {
      speaker: 'you',
      jp: '今日のおすすめは何ですか？',
      ruby: '<ruby>今日<rt>きょう</rt></ruby>のおすすめは<ruby>何<rt>なん</rt></ruby>ですか？',
      romaji: "Kyō no osusume wa nan desu ka?",
      zh: '今天有什麼推薦的呢?',
      en: "What's today's recommendation?"
    },
    {
      speaker: 'staff',
      jp: '今日はマグロとヒラメがいいですよ。',
      ruby: '<ruby>今日<rt>きょう</rt></ruby>は<ruby>鮪<rt>マグロ</rt></ruby>と<ruby>平目<rt>ヒラメ</rt></ruby>がいいですよ。',
      romaji: 'Kyō wa maguro to hirame ga ii desu yo.',
      zh: '今天的鮪魚和比目魚都很不錯喔。',
      en: 'Today the tuna and the flounder are good.'
    },
    {
      speaker: 'you',
      jp: 'じゃあ、マグロを二貫ください。',
      ruby: 'じゃあ、<ruby>鮪<rt>マグロ</rt></ruby>を<ruby>二貫<rt>にかん</rt></ruby>ください。',
      romaji: 'Jā, maguro o ni-kan kudasai.',
      zh: '那麼,請給我兩貫鮪魚。',
      en: 'Then, two pieces of tuna please.'
    },
    {
      speaker: 'you',
      jp: 'サーモンとイカも一貫ずつ、わさび抜きでお願いします。',
      ruby: 'サーモンとイカも<ruby>一貫<rt>いっかん</rt></ruby>ずつ、わさび<ruby>抜<rt>ぬ</rt></ruby>きでお<ruby>願<rt>ねが</rt></ruby>いします。',
      romaji: 'Sāmon to ika mo ikkan zutsu, wasabi-nuki de onegai shimasu.',
      zh: '鮭魚和花枝也各來一貫,請不要加芥末。',
      en: 'One salmon and one squid each too, without wasabi please.'
    },
    {
      speaker: 'staff',
      jp: 'サビ抜きですね、了解です。',
      ruby: 'サビ<ruby>抜<rt>ぬ</rt></ruby>きですね、<ruby>了解<rt>りょうかい</rt></ruby>です。',
      romaji: 'Sabi-nuki desu ne, ryōkai desu.',
      zh: '不加芥末對吧,了解了。',
      en: 'No wasabi, got it.'
    },
    {
      speaker: 'you',
      jp: 'この白い魚は何ですか？',
      ruby: 'この<ruby>白<rt>しろ</rt></ruby>い<ruby>魚<rt>さかな</rt></ruby>は<ruby>何<rt>なん</rt></ruby>ですか？',
      romaji: 'Kono shiroi sakana wa nan desu ka?',
      zh: '這個白色的魚是什麼?',
      en: 'What is this white fish?'
    },
    {
      speaker: 'staff',
      jp: 'それはタイです。今が旬ですよ。',
      ruby: 'それは<ruby>鯛<rt>タイ</rt></ruby>です。<ruby>今<rt>いま</rt></ruby>が<ruby>旬<rt>しゅん</rt></ruby>ですよ。',
      romaji: 'Sore wa tai desu. Ima ga shun desu yo.',
      zh: '那是鯛魚。現在正是當季喔。',
      en: "That's sea bream. It's in season right now."
    },
    {
      speaker: 'you',
      jp: 'じゃあ、それも一貫ください。',
      ruby: 'じゃあ、それも<ruby>一貫<rt>いっかん</rt></ruby>ください。',
      romaji: 'Jā, sore mo ikkan kudasai.',
      zh: '那麼,那個也請給我一貫。',
      en: "Then I'll have one of those too."
    },
    {
      speaker: 'you',
      jp: 'お腹いっぱいになりました。お会計お願いします。',
      ruby: 'お<ruby>腹<rt>なか</rt></ruby>いっぱいになりました。お<ruby>会計<rt>かいけい</rt></ruby>お<ruby>願<rt>ねが</rt></ruby>いします。',
      romaji: 'O-naka ippai ni narimashita. O-kaikei onegai shimasu.',
      zh: '我吃飽了。麻煩幫我結帳。',
      en: "I'm full. The bill, please."
    },
    {
      speaker: 'staff',
      jp: 'はい、全部で二千八百円です。',
      ruby: 'はい、<ruby>全部<rt>ぜんぶ</rt></ruby>で<ruby>二千八百円<rt>にせんはっぴゃくえん</rt></ruby>です。',
      romaji: 'Hai, zenbu de nisen-happyaku-en desu.',
      zh: '好的,全部總共是兩千八百日圓。',
      en: "Yes, that's 2,800 yen in total."
    },
    {
      speaker: 'you',
      jp: 'ごちそうさまでした。とても美味しかったです。',
      ruby: 'ごちそうさまでした。とても<ruby>美味<rt>おい</rt></ruby>しかったです。',
      romaji: 'Gochisōsama deshita. Totemo oishikatta desu.',
      zh: '謝謝招待。非常好吃。',
      en: 'Thank you for the meal. It was delicious.'
    }
  ],
  menu: [
    {
      title: 'マグロ・赤身 · Tuna & red fish',
      items: [
        { emoji: '🍣', jp: 'マグロ', ruby: 'マグロ', romaji: 'maguro', zh: '鮪魚（赤身）', en: 'lean tuna' },
        { emoji: '🍣', jp: '中トロ', say: 'ちゅうトロ', ruby: '<ruby>中<rt>ちゅう</rt></ruby>トロ', romaji: 'chū-toro', zh: '中腹鮪魚', en: 'medium fatty tuna' },
        { emoji: '🍣', jp: '大トロ', say: 'おおトロ', ruby: '<ruby>大<rt>おお</rt></ruby>トロ', romaji: 'ō-toro', zh: '大腹鮪魚', en: 'fattiest tuna belly' },
        { emoji: '🍣', jp: 'ネギトロ', ruby: 'ネギトロ', romaji: 'negitoro', zh: '蔥花鮪魚泥', en: 'minced fatty tuna & leek' },
        { emoji: '🐟', jp: 'カツオ', ruby: 'カツオ', romaji: 'katsuo', zh: '鰹魚', en: 'bonito' },
        { emoji: '🍣', jp: '鉄火巻き', say: 'てっかまき', ruby: '<ruby>鉄火<rt>てっか</rt></ruby><ruby>巻<rt>ま</rt></ruby>き', romaji: 'tekka-maki', zh: '鮪魚捲', en: 'tuna roll' }
      ]
    },
    {
      title: '白身魚 · White fish',
      items: [
        { emoji: '🐟', jp: '鯛', say: 'たい', ruby: '<ruby>鯛<rt>たい</rt></ruby>', romaji: 'tai', zh: '鯛魚', en: 'sea bream' },
        { emoji: '🐟', jp: 'ヒラメ', ruby: 'ヒラメ', romaji: 'hirame', zh: '比目魚', en: 'flounder' },
        { emoji: '🐟', jp: 'エンガワ', ruby: 'エンガワ', romaji: 'engawa', zh: '比目魚鰭邊', en: 'flounder fin' },
        { emoji: '🐟', jp: 'カンパチ', ruby: 'カンパチ', romaji: 'kanpachi', zh: '紅甘鰺', en: 'amberjack' },
        { emoji: '🐟', jp: 'ハマチ', ruby: 'ハマチ', romaji: 'hamachi', zh: '青甘魚', en: 'young yellowtail' },
        { emoji: '🐟', jp: 'ブリ', ruby: 'ブリ', romaji: 'buri', zh: '鰤魚', en: 'yellowtail' },
        { emoji: '🐟', jp: 'スズキ', ruby: 'スズキ', romaji: 'suzuki', zh: '鱸魚', en: 'sea bass' },
        { emoji: '🐟', jp: '金目鯛', say: 'きんめだい', ruby: '<ruby>金目鯛<rt>きんめだい</rt></ruby>', romaji: 'kinmedai', zh: '金目鯛', en: 'splendid alfonsino' },
        { emoji: '🐟', jp: 'のどぐろ', ruby: 'のどぐろ', romaji: 'nodoguro', zh: '喉黑魚', en: 'blackthroat seaperch' }
      ]
    },
    {
      title: '光り物 · Silver-skinned fish',
      items: [
        { emoji: '🐟', jp: 'サバ', ruby: 'サバ', romaji: 'saba', zh: '鯖魚', en: 'mackerel' },
        { emoji: '🐟', jp: 'アジ', ruby: 'アジ', romaji: 'aji', zh: '竹筴魚', en: 'horse mackerel' },
        { emoji: '🐟', jp: 'イワシ', ruby: 'イワシ', romaji: 'iwashi', zh: '沙丁魚', en: 'sardine' },
        { emoji: '🐟', jp: 'コハダ', ruby: 'コハダ', romaji: 'kohada', zh: '窩斑鰶（小鰭）', en: 'gizzard shad' },
        { emoji: '🐟', jp: 'サンマ', ruby: 'サンマ', romaji: 'sanma', zh: '秋刀魚', en: 'pacific saury' }
      ]
    },
    {
      title: 'サーモン・その他の魚 · Salmon & others',
      items: [
        { emoji: '🍣', jp: 'サーモン', ruby: 'サーモン', romaji: 'sāmon', zh: '鮭魚', en: 'salmon' },
        { emoji: '🔥', jp: '炙りサーモン', say: 'あぶりサーモン', ruby: '<ruby>炙<rt>あぶ</rt></ruby>りサーモン', romaji: 'aburi-sāmon', zh: '炙燒鮭魚', en: 'seared salmon' },
        { emoji: '🐟', jp: 'ウナギ', ruby: 'ウナギ', romaji: 'unagi', zh: '鰻魚', en: 'freshwater eel' },
        { emoji: '🍣', jp: '穴子', say: 'あなご', ruby: '<ruby>穴子<rt>あなご</rt></ruby>', romaji: 'anago', zh: '星鰻', en: 'sea eel' },
        { emoji: '🐟', jp: 'タチウオ', ruby: 'タチウオ', romaji: 'tachiuo', zh: '白帶魚', en: 'cutlassfish' }
      ]
    },
    {
      title: '貝・海老・蟹 · Shellfish, shrimp & crab',
      items: [
        { emoji: '🍤', jp: 'エビ', ruby: 'エビ', romaji: 'ebi', zh: '蝦', en: 'shrimp' },
        { emoji: '🦐', jp: '甘エビ', say: 'あまエビ', ruby: '<ruby>甘<rt>あま</rt></ruby>エビ', romaji: 'ama-ebi', zh: '甜蝦', en: 'sweet shrimp' },
        { emoji: '🦐', jp: 'ボタンエビ', ruby: 'ボタンエビ', romaji: 'botan-ebi', zh: '牡丹蝦', en: 'botan shrimp' },
        { emoji: '🐚', jp: 'ホタテ', ruby: 'ホタテ', romaji: 'hotate', zh: '干貝', en: 'scallop' },
        { emoji: '🐚', jp: 'アカガイ', ruby: 'アカガイ', romaji: 'akagai', zh: '赤貝', en: 'ark shell' },
        { emoji: '🐚', jp: 'ホッキ貝', say: 'ホッキがい', ruby: 'ホッキ<ruby>貝<rt>がい</rt></ruby>', romaji: 'hokkigai', zh: '北寄貝', en: 'surf clam' },
        { emoji: '🐚', jp: 'ツブ貝', say: 'ツブがい', ruby: 'ツブ<ruby>貝<rt>がい</rt></ruby>', romaji: 'tsubugai', zh: '海螺', en: 'whelk' },
        { emoji: '🦪', jp: 'カキ', ruby: 'カキ', romaji: 'kaki', zh: '牡蠣', en: 'oyster' },
        { emoji: '🦀', jp: 'カニ', ruby: 'カニ', romaji: 'kani', zh: '螃蟹', en: 'crab' },
        { emoji: '🦑', jp: 'イカ', ruby: 'イカ', romaji: 'ika', zh: '花枝', en: 'squid' },
        { emoji: '🐙', jp: 'タコ', ruby: 'タコ', romaji: 'tako', zh: '章魚', en: 'octopus' }
      ]
    },
    {
      title: '軍艦・卵・巻物 · Gunkan, roe & rolls',
      items: [
        { emoji: '🍣', jp: 'ウニ', ruby: 'ウニ', romaji: 'uni', zh: '海膽', en: 'sea urchin' },
        { emoji: '🍣', jp: 'イクラ', ruby: 'イクラ', romaji: 'ikura', zh: '鮭魚卵', en: 'salmon roe' },
        { emoji: '🍣', jp: 'とびこ', ruby: 'とびこ', romaji: 'tobiko', zh: '飛魚卵', en: 'flying fish roe' },
        { emoji: '🍣', jp: '数の子', say: 'かずのこ', ruby: '<ruby>数<rt>かず</rt></ruby>の<ruby>子<rt>こ</rt></ruby>', romaji: 'kazunoko', zh: '鯡魚卵', en: 'herring roe' },
        { emoji: '🍳', jp: '玉子', say: 'たまご', ruby: '<ruby>玉子<rt>たまご</rt></ruby>', romaji: 'tamago', zh: '玉子燒', en: 'sweet egg' },
        { emoji: '🥒', jp: 'かっぱ巻き', say: 'かっぱまき', ruby: 'かっぱ<ruby>巻<rt>ま</rt></ruby>き', romaji: 'kappa-maki', zh: '小黃瓜捲', en: 'cucumber roll' },
        { emoji: '🍣', jp: '納豆巻き', say: 'なっとうまき', ruby: '<ruby>納豆<rt>なっとう</rt></ruby><ruby>巻<rt>ま</rt></ruby>き', romaji: 'nattō-maki', zh: '納豆捲', en: 'natto roll' },
        { emoji: '🍣', jp: 'かんぴょう巻き', say: 'かんぴょうまき', ruby: 'かんぴょう<ruby>巻<rt>ま</rt></ruby>き', romaji: 'kanpyō-maki', zh: '葫蘆乾捲', en: 'dried gourd roll' }
      ]
    }
  ],
  phrases: [
    {
      title: 'お寿司屋さんで · At the sushi counter',
      items: [
        { jp: 'お任せでお願いします。', ruby: 'お<ruby>任<rt>まか</rt></ruby>せでお<ruby>願<rt>ねが</rt></ruby>いします。', zh: '請幫我配（廚師發辦）。', en: "Chef's choice, please." },
        { jp: 'サビ抜きでお願いします。', ruby: 'サビ<ruby>抜<rt>ぬ</rt></ruby>きでお<ruby>願<rt>ねが</rt></ruby>いします。', zh: '請不要加芥末。', en: 'Without wasabi, please.' },
        { jp: 'ガリをもっとください。', ruby: 'ガリをもっとください。', zh: '請多給我一些薑片。', en: 'More pickled ginger, please.' },
        { jp: 'あがりをください。', ruby: 'あがりをください。', zh: '請給我（壽司店的）茶。', en: 'Green tea, please.' },
        { jp: 'これは何の魚ですか？', ruby: 'これは<ruby>何<rt>なん</rt></ruby>の<ruby>魚<rt>さかな</rt></ruby>ですか？', zh: '這是什麼魚?', en: 'What fish is this?' },
        { jp: '一貫ずつでもいいですか？', ruby: '<ruby>一貫<rt>いっかん</rt></ruby>ずつでもいいですか？', zh: '可以一貫一貫點嗎?', en: 'Can I order one piece at a time?' },
        { jp: '今日のおすすめはどれですか？', ruby: '<ruby>今日<rt>きょう</rt></ruby>のおすすめはどれですか？', zh: '今天推薦哪一個?', en: "Which is today's recommendation?" }
      ]
    }
  ]
}
