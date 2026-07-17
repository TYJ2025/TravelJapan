// 焼肉店 (Yakiniku) — grill-your-own meat, all-you-can-eat, sides, changing the grill.
export const yakiniku = {
  id: 'yakiniku',
  title: 'Yakiniku (Grilled Meat)',
  titleJp: '焼肉店',
  emoji: '🥩',
  description: 'Grill-your-own meat — cuts, all-you-can-eat, sides, and changing the grill net.',
  lines: [
    {
      speaker: 'staff',
      jp: 'いらっしゃいませ。何名様ですか？',
      ruby: 'いらっしゃいませ。<ruby>何名様<rt>なんめいさま</rt></ruby>ですか？',
      romaji: 'Irasshaimase. Nanmei-sama desu ka?',
      zh: '歡迎光臨。請問幾位?',
      en: 'Welcome. How many people?'
    },
    {
      speaker: 'you',
      jp: '二人です。',
      ruby: '<ruby>二人<rt>ふたり</rt></ruby>です。',
      romaji: 'Futari desu.',
      zh: '兩位。',
      en: 'Two people.'
    },
    {
      speaker: 'staff',
      jp: 'お席へどうぞ。まずお飲み物はいかがですか？',
      ruby: 'お<ruby>席<rt>せき</rt></ruby>へどうぞ。まずお<ruby>飲<rt>の</rt></ruby>み<ruby>物<rt>もの</rt></ruby>はいかがですか？',
      romaji: 'O-seki e dōzo. Mazu o-nomimono wa ikaga desu ka?',
      zh: '這邊請坐。先來點飲料如何?',
      en: 'This way to your seats. First, would you like something to drink?'
    },
    {
      speaker: 'you',
      jp: '生ビールを二つお願いします。',
      ruby: '<ruby>生<rt>なま</rt></ruby>ビールを<ruby>二<rt>ふた</rt></ruby>つお<ruby>願<rt>ねが</rt></ruby>いします。',
      romaji: 'Nama-bīru o futatsu onegai shimasu.',
      zh: '請給我兩杯生啤酒。',
      en: 'Two draft beers, please.'
    },
    {
      speaker: 'staff',
      jp: 'ご注文はお決まりですか？',
      ruby: 'ご<ruby>注文<rt>ちゅうもん</rt></ruby>はお<ruby>決<rt>き</rt></ruby>まりですか？',
      romaji: 'Go-chūmon wa o-kimari desu ka?',
      zh: '請問決定好要點什麼了嗎?',
      en: 'Are you ready to order?'
    },
    {
      speaker: 'you',
      jp: '食べ放題はありますか？',
      ruby: '<ruby>食<rt>た</rt></ruby>べ<ruby>放題<rt>ほうだい</rt></ruby>はありますか？',
      romaji: 'Tabehōdai wa arimasu ka?',
      zh: '有吃到飽嗎?',
      en: 'Do you have all-you-can-eat?'
    },
    {
      speaker: 'staff',
      jp: 'はい、九十分で一人三千円です。',
      ruby: 'はい、<ruby>九十分<rt>きゅうじっぷん</rt></ruby>で<ruby>一人<rt>ひとり</rt></ruby><ruby>三千円<rt>さんぜんえん</rt></ruby>です。',
      romaji: 'Hai, kyūjuppun de hitori sanzen-en desu.',
      zh: '有的,九十分鐘每人三千日圓。',
      en: 'Yes, 90 minutes for 3,000 yen per person.'
    },
    {
      speaker: 'you',
      jp: 'じゃあ、二人とも食べ放題でお願いします。',
      ruby: 'じゃあ、<ruby>二人<rt>ふたり</rt></ruby>とも<ruby>食<rt>た</rt></ruby>べ<ruby>放題<rt>ほうだい</rt></ruby>でお<ruby>願<rt>ねが</rt></ruby>いします。',
      romaji: 'Jā, futari tomo tabehōdai de onegai shimasu.',
      zh: '那麼,兩個人都要吃到飽。',
      en: "Then, all-you-can-eat for both of us, please."
    },
    {
      speaker: 'staff',
      jp: 'かしこまりました。まずは何を焼きますか？',
      ruby: 'かしこまりました。まずは<ruby>何<rt>なに</rt></ruby>を<ruby>焼<rt>や</rt></ruby>きますか？',
      romaji: 'Kashikomarimashita. Mazu wa nani o yakimasu ka?',
      zh: '好的。要先烤什麼呢?',
      en: 'Certainly. What will you grill first?'
    },
    {
      speaker: 'you',
      jp: 'カルビとハラミ、タンをください。',
      ruby: 'カルビとハラミ、タンをください。',
      romaji: 'Karubi to harami, tan o kudasai.',
      zh: '請給我牛五花、牛橫膈膜和牛舌。',
      en: 'Short rib, skirt steak, and tongue, please.'
    },
    {
      speaker: 'staff',
      jp: 'はい。お肉はすぐにお持ちします。',
      ruby: 'はい。お<ruby>肉<rt>にく</rt></ruby>はすぐにお<ruby>持<rt>も</rt></ruby>ちします。',
      romaji: 'Hai. O-niku wa sugu ni o-mochi shimasu.',
      zh: '好的。肉馬上為您送來。',
      en: 'Sure. The meat will be right out.'
    },
    {
      speaker: 'you',
      jp: 'すみません、ご飯とキムチも追加でお願いします。',
      ruby: 'すみません、ご<ruby>飯<rt>はん</rt></ruby>とキムチも<ruby>追加<rt>ついか</rt></ruby>でお<ruby>願<rt>ねが</rt></ruby>いします。',
      romaji: 'Sumimasen, gohan to kimuchi mo tsuika de onegai shimasu.',
      zh: '不好意思,再加點白飯和泡菜。',
      en: 'Excuse me, also add rice and kimchi, please.'
    },
    {
      speaker: 'staff',
      jp: '大盛りになさいますか？',
      say: 'おおもりになさいますか？',
      ruby: '<ruby>大盛<rt>おおも</rt></ruby>りになさいますか？',
      romaji: 'Ōmori ni nasaimasu ka?',
      zh: '白飯要大碗的嗎?',
      en: 'Would you like a large portion?'
    },
    {
      speaker: 'you',
      jp: '普通でいいです。',
      ruby: '<ruby>普通<rt>ふつう</rt></ruby>でいいです。',
      romaji: 'Futsū de ii desu.',
      zh: '普通的就好。',
      en: 'Regular is fine.'
    },
    {
      speaker: 'you',
      jp: 'この網、もう変えてもらえますか？',
      say: 'このあみ、もう変えてもらえますか？',
      ruby: 'この<ruby>網<rt>あみ</rt></ruby>、もう<ruby>変<rt>か</rt></ruby>えてもらえますか？',
      romaji: 'Kono ami, mō kaete moraemasu ka?',
      zh: '這個烤網可以幫我換一下嗎?',
      en: 'Could you change this grill net now?'
    },
    {
      speaker: 'staff',
      jp: 'はい、すぐにお取り替えします。',
      ruby: 'はい、すぐにお<ruby>取<rt>と</rt></ruby>り<ruby>替<rt>か</rt></ruby>えします。',
      romaji: 'Hai, sugu ni o-torikae shimasu.',
      zh: '好的,馬上幫您更換。',
      en: 'Yes, I will replace it right away.'
    },
    {
      speaker: 'you',
      jp: 'お腹いっぱいです。お会計お願いします。',
      ruby: 'お<ruby>腹<rt>なか</rt></ruby>いっぱいです。お<ruby>会計<rt>かいけい</rt></ruby>お<ruby>願<rt>ねが</rt></ruby>いします。',
      romaji: 'O-naka ippai desu. O-kaikei onegai shimasu.',
      zh: '我吃飽了。麻煩結帳。',
      en: "I'm full. The bill, please."
    }
  ],
  menu: [
    {
      title: '牛肉 · Beef',
      items: [
        { emoji: '🥩', jp: 'カルビ', ruby: 'カルビ', romaji: 'karubi', zh: '牛五花', en: 'short rib', desc: '牛肋骨周邊的五花肉，油花豐富、燒肉最經典的部位。' },
        { emoji: '🥩', jp: '上カルビ', say: 'じょうカルビ', ruby: '<ruby>上<rt>じょう</rt></ruby>カルビ', romaji: 'jō-karubi', zh: '上等牛五花', en: 'premium short rib', desc: '等級更高的牛五花，油花更細緻、肉質更軟嫩。' },
        { emoji: '🥩', jp: '特上カルビ', say: 'とくじょうカルビ', ruby: '<ruby>特上<rt>とくじょう</rt></ruby>カルビ', romaji: 'tokujō-karubi', zh: '特上牛五花', en: 'top-grade short rib', desc: '最高等級的牛五花，霜降細密、入口即化。' },
        { emoji: '🥩', jp: 'ハラミ', ruby: 'ハラミ', romaji: 'harami', zh: '牛橫膈膜', en: 'skirt steak', desc: '橫膈膜肉，瘦中帶油、口感彈嫩有嚼勁。' },
        { emoji: '🥩', jp: 'サガリ', ruby: 'サガリ', romaji: 'sagari', zh: '牛吊帶（橫膈膜）', en: 'hanger steak', desc: '橫膈膜中央的吊帶肉，瘦而多汁、肉味濃郁。' },
        { emoji: '🥩', jp: 'ロース', ruby: 'ロース', romaji: 'rōsu', zh: '牛里肌', en: 'loin', desc: '牛背脊的里肌肉，瘦肉為主、口感清爽不膩。' },
        { emoji: '🥩', jp: 'リブロース', ruby: 'リブロース', romaji: 'ribu-rōsu', zh: '肋眼', en: 'rib loin', desc: '肋眼部位，油花均勻、肉質柔嫩風味濃厚。' },
        { emoji: '🥩', jp: 'ミスジ', ruby: 'ミスジ', romaji: 'misuji', zh: '牛肩胛（三筋）', en: 'top blade', desc: '肩胛內側的稀有部位，油花呈葉脈狀、軟嫩多汁。' },
        { emoji: '🥩', jp: 'イチボ', ruby: 'イチボ', romaji: 'ichibo', zh: '牛臀肉', en: 'rump cap', desc: '臀部上方的赤身肉，瘦中帶油、肉味扎實。' },
        { emoji: '🥩', jp: 'ザブトン', ruby: 'ザブトン', romaji: 'zabuton', zh: '牛肩胛裡脊', en: 'chuck flap', desc: '肩胛裡脊的稀有部位，霜降豐富、柔嫩如座墊。' }
      ]
    },
    {
      title: 'タン・ホルモン · Tongue & offal',
      items: [
        { emoji: '👅', jp: 'タン', ruby: 'タン', romaji: 'tan', zh: '牛舌', en: 'beef tongue', desc: '牛舌，彈脆有嚼勁，配鹽與檸檬最對味。' },
        { emoji: '👅', jp: '上タン', say: 'じょうタン', ruby: '<ruby>上<rt>じょう</rt></ruby>タン', romaji: 'jō-tan', zh: '上等牛舌', en: 'premium tongue', desc: '舌根的厚切上等牛舌，柔嫩多汁、口感更豐厚。' },
        { emoji: '🧂', jp: 'タン塩', say: 'タンしお', ruby: 'タン<ruby>塩<rt>しお</rt></ruby>', romaji: 'tan-shio', zh: '鹽味牛舌', en: 'salted tongue', desc: '以鹽調味的牛舌，清爽彈脆、擠檸檬風味更佳。' },
        { emoji: '🍢', jp: 'ホルモン', ruby: 'ホルモン', romaji: 'horumon', zh: '牛腸', en: 'beef intestines', desc: '牛腸（內臟），富含油脂、越嚼越香。' },
        { emoji: '🍢', jp: 'ミノ', ruby: 'ミノ', romaji: 'mino', zh: '牛胃（毛肚）', en: 'beef tripe', desc: '牛的第一個胃（毛肚），脆彈無腥味。' },
        { emoji: '🍢', jp: 'シマチョウ', ruby: 'シマチョウ', romaji: 'shimachō', zh: '牛大腸', en: 'large intestine', desc: '牛大腸（內臟），油脂豐厚、外脆內Q甜香。' },
        { emoji: '❤️', jp: 'ハツ', ruby: 'ハツ', romaji: 'hatsu', zh: '牛心', en: 'beef heart', desc: '牛心臟（內臟），脆嫩清爽、無腥味易入口。' },
        { emoji: '🍢', jp: 'レバー', ruby: 'レバー', romaji: 'rebā', zh: '牛肝', en: 'beef liver', desc: '牛肝（內臟），口感綿密濃醇、鐵味鮮明。' },
        { emoji: '🍢', jp: 'センマイ', ruby: 'センマイ', romaji: 'senmai', zh: '牛百葉', en: 'beef omasum', desc: '牛的第三個胃（百葉），爽脆有嚼勁、味道清淡。' }
      ]
    },
    {
      title: '豚・鶏 · Pork & chicken',
      items: [
        { emoji: '🥓', jp: '豚カルビ', say: 'ぶたカルビ', ruby: '<ruby>豚<rt>ぶた</rt></ruby>カルビ', romaji: 'buta-karubi', zh: '豬五花', en: 'pork belly', desc: '豬五花肉，肥瘦相間、油脂香甜有嚼勁。' },
        { emoji: '🥓', jp: '豚トロ', say: 'とんトロ', ruby: '<ruby>豚<rt>とん</rt></ruby>トロ', romaji: 'ton-toro', zh: '松阪豬', en: 'pork jowl', desc: '豬頸肉（松阪豬），油花細緻、脆嫩多汁。' },
        { emoji: '🍗', jp: '鶏もも', say: 'とりもも', ruby: '<ruby>鶏<rt>とり</rt></ruby>もも', romaji: 'tori-momo', zh: '雞腿肉', en: 'chicken thigh', desc: '雞腿肉，肉質軟嫩多汁、烤後皮香肉甜。' }
      ]
    },
    {
      title: '野菜・ご飯・スープ · Veg, rice & soup',
      items: [
        { emoji: '🥗', jp: '野菜盛り合わせ', say: 'やさいもりあわせ', ruby: '<ruby>野菜<rt>やさい</rt></ruby><ruby>盛<rt>も</rt></ruby>り<ruby>合<rt>あ</rt></ruby>わせ', romaji: 'yasai moriawase', zh: '蔬菜拼盤', en: 'assorted vegetables', desc: '綜合蔬菜拼盤，適合一起燒烤、清爽解膩。' },
        { emoji: '🍄', jp: 'しいたけ', ruby: 'しいたけ', romaji: 'shiitake', zh: '香菇', en: 'shiitake mushroom', desc: '香菇，燒烤後香氣濃郁、口感飽滿多汁。' },
        { emoji: '🧅', jp: '玉ねぎ', say: 'たまねぎ', ruby: '<ruby>玉<rt>たま</rt></ruby>ねぎ', romaji: 'tamanegi', zh: '洋蔥', en: 'onion', desc: '洋蔥，烤後甜味釋出、口感軟甜微脆。' },
        { emoji: '🥬', jp: 'キムチ', ruby: 'キムチ', romaji: 'kimuchi', zh: '泡菜', en: 'kimchi', desc: '韓式泡菜，酸辣開胃、搭配燒肉解膩。' },
        { emoji: '🥬', jp: 'ナムル', ruby: 'ナムル', romaji: 'namuru', zh: '韓式涼拌菜', en: 'seasoned vegetables', desc: '韓式涼拌菜，以麻油調味、清爽爽口。' },
        { emoji: '🥬', jp: 'サンチュ', ruby: 'サンチュ', romaji: 'sanchu', zh: '生菜', en: 'lettuce wraps', desc: '生菜葉，用來包裹燒肉、清爽又解膩。' },
        { emoji: '🍚', jp: 'ライス', ruby: 'ライス', romaji: 'raisu', zh: '白飯', en: 'rice', desc: '白飯，搭配燒肉與醬汁、最佳主食配角。' },
        { emoji: '🍚', jp: 'ビビンバ', ruby: 'ビビンバ', romaji: 'bibinba', zh: '石鍋拌飯', en: 'bibimbap', desc: '韓式石鍋拌飯，配菜與辣醬拌勻、鍋巴香脆。' },
        { emoji: '🍜', jp: '冷麺', say: 'れいめん', ruby: '<ruby>冷麺<rt>れいめん</rt></ruby>', romaji: 'reimen', zh: '韓式冷麵', en: 'cold noodles', desc: '韓式冷麵，酸甜冰涼，燒肉後解膩收尾。' },
        { emoji: '🍲', jp: 'わかめスープ', ruby: 'わかめスープ', romaji: 'wakame sūpu', zh: '海帶芽湯', en: 'seaweed soup', desc: '海帶芽湯，清淡鮮甜、暖胃又解膩。' },
        { emoji: '🍲', jp: 'クッパ', ruby: 'クッパ', romaji: 'kuppa', zh: '韓式湯飯', en: 'gukbap (rice soup)', desc: '韓式湯飯，白飯泡入熱湯、暖胃飽足收尾。' }
      ]
    },
    {
      title: '叙々苑メニューから · Jojoen selections',
      items: [
        { emoji: '👅', jp: '上ネギタン塩焼', say: 'じょうネギタンしおやき', ruby: '<ruby>上<rt>じょう</rt></ruby>ネギタン<ruby>塩焼<rt>しおや</rt></ruby>', romaji: 'jō negi tan shioyaki', zh: '上等蔥鹽牛舌', en: 'premium green-onion salted tongue', desc: '叙々苑菜單的上等牛舌配調味蔥。' },
        { emoji: '🥩', jp: 'カルビ焼', say: 'カルビやき', ruby: 'カルビ<ruby>焼<rt>や</rt></ruby>き', romaji: 'karubi yaki', zh: '牛五花燒肉', en: 'short-rib grill', desc: '叙々苑菜單的經典牛五花燒肉。' },
        { emoji: '🥩', jp: '上カルビ焼', say: 'じょうカルビやき', ruby: '<ruby>上<rt>じょう</rt></ruby>カルビ<ruby>焼<rt>や</rt></ruby>き', romaji: 'jō karubi yaki', zh: '上等牛五花燒肉', en: 'premium short-rib grill', desc: '叙々苑菜單的上等牛五花燒肉。' },
        { emoji: '🏺', jp: '壺漬カルビ焼', say: 'つぼづけカルビやき', ruby: '<ruby>壺漬<rt>つぼづ</rt></ruby>けカルビ<ruby>焼<rt>や</rt></ruby>き', romaji: 'tsubozuke karubi yaki', zh: '壺漬牛五花燒肉', en: 'marinated short-rib grill', desc: '叙々苑菜單中以特製醬料醃漬的牛五花。' },
        { emoji: '🥩', jp: '上赤身焼', say: 'じょうあかみやき', ruby: '<ruby>上<rt>じょう</rt></ruby><ruby>赤身<rt>あかみ</rt></ruby><ruby>焼<rt>や</rt></ruby>き', romaji: 'jō akami yaki', zh: '上等赤身燒肉', en: 'premium lean-beef grill', desc: '叙々苑菜單的上等赤身牛肉。' },
        { emoji: '🥩', jp: '上ロース焼', say: 'じょうロースやき', ruby: '<ruby>上<rt>じょう</rt></ruby>ロース<ruby>焼<rt>や</rt></ruby>き', romaji: 'jō rōsu yaki', zh: '上等里肌燒肉', en: 'premium loin grill', desc: '叙々苑菜單的上等里肌燒肉。' },
        { emoji: '🥩', jp: '肩ロース厚切焼', say: 'かたロースあつぎりやき', ruby: '<ruby>肩<rt>かた</rt></ruby>ロース<ruby>厚切<rt>あつぎ</rt></ruby><ruby>焼<rt>や</rt></ruby>き', romaji: 'kata rōsu atsugiri yaki', zh: '厚切肩里肌燒肉', en: 'thick-cut chuck loin grill', desc: '叙々苑菜單的厚切肩里肌燒肉。' },
        { emoji: '🥩', jp: '上ハラミ焼', say: 'じょうハラミやき', ruby: '<ruby>上<rt>じょう</rt></ruby>ハラミ<ruby>焼<rt>や</rt></ruby>き', romaji: 'jō harami yaki', zh: '上等橫膈膜燒肉', en: 'premium skirt-steak grill', desc: '叙々苑菜單的上等橫膈膜肉。' },
        { emoji: '🥩', jp: '特選サーロイン焼', say: 'とくせんサーロインやき', ruby: '<ruby>特選<rt>とくせん</rt></ruby>サーロイン<ruby>焼<rt>や</rt></ruby>き', romaji: 'tokusen sāroin yaki', zh: '特選沙朗燒肉', en: 'special selected sirloin grill', desc: '叙々苑菜單的特選沙朗燒肉。' },
        { emoji: '🥩', jp: '特選ネギサーロイン薄切塩焼', say: 'とくせんネギサーロインうすぎりしおやき', ruby: '<ruby>特選<rt>とくせん</rt></ruby>ネギサーロイン<ruby>薄切<rt>うすぎ</rt></ruby>り<ruby>塩焼<rt>しおや</rt></ruby>', romaji: 'tokusen negi sāroin usugiri shioyaki', zh: '特選蔥鹽薄切沙朗', en: 'special selected thin-sliced scallion sirloin', desc: '叙々苑菜單的薄切特選沙朗，搭配蔥與鹽味。' },
        { emoji: '🥩', jp: '特選シャトーブリアン', say: 'とくせんシャトーブリアン', ruby: '<ruby>特選<rt>とくせん</rt></ruby>シャトーブリアン', romaji: 'tokusen shatōburiand', zh: '特選夏多布里昂', en: 'special selected chateaubriand', desc: '叙々苑菜單的高級菲力中心部位。' },
        { emoji: '🍢', jp: 'ホルモン焼', say: 'ホルモンやき', ruby: 'ホルモン<ruby>焼<rt>や</rt></ruby>き', romaji: 'horumon yaki', zh: '燒牛腸', en: 'grilled beef offal', desc: '叙々苑推薦菜單的味噌調味牛內臟。' },
        { emoji: '🥗', jp: '叙々苑サラダ', say: 'じょじょえんサラダ', ruby: '<ruby>叙々苑<rt>じょじょえん</rt></ruby>サラダ', romaji: 'jojoen sarada', zh: '叙々苑沙拉', en: 'Jojoen salad', desc: '叙々苑的人氣沙拉，以芝麻風味調味。' },
        { emoji: '🍚', jp: '石焼ビビンバ', say: 'いしやきビビンバ', ruby: '<ruby>石焼<rt>いしや</rt></ruby>きビビンバ', romaji: 'ishiyaki bibinba', zh: '石鍋拌飯', en: 'stone-pot bibimbap', desc: '叙々苑推薦菜單的石鍋拌飯。' }
      ]
    }
  ],
  phrases: [
    {
      title: 'よく使う一言 · Handy phrases',
      items: [
        { jp: '食べ放題はありますか？', ruby: '<ruby>食<rt>た</rt></ruby>べ<ruby>放題<rt>ほうだい</rt></ruby>はありますか？', zh: '有吃到飽嗎?', en: 'Do you have all-you-can-eat?' },
        { jp: '網を変えてください。', say: 'あみをかえてください。', ruby: '<ruby>網<rt>あみ</rt></ruby>を<ruby>変<rt>か</rt></ruby>えてください。', zh: '請幫我換烤網。', en: 'Please change the grill net.' },
        { jp: 'タレをもらえますか？', ruby: 'タレをもらえますか？', zh: '可以給我醬料嗎?', en: 'Could I get some sauce?' },
        { jp: 'ご飯のおかわりをください。', ruby: 'ご<ruby>飯<rt>はん</rt></ruby>のおかわりをください。', zh: '請再給我一碗飯。', en: 'Another bowl of rice, please.' },
        { jp: 'これはどのくらい焼きますか？', ruby: 'これはどのくらい<ruby>焼<rt>や</rt></ruby>きますか？', zh: '這個要烤多久?', en: 'How long should I grill this?' },
        { jp: '飲み物のおかわりをください。', ruby: '<ruby>飲<rt>の</rt></ruby>み<ruby>物<rt>もの</rt></ruby>のおかわりをください。', zh: '請再給我一杯飲料。', en: 'Another drink, please.' }
      ]
    }
  ]
}
