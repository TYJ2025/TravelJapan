// スーパーで買い物 — finding groceries, buying deli food and checking out.
export const supermarket = {
  id: 'supermarket',
  title: 'Supermarket Shopping',
  titleJp: 'スーパーで買い物',
  emoji: '🛒',
  staffAvatar: '🛒',
  staffLabel: '店員 · Store Staff',
  description: 'Find groceries, buy prepared food and pay at the checkout.',
  menuTabLabel: '品項 · Items',
  menuIntro: '🔊 聽發音 · 🎤 練習品項 · 點一下商品展開購買句型',
  menuPatternLabel: '購買句型 · Purchase patterns',
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
  ],
  menu: [
    {
      title: '野菜・果物 · Vegetables and fruit',
      items: [
        { emoji: '🍅', jp: 'トマト', ruby: 'トマト', romaji: 'tomato', zh: '番茄', en: 'tomato', desc: '常見的新鮮蔬菜，可在蔬果區單買或買盒裝。' },
        { emoji: '🍌', jp: 'バナナ', ruby: 'バナナ', romaji: 'banana', zh: '香蕉', en: 'banana', desc: '方便攜帶、可立即食用的水果。' },
        { emoji: '🍎', jp: 'りんご', ruby: 'りんご', romaji: 'ringo', zh: '蘋果', en: 'apple', desc: '常見水果，依品種甜度與口感不同。' },
        { emoji: '🍓', jp: 'いちご', ruby: 'いちご', romaji: 'ichigo', zh: '草莓', en: 'strawberries', desc: '冬春季常見的日本水果，通常以一盒販售。' },
        { emoji: '🥗', jp: 'カット野菜', say: 'カットやさい', ruby: 'カット<ruby>野菜<rt>やさい</rt></ruby>', romaji: 'katto yasai', zh: '切好蔬菜', en: 'pre-cut vegetables', desc: '已洗切好的蔬菜包，適合在旅宿簡單加熱料理。' },
        { emoji: '🍄', jp: 'きのこ', ruby: 'きのこ', romaji: 'kinoko', zh: '菇類', en: 'mushrooms', desc: '日本超市常有香菇、鴻喜菇與舞菇等多種選擇。' }
      ]
    },
    {
      title: '肉・魚・乳製品 · Meat, fish and dairy',
      items: [
        { emoji: '🥛', jp: '牛乳', say: 'ぎゅうにゅう', ruby: '<ruby>牛乳<rt>ぎゅうにゅう</rt></ruby>', romaji: 'gyūnyū', zh: '牛奶', en: 'milk', desc: '冷藏乳製品區的基本品項。' },
        { emoji: '🥣', jp: 'ヨーグルト', ruby: 'ヨーグルト', romaji: 'yōguruto', zh: '優格', en: 'yogurt', desc: '有原味、加糖與水果口味等選擇。' },
        { emoji: '🥚', jp: '卵', say: 'たまご', ruby: '<ruby>卵<rt>たまご</rt></ruby>', romaji: 'tamago', zh: '雞蛋', en: 'eggs', desc: '日本超市常以 6 顆或 10 顆盒裝販售。' },
        { emoji: '🍗', jp: '鶏肉', say: 'とりにく', ruby: '<ruby>鶏肉<rt>とりにく</rt></ruby>', romaji: 'toriniku', zh: '雞肉', en: 'chicken', desc: '生鮮肉品區常見雞腿肉、雞胸肉與切塊雞肉。' },
        { emoji: '🐟', jp: '鮭', say: 'さけ', ruby: '<ruby>鮭<rt>さけ</rt></ruby>', romaji: 'sake', zh: '鮭魚', en: 'salmon', desc: '可買生鮮魚片、鹽鮭或烤好的熟食。' },
        { emoji: '🧊', jp: '豆腐', say: 'とうふ', ruby: '<ruby>豆腐<rt>とうふ</rt></ruby>', romaji: 'tōfu', zh: '豆腐', en: 'tofu', desc: '冷藏區常見，適合火鍋、湯品或簡單配醬油食用。' }
      ]
    },
    {
      title: 'お惣菜・主食 · Prepared food and staples',
      items: [
        { emoji: '🍱', jp: 'お弁当', say: 'おべんとう', ruby: 'お<ruby>弁当<rt>べんとう</rt></ruby>', romaji: 'obentō', zh: '便當', en: 'boxed meal', desc: '可在結帳時詢問是否加熱，也常有筷子供應。' },
        { emoji: '🍙', jp: 'おにぎり', ruby: 'おにぎり', romaji: 'onigiri', zh: '飯糰', en: 'rice ball', desc: '鮭魚、鮪魚美乃滋與昆布是常見口味。' },
        { emoji: '🍣', jp: 'お寿司', say: 'おすし', ruby: 'お<ruby>寿司<rt>すし</rt></ruby>', romaji: 'osushi', zh: '壽司', en: 'sushi', desc: '超市常有盒裝壽司，傍晚有時會貼折扣標籤。' },
        { emoji: '🥗', jp: 'お惣菜', say: 'おそうざい', ruby: 'お<ruby>惣菜<rt>そうざい</rt></ruby>', romaji: 'osōzai', zh: '熟食小菜', en: 'prepared side dishes', desc: '炸物、沙拉、滷菜等可直接帶走的熟食。' },
        { emoji: '🍞', jp: '食パン', say: 'しょくパン', ruby: '<ruby>食<rt>しょく</rt></ruby>パン', romaji: 'shokupan', zh: '吐司', en: 'sandwich bread', desc: '日本常見厚片吐司，適合早餐或旅宿簡單吃。' },
        { emoji: '🍜', jp: 'カップ麺', say: 'カップめん', ruby: 'カップ<ruby>麺<rt>めん</rt></ruby>', romaji: 'kappu-men', zh: '泡麵', en: 'cup noodles', desc: '需熱水沖泡；部分超市有熱水與用餐區，但各店不同。' }
      ]
    },
    {
      title: '飲み物・日用品 · Drinks and essentials',
      items: [
        { emoji: '💧', jp: '水', say: 'みず', ruby: '<ruby>水<rt>みず</rt></ruby>', romaji: 'mizu', zh: '瓶裝水', en: 'bottled water', desc: '有礦泉水、氣泡水與大容量瓶裝。' },
        { emoji: '🍵', jp: '緑茶', say: 'りょくちゃ', ruby: '<ruby>緑茶<rt>りょくちゃ</rt></ruby>', romaji: 'ryokucha', zh: '綠茶', en: 'green tea', desc: '冷藏與常溫區都常見無糖日本綠茶。' },
        { emoji: '🍺', jp: 'ビール', ruby: 'ビール', romaji: 'bīru', zh: '啤酒', en: 'beer', desc: '日本超市常有罐裝、瓶裝與在地精釀選擇；須達法定年齡。' },
        { emoji: '🧻', jp: 'ティッシュ', ruby: 'ティッシュ', romaji: 'tisshu', zh: '面紙', en: 'tissues', desc: '旅行時實用的日用品，常與衛生用品放在同一區。' },
        { emoji: '🪥', jp: '歯ブラシ', say: 'はブラシ', ruby: '<ruby>歯<rt>は</rt></ruby>ブラシ', romaji: 'ha-burashi', zh: '牙刷', en: 'toothbrush', desc: '旅宿忘記攜帶時可在日用品區購買。' }
      ]
    }
  ]
}
