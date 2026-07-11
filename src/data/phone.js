// Booking a restaurant table over the phone — a full call from greeting to
// goodbye: date & time, party size, seating, an allergy note, and the staff
// reading the booking back to confirm.
//
// Each line has:
//   speaker : 'staff' (お店 · the restaurant) or 'you' (あなた · the caller)
//   jp      : plain Japanese text — used for text-to-speech and as the
//             target for speech recognition when you practise speaking.
//   say     : (optional) a kana-only version to force correct TTS reading of
//             numbers / times that the engine might otherwise mispronounce.
//   ruby    : the same text with <ruby> furigana for reading.
//   romaji  : romanised reading.
//   zh      : 繁體中文 meaning.
//   en      : English meaning.

export const phone = {
  id: 'phone',
  title: 'Booking by Phone',
  titleJp: '電話でレストランを予約する',
  emoji: '📞',
  description: 'Call a restaurant to reserve a table — date, time, party size, seating & an allergy note.',
  lines: [
    {
      speaker: 'staff',
      jp: 'はい、レストランさくらでございます。',
      ruby: 'はい、レストランさくらでございます。',
      romaji: 'Hai, resutoran Sakura de gozaimasu.',
      zh: '您好，這裡是櫻花餐廳。',
      en: 'Hello, this is Restaurant Sakura.'
    },
    {
      speaker: 'you',
      jp: 'もしもし、予約をお願いしたいんですが。',
      ruby: 'もしもし、<ruby>予約<rt>よやく</rt></ruby>をお<ruby>願<rt>ねが</rt></ruby>いしたいんですが。',
      romaji: 'Moshimoshi, yoyaku o onegai shitai n desu ga.',
      zh: '喂，我想訂位。',
      en: 'Hello, I\'d like to make a reservation.'
    },
    {
      speaker: 'staff',
      jp: 'ありがとうございます。ご希望の日にちとお時間をお伺いできますか？',
      ruby: 'ありがとうございます。ご<ruby>希望<rt>きぼう</rt></ruby>の<ruby>日<rt>ひ</rt></ruby>にちとお<ruby>時間<rt>じかん</rt></ruby>をお<ruby>伺<rt>うかが</rt></ruby>いできますか？',
      romaji: 'Arigatō gozaimasu. Go-kibō no hinichi to o-jikan o o-ukagai dekimasu ka?',
      zh: '謝謝您。方便請問您希望的日期與時間嗎？',
      en: 'Thank you. May I ask your preferred date and time?'
    },
    {
      speaker: 'you',
      jp: '今週の土曜日、夜7時でお願いします。',
      say: '今週の土曜日、よるしちじでお願いします。',
      ruby: '<ruby>今週<rt>こんしゅう</rt></ruby>の<ruby>土曜日<rt>どようび</rt></ruby>、<ruby>夜<rt>よる</rt></ruby><ruby>7時<rt>しちじ</rt></ruby>でお<ruby>願<rt>ねが</rt></ruby>いします。',
      romaji: 'Konshū no doyōbi, yoru shichi-ji de onegai shimasu.',
      zh: '這週六晚上 7 點，麻煩您。',
      en: 'This Saturday at 7 p.m., please.'
    },
    {
      speaker: 'staff',
      jp: '何名様でしょうか？',
      ruby: '<ruby>何名様<rt>なんめいさま</rt></ruby>でしょうか？',
      romaji: 'Nanmei-sama deshō ka?',
      zh: '請問幾位呢？',
      en: 'How many people will it be?'
    },
    {
      speaker: 'you',
      jp: '大人2名と子供1名です。',
      say: 'おとなにめいと子供いちめいです。',
      ruby: '<ruby>大人<rt>おとな</rt></ruby><ruby>2名<rt>にめい</rt></ruby>と<ruby>子供<rt>こども</rt></ruby><ruby>1名<rt>いちめい</rt></ruby>です。',
      romaji: 'Otona ni-mei to kodomo ichi-mei desu.',
      zh: '兩位大人和一位小孩。',
      en: 'Two adults and one child.'
    },
    {
      speaker: 'staff',
      jp: 'かしこまりました。お席は禁煙席でよろしいですか？',
      ruby: 'かしこまりました。お<ruby>席<rt>せき</rt></ruby>は<ruby>禁煙席<rt>きんえんせき</rt></ruby>でよろしいですか？',
      romaji: 'Kashikomarimashita. O-seki wa kin\'en-seki de yoroshii desu ka?',
      zh: '好的。座位安排禁菸區可以嗎？',
      en: 'Certainly. Would a non-smoking table be all right?'
    },
    {
      speaker: 'you',
      jp: 'はい、禁煙席でお願いします。',
      ruby: 'はい、<ruby>禁煙席<rt>きんえんせき</rt></ruby>でお<ruby>願<rt>ねが</rt></ruby>いします。',
      romaji: 'Hai, kin\'en-seki de onegai shimasu.',
      zh: '好，麻煩給我禁菸區。',
      en: 'Yes, non-smoking, please.'
    },
    {
      speaker: 'staff',
      jp: '窓側のお席もご用意できますが、いかがなさいますか？',
      ruby: '<ruby>窓側<rt>まどがわ</rt></ruby>のお<ruby>席<rt>せき</rt></ruby>もご<ruby>用意<rt>ようい</rt></ruby>できますが、いかがなさいますか？',
      romaji: 'Madogawa no o-seki mo go-yōi dekimasu ga, ikaga nasaimasu ka?',
      zh: '我們也能安排靠窗的位子，您覺得如何？',
      en: 'We can also offer a window seat — would you like that?'
    },
    {
      speaker: 'you',
      jp: 'ぜひ窓側でお願いします。',
      ruby: 'ぜひ<ruby>窓側<rt>まどがわ</rt></ruby>でお<ruby>願<rt>ねが</rt></ruby>いします。',
      romaji: 'Zehi madogawa de onegai shimasu.',
      zh: '麻煩一定要靠窗的，謝謝。',
      en: 'Yes, a window seat would be great.'
    },
    {
      speaker: 'staff',
      jp: '何かアレルギーや苦手な食べ物はございますか？',
      ruby: '<ruby>何<rt>なに</rt></ruby>かアレルギーや<ruby>苦手<rt>にがて</rt></ruby>な<ruby>食<rt>た</rt></ruby>べ<ruby>物<rt>もの</rt></ruby>はございますか？',
      romaji: 'Nani ka arerugī ya nigate na tabemono wa gozaimasu ka?',
      zh: '請問有任何過敏或不敢吃的食物嗎？',
      en: 'Do you have any allergies or foods you\'d rather avoid?'
    },
    {
      speaker: 'you',
      jp: '母がそばアレルギーなので、気をつけていただけますか？',
      ruby: '<ruby>母<rt>はは</rt></ruby>がそばアレルギーなので、<ruby>気<rt>き</rt></ruby>をつけていただけますか？',
      romaji: 'Haha ga soba arerugī na node, ki o tsukete itadakemasu ka?',
      zh: '我母親對蕎麥過敏，可以麻煩您留意嗎？',
      en: 'My mother has a buckwheat allergy — could you be careful with that?'
    },
    {
      speaker: 'staff',
      jp: '承知しました。では、お名前とお電話番号をお願いします。',
      ruby: '<ruby>承知<rt>しょうち</rt></ruby>しました。では、お<ruby>名前<rt>なまえ</rt></ruby>とお<ruby>電話番号<rt>でんわばんごう</rt></ruby>をお<ruby>願<rt>ねが</rt></ruby>いします。',
      romaji: 'Shōchi shimashita. Dewa, o-namae to o-denwa-bangō o onegai shimasu.',
      zh: '好的。那麼，請給我您的大名與電話號碼。',
      en: 'Understood. May I have your name and phone number?'
    },
    {
      speaker: 'you',
      jp: '田中と申します。電話番号は090-1234-5678です。',
      say: 'たなかと申します。電話番号はゼロきゅうゼロのいちにさんよんのごろくななはちです。',
      ruby: '<ruby>田中<rt>たなか</rt></ruby>と<ruby>申<rt>もう</rt></ruby>します。<ruby>電話番号<rt>でんわばんごう</rt></ruby>は090-1234-5678です。',
      romaji: 'Tanaka to mōshimasu. Denwa-bangō wa zero-kyū-zero, ichi-ni-san-yon, go-roku-nana-hachi desu.',
      zh: '我姓田中。電話號碼是 090-1234-5678。',
      en: 'My name is Tanaka. My number is 090-1234-5678.'
    },
    {
      speaker: 'staff',
      jp: '復唱いたします。土曜日の夜7時、3名様、田中様ですね。',
      say: 'ふくしょういたします。どようびのよるしちじ、さんめいさま、たなかさまですね。',
      ruby: '<ruby>復唱<rt>ふくしょう</rt></ruby>いたします。<ruby>土曜日<rt>どようび</rt></ruby>の<ruby>夜<rt>よる</rt></ruby><ruby>7時<rt>しちじ</rt></ruby>、<ruby>3名様<rt>さんめいさま</rt></ruby>、<ruby>田中<rt>たなか</rt></ruby><ruby>様<rt>さま</rt></ruby>ですね。',
      romaji: 'Fukushō itashimasu. Doyōbi no yoru shichi-ji, san-mei-sama, Tanaka-sama desu ne.',
      zh: '我跟您確認一下：週六晚上 7 點、3 位、田中先生／小姐，對嗎？',
      en: 'Let me read that back: Saturday at 7 p.m., three people, under Tanaka. Is that right?'
    },
    {
      speaker: 'you',
      jp: 'はい、それで大丈夫です。',
      ruby: 'はい、それで<ruby>大丈夫<rt>だいじょうぶ</rt></ruby>です。',
      romaji: 'Hai, sore de daijōbu desu.',
      zh: '是的，這樣就行。',
      en: 'Yes, that\'s correct.'
    },
    {
      speaker: 'staff',
      jp: 'ご予約ありがとうございます。お待ちしております。',
      ruby: 'ご<ruby>予約<rt>よやく</rt></ruby>ありがとうございます。お<ruby>待<rt>ま</rt></ruby>ちしております。',
      romaji: 'Go-yoyaku arigatō gozaimasu. O-machi shite orimasu.',
      zh: '感謝您的預約，我們恭候您的光臨。',
      en: 'Thank you for your reservation. We look forward to seeing you.'
    },
    {
      speaker: 'you',
      jp: 'よろしくお願いします。失礼します。',
      ruby: 'よろしくお<ruby>願<rt>ねが</rt></ruby>いします。<ruby>失礼<rt>しつれい</rt></ruby>します。',
      romaji: 'Yoroshiku onegai shimasu. Shitsurei shimasu.',
      zh: '麻煩您了，再見。',
      en: 'Thank you. Goodbye.'
    }
  ]
}
