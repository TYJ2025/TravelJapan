// アレルギー (Food allergies) — telling staff, asking what's in a dish,
// and requesting changes. Covers dairy (乳), egg (卵), and wheat/gluten (小麦).
export const allergy = {
  id: 'allergy',
  title: 'Food Allergies',
  titleJp: 'アレルギー',
  emoji: '🚫',
  description: 'Milk, egg and wheat/gluten — tell staff, ask what a dish contains, request changes.',
  lines: [
    {
      speaker: 'you',
      jp: 'すみません、食物アレルギーがあります。',
      ruby: 'すみません、<ruby>食物<rt>しょくもつ</rt></ruby>アレルギーがあります。',
      romaji: 'Sumimasen, shokumotsu arerugī ga arimasu.',
      zh: '不好意思,我有食物過敏。',
      en: 'Excuse me, I have a food allergy.'
    },
    {
      speaker: 'staff',
      jp: 'かしこまりました。何のアレルギーですか？',
      ruby: 'かしこまりました。<ruby>何<rt>なん</rt></ruby>のアレルギーですか？',
      romaji: 'Kashikomarimashita. Nan no arerugī desu ka?',
      zh: '好的。請問是對什麼過敏?',
      en: 'Certainly. What are you allergic to?'
    },
    {
      speaker: 'you',
      jp: '乳製品と卵と小麦のアレルギーです。',
      ruby: '<ruby>乳製品<rt>にゅうせいひん</rt></ruby>と<ruby>卵<rt>たまご</rt></ruby>と<ruby>小麦<rt>こむぎ</rt></ruby>のアレルギーです。',
      romaji: 'Nyūseihin to tamago to komugi no arerugī desu.',
      zh: '我對乳製品、蛋和小麥過敏。',
      en: "I'm allergic to dairy, egg, and wheat."
    },
    {
      speaker: 'staff',
      jp: '確認しますので、少々お待ちください。',
      ruby: '<ruby>確認<rt>かくにん</rt></ruby>しますので、<ruby>少々<rt>しょうしょう</rt></ruby>お<ruby>待<rt>ま</rt></ruby>ちください。',
      romaji: 'Kakunin shimasu node, shōshō o-machi kudasai.',
      zh: '我幫您確認,請稍等一下。',
      en: "I'll check, so please wait a moment."
    },
    {
      speaker: 'you',
      jp: 'この料理に牛乳は入っていますか？',
      ruby: 'この<ruby>料理<rt>りょうり</rt></ruby>に<ruby>牛乳<rt>ぎゅうにゅう</rt></ruby>は<ruby>入<rt>はい</rt></ruby>っていますか？',
      romaji: 'Kono ryōri ni gyūnyū wa haitte imasu ka?',
      zh: '這道菜裡有牛奶嗎?',
      en: 'Does this dish contain milk?'
    },
    {
      speaker: 'staff',
      jp: 'いいえ、入っていません。',
      ruby: 'いいえ、<ruby>入<rt>はい</rt></ruby>っていません。',
      romaji: 'Iie, haitte imasen.',
      zh: '沒有,沒有加。',
      en: "No, it doesn't."
    },
    {
      speaker: 'you',
      jp: '卵抜きで作れますか？',
      ruby: '<ruby>卵<rt>たまご</rt></ruby><ruby>抜<rt>ぬ</rt></ruby>きで<ruby>作<rt>つく</rt></ruby>れますか？',
      romaji: 'Tamago-nuki de tsukuremasu ka?',
      zh: '可以做成不加蛋的嗎?',
      en: 'Can you make it without egg?'
    },
    {
      speaker: 'staff',
      jp: 'はい、できます。',
      ruby: 'はい、できます。',
      romaji: 'Hai, dekimasu.',
      zh: '可以的。',
      en: 'Yes, we can.'
    },
    {
      speaker: 'you',
      jp: '小麦が入っているメニューはどれですか？',
      ruby: '<ruby>小麦<rt>こむぎ</rt></ruby>が<ruby>入<rt>はい</rt></ruby>っているメニューはどれですか？',
      romaji: 'Komugi ga haitte iru menyū wa dore desu ka?',
      zh: '哪些餐點有含小麥?',
      en: 'Which menu items contain wheat?'
    },
    {
      speaker: 'you',
      jp: 'アレルギーがひどいので、気をつけてください。',
      ruby: 'アレルギーがひどいので、<ruby>気<rt>き</rt></ruby>をつけてください。',
      romaji: 'Arerugī ga hidoi node, ki o tsukete kudasai.',
      zh: '我過敏很嚴重,請務必小心。',
      en: 'My allergy is severe, so please be careful.'
    },
    {
      speaker: 'staff',
      jp: '承知しました。厨房に伝えます。',
      ruby: '<ruby>承知<rt>しょうち</rt></ruby>しました。<ruby>厨房<rt>ちゅうぼう</rt></ruby>に<ruby>伝<rt>つた</rt></ruby>えます。',
      romaji: 'Shōchi shimashita. Chūbō ni tsutaemasu.',
      zh: '明白了,我會轉告廚房。',
      en: 'Understood. I will tell the kitchen.'
    }
  ],
  phrases: [
    {
      title: 'アレルギーを伝える · Telling them',
      items: [
        { jp: '乳アレルギーがあります。', ruby: '<ruby>乳<rt>にゅう</rt></ruby>アレルギーがあります。', zh: '我對奶（乳製品）過敏。', en: 'I have a milk (dairy) allergy.' },
        { jp: '卵アレルギーがあります。', ruby: '<ruby>卵<rt>たまご</rt></ruby>アレルギーがあります。', zh: '我對蛋過敏。', en: 'I have an egg allergy.' },
        { jp: '小麦（グルテン）アレルギーがあります。', ruby: '<ruby>小麦<rt>こむぎ</rt></ruby>（グルテン）アレルギーがあります。', zh: '我對小麥（麩質）過敏。', en: 'I have a wheat (gluten) allergy.' }
      ]
    },
    {
      title: '確認する · Asking what is in it',
      items: [
        { jp: 'これに乳製品は入っていますか？', ruby: 'これに<ruby>乳製品<rt>にゅうせいひん</rt></ruby>は<ruby>入<rt>はい</rt></ruby>っていますか？', zh: '這裡面有乳製品嗎?', en: 'Does this contain dairy?' },
        { jp: 'これに卵は入っていますか？', ruby: 'これに<ruby>卵<rt>たまご</rt></ruby>は<ruby>入<rt>はい</rt></ruby>っていますか？', zh: '這裡面有蛋嗎?', en: 'Does this contain egg?' },
        { jp: 'これに小麦は入っていますか？', ruby: 'これに<ruby>小麦<rt>こむぎ</rt></ruby>は<ruby>入<rt>はい</rt></ruby>っていますか？', zh: '這裡面有小麥嗎?', en: 'Does this contain wheat?' }
      ]
    },
    {
      title: 'お願いする · Requests',
      items: [
        { jp: 'アレルギー対応はできますか？', ruby: 'アレルギー<ruby>対応<rt>たいおう</rt></ruby>はできますか？', zh: '可以做過敏對應嗎?', en: 'Can you accommodate allergies?' },
        { jp: '卵抜きにできますか？', ruby: '<ruby>卵<rt>たまご</rt></ruby><ruby>抜<rt>ぬ</rt></ruby>きにできますか？', zh: '可以不加蛋嗎?', en: 'Can you make it without egg?' },
        { jp: '入っていたら教えてください。', ruby: '<ruby>入<rt>はい</rt></ruby>っていたら<ruby>教<rt>おし</rt></ruby>えてください。', zh: '如果有的話請告訴我。', en: 'Please tell me if it contains any.' }
      ]
    }
  ]
}
