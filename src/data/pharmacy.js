// 薬局・ドラッグストア — explaining symptoms and buying over-the-counter medicine.
export const pharmacy = {
  id: 'pharmacy',
  title: 'At the Pharmacy',
  titleJp: '薬局・ドラッグストア',
  emoji: '💊',
  staffAvatar: '💊',
  staffLabel: '薬剤師 · Pharmacist',
  description: 'Explain common symptoms, ask about medicine and understand important precautions.',
  menuTabLabel: '品項 · Items',
  menuIntro: '🔊 聽發音 · 🎤 練習品項 · 藥品名稱僅供溝通；購買前請向藥劑師確認是否適合自己。',
  menuPatternLabel: '購買與詢問句型 · Purchase and question patterns',
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
  ],
  menu: [
    {
      title: '市販薬の種類 · Common OTC categories',
      items: [
        { emoji: '💊', jp: '風邪薬', say: 'かぜぐすり', ruby: '<ruby>風邪薬<rt>かぜぐすり</rt></ruby>', romaji: 'kazegusuri', zh: '感冒藥', en: 'cold medicine', desc: '請向藥劑師說明症狀、過敏史與正在使用的藥物，再確認適合的品項。' },
        { emoji: '💊', jp: '解熱鎮痛薬', say: 'げねつちんつうやく', ruby: '<ruby>解熱<rt>げねつ</rt></ruby><ruby>鎮痛薬<rt>ちんつうやく</rt></ruby>', romaji: 'genetsu chintsūyaku', zh: '退燒止痛藥', en: 'fever and pain reliever', desc: '若要購買退燒或止痛類產品，請先告知症狀與其他正在使用的藥物。' },
        { emoji: '💊', jp: '胃腸薬', say: 'いちょうやく', ruby: '<ruby>胃腸薬<rt>いちょうやく</rt></ruby>', romaji: 'ichōyaku', zh: '腸胃藥', en: 'stomach medicine', desc: '可描述胃痛、胃脹或消化不適；症狀嚴重或持續時應就醫。' },
        { emoji: '💊', jp: '下痢止め', say: 'げりどめ', ruby: '<ruby>下痢<rt>げり</rt></ruby>止め', romaji: 'geri-dome', zh: '止瀉藥', en: 'anti-diarrheal medicine', desc: '腹瀉伴隨高燒、血便或嚴重脫水時，應尋求醫療協助而非自行處理。' },
        { emoji: '💊', jp: '酔い止め', say: 'よいどめ', ruby: '<ruby>酔<rt>よ</rt></ruby>い止め', romaji: 'yoi-dome', zh: '暈車／暈船藥', en: 'motion-sickness medicine', desc: '可詢問是否容易嗜睡；需要開車或操作設備時尤其應向藥劑師確認。' },
        { emoji: '💧', jp: '目薬', say: 'めぐすり', ruby: '<ruby>目薬<rt>めぐすり</rt></ruby>', romaji: 'megusuri', zh: '眼藥水', en: 'eye drops', desc: '可說明乾澀、疲勞或過敏等情況；眼痛、視力改變等應及早就醫。' },
        { emoji: '💊', jp: 'アレルギーの薬', say: 'アレルギーのくすり', ruby: 'アレルギーの<ruby>薬<rt>くすり</rt></ruby>', romaji: 'arerugī no kusuri', zh: '過敏藥', en: 'allergy medicine', desc: '部分產品可能使人嗜睡；請告知藥劑師是否需開車及目前服用的藥物。' }
      ]
    },
    {
      title: 'ケア用品 · Care essentials',
      items: [
        { emoji: '🌡️', jp: '体温計', say: 'たいおんけい', ruby: '<ruby>体温計<rt>たいおんけい</rt></ruby>', romaji: 'taionkei', zh: '體溫計', en: 'thermometer', desc: '可用於確認是否發燒；高燒或持續不適時應考慮就醫。' },
        { emoji: '🩹', jp: '絆創膏', say: 'ばんそうこう', ruby: '<ruby>絆創膏<rt>ばんそうこう</rt></ruby>', romaji: 'bansōkō', zh: 'OK 繃／創可貼', en: 'adhesive bandages', desc: '適合小擦傷的基本用品；傷口深、污染或持續出血時應就醫。' },
        { emoji: '🧴', jp: '消毒液', say: 'しょうどくえき', ruby: '<ruby>消毒液<rt>しょうどくえき</rt></ruby>', romaji: 'shōdoku-eki', zh: '消毒液', en: 'antiseptic solution', desc: '用於傷口周邊處理前，請先向藥劑師確認適用方式。' },
        { emoji: '❄️', jp: '冷却シート', say: 'れいきゃくシート', ruby: '<ruby>冷却<rt>れいきゃく</rt></ruby>シート', romaji: 'reikyaku shīto', zh: '退熱貼／冷敷貼', en: 'cooling sheet', desc: '可作為舒緩用品，但不取代發燒或其他症狀的醫療評估。' },
        { emoji: '🩹', jp: '湿布', say: 'しっぷ', ruby: '<ruby>湿布<rt>しっぷ</rt></ruby>', romaji: 'shippu', zh: '痠痛貼布', en: 'medicated patch', desc: '可先向藥劑師說明痠痛位置、皮膚狀況與過敏史。' },
        { emoji: '🧴', jp: '日焼け止め', say: 'ひやけどめ', ruby: '<ruby>日焼<rt>ひや</rt></ruby>け止め', romaji: 'hiyake-dome', zh: '防曬乳', en: 'sunscreen', desc: '戶外旅遊常用；可依臉部、身體或敏感肌需求選擇。' },
        { emoji: '🦟', jp: '虫よけスプレー', say: 'むしよけスプレー', ruby: '<ruby>虫<rt>むし</rt></ruby>よけスプレー', romaji: 'mushi-yoke supurē', zh: '防蚊噴霧', en: 'insect repellent', desc: '夏季與戶外行程常用；請依包裝與年齡／使用部位說明選擇。' }
      ]
    }
  ]
}
