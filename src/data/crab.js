// かに料理店 — choosing a crab course, cooking style and asking for help at the table.
export const crab = {
  id: 'crab-cuisine',
  title: 'Crab Cuisine',
  titleJp: 'かに料理',
  emoji: '🦀',
  staffAvatar: '🦀',
  staffLabel: '店員 · Staff',
  description: 'Choose a crab course, grilled crab or hot pot, and enjoy the meal with confidence.',
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
      jp: 'こちらへどうぞ。本日のおすすめは、ずわいがにの会席です。',
      say: 'こちらえどうぞ。ほんじつのおすすめわ、ずわいがにのかいせきです。',
      ruby: 'こちらへどうぞ。<ruby>本日<rt>ほんじつ</rt></ruby>のおすすめは、ずわいがにの<ruby>会席<rt>かいせき</rt></ruby>です。',
      romaji: 'Kochira e dōzo. Honjitsu no osusume wa, zuwai-gani no kaiseki desu.',
      zh: '這邊請。今天推薦的是松葉蟹會席料理。',
      en: "This way, please. Today's recommendation is a snow-crab course."
    },
    {
      speaker: 'you',
      jp: '会席には何が入っていますか？',
      say: 'かいせきにわなにがはいっていますか？',
      ruby: '<ruby>会席<rt>かいせき</rt></ruby>には<ruby>何<rt>なに</rt></ruby>が<ruby>入<rt>はい</rt></ruby>っていますか？',
      romaji: 'Kaiseki ni wa nani ga haitte imasu ka?',
      zh: '會席料理裡面有哪些？',
      en: 'What is included in the course?'
    },
    {
      speaker: 'staff',
      jp: 'かに刺し、焼きがに、かに鍋と雑炊が付いています。',
      say: 'かにさし、やきがに、かになべとぞうすいがついています。',
      ruby: 'かに<ruby>刺<rt>さ</rt></ruby>し、<ruby>焼<rt>や</rt></ruby>きがに、かに<ruby>鍋<rt>なべ</rt></ruby>と<ruby>雑炊<rt>ぞうすい</rt></ruby>が<ruby>付<rt>つ</rt></ruby>いています。',
      romaji: 'Kani-sashi, yaki-gani, kani-nabe to zōsui ga tsuite imasu.',
      zh: '包含生蟹、烤蟹、蟹鍋和雜炊。',
      en: 'It includes crab sashimi, grilled crab, crab hot pot and rice porridge.'
    },
    {
      speaker: 'you',
      jp: '生ものは苦手なので、火を通した料理に替えられますか？',
      say: 'なまものわにがてなので、ひをとおしたりょうりにかえられますか？',
      ruby: '<ruby>生<rt>なま</rt></ruby>ものは<ruby>苦手<rt>にがて</rt></ruby>なので、<ruby>火<rt>ひ</rt></ruby>を<ruby>通<rt>とお</rt></ruby>した<ruby>料理<rt>りょうり</rt></ruby>に<ruby>替<rt>か</rt></ruby>えられますか？',
      romaji: 'Namamono wa nigate na node, hi o tōshita ryōri ni kaeraremasu ka?',
      zh: '我不太敢吃生食，可以換成煮熟的料理嗎？',
      en: 'I am not comfortable with raw food. Could it be changed to a cooked dish?'
    },
    {
      speaker: 'staff',
      jp: 'はい、かに刺しを蒸しがにに替えられます。',
      say: 'はい、かにさしをむしがににかえられます。',
      ruby: 'はい、かに<ruby>刺<rt>さ</rt></ruby>しを<ruby>蒸<rt>む</rt></ruby>しがにに<ruby>替<rt>か</rt></ruby>えられます。',
      romaji: 'Hai, kani-sashi o mushi-gani ni kaeraremasu.',
      zh: '可以，能把生蟹換成蒸蟹。',
      en: 'Yes, we can change the crab sashimi to steamed crab.'
    },
    {
      speaker: 'you',
      jp: 'では、その会席を二人分お願いします。',
      say: 'では、そのかいせきをふたりぶんおねがいします。',
      ruby: 'では、その<ruby>会席<rt>かいせき</rt></ruby>を<ruby>二人分<rt>ふたりぶん</rt></ruby>お<ruby>願<rt>ねが</rt></ruby>いします。',
      romaji: 'Dewa, sono kaiseki o futaribun onegai shimasu.',
      zh: '那麼，這份會席料理要兩人份。',
      en: 'Then, two of those courses, please.'
    },
    {
      speaker: 'staff',
      jp: 'かしこまりました。お飲み物はいかがですか？',
      say: 'かしこまりました。おのみものわいかがですか？',
      ruby: 'かしこまりました。お<ruby>飲<rt>の</rt></ruby>み<ruby>物<rt>もの</rt></ruby>はいかがですか？',
      romaji: 'Kashikomarimashita. Onomimono wa ikaga desu ka?',
      zh: '好的。需要飲料嗎？',
      en: 'Certainly. Would you like anything to drink?'
    },
    {
      speaker: 'you',
      jp: '日本酒を二合お願いします。',
      say: 'にほんしゅをにごうおねがいします。',
      ruby: '<ruby>日本酒<rt>にほんしゅ</rt></ruby>を<ruby>二合<rt>にごう</rt></ruby>お<ruby>願<rt>ねが</rt></ruby>いします。',
      romaji: 'Nihonshu o ni-gō onegai shimasu.',
      zh: '麻煩清酒兩合。',
      en: 'Two gō of sake, please.'
    },
    {
      speaker: 'staff',
      jp: 'かしこまりました。かに鍋は火が通ったらお召し上がりください。',
      say: 'かしこまりました。かになべわひがとおったらおめしあがりください。',
      ruby: 'かしこまりました。かに<ruby>鍋<rt>なべ</rt></ruby>は<ruby>火<rt>ひ</rt></ruby>が<ruby>通<rt>とお</rt></ruby>ったらお<ruby>召<rt>め</rt></ruby>し<ruby>上<rt>あ</rt></ruby>がりください。',
      romaji: 'Kashikomarimashita. Kani-nabe wa hi ga tōttara omeshiagari kudasai.',
      zh: '好的。蟹鍋煮熟後請享用。',
      en: 'Certainly. Please enjoy the crab hot pot once it is cooked through.'
    },
    {
      speaker: 'you',
      jp: '殻のむき方を教えてもらえますか？',
      say: 'からのむきかたをおしえてもらえますか？',
      ruby: '<ruby>殻<rt>から</rt></ruby>のむき<ruby>方<rt>かた</rt></ruby>を<ruby>教<rt>おし</rt></ruby>えてもらえますか？',
      romaji: 'Kara no mukikata o oshiete moraemasu ka?',
      zh: '可以教我怎麼剝蟹殼嗎？',
      en: 'Could you show me how to remove the shell?'
    },
    {
      speaker: 'staff',
      jp: 'もちろんです。こちらのはさみをお使いください。',
      say: 'もちろんです。こちらのはさみをおつかいください。',
      ruby: 'もちろんです。こちらのはさみをお<ruby>使<rt>つか</rt></ruby>いください。',
      romaji: 'Mochiron desu. Kochira no hasami o otsukai kudasai.',
      zh: '當然可以。請用這把剪刀。',
      en: 'Of course. Please use these scissors.'
    },
    {
      speaker: 'you',
      jp: 'ありがとうございます。',
      ruby: 'ありがとうございます。',
      romaji: 'Arigatō gozaimasu.',
      zh: '謝謝。',
      en: 'Thank you.'
    }
  ],
  phrases: [
    {
      title: '料理を選ぶ · Choosing crab dishes',
      items: [
        { jp: 'おすすめのかに料理は何ですか？', say: 'おすすめのかにりょうりわなんですか？', ruby: 'おすすめのかに<ruby>料理<rt>りょうり</rt></ruby>は<ruby>何<rt>なん</rt></ruby>ですか？', zh: '推薦的螃蟹料理是什麼？', en: 'What crab dish do you recommend?' },
        { jp: '焼きがにをお願いします。', say: 'やきがにをおねがいします。', ruby: '<ruby>焼<rt>や</rt></ruby>きがにをお<ruby>願<rt>ねが</rt></ruby>いします。', zh: '麻煩來烤蟹。', en: 'Grilled crab, please.' },
        { jp: 'かに鍋を二人前お願いします。', say: 'かになべをふたりまえおねがいします。', ruby: 'かに<ruby>鍋<rt>なべ</rt></ruby>を<ruby>二人前<rt>ふたりまえ</rt></ruby>お<ruby>願<rt>ねが</rt></ruby>いします。', zh: '麻煩蟹鍋兩人份。', en: 'Crab hot pot for two, please.' },
        { jp: '生ものは苦手です。', say: 'なまものわにがてです。', ruby: '<ruby>生<rt>なま</rt></ruby>ものは<ruby>苦手<rt>にがて</rt></ruby>です。', zh: '我不太敢吃生食。', en: 'I am not comfortable with raw food.' }
      ]
    },
    {
      title: '食べるとき · At the table',
      items: [
        { jp: 'これはどうやって食べますか？', say: 'これわどうやってたべますか？', ruby: 'これはどうやって<ruby>食<rt>た</rt></ruby>べますか？', zh: '這個要怎麼吃？', en: 'How do I eat this?' },
        { jp: '殻のむき方を教えてください。', say: 'からのむきかたをおしえてください。', ruby: '<ruby>殻<rt>から</rt></ruby>のむき<ruby>方<rt>かた</rt></ruby>を<ruby>教<rt>おし</rt></ruby>えてください。', zh: '請教我怎麼剝蟹殼。', en: 'Please show me how to remove the shell.' },
        { jp: '雑炊をお願いします。', say: 'ぞうすいをおねがいします。', ruby: '<ruby>雑炊<rt>ぞうすい</rt></ruby>をお<ruby>願<rt>ねが</rt></ruby>いします。', zh: '麻煩來雜炊。', en: 'Rice porridge, please.' },
        { jp: '取り皿をもう一枚ください。', say: 'とりざらをもういちまいください。', ruby: '<ruby>取<rt>と</rt></ruby>り<ruby>皿<rt>ざら</rt></ruby>をもう<ruby>一枚<rt>いちまい</rt></ruby>ください。', zh: '請再給我一個分食盤。', en: 'One more small plate, please.' }
      ]
    }
  ]
}
