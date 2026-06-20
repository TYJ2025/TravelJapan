// Everyday colloquial Japanese — casual spoken phrases plus a handful of
// quick travel one-liners. Unlike the food scenarios, this is a phrasebook:
// the dialogue tab lets you listen straight through the casual lines, and the
// フレーズ · Phrases tab pairs each casual phrase with its 丁寧形 (desu/masu)
// version so you can see the casual ↔ polite contrast side by side.
//
// Each item has:
//   jp     : the casual / colloquial form — text for TTS and speech-practice.
//   ruby   : the same casual text with <ruby> furigana for reading.
//   romaji : romanised reading of the casual form.
//   zh     : 繁體中文 meaning.
//   en     : English meaning.
//   polite : the 丁寧形 (desu/masu) equivalent — { jp, ruby } — shown as a
//            contrast line on the phrase card.
//
// Furigana markup, same as the other data files:
//   <ruby>写真<rt>しゃしん</rt></ruby>

const daily = [
  {
    jp: 'うん、そうだね。',
    ruby: 'うん、そうだね。',
    romaji: 'Un, sō da ne.',
    zh: '嗯，對啊。',
    en: 'Yeah, that\'s right.',
    polite: { jp: 'はい、そうですね。', ruby: 'はい、そうですね。' }
  },
  {
    jp: 'なるほど。',
    ruby: 'なるほど。',
    romaji: 'Naruhodo.',
    zh: '原來如此。',
    en: 'I see. / Makes sense.',
    polite: { jp: 'なるほど、そうなんですね。', ruby: 'なるほど、そうなんですね。' }
  },
  {
    jp: 'マジで？',
    ruby: 'マジで？',
    romaji: 'Maji de?',
    zh: '真的假的？',
    en: 'Seriously? / For real?',
    polite: { jp: '本当ですか？', ruby: '<ruby>本当<rt>ほんとう</rt></ruby>ですか？' }
  },
  {
    jp: 'やばい！',
    ruby: 'やばい！',
    romaji: 'Yabai!',
    zh: '太扯了！（好壞都能用）',
    en: 'Wow! / Oh no! (slang)',
    polite: { jp: 'すごいですね。', ruby: 'すごいですね。' }
  },
  {
    jp: 'めっちゃおいしい！',
    ruby: 'めっちゃおいしい！',
    romaji: 'Meccha oishii!',
    zh: '有夠好吃！',
    en: 'So good! (super delicious)',
    polite: { jp: 'とてもおいしいです。', ruby: 'とてもおいしいです。' }
  },
  {
    jp: 'ちょっと待って。',
    ruby: 'ちょっと<ruby>待<rt>ま</rt></ruby>って。',
    romaji: 'Chotto matte.',
    zh: '等一下。',
    en: 'Hold on a sec.',
    polite: { jp: '少々お待ちください。', ruby: '<ruby>少々<rt>しょうしょう</rt></ruby>お<ruby>待<rt>ま</rt></ruby>ちください。' }
  },
  {
    jp: 'ごめん！',
    ruby: 'ごめん！',
    romaji: 'Gomen!',
    zh: '抱歉！',
    en: 'Sorry!',
    polite: { jp: 'すみません。', ruby: 'すみません。' }
  },
  {
    jp: 'ありがとう！',
    ruby: 'ありがとう！',
    romaji: 'Arigatō!',
    zh: '謝啦！',
    en: 'Thanks!',
    polite: { jp: 'ありがとうございます。', ruby: 'ありがとうございます。' }
  },
  {
    jp: 'だいじょうぶ。',
    ruby: 'だいじょうぶ。',
    romaji: 'Daijōbu.',
    zh: '沒事。／不用了。',
    en: 'It\'s OK. / I\'m fine.',
    polite: { jp: '大丈夫です。', ruby: '<ruby>大丈夫<rt>だいじょうぶ</rt></ruby>です。' }
  },
  {
    jp: 'わかった。',
    ruby: 'わかった。',
    romaji: 'Wakatta.',
    zh: '懂了。',
    en: 'Got it.',
    polite: { jp: 'わかりました。', ruby: 'わかりました。' }
  },
  {
    jp: 'いいね！',
    ruby: 'いいね！',
    romaji: 'Ii ne!',
    zh: '不錯耶！',
    en: 'Nice! / Sounds good!',
    polite: { jp: 'いいですね。', ruby: 'いいですね。' }
  },
  {
    jp: '疲れた〜。',
    ruby: '<ruby>疲<rt>つか</rt></ruby>れた〜。',
    romaji: 'Tsukareta~.',
    zh: '累死了～',
    en: 'I\'m beat.',
    polite: { jp: '疲れました。', ruby: '<ruby>疲<rt>つか</rt></ruby>れました。' }
  },
  {
    jp: 'お腹すいた。',
    ruby: 'お<ruby>腹<rt>なか</rt></ruby>すいた。',
    romaji: 'Onaka suita.',
    zh: '肚子餓。',
    en: 'I\'m hungry.',
    polite: { jp: 'お腹が空きました。', ruby: 'お<ruby>腹<rt>なか</rt></ruby>が<ruby>空<rt>す</rt></ruby>きました。' }
  }
]

