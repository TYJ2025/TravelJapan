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
  ]
}
