// スーパーで買い物 — finding groceries, buying deli food and checking out.
export const supermarket = {
  id: 'supermarket',
  title: 'Supermarket Shopping',
  titleJp: 'スーパーで買い物',
  emoji: '🛒',
  staffAvatar: '🛒',
  staffLabel: '店員 · Store Staff',
  description: 'Find groceries, buy prepared food and pay at the checkout.',
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
      jp: 'すみません、牛乳はどこですか？',
      say: 'すみません、ぎゅうにゅうわどこですか？',
      ruby: 'すみません、<ruby>牛乳<rt>ぎゅうにゅう</rt></ruby>はどこですか？',
      romaji: 'Sumimasen, gyūnyū wa doko desu ka?',
      zh: '不好意思，牛奶在哪裡？',
      en: 'Excuse me, where is the milk?'
    },
    {
      speaker: 'staff',
      jp: '乳製品売り場はあちらです。',
      say: 'にゅうせいひんうりばわあちらです。',
      ruby: '<ruby>乳製品<rt>にゅうせいひん</rt></ruby><ruby>売<rt>う</rt></ruby>り<ruby>場<rt>ば</rt></ruby>はあちらです。',
      romaji: 'Nyūseihin uriba wa achira desu.',
      zh: '乳製品區在那邊。',
      en: 'The dairy section is over there.'
    },
    {
      speaker: 'you',
      jp: 'ありがとうございます。お惣菜はどこですか？',
      say: 'ありがとうございます。おそうざいわどこですか？',
      ruby: 'ありがとうございます。お<ruby>惣菜<rt>そうざい</rt></ruby>はどこですか？',
      romaji: 'Arigatō gozaimasu. Osōzai wa doko desu ka?',
      zh: '謝謝。熟食在哪裡？',
      en: 'Thank you. Where is the prepared-food section?'
    },
    {
      speaker: 'staff',
      jp: 'お惣菜はレジの近くにあります。',
      say: 'おそうざいわレジのちかくにあります。',
      ruby: 'お<ruby>惣菜<rt>そうざい</rt></ruby>はレジの<ruby>近<rt>ちか</rt></ruby>くにあります。',
      romaji: 'Osōzai wa reji no chikaku ni arimasu.',
      zh: '熟食區在收銀台附近。',
      en: 'Prepared food is near the checkout.'
    },
    {
      speaker: 'you',
      jp: 'このお惣菜は温めてもらえますか？',
      say: 'このおそうざいわあたためてもらえますか？',
      ruby: 'このお<ruby>惣菜<rt>そうざい</rt></ruby>は<ruby>温<rt>あたた</rt></ruby>めてもらえますか？',
      romaji: 'Kono osōzai wa atatamete moraemasu ka?',
      zh: '這份熟食可以幫我加熱嗎？',
      en: 'Could you heat this prepared food for me?'
    },
    {
      speaker: 'staff',
      jp: 'はい、温めますね。',
      say: 'はい、あたためますね。',
      ruby: 'はい、<ruby>温<rt>あたた</rt></ruby>めますね。',
      romaji: 'Hai, atatamemasu ne.',
      zh: '好的，我幫您加熱。',
      en: 'Certainly, I will heat it for you.'
    },
    {
      speaker: 'staff',
      jp: 'ポイントカードはお持ちですか？',
      say: 'ポイントカードわおもちですか？',
      ruby: 'ポイントカードはお<ruby>持<rt>も</rt></ruby>ちですか？',
      romaji: 'Pointo kādo wa omochi desu ka?',
      zh: '您有會員卡嗎？',
      en: 'Do you have a loyalty card?'
    },
    {
      speaker: 'you',
      jp: 'いいえ、持っていません。',
      say: 'いいえ、もっていません。',
      ruby: 'いいえ、<ruby>持<rt>も</rt></ruby>っていません。',
      romaji: 'Iie, motte imasen.',
      zh: '沒有，我沒有。',
      en: 'No, I do not.'
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
      en: 'Yes, one please.'
    },
    {
      speaker: 'staff',
      jp: 'お会計は千二百四十円です。',
      say: 'おかいけいわせんにひゃくよんじゅうえんです。',
      ruby: 'お<ruby>会計<rt>かいけい</rt></ruby>は<ruby>千二百四十円<rt>せんにひゃくよんじゅうえん</rt></ruby>です。',
      romaji: 'Okaikei wa sen-nihyaku yonjū en desu.',
      zh: '一共是 1,240 日圓。',
      en: 'Your total is 1,240 yen.'
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
      jp: 'こちらにタッチしてください。',
      ruby: 'こちらにタッチしてください。',
      romaji: 'Kochira ni tacchi shite kudasai.',
      zh: '請在這裡感應。',
      en: 'Please tap here.'
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
      title: '商品を探す · Finding items',
      items: [
        { jp: '牛乳はどこですか？', say: 'ぎゅうにゅうわどこですか？', ruby: '<ruby>牛乳<rt>ぎゅうにゅう</rt></ruby>はどこですか？', zh: '牛奶在哪裡？', en: 'Where is the milk?' },
        { jp: 'お惣菜はどこですか？', say: 'おそうざいわどこですか？', ruby: 'お<ruby>惣菜<rt>そうざい</rt></ruby>はどこですか？', zh: '熟食在哪裡？', en: 'Where is the prepared-food section?' },
        { jp: '野菜売り場はどこですか？', say: 'やさいうりばわどこですか？', ruby: '<ruby>野菜<rt>やさい</rt></ruby><ruby>売<rt>う</rt></ruby>り<ruby>場<rt>ば</rt></ruby>はどこですか？', zh: '蔬菜區在哪裡？', en: 'Where is the vegetable section?' },
        { jp: 'この商品はありますか？', say: 'このしょうひんわありますか？', ruby: 'この<ruby>商品<rt>しょうひん</rt></ruby>はありますか？', zh: '有這個商品嗎？', en: 'Do you have this item?' }
      ]
    },
    {
      title: 'お惣菜 · Prepared food',
      items: [
        { jp: '温めてもらえますか？', say: 'あたためてもらえますか？', ruby: '<ruby>温<rt>あたた</rt></ruby>めてもらえますか？', zh: '可以幫我加熱嗎？', en: 'Could you heat it for me?' },
        { jp: 'お箸をお願いします。', say: 'おはしをおねがいします。', ruby: 'お<ruby>箸<rt>はし</rt></ruby>をお<ruby>願<rt>ねが</rt></ruby>いします。', zh: '麻煩給我筷子。', en: 'Chopsticks, please.' },
        { jp: 'スプーンをお願いします。', say: 'スプーンをおねがいします。', ruby: 'スプーンをお<ruby>願<rt>ねが</rt></ruby>いします。', zh: '麻煩給我湯匙。', en: 'A spoon, please.' }
      ]
    },
    {
      title: 'レジで · At the checkout',
      items: [
        { jp: 'ポイントカードは持っていません。', say: 'ポイントカードわもっていません。', ruby: 'ポイントカードは<ruby>持<rt>も</rt></ruby>っていません。', zh: '我沒有會員卡。', en: 'I do not have a loyalty card.' },
        { jp: '袋を一枚お願いします。', say: 'ふくろをいちまいおねがいします。', ruby: '<ruby>袋<rt>ふくろ</rt></ruby>を<ruby>一枚<rt>いちまい</rt></ruby>お<ruby>願<rt>ねが</rt></ruby>いします。', zh: '麻煩給我一個袋子。', en: 'One bag, please.' },
        { jp: 'クレジットカードでお願いします。', ruby: 'クレジットカードでお<ruby>願<rt>ねが</rt></ruby>いします。', zh: '我用信用卡付款。', en: 'By credit card, please.' },
        { jp: 'レシートをお願いします。', ruby: 'レシートをお<ruby>願<rt>ねが</rt></ruby>いします。', zh: '麻煩給我收據。', en: 'The receipt, please.' }
      ]
    }
  ]
}