const travel = [
  {
    jp: 'これ、いくら？',
    ruby: 'これ、いくら？',
    romaji: 'Kore, ikura?',
    zh: '這個多少錢？',
    en: 'How much is this?',
    polite: { jp: 'これはいくらですか？', ruby: 'これはいくらですか？' }
  },
  {
    jp: 'トイレはどこ？',
    ruby: 'トイレはどこ？',
    romaji: 'Toire wa doko?',
    zh: '廁所在哪？',
    en: 'Where\'s the toilet?',
    polite: { jp: 'トイレはどこですか？', ruby: 'トイレはどこですか？' }
  },
  {
    jp: '写真撮ってもいい？',
    ruby: '<ruby>写真<rt>しゃしん</rt></ruby><ruby>撮<rt>と</rt></ruby>ってもいい？',
    romaji: 'Shashin totte mo ii?',
    zh: '可以拍照嗎？',
    en: 'Can I take a photo?',
    polite: { jp: '写真を撮ってもいいですか？', ruby: '<ruby>写真<rt>しゃしん</rt></ruby>を<ruby>撮<rt>と</rt></ruby>ってもいいですか？' }
  },
  {
    jp: 'これください。',
    ruby: 'これください。',
    romaji: 'Kore kudasai.',
    zh: '給我這個。',
    en: 'I\'ll take this.',
    polite: { jp: 'これをお願いします。', ruby: 'これをお<ruby>願<rt>ねが</rt></ruby>いします。' }
  },
  {
    jp: '駅はどっち？',
    ruby: '<ruby>駅<rt>えき</rt></ruby>はどっち？',
    romaji: 'Eki wa docchi?',
    zh: '車站在哪邊？',
    en: 'Which way is the station?',
    polite: { jp: '駅はどちらですか？', ruby: '<ruby>駅<rt>えき</rt></ruby>はどちらですか？' }
  },
  {
    jp: 'おすすめは？',
    ruby: 'おすすめは？',
    romaji: 'Osusume wa?',
    zh: '有推薦的嗎？',
    en: 'What do you recommend?',
    polite: { jp: 'おすすめは何ですか？', ruby: 'おすすめは<ruby>何<rt>なん</rt></ruby>ですか？' }
  },
  {
    jp: '英語のメニューある？',
    ruby: '<ruby>英語<rt>えいご</rt></ruby>のメニューある？',
    romaji: 'Eigo no menyū aru?',
    zh: '有英文菜單嗎？',
    en: 'Is there an English menu?',
    polite: { jp: '英語のメニューはありますか？', ruby: '<ruby>英語<rt>えいご</rt></ruby>のメニューはありますか？' }
  },
  {
    jp: 'ちょっと高いなあ。',
    ruby: 'ちょっと<ruby>高<rt>たか</rt></ruby>いなあ。',
    romaji: 'Chotto takai nā.',
    zh: '有點貴耶。',
    en: 'That\'s a bit pricey.',
    polite: { jp: '少し高いですね。', ruby: '<ruby>少<rt>すこ</rt></ruby>し<ruby>高<rt>たか</rt></ruby>いですね。' }
  },
  {
    jp: 'また来るね。',
    ruby: 'また<ruby>来<rt>く</rt></ruby>るね。',
    romaji: 'Mata kuru ne.',
    zh: '我會再來。',
    en: 'I\'ll come again.',
    polite: { jp: 'また来ます。', ruby: 'また<ruby>来<rt>き</rt></ruby>ます。' }
  }
]

// The dialogue tab plays straight through the casual lines (all "you").
const toLine = (it) => ({
  speaker: 'you',
  jp: it.jp,
  ruby: it.ruby,
  romaji: it.romaji,
  zh: it.zh,
  en: it.en
})

export const colloquial = {
  id: 'colloquial',
  title: 'Everyday Colloquial',
  titleJp: '日常の口語表現',
  emoji: '💬',
  description: 'Casual spoken Japanese & quick travel phrases — with the polite (desu/masu) version of each.',
  lines: [...daily, ...travel].map(toLine),
  phrases: [
    { title: '日常口語 · Casual', items: daily },
    { title: '旅行現場 · On the Go', items: travel }
  ]
}
