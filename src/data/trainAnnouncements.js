// 電車の車内放送 — common onboard announcements for listening practice.
export const trainAnnouncements = {
  id: 'train-announcements',
  title: 'Train Announcements',
  titleJp: '電車の車内放送',
  emoji: '🚃',
  staffAvatar: '📢',
  staffLabel: '車内放送 · Train Announcement',
  description: 'Understand next stops, train types, transfers, door directions, safety notices and delay announcements.',
  lines: [
    {
      speaker: 'staff',
      jp: 'まもなく、渋谷、渋谷です。お出口は右側です。',
      say: 'まもなく、しぶや、しぶやです。おでぐちわみぎがわです。',
      ruby: 'まもなく、<ruby>渋谷<rt>しぶや</rt></ruby>、<ruby>渋谷<rt>しぶや</rt></ruby>です。お<ruby>出口<rt>でぐち</rt></ruby>は<ruby>右側<rt>みぎがわ</rt></ruby>です。',
      romaji: 'Mamonaku, Shibuya, Shibuya desu. Odeguchi wa migigawa desu.',
      zh: '即將抵達澀谷、澀谷站。出口在右側。',
      en: 'We will soon arrive at Shibuya. The doors will open on the right.'
    },
    {
      speaker: 'staff',
      jp: '次は、表参道に停まります。',
      say: 'つぎわ、おもてさんどうにとまります。',
      ruby: '<ruby>次<rt>つぎ</rt></ruby>は、<ruby>表参道<rt>おもてさんどう</rt></ruby>に<ruby>停<rt>と</rt></ruby>まります。',
      romaji: 'Tsugi wa, Omote-sandō ni tomarimasu.',
      zh: '下一站停表參道。',
      en: 'The next stop is Omote-sando.'
    },
    {
      speaker: 'staff',
      jp: 'この電車は、各駅停車、池袋行きです。',
      say: 'このでんしゃわ、かくえきていしゃ、いけぶくろゆきです。',
      ruby: 'この<ruby>電車<rt>でんしゃ</rt></ruby>は、<ruby>各駅停車<rt>かくえきていしゃ</rt></ruby>、<ruby>池袋行<rt>いけぶくろゆ</rt></ruby>きです。',
      romaji: 'Kono densha wa, kakueki-teisha, Ikebukuro-yuki desu.',
      zh: '這班是開往池袋的各站停靠列車。',
      en: 'This is a local train bound for Ikebukuro.'
    },
    {
      speaker: 'staff',
      jp: 'この電車は、快速、横浜行きです。次は、品川に停まります。',
      say: 'このでんしゃわ、かいそく、よこはまゆきです。つぎわ、しながわにとまります。',
      ruby: 'この<ruby>電車<rt>でんしゃ</rt></ruby>は、<ruby>快速<rt>かいそく</rt></ruby>、<ruby>横浜行<rt>よこはまゆ</rt></ruby>きです。<ruby>次<rt>つぎ</rt></ruby>は、<ruby>品川<rt>しながわ</rt></ruby>に<ruby>停<rt>と</rt></ruby>まります。',
      romaji: 'Kono densha wa, kaisoku, Yokohama-yuki desu. Tsugi wa, Shinagawa ni tomarimasu.',
      zh: '這班是開往橫濱的快速列車。下一站停品川。',
      en: 'This is a rapid train bound for Yokohama. The next stop is Shinagawa.'
    },
    {
      speaker: 'staff',
      jp: 'この駅で、山手線にお乗り換えできます。',
      say: 'このえきで、やまのてせんにおのりかえできます。',
      ruby: 'この<ruby>駅<rt>えき</rt></ruby>で、<ruby>山手線<rt>やまのてせん</rt></ruby>にお<ruby>乗<rt>の</rt></ruby>り<ruby>換<rt>か</rt></ruby>えできます。',
      romaji: 'Kono eki de, Yamanote-sen ni onorikae dekimasu.',
      zh: '可在這一站轉乘山手線。',
      en: 'You can transfer to the Yamanote Line at this station.'
    },
    {
      speaker: 'staff',
      jp: 'ドアが閉まります。ご注意ください。',
      say: 'ドアがしまります。ごちゅういください。',
      ruby: 'ドアが<ruby>閉<rt>し</rt></ruby>まります。ご<ruby>注意<rt>ちゅうい</rt></ruby>ください。',
      romaji: 'Doa ga shimarimasu. Go-chūi kudasai.',
      zh: '車門即將關閉，請注意。',
      en: 'The doors are closing. Please take care.'
    },
    {
      speaker: 'staff',
      jp: '駆け込み乗車は危険ですので、おやめください。',
      say: 'かけこみじょうしゃわきけんですので、おやめください。',
      ruby: '<ruby>駆<rt>か</rt></ruby>け<ruby>込<rt>こ</rt></ruby>み<ruby>乗車<rt>じょうしゃ</rt></ruby>は<ruby>危険<rt>きけん</rt></ruby>ですので、おやめください。',
      romaji: 'Kakekomi jōsha wa kiken desu node, oyame kudasai.',
      zh: '搶搭列車很危險，請勿這麼做。',
      en: 'Running onto the train is dangerous. Please do not do so.'
    },
    {
      speaker: 'staff',
      jp: '車内での通話はご遠慮ください。',
      say: 'しゃないでのつうわわごえんりょください。',
      ruby: '<ruby>車内<rt>しゃない</rt></ruby>での<ruby>通話<rt>つうわ</rt></ruby>はご<ruby>遠慮<rt>えんりょ</rt></ruby>ください。',
      romaji: 'Shanai de no tsūwa wa go-enryo kudasai.',
      zh: '請避免在車廂內通話。',
      en: 'Please refrain from making phone calls on the train.'
    },
    {
      speaker: 'staff',
      jp: '優先席付近では、携帯電話の電源をお切りください。',
      say: 'ゆうせんせきふきんでわ、けいたいでんわのでんげんをおきりください。',
      ruby: '<ruby>優先席<rt>ゆうせんせき</rt></ruby><ruby>付近<rt>ふきん</rt></ruby>では、<ruby>携帯電話<rt>けいたいでんわ</rt></ruby>の<ruby>電源<rt>でんげん</rt></ruby>をお<ruby>切<rt>き</rt></ruby>りください。',
      romaji: 'Yūsenseki fukin de wa, keitai denwa no dengen o okiri kudasai.',
      zh: '優先座附近請關閉手機電源。',
      en: 'Please switch off mobile phones near the priority seats.'
    },
    {
      speaker: 'staff',
      jp: '電車とホームの間が空いております。足元にご注意ください。',
      say: 'でんしゃとホームのあいだがあいております。あしもとにごちゅういください。',
      ruby: '<ruby>電車<rt>でんしゃ</rt></ruby>とホームの<ruby>間<rt>あいだ</rt></ruby>が<ruby>空<rt>あ</rt></ruby>いております。<ruby>足元<rt>あしもと</rt></ruby>にご<ruby>注意<rt>ちゅうい</rt></ruby>ください。',
      romaji: 'Densha to hōmu no aida ga aite orimasu. Ashimoto ni go-chūi kudasai.',
      zh: '列車與月台間有縫隙，請留意腳下。',
      en: 'There is a gap between the train and platform. Please watch your step.'
    },
    {
      speaker: 'staff',
      jp: 'ただいま、車両点検の影響で、約十分の遅れが出ています。',
      say: 'ただいま、しゃりょうてんけんのえいきょうで、やくじゅっぷんのおくれがでています。',
      ruby: 'ただいま、<ruby>車両点検<rt>しゃりょうてんけん</rt></ruby>の<ruby>影響<rt>えいきょう</rt></ruby>で、<ruby>約十分<rt>やくじゅっぷん</rt></ruby>の<ruby>遅<rt>おく</rt></ruby>れが<ruby>出<rt>で</rt></ruby>ています。',
      romaji: 'Tadaima, sharyō tenken no eikyō de, yaku juppun no okure ga dete imasu.',
      zh: '目前受車輛檢查影響，約有 10 分鐘延誤。',
      en: 'Due to a train inspection, there is currently an approximately ten-minute delay.'
    },
    {
      speaker: 'staff',
      jp: 'ただいま、運転を見合わせています。振替輸送をご利用ください。',
      say: 'ただいま、うんてんをみあわせています。ふりかえゆそうをごりようください。',
      ruby: 'ただいま、<ruby>運転<rt>うんてん</rt></ruby>を<ruby>見合<rt>みあ</rt></ruby>わせています。<ruby>振替輸送<rt>ふりかえゆそう</rt></ruby>をご<ruby>利用<rt>りよう</rt></ruby>ください。',
      romaji: 'Tadaima, unten o miawasete imasu. Furikae-yusō o go-riyō kudasai.',
      zh: '目前暫停行駛，請利用替代運輸服務。',
      en: 'Service is currently suspended. Please use the alternative transport service.'
    },
    {
      speaker: 'staff',
      jp: 'お忘れ物のないよう、ご注意ください。',
      say: 'おわすれもののないよう、ごちゅういください。',
      ruby: 'お<ruby>忘<rt>わす</rt></ruby>れ<ruby>物<rt>もの</rt></ruby>のないよう、ご<ruby>注意<rt>ちゅうい</rt></ruby>ください。',
      romaji: 'Owasurimono no nai yō, go-chūi kudasai.',
      zh: '請注意別遺忘隨身物品。',
      en: 'Please make sure you have not left anything behind.'
    },
    {
      speaker: 'staff',
      jp: '終点、横浜、横浜です。ご乗車ありがとうございました。',
      say: 'しゅうてん、よこはま、よこはまです。ごじょうしゃありがとうございました。',
      ruby: '<ruby>終点<rt>しゅうてん</rt></ruby>、<ruby>横浜<rt>よこはま</rt></ruby>、<ruby>横浜<rt>よこはま</rt></ruby>です。ご<ruby>乗車<rt>じょうしゃ</rt></ruby>ありがとうございました。',
      romaji: 'Shūten, Yokohama, Yokohama desu. Gojōsha arigatō gozaimashita.',
      zh: '終點站橫濱、橫濱站。感謝您搭乘。',
      en: 'This is the last stop, Yokohama. Thank you for travelling with us.'
    }
  ],
  phrases: [
    {
      title: '種別・行き先 · Train type and destination',
      items: [
        { jp: '各駅停車', say: 'かくえきていしゃ', ruby: '<ruby>各駅停車<rt>かくえきていしゃ</rt></ruby>', zh: '各站停靠／普通車', en: 'local train that stops at every station' },
        { jp: '快速', say: 'かいそく', ruby: '<ruby>快速<rt>かいそく</rt></ruby>', zh: '快速列車', en: 'rapid train' },
        { jp: '急行', say: 'きゅうこう', ruby: '<ruby>急行<rt>きゅうこう</rt></ruby>', zh: '急行列車', en: 'express train' },
        { jp: '特急', say: 'とっきゅう', ruby: '<ruby>特急<rt>とっきゅう</rt></ruby>', zh: '特急列車', en: 'limited express train' },
        { jp: '〜行き', say: 'ゆき', ruby: '〜<ruby>行<rt>ゆ</rt></ruby>き', zh: '開往～', en: 'bound for ~' }
      ]
    },
    {
      title: '停車・乗り換え · Stops and transfers',
      items: [
        { jp: 'まもなく〜です。', say: 'まもなく〜です。', ruby: 'まもなく〜です。', zh: '即將到～。', en: 'We will soon arrive at ~.' },
        { jp: '次は〜に停まります。', say: 'つぎわ〜にとまります。', ruby: '<ruby>次<rt>つぎ</rt></ruby>は〜に<ruby>停<rt>と</rt></ruby>まります。', zh: '下一站停～。', en: 'The next stop is ~.' },
        { jp: '〜にお乗り換えできます。', say: '〜におのりかえできます。', ruby: '〜にお<ruby>乗<rt>の</rt></ruby>り<ruby>換<rt>か</rt></ruby>えできます。', zh: '可轉乘～。', en: 'You can transfer to ~.' },
        { jp: 'お出口は左側です。', say: 'おでぐちわひだりがわです。', ruby: 'お<ruby>出口<rt>でぐち</rt></ruby>は<ruby>左側<rt>ひだりがわ</rt></ruby>です。', zh: '出口在左側。', en: 'The doors will open on the left.' },
        { jp: '終点です。', say: 'しゅうてんです。', ruby: '<ruby>終点<rt>しゅうてん</rt></ruby>です。', zh: '這是終點站。', en: 'This is the last stop.' }
      ]
    },
    {
      title: '安全案内 · Safety notices',
      items: [
        { jp: 'ドアが閉まります。', say: 'ドアがしまります。', ruby: 'ドアが<ruby>閉<rt>し</rt></ruby>まります。', zh: '車門即將關閉。', en: 'The doors are closing.' },
        { jp: '足元にご注意ください。', say: 'あしもとにごちゅういください。', ruby: '<ruby>足元<rt>あしもと</rt></ruby>にご<ruby>注意<rt>ちゅうい</rt></ruby>ください。', zh: '請留意腳下。', en: 'Please watch your step.' },
        { jp: '駆け込み乗車はおやめください。', say: 'かけこみじょうしゃわおやめください。', ruby: '<ruby>駆<rt>か</rt></ruby>け<ruby>込<rt>こ</rt></ruby>み<ruby>乗車<rt>じょうしゃ</rt></ruby>はおやめください。', zh: '請勿搶搭列車。', en: 'Please do not run onto the train.' },
        { jp: 'お忘れ物のないよう、ご注意ください。', say: 'おわすれもののないよう、ごちゅういください。', ruby: 'お<ruby>忘<rt>わす</rt></ruby>れ<ruby>物<rt>もの</rt></ruby>のないよう、ご<ruby>注意<rt>ちゅうい</rt></ruby>ください。', zh: '請注意別遺忘物品。', en: 'Please make sure you have not left anything behind.' }
      ]
    },
    {
      title: '遅延・運休 · Delays and service suspension',
      items: [
        { jp: '遅れが出ています。', say: 'おくれがでています。', ruby: '<ruby>遅<rt>おく</rt></ruby>れが<ruby>出<rt>で</rt></ruby>ています。', zh: '目前有延誤。', en: 'There is currently a delay.' },
        { jp: '運転を見合わせています。', say: 'うんてんをみあわせています。', ruby: '<ruby>運転<rt>うんてん</rt></ruby>を<ruby>見合<rt>みあ</rt></ruby>わせています。', zh: '目前暫停行駛。', en: 'Service is currently suspended.' },
        { jp: '振替輸送をご利用ください。', say: 'ふりかえゆそうをごりようください。', ruby: '<ruby>振替輸送<rt>ふりかえゆそう</rt></ruby>をご<ruby>利用<rt>りよう</rt></ruby>ください。', zh: '請利用替代運輸服務。', en: 'Please use the alternative transport service.' },
        { jp: '運転を再開しました。', say: 'うんてんをさいかいしました。', ruby: '<ruby>運転<rt>うんてん</rt></ruby>を<ruby>再開<rt>さいかい</rt></ruby>しました。', zh: '已恢復行駛。', en: 'Service has resumed.' }
      ]
    },
    {
      title: '聞き返す · Asking for confirmation',
      items: [
        { jp: 'この電車は〜に行きますか？', say: 'このでんしゃわ〜にいきますか？', ruby: 'この<ruby>電車<rt>でんしゃ</rt></ruby>は〜に<ruby>行<rt>い</rt></ruby>きますか？', zh: '這班車會到～嗎？', en: 'Does this train go to ~?' },
        { jp: '〜には停まりますか？', say: '〜にわとまりますか？', ruby: '〜には<ruby>停<rt>と</rt></ruby>まりますか？', zh: '這班車停～嗎？', en: 'Does it stop at ~?' },
        { jp: '次は何駅ですか？', say: 'つぎわなんえきですか？', ruby: '<ruby>次<rt>つぎ</rt></ruby>は<ruby>何駅<rt>なんえき</rt></ruby>ですか？', zh: '下一站是哪一站？', en: 'What is the next station?' },
        { jp: 'ここで乗り換えですか？', say: 'ここでのりかえですか？', ruby: 'ここで<ruby>乗<rt>の</rt></ruby>り<ruby>換<rt>か</rt></ruby>えですか？', zh: '在這裡轉車嗎？', en: 'Do I transfer here?' }
      ]
    }
  ]
}
