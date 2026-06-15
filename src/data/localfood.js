// Local & street food — a ramen shop ticket machine, then a takoyaki street stall.
export const localfood = {
  id: 'localfood',
  title: 'Local & Street Food',
  titleJp: 'ローカル・屋台グルメ',
  emoji: '🍢',
  description: 'A ramen ticket machine and a takoyaki street stall — cash, toppings, noodle firmness.',
  lines: [
    {
      speaker: 'you',
      jp: 'すみません、この食券機の使い方を教えてください。',
      ruby: 'すみません、この<ruby>食券機<rt>しょっけんき</rt></ruby>の<ruby>使<rt>つか</rt></ruby>い<ruby>方<rt>かた</rt></ruby>を<ruby>教<rt>おし</rt></ruby>えてください。',
      romaji: 'Sumimasen, kono shokken-ki no tsukaikata o oshiete kudasai.',
      zh: '不好意思，可以教我怎麼使用這台售票機嗎？',
      en: 'Excuse me, could you tell me how to use this ticket machine?'
    },
    {
      speaker: 'staff',
      jp: 'お金を入れて、食べたいラーメンのボタンを押してください。',
      ruby: 'お<ruby>金<rt>かね</rt></ruby>を<ruby>入<rt>い</rt></ruby>れて、<ruby>食<rt>た</rt></ruby>べたいラーメンのボタンを<ruby>押<rt>お</rt></ruby>してください。',
      romaji: 'O-kane o irete, tabetai rāmen no botan o oshite kudasai.',
      zh: '先投入錢，再按下您想吃的拉麵按鈕。',
      en: 'Insert your money, then press the button for the ramen you want.'
    },
    {
      speaker: 'you',
      jp: '一番人気はどれですか？',
      ruby: '<ruby>一番<rt>いちばん</rt></ruby><ruby>人気<rt>にんき</rt></ruby>はどれですか？',
      romaji: 'Ichiban ninki wa dore desu ka?',
      zh: '哪一個最受歡迎呢？',
      en: 'Which one is the most popular?'
    },
    {
      speaker: 'staff',
      jp: 'この豚骨ラーメンです。トッピングは別のボタンで選べます。',
      ruby: 'この<ruby>豚骨<rt>とんこつ</rt></ruby>ラーメンです。トッピングは<ruby>別<rt>べつ</rt></ruby>のボタンで<ruby>選<rt>えら</rt></ruby>べます。',
      romaji: 'Kono tonkotsu rāmen desu. Toppingu wa betsu no botan de erabemasu.',
      zh: '這個豚骨拉麵。配料可以用另外的按鈕選擇。',
      en: "This tonkotsu ramen. You can choose toppings with the separate buttons."
    },
    {
      speaker: 'you',
      jp: '味玉を追加できますか？',
      ruby: '<ruby>味玉<rt>あじたま</rt></ruby>を<ruby>追加<rt>ついか</rt></ruby>できますか？',
      romaji: 'Ajitama o tsuika dekimasu ka?',
      zh: '可以加一顆滷蛋嗎？',
      en: 'Can I add a seasoned egg?'
    },
    {
      speaker: 'staff',
      jp: 'はい、こちらのボタンです。食券を私に渡してください。',
      ruby: 'はい、こちらのボタンです。<ruby>食券<rt>しょっけん</rt></ruby>を<ruby>私<rt>わたし</rt></ruby>に<ruby>渡<rt>わた</rt></ruby>してください。',
      romaji: 'Hai, kochira no botan desu. Shokken o watashi ni watashite kudasai.',
      zh: '好的，就是這個按鈕。請把餐券交給我。',
      en: 'Yes, this button. Please hand me the meal ticket.'
    },
    {
      speaker: 'staff',
      jp: '麺の硬さはどうしますか？',
      ruby: '<ruby>麺<rt>めん</rt></ruby>の<ruby>硬<rt>かた</rt></ruby>さはどうしますか？',
      romaji: 'Men no katasa wa dō shimasu ka?',
      zh: '麵的軟硬度要怎麼樣呢？',
      en: 'How would you like the noodle firmness?'
    },
    {
      speaker: 'you',
      jp: '普通でお願いします。',
      ruby: '<ruby>普通<rt>ふつう</rt></ruby>でお<ruby>願<rt>ねが</rt></ruby>いします。',
      romaji: 'Futsū de onegai shimasu.',
      zh: '普通就好，麻煩你了。',
      en: 'Normal, please.'
    },
    {
      speaker: 'staff',
      jp: '味の濃さは？',
      ruby: '<ruby>味<rt>あじ</rt></ruby>の<ruby>濃<rt>こ</rt></ruby>さは？',
      romaji: 'Aji no kosa wa?',
      zh: '味道的濃淡呢？',
      en: 'And the flavor strength?'
    },
    {
      speaker: 'you',
      jp: '少し薄めでお願いします。',
      ruby: '<ruby>少<rt>すこ</rt></ruby>し<ruby>薄<rt>うす</rt></ruby>めでお<ruby>願<rt>ねが</rt></ruby>いします。',
      romaji: 'Sukoshi usume de onegai shimasu.',
      zh: '麻煩淡一點，謝謝。',
      en: 'A little lighter, please.'
    },
    {
      speaker: 'you',
      jp: 'たこ焼きを一つください。',
      ruby: 'たこ<ruby>焼<rt>や</rt></ruby>きを<ruby>一<rt>ひと</rt></ruby>つください。',
      romaji: 'Takoyaki o hitotsu kudasai.',
      zh: '請給我一份章魚燒。',
      en: 'One order of takoyaki, please.'
    },
    {
      speaker: 'staff',
      jp: '八個入りと十二個入りがありますよ。',
      ruby: '<ruby>八個入<rt>はちこい</rt></ruby>りと<ruby>十二個入<rt>じゅうにこい</rt></ruby>りがありますよ。',
      romaji: 'Hachi-ko-iri to jūni-ko-iri ga arimasu yo.',
      zh: '我們有八顆裝和十二顆裝喔。',
      en: 'We have 8-piece and 12-piece servings.'
    },
    {
      speaker: 'you',
      jp: '八個入りで、ソースとマヨネーズ両方かけてください。',
      ruby: '<ruby>八個入<rt>はちこい</rt></ruby>りで、ソースとマヨネーズ<ruby>両方<rt>りょうほう</rt></ruby>かけてください。',
      romaji: 'Hachi-ko-iri de, sōsu to mayonēzu ryōhō kakete kudasai.',
      zh: '我要八顆裝，醬汁和美乃滋都幫我加上去。',
      en: 'The 8-piece, with both sauce and mayonnaise on top, please.'
    },
    {
      speaker: 'staff',
      jp: 'はい！熱いので気をつけてね。五百円です。',
      ruby: 'はい！<ruby>熱<rt>あつ</rt></ruby>いので<ruby>気<rt>き</rt></ruby>をつけてね。<ruby>五百円<rt>ごひゃくえん</rt></ruby>です。',
      romaji: 'Hai! Atsui node ki o tsukete ne. Gohyaku-en desu.',
      zh: '來囉！很燙要小心喔。一共五百日圓。',
      en: "Here! It's hot, so be careful. That's 500 yen."
    },
    {
      speaker: 'you',
      jp: '現金しかだめですか？',
      ruby: '<ruby>現金<rt>げんきん</rt></ruby>しかだめですか？',
      romaji: 'Genkin shika dame desu ka?',
      zh: '只能付現金嗎？',
      en: 'Is it cash only?'
    },
    {
      speaker: 'staff',
      jp: 'ごめんね、ここは現金だけなんだ。',
      ruby: 'ごめんね、ここは<ruby>現金<rt>げんきん</rt></ruby>だけなんだ。',
      romaji: 'Gomen ne, koko wa genkin dake nanda.',
      zh: '不好意思，我們這裡只收現金。',
      en: 'Sorry, this place is cash only.'
    },
    {
      speaker: 'you',
      jp: '大丈夫です。はい、五百円。ごちそうさま！',
      ruby: '<ruby>大丈夫<rt>だいじょうぶ</rt></ruby>です。はい、<ruby>五百円<rt>ごひゃくえん</rt></ruby>。ごちそうさま！',
      romaji: 'Daijōbu desu. Hai, gohyaku-en. Gochisōsama!',
      zh: '沒問題。來，五百日圓。謝謝招待！',
      en: "No problem. Here, 500 yen. Thanks for the food!"
    }
  ],
  menu: [
    {
      title: '屋台・ローカルグルメ · Street & local food',
      items: [
        { emoji: '🍜', jp: '豚骨ラーメン', ruby: '<ruby>豚骨<rt>とんこつ</rt></ruby>ラーメン', romaji: 'tonkotsu rāmen', zh: '豚骨拉麵', en: 'pork-bone ramen' },
        { emoji: '🍜', jp: '醤油ラーメン', ruby: '<ruby>醤油<rt>しょうゆ</rt></ruby>ラーメン', romaji: 'shōyu rāmen', zh: '醬油拉麵', en: 'soy-sauce ramen' },
        { emoji: '🍜', jp: '味噌ラーメン', ruby: '<ruby>味噌<rt>みそ</rt></ruby>ラーメン', romaji: 'miso rāmen', zh: '味噌拉麵', en: 'miso ramen' },
        { emoji: '🐙', jp: 'たこ焼き', ruby: 'たこ<ruby>焼<rt>や</rt></ruby>き', romaji: 'takoyaki', zh: '章魚燒', en: 'octopus balls' },
        { emoji: '🥞', jp: 'お好み焼き', ruby: 'お<ruby>好<rt>この</rt></ruby>み<ruby>焼<rt>や</rt></ruby>き', romaji: 'okonomiyaki', zh: '大阪燒', en: 'savory pancake' },
        { emoji: '🍜', jp: '焼きそば', ruby: '<ruby>焼<rt>や</rt></ruby>きそば', romaji: 'yakisoba', zh: '炒麵', en: 'fried noodles' },
        { emoji: '🐟', jp: 'たい焼き', ruby: 'たい<ruby>焼<rt>や</rt></ruby>き', romaji: 'taiyaki', zh: '鯛魚燒', en: 'fish-shaped cake' },
        { emoji: '🥟', jp: '肉まん', ruby: '<ruby>肉<rt>にく</rt></ruby>まん', romaji: 'nikuman', zh: '肉包', en: 'steamed pork bun' },
        { emoji: '🍡', jp: '団子', ruby: '<ruby>団子<rt>だんご</rt></ruby>', romaji: 'dango', zh: '醬油糰子', en: 'sweet dumplings' },
        { emoji: '🍧', jp: 'かき氷', ruby: 'かき<ruby>氷<rt>ごおり</rt></ruby>', romaji: 'kakigōri', zh: '刨冰', en: 'shaved ice' },
        { emoji: '🌽', jp: '焼きとうもろこし', ruby: '<ruby>焼<rt>や</rt></ruby>きとうもろこし', romaji: 'yaki-tōmorokoshi', zh: '烤玉米', en: 'grilled corn' },
        { emoji: '🍎', jp: 'りんご飴', ruby: 'りんご<ruby>飴<rt>あめ</rt></ruby>', romaji: 'ringo-ame', zh: '蘋果糖', en: 'candy apple' }
      ]
    }
  ]
}
