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
      title: 'ネタ · Sushi toppings',
      items: [
        { emoji: '🍣', jp: 'マグロ', ruby: 'マグロ', romaji: 'maguro', zh: '鮪魚', en: 'tuna' },
        { emoji: '🍣', jp: '中トロ', say: 'ちゅうトロ', ruby: '<ruby>中<rt>ちゅう</rt></ruby>トロ', romaji: 'chū-toro', zh: '中腹鮪魚', en: 'medium fatty tuna' },
        { emoji: '🍣', jp: 'サーモン', ruby: 'サーモン', romaji: 'sāmon', zh: '鮭魚', en: 'salmon' },
        { emoji: '🍣', jp: 'ハマチ', ruby: 'ハマチ', romaji: 'hamachi', zh: '青甘魚', en: 'young yellowtail' },
        { emoji: '🐟', jp: '鯛', say: 'たい', ruby: '<ruby>鯛<rt>たい</rt></ruby>', romaji: 'tai', zh: '鯛魚', en: 'sea bream' },
        { emoji: '🦑', jp: 'イカ', ruby: 'イカ', romaji: 'ika', zh: '花枝', en: 'squid' },
        { emoji: '🐙', jp: 'タコ', ruby: 'タコ', romaji: 'tako', zh: '章魚', en: 'octopus' },
        { emoji: '🍤', jp: 'エビ', ruby: 'エビ', romaji: 'ebi', zh: '蝦', en: 'shrimp' },
        { emoji: '🐚', jp: 'ホタテ', ruby: 'ホタテ', romaji: 'hotate', zh: '干貝', en: 'scallop' },
        { emoji: '🍣', jp: 'ウニ', ruby: 'ウニ', romaji: 'uni', zh: '海膽', en: 'sea urchin' },
        { emoji: '🍣', jp: 'イクラ', ruby: 'イクラ', romaji: 'ikura', zh: '鮭魚卵', en: 'salmon roe' },
        { emoji: '🍣', jp: '穴子', say: 'あなご', ruby: '<ruby>穴子<rt>あなご</rt></ruby>', romaji: 'anago', zh: '星鰻', en: 'sea eel' },
        { emoji: '🍳', jp: '玉子', say: 'たまご', ruby: '<ruby>玉子<rt>たまご</rt></ruby>', romaji: 'tamago', zh: '玉子燒', en: 'sweet egg' },
        { emoji: '🍣', jp: 'ネギトロ', ruby: 'ネギトロ', romaji: 'negitoro', zh: '蔥花鮪魚', en: 'minced fatty tuna' }
      ]
    }
  ]
}
