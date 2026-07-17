// 空港でチェックイン — departure check-in, baggage drop and boarding preparations.
export const airportCheckin = {
  id: 'airport-checkin',
  title: 'Airport Check-in',
  titleJp: '空港でチェックイン',
  emoji: '🛫',
  staffAvatar: '🧑‍✈️',
  staffLabel: '航空会社係員 · Airline Staff',
  description: 'Check in for a flight, check baggage, confirm seat and transfer details, and prepare for security.',
  lines: [
    {
      speaker: 'staff',
      jp: 'いらっしゃいませ。パスポートと予約番号をお願いいたします。',
      say: 'いらっしゃいませ。パスポートとよやくばんごうをおねがいいたします。',
      ruby: 'いらっしゃいませ。パスポートと<ruby>予約番号<rt>よやくばんごう</rt></ruby>をお<ruby>願<rt>ねが</rt></ruby>いいたします。',
      romaji: 'Irasshaimase. Pasupōto to yoyaku bangō o onegai itashimasu.',
      zh: '歡迎光臨。請出示護照和預約號碼。',
      en: 'Welcome. May I have your passport and reservation number?'
    },
    {
      speaker: 'you',
      jp: 'はい、こちらです。オンラインチェックインは済んでいます。',
      say: 'はい、こちらです。オンラインチェックインわすんでいます。',
      ruby: 'はい、こちらです。オンラインチェックインは<ruby>済<rt>す</rt></ruby>んでいます。',
      romaji: 'Hai, kochira desu. Onrain chekku-in wa sunde imasu.',
      zh: '好的，這是我的護照。線上報到已經完成了。',
      en: 'Yes, here it is. I have already checked in online.'
    },
    {
      speaker: 'staff',
      jp: '東京行きの便ですね。本日はお預けになるお荷物はありますか？',
      say: 'とうきょういきのびんですね。ほんじつわおあずけになるおにもつわありますか？',
      ruby: '<ruby>東京<rt>とうきょう</rt></ruby><ruby>行<rt>い</rt></ruby>きの<ruby>便<rt>びん</rt></ruby>ですね。<ruby>本日<rt>ほんじつ</rt></ruby>はお<ruby>預<rt>あず</rt></ruby>けになるお<ruby>荷物<rt>にもつ</rt></ruby>はありますか？',
      romaji: 'Tōkyō-yuki no bin desu ne. Honjitsu wa oazuke ni naru onimotsu wa arimasu ka?',
      zh: '您是搭往東京的航班。今天有要托運的行李嗎？',
      en: 'You are on the flight to Tokyo. Do you have any baggage to check?'
    },
    {
      speaker: 'you',
      jp: 'はい、スーツケースを一つ預けます。',
      say: 'はい、スーツケースをひとつあずけます。',
      ruby: 'はい、スーツケースを<ruby>一<rt>ひと</rt></ruby>つ<ruby>預<rt>あず</rt></ruby>けます。',
      romaji: 'Hai, sūtsukēsu o hitotsu azukemasu.',
      zh: '有，我要托運一個行李箱。',
      en: 'Yes, I would like to check one suitcase.'
    },
    {
      speaker: 'staff',
      jp: 'スーツケースをこちらに載せてください。重量を確認します。',
      say: 'スーツケースをこちらにのせてください。じゅうりょうをかくにんします。',
      ruby: 'スーツケースをこちらに<ruby>載<rt>の</rt></ruby>せてください。<ruby>重量<rt>じゅうりょう</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>します。',
      romaji: 'Sūtsukēsu o kochira ni nosete kudasai. Jūryō o kakunin shimasu.',
      zh: '請把行李箱放在這裡，我確認一下重量。',
      en: 'Please place your suitcase here. I will check the weight.'
    },
    {
      speaker: 'staff',
      jp: '無料手荷物許容量を超える場合は、追加料金がかかることがあります。予約条件をご確認ください。',
      say: 'むりょうてにもつきょようりょうをこえるばあいわ、ついかりょうきんがかかることがあります。よやくじょうけんをごかくにんください。',
      ruby: '<ruby>無料手荷物許容量<rt>むりょうてにもつきょようりょう</rt></ruby>を<ruby>超<rt>こ</rt></ruby>える<ruby>場合<rt>ばあい</rt></ruby>は、<ruby>追加料金<rt>ついかりょうきん</rt></ruby>がかかることがあります。<ruby>予約条件<rt>よやくじょうけん</rt></ruby>をご<ruby>確認<rt>かくにん</rt></ruby>ください。',
      romaji: 'Muryō tenimotsu kyoyōryō o koeru baai wa, tsuika ryōkin ga kakaru koto ga arimasu. Yoyaku jōken o go-kakunin kudasai.',
      zh: '若超過免費托運額度，可能會收取額外費用。請確認您的訂位條件。',
      en: 'If you exceed the free baggage allowance, an additional fee may apply. Please check your booking conditions.'
    },
    {
      speaker: 'you',
      jp: 'モバイルバッテリーは、どこに入れればいいですか？',
      say: 'モバイルバッテリーわ、どこにいれればいいですか？',
      ruby: 'モバイルバッテリーは、どこに<ruby>入<rt>い</rt></ruby>れればいいですか？',
      romaji: 'Mobairu batterī wa, doko ni irereba ii desu ka?',
      zh: '行動電源應該放在哪裡呢？',
      en: 'Where should I pack my power bank?'
    },
    {
      speaker: 'staff',
      jp: 'モバイルバッテリーは預け入れ荷物に入れず、機内持ち込み手荷物に入れてください。容量などは航空会社の規定をご確認ください。',
      say: 'モバイルバッテリーわあずけいれにもつにいれず、きないもちこみてにもつにいれてください。ようりょうなどわこうくうがいしゃのきていをごかくにんください。',
      ruby: 'モバイルバッテリーは<ruby>預<rt>あず</rt></ruby>け<ruby>入<rt>い</rt></ruby>れ<ruby>荷物<rt>にもつ</rt></ruby>に<ruby>入<rt>い</rt></ruby>れず、<ruby>機内持<rt>きないも</rt></ruby>ち<ruby>込<rt>こ</rt></ruby>み<ruby>手荷物<rt>てにもつ</rt></ruby>に<ruby>入<rt>い</rt></ruby>れてください。<ruby>容量<rt>ようりょう</rt></ruby>などは<ruby>航空会社<rt>こうくうがいしゃ</rt></ruby>の<ruby>規定<rt>きてい</rt></ruby>をご<ruby>確認<rt>かくにん</rt></ruby>ください。',
      romaji: 'Mobairu batterī wa azukeire nimotsu ni irezu, kinai mochikomi tenimotsu ni irete kudasai. Yōryō nado wa kōkūgaisha no kitei o go-kakunin kudasai.',
      zh: '行動電源請不要放入托運行李，要放在隨身行李中。容量等規定請確認航空公司規則。',
      en: 'Do not put power banks in checked baggage; keep them in your carry-on baggage. Please check your airline’s rules for capacity and other limits.'
    },
    {
      speaker: 'you',
      jp: '通路側の席にできますか？',
      say: 'つうろがわのせきにできますか？',
      ruby: '<ruby>通路側<rt>つうろがわ</rt></ruby>の<ruby>席<rt>せき</rt></ruby>にできますか？',
      romaji: 'Tsūrogawa no seki ni dekimasu ka?',
      zh: '可以安排走道側座位嗎？',
      en: 'Could I have an aisle seat?'
    },
    {
      speaker: 'staff',
      jp: '空席を確認します。通路側のお席をご用意できました。',
      say: 'くうせきをかくにんします。つうろがわのおせきをごよういできました。',
      ruby: '<ruby>空席<rt>くうせき</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>します。<ruby>通路側<rt>つうろがわ</rt></ruby>のお<ruby>席<rt>せき</rt></ruby>をご<ruby>用意<rt>ようい</rt></ruby>できました。',
      romaji: 'Kūseki o kakunin shimasu. Tsūrogawa no oseki o go-yōi dekimashita.',
      zh: '我確認一下空位。已為您安排走道側座位。',
      en: 'I will check availability. I have arranged an aisle seat for you.'
    },
    {
      speaker: 'staff',
      jp: 'こちらが搭乗券と手荷物引換証です。搭乗口は変更になる場合がありますので、案内表示をご確認ください。',
      say: 'こちらがとうじょうけんとてにもつひきかえしょうです。とうじょうぐちわへんこうになるばあいがありますので、あんないひょうじをごかくにんください。',
      ruby: 'こちらが<ruby>搭乗券<rt>とうじょうけん</rt></ruby>と<ruby>手荷物引換証<rt>てにもつひきかえしょう</rt></ruby>です。<ruby>搭乗口<rt>とうじょうぐち</rt></ruby>は<ruby>変更<rt>へんこう</rt></ruby>になる<ruby>場合<rt>ばあい</rt></ruby>がありますので、<ruby>案内表示<rt>あんないひょうじ</rt></ruby>をご<ruby>確認<rt>かくにん</rt></ruby>ください。',
      romaji: 'Kochira ga tōjōken to tenimotsu hikikaeshō desu. Tōjōguchi wa henkō ni naru baai ga arimasu node, annai hyōji o go-kakunin kudasai.',
      zh: '這是您的登機證和行李收據。登機門可能變更，請確認資訊看板。',
      en: 'Here are your boarding pass and baggage claim tag. The boarding gate may change, so please check the information displays.'
    },
    {
      speaker: 'you',
      jp: '乗り継ぎがあります。スーツケースは最終目的地まで預けられますか？',
      say: 'のりつぎがあります。スーツケースわさいしゅうもくてきちまであずけられますか？',
      ruby: '<ruby>乗<rt>の</rt></ruby>り<ruby>継<rt>つ</rt></ruby>ぎがあります。スーツケースは<ruby>最終目的地<rt>さいしゅうもくてきち</rt></ruby>まで<ruby>預<rt>あず</rt></ruby>けられますか？',
      romaji: 'Noritsugi ga arimasu. Sūtsukēsu wa saishū mokutekichi made azukeraremasu ka?',
      zh: '我需要轉機。行李箱可以直接托運到最終目的地嗎？',
      en: 'I have a connecting flight. Can my suitcase be checked through to my final destination?'
    },
    {
      speaker: 'staff',
      jp: 'お荷物の扱いは予約内容と運航会社によって異なります。手荷物タグの行き先を一緒に確認しましょう。',
      say: 'おにもつのあつかいわよやくないようとうんこうがいしゃによってことなります。てにもつタグのいきさきをいっしょにかくにんしましょう。',
      ruby: 'お<ruby>荷物<rt>にもつ</rt></ruby>の<ruby>扱<rt>あつか</rt></ruby>いは<ruby>予約内容<rt>よやくないよう</rt></ruby>と<ruby>運航会社<rt>うんこうがいしゃ</rt></ruby>によって<ruby>異<rt>こと</rt></ruby>なります。<ruby>手荷物<rt>てにもつ</rt></ruby>タグの<ruby>行<rt>い</rt></ruby>き<ruby>先<rt>さき</rt></ruby>を<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>確認<rt>かくにん</rt></ruby>しましょう。',
      romaji: 'Onimotsu no atsukai wa yoyaku naiyō to unkō gaisha ni yotte kotonarimasu. Tenimotsu tagu no ikisaki o issho ni kakunin shimashō.',
      zh: '行李的處理方式依訂位內容和實際營運航空公司而異。我們一起確認行李標籤的目的地。',
      en: 'Baggage handling varies by reservation and operating airline. Let’s check the destination on your baggage tag together.'
    },
    {
      speaker: 'you',
      jp: '乗り継ぎ便の搭乗券も発行できますか？',
      say: 'のりつぎびんのとうじょうけんもはっこうできますか？',
      ruby: '<ruby>乗<rt>の</rt></ruby>り<ruby>継<rt>つ</rt></ruby>ぎ<ruby>便<rt>びん</rt></ruby>の<ruby>搭乗券<rt>とうじょうけん</rt></ruby>も<ruby>発行<rt>はっこう</rt></ruby>できますか？',
      romaji: 'Noritsugi-bin no tōjōken mo hakkō dekimasu ka?',
      zh: '也可以開立轉機航班的登機證嗎？',
      en: 'Can you also issue my connecting-flight boarding pass?'
    },
    {
      speaker: 'staff',
      jp: '確認します。発行できない場合は、乗り継ぎ空港のカウンターでお受け取りください。',
      say: 'かくにんします。はっこうできないばあいわ、のりつぎくうこうのカウンターでおうけとりください。',
      ruby: '<ruby>確認<rt>かくにん</rt></ruby>します。<ruby>発行<rt>はっこう</rt></ruby>できない<ruby>場合<rt>ばあい</rt></ruby>は、<ruby>乗<rt>の</rt></ruby>り<ruby>継<rt>つ</rt></ruby>ぎ<ruby>空港<rt>くうこう</rt></ruby>のカウンターでお<ruby>受<rt>う</rt></ruby>け<ruby>取<rt>と</rt></ruby>りください。',
      romaji: 'Kakunin shimasu. Hakkō dekinai baai wa, noritsugi kūkō no kauntā de ouketori kudasai.',
      zh: '我幫您確認。若無法開立，請在轉機機場的櫃檯領取。',
      en: 'I will check. If it cannot be issued here, please collect it at the counter at your connecting airport.'
    },
    {
      speaker: 'you',
      jp: '保安検査場はどこですか？',
      say: 'ほあんけんさじょうわどこですか？',
      ruby: '<ruby>保安検査場<rt>ほあんけんさじょう</rt></ruby>はどこですか？',
      romaji: 'Hoan kensajō wa doko desu ka?',
      zh: '安全檢查處在哪裡？',
      en: 'Where is the security checkpoint?'
    },
    {
      speaker: 'staff',
      jp: 'この先の左側です。搭乗券とパスポートをお手元にご用意ください。',
      say: 'このさきのひだりがわです。とうじょうけんとパスポートをおてもとにごよういください。',
      ruby: 'この<ruby>先<rt>さき</rt></ruby>の<ruby>左側<rt>ひだりがわ</rt></ruby>です。<ruby>搭乗券<rt>とうじょうけん</rt></ruby>とパスポートをお<ruby>手元<rt>てもと</rt></ruby>にご<ruby>用意<rt>ようい</rt></ruby>ください。',
      romaji: 'Kono saki no hidarigawa desu. Tōjōken to pasupōto o otemoto ni go-yōi kudasai.',
      zh: '往前左手邊。請先準備好登機證和護照。',
      en: 'It is ahead on the left. Please have your boarding pass and passport ready.'
    }
  ],
  phrases: [
    {
      title: '搭乗手続き · Check-in',
      items: [
        { jp: 'チェックインをお願いします。', ruby: 'チェックインをお<ruby>願<rt>ねが</rt></ruby>いします。', zh: '我要辦理登機。', en: 'I would like to check in.' },
        { jp: 'オンラインチェックインは済んでいます。', say: 'オンラインチェックインわすんでいます。', ruby: 'オンラインチェックインは<ruby>済<rt>す</rt></ruby>んでいます。', zh: '我已完成線上報到。', en: 'I have already checked in online.' },
        { jp: '搭乗券を発行していただけますか？', say: 'とうじょうけんをはっこうしていただけますか？', ruby: '<ruby>搭乗券<rt>とうじょうけん</rt></ruby>を<ruby>発行<rt>はっこう</rt></ruby>していただけますか？', zh: '可以幫我開立登機證嗎？', en: 'Could you issue my boarding pass?' },
        { jp: '予約はツァイの名前で入っています。', say: 'よやくわツァイのなまえではいっています。', ruby: '<ruby>予約<rt>よやく</rt></ruby>はツァイの<ruby>名前<rt>なまえ</rt></ruby>で<ruby>入<rt>はい</rt></ruby>っています。', zh: '預約是用 Tsai 的名字。', en: 'The reservation is under the name Tsai.' },
        { jp: 'パスポートはここです。', ruby: 'パスポートはここです。', zh: '護照在這裡。', en: 'Here is my passport.' }
      ]
    },
    {
      title: '預け荷物 · Checked baggage',
      items: [
        { jp: 'スーツケースを一つ預けます。', say: 'スーツケースをひとつあずけます。', ruby: 'スーツケースを<ruby>一<rt>ひと</rt></ruby>つ<ruby>預<rt>あず</rt></ruby>けます。', zh: '我要托運一個行李箱。', en: 'I would like to check one suitcase.' },
        { jp: '手荷物の重量制限はいくつですか？', say: 'てにもつのじゅうりょうせいげんわいくつですか？', ruby: '<ruby>手荷物<rt>てにもつ</rt></ruby>の<ruby>重量制限<rt>じゅうりょうせいげん</rt></ruby>はいくつですか？', zh: '托運行李的重量限制是多少？', en: 'What is the checked baggage weight limit?' },
        { jp: '超過料金はいくらですか？', say: 'ちょうかりょうきんわいくらですか？', ruby: '<ruby>超過料金<rt>ちょうかりょうきん</rt></ruby>はいくらですか？', zh: '超額費用是多少？', en: 'How much is the excess baggage fee?' },
        { jp: '壊れやすい物が入っています。', say: 'こわれやすいものがはいっています。', ruby: '<ruby>壊<rt>こわ</rt></ruby>れやすい<ruby>物<rt>もの</rt></ruby>が<ruby>入<rt>はい</rt></ruby>っています。', zh: '裡面有易碎物品。', en: 'There are fragile items inside.' },
        { jp: '最終目的地まで預けられますか？', say: 'さいしゅうもくてきちまであずけられますか？', ruby: '<ruby>最終目的地<rt>さいしゅうもくてきち</rt></ruby>まで<ruby>預<rt>あず</rt></ruby>けられますか？', zh: '可以托運到最終目的地嗎？', en: 'Can it be checked through to my final destination?' }
      ]
    },
    {
      title: '座席・搭乗口 · Seat and gate',
      items: [
        { jp: '通路側の席にできますか？', say: 'つうろがわのせきにできますか？', ruby: '<ruby>通路側<rt>つうろがわ</rt></ruby>の<ruby>席<rt>せき</rt></ruby>にできますか？', zh: '可以安排走道側座位嗎？', en: 'Could I have an aisle seat?' },
        { jp: '窓側の席にできますか？', say: 'まどがわのせきにできますか？', ruby: '<ruby>窓側<rt>まどがわ</rt></ruby>の<ruby>席<rt>せき</rt></ruby>にできますか？', zh: '可以安排靠窗座位嗎？', en: 'Could I have a window seat?' },
        { jp: '一緒に座れますか？', say: 'いっしょにすわれますか？', ruby: '<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>座<rt>すわ</rt></ruby>れますか？', zh: '可以坐在一起嗎？', en: 'Can we sit together?' },
        { jp: '搭乗口はどこですか？', say: 'とうじょうぐちわどこですか？', ruby: '<ruby>搭乗口<rt>とうじょうぐち</rt></ruby>はどこですか？', zh: '登機門在哪裡？', en: 'Where is the boarding gate?' },
        { jp: '搭乗開始時刻は何時ですか？', say: 'とうじょうかいしじこくわなんじですか？', ruby: '<ruby>搭乗開始時刻<rt>とうじょうかいしじこく</rt></ruby>は<ruby>何時<rt>なんじ</rt></ruby>ですか？', zh: '開始登機時間是幾點？', en: 'What time does boarding begin?' }
      ]
    },
    {
      title: '保安検査・乗り継ぎ · Security and connections',
      items: [
        { jp: '保安検査場はどこですか？', say: 'ほあんけんさじょうわどこですか？', ruby: '<ruby>保安検査場<rt>ほあんけんさじょう</rt></ruby>はどこですか？', zh: '安全檢查處在哪裡？', en: 'Where is the security checkpoint?' },
        { jp: 'モバイルバッテリーは機内に持ち込めますか？', say: 'モバイルバッテリーわきないにもちこめますか？', ruby: 'モバイルバッテリーは<ruby>機内<rt>きない</rt></ruby>に<ruby>持<rt>も</rt></ruby>ち<ruby>込<rt>こ</rt></ruby>めますか？', zh: '行動電源可以帶上飛機嗎？', en: 'May I bring a power bank on board?' },
        { jp: '乗り継ぎ便の搭乗券も発行できますか？', say: 'のりつぎびんのとうじょうけんもはっこうできますか？', ruby: '<ruby>乗<rt>の</rt></ruby>り<ruby>継<rt>つ</rt></ruby>ぎ<ruby>便<rt>びん</rt></ruby>の<ruby>搭乗券<rt>とうじょうけん</rt></ruby>も<ruby>発行<rt>はっこう</rt></ruby>できますか？', zh: '也可以開立轉機航班的登機證嗎？', en: 'Can you also issue my connecting-flight boarding pass?' },
        { jp: '乗り継ぎの時間は十分ですか？', say: 'のりつぎのじかんわじゅうぶんですか？', ruby: '<ruby>乗<rt>の</rt></ruby>り<ruby>継<rt>つ</rt></ruby>ぎの<ruby>時間<rt>じかん</rt></ruby>は<ruby>十分<rt>じゅうぶん</rt></ruby>ですか？', zh: '轉機時間足夠嗎？', en: 'Do I have enough time for my connection?' },
        { jp: '手荷物タグの行き先を確認したいです。', say: 'てにもつタグのいきさきをかくにんしたいです。', ruby: '<ruby>手荷物<rt>てにもつ</rt></ruby>タグの<ruby>行<rt>い</rt></ruby>き<ruby>先<rt>さき</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>したいです。', zh: '我想確認行李標籤的目的地。', en: 'I would like to confirm the destination on my baggage tag.' }
      ]
    }
  ]
}
