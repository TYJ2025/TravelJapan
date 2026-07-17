// 海鮮料理店 — ordering sashimi, seafood bowls and grilled fish.
export const seafood = {
  id: 'seafood-cuisine',
  title: 'Seafood Cuisine',
  titleJp: '海鮮料理',
  emoji: '🐟',
  staffAvatar: '🐟',
  staffLabel: '店員 · Staff',
  description: 'Order sashimi, seafood bowls and grilled fish, with helpful requests for wasabi and allergies.',
  lines: [
    {
      speaker: 'staff',
      jp: 'いらっしゃいませ。何名様ですか？',
      say: 'いらっしゃいませ。なんめいさまですか？',
      ruby: 'いらっしゃいませ。<ruby>何名様<rt>なんめいさま</rt></ruby>ですか？',
      romaji: 'Irasshaimase. Nanmei-sama desu ka?',
      zh: '歡迎光臨。請問幾位？',
      en: 'Welcome. How many people?'
    },
    {
      speaker: 'you',
      jp: '二人です。',
      say: 'ふたりです。',
      ruby: '<ruby>二人<rt>ふたり</rt></ruby>です。',
      romaji: 'Futari desu.',
      zh: '兩位。',
      en: 'Two people.'
    },
    {
      speaker: 'staff',
      jp: 'こちらへどうぞ。本日のおすすめは海鮮丼と焼き魚定食です。',
      say: 'こちらえどうぞ。ほんじつのおすすめわかいせんどんとやきざかなていしょくです。',
      ruby: 'こちらへどうぞ。<ruby>本日<rt>ほんじつ</rt></ruby>のおすすめは<ruby>海鮮丼<rt>かいせんどん</rt></ruby>と<ruby>焼<rt>や</rt></ruby>き<ruby>魚定食<rt>ざかなていしょく</rt></ruby>です。',
      romaji: 'Kochira e dōzo. Honjitsu no osusume wa kaisen-don to yakizakana teishoku desu.',
      zh: '這邊請。今天推薦的是海鮮丼和烤魚定食。',
      en: "This way, please. Today's recommendations are the seafood bowl and grilled-fish set meal."
    },
    {
      speaker: 'you',
      jp: '海鮮丼には何が入っていますか？',
      say: 'かいせんどんにわなにがはいっていますか？',
      ruby: '<ruby>海鮮丼<rt>かいせんどん</rt></ruby>には<ruby>何<rt>なに</rt></ruby>が<ruby>入<rt>はい</rt></ruby>っていますか？',
      romaji: 'Kaisen-don ni wa nani ga haitte imasu ka?',
      zh: '海鮮丼裡面有哪些食材？',
      en: 'What is in the seafood bowl?'
    },
    {
      speaker: 'staff',
      jp: 'まぐろ、サーモン、ほたて、えびといくらが入っています。',
      say: 'まぐろ、サーモン、ほたて、えびといくらがはいっています。',
      ruby: 'まぐろ、サーモン、ほたて、えびといくらが<ruby>入<rt>はい</rt></ruby>っています。',
      romaji: 'Maguro, sāmon, hotate, ebi to ikura ga haitte imasu.',
      zh: '有鮪魚、鮭魚、干貝、蝦子和鮭魚卵。',
      en: 'It has tuna, salmon, scallops, shrimp and salmon roe.'
    },
    {
      speaker: 'you',
      jp: 'わさび抜きにできますか？',
      say: 'わさびぬきにできますか？',
      ruby: 'わさび<ruby>抜<rt>ぬ</rt></ruby>きにできますか？',
      romaji: 'Wasabi nuki ni dekimasu ka?',
      zh: '可以不要芥末嗎？',
      en: 'Could you make it without wasabi?'
    },
    {
      speaker: 'staff',
      jp: 'はい、できます。ほかに苦手なものやアレルギーはありますか？',
      say: 'はい、できます。ほかににがてなものやアレルギーわありますか？',
      ruby: 'はい、できます。ほかに<ruby>苦手<rt>にがて</rt></ruby>なものやアレルギーはありますか？',
      romaji: 'Hai, dekimasu. Hoka ni nigate na mono ya arerugī wa arimasu ka?',
      zh: '可以。還有其他不吃的食物或過敏嗎？',
      en: 'Yes. Do you have any other dislikes or allergies?'
    },
    {
      speaker: 'you',
      jp: '貝類にアレルギーがあるので、ほたては抜いてください。',
      say: 'かいるいにアレルギーがあるので、ほたてわぬいてください。',
      ruby: '<ruby>貝類<rt>かいるい</rt></ruby>にアレルギーがあるので、ほたては<ruby>抜<rt>ぬ</rt></ruby>いてください。',
      romaji: 'Kairui ni arerugī ga aru node, hotate wa nuite kudasai.',
      zh: '我對貝類過敏，請不要放干貝。',
      en: 'I am allergic to shellfish, so please leave out the scallops.'
    },
    {
      speaker: 'staff',
      jp: 'かしこまりました。海鮮丼は一つでよろしいですか？',
      say: 'かしこまりました。かいせんどんわひとつでよろしいですか？',
      ruby: 'かしこまりました。<ruby>海鮮丼<rt>かいせんどん</rt></ruby>は<ruby>一<rt>ひと</rt></ruby>つでよろしいですか？',
      romaji: 'Kashikomarimashita. Kaisen-don wa hitotsu de yoroshii desu ka?',
      zh: '了解。海鮮丼一份可以嗎？',
      en: 'Certainly. One seafood bowl, correct?'
    },
    {
      speaker: 'you',
      jp: 'はい。それと、焼き魚定食を一つお願いします。',
      say: 'はい。それと、やきざかなていしょくをひとつおねがいします。',
      ruby: 'はい。それと、<ruby>焼<rt>や</rt></ruby>き<ruby>魚定食<rt>ざかなていしょく</rt></ruby>を<ruby>一<rt>ひと</rt></ruby>つお<ruby>願<rt>ねが</rt></ruby>いします。',
      romaji: 'Hai. Soreto, yakizakana teishoku o hitotsu onegai shimasu.',
      zh: '好。另外，麻煩一份烤魚定食。',
      en: 'Yes. And one grilled-fish set meal, please.'
    },
    {
      speaker: 'staff',
      jp: '焼き魚はさばと鮭、どちらになさいますか？',
      say: 'やきざかなわさばとさけ、どちらになさいますか？',
      ruby: '<ruby>焼<rt>や</rt></ruby>き<ruby>魚<rt>ざかな</rt></ruby>はさばと<ruby>鮭<rt>さけ</rt></ruby>、どちらになさいますか？',
      romaji: 'Yakizakana wa saba to sake, dochira ni nasaimasu ka?',
      zh: '烤魚要鯖魚還是鮭魚？',
      en: 'For grilled fish, would you prefer mackerel or salmon?'
    },
    {
      speaker: 'you',
      jp: '鮭でお願いします。',
      say: 'さけでおねがいします。',
      ruby: '<ruby>鮭<rt>さけ</rt></ruby>でお<ruby>願<rt>ねが</rt></ruby>いします。',
      romaji: 'Sake de onegai shimasu.',
      zh: '麻煩鮭魚。',
      en: 'Salmon, please.'
    },
    {
      speaker: 'staff',
      jp: 'かしこまりました。少々お待ちください。',
      say: 'かしこまりました。しょうしょうおまちください。',
      ruby: 'かしこまりました。<ruby>少々<rt>しょうしょう</rt></ruby>お<ruby>待<rt>ま</rt></ruby>ちください。',
      romaji: 'Kashikomarimashita. Shōshō omachi kudasai.',
      zh: '好的，請稍候。',
      en: 'Certainly. Please wait a moment.'
    }
  ],
  phrases: [
    {
      title: '海鮮を選ぶ · Choosing seafood',
      items: [
        { jp: 'おすすめの魚は何ですか？', say: 'おすすめのさかなわなんですか？', ruby: 'おすすめの<ruby>魚<rt>さかな</rt></ruby>は<ruby>何<rt>なん</rt></ruby>ですか？', zh: '推薦的魚是什麼？', en: 'What fish do you recommend?' },
        { jp: '刺身の盛り合わせをお願いします。', say: 'さしみのもりあわせをおねがいします。', ruby: '<ruby>刺身<rt>さしみ</rt></ruby>の<ruby>盛<rt>も</rt></ruby>り<ruby>合<rt>あ</rt></ruby>わせをお<ruby>願<rt>ねが</rt></ruby>いします。', zh: '麻煩生魚片拼盤。', en: 'A sashimi assortment, please.' },
        { jp: '海鮮丼を一つお願いします。', say: 'かいせんどんをひとつおねがいします。', ruby: '<ruby>海鮮丼<rt>かいせんどん</rt></ruby>を<ruby>一<rt>ひと</rt></ruby>つお<ruby>願<rt>ねが</rt></ruby>いします。', zh: '麻煩一份海鮮丼。', en: 'One seafood bowl, please.' },
        { jp: '焼き魚定食をお願いします。', say: 'やきざかなていしょくをおねがいします。', ruby: '<ruby>焼<rt>や</rt></ruby>き<ruby>魚定食<rt>ざかなていしょく</rt></ruby>をお<ruby>願<rt>ねが</rt></ruby>いします。', zh: '麻煩烤魚定食。', en: 'A grilled-fish set meal, please.' }
      ]
    },
    {
      title: '希望を伝える · Requests and dietary needs',
      items: [
        { jp: 'わさび抜きにしてください。', say: 'わさびぬきにしてください。', ruby: 'わさび<ruby>抜<rt>ぬ</rt></ruby>きにしてください。', zh: '請不要芥末。', en: 'Please make it without wasabi.' },
        { jp: '生ものは苦手です。', say: 'なまものわにがてです。', ruby: '<ruby>生<rt>なま</rt></ruby>ものは<ruby>苦手<rt>にがて</rt></ruby>です。', zh: '我不太敢吃生食。', en: 'I am not comfortable with raw food.' },
        { jp: '火を通したものに替えられますか？', say: 'ひをとおしたものにかえられますか？', ruby: '<ruby>火<rt>ひ</rt></ruby>を<ruby>通<rt>とお</rt></ruby>したものに<ruby>替<rt>か</rt></ruby>えられますか？', zh: '可以換成煮熟的食物嗎？', en: 'Could it be changed to something cooked?' },
        { jp: '貝類にアレルギーがあります。', say: 'かいるいにアレルギーがあります。', ruby: '<ruby>貝類<rt>かいるい</rt></ruby>にアレルギーがあります。', zh: '我對貝類過敏。', en: 'I am allergic to shellfish.' }
      ]
    }
  ],
  menu: [
    {
      title: '刺身・生もの · Sashimi and raw seafood',
      items: [
        { emoji: '🐟', jp: 'まぐろ刺し', say: 'まぐろさし', ruby: 'まぐろ<ruby>刺<rt>さ</rt></ruby>し', romaji: 'maguro-sashi', zh: '鮪魚生魚片', en: 'tuna sashimi', desc: '赤身鮪魚味道清爽、鮮味明顯，是刺身拼盤的經典選擇。' },
        { emoji: '🐟', jp: 'サーモン刺し', say: 'サーモンさし', ruby: 'サーモン<ruby>刺<rt>さ</rt></ruby>し', romaji: 'sāmon-sashi', zh: '鮭魚生魚片', en: 'salmon sashimi', desc: '油脂豐潤、口感滑順，是日本餐廳最常見的生食魚類之一。' },
        { emoji: '🐟', jp: '鯛の刺身', say: 'たいのさしみ', ruby: '<ruby>鯛<rt>たい</rt></ruby>の<ruby>刺身<rt>さしみ</rt></ruby>', romaji: 'tai no sashimi', zh: '鯛魚生魚片', en: 'sea bream sashimi', desc: '白身魚口感緊實清甜，適合喜歡清淡魚味的人。' },
        { emoji: '🐟', jp: 'あじのたたき', ruby: 'あじのたたき', romaji: 'aji no tataki', zh: '竹筴魚剁拌生魚', en: 'chopped horse mackerel', desc: '將竹筴魚與蔥、薑等剁拌，鮮味濃郁、帶清爽香氣。' },
        { emoji: '🦪', jp: '生牡蠣', say: 'なまがき', ruby: '<ruby>生牡蠣<rt>なまがき</rt></ruby>', romaji: 'nama-gaki', zh: '生蠔', en: 'raw oyster', desc: '冰鎮生蠔口感滑嫩、海味鮮明；介意生食可選烤牡蠣或炸牡蠣。' },
        { emoji: '🐚', jp: 'ほたて刺し', say: 'ほたてさし', ruby: 'ほたて<ruby>刺<rt>さ</rt></ruby>し', romaji: 'hotate-sashi', zh: '干貝生魚片', en: 'scallop sashimi', desc: '生食干貝甜味明顯、口感柔軟；對貝類過敏者應避免。' }
      ]
    },
    {
      title: '海鮮丼・ご飯 · Seafood bowls and rice',
      items: [
        { emoji: '🍚', jp: '海鮮丼', say: 'かいせんどん', ruby: '<ruby>海鮮丼<rt>かいせんどん</rt></ruby>', romaji: 'kaisen-don', zh: '海鮮丼', en: 'assorted seafood bowl', desc: '將多種生魚片、貝類與魚卵放在醋飯上，是海港城市的招牌餐點。' },
        { emoji: '🍚', jp: 'まぐろ丼', say: 'まぐろどん', ruby: 'まぐろ<ruby>丼<rt>どん</rt></ruby>', romaji: 'maguro-don', zh: '鮪魚丼', en: 'tuna bowl', desc: '以鮪魚為主的生魚丼，口味單純，適合不想吃太多種類時點用。' },
        { emoji: '🍚', jp: 'ねぎとろ丼', ruby: 'ねぎとろ<ruby>丼<rt>どん</rt></ruby>', romaji: 'negitoro-don', zh: '蔥花鮪魚泥丼', en: 'minced tuna bowl', desc: '鮪魚泥配蔥花的丼飯，口感綿密、味道溫和。' },
        { emoji: '🟠', jp: 'いくら丼', say: 'いくらどん', ruby: 'いくら<ruby>丼<rt>どん</rt></ruby>', romaji: 'ikura-don', zh: '鮭魚卵丼', en: 'salmon roe bowl', desc: '大量鮭魚卵鋪在飯上，鹹鮮爆汁，通常價格較高。' },
        { emoji: '🟡', jp: 'うに丼', say: 'うにどん', ruby: 'うに<ruby>丼<rt>どん</rt></ruby>', romaji: 'uni-don', zh: '海膽丼', en: 'sea urchin bowl', desc: '海膽口感濃郁綿滑、帶天然甜味，是高級海鮮丼選擇。' },
        { emoji: '🐟', jp: 'しらす丼', say: 'しらすどん', ruby: 'しらす<ruby>丼<rt>どん</rt></ruby>', romaji: 'shirasu-don', zh: '吻仔魚丼', en: 'whitebait bowl', desc: '以小魚配白飯，味道清爽，常見於江之島、鎌倉等海邊地區。' }
      ]
    },
    {
      title: '焼き・煮付け · Grilled and simmered dishes',
      items: [
        { emoji: '🔥', jp: 'さばの塩焼き', say: 'さばのしおやき', ruby: 'さばの<ruby>塩焼<rt>しおや</rt></ruby>き', romaji: 'saba no shioyaki', zh: '鹽烤鯖魚', en: 'salt-grilled mackerel', desc: '油脂豐厚的鯖魚以鹽烤呈現，外皮香脆、肉質多汁。' },
        { emoji: '🔥', jp: 'ほっけの開き', say: 'ほっけのひらき', ruby: 'ほっけの<ruby>開<rt>ひら</rt></ruby>き', romaji: 'hokke no hiraki', zh: '烤花魚一夜干', en: 'grilled Atka mackerel', desc: '北海道常見的一夜干烤魚，肉厚、味道濃郁，適合下酒。' },
        { emoji: '🍲', jp: '金目鯛の煮付け', say: 'きんめだいのにつけ', ruby: '<ruby>金目鯛<rt>きんめだい</rt></ruby>の<ruby>煮付<rt>につ</rt></ruby>け', romaji: 'kinmedai no nitsuke', zh: '紅喉鯛醬煮', en: 'simmered splendid alfonsino', desc: '以醬油、味醂慢煮的金目鯛，肉質柔嫩、帶甜鹹醬香。' },
        { emoji: '🦐', jp: 'えびの塩焼き', say: 'えびのしおやき', ruby: 'えびの<ruby>塩焼<rt>しおや</rt></ruby>き', romaji: 'ebi no shioyaki', zh: '鹽烤蝦', en: 'salt-grilled shrimp', desc: '整尾蝦以鹽烤製作，蝦肉彈牙、香氣直接。' },
        { emoji: '🐚', jp: 'ほたてバター焼き', say: 'ほたてバターやき', ruby: 'ほたてバター<ruby>焼<rt>や</rt></ruby>き', romaji: 'hotate batā-yaki', zh: '奶油煎干貝', en: 'butter-grilled scallops', desc: '干貝用奶油煎烤，甜味與奶香濃郁；對貝類過敏者應避免。' },
        { emoji: '🐚', jp: 'サザエの壺焼き', say: 'サザエのつぼやき', ruby: 'サザエの<ruby>壺焼<rt>つぼや</rt></ruby>き', romaji: 'sazae no tsuboyaki', zh: '烤角蠑螺', en: 'grilled turban shell', desc: '在貝殼內加醬油烤製，口感有嚼勁、海味強烈。' }
      ]
    },
    {
      title: '揚げ物・浜焼き · Fried and grilled seafood',
      items: [
        { emoji: '🦪', jp: 'カキフライ', ruby: 'カキフライ', romaji: 'kaki furai', zh: '炸牡蠣', en: 'fried oysters', desc: '裹粉油炸的牡蠣，外酥內嫩，常配塔塔醬或檸檬。' },
        { emoji: '🐟', jp: 'あじフライ', ruby: 'あじフライ', romaji: 'aji furai', zh: '炸竹筴魚', en: 'fried horse mackerel', desc: '日本定食常見炸魚，肉質鬆軟、外皮香酥。' },
        { emoji: '🦐', jp: 'えびフライ', ruby: 'えびフライ', romaji: 'ebi furai', zh: '炸蝦', en: 'fried shrimp', desc: '大蝦裹麵包粉油炸，是大人小孩都容易接受的海鮮料理。' },
        { emoji: '🦪', jp: '焼き牡蠣', say: 'やきがき', ruby: '<ruby>焼牡蠣<rt>やきがき</rt></ruby>', romaji: 'yaki-gaki', zh: '烤牡蠣', en: 'grilled oysters', desc: '帶殼烤牡蠣，保留飽滿汁液與濃郁海味。' },
        { emoji: '🐚', jp: '貝の浜焼き', say: 'かいのはまやき', ruby: '<ruby>貝<rt>かい</rt></ruby>の<ruby>浜焼<rt>はまや</rt></ruby>き', romaji: 'kai no hamayaki', zh: '濱燒貝類', en: 'grilled shellfish', desc: '在海邊或魚市場自行烤的貝類拼盤，常見蛤蜊、扇貝與螺類。' },
        { emoji: '🍤', jp: '海鮮天ぷら', say: 'かいせんてんぷら', ruby: '<ruby>海鮮<rt>かいせん</rt></ruby>天ぷら', romaji: 'kaisen tenpura', zh: '海鮮天婦羅', en: 'seafood tempura', desc: '蝦、白身魚與蔬菜裹薄麵衣油炸，口感輕脆。' },
        { emoji: '🍲', jp: 'あら汁', say: 'あらじる', ruby: 'あら<ruby>汁<rt>じる</rt></ruby>', romaji: 'arajiru', zh: '魚骨味噌湯', en: 'fish-head miso soup', desc: '用魚頭與魚骨熬煮的味噌湯，鮮味濃厚，適合搭配海鮮丼。' }
      ]
    },
    {
      title: '磯丸水産メニューから · Isomaru Suisan selections',
      items: [
        { emoji: '🛶', jp: '舟盛り', say: 'ふなもり', ruby: '<ruby>舟盛<rt>ふなも</rt></ruby>り', romaji: 'funamori', zh: '船盛生魚片拼盤', en: 'boat-shaped sashimi platter', desc: '磯丸水產的豪華船盛生魚片拼盤；內容依門市與進貨而異。' },
        { emoji: '🍣', jp: '島寿司', say: 'しまずし', ruby: '<ruby>島寿司<rt>しまずし</rt></ruby>', romaji: 'shimazushi', zh: '島壽司（押壽司）', en: 'island-style pressed sushi', desc: '磯丸水產的押壽司品項，以白身魚與鮪魚的醬漬風味為特色。' },
        { emoji: '🍣', jp: 'うなぎ押し寿司', say: 'うなぎおしずし', ruby: 'うなぎ<ruby>押<rt>お</rt></ruby>し<ruby>寿司<rt>ずし</rt></ruby>', romaji: 'unagi oshizushi', zh: '鰻魚押壽司', en: 'pressed eel sushi', desc: '磯丸水產菜單的鰻魚押壽司。' },
        { emoji: '🐟', jp: '国産いわしのオイルサーディン', say: 'こくさんいわしのオイルサーディン', ruby: '<ruby>国産<rt>こくさん</rt></ruby>いわしのオイルサーディン', romaji: 'kokusan iwashi no oiru sādīn', zh: '國產沙丁魚油漬', en: 'Japanese sardines in oil', desc: '磯丸水產以熱騰騰的 ajillo 風格供應的沙丁魚品項。' },
        { emoji: '🍞', jp: '磯丸のガーリックトースト', say: 'いそまるのガーリックトースト', ruby: '<ruby>磯丸<rt>いそまる</rt></ruby>のガーリックトースト', romaji: 'isomaru no gārikku tōsuto', zh: '磯丸蒜香吐司', en: 'Isomaru garlic toast', desc: '磯丸水產的蒜香吐司，可搭配海鮮料理。' }
      ]
    }
  ]
}
