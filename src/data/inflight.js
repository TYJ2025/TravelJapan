// 機内で — communicating with cabin crew during a flight.
export const inflight = {
  id: 'inflight-cabin',
  title: 'In-Flight Conversation',
  titleJp: '機内での会話',
  emoji: '🛫',
  staffAvatar: '🧑‍✈️',
  staffLabel: '客室乗務員 · Flight Attendant',
  description: 'Ask for help with carry-on baggage, meals, drinks, comfort items and connection information during a flight.',
  lines: [
    {
      speaker: 'staff',
      jp: 'お手荷物は、前の座席の下か、上の棚にお入れください。',
      say: 'おてにもつわ、まえのざせきのしたか、うえのたなにおいれください。',
      ruby: 'お<ruby>手荷物<rt>てにもつ</rt></ruby>は、<ruby>前<rt>まえ</rt></ruby>の<ruby>座席<rt>ざせき</rt></ruby>の<ruby>下<rt>した</rt></ruby>か、<ruby>上<rt>うえ</rt></ruby>の<ruby>棚<rt>たな</rt></ruby>にお<ruby>入<rt>い</rt></ruby>れください。',
      romaji: 'Otenimotsu wa, mae no zaseki no shita ka, ue no tana ni oire kudasai.',
      zh: '請將手提行李放在前方座位下方或上方置物櫃。',
      en: 'Please place your carry-on baggage under the seat in front of you or in the overhead bin.'
    },
    {
      speaker: 'you',
      jp: 'すみません。このバッグを上の棚に入れるのを手伝っていただけますか？',
      say: 'すみません。このバッグをうえのたなにいれるのをてつだっていただけますか？',
      ruby: 'すみません。このバッグを<ruby>上<rt>うえ</rt></ruby>の<ruby>棚<rt>たな</rt></ruby>に<ruby>入<rt>い</rt></ruby>れるのを<ruby>手伝<rt>てつだ</rt></ruby>っていただけますか？',
      romaji: 'Sumimasen. Kono baggu o ue no tana ni ireru no o tetsudatte itadakemasu ka?',
      zh: '不好意思，可以幫我把這個包包放到上方置物櫃嗎？',
      en: 'Excuse me, could you help me put this bag in the overhead bin?'
    },
    {
      speaker: 'staff',
      jp: 'はい、お預かりします。どうぞお席にお掛けください。',
      say: 'はい、おあずかりします。どうぞおせきにおかけください。',
      ruby: 'はい、お<ruby>預<rt>あず</rt></ruby>かりします。どうぞお<ruby>席<rt>せき</rt></ruby>にお<ruby>掛<rt>か</rt></ruby>けください。',
      romaji: 'Hai, oazukari shimasu. Dōzo oseki ni okake kudasai.',
      zh: '好的，我來幫您。請坐到您的座位上。',
      en: 'Certainly, I will take care of it. Please take your seat.'
    },
    {
      speaker: 'staff',
      jp: 'まもなく離陸いたします。シートベルトをお締めください。',
      say: 'まもなくりりくいたします。シートベルトをおしめください。',
      ruby: 'まもなく<ruby>離陸<rt>りりく</rt></ruby>いたします。シートベルトをお<ruby>締<rt>し</rt></ruby>めください。',
      romaji: 'Mamonaku ririku itashimasu. Shīto beruto o oshime kudasai.',
      zh: '即將起飛，請繫好安全帶。',
      en: 'We will take off shortly. Please fasten your seatbelt.'
    },
    {
      speaker: 'you',
      jp: '少し寒いので、毛布を一枚いただけますか？',
      say: 'すこしさむいので、もうふをいちまいいただけますか？',
      ruby: '<ruby>少<rt>すこ</rt></ruby>し<ruby>寒<rt>さむ</rt></ruby>いので、<ruby>毛布<rt>もうふ</rt></ruby>を<ruby>一枚<rt>いちまい</rt></ruby>いただけますか？',
      romaji: 'Sukoshi samui node, mōfu o ichimai itadakemasu ka?',
      zh: '我有點冷，可以給我一條毛毯嗎？',
      en: 'I am a little cold. Could I have a blanket, please?'
    },
    {
      speaker: 'staff',
      jp: 'もちろんです。こちらをどうぞ。',
      say: 'もちろんです。こちらをどうぞ。',
      ruby: 'もちろんです。こちらをどうぞ。',
      romaji: 'Mochiron desu. Kochira o dōzo.',
      zh: '當然可以。這條給您。',
      en: 'Of course. Here you are.'
    },
    {
      speaker: 'staff',
      jp: 'お食事はチキンと魚、どちらになさいますか？',
      say: 'おしょくじわチキンとさかな、どちらになさいますか？',
      ruby: 'お<ruby>食事<rt>しょくじ</rt></ruby>はチキンと<ruby>魚<rt>さかな</rt></ruby>、どちらになさいますか？',
      romaji: 'Oshokuji wa chikin to sakana, dochira ni nasaimasu ka?',
      zh: '餐點要雞肉還是魚呢？',
      en: 'For your meal, would you prefer chicken or fish?'
    },
    {
      speaker: 'you',
      jp: '魚をお願いします。',
      say: 'さかなをおねがいします。',
      ruby: '<ruby>魚<rt>さかな</rt></ruby>をお<ruby>願<rt>ねが</rt></ruby>いします。',
      romaji: 'Sakana o onegai shimasu.',
      zh: '麻煩魚餐。',
      en: 'Fish, please.'
    },
    {
      speaker: 'staff',
      jp: 'お飲み物はいかがですか？',
      say: 'おのみものわいかがですか？',
      ruby: 'お<ruby>飲<rt>の</rt></ruby>み<ruby>物<rt>もの</rt></ruby>はいかがですか？',
      romaji: 'Onomimono wa ikaga desu ka?',
      zh: '需要喝點什麼嗎？',
      en: 'Would you like something to drink?'
    },
    {
      speaker: 'you',
      jp: 'お水と緑茶をお願いします。',
      say: 'おみずとりょくちゃをおねがいします。',
      ruby: 'お<ruby>水<rt>みず</rt></ruby>と<ruby>緑茶<rt>りょくちゃ</rt></ruby>をお<ruby>願<rt>ねが</rt></ruby>いします。',
      romaji: 'Omizu to ryokucha o onegai shimasu.',
      zh: '麻煩給我水和綠茶。',
      en: 'Water and green tea, please.'
    },
    {
      speaker: 'staff',
      jp: 'かしこまりました。少々お待ちください。',
      say: 'かしこまりました。しょうしょうおまちください。',
      ruby: 'かしこまりました。<ruby>少々<rt>しょうしょう</rt></ruby>お<ruby>待<rt>ま</rt></ruby>ちください。',
      romaji: 'Kashikomarimashita. Shōshō omachi kudasai.',
      zh: '好的，請稍候。',
      en: 'Certainly. Please wait a moment.'
    },
    {
      speaker: 'you',
      jp: 'すみません。乗り継ぎのゲートは、到着後に確認できますか？',
      say: 'すみません。のりつぎのゲートわ、とうちゃくごにかくにんできますか？',
      ruby: 'すみません。<ruby>乗<rt>の</rt></ruby>り<ruby>継<rt>つ</rt></ruby>ぎのゲートは、<ruby>到着後<rt>とうちゃくご</rt></ruby>に<ruby>確認<rt>かくにん</rt></ruby>できますか？',
      romaji: 'Sumimasen. Noritsugi no gēto wa, tōchakugo ni kakunin dekimasu ka?',
      zh: '不好意思，轉機登機門可以在抵達後確認嗎？',
      en: 'Excuse me, can I confirm my connecting gate after we arrive?'
    },
    {
      speaker: 'staff',
      jp: 'はい、到着後に案内表示をご確認ください。',
      say: 'はい、とうちゃくごにあんないひょうじをごかくにんください。',
      ruby: 'はい、<ruby>到着後<rt>とうちゃくご</rt></ruby>に<ruby>案内表示<rt>あんないひょうじ</rt></ruby>をご<ruby>確認<rt>かくにん</rt></ruby>ください。',
      romaji: 'Hai, tōchakugo ni annai-hyōji o go-kakunin kudasai.',
      zh: '可以，抵達後請查看指示牌。',
      en: 'Yes. Please check the information displays after arrival.'
    },
    {
      speaker: 'staff',
      jp: 'まもなく着陸いたします。シートベルトをお締めになり、座席をお戻しください。',
      say: 'まもなくちゃくりくいたします。シートベルトをおしめになり、ざせきをおもどしください。',
      ruby: 'まもなく<ruby>着陸<rt>ちゃくりく</rt></ruby>いたします。シートベルトをお<ruby>締<rt>し</rt></ruby>めになり、<ruby>座席<rt>ざせき</rt></ruby>をお<ruby>戻<rt>もど</rt></ruby>しください。',
      romaji: 'Mamonaku chakuriku itashimasu. Shīto beruto o oshime ni nari, zaseki o omodoshi kudasai.',
      zh: '即將降落，請繫好安全帶並將座椅恢復原位。',
      en: 'We will land shortly. Please fasten your seatbelt and return your seat to the upright position.'
    }
  ],
  phrases: [
    {
      title: '座席・手荷物 · Seat and carry-on baggage',
      items: [
        { jp: '私の座席はどこですか？', say: 'わたしのざせきわどこですか？', ruby: '<ruby>私<rt>わたし</rt></ruby>の<ruby>座席<rt>ざせき</rt></ruby>はどこですか？', zh: '我的座位在哪裡？', en: 'Where is my seat?' },
        { jp: '窓側の席に変えられますか？', say: 'まどがわのせきにかえられますか？', ruby: '<ruby>窓側<rt>まどがわ</rt></ruby>の<ruby>席<rt>せき</rt></ruby>に<ruby>変<rt>か</rt></ruby>えられますか？', zh: '可以換成靠窗座位嗎？', en: 'Could I change to a window seat?' },
        { jp: '荷物を上の棚に入れるのを手伝っていただけますか？', say: 'にもつをうえのたなにいれるのをてつだっていただけますか？', ruby: '<ruby>荷物<rt>にもつ</rt></ruby>を<ruby>上<rt>うえ</rt></ruby>の<ruby>棚<rt>たな</rt></ruby>に<ruby>入<rt>い</rt></ruby>れるのを<ruby>手伝<rt>てつだ</rt></ruby>っていただけますか？', zh: '可以幫我把行李放到上方置物櫃嗎？', en: 'Could you help me put my baggage in the overhead bin?' },
        { jp: 'シートを倒してもいいですか？', say: 'シートをたおしてもいいですか？', ruby: 'シートを<ruby>倒<rt>たお</rt></ruby>してもいいですか？', zh: '我可以把座椅往後倒嗎？', en: 'May I recline my seat?' }
      ]
    },
    {
      title: '機内サービス · In-flight service',
      items: [
        { jp: '毛布を一枚いただけますか？', say: 'もうふをいちまいいただけますか？', ruby: '<ruby>毛布<rt>もうふ</rt></ruby>を<ruby>一枚<rt>いちまい</rt></ruby>いただけますか？', zh: '可以給我一條毛毯嗎？', en: 'Could I have a blanket, please?' },
        { jp: '枕をいただけますか？', say: 'まくらをいただけますか？', ruby: '<ruby>枕<rt>まくら</rt></ruby>をいただけますか？', zh: '可以給我枕頭嗎？', en: 'Could I have a pillow, please?' },
        { jp: 'ヘッドホンをください。', ruby: 'ヘッドホンをください。', zh: '請給我耳機。', en: 'Please give me headphones.' },
        { jp: 'お水をもう一杯お願いします。', say: 'おみずをもういっぱいおねがいします。', ruby: 'お<ruby>水<rt>みず</rt></ruby>をもう<ruby>一杯<rt>いっぱい</rt></ruby>お<ruby>願<rt>ねが</rt></ruby>いします。', zh: '麻煩再給我一杯水。', en: 'One more glass of water, please.' }
      ]
    },
    {
      title: '食事・アレルギー · Meals and allergies',
      items: [
        { jp: '魚をお願いします。', say: 'さかなをおねがいします。', ruby: '<ruby>魚<rt>さかな</rt></ruby>をお<ruby>願<rt>ねが</rt></ruby>いします。', zh: '麻煩魚餐。', en: 'Fish, please.' },
        { jp: 'ベジタリアンミールを予約しています。', say: 'ベジタリアンミールをよやくしています。', ruby: 'ベジタリアンミールを<ruby>予約<rt>よやく</rt></ruby>しています。', zh: '我有預訂素食餐。', en: 'I have reserved a vegetarian meal.' },
        { jp: 'えびにアレルギーがあります。', say: 'えびにアレルギーがあります。', ruby: 'えびにアレルギーがあります。', zh: '我對蝦子過敏。', en: 'I am allergic to shrimp.' },
        { jp: 'この料理には何が入っていますか？', say: 'このりょうりにわなにがはいっていますか？', ruby: 'この<ruby>料理<rt>りょうり</rt></ruby>には<ruby>何<rt>なに</rt></ruby>が<ruby>入<rt>はい</rt></ruby>っていますか？', zh: '這道餐點裡有什麼？', en: 'What is in this meal?' }
      ]
    },
    {
      title: '快適・体調 · Comfort and feeling unwell',
      items: [
        { jp: 'お手洗いはどこですか？', say: 'おてあらいわどこですか？', ruby: 'お<ruby>手洗<rt>てあら</rt></ruby>いはどこですか？', zh: '洗手間在哪裡？', en: 'Where is the restroom?' },
        { jp: '気分が悪いです。', say: 'きぶんがわるいです。', ruby: '<ruby>気分<rt>きぶん</rt></ruby>が<ruby>悪<rt>わる</rt></ruby>いです。', zh: '我覺得不舒服。', en: 'I do not feel well.' },
        { jp: 'エチケット袋をください。', say: 'エチケットぶくろをください。', ruby: 'エチケット<ruby>袋<rt>ぶくろ</rt></ruby>をください。', zh: '請給我嘔吐袋。', en: 'Please give me an airsickness bag.' },
        { jp: '少し席を離れてもいいですか？', say: 'すこしせきをはなれてもいいですか？', ruby: '<ruby>少<rt>すこ</rt></ruby>し<ruby>席<rt>せき</rt></ruby>を<ruby>離<rt>はな</rt></ruby>れてもいいですか？', zh: '我可以暫時離開座位嗎？', en: 'May I leave my seat for a moment?' }
      ]
    },
    {
      title: '到着・乗り継ぎ · Arrival and connections',
      items: [
        { jp: '到着予定時刻は何時ですか？', say: 'とうちゃくよていじこくわなんじですか？', ruby: '<ruby>到着予定時刻<rt>とうちゃくよていじこく</rt></ruby>は<ruby>何時<rt>なんじ</rt></ruby>ですか？', zh: '預計抵達時間是幾點？', en: 'What is the estimated arrival time?' },
        { jp: '乗り継ぎのゲートはどこですか？', say: 'のりつぎのゲートわどこですか？', ruby: '<ruby>乗<rt>の</rt></ruby>り<ruby>継<rt>つ</rt></ruby>ぎのゲートはどこですか？', zh: '轉機登機門在哪裡？', en: 'Where is the connecting gate?' },
        { jp: '入国カードをください。', say: 'にゅうこくカードをください。', ruby: '<ruby>入国<rt>にゅうこく</rt></ruby>カードをください。', zh: '請給我入境卡。', en: 'Please give me an arrival card.' },
        { jp: '降りる準備をしてもいいですか？', say: 'おりるじゅんびをしてもいいですか？', ruby: '<ruby>降<rt>お</rt></ruby>りる<ruby>準備<rt>じゅんび</rt></ruby>をしてもいいですか？', zh: '我可以準備下飛機了嗎？', en: 'May I get ready to disembark?' }
      ]
    }
  ]
}
