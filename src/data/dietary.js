// 食の好み・制限 (Dietary needs) — vegetarian/vegan, foods you avoid,
// spice level, and drink/ice preferences.
export const dietary = {
  id: 'dietary',
  title: 'Dietary Needs',
  titleJp: '食の好み・制限',
  emoji: '🥗',
  description: 'Vegetarian/vegan, foods you avoid, spice level, and ice — tell staff clearly.',
  lines: [
    {
      speaker: 'you',
      jp: 'すみません、私はベジタリアンです。',
      ruby: 'すみません、<ruby>私<rt>わたし</rt></ruby>はベジタリアンです。',
      romaji: 'Sumimasen, watashi wa bejitarian desu.',
      zh: '不好意思,我吃素。',
      en: "Excuse me, I'm vegetarian."
    },
    {
      speaker: 'staff',
      jp: 'かしこまりました。お肉とお魚は大丈夫ですか？',
      ruby: 'かしこまりました。お<ruby>肉<rt>にく</rt></ruby>とお<ruby>魚<rt>さかな</rt></ruby>は<ruby>大丈夫<rt>だいじょうぶ</rt></ruby>ですか？',
      romaji: 'Kashikomarimashita. O-niku to o-sakana wa daijōbu desu ka?',
      zh: '好的。肉和魚也不能吃嗎?',
      en: 'Certainly. Are meat and fish okay?'
    },
    {
      speaker: 'you',
      jp: 'はい、肉も魚も食べられません。',
      ruby: 'はい、<ruby>肉<rt>にく</rt></ruby>も<ruby>魚<rt>さかな</rt></ruby>も<ruby>食<rt>た</rt></ruby>べられません。',
      romaji: 'Hai, niku mo sakana mo taberaremasen.',
      zh: '對,肉和魚都不能吃。',
      en: "Right, I can't eat meat or fish."
    },
    {
      speaker: 'staff',
      jp: 'では、野菜の天ぷらはいかがですか？',
      ruby: 'では、<ruby>野菜<rt>やさい</rt></ruby>の<ruby>天<rt>てん</rt></ruby>ぷらはいかがですか？',
      romaji: 'Dewa, yasai no tempura wa ikaga desu ka?',
      zh: '那麼,蔬菜天婦羅如何?',
      en: 'Then, how about vegetable tempura?'
    },
    {
      speaker: 'you',
      jp: 'いいですね。出汁は魚を使っていますか？',
      say: 'いいですね。だしは魚を使っていますか？',
      ruby: 'いいですね。<ruby>出汁<rt>だし</rt></ruby>は<ruby>魚<rt>さかな</rt></ruby>を<ruby>使<rt>つか</rt></ruby>っていますか？',
      romaji: 'Ii desu ne. Dashi wa sakana o tsukatte imasu ka?',
      zh: '好啊。高湯有用到魚嗎?',
      en: 'Sounds good. Is the broth made with fish?'
    },
    {
      speaker: 'staff',
      jp: 'いいえ、昆布出汁です。',
      say: 'いいえ、こんぶだしです。',
      ruby: 'いいえ、<ruby>昆布<rt>こんぶ</rt></ruby><ruby>出汁<rt>だし</rt></ruby>です。',
      romaji: 'Iie, konbu-dashi desu.',
      zh: '沒有,是用昆布高湯。',
      en: "No, it's kelp broth."
    },
    {
      speaker: 'you',
      jp: 'よかった。それをください。あと、氷を抜いてお水をお願いします。',
      ruby: 'よかった。それをください。あと、<ruby>氷<rt>こおり</rt></ruby>を<ruby>抜<rt>ぬ</rt></ruby>いてお<ruby>水<rt>みず</rt></ruby>をお<ruby>願<rt>ねが</rt></ruby>いします。',
      romaji: 'Yokatta. Sore o kudasai. Ato, kōri o nuite o-mizu o onegai shimasu.',
      zh: '太好了。請給我那個。另外,水請去冰。',
      en: "Great. I'll have that. Also, water with no ice, please."
    },
    {
      speaker: 'staff',
      jp: 'かしこまりました。',
      ruby: 'かしこまりました。',
      romaji: 'Kashikomarimashita.',
      zh: '好的。',
      en: 'Certainly.'
    }
  ],
  phrases: [
    {
      title: 'ベジタリアン・ヴィーガン · Vegetarian / Vegan',
      items: [
        { jp: '私はベジタリアンです。', ruby: '<ruby>私<rt>わたし</rt></ruby>はベジタリアンです。', zh: '我吃素。', en: "I'm vegetarian." },
        { jp: '私はヴィーガンです。', ruby: '<ruby>私<rt>わたし</rt></ruby>はヴィーガンです。', zh: '我吃全素（純素）。', en: "I'm vegan." },
        { jp: '肉も魚も食べられません。', ruby: '<ruby>肉<rt>にく</rt></ruby>も<ruby>魚<rt>さかな</rt></ruby>も<ruby>食<rt>た</rt></ruby>べられません。', zh: '肉和魚都不能吃。', en: "I can't eat meat or fish." },
        { jp: '野菜だけの料理はありますか？', ruby: '<ruby>野菜<rt>やさい</rt></ruby>だけの<ruby>料理<rt>りょうり</rt></ruby>はありますか？', zh: '有純蔬菜的料理嗎?', en: 'Do you have vegetable-only dishes?' },
        { jp: '出汁は何で取っていますか？', say: 'だしは何で取っていますか？', ruby: '<ruby>出汁<rt>だし</rt></ruby>は<ruby>何<rt>なに</rt></ruby>で<ruby>取<rt>と</rt></ruby>っていますか？', zh: '高湯是用什麼熬的?', en: 'What is the broth made from?' }
      ]
    },
    {
      title: '食べられないもの · Foods I avoid',
      items: [
        { jp: '豚肉は食べられません。', ruby: '<ruby>豚肉<rt>ぶたにく</rt></ruby>は<ruby>食<rt>た</rt></ruby>べられません。', zh: '我不吃豬肉。', en: "I can't eat pork." },
        { jp: '牛肉は食べられません。', ruby: '<ruby>牛肉<rt>ぎゅうにく</rt></ruby>は<ruby>食<rt>た</rt></ruby>べられません。', zh: '我不吃牛肉。', en: "I can't eat beef." },
        { jp: '生ものは食べられません。', ruby: '<ruby>生<rt>なま</rt></ruby>ものは<ruby>食<rt>た</rt></ruby>べられません。', zh: '我不能吃生食。', en: "I can't eat raw food." },
        { jp: 'お酒は飲めません。', ruby: 'お<ruby>酒<rt>さけ</rt></ruby>は<ruby>飲<rt>の</rt></ruby>めません。', zh: '我不能喝酒。', en: "I can't drink alcohol." }
      ]
    },
    {
      title: '辛さ・味の調整 · Spice & taste',
      items: [
        { jp: '辛くしないでください。', ruby: '<ruby>辛<rt>から</rt></ruby>くしないでください。', zh: '請不要做辣的。', en: "Please don't make it spicy." },
        { jp: '少し辛めにできますか？', ruby: '<ruby>少<rt>すこ</rt></ruby>し<ruby>辛<rt>から</rt></ruby>めにできますか？', zh: '可以做辣一點嗎?', en: 'Can you make it a bit spicier?' },
        { jp: 'わさびを抜いてください。', ruby: 'わさびを<ruby>抜<rt>ぬ</rt></ruby>いてください。', zh: '請不要加芥末。', en: 'Without wasabi, please.' }
      ]
    },
    {
      title: '飲み物・氷 · Drinks & ice',
      items: [
        { jp: '氷を抜いてください。', ruby: '<ruby>氷<rt>こおり</rt></ruby>を<ruby>抜<rt>ぬ</rt></ruby>いてください。', zh: '請去冰。', en: 'No ice, please.' },
        { jp: '氷は少なめでお願いします。', ruby: '<ruby>氷<rt>こおり</rt></ruby>は<ruby>少<rt>すく</rt></ruby>なめでお<ruby>願<rt>ねが</rt></ruby>いします。', zh: '冰塊請少一點。', en: 'Less ice, please.' },
        { jp: '温かい飲み物はありますか？', ruby: '<ruby>温<rt>あたた</rt></ruby>かい<ruby>飲<rt>の</rt></ruby>み<ruby>物<rt>もの</rt></ruby>はありますか？', zh: '有溫熱的飲料嗎?', en: 'Do you have hot drinks?' }
      ]
    }
  ]
}
