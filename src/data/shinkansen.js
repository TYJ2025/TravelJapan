// 新幹線の切符を買う — buying a reserved Shinkansen seat and finding the platform.
export const shinkansen = {
  id: 'shinkansen',
  title: 'Shinkansen Tickets',
  titleJp: '新幹線の切符を買う',
  emoji: '🚄',
  staffAvatar: '🚉',
  staffLabel: '駅員 · Station Staff',
  description: 'Buy a reserved Shinkansen ticket and confirm your platform.',
  lines: [
    {
      speaker: 'staff',
      jp: 'いらっしゃいませ。',
      ruby: 'いらっしゃいませ。',
      romaji: 'Irasshaimase.',
      zh: '歡迎光臨。',
      en: 'Welcome.'
    },
    {
      speaker: 'you',
      jp: '東京から京都までの新幹線の切符を買いたいです。',
      say: 'とうきょうからきょうとまでのしんかんせんのきっぷをかいたいです。',
      ruby: '<ruby>東京<rt>とうきょう</rt></ruby>から<ruby>京都<rt>きょうと</rt></ruby>までの<ruby>新幹線<rt>しんかんせん</rt></ruby>の<ruby>切符<rt>きっぷ</rt></ruby>を<ruby>買<rt>か</rt></ruby>いたいです。',
      romaji: 'Tōkyō kara Kyōto made no shinkansen no kippu o kaitai desu.',
      zh: '我想買從東京到京都的新幹線車票。',
      en: 'I would like to buy a Shinkansen ticket from Tokyo to Kyoto.'
    },
    {
      speaker: 'staff',
      jp: '何時ごろの列車をご希望ですか？',
      say: 'なんじごろのれっしゃをごきぼうですか？',
      ruby: '<ruby>何時<rt>なんじ</rt></ruby>ごろの<ruby>列車<rt>れっしゃ</rt></ruby>をご<ruby>希望<rt>きぼう</rt></ruby>ですか？',
      romaji: 'Nanji goro no ressha o go-kibō desu ka?',
      zh: '您希望搭幾點左右的列車？',
      en: 'What time train would you like?'
    },
    {
      speaker: 'you',
      jp: '午後二時ごろでお願いします。',
      say: 'ごごにじごろでおねがいします。',
      ruby: '<ruby>午後<rt>ごご</rt></ruby><ruby>二時<rt>にじ</rt></ruby>ごろでお<ruby>願<rt>ねが</rt></ruby>いします。',
      romaji: 'Gogo niji goro de onegai shimasu.',
      zh: '下午兩點左右，麻煩您。',
      en: 'Around 2 p.m., please.'
    },
    {
      speaker: 'staff',
      jp: '指定席と自由席、どちらになさいますか？',
      say: 'していせきとじゆうせき、どちらになさいますか？',
      ruby: '<ruby>指定席<rt>していせき</rt></ruby>と<ruby>自由席<rt>じゆうせき</rt></ruby>、どちらになさいますか？',
      romaji: 'Shiteiseki to jiyūseki, dochira ni nasaimasu ka?',
      zh: '您要指定席還是自由席？',
      en: 'Would you like a reserved or non-reserved seat?'
    },
    {
      speaker: 'you',
      jp: '指定席でお願いします。',
      say: 'していせきでおねがいします。',
      ruby: '<ruby>指定席<rt>していせき</rt></ruby>でお<ruby>願<rt>ねが</rt></ruby>いします。',
      romaji: 'Shiteiseki de onegai shimasu.',
      zh: '我要指定席。',
      en: 'A reserved seat, please.'
    },
    {
      speaker: 'staff',
      jp: '窓側のお席でよろしいですか？',
      say: 'まどがわのおせきでよろしいですか？',
      ruby: '<ruby>窓側<rt>まどがわ</rt></ruby>のお<ruby>席<rt>せき</rt></ruby>でよろしいですか？',
      romaji: 'Madogawa no oseki de yoroshii desu ka?',
      zh: '靠窗的位子可以嗎？',
      en: 'Would a window seat be all right?'
    },
    {
      speaker: 'you',
      jp: 'はい、窓側をお願いします。',
      say: 'はい、まどがわをおねがいします。',
      ruby: 'はい、<ruby>窓側<rt>まどがわ</rt></ruby>をお<ruby>願<rt>ねが</rt></ruby>いします。',
      romaji: 'Hai, madogawa o onegai shimasu.',
      zh: '好，麻煩靠窗。',
      en: 'Yes, a window seat, please.'
    },
    {
      speaker: 'staff',
      jp: 'お会計は一万四千円です。',
      say: 'おかいけいわいちまんよんせんえんです。',
      ruby: 'お<ruby>会計<rt>かいけい</rt></ruby>は<ruby>一万四千円<rt>いちまんよんせんえん</rt></ruby>です。',
      romaji: 'Okaikei wa ichiman yonsen en desu.',
      zh: '一共是 14,000 日圓。',
      en: 'The total is 14,000 yen.'
    },
    {
      speaker: 'you',
      jp: 'クレジットカードでお願いします。',
      ruby: 'クレジットカードでお<ruby>願<rt>ねが</rt></ruby>いします。',
      romaji: 'Kurejitto kādo de onegai shimasu.',
      zh: '我用信用卡付款。',
      en: 'By credit card, please.'
    },
    {
      speaker: 'staff',
      jp: 'こちらが切符です。十六番線から出発します。',
      say: 'こちらがきっぷです。じゅうろくばんせんからしゅっぱつします。',
      ruby: 'こちらが<ruby>切符<rt>きっぷ</rt></ruby>です。<ruby>十六番線<rt>じゅうろくばんせん</rt></ruby>から<ruby>出発<rt>しゅっぱつ</rt></ruby>します。',
      romaji: 'Kochira ga kippu desu. Jūroku-bansen kara shuppatsu shimasu.',
      zh: '這是您的車票。列車從 16 號月台出發。',
      en: 'Here are your tickets. The train departs from platform 16.'
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
      title: '切符と座席 · Tickets and seats',
      items: [
        { jp: '京都までの切符を買いたいです。', say: 'きょうとまでのきっぷをかいたいです。', ruby: '<ruby>京都<rt>きょうと</rt></ruby>までの<ruby>切符<rt>きっぷ</rt></ruby>を<ruby>買<rt>か</rt></ruby>いたいです。', zh: '我想買到京都的車票。', en: 'I would like to buy a ticket to Kyoto.' },
        { jp: '指定席をお願いします。', say: 'していせきをおねがいします。', ruby: '<ruby>指定席<rt>していせき</rt></ruby>をお<ruby>願<rt>ねが</rt></ruby>いします。', zh: '我要指定席。', en: 'A reserved seat, please.' },
        { jp: '通路側の席はありますか？', say: 'つうろがわのせきわありますか？', ruby: '<ruby>通路側<rt>つうろがわ</rt></ruby>の<ruby>席<rt>せき</rt></ruby>はありますか？', zh: '有靠走道的位子嗎？', en: 'Do you have an aisle seat?' },
        { jp: '大きい荷物を置く場所はありますか？', say: 'おおきいにもつをおくばしょわありますか？', ruby: '<ruby>大<rt>おお</rt></ruby>きい<ruby>荷物<rt>にもつ</rt></ruby>を<ruby>置<rt>お</rt></ruby>く<ruby>場所<rt>ばしょ</rt></ruby>はありますか？', zh: '有放大型行李的地方嗎？', en: 'Is there a place for large baggage?' }
      ]
    },
    {
      title: '駅で · At the station',
      items: [
        { jp: 'この列車は京都に行きますか？', say: 'このれっしゃわきょうとにいきますか？', ruby: 'この<ruby>列車<rt>れっしゃ</rt></ruby>は<ruby>京都<rt>きょうと</rt></ruby>に<ruby>行<rt>い</rt></ruby>きますか？', zh: '這班列車會到京都嗎？', en: 'Does this train go to Kyoto?' },
        { jp: '何番線から出発しますか？', say: 'なんばんせんからしゅっぱつしますか？', ruby: '<ruby>何番線<rt>なんばんせん</rt></ruby>から<ruby>出発<rt>しゅっぱつ</rt></ruby>しますか？', zh: '從幾號月台出發？', en: 'Which platform does it depart from?' },
        { jp: '乗り換えは必要ですか？', say: 'のりかえわひつようですか？', ruby: '<ruby>乗<rt>の</rt></ruby>り<ruby>換<rt>か</rt></ruby>えは<ruby>必要<rt>ひつよう</rt></ruby>ですか？', zh: '需要轉車嗎？', en: 'Do I need to transfer?' },
        { jp: '次の電車は何時ですか？', say: 'つぎのでんしゃわなんじですか？', ruby: '<ruby>次<rt>つぎ</rt></ruby>の<ruby>電車<rt>でんしゃ</rt></ruby>は<ruby>何時<rt>なんじ</rt></ruby>ですか？', zh: '下一班車是幾點？', en: 'What time is the next train?' }
      ]
    }
  ]
}
