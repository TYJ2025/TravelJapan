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
      en: 'Welcome! Just one person?'
    },
    {
      speaker: 'you',
      jp: 'はい、一人です。カウンターでお願いします。',
      ruby: 'はい、<ruby>一人<rt>ひとり</rt></ruby>です。カウンターでお<ruby>願<rt>ねが</rt></ruby>いします。',
      romaji: 'Hai, hitori desu. Kauntā de onegai shimasu.',
      en: "Yes, one person. At the counter, please."
    },
    {
      speaker: 'staff',
      jp: 'どうぞ。お飲み物は何にしますか？',
      ruby: 'どうぞ。お<ruby>飲<rt>の</rt></ruby>み<ruby>物<rt>もの</rt></ruby>は<ruby>何<rt>なに</rt></ruby>にしますか？',
      romaji: 'Dōzo. O-nomimono wa nani ni shimasu ka?',
      en: 'Please sit. What would you like to drink?'
    },
    {
      speaker: 'you',
      jp: 'あがりをください。あと、おしぼりをもらえますか？',
      ruby: 'あがりをください。あと、おしぼりをもらえますか？',
      romaji: 'Agari o kudasai. Ato, o-shibori o moraemasu ka?',
      en: 'Green tea please. Also, could I get a hand towel?'
    },
    {
      speaker: 'staff',
      jp: 'はい、どうぞ。何から握りましょう？',
      ruby: 'はい、どうぞ。<ruby>何<rt>なに</rt></ruby>から<ruby>握<rt>にぎ</rt></ruby>りましょう？',
      romaji: 'Hai, dōzo. Nani kara nigirimashō?',
      en: 'Here you go. What shall I make first?'
    },
    {
      speaker: 'you',
      jp: '今日のおすすめは何ですか？',
      ruby: '<ruby>今日<rt>きょう</rt></ruby>のおすすめは<ruby>何<rt>なん</rt></ruby>ですか？',
      romaji: "Kyō no osusume wa nan desu ka?",
      en: "What's today's recommendation?"
    },
    {
      speaker: 'staff',
      jp: '今日はマグロとヒラメがいいですよ。',
      ruby: '<ruby>今日<rt>きょう</rt></ruby>は<ruby>鮪<rt>マグロ</rt></ruby>と<ruby>平目<rt>ヒラメ</rt></ruby>がいいですよ。',
      romaji: 'Kyō wa maguro to hirame ga ii desu yo.',
      en: 'Today the tuna and the flounder are good.'
    },
    {
      speaker: 'you',
      jp: 'じゃあ、マグロを二貫ください。',
      ruby: 'じゃあ、<ruby>鮪<rt>マグロ</rt></ruby>を<ruby>二貫<rt>にかん</rt></ruby>ください。',
      romaji: 'Jā, maguro o ni-kan kudasai.',
      en: 'Then, two pieces of tuna please.'
    },
    {
      speaker: 'you',
      jp: 'サーモンとイカも一貫ずつ、わさび抜きでお願いします。',
      ruby: 'サーモンとイカも<ruby>一貫<rt>いっかん</rt></ruby>ずつ、わさび<ruby>抜<rt>ぬ</rt></ruby>きでお<ruby>願<rt>ねが</rt></ruby>いします。',
      romaji: 'Sāmon to ika mo ikkan zutsu, wasabi-nuki de onegai shimasu.',
      en: 'One salmon and one squid each too, without wasabi please.'
    },
    {
      speaker: 'staff',
      jp: 'サビ抜きですね、了解です。',
      ruby: 'サビ<ruby>抜<rt>ぬ</rt></ruby>きですね、<ruby>了解<rt>りょうかい</rt></ruby>です。',
      romaji: 'Sabi-nuki desu ne, ryōkai desu.',
      en: 'No wasabi, got it.'
    },
    {
      speaker: 'you',
      jp: 'この白い魚は何ですか？',
      ruby: 'この<ruby>白<rt>しろ</rt></ruby>い<ruby>魚<rt>さかな</rt></ruby>は<ruby>何<rt>なん</rt></ruby>ですか？',
      romaji: 'Kono shiroi sakana wa nan desu ka?',
      en: 'What is this white fish?'
    },
    {
      speaker: 'staff',
      jp: 'それはタイです。今が旬ですよ。',
      ruby: 'それは<ruby>鯛<rt>タイ</rt></ruby>です。<ruby>今<rt>いま</rt></ruby>が<ruby>旬<rt>しゅん</rt></ruby>ですよ。',
      romaji: 'Sore wa tai desu. Ima ga shun desu yo.',
      en: "That's sea bream. It's in season right now."
    },
    {
      speaker: 'you',
      jp: 'じゃあ、それも一貫ください。',
      ruby: 'じゃあ、それも<ruby>一貫<rt>いっかん</rt></ruby>ください。',
      romaji: 'Jā, sore mo ikkan kudasai.',
      en: "Then I'll have one of those too."
    },
    {
      speaker: 'you',
      jp: 'お腹いっぱいになりました。お会計お願いします。',
      ruby: 'お<ruby>腹<rt>なか</rt></ruby>いっぱいになりました。お<ruby>会計<rt>かいけい</rt></ruby>お<ruby>願<rt>ねが</rt></ruby>いします。',
      romaji: 'O-naka ippai ni narimashita. O-kaikei onegai shimasu.',
      en: "I'm full. The bill, please."
    },
    {
      speaker: 'staff',
      jp: 'はい、全部で二千八百円です。',
      ruby: 'はい、<ruby>全部<rt>ぜんぶ</rt></ruby>で<ruby>二千八百円<rt>にせんはっぴゃくえん</rt></ruby>です。',
      romaji: 'Hai, zenbu de nisen-happyaku-en desu.',
      en: "Yes, that's 2,800 yen in total."
    },
    {
      speaker: 'you',
      jp: 'ごちそうさまでした。とても美味しかったです。',
      ruby: 'ごちそうさまでした。とても<ruby>美味<rt>おい</rt></ruby>しかったです。',
      romaji: 'Gochisōsama deshita. Totemo oishikatta desu.',
      en: 'Thank you for the meal. It was delicious.'
    }
  ]
}
