// A full restaurant-ordering dialogue.
//
// Each line has:
//   speaker : 'staff' (店員) or 'you' (あなた)
//   jp      : plain Japanese text — used for text-to-speech and as the
//             target for speech recognition when you practise speaking.
//   ruby    : the same text marked up with <ruby> furigana for reading.
//   romaji  : romanised reading (training wheels for pronunciation).
//   en      : English meaning.
//
// To add furigana, wrap a kanji word like:
//   <ruby>注文<rt>ちゅうもん</rt></ruby>
// The <rt> text is the small reading shown above the kanji.

export const restaurant = {
  id: 'restaurant',
  title: 'Ordering at a Restaurant',
  titleJp: 'レストランで注文する',
  emoji: '🍜',
  description: 'From being seated to paying the bill — the full conversation.',
  lines: [
    {
      speaker: 'staff',
      jp: 'いらっしゃいませ。何名様ですか？',
      ruby: 'いらっしゃいませ。<ruby>何名様<rt>なんめいさま</rt></ruby>ですか？',
      romaji: 'Irasshaimase. Nanmei-sama desu ka?',
      zh: '歡迎光臨。請問幾位?',
      en: 'Welcome! How many people?'
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
      jp: '禁煙席と喫煙席、どちらがよろしいですか？',
      ruby: '<ruby>禁煙席<rt>きんえんせき</rt></ruby>と<ruby>喫煙席<rt>きつえんせき</rt></ruby>、どちらがよろしいですか？',
      romaji: 'Kin\'en-seki to kitsuen-seki, dochira ga yoroshii desu ka?',
      zh: '請問您要禁菸區還是吸菸區?',
      en: 'Non-smoking or smoking seats — which would you prefer?'
    },
    {
      speaker: 'you',
      jp: '禁煙席でお願いします。',
      ruby: '<ruby>禁煙席<rt>きんえんせき</rt></ruby>でお<ruby>願<rt>ねが</rt></ruby>いします。',
      romaji: 'Kin\'en-seki de onegai shimasu.',
      zh: '麻煩給我禁菸區。',
      en: 'Non-smoking, please.'
    },
    {
      speaker: 'staff',
      jp: 'こちらへどうぞ。ご注文がお決まりになりましたらお呼びください。',
      ruby: 'こちらへどうぞ。ご<ruby>注文<rt>ちゅうもん</rt></ruby>がお<ruby>決<rt>き</rt></ruby>まりになりましたらお<ruby>呼<rt>よ</rt></ruby>びください。',
      romaji: 'Kochira e dōzo. Go-chūmon ga o-kimari ni narimashitara o-yobi kudasai.',
      zh: '這邊請。決定好要點什麼後再叫我。',
      en: 'This way please. Call me when you are ready to order.'
    },
    {
      speaker: 'you',
      jp: 'すみません、おすすめは何ですか？',
      ruby: 'すみません、おすすめは<ruby>何<rt>なん</rt></ruby>ですか？',
      romaji: 'Sumimasen, osusume wa nan desu ka?',
      zh: '不好意思，請問有什麼推薦的?',
      en: 'Excuse me, what do you recommend?'
    },
    {
      speaker: 'staff',
      jp: '本日のおすすめは醤油ラーメンです。',
      ruby: '<ruby>本日<rt>ほんじつ</rt></ruby>のおすすめは<ruby>醤油<rt>しょうゆ</rt></ruby>ラーメンです。',
      romaji: 'Honjitsu no osusume wa shōyu rāmen desu.',
      zh: '今天的推薦是醬油拉麵。',
      en: 'Today\'s recommendation is soy-sauce ramen.'
    },
    {
      speaker: 'you',
      jp: 'じゃあ、それを一つお願いします。',
      ruby: 'じゃあ、それを<ruby>一<rt>ひと</rt></ruby>つお<ruby>願<rt>ねが</rt></ruby>いします。',
      romaji: 'Jā, sore o hitotsu onegai shimasu.',
      zh: '那麻煩給我一份那個。',
      en: 'Then, one of those please.'
    },
    {
      speaker: 'staff',
      jp: 'お飲み物はいかがですか？',
      ruby: 'お<ruby>飲<rt>の</rt></ruby>み<ruby>物<rt>もの</rt></ruby>はいかがですか？',
      romaji: 'O-nomimono wa ikaga desu ka?',
      zh: '請問需要飲料嗎?',
      en: 'Would you like anything to drink?'
    },
    {
      speaker: 'you',
      jp: '冷たいお茶をください。',
      ruby: '<ruby>冷<rt>つめ</rt></ruby>たいお<ruby>茶<rt>ちゃ</rt></ruby>をください。',
      romaji: 'Tsumetai o-cha o kudasai.',
      zh: '請給我冰茶。',
      en: 'Cold tea, please.'
    },
    {
      speaker: 'staff',
      jp: 'かしこまりました。少々お待ちください。',
      ruby: 'かしこまりました。<ruby>少々<rt>しょうしょう</rt></ruby>お<ruby>待<rt>ま</rt></ruby>ちください。',
      romaji: 'Kashikomarimashita. Shōshō o-machi kudasai.',
      zh: '好的。請稍等一下。',
      en: 'Certainly. Please wait a moment.'
    },
    {
      speaker: 'staff',
      jp: 'お待たせしました。醤油ラーメンです。',
      ruby: 'お<ruby>待<rt>ま</rt></ruby>たせしました。<ruby>醤油<rt>しょうゆ</rt></ruby>ラーメンです。',
      romaji: 'O-matase shimashita. Shōyu rāmen desu.',
      zh: '讓您久等了。這是醬油拉麵。',
      en: 'Thank you for waiting. Here is your soy-sauce ramen.'
    },
    {
      speaker: 'you',
      jp: 'わあ、おいしそう！いただきます。',
      ruby: 'わあ、おいしそう！いただきます。',
      romaji: 'Wā, oishisō! Itadakimasu.',
      zh: '哇，看起來好好吃!我要開動了。',
      en: 'Wow, looks delicious! Thank you for the food.'
    },
    {
      speaker: 'you',
      jp: 'すみません、お会計をお願いします。',
      ruby: 'すみません、お<ruby>会計<rt>かいけい</rt></ruby>をお<ruby>願<rt>ねが</rt></ruby>いします。',
      romaji: 'Sumimasen, o-kaikei o onegai shimasu.',
      zh: '不好意思，麻煩結帳。',
      en: 'Excuse me, the bill please.'
    },
    {
      speaker: 'staff',
      jp: '全部で千二百円です。',
      ruby: '<ruby>全部<rt>ぜんぶ</rt></ruby>で<ruby>千二百円<rt>せんにひゃくえん</rt></ruby>です。',
      romaji: 'Zenbu de sen-nihyaku-en desu.',
      zh: '總共是一千兩百日圓。',
      en: 'That\'s 1,200 yen in total.'
    },
    {
      speaker: 'you',
      jp: 'カードで払えますか？',
      ruby: 'カードで<ruby>払<rt>はら</rt></ruby>えますか？',
      romaji: 'Kādo de haraemasu ka?',
      zh: '可以刷卡嗎?',
      en: 'Can I pay by card?'
    },
    {
      speaker: 'staff',
      jp: 'はい、大丈夫です。ありがとうございました。',
      ruby: 'はい、<ruby>大丈夫<rt>だいじょうぶ</rt></ruby>です。ありがとうございました。',
      romaji: 'Hai, daijōbu desu. Arigatō gozaimashita.',
      zh: '好的，沒問題。非常感謝您。',
      en: 'Yes, that\'s fine. Thank you very much.'
    },
    {
      speaker: 'you',
      jp: 'ごちそうさまでした。',
      ruby: 'ごちそうさまでした。',
      romaji: 'Gochisōsama deshita.',
      zh: '謝謝招待，我吃飽了。',
      en: 'Thank you for the meal.'
    }
  ],
  menu: [
    {
      title: '前菜・サラダ · Starters & salads',
      items: [
        { emoji: '🫛', jp: '枝豆', say: 'えだまめ', ruby: '<ruby>枝豆<rt>えだまめ</rt></ruby>', romaji: 'edamame', zh: '毛豆', en: 'edamame', desc: '鹽味水煮毛豆，清爽開胃的經典前菜。' },
        { emoji: '🥗', jp: 'シーザーサラダ', ruby: 'シーザーサラダ', romaji: 'shīzā sarada', zh: '凱薩沙拉', en: 'Caesar salad', desc: '生菜佐凱薩醬與起司，配脆麵包丁。' },
        { emoji: '🍟', jp: 'ポテトフライ', ruby: 'ポテトフライ', romaji: 'poteto furai', zh: '炸薯條', en: 'french fries', desc: '金黃酥脆的炸薯條，大人小孩都愛。' },
        { emoji: '🌽', jp: 'コーンスープ', ruby: 'コーンスープ', romaji: 'kōn sūpu', zh: '玉米濃湯', en: 'corn soup', desc: '香甜濃郁的玉米濃湯，溫暖順口。' },
        { emoji: '🍗', jp: '唐揚げ', say: 'からあげ', ruby: '<ruby>唐揚<rt>からあ</rt></ruby>げ', romaji: 'kara-age', zh: '日式炸雞', en: 'fried chicken', desc: '外酥內多汁的日式炸雞塊，沾檸檬更清爽。' },
        { emoji: '🥟', jp: '餃子', say: 'ぎょうざ', ruby: '<ruby>餃子<rt>ぎょうざ</rt></ruby>', romaji: 'gyōza', zh: '煎餃', en: 'pan-fried dumplings', desc: '底部煎得金黃酥脆的豬肉煎餃。' }
      ]
    },
    {
      title: '洋食メイン · Western mains',
      items: [
        { emoji: '🍔', jp: 'ハンバーグ', ruby: 'ハンバーグ', romaji: 'hambāgu', zh: '漢堡排', en: 'hamburg steak', desc: '多汁的牛豬混合肉排，淋上濃郁醬汁。' },
        { emoji: '🧀', jp: 'チーズハンバーグ', ruby: 'チーズハンバーグ', romaji: 'chīzu hambāgu', zh: '起司漢堡排', en: 'cheese hamburg steak', desc: '漢堡排鋪上融化起司，香濃誘人。' },
        { emoji: '🥩', jp: 'ステーキ', ruby: 'ステーキ', romaji: 'sutēki', zh: '牛排', en: 'steak', desc: '香煎牛排，可選擇喜好的熟度。' },
        { emoji: '🍤', jp: 'エビフライ', say: 'えびフライ', ruby: 'エビフライ', romaji: 'ebi furai', zh: '炸蝦', en: 'fried prawns', desc: '裹麵包粉酥炸的大蝦，外酥內彈。' },
        { emoji: '🍳', jp: 'オムライス', ruby: 'オムライス', romaji: 'omu-raisu', zh: '蛋包飯', en: 'omelette rice', desc: '滑蛋包覆番茄炒飯，淋上番茄醬。' },
        { emoji: '🧀', jp: 'グラタン', ruby: 'グラタン', romaji: 'guratan', zh: '焗烤', en: 'gratin', desc: '白醬與起司焗烤至金黃，濃郁燙口。' },
        { emoji: '🍚', jp: 'ドリア', ruby: 'ドリア', romaji: 'doria', zh: '焗烤飯', en: 'rice gratin', desc: '白醬焗烤飯，飯與起司一起烤得香濃。' },
        { emoji: '🍝', jp: 'ナポリタン', ruby: 'ナポリタン', romaji: 'naporitan', zh: '拿坡里義大利麵', en: 'Napolitan pasta', desc: '番茄醬炒義大利麵，日式洋食的代表。' },
        { emoji: '🍝', jp: 'カルボナーラ', ruby: 'カルボナーラ', romaji: 'karubonāra', zh: '奶油培根義大利麵', en: 'carbonara', desc: '蛋液與起司製成的濃郁奶油培根麵。' },
        { emoji: '🍕', jp: 'ピザ', ruby: 'ピザ', romaji: 'piza', zh: '披薩', en: 'pizza', desc: '現烤披薩，餅皮酥脆、起司牽絲。' },
        { emoji: '🍲', jp: 'ビーフシチュー', ruby: 'ビーフシチュー', romaji: 'bīfu shichū', zh: '燉牛肉', en: 'beef stew', desc: '牛肉燉煮至軟爛，醬汁濃郁香醇。' }
      ]
    },
    {
      title: '和食メイン · Japanese mains',
      items: [
        { emoji: '🐟', jp: '焼き魚定食', say: 'やきざかなていしょく', ruby: '<ruby>焼<rt>や</rt></ruby>き<ruby>魚定食<rt>ざかなていしょく</rt></ruby>', romaji: 'yakizakana teishoku', zh: '烤魚定食', en: 'grilled fish set', desc: '鹽烤魚搭配白飯、味噌湯與小菜的套餐。' },
        { emoji: '🍖', jp: '生姜焼き定食', say: 'しょうがやきていしょく', ruby: '<ruby>生姜焼<rt>しょうがや</rt></ruby>き<ruby>定食<rt>ていしょく</rt></ruby>', romaji: 'shōgayaki teishoku', zh: '薑燒豬肉定食', en: 'ginger pork set', desc: '薑汁醬油炒豬肉的定食，下飯又開胃。' },
        { emoji: '🍖', jp: 'とんかつ', ruby: 'とんかつ', romaji: 'tonkatsu', zh: '炸豬排', en: 'pork cutlet', desc: '裹粉酥炸的厚豬排，沾豬排醬享用。' },
        { emoji: '🍤', jp: '天ぷら盛り合わせ', say: 'てんぷらもりあわせ', ruby: '<ruby>天<rt>てん</rt></ruby>ぷら<ruby>盛<rt>も</rt></ruby>り<ruby>合<rt>あ</rt></ruby>わせ', romaji: 'tempura moriawase', zh: '綜合天婦羅', en: 'assorted tempura', desc: '蝦與蔬菜的綜合炸物拼盤，外衣酥脆。' },
        { emoji: '🍣', jp: '刺身定食', say: 'さしみていしょく', ruby: '<ruby>刺身定食<rt>さしみていしょく</rt></ruby>', romaji: 'sashimi teishoku', zh: '生魚片定食', en: 'sashimi set', desc: '新鮮生魚片搭配白飯與味噌湯的套餐。' },
        { emoji: '🐟', jp: '煮魚', say: 'にざかな', ruby: '<ruby>煮魚<rt>にざかな</rt></ruby>', romaji: 'nizakana', zh: '燉煮魚', en: 'simmered fish', desc: '以醬油與糖燉煮入味的魚，肉質軟嫩。' }
      ]
    },
    {
      title: '丼・カレー · Rice bowls & curry',
      items: [
        { emoji: '🍚', jp: '親子丼', say: 'おやこどん', ruby: '<ruby>親子丼<rt>おやこどん</rt></ruby>', romaji: 'oyakodon', zh: '親子丼', en: 'chicken & egg rice bowl', desc: '雞肉與滑蛋蓋飯，鹹甜醬汁滲入白飯。' },
        { emoji: '🍚', jp: 'カツ丼', say: 'かつどん', ruby: 'カツ<ruby>丼<rt>どん</rt></ruby>', romaji: 'katsudon', zh: '豬排丼', en: 'pork cutlet rice bowl', desc: '炸豬排與滑蛋蓋飯，份量飽足。' },
        { emoji: '🍚', jp: '牛丼', say: 'ぎゅうどん', ruby: '<ruby>牛丼<rt>ぎゅうどん</rt></ruby>', romaji: 'gyūdon', zh: '牛丼', en: 'beef rice bowl', desc: '甜鹹醬汁燉煮的薄牛肉與洋蔥蓋飯。' },
        { emoji: '🍤', jp: '天丼', say: 'てんどん', ruby: '<ruby>天丼<rt>てんどん</rt></ruby>', romaji: 'tendon', zh: '天丼', en: 'tempura rice bowl', desc: '天婦羅蓋飯，淋上甜鹹的丼飯醬汁。' },
        { emoji: '🍛', jp: 'カレーライス', ruby: 'カレーライス', romaji: 'karē raisu', zh: '咖哩飯', en: 'curry rice', desc: '濃郁日式咖哩淋在白飯上，溫和不辣。' },
        { emoji: '🍛', jp: 'ハヤシライス', ruby: 'ハヤシライス', romaji: 'hayashi raisu', zh: '牛肉燴飯', en: 'hashed beef rice', desc: '番茄牛肉醬燴飯，酸甜濃郁。' },
        { emoji: '🍚', jp: 'チャーハン', ruby: 'チャーハン', romaji: 'chāhan', zh: '炒飯', en: 'fried rice', desc: '粒粒分明的中華風炒飯，鑊氣十足。' }
      ]
    },
    {
      title: '麺類 · Noodles',
      items: [
        { emoji: '🍜', jp: 'ラーメン', ruby: 'ラーメン', romaji: 'rāmen', zh: '拉麵', en: 'ramen', desc: '熱湯拉麵，可選醬油、味噌等湯頭。' },
        { emoji: '🍜', jp: 'うどん', ruby: 'うどん', romaji: 'udon', zh: '烏龍麵', en: 'udon noodles', desc: '粗白麵條配清爽高湯，口感Q彈。' },
        { emoji: '🍜', jp: 'そば', ruby: 'そば', romaji: 'soba', zh: '蕎麥麵', en: 'soba noodles', desc: '蕎麥製的細麵，香氣樸實、冷熱皆宜。' },
        { emoji: '🍜', jp: 'つけ麺', say: 'つけめん', ruby: 'つけ<ruby>麺<rt>めん</rt></ruby>', romaji: 'tsukemen', zh: '沾麵', en: 'dipping noodles', desc: '麵與濃湯分開，沾著濃郁湯汁享用。' },
        { emoji: '🍜', jp: '冷やし中華', say: 'ひやしちゅうか', ruby: '<ruby>冷<rt>ひ</rt></ruby>やし<ruby>中華<rt>ちゅうか</rt></ruby>', romaji: 'hiyashi chūka', zh: '冷麵', en: 'cold ramen', desc: '夏季冷麵，淋上酸甜醬汁配多彩配料。' }
      ]
    },
    {
      title: 'ご飯・サイド · Rice & sides',
      items: [
        { emoji: '🍚', jp: 'ご飯', say: 'ごはん', ruby: 'ご<ruby>飯<rt>はん</rt></ruby>', romaji: 'gohan', zh: '白飯', en: 'steamed rice', desc: '一碗熱騰騰的白飯，可加點或續碗。' },
        { emoji: '🍲', jp: '味噌汁', say: 'みそしる', ruby: '<ruby>味噌汁<rt>みそしる</rt></ruby>', romaji: 'miso-shiru', zh: '味噌湯', en: 'miso soup', desc: '味噌調味的湯，配料常有豆腐與海帶芽。' },
        { emoji: '🥬', jp: '漬物', say: 'つけもの', ruby: '<ruby>漬物<rt>つけもの</rt></ruby>', romaji: 'tsukemono', zh: '醃菜', en: 'pickles', desc: '日式醃漬蔬菜，爽脆解膩的小菜。' },
        { emoji: '🥚', jp: '卵', say: 'たまご', ruby: '<ruby>卵<rt>たまご</rt></ruby>', romaji: 'tamago', zh: '雞蛋', en: 'egg', desc: '生蛋或溫泉蛋，可拌飯或加在丼飯上。' }
      ]
    },
    {
      title: 'デザート · Dessert',
      items: [
        { emoji: '🍨', jp: 'パフェ', ruby: 'パフェ', romaji: 'pafe', zh: '聖代', en: 'parfait', desc: '冰淇淋、水果與鮮奶油層疊的華麗甜點。' },
        { emoji: '🍰', jp: 'ケーキ', ruby: 'ケーキ', romaji: 'kēki', zh: '蛋糕', en: 'cake', desc: '當日精選蛋糕，鬆軟香甜。' },
        { emoji: '🍮', jp: 'プリン', ruby: 'プリン', romaji: 'purin', zh: '布丁', en: 'pudding', desc: '滑嫩雞蛋布丁，淋上微苦焦糖醬。' },
        { emoji: '🍦', jp: 'アイスクリーム', ruby: 'アイスクリーム', romaji: 'aisu kurīmu', zh: '冰淇淋', en: 'ice cream', desc: '香濃冰淇淋，飯後的清涼甜點。' },
        { emoji: '🍡', jp: 'あんみつ', ruby: 'あんみつ', romaji: 'anmitsu', zh: '蜜豆冰', en: 'anmitsu', desc: '寒天、紅豆餡與水果淋黑糖蜜的和風甜點。' }
      ]
    },
    {
      title: 'ドリンク · Drinks',
      items: [
        { emoji: '🥤', jp: 'ドリンクバー', ruby: 'ドリンクバー', romaji: 'dorinku bā', zh: '飲料吧', en: 'drink bar', desc: '自助暢飲的飲料吧，可無限續杯。' },
        { emoji: '☕', jp: 'コーヒー', ruby: 'コーヒー', romaji: 'kōhī', zh: '咖啡', en: 'coffee', desc: '現煮咖啡，熱飲冰飲皆可。' },
        { emoji: '🍵', jp: '紅茶', say: 'こうちゃ', ruby: '<ruby>紅茶<rt>こうちゃ</rt></ruby>', romaji: 'kōcha', zh: '紅茶', en: 'black tea', desc: '香氣優雅的紅茶，可加奶或檸檬。' },
        { emoji: '🍊', jp: 'オレンジジュース', ruby: 'オレンジジュース', romaji: 'orenji jūsu', zh: '柳橙汁', en: 'orange juice', desc: '清爽柳橙汁，酸甜開胃。' },
        { emoji: '🥤', jp: 'コーラ', ruby: 'コーラ', romaji: 'kōra', zh: '可樂', en: 'cola', desc: '冰涼可樂，氣泡暢快。' },
        { emoji: '🥤', jp: 'メロンソーダ', ruby: 'メロンソーダ', romaji: 'meron sōda', zh: '哈密瓜蘇打', en: 'melon soda', desc: '螢光綠的哈密瓜風味蘇打，常加冰淇淋。' },
        { emoji: '🍵', jp: 'ウーロン茶', say: 'ウーロンちゃ', ruby: 'ウーロン<ruby>茶<rt>ちゃ</rt></ruby>', romaji: 'ūron-cha', zh: '烏龍茶', en: 'oolong tea', desc: '無糖烏龍茶，解膩又解渴。' },
        { emoji: '🍺', jp: '生ビール', say: 'なまビール', ruby: '<ruby>生<rt>なま</rt></ruby>ビール', romaji: 'nama-bīru', zh: '生啤酒', en: 'draft beer', desc: '冰涼生啤酒，泡沫綿密、暢快爽口。' }
      ]
    }
  ],
  phrases: [
    {
      title: 'よく使う一言 · Handy phrases',
      items: [
        { jp: 'メニューを見せてください。', ruby: 'メニューを<ruby>見<rt>み</rt></ruby>せてください。', zh: '請給我看菜單。', en: 'Please show me the menu.' },
        { jp: 'おすすめは何ですか？', ruby: 'おすすめは<ruby>何<rt>なん</rt></ruby>ですか？', zh: '有什麼推薦的?', en: 'What do you recommend?' },
        { jp: 'これは何ですか？', ruby: 'これは<ruby>何<rt>なん</rt></ruby>ですか？', zh: '這是什麼?', en: 'What is this?' },
        { jp: '同じものをください。', ruby: '<ruby>同<rt>おな</rt></ruby>じものをください。', zh: '請給我一樣的。', en: "I'll have the same, please." },
        { jp: '取り皿をください。', say: 'とりざらをください。', ruby: '<ruby>取<rt>と</rt></ruby>り<ruby>皿<rt>ざら</rt></ruby>をください。', zh: '請給我小盤子。', en: 'Could I have a small plate?' },
        { jp: 'お水をください。', ruby: 'お<ruby>水<rt>みず</rt></ruby>をください。', zh: '請給我水。', en: 'Water, please.' },
        { jp: '持ち帰りできますか？', ruby: '<ruby>持<rt>も</rt></ruby>ち<ruby>帰<rt>かえ</rt></ruby>りできますか？', zh: '可以外帶嗎?', en: 'Can I take this to go?' },
        { jp: 'お会計をお願いします。', ruby: 'お<ruby>会計<rt>かいけい</rt></ruby>をお<ruby>願<rt>ねが</rt></ruby>いします。', zh: '麻煩結帳。', en: 'The bill, please.' }
      ]
    }
  ]
}
