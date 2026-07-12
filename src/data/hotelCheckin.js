// ホテルのチェックイン — practical front desk dialogue for arrival.
export const hotelCheckin = {
  id: 'hotel-checkin',
  title: 'Hotel Check-in',
  titleJp: 'ホテルのチェックイン',
  emoji: '🏨',
  staffAvatar: '🛎️',
  staffLabel: 'フロント · Front Desk',
  description: 'Check in, confirm your booking, ask about breakfast, Wi-Fi, luggage and check-out time.',
  lines: [
    {
      speaker: 'staff',
      jp: 'いらっしゃいませ。チェックインですか？',
      ruby: 'いらっしゃいませ。チェックインですか？',
      romaji: 'Irasshaimase. Chekku-in desu ka?',
      zh: '歡迎光臨。您要辦理入住嗎？',
      en: 'Welcome. Are you checking in?'
    },
    {
      speaker: 'you',
      jp: 'はい、チェックインをお願いします。',
      ruby: 'はい、チェックインをお<ruby>願<rt>ねが</rt></ruby>いします。',
      romaji: 'Hai, chekku-in o onegai shimasu.',
      zh: '是，我想辦理入住。',
      en: 'Yes, I would like to check in.'
    },
    {
      speaker: 'staff',
      jp: 'ご予約のお名前をお願いします。',
      say: 'ごよやくのおなまえをおねがいします。',
      ruby: 'ご<ruby>予約<rt>よやく</rt></ruby>のお<ruby>名前<rt>なまえ</rt></ruby>をお<ruby>願<rt>ねが</rt></ruby>いします。',
      romaji: 'Go-yoyaku no onamae o onegai shimasu.',
      zh: '請問預約姓名是？',
      en: 'May I have the name on the reservation?'
    },
    {
      speaker: 'you',
      jp: 'ツァイで予約しています。',
      ruby: 'ツァイで<ruby>予約<rt>よやく</rt></ruby>しています。',
      romaji: 'Tsai de yoyaku shite imasu.',
      zh: '我是用 Tsai 預約的。',
      en: 'The reservation is under Tsai.'
    },
    {
      speaker: 'staff',
      jp: '確認いたします。パスポートを拝見できますか？',
      say: 'かくにんいたします。パスポートをはいけんできますか？',
      ruby: '<ruby>確認<rt>かくにん</rt></ruby>いたします。パスポートを<ruby>拝見<rt>はいけん</rt></ruby>できますか？',
      romaji: 'Kakunin itashimasu. Pasupōto o haiken dekimasu ka?',
      zh: '我幫您確認。可以看一下護照嗎？',
      en: 'Let me confirm. May I see your passport?'
    },
    {
      speaker: 'you',
      jp: 'はい、どうぞ。',
      ruby: 'はい、どうぞ。',
      romaji: 'Hai, dōzo.',
      zh: '好的，請。',
      en: 'Yes, here you are.'
    },
    {
      speaker: 'staff',
      jp: 'ご宿泊は二泊で、禁煙のお部屋ですね。',
      say: 'ごしゅくはくはにはくで、きんえんのおへやですね。',
      ruby: 'ご<ruby>宿泊<rt>しゅくはく</rt></ruby>は<ruby>二泊<rt>にはく</rt></ruby>で、<ruby>禁煙<rt>きんえん</rt></ruby>のお<ruby>部屋<rt>へや</rt></ruby>ですね。',
      romaji: 'Go-shukuhaku wa ni-haku de, kin-en no oheya desu ne.',
      zh: '您住宿兩晚，是禁菸房對嗎？',
      en: 'You are staying two nights in a non-smoking room, correct?'
    },
    {
      speaker: 'you',
      jp: 'はい、禁煙の部屋でお願いします。',
      say: 'はい、きんえんのへやでおねがいします。',
      ruby: 'はい、<ruby>禁煙<rt>きんえん</rt></ruby>の<ruby>部屋<rt>へや</rt></ruby>でお<ruby>願<rt>ねが</rt></ruby>いします。',
      romaji: 'Hai, kin-en no heya de onegai shimasu.',
      zh: '是，麻煩安排禁菸房。',
      en: 'Yes, a non-smoking room, please.'
    },
    {
      speaker: 'staff',
      jp: '朝食は七時から十時まで、一階のレストランでございます。',
      say: 'ちょうしょくはしちじからじゅうじまで、いっかいのレストランでございます。',
      ruby: '<ruby>朝食<rt>ちょうしょく</rt></ruby>は<ruby>七時<rt>しちじ</rt></ruby>から<ruby>十時<rt>じゅうじ</rt></ruby>まで、<ruby>一階<rt>いっかい</rt></ruby>のレストランでございます。',
      romaji: 'Chōshoku wa shichi-ji kara jū-ji made, ikkai no resutoran de gozaimasu.',
      zh: '早餐是七點到十點，在一樓餐廳。',
      en: 'Breakfast is from 7 to 10 at the restaurant on the first floor.'
    },
    {
      speaker: 'you',
      jp: '朝食は予約に含まれていますか？',
      say: 'ちょうしょくはよやくにふくまれていますか？',
      ruby: '<ruby>朝食<rt>ちょうしょく</rt></ruby>は<ruby>予約<rt>よやく</rt></ruby>に<ruby>含<rt>ふく</rt></ruby>まれていますか？',
      romaji: 'Chōshoku wa yoyaku ni fukumarete imasu ka?',
      zh: '早餐包含在預約裡嗎？',
      en: 'Is breakfast included in my reservation?'
    },
    {
      speaker: 'staff',
      jp: 'はい、含まれております。',
      say: 'はい、ふくまれております。',
      ruby: 'はい、<ruby>含<rt>ふく</rt></ruby>まれております。',
      romaji: 'Hai, fukumarete orimasu.',
      zh: '是，有包含。',
      en: 'Yes, it is included.'
    },
    {
      speaker: 'you',
      jp: 'Wi-Fiのパスワードを教えてください。',
      say: 'ワイファイのパスワードをおしえてください。',
      ruby: 'Wi-Fiのパスワードを<ruby>教<rt>おし</rt></ruby>えてください。',
      romaji: 'Wai-fai no pasuwādo o oshiete kudasai.',
      zh: '請告訴我 Wi-Fi 密碼。',
      en: 'Please tell me the Wi-Fi password.'
    },
    {
      speaker: 'staff',
      jp: 'こちらのカードに書いてあります。',
      say: 'こちらのカードにかいてあります。',
      ruby: 'こちらのカードに<ruby>書<rt>か</rt></ruby>いてあります。',
      romaji: 'Kochira no kādo ni kaite arimasu.',
      zh: '寫在這張卡上。',
      en: 'It is written on this card.'
    },
    {
      speaker: 'you',
      jp: 'チェックアウトは何時ですか？',
      say: 'チェックアウトはなんじですか？',
      ruby: 'チェックアウトは<ruby>何時<rt>なんじ</rt></ruby>ですか？',
      romaji: 'Chekku-auto wa nanji desu ka?',
      zh: '退房是幾點？',
      en: 'What time is check-out?'
    },
    {
      speaker: 'staff',
      jp: 'チェックアウトは午前十一時です。',
      say: 'チェックアウトはごぜんじゅういちじです。',
      ruby: 'チェックアウトは<ruby>午前<rt>ごぜん</rt></ruby><ruby>十一時<rt>じゅういちじ</rt></ruby>です。',
      romaji: 'Chekku-auto wa gozen jūichi-ji desu.',
      zh: '退房時間是上午十一點。',
      en: 'Check-out is at 11 a.m.'
    },
    {
      speaker: 'you',
      jp: '明日、荷物を預かってもらえますか？',
      say: 'あした、にもつをあずかってもらえますか？',
      ruby: '<ruby>明日<rt>あした</rt></ruby>、<ruby>荷物<rt>にもつ</rt></ruby>を<ruby>預<rt>あず</rt></ruby>かってもらえますか？',
      romaji: 'Ashita, nimotsu o azukatte moraemasu ka?',
      zh: '明天可以幫我寄放行李嗎？',
      en: 'Could you keep my luggage tomorrow?'
    },
    {
      speaker: 'staff',
      jp: 'はい、チェックアウト後もお預かりできます。',
      say: 'はい、チェックアウトごもおあずかりできます。',
      ruby: 'はい、チェックアウト<ruby>後<rt>ご</rt></ruby>もお<ruby>預<rt>あず</rt></ruby>かりできます。',
      romaji: 'Hai, chekku-auto go mo oazukari dekimasu.',
      zh: '可以，退房後也可以幫您寄放。',
      en: 'Yes, we can keep it after check-out.'
    },
    {
      speaker: 'staff',
      jp: 'こちらがお部屋のカードキーです。お部屋は八〇三号室です。',
      say: 'こちらがおへやのカードキーです。おへやははちまるさんごうしつです。',
      ruby: 'こちらがお<ruby>部屋<rt>へや</rt></ruby>のカードキーです。お<ruby>部屋<rt>へや</rt></ruby>は<ruby>八〇三号室<rt>はちまるさんごうしつ</rt></ruby>です。',
      romaji: 'Kochira ga oheya no kādo kī desu. Oheya wa hachi-maru-san-gōshitsu desu.',
      zh: '這是您的房卡。房間是 803 號房。',
      en: 'Here is your room key card. Your room is 803.'
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
      title: 'チェックイン · Check-in',
      items: [
        { jp: 'チェックインをお願いします。', ruby: 'チェックインをお<ruby>願<rt>ねが</rt></ruby>いします。', zh: '我想辦理入住。', en: 'I would like to check in.' },
        { jp: '予約しています。', say: 'よやくしています。', ruby: '<ruby>予約<rt>よやく</rt></ruby>しています。', zh: '我有預約。', en: 'I have a reservation.' },
        { jp: '名前はツァイです。', ruby: '<ruby>名前<rt>なまえ</rt></ruby>はツァイです。', zh: '名字是 Tsai。', en: 'My name is Tsai.' },
        { jp: '早めにチェックインできますか？', say: 'はやめにチェックインできますか？', ruby: '<ruby>早<rt>はや</rt></ruby>めにチェックインできますか？', zh: '可以提早入住嗎？', en: 'Can I check in early?' },
        { jp: '禁煙の部屋をお願いします。', say: 'きんえんのへやをおねがいします。', ruby: '<ruby>禁煙<rt>きんえん</rt></ruby>の<ruby>部屋<rt>へや</rt></ruby>をお<ruby>願<rt>ねが</rt></ruby>いします。', zh: '麻煩安排禁菸房。', en: 'A non-smoking room, please.' }
      ]
    },
    {
      title: '設備・時間 · Facilities and times',
      items: [
        { jp: '朝食は付いていますか？', say: 'ちょうしょくはついていますか？', ruby: '<ruby>朝食<rt>ちょうしょく</rt></ruby>は<ruby>付<rt>つ</rt></ruby>いていますか？', zh: '有附早餐嗎？', en: 'Is breakfast included?' },
        { jp: '朝食は何時からですか？', say: 'ちょうしょくはなんじからですか？', ruby: '<ruby>朝食<rt>ちょうしょく</rt></ruby>は<ruby>何時<rt>なんじ</rt></ruby>からですか？', zh: '早餐幾點開始？', en: 'What time does breakfast start?' },
        { jp: 'Wi-Fiのパスワードを教えてください。', say: 'ワイファイのパスワードをおしえてください。', ruby: 'Wi-Fiのパスワードを<ruby>教<rt>おし</rt></ruby>えてください。', zh: '請告訴我 Wi-Fi 密碼。', en: 'Please tell me the Wi-Fi password.' },
        { jp: 'エレベーターはどこですか？', ruby: 'エレベーターはどこですか？', zh: '電梯在哪裡？', en: 'Where is the elevator?' },
        { jp: 'チェックアウトは何時ですか？', say: 'チェックアウトはなんじですか？', ruby: 'チェックアウトは<ruby>何時<rt>なんじ</rt></ruby>ですか？', zh: '退房是幾點？', en: 'What time is check-out?' }
      ]
    },
    {
      title: '荷物・お願い · Luggage and requests',
      items: [
        { jp: '荷物を預かってもらえますか？', say: 'にもつをあずかってもらえますか？', ruby: '<ruby>荷物<rt>にもつ</rt></ruby>を<ruby>預<rt>あず</rt></ruby>かってもらえますか？', zh: '可以幫我寄放行李嗎？', en: 'Could you keep my luggage?' },
        { jp: '部屋に荷物を運んでもらえますか？', say: 'へやににもつをはこんでもらえますか？', ruby: '<ruby>部屋<rt>へや</rt></ruby>に<ruby>荷物<rt>にもつ</rt></ruby>を<ruby>運<rt>はこ</rt></ruby>んでもらえますか？', zh: '可以幫我把行李送到房間嗎？', en: 'Could you bring my luggage to the room?' },
        { jp: 'タクシーを呼んでもらえますか？', say: 'タクシーをよんでもらえますか？', ruby: 'タクシーを<ruby>呼<rt>よ</rt></ruby>んでもらえますか？', zh: '可以幫我叫計程車嗎？', en: 'Could you call a taxi for me?' },
        { jp: '領収書をください。', say: 'りょうしゅうしょをください。', ruby: '<ruby>領収書<rt>りょうしゅうしょ</rt></ruby>をください。', zh: '請給我收據。', en: 'Please give me a receipt.' },
        { jp: 'もう一枚カードキーをもらえますか？', say: 'もういちまいカードキーをもらえますか？', ruby: 'もう<ruby>一枚<rt>いちまい</rt></ruby>カードキーをもらえますか？', zh: '可以再給我一張房卡嗎？', en: 'Could I have one more key card?' }
      ]
    }
  ]
}
