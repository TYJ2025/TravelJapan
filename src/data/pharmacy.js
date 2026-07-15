// 薬局・ドラッグストア — explaining symptoms and buying over-the-counter medicine.
export const pharmacy = {
  id: 'pharmacy',
  title: 'At the Pharmacy',
  titleJp: '薬局・ドラッグストア',
  emoji: '💊',
  staffAvatar: '💊',
  staffLabel: '薬剤師 · Pharmacist',
  description: 'Explain common symptoms, ask about medicine and understand important precautions.',
  lines: [
    {
      speaker: 'staff',
      jp: 'いらっしゃいませ。何かお探しですか？',
      say: 'いらっしゃいませ。なにかおさがしですか？',
      ruby: 'いらっしゃいませ。<ruby>何<rt>なに</rt></ruby>かお<ruby>探<rt>さが</rt></ruby>しですか？',
      romaji: 'Irasshaimase. Nanika osagashi desu ka?',
      zh: '歡迎光臨。您在找什麼嗎？',
      en: 'Welcome. Are you looking for something?'
    },
    {
      speaker: 'you',
      jp: 'すみません、風邪薬を探しています。',
      say: 'すみません、かぜぐすりをさがしています。',
      ruby: 'すみません、<ruby>風邪薬<rt>かぜぐすり</rt></ruby>を<ruby>探<rt>さが</rt></ruby>しています。',
      romaji: 'Sumimasen, kazegusuri o sagashite imasu.',
      zh: '不好意思，我在找感冒藥。',
      en: 'Excuse me, I am looking for cold medicine.'
    },
    {
      speaker: 'staff',
      jp: 'どのような症状ですか？',
      say: 'どのようなしょうじょうですか？',
      ruby: 'どのような<ruby>症状<rt>しょうじょう</rt></ruby>ですか？',
      romaji: 'Dono yōna shōjō desu ka?',
      zh: '您有哪些症狀？',
      en: 'What symptoms do you have?'
    },
    {
      speaker: 'you',
      jp: 'のどが痛くて、せきが出ます。',
      say: 'のどがいたくて、せきがでます。',
      ruby: 'のどが<ruby>痛<rt>いた</rt></ruby>くて、せきが<ruby>出<rt>で</rt></ruby>ます。',
      romaji: 'Nodo ga itakute, seki ga demasu.',
      zh: '我喉嚨痛，而且咳嗽。',
      en: 'I have a sore throat and a cough.'
    },
    {
      speaker: 'staff',
      jp: '熱はありますか？',
      say: 'ねつわありますか？',
      ruby: '<ruby>熱<rt>ねつ</rt></ruby>はありますか？',
      romaji: 'Netsu wa arimasu ka?',
      zh: '有發燒嗎？',
      en: 'Do you have a fever?'
    },
    {
      speaker: 'you',
      jp: 'いいえ、熱はありません。',
      say: 'いいえ、ねつわありません。',
      ruby: 'いいえ、<ruby>熱<rt>ねつ</rt></ruby>はありません。',
      romaji: 'Iie, netsu wa arimasen.',
      zh: '沒有，沒有發燒。',
      en: 'No, I do not have a fever.'
    },
    {
      speaker: 'you',
      jp: '運転する予定があるので、眠くなりにくい薬はありますか？',
      say: 'うんてんするよていがあるので、ねむくなりにくいくすりわありますか？',
      ruby: '<ruby>運転<rt>うんてん</rt></ruby>する<ruby>予定<rt>よてい</rt></ruby>があるので、<ruby>眠<rt>ねむ</rt></ruby>くなりにくい<ruby>薬<rt>くすり</rt></ruby>はありますか？',
      romaji: 'Unten suru yotei ga aru node, nemuku nari nikui kusuri wa arimasu ka?',
      zh: '我預計要開車，有比較不容易想睡的藥嗎？',
      en: 'I plan to drive. Do you have medicine less likely to cause drowsiness?'
    },
    {
      speaker: 'staff',
      jp: 'では、こちらはいかがですか？説明書をよく読んでください。',
      say: 'では、こちらわいかがですか？せつめいしょをよくよんでください。',
      ruby: 'では、こちらはいかがですか？<ruby>説明書<rt>せつめいしょ</rt></ruby>をよく<ruby>読<rt>よ</rt></ruby>んでください。',
      romaji: 'Dewa, kochira wa ikaga desu ka? Setsumeisho o yoku yonde kudasai.',
      zh: '那這個如何？請仔細閱讀說明書。',
      en: 'How about this one? Please read the instructions carefully.'
    },
    {
      speaker: 'you',
      jp: 'この薬は一日何回飲みますか？',
      say: 'このくすりわいちにちなんかいのみますか？',
      ruby: 'この<ruby>薬<rt>くすり</rt></ruby>は<ruby>一日<rt>いちにち</rt></ruby><ruby>何回<rt>なんかい</rt></ruby><ruby>飲<rt>の</rt></ruby>みますか？',
      romaji: 'Kono kusuri wa ichinichi nankai nomimasu ka?',
      zh: '這個藥一天吃幾次？',
      en: 'How many times a day should I take this medicine?'
    },
    {
      speaker: 'staff',
      jp: 'パッケージの用法・用量を確認してください。症状が続く場合は病院へ行ってください。',
      say: 'パッケージのようほうようりょうをかくにんしてください。しょうじょうがつづくばあいわびょういんえいってください。',
      ruby: 'パッケージの<ruby>用法<rt>ようほう</rt></ruby>・<ruby>用量<rt>ようりょう</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>してください。<ruby>症状<rt>しょうじょう</rt></ruby>が<ruby>続<rt>つづ</rt></ruby>く<ruby>場合<rt>ばあい</rt></ruby>は<ruby>病院<rt>びょういん</rt></ruby>へ<ruby>行<rt>い</rt></ruby>ってください。',
      romaji: 'Pakkēji no yōhō yōryō o kakunin shite kudasai. Shōjō ga tsuzuku baai wa byōin e itte kudasai.',
      zh: '請確認包裝上的用法與用量。若症狀持續，請去醫院。',
      en: 'Please check the directions and dosage on the package. If symptoms persist, please see a doctor.'
    },
    {
      speaker: 'you',
      jp: 'わかりました。ありがとうございます。',
      ruby: 'わかりました。ありがとうございます。',
      romaji: 'Wakarimashita. Arigatō gozaimasu.',
      zh: '了解，謝謝您。',
      en: 'I understand. Thank you.'
    }
  ],
  phrases: [
    {
      title: '症状を伝える · Explaining symptoms',
      items: [
        { jp: '頭が痛いです。', say: 'あたまがいたいです。', ruby: '<ruby>頭<rt>あたま</rt></ruby>が<ruby>痛<rt>いた</rt></ruby>いです。', zh: '我頭痛。', en: 'I have a headache.' },
        { jp: 'お腹が痛いです。', say: 'おなかがいたいです。', ruby: 'お<ruby>腹<rt>なか</rt></ruby>が<ruby>痛<rt>いた</rt></ruby>いです。', zh: '我肚子痛。', en: 'I have a stomachache.' },
        { jp: 'のどが痛くて、せきが出ます。', say: 'のどがいたくて、せきがでます。', ruby: 'のどが<ruby>痛<rt>いた</rt></ruby>くて、せきが<ruby>出<rt>で</rt></ruby>ます。', zh: '我喉嚨痛，而且咳嗽。', en: 'I have a sore throat and a cough.' },
        { jp: '熱があります。', say: 'ねつがあります。', ruby: '<ruby>熱<rt>ねつ</rt></ruby>があります。', zh: '我發燒。', en: 'I have a fever.' }
      ]
    },
    {
      title: '薬について · About medicine',
      items: [
        { jp: '眠くなりますか？', say: 'ねむくなりますか？', ruby: '<ruby>眠<rt>ねむ</rt></ruby>くなりますか？', zh: '會讓人想睡嗎？', en: 'Will it make me drowsy?' },
        { jp: 'アレルギーがあります。', ruby: 'アレルギーがあります。', zh: '我有過敏。', en: 'I have an allergy.' },
        { jp: '今、ほかの薬を飲んでいます。', say: 'いま、ほかのくすりをのんでいます。', ruby: '<ruby>今<rt>いま</rt></ruby>、ほかの<ruby>薬<rt>くすり</rt></ruby>を<ruby>飲<rt>の</rt></ruby>んでいます。', zh: '我目前也在吃其他藥。', en: 'I am currently taking other medicine.' },
        { jp: '英語の説明書はありますか？', say: 'えいごのせつめいしょわありますか？', ruby: '<ruby>英語<rt>えいご</rt></ruby>の<ruby>説明書<rt>せつめいしょ</rt></ruby>はありますか？', zh: '有英文說明書嗎？', en: 'Is there an English instruction leaflet?' }
      ]
    },
    {
      title: '受診が必要なとき · When you need a doctor',
      items: [
        { jp: '病院を紹介してもらえますか？', say: 'びょういんをしょうかいしてもらえますか？', ruby: '<ruby>病院<rt>びょういん</rt></ruby>を<ruby>紹介<rt>しょうかい</rt></ruby>してもらえますか？', zh: '可以幫我介紹醫院嗎？', en: 'Could you recommend a hospital?' },
        { jp: '英語が話せる医者はいますか？', say: 'えいごがはなせるいしゃわいますか？', ruby: '<ruby>英語<rt>えいご</rt></ruby>が<ruby>話<rt>はな</rt></ruby>せる<ruby>医者<rt>いしゃ</rt></ruby>はいますか？', zh: '有會說英文的醫生嗎？', en: 'Is there a doctor who speaks English?' },
        { jp: '救急車を呼んでください。', say: 'きゅうきゅうしゃをよんでください。', ruby: '<ruby>救急車<rt>きゅうきゅうしゃ</rt></ruby>を<ruby>呼<rt>よ</rt></ruby>んでください。', zh: '請叫救護車。', en: 'Please call an ambulance.' }
      ]
    }
  ]
}
