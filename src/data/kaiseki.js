// 会席料理 (Kaiseki) — formal multi-course dinner at a ryokan, course by course.
export const kaiseki = {
  id: 'kaiseki',
  title: 'Kaiseki Course',
  titleJp: '会席料理',
  emoji: '🍱',
  description: 'A formal multi-course ryokan dinner — being seated, drinks, dietary notes, and each course explained.',
  lines: [
    {
      speaker: 'staff',
      jp: 'お待ちしておりました。お席へご案内します。',
      ruby: 'お<ruby>待<rt>ま</rt></ruby>ちしておりました。お<ruby>席<rt>せき</rt></ruby>へご<ruby>案内<rt>あんない</rt></ruby>します。',
      romaji: 'Omachi shite orimashita. O-seki e go-annai shimasu.',
      zh: '恭候多時了。為您帶位至座席。',
      en: 'We have been expecting you. Let me show you to your seat.'
    },
    {
      speaker: 'you',
      jp: 'ありがとうございます。よろしくお願いします。',
      ruby: 'ありがとうございます。よろしくお<ruby>願<rt>ねが</rt></ruby>いします。',
      romaji: 'Arigatō gozaimasu. Yoroshiku onegai shimasu.',
      zh: '謝謝。麻煩您了。',
      en: 'Thank you. I appreciate it.'
    },
    {
      speaker: 'staff',
      jp: '本日は会席料理のコースをご用意しております。',
      say: '本日はかいせきりょうりのコースをごよういしております。',
      ruby: '<ruby>本日<rt>ほんじつ</rt></ruby>は<ruby>会席料理<rt>かいせきりょうり</rt></ruby>のコースをご<ruby>用意<rt>ようい</rt></ruby>しております。',
      romaji: 'Honjitsu wa kaiseki-ryōri no kōsu o go-yōi shite orimasu.',
      zh: '今天為您準備了會席料理的套餐。',
      en: 'Tonight we have prepared a kaiseki course meal for you.'
    },
    {
      speaker: 'staff',
      jp: '一品ずつお持ちしますので、ごゆっくりどうぞ。',
      ruby: '<ruby>一品<rt>いっぴん</rt></ruby>ずつお<ruby>持<rt>も</rt></ruby>ちしますので、ごゆっくりどうぞ。',
      romaji: 'Ippin zutsu o-mochi shimasu node, go-yukkuri dōzo.',
      zh: '我們會一道一道為您上菜，請慢慢享用。',
      en: 'We will bring each dish one by one, so please take your time.'
    },
    {
      speaker: 'staff',
      jp: 'お飲み物はいかがなさいますか。日本酒、ビール、お茶などがございます。',
      say: 'おのみものはいかがなさいますか。にほんしゅ、ビール、おちゃなどがございます。',
      ruby: 'お<ruby>飲<rt>の</rt></ruby>み<ruby>物<rt>もの</rt></ruby>はいかがなさいますか。<ruby>日本酒<rt>にほんしゅ</rt></ruby>、ビール、お<ruby>茶<rt>ちゃ</rt></ruby>などがございます。',
      romaji: 'O-nomimono wa ikaga nasaimasu ka. Nihonshu, bīru, o-cha nado ga gozaimasu.',
      zh: '您想喝點什麼呢？我們有日本酒、啤酒、茶等等。',
      en: 'What would you like to drink? We have sake, beer, tea, and more.'
    },
    {
      speaker: 'you',
      jp: 'では、地元の日本酒を一合ください。',
      say: 'では、じもとのにほんしゅをいちごうください。',
      ruby: 'では、<ruby>地元<rt>じもと</rt></ruby>の<ruby>日本酒<rt>にほんしゅ</rt></ruby>を<ruby>一合<rt>いちごう</rt></ruby>ください。',
      romaji: 'Dewa, jimoto no nihonshu o ichi-gō kudasai.',
      zh: '那麼，請給我一合當地的日本酒。',
      en: 'Then, one go of the local sake, please.'
    },
    {
      speaker: 'you',
      jp: 'それと、私はそばアレルギーがあります。',
      say: 'それと、わたしはそばアレルギーがあります。',
      ruby: 'それと、<ruby>私<rt>わたし</rt></ruby>はそばアレルギーがあります。',
      romaji: 'Sore to, watashi wa soba arerugī ga arimasu.',
      zh: '還有，我對蕎麥過敏。',
      en: 'Also, I have a soba (buckwheat) allergy.'
    },
    {
      speaker: 'staff',
      jp: 'かしこまりました。料理長に伝えて、そばを使わないようにいたします。',
      say: 'かしこまりました。りょうりちょうにつたえて、そばをつかわないようにいたします。',
      ruby: 'かしこまりました。<ruby>料理長<rt>りょうりちょう</rt></ruby>に<ruby>伝<rt>つた</rt></ruby>えて、そばを<ruby>使<rt>つか</rt></ruby>わないようにいたします。',
      romaji: 'Kashikomarimashita. Ryōrichō ni tsutaete, soba o tsukawanai yō ni itashimasu.',
      zh: '好的。我會轉達主廚，不使用蕎麥。',
      en: 'Certainly. I will inform the head chef and make sure no soba is used.'
    },
    {
      speaker: 'staff',
      jp: 'こちらが先付でございます。季節の一品です。',
      say: 'こちらがさきづけでございます。きせつのいっぴんです。',
      ruby: 'こちらが<ruby>先付<rt>さきづけ</rt></ruby>でございます。<ruby>季節<rt>きせつ</rt></ruby>の<ruby>一品<rt>いっぴん</rt></ruby>です。',
      romaji: 'Kochira ga sakizuke de gozaimasu. Kisetsu no ippin desu.',
      zh: '這是先付（開胃小菜）。是當季的一道料理。',
      en: 'This is the sakizuke (amuse-bouche). It is a seasonal dish.'
    },
    {
      speaker: 'you',
      jp: 'これはどうやって食べますか。',
      ruby: 'これはどうやって<ruby>食<rt>た</rt></ruby>べますか。',
      romaji: 'Kore wa dō yatte tabemasu ka.',
      zh: '這個要怎麼吃呢？',
      en: 'How do I eat this?'
    },
    {
      speaker: 'staff',
      jp: 'そのままお召し上がりください。次にお造りをお持ちします。',
      say: 'そのままおめしあがりください。つぎにおつくりをおもちします。',
      ruby: 'そのままお<ruby>召<rt>め</rt></ruby>し<ruby>上<rt>あ</rt></ruby>がりください。<ruby>次<rt>つぎ</rt></ruby>にお<ruby>造<rt>つく</rt></ruby>りをお<ruby>持<rt>も</rt></ruby>ちします。',
      romaji: 'Sono mama o-meshiagari kudasai. Tsugi ni o-tsukuri o o-mochi shimasu.',
      zh: '請直接享用即可。接下來會為您送上生魚片。',
      en: 'Please eat it as it is. Next, I will bring the sashimi.'
    },
    {
      speaker: 'you',
      jp: 'どれもとても美味しいです。ごちそうさまでした。',
      say: 'どれもとてもおいしいです。ごちそうさまでした。',
      ruby: 'どれもとても<ruby>美味<rt>おい</rt></ruby>しいです。ごちそうさまでした。',
      romaji: 'Dore mo totemo oishii desu. Gochisōsama deshita.',
      zh: '每一道都非常美味。謝謝招待。',
      en: 'Everything is delicious. Thank you for the meal.'
    }
  ],
  menu: [
    {
      title: '会席のお品書き · The course',
      items: [
        { emoji: '🍡', jp: '先付', say: 'さきづけ', ruby: '<ruby>先付<rt>さきづけ</rt></ruby>', romaji: 'sakizuke', zh: '開胃小菜', en: 'amuse-bouche', desc: '會席最先上的一口開胃小菜，展現當季食材與季節感。' },
        { emoji: '🥢', jp: '前菜', say: 'ぜんさい', ruby: '<ruby>前菜<rt>ぜんさい</rt></ruby>', romaji: 'zensai', zh: '前菜拼盤', en: 'appetizer platter', desc: '數種小菜盛在一盤的前菜拼盤，色彩豐富賞心悅目。' },
        { emoji: '🍵', jp: 'お椀／吸い物', say: 'おわん／すいもの', ruby: 'お<ruby>椀<rt>わん</rt></ruby>／<ruby>吸<rt>す</rt></ruby>い<ruby>物<rt>もの</rt></ruby>', romaji: 'o-wan / suimono', zh: '清湯', en: 'clear soup', desc: '以高湯為底的清湯，是展現廚師功力的一道清雅料理。' },
        { emoji: '🐟', jp: 'お造り／刺身', say: 'おつくり／さしみ', ruby: 'お<ruby>造<rt>つく</rt></ruby>り／<ruby>刺身<rt>さしみ</rt></ruby>', romaji: 'o-tsukuri / sashimi', zh: '生魚片', en: 'sashimi course', desc: '當季新鮮的生魚片，沾醬油與山葵享用。' },
        { emoji: '🔥', jp: '焼き物', say: 'やきもの', ruby: '<ruby>焼<rt>や</rt></ruby>き<ruby>物<rt>もの</rt></ruby>', romaji: 'yakimono', zh: '燒烤料理', en: 'grilled course', desc: '燒烤的一道菜，多為魚類，外香內嫩。' },
        { emoji: '🍲', jp: '煮物', say: 'にもの', ruby: '<ruby>煮物<rt>にもの</rt></ruby>', romaji: 'nimono', zh: '燉煮料理', en: 'simmered dish', desc: '以高湯細火慢燉的蔬菜或魚肉，味道溫潤入味。' },
        { emoji: '🍤', jp: '揚げ物', say: 'あげもの', ruby: '<ruby>揚<rt>あ</rt></ruby>げ<ruby>物<rt>もの</rt></ruby>', romaji: 'agemono', zh: '炸物', en: 'tempura course', desc: '酥炸料理，通常為天婦羅，外酥內嫩。' },
        { emoji: '🥗', jp: '酢の物', say: 'すのもの', ruby: '<ruby>酢<rt>す</rt></ruby>の<ruby>物<rt>もの</rt></ruby>', romaji: 'sunomono', zh: '醋漬涼拌', en: 'vinegared dish', desc: '以醋調味的清爽小菜，可解膩、轉換口味。' },
        { emoji: '🍮', jp: '蒸し物／茶碗蒸し', say: 'むしもの／ちゃわんむし', ruby: '<ruby>蒸<rt>む</rt></ruby>し<ruby>物<rt>もの</rt></ruby>／<ruby>茶碗蒸<rt>ちゃわんむ</rt></ruby>し', romaji: 'mushimono / chawanmushi', zh: '蒸物（茶碗蒸）', en: 'chawanmushi', desc: '蒸蛋料理，滑嫩的蒸蛋中藏著蝦、菇等配料。' },
        { emoji: '🍚', jp: '食事（ご飯・味噌汁・香の物）', say: 'しょくじ（ごはん・みそしる・こうのもの）', ruby: '<ruby>食事<rt>しょくじ</rt></ruby>（ご<ruby>飯<rt>はん</rt></ruby>・<ruby>味噌汁<rt>みそしる</rt></ruby>・<ruby>香<rt>こう</rt></ruby>の<ruby>物<rt>もの</rt></ruby>）', romaji: 'shokuji (gohan, miso-shiru, kō no mono)', zh: '主食（白飯、味噌湯、醬菜）', en: 'rice, miso soup & pickles', desc: '收尾的主食，白飯搭配味噌湯與醬菜。' },
        { emoji: '🍇', jp: '水菓子', say: 'みずがし', ruby: '<ruby>水菓子<rt>みずがし</rt></ruby>', romaji: 'mizugashi', zh: '甜點水果', en: 'dessert / fruit', desc: '餐後的甜點或當季水果，清爽收尾。' },
        { emoji: '🍵', jp: '抹茶', say: 'まっちゃ', ruby: '<ruby>抹茶<rt>まっちゃ</rt></ruby>', romaji: 'matcha', zh: '抹茶', en: 'matcha', desc: '最後奉上的一碗抹茶，微苦回甘為一餐畫下句點。' }
      ]
    }
  ],
  phrases: [
    {
      title: 'よく使う一言 · Handy phrases',
      items: [
        { jp: 'これは何ですか？', ruby: 'これは<ruby>何<rt>なん</rt></ruby>ですか？', zh: '這是什麼？', en: 'What is this?' },
        { jp: 'どうやって食べますか？', ruby: 'どうやって<ruby>食<rt>た</rt></ruby>べますか？', zh: '這個要怎麼吃？', en: 'How do I eat this?' },
        { jp: 'お酒のおすすめはありますか？', say: 'おさけのおすすめはありますか？', ruby: 'お<ruby>酒<rt>さけ</rt></ruby>のおすすめはありますか？', zh: '有推薦的酒嗎？', en: 'Do you have a recommended sake?' },
        { jp: 'アレルギーがあります。', ruby: 'アレルギーがあります。', zh: '我有過敏。', en: 'I have an allergy.' },
        { jp: 'とても美味しいです。', say: 'とてもおいしいです。', ruby: 'とても<ruby>美味<rt>おい</rt></ruby>しいです。', zh: '非常美味。', en: 'It is very delicious.' },
        { jp: 'お料理の説明をお願いします。', say: 'おりょうりのせつめいをおねがいします。', ruby: 'お<ruby>料理<rt>りょうり</rt></ruby>の<ruby>説明<rt>せつめい</rt></ruby>をお<ruby>願<rt>ねが</rt></ruby>いします。', zh: '麻煩為我說明一下這道料理。', en: 'Could you explain the dish, please?' }
      ]
    }
  ]
}
