// コンビニで買い物 — a common checkout conversation for quick travel essentials.
export const convenience = {
  id: 'convenience-store',
  title: 'Convenience Store',
  titleJp: 'コンビニで買い物',
  emoji: '🏪',
  staffAvatar: '🏪',
  staffLabel: '店員 · Store Staff',
  description: 'Buy a meal, ask for heating and a bag, and pay at the checkout.',
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
      jp: 'これをお願いします。',
      ruby: 'これをお<ruby>願<rt>ねが</rt></ruby>いします。',
      romaji: 'Kore o onegai shimasu.',
      zh: '這個，麻煩您。',
      en: 'This, please.'
    },
    {
      speaker: 'staff',
      jp: 'お弁当は温めますか？',
      say: 'おべんとうわあたためますか？',
      ruby: 'お<ruby>弁当<rt>べんとう</rt></ruby>は<ruby>温<rt>あたた</rt></ruby>めますか？',
      romaji: 'Obentō wa atatamemasu ka?',
      zh: '便當要加熱嗎？',
      en: 'Would you like the boxed meal heated?'
    },
    {
      speaker: 'you',
      jp: 'はい、温めてください。',
      say: 'はい、あたためてください。',
      ruby: 'はい、<ruby>温<rt>あたた</rt></ruby>めてください。',
      romaji: 'Hai, atatamete kudasai.',
      zh: '好，請幫我加熱。',
      en: 'Yes, please heat it.'
    },
    {
      speaker: 'staff',
      jp: 'お箸はお付けしますか？',
      say: 'おはしわおつけしますか？',
      ruby: 'お<ruby>箸<rt>はし</rt></ruby>はお<ruby>付<rt>つ</rt></ruby>けしますか？',
      romaji: 'Ohashi wa otsuke shimasu ka?',
      zh: '需要附筷子嗎？',
      en: 'Would you like chopsticks?'
    },
    {
      speaker: 'you',
      jp: 'はい、お箸をお願いします。',
      say: 'はい、おはしをおねがいします。',
      ruby: 'はい、お<ruby>箸<rt>はし</rt></ruby>をお<ruby>願<rt>ねが</rt></ruby>いします。',
      romaji: 'Hai, ohashi o onegai shimasu.',
      zh: '好，麻煩給我筷子。',
      en: 'Yes, chopsticks, please.'
    },
    {
      speaker: 'staff',
      jp: 'レジ袋はご利用ですか？',
      say: 'レジぶくろわごりようですか？',
      ruby: 'レジ<ruby>袋<rt>ぶくろ</rt></ruby>はご<ruby>利用<rt>りよう</rt></ruby>ですか？',
      romaji: 'Reji-bukuro wa go-riyō desu ka?',
      zh: '需要購物袋嗎？',
      en: 'Would you like a shopping bag?'
    },
    {
      speaker: 'you',
      jp: 'はい、一枚お願いします。',
      say: 'はい、いちまいおねがいします。',
      ruby: 'はい、<ruby>一枚<rt>いちまい</rt></ruby>お<ruby>願<rt>ねが</rt></ruby>いします。',
      romaji: 'Hai, ichimai onegai shimasu.',
      zh: '好，麻煩一個。',
      en: 'Yes, one, please.'
    },
    {
      speaker: 'staff',
      jp: 'お会計は八百二十円です。',
      say: 'おかいけいわはっぴゃくにじゅうえんです。',
      ruby: 'お<ruby>会計<rt>かいけい</rt></ruby>は<ruby>八百二十円<rt>はっぴゃくにじゅうえん</rt></ruby>です。',
      romaji: 'Okaikei wa happyaku nijū en desu.',
      zh: '一共是 820 日圓。',
      en: 'Your total is 820 yen.'
    },
    {
      speaker: 'you',
      jp: 'クレジットカードで払えますか？',
      say: 'クレジットカードではらえますか？',
      ruby: 'クレジットカードで<ruby>払<rt>はら</rt></ruby>えますか？',
      romaji: 'Kurejitto kādo de haraemasu ka?',
      zh: '可以用信用卡付款嗎？',
      en: 'Can I pay by credit card?'
    },
    {
      speaker: 'staff',
      jp: 'はい、こちらにタッチしてください。',
      ruby: 'はい、こちらにタッチしてください。',
      romaji: 'Hai, kochira ni tacchi shite kudasai.',
      zh: '可以，請在這裡感應。',
      en: 'Yes, please tap here.'
    },
    {
      speaker: 'you',
      jp: '一回払いでお願いします。',
      say: 'いっかいばらいでおねがいします。',
      ruby: '<ruby>一回払<rt>いっかいばら</rt></ruby>いでお<ruby>願<rt>ねが</rt></ruby>いします。',
      romaji: 'Ikkai-barai de onegai shimasu.',
      zh: '請一次付清。',
      en: 'One payment, please.'
    },
    {
      speaker: 'staff',
      jp: 'レシートはご利用ですか？',
      say: 'レシートわごりようですか？',
      ruby: 'レシートはご<ruby>利用<rt>りよう</rt></ruby>ですか？',
      romaji: 'Reshīto wa go-riyō desu ka?',
      zh: '需要收據嗎？',
      en: 'Would you like the receipt?'
    },
    {
      speaker: 'you',
      jp: 'はい、お願いします。',
      ruby: 'はい、お<ruby>願<rt>ねが</rt></ruby>いします。',
      romaji: 'Hai, onegai shimasu.',
      zh: '好，麻煩您。',
      en: 'Yes, please.'
    },
    {
      speaker: 'staff',
      jp: 'ありがとうございました。',
      ruby: 'ありがとうございました。',
      romaji: 'Arigatō gozaimashita.',
      zh: '謝謝惠顧。',
      en: 'Thank you very much.'
    }
  ],
  phrases: [
    {
      title: 'レジで · At the checkout',
      items: [
        { jp: 'これをお願いします。', ruby: 'これをお<ruby>願<rt>ねが</rt></ruby>いします。', zh: '這個，麻煩您。', en: 'This, please.' },
        { jp: '温めてください。', say: 'あたためてください。', ruby: '<ruby>温<rt>あたた</rt></ruby>めてください。', zh: '請幫我加熱。', en: 'Please heat it.' },
        { jp: 'お箸をお願いします。', say: 'おはしをおねがいします。', ruby: 'お<ruby>箸<rt>はし</rt></ruby>をお<ruby>願<rt>ねが</rt></ruby>いします。', zh: '麻煩給我筷子。', en: 'Chopsticks, please.' },
        { jp: '袋をお願いします。', say: 'ふくろをおねがいします。', ruby: '<ruby>袋<rt>ふくろ</rt></ruby>をお<ruby>願<rt>ねが</rt></ruby>いします。', zh: '麻煩給我袋子。', en: 'A bag, please.' },
        { jp: 'レシートをください。', ruby: 'レシートをください。', zh: '請給我收據。', en: 'Please give me the receipt.' }
      ]
    },
    {
      title: '支払い · Payment',
      items: [
        { jp: '現金で払います。', say: 'げんきんではらいます。', ruby: '<ruby>現金<rt>げんきん</rt></ruby>で<ruby>払<rt>はら</rt></ruby>います。', zh: '我用現金付款。', en: 'I will pay in cash.' },
        { jp: 'クレジットカードで払えますか？', say: 'クレジットカードではらえますか？', ruby: 'クレジットカードで<ruby>払<rt>はら</rt></ruby>えますか？', zh: '可以用信用卡付款嗎？', en: 'Can I pay by credit card?' },
        { jp: 'ICカードで払えますか？', say: 'アイシーカードではらえますか？', ruby: 'ICカードで<ruby>払<rt>はら</rt></ruby>えますか？', zh: '可以用 IC 卡付款嗎？', en: 'Can I pay by IC card?' },
        { jp: 'タッチで払えますか？', say: 'タッチではらえますか？', ruby: 'タッチで<ruby>払<rt>はら</rt></ruby>えますか？', zh: '可以感應付款嗎？', en: 'Can I pay by tap?' },
        { jp: '一回払いでお願いします。', say: 'いっかいばらいでおねがいします。', ruby: '<ruby>一回払<rt>いっかいばら</rt></ruby>いでお<ruby>願<rt>ねが</rt></ruby>いします。', zh: '請一次付清。', en: 'One payment, please.' }
      ]
    },
    {
      title: '店内で · In the store',
      items: [
        { jp: 'ATMはどこですか？', ruby: 'ATMはどこですか？', zh: 'ATM 在哪裡？', en: 'Where is the ATM?' },
        { jp: 'トイレはありますか？', ruby: 'トイレはありますか？', zh: '有洗手間嗎？', en: 'Is there a restroom?' },
        { jp: 'コピー機はどこですか？', ruby: 'コピー<ruby>機<rt>き</rt></ruby>はどこですか？', zh: '影印機在哪裡？', en: 'Where is the copy machine?' },
        { jp: 'この商品はありますか？', say: 'このしょうひんわありますか？', ruby: 'この<ruby>商品<rt>しょうひん</rt></ruby>はありますか？', zh: '有這個商品嗎？', en: 'Do you have this item?' },
        { jp: '充電器はありますか？', say: 'じゅうでんきわありますか？', ruby: '<ruby>充電器<rt>じゅうでんき</rt></ruby>はありますか？', zh: '有充電器嗎？', en: 'Do you have a charger?' }
      ]
    }
  ]
}
