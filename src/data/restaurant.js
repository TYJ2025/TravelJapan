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
      en: 'Welcome! How many people?'
    },
    {
      speaker: 'you',
      jp: '二人です。',
      ruby: '<ruby>二人<rt>ふたり</rt></ruby>です。',
      romaji: 'Futari desu.',
      en: 'Two people.'
    },
    {
      speaker: 'staff',
      jp: '禁煙席と喫煙席、どちらがよろしいですか？',
      ruby: '<ruby>禁煙席<rt>きんえんせき</rt></ruby>と<ruby>喫煙席<rt>きつえんせき</rt></ruby>、どちらがよろしいですか？',
      romaji: 'Kin\'en-seki to kitsuen-seki, dochira ga yoroshii desu ka?',
      en: 'Non-smoking or smoking seats — which would you prefer?'
    },
    {
      speaker: 'you',
      jp: '禁煙席でお願いします。',
      ruby: '<ruby>禁煙席<rt>きんえんせき</rt></ruby>でお<ruby>願<rt>ねが</rt></ruby>いします。',
      romaji: 'Kin\'en-seki de onegai shimasu.',
      en: 'Non-smoking, please.'
    },
    {
      speaker: 'staff',
      jp: 'こちらへどうぞ。ご注文がお決まりになりましたらお呼びください。',
      ruby: 'こちらへどうぞ。ご<ruby>注文<rt>ちゅうもん</rt></ruby>がお<ruby>決<rt>き</rt></ruby>まりになりましたらお<ruby>呼<rt>よ</rt></ruby>びください。',
      romaji: 'Kochira e dōzo. Go-chūmon ga o-kimari ni narimashitara o-yobi kudasai.',
      en: 'This way please. Call me when you are ready to order.'
    },
    {
      speaker: 'you',
      jp: 'すみません、おすすめは何ですか？',
      ruby: 'すみません、おすすめは<ruby>何<rt>なん</rt></ruby>ですか？',
      romaji: 'Sumimasen, osusume wa nan desu ka?',
      en: 'Excuse me, what do you recommend?'
    },
    {
      speaker: 'staff',
      jp: '本日のおすすめは醤油ラーメンです。',
      ruby: '<ruby>本日<rt>ほんじつ</rt></ruby>のおすすめは<ruby>醤油<rt>しょうゆ</rt></ruby>ラーメンです。',
      romaji: 'Honjitsu no osusume wa shōyu rāmen desu.',
      en: 'Today\'s recommendation is soy-sauce ramen.'
    },
    {
      speaker: 'you',
      jp: 'じゃあ、それを一つお願いします。',
      ruby: 'じゃあ、それを<ruby>一<rt>ひと</rt></ruby>つお<ruby>願<rt>ねが</rt></ruby>いします。',
      romaji: 'Jā, sore o hitotsu onegai shimasu.',
      en: 'Then, one of those please.'
    },
    {
      speaker: 'staff',
      jp: 'お飲み物はいかがですか？',
      ruby: 'お<ruby>飲<rt>の</rt></ruby>み<ruby>物<rt>もの</rt></ruby>はいかがですか？',
      romaji: 'O-nomimono wa ikaga desu ka?',
      en: 'Would you like anything to drink?'
    },
    {
      speaker: 'you',
      jp: '冷たいお茶をください。',
      ruby: '<ruby>冷<rt>つめ</rt></ruby>たいお<ruby>茶<rt>ちゃ</rt></ruby>をください。',
      romaji: 'Tsumetai o-cha o kudasai.',
      en: 'Cold tea, please.'
    },
    {
      speaker: 'staff',
      jp: 'かしこまりました。少々お待ちください。',
      ruby: 'かしこまりました。<ruby>少々<rt>しょうしょう</rt></ruby>お<ruby>待<rt>ま</rt></ruby>ちください。',
      romaji: 'Kashikomarimashita. Shōshō o-machi kudasai.',
      en: 'Certainly. Please wait a moment.'
    },
    {
      speaker: 'staff',
      jp: 'お待たせしました。醤油ラーメンです。',
      ruby: 'お<ruby>待<rt>ま</rt></ruby>たせしました。<ruby>醤油<rt>しょうゆ</rt></ruby>ラーメンです。',
      romaji: 'O-matase shimashita. Shōyu rāmen desu.',
      en: 'Thank you for waiting. Here is your soy-sauce ramen.'
    },
    {
      speaker: 'you',
      jp: 'わあ、おいしそう！いただきます。',
      ruby: 'わあ、おいしそう！いただきます。',
      romaji: 'Wā, oishisō! Itadakimasu.',
      en: 'Wow, looks delicious! Thank you for the food.'
    },
    {
      speaker: 'you',
      jp: 'すみません、お会計をお願いします。',
      ruby: 'すみません、お<ruby>会計<rt>かいけい</rt></ruby>をお<ruby>願<rt>ねが</rt></ruby>いします。',
      romaji: 'Sumimasen, o-kaikei o onegai shimasu.',
      en: 'Excuse me, the bill please.'
    },
    {
      speaker: 'staff',
      jp: '全部で千二百円です。',
      ruby: '<ruby>全部<rt>ぜんぶ</rt></ruby>で<ruby>千二百円<rt>せんにひゃくえん</rt></ruby>です。',
      romaji: 'Zenbu de sen-nihyaku-en desu.',
      en: 'That\'s 1,200 yen in total.'
    },
    {
      speaker: 'you',
      jp: 'カードで払えますか？',
      ruby: 'カードで<ruby>払<rt>はら</rt></ruby>えますか？',
      romaji: 'Kādo de haraemasu ka?',
      en: 'Can I pay by card?'
    },
    {
      speaker: 'staff',
      jp: 'はい、大丈夫です。ありがとうございました。',
      ruby: 'はい、<ruby>大丈夫<rt>だいじょうぶ</rt></ruby>です。ありがとうございました。',
      romaji: 'Hai, daijōbu desu. Arigatō gozaimashita.',
      en: 'Yes, that\'s fine. Thank you very much.'
    },
    {
      speaker: 'you',
      jp: 'ごちそうさまでした。',
      ruby: 'ごちそうさまでした。',
      romaji: 'Gochisōsama deshita.',
      en: 'Thank you for the meal.'
    }
  ]
}
