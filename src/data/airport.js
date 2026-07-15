// 空港に到着する — immigration, baggage collection and airport essentials.
export const airport = {
  id: 'airport-arrival',
  title: 'Arriving at the Airport',
  titleJp: '空港に到着する',
  emoji: '✈️',
  staffAvatar: '🛂',
  staffLabel: '入国審査官 · Immigration Officer',
  description: 'Go through immigration, collect your baggage and find essential airport services.',
  lines: [
    {
      speaker: 'staff',
      jp: 'パスポートをお願いします。',
      ruby: 'パスポートをお<ruby>願<rt>ねが</rt></ruby>いします。',
      romaji: 'Pasupōto o onegai shimasu.',
      zh: '請出示護照。',
      en: 'Your passport, please.'
    },
    {
      speaker: 'you',
      jp: 'はい、どうぞ。',
      ruby: 'はい、どうぞ。',
      romaji: 'Hai, dōzo.',
      zh: '好的，請。',
      en: 'Here you are.'
    },
    {
      speaker: 'staff',
      jp: '日本へは何の目的で来られましたか？',
      say: 'にほんえわなんのもくてきできられましたか？',
      ruby: '<ruby>日本<rt>にほん</rt></ruby>へは<ruby>何<rt>なん</rt></ruby>の<ruby>目的<rt>もくてき</rt></ruby>で<ruby>来<rt>こ</rt></ruby>られましたか？',
      romaji: 'Nihon e wa nan no mokuteki de koraremashita ka?',
      zh: '您來日本的目的是什麼？',
      en: 'What is the purpose of your visit to Japan?'
    },
    {
      speaker: 'you',
      jp: '観光です。',
      say: 'かんこうです。',
      ruby: '<ruby>観光<rt>かんこう</rt></ruby>です。',
      romaji: 'Kankō desu.',
      zh: '觀光。',
      en: 'Tourism.'
    },
    {
      speaker: 'staff',
      jp: '何日間滞在する予定ですか？',
      say: 'なんにちかんたいざいするよていですか？',
      ruby: '<ruby>何日間<rt>なんにちかん</rt></ruby><ruby>滞在<rt>たいざい</rt></ruby>する<ruby>予定<rt>よてい</rt></ruby>ですか？',
      romaji: 'Nan-nichikan taizai suru yotei desu ka?',
      zh: '預計停留幾天？',
      en: 'How many days do you plan to stay?'
    },
    {
      speaker: 'you',
      jp: '五日間です。',
      say: 'いつかかんです。',
      ruby: '<ruby>五日間<rt>いつかかん</rt></ruby>です。',
      romaji: 'Itsukakan desu.',
      zh: '五天。',
      en: 'Five days.'
    },
    {
      speaker: 'staff',
      jp: 'ご滞在先はどちらですか？',
      say: 'ごたいざいさきわどちらですか？',
      ruby: 'ご<ruby>滞在先<rt>たいざいさき</rt></ruby>はどちらですか？',
      romaji: 'Go-taizaisaki wa dochira desu ka?',
      zh: '您住在哪裡？',
      en: 'Where will you be staying?'
    },
    {
      speaker: 'you',
      jp: '東京のホテルです。',
      say: 'とうきょうのホテルです。',
      ruby: '<ruby>東京<rt>とうきょう</rt></ruby>のホテルです。',
      romaji: 'Tōkyō no hoteru desu.',
      zh: '東京的飯店。',
      en: 'At a hotel in Tokyo.'
    },
    {
      speaker: 'staff',
      jp: '帰りの航空券はお持ちですか？',
      say: 'かえりのこうくうけんわおもちですか？',
      ruby: '<ruby>帰<rt>かえ</rt></ruby>りの<ruby>航空券<rt>こうくうけん</rt></ruby>はお<ruby>持<rt>も</rt></ruby>ちですか？',
      romaji: 'Kaeri no kōkūken wa omochi desu ka?',
      zh: '您有回程機票嗎？',
      en: 'Do you have a return ticket?'
    },
    {
      speaker: 'you',
      jp: 'はい、持っています。',
      say: 'はい、もっています。',
      ruby: 'はい、<ruby>持<rt>も</rt></ruby>っています。',
      romaji: 'Hai, motte imasu.',
      zh: '有，我有。',
      en: 'Yes, I do.'
    },
    {
      speaker: 'staff',
      jp: 'ありがとうございます。お荷物を受け取ったら、税関へお進みください。',
      say: 'ありがとうございます。おにもつをうけとったら、ぜいかんえおすすみください。',
      ruby: 'ありがとうございます。お<ruby>荷物<rt>にもつ</rt></ruby>を<ruby>受<rt>う</rt></ruby>け<ruby>取<rt>と</rt></ruby>ったら、<ruby>税関<rt>ぜいかん</rt></ruby>へお<ruby>進<rt>すす</rt></ruby>みください。',
      romaji: 'Arigatō gozaimasu. Onimotsu o uketottara, zeikan e osusumi kudasai.',
      zh: '謝謝。領完行李後，請前往海關。',
      en: 'Thank you. Please proceed to customs after collecting your baggage.'
    }
  ],
  phrases: [
    {
      title: '手荷物 · Baggage',
      items: [
        { jp: '荷物はどこで受け取れますか？', say: 'にもつわどこでうけとれますか？', ruby: '<ruby>荷物<rt>にもつ</rt></ruby>はどこで<ruby>受<rt>う</rt></ruby>け<ruby>取<rt>と</rt></ruby>れますか？', zh: '行李要在哪裡領取？', en: 'Where can I collect my baggage?' },
        { jp: 'スーツケースが出てきません。', say: 'スーツケースがでてきません。', ruby: 'スーツケースが<ruby>出<rt>で</rt></ruby>てきません。', zh: '我的行李箱沒有出來。', en: 'My suitcase has not come out.' },
        { jp: 'この荷物は私のではありません。', say: 'このにもつわわたしのではありません。', ruby: 'この<ruby>荷物<rt>にもつ</rt></ruby>は<ruby>私<rt>わたし</rt></ruby>のではありません。', zh: '這件行李不是我的。', en: 'This baggage is not mine.' }
      ]
    },
    {
      title: '空港サービス · Airport services',
      items: [
        { jp: '両替所はどこですか？', say: 'りょうがえじょわどこですか？', ruby: '<ruby>両替所<rt>りょうがえじょ</rt></ruby>はどこですか？', zh: '換匯處在哪裡？', en: 'Where is the currency exchange?' },
        { jp: 'SIMカードを買いたいです。', say: 'シムカードをかいたいです。', ruby: 'SIMカードを<ruby>買<rt>か</rt></ruby>いたいです。', zh: '我想買 SIM 卡。', en: 'I would like to buy a SIM card.' },
        { jp: '東京駅までどう行けばいいですか？', say: 'とうきょうえきまでどういけばいいですか？', ruby: '<ruby>東京駅<rt>とうきょうえき</rt></ruby>までどう<ruby>行<rt>い</rt></ruby>けばいいですか？', zh: '要怎麼去東京車站？', en: 'How do I get to Tokyo Station?' }
      ]
    }
  ]
}
