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
      title: 'メニュー · Dishes',
      items: [
        { emoji: '🍜', jp: 'ラーメン', ruby: 'ラーメン', romaji: 'rāmen', zh: '拉麵', en: 'ramen' },
        { emoji: '🍛', jp: 'カレーライス', ruby: 'カレーライス', romaji: 'karē raisu', zh: '咖哩飯', en: 'curry rice' },
        { emoji: '🍤', jp: '天ぷら', ruby: '<ruby>天<rt>てん</rt></ruby>ぷら', romaji: 'tempura', zh: '天婦羅', en: 'tempura' },
        { emoji: '🍖', jp: 'とんかつ', ruby: 'とんかつ', romaji: 'tonkatsu', zh: '炸豬排', en: 'pork cutlet' },
        { emoji: '🍜', jp: 'うどん', ruby: 'うどん', romaji: 'udon', zh: '烏龍麵', en: 'udon noodles' },
        { emoji: '🍜', jp: 'そば', ruby: 'そば', romaji: 'soba', zh: '蕎麥麵', en: 'soba noodles' },
        { emoji: '🍚', jp: '親子丼', say: 'おやこどん', ruby: '<ruby>親子丼<rt>おやこどん</rt></ruby>', romaji: 'oyakodon', zh: '親子丼', en: 'chicken & egg rice bowl' },
        { emoji: '🍔', jp: 'ハンバーグ', ruby: 'ハンバーグ', romaji: 'hambāgu', zh: '漢堡排', en: 'hamburg steak' },
        { emoji: '🍳', jp: 'オムライス', ruby: 'オムライス', romaji: 'omu-raisu', zh: '蛋包飯', en: 'omelette rice' },
        { emoji: '🥗', jp: 'サラダ', ruby: 'サラダ', romaji: 'sarada', zh: '沙拉', en: 'salad' },
        { emoji: '🍲', jp: '味噌汁', ruby: '<ruby>味噌汁<rt>みそしる</rt></ruby>', romaji: 'miso-shiru', zh: '味噌湯', en: 'miso soup' },
        { emoji: '🍚', jp: 'ご飯', ruby: 'ご<ruby>飯<rt>はん</rt></ruby>', romaji: 'gohan', zh: '白飯', en: 'steamed rice' }
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
