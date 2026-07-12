// 交通・タクシー (Getting around) — a full taxi ride dialogue, plus phrases
// for taxis, trains/stations/IC cards, buses, and asking directions.
export const transport = {
  id: 'transport',
  title: 'Taxi & Getting Around',
  titleJp: '交通・タクシー',
  emoji: '🚕',
  staffAvatar: '🚕',
  staffLabel: '運転手 · Driver',
  description: 'A full taxi ride, plus phrases for trains, IC cards, buses and directions.',
  lines: [
    {
      speaker: 'staff',
      jp: 'どちらまでですか？',
      ruby: 'どちらまでですか？',
      romaji: 'Dochira made desu ka?',
      zh: '請問要到哪裡?',
      en: 'Where would you like to go?'
    },
    {
      speaker: 'you',
      jp: '新宿駅までお願いします。',
      ruby: '<ruby>新宿駅<rt>しんじゅくえき</rt></ruby>までお<ruby>願<rt>ねが</rt></ruby>いします。',
      romaji: 'Shinjuku-eki made onegai shimasu.',
      zh: '麻煩到新宿車站。',
      en: 'To Shinjuku Station, please.'
    },
    {
      speaker: 'staff',
      jp: 'かしこまりました。シートベルトをお締めください。',
      ruby: 'かしこまりました。シートベルトをお<ruby>締<rt>し</rt></ruby>めください。',
      romaji: 'Kashikomarimashita. Shīto-beruto o o-shime kudasai.',
      zh: '好的，請繫上安全帶。',
      en: 'Certainly. Please fasten your seatbelt.'
    },
    {
      speaker: 'you',
      jp: 'どのくらいかかりますか？',
      ruby: 'どのくらいかかりますか？',
      romaji: 'Dono kurai kakarimasu ka?',
      zh: '大概要多久?',
      en: 'About how long will it take?'
    },
    {
      speaker: 'staff',
      jp: '道が空いていれば、二十分ほどです。',
      say: 'みちがすいていれば、にじゅっぷんほどです。',
      ruby: '<ruby>道<rt>みち</rt></ruby>が<ruby>空<rt>す</rt></ruby>いていれば、<ruby>二十分<rt>にじゅっぷん</rt></ruby>ほどです。',
      romaji: 'Michi ga suite ireba, nijuppun hodo desu.',
      zh: '如果路況順暢，大約二十分鐘。',
      en: 'If the roads are clear, about 20 minutes.'
    },
    {
      speaker: 'you',
      jp: '急いでいるので、一番早い道でお願いします。',
      ruby: '<ruby>急<rt>いそ</rt></ruby>いでいるので、<ruby>一番<rt>いちばん</rt></ruby><ruby>早<rt>はや</rt></ruby>い<ruby>道<rt>みち</rt></ruby>でお<ruby>願<rt>ねが</rt></ruby>いします。',
      romaji: 'Isoide iru node, ichiban hayai michi de onegai shimasu.',
      zh: '我趕時間，請走最快的路。',
      en: "I'm in a hurry, so please take the fastest route."
    },
    {
      speaker: 'staff',
      jp: 'はい、高速道路を使いますね。',
      ruby: 'はい、<ruby>高速道路<rt>こうそくどうろ</rt></ruby>を<ruby>使<rt>つか</rt></ruby>いますね。',
      romaji: 'Hai, kōsoku-dōro o tsukaimasu ne.',
      zh: '好，那走高速公路喔。',
      en: "Okay, I'll take the expressway."
    },
    {
      speaker: 'you',
      jp: 'すみません、次の信号で止めてください。',
      ruby: 'すみません、<ruby>次<rt>つぎ</rt></ruby>の<ruby>信号<rt>しんごう</rt></ruby>で<ruby>止<rt>と</rt></ruby>めてください。',
      romaji: 'Sumimasen, tsugi no shingō de tomete kudasai.',
      zh: '不好意思，請在下個紅綠燈停。',
      en: 'Excuse me, please stop at the next traffic light.'
    },
    {
      speaker: 'staff',
      jp: 'こちらでよろしいですか？',
      ruby: 'こちらでよろしいですか？',
      romaji: 'Kochira de yoroshii desu ka?',
      zh: '這裡可以嗎?',
      en: 'Is here okay?'
    },
    {
      speaker: 'you',
      jp: 'はい、ここで大丈夫です。いくらですか？',
      ruby: 'はい、ここで<ruby>大丈夫<rt>だいじょうぶ</rt></ruby>です。いくらですか？',
      romaji: 'Hai, koko de daijōbu desu. Ikura desu ka?',
      zh: '好，這裡就可以。多少錢?',
      en: 'Yes, here is fine. How much is it?'
    },
    {
      speaker: 'staff',
      jp: '千八百円です。',
      ruby: '<ruby>千八百円<rt>せんはっぴゃくえん</rt></ruby>です。',
      romaji: 'Sen-happyaku-en desu.',
      zh: '一千八百日圓。',
      en: "That's 1,800 yen."
    },
    {
      speaker: 'you',
      jp: 'カードで払えますか？領収書もください。',
      ruby: 'カードで<ruby>払<rt>はら</rt></ruby>えますか？<ruby>領収書<rt>りょうしゅうしょ</rt></ruby>もください。',
      romaji: 'Kādo de haraemasu ka? Ryōshūsho mo kudasai.',
      zh: '可以刷卡嗎?也請給我收據。',
      en: 'Can I pay by card? A receipt too, please.'
    },
    {
      speaker: 'staff',
      jp: 'はい、大丈夫です。ありがとうございました。',
      ruby: 'はい、<ruby>大丈夫<rt>だいじょうぶ</rt></ruby>です。ありがとうございました。',
      romaji: 'Hai, daijōbu desu. Arigatō gozaimashita.',
      zh: '可以的，謝謝您。',
      en: "Yes, that's fine. Thank you very much."
    },
    {
      speaker: 'you',
      jp: 'ありがとう。おつりは結構です。',
      ruby: 'ありがとう。おつりは<ruby>結構<rt>けっこう</rt></ruby>です。',
      romaji: 'Arigatō. Otsuri wa kekkō desu.',
      zh: '謝謝，不用找了。',
      en: 'Thanks. Keep the change.'
    }
  ],
  phrases: [
    {
      title: 'タクシー · Taxi',
      items: [
        { jp: 'この住所までお願いします。', ruby: 'この<ruby>住所<rt>じゅうしょ</rt></ruby>までお<ruby>願<rt>ねが</rt></ruby>いします。', zh: '麻煩到這個地址。（出示地址）', en: 'To this address, please.' },
        { jp: '空港までいくらくらいですか？', ruby: '<ruby>空港<rt>くうこう</rt></ruby>までいくらくらいですか？', zh: '到機場大概多少錢?', en: 'About how much to the airport?' },
        { jp: 'トランクを開けてもらえますか？', ruby: 'トランクを<ruby>開<rt>あ</rt></ruby>けてもらえますか？', zh: '可以幫我開後車廂嗎?', en: 'Could you open the trunk?' },
        { jp: '荷物があります。', ruby: '<ruby>荷物<rt>にもつ</rt></ruby>があります。', zh: '我有行李。', en: 'I have luggage.' },
        { jp: 'ここで待っていてもらえますか？', ruby: 'ここで<ruby>待<rt>ま</rt></ruby>っていてもらえますか？', zh: '可以請您在這裡等一下嗎?', en: 'Could you wait here for me?' },
        { jp: '急いでください。', ruby: '<ruby>急<rt>いそ</rt></ruby>いでください。', zh: '請開快一點。', en: 'Please hurry.' }
      ]
    },
    {
      title: '電車・駅・IC · Train & station',
      items: [
        { jp: '新宿までの切符を一枚ください。', ruby: '<ruby>新宿<rt>しんじゅく</rt></ruby>までの<ruby>切符<rt>きっぷ</rt></ruby>を<ruby>一枚<rt>いちまい</rt></ruby>ください。', zh: '請給我一張到新宿的車票。', en: 'One ticket to Shinjuku, please.' },
        { jp: 'ICカードにチャージしたいです。', ruby: 'ICカードにチャージしたいです。', zh: '我想幫 IC 卡儲值。', en: "I'd like to top up my IC card." },
        { jp: '渋谷へ行くには何線ですか？', say: 'しぶやへいくにわなにせんですか？', ruby: '<ruby>渋谷<rt>しぶや</rt></ruby>へ<ruby>行<rt>い</rt></ruby>くには<ruby>何線<rt>なにせん</rt></ruby>ですか？', zh: '去澀谷要搭哪條線?', en: 'Which line goes to Shibuya?' },
        { jp: '何番線ですか？', ruby: '<ruby>何番線<rt>なんばんせん</rt></ruby>ですか？', zh: '幾號月台?', en: 'Which platform?' },
        { jp: 'ここで乗り換えですか？', ruby: 'ここで<ruby>乗<rt>の</rt></ruby>り<ruby>換<rt>か</rt></ruby>えですか？', zh: '在這裡換車嗎?', en: 'Do I transfer here?' },
        { jp: '次の駅で降ります。', ruby: '<ruby>次<rt>つぎ</rt></ruby>の<ruby>駅<rt>えき</rt></ruby>で<ruby>降<rt>お</rt></ruby>ります。', zh: '我在下一站下車。', en: "I'll get off at the next station." }
      ]
    },
    {
      title: 'バス · Bus',
      items: [
        { jp: 'このバスは空港へ行きますか？', ruby: 'このバスは<ruby>空港<rt>くうこう</rt></ruby>へ<ruby>行<rt>い</rt></ruby>きますか？', zh: '這班公車有到機場嗎?', en: 'Does this bus go to the airport?' },
        { jp: '料金はいくらですか？', ruby: '<ruby>料金<rt>りょうきん</rt></ruby>はいくらですか？', zh: '車資多少?', en: 'How much is the fare?' },
        { jp: '着いたら教えてください。', ruby: '<ruby>着<rt>つ</rt></ruby>いたら<ruby>教<rt>おし</rt></ruby>えてください。', zh: '到了請告訴我。', en: 'Please let me know when we arrive.' }
      ]
    },
    {
      title: '道を尋ねる · Asking directions',
      items: [
        { jp: '駅はどこですか？', ruby: '<ruby>駅<rt>えき</rt></ruby>はどこですか？', zh: '車站在哪裡?', en: 'Where is the station?' },
        { jp: '駅までどう行けばいいですか？', ruby: '<ruby>駅<rt>えき</rt></ruby>までどう<ruby>行<rt>い</rt></ruby>けばいいですか？', zh: '到車站怎麼走?', en: 'How do I get to the station?' },
        { jp: 'ここから歩いてどのくらいですか？', ruby: 'ここから<ruby>歩<rt>ある</rt></ruby>いてどのくらいですか？', zh: '從這裡走路要多久?', en: 'How far is it on foot from here?' },
        { jp: '近くにコンビニはありますか？', ruby: '<ruby>近<rt>ちか</rt></ruby>くにコンビニはありますか？', zh: '附近有便利商店嗎?', en: 'Is there a convenience store nearby?' },
        { jp: '地図で教えてもらえますか？', ruby: '<ruby>地図<rt>ちず</rt></ruby>で<ruby>教<rt>おし</rt></ruby>えてもらえますか？', zh: '可以在地圖上指給我看嗎?', en: 'Could you show me on the map?' }
      ]
    }
  ]
}
