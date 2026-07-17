// 温泉に入る — day-use onsen reception and bathing etiquette.
export const onsen = {
  id: 'onsen-visit',
  title: 'Onsen Visit',
  titleJp: '温泉に入る',
  emoji: '♨️',
  staffAvatar: '♨️',
  staffLabel: '受付 · Onsen Reception',
  description: 'Use a day-use onsen, rent towels, ask about tattoos and private baths, and confirm bathing etiquette.',
  lines: [
    {
      speaker: 'staff',
      jp: 'いらっしゃいませ。日帰り入浴ですか？',
      say: 'いらっしゃいませ。ひがえりにゅうよくですか？',
      ruby: 'いらっしゃいませ。<ruby>日帰<rt>ひがえ</rt></ruby>り<ruby>入浴<rt>にゅうよく</rt></ruby>ですか？',
      romaji: 'Irasshaimase. Higaeri nyūyoku desu ka?',
      zh: '歡迎光臨。您是要使用日歸溫泉嗎？',
      en: 'Welcome. Are you here for a day-use bath?'
    },
    {
      speaker: 'you',
      jp: 'はい。大人二人です。今から入れますか？',
      say: 'はい。おとなふたりです。いまからはいれますか？',
      ruby: 'はい。<ruby>大人<rt>おとな</rt></ruby><ruby>二人<rt>ふたり</rt></ruby>です。<ruby>今<rt>いま</rt></ruby>から<ruby>入<rt>はい</rt></ruby>れますか？',
      romaji: 'Hai. Otona futari desu. Ima kara hairemasu ka?',
      zh: '是。兩位大人，現在可以進去嗎？',
      en: 'Yes. Two adults. May we enter now?'
    },
    {
      speaker: 'staff',
      jp: 'はい、ご利用いただけます。タオルはお持ちですか？',
      say: 'はい、ごりよういただけます。タオルわおもちですか？',
      ruby: 'はい、ご<ruby>利用<rt>りよう</rt></ruby>いただけます。タオルはお<ruby>持<rt>も</rt></ruby>ちですか？',
      romaji: 'Hai, go-riyō itadakemasu. Taoru wa omochi desu ka?',
      zh: '可以使用。您有帶毛巾嗎？',
      en: 'Yes, you may use the bath. Do you have towels?'
    },
    {
      speaker: 'you',
      jp: 'タオルを二組、レンタルしたいです。',
      say: 'タオルをふたくみ、レンタルしたいです。',
      ruby: 'タオルを<ruby>二組<rt>ふたくみ</rt></ruby>、レンタルしたいです。',
      romaji: 'Taoru o futakumi, rentaru shitai desu.',
      zh: '我想租兩組毛巾。',
      en: 'I would like to rent two sets of towels.'
    },
    {
      speaker: 'staff',
      jp: 'かしこまりました。フェイスタオルとバスタオルをご用意します。',
      say: 'かしこまりました。フェイスタオルとバスタオルをごよういします。',
      ruby: 'かしこまりました。フェイスタオルとバスタオルをご<ruby>用意<rt>ようい</rt></ruby>します。',
      romaji: 'Kashikomarimashita. Feisu taoru to basu taoru o go-yōi shimasu.',
      zh: '好的，我為您準備小毛巾和浴巾。',
      en: 'Certainly. I will prepare face towels and bath towels.'
    },
    {
      speaker: 'you',
      jp: 'タトゥーがあるのですが、入れますか？',
      say: 'タトゥーがあるのですが、はいれますか？',
      ruby: 'タトゥーがあるのですが、<ruby>入<rt>はい</rt></ruby>れますか？',
      romaji: 'Tatū ga aru no desu ga, hairemasu ka?',
      zh: '我有刺青，可以入浴嗎？',
      en: 'I have a tattoo. May I use the bath?'
    },
    {
      speaker: 'staff',
      jp: '施設ごとに規則が異なります。当館はカバーシールで隠せば、大浴場をご利用いただけます。',
      say: 'しせつごとにきそくがことなります。とうかんわカバーシールでかくせば、だいよくじょうをごりよういただけます。',
      ruby: '<ruby>施設<rt>しせつ</rt></ruby>ごとに<ruby>規則<rt>きそく</rt></ruby>が<ruby>異<rt>こと</rt></ruby>なります。<ruby>当館<rt>とうかん</rt></ruby>はカバーシールで<ruby>隠<rt>かく</rt></ruby>せば、<ruby>大浴場<rt>だいよくじょう</rt></ruby>をご<ruby>利用<rt>りよう</rt></ruby>いただけます。',
      romaji: 'Shisetsu goto ni kisoku ga kotonarimasu. Tōkan wa kabā shīru de kakuseba, daiyokujō o go-riyō itadakemasu.',
      zh: '各設施規定不同。本館若用遮蓋貼紙遮住，就可以使用大浴場。',
      en: 'Rules vary by facility. At our facility, you may use the public bath if you cover it with a sticker.'
    },
    {
      speaker: 'you',
      jp: '貸切風呂はありますか？',
      say: 'かしきりぶろわありますか？',
      ruby: '<ruby>貸切風呂<rt>かしきりぶろ</rt></ruby>はありますか？',
      romaji: 'Kashikiri-buro wa arimasu ka?',
      zh: '有私人包場湯屋嗎？',
      en: 'Do you have private baths?'
    },
    {
      speaker: 'staff',
      jp: 'はい、予約制の貸切風呂があります。空き状況を確認します。',
      say: 'はい、よやくせいのかしきりぶろがあります。あきじょうきょうをかくにんします。',
      ruby: 'はい、<ruby>予約制<rt>よやくせい</rt></ruby>の<ruby>貸切風呂<rt>かしきりぶろ</rt></ruby>があります。<ruby>空<rt>あ</rt></ruby>き<ruby>状況<rt>じょうきょう</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>します。',
      romaji: 'Hai, yoyaku-sei no kashikiri-buro ga arimasu. Aki jōkyō o kakunin shimasu.',
      zh: '有，需要預約。我幫您確認是否有空位。',
      en: 'Yes, we have private baths by reservation. I will check availability.'
    },
    {
      speaker: 'you',
      jp: '大浴場の入り方を教えてください。',
      say: 'だいよくじょうのはいりかたをおしえてください。',
      ruby: '<ruby>大浴場<rt>だいよくじょう</rt></ruby>の<ruby>入<rt>はい</rt></ruby>り<ruby>方<rt>かた</rt></ruby>を<ruby>教<rt>おし</rt></ruby>えてください。',
      romaji: 'Daiyokujō no hairikata o oshiete kudasai.',
      zh: '請告訴我大浴場的入浴方式。',
      en: 'Please tell me how to use the public bath.'
    },
    {
      speaker: 'staff',
      jp: '最初に体を洗ってから、お入りください。湯船にはタオルや髪を入れないでください。',
      say: 'さいしょにからだをあらってから、おはいりください。ゆぶねにわタオルやかみをいれないでください。',
      ruby: '<ruby>最初<rt>さいしょ</rt></ruby>に<ruby>体<rt>からだ</rt></ruby>を<ruby>洗<rt>あら</rt></ruby>ってから、お<ruby>入<rt>はい</rt></ruby>りください。<ruby>湯船<rt>ゆぶね</rt></ruby>にはタオルや<ruby>髪<rt>かみ</rt></ruby>を<ruby>入<rt>い</rt></ruby>れないでください。',
      romaji: 'Saisho ni karada o aratte kara, ohairi kudasai. Yubune ni wa taoru ya kami o irenaide kudasai.',
      zh: '請先洗淨身體再入浴。不要把毛巾或頭髮放進浴池。',
      en: 'Please wash your body before entering. Do not put towels or hair in the bath.'
    },
    {
      speaker: 'you',
      jp: '浴場内で写真を撮ってもいいですか？',
      say: 'よくじょうないでしゃしんをとってもいいですか？',
      ruby: '<ruby>浴場内<rt>よくじょうない</rt></ruby>で<ruby>写真<rt>しゃしん</rt></ruby>を<ruby>撮<rt>と</rt></ruby>ってもいいですか？',
      romaji: 'Yokujōnai de shashin o totte mo ii desu ka?',
      zh: '可以在浴場裡拍照嗎？',
      en: 'May I take photos in the bathing area?'
    },
    {
      speaker: 'staff',
      jp: '申し訳ありませんが、浴場内の撮影は禁止です。',
      say: 'もうしわけありませんが、よくじょうないのさつえいわきんしです。',
      ruby: '<ruby>申<rt>もう</rt></ruby>し<ruby>訳<rt>わけ</rt></ruby>ありませんが、<ruby>浴場内<rt>よくじょうない</rt></ruby>の<ruby>撮影<rt>さつえい</rt></ruby>は<ruby>禁止<rt>きんし</rt></ruby>です。',
      romaji: 'Mōshiwake arimasen ga, yokujōnai no satsuei wa kinshi desu.',
      zh: '很抱歉，浴場內禁止拍照。',
      en: 'I am sorry, but photography is prohibited in the bathing area.'
    },
    {
      speaker: 'you',
      jp: '水着は必要ですか？',
      say: 'みずぎわひつようですか？',
      ruby: '<ruby>水着<rt>みずぎ</rt></ruby>は<ruby>必要<rt>ひつよう</rt></ruby>ですか？',
      romaji: 'Mizugi wa hitsuyō desu ka?',
      zh: '需要穿泳裝嗎？',
      en: 'Do I need a swimsuit?'
    },
    {
      speaker: 'staff',
      jp: '当館の大浴場では水着を着用しません。脱衣所のロッカーをご利用ください。',
      say: 'とうかんのだいよくじょうでわみずぎをちゃくようしません。だついじょのロッカーをごりようください。',
      ruby: '<ruby>当館<rt>とうかん</rt></ruby>の<ruby>大浴場<rt>だいよくじょう</rt></ruby>では<ruby>水着<rt>みずぎ</rt></ruby>を<ruby>着用<rt>ちゃくよう</rt></ruby>しません。<ruby>脱衣所<rt>だついじょ</rt></ruby>のロッカーをご<ruby>利用<rt>りよう</rt></ruby>ください。',
      romaji: 'Tōkan no daiyokujō de wa mizugi o chakuyō shimasen. Datsuijo no rokkā o go-riyō kudasai.',
      zh: '本館大浴場不穿泳裝。請使用更衣室的置物櫃。',
      en: 'Swimsuits are not worn in our public bath. Please use the lockers in the changing room.'
    },
    {
      speaker: 'you',
      jp: 'わかりました。露天風呂はどちらですか？',
      say: 'わかりました。ろてんぶろわどちらですか？',
      ruby: 'わかりました。<ruby>露天風呂<rt>ろてんぶろ</rt></ruby>はどちらですか？',
      romaji: 'Wakarimashita. Rotenburo wa dochira desu ka?',
      zh: '了解。露天風呂在哪邊呢？',
      en: 'I understand. Where is the outdoor bath?'
    },
    {
      speaker: 'staff',
      jp: '奥の扉を入って右側です。ごゆっくりどうぞ。',
      say: 'おくのとびらをはいってみぎがわです。ごゆっくりどうぞ。',
      ruby: '<ruby>奥<rt>おく</rt></ruby>の<ruby>扉<rt>とびら</rt></ruby>を<ruby>入<rt>はい</rt></ruby>って<ruby>右側<rt>みぎがわ</rt></ruby>です。ごゆっくりどうぞ。',
      romaji: 'Oku no tobira o haitte migigawa desu. Goyukkuri dōzo.',
      zh: '進裡面的門後右手邊。請慢慢享受。',
      en: 'Go through the door at the back; it is on the right. Please enjoy your time.'
    }
  ],
  phrases: [
    {
      title: '受付・料金 · Reception and fees',
      items: [
        { jp: '日帰り入浴をお願いします。', say: 'ひがえりにゅうよくをおねがいします。', ruby: '<ruby>日帰<rt>ひがえ</rt></ruby>り<ruby>入浴<rt>にゅうよく</rt></ruby>をお<ruby>願<rt>ねが</rt></ruby>いします。', zh: '我想使用日歸溫泉。', en: 'I would like to use the day bath.' },
        { jp: '今から入れますか？', say: 'いまからはいれますか？', ruby: '<ruby>今<rt>いま</rt></ruby>から<ruby>入<rt>はい</rt></ruby>れますか？', zh: '現在可以進去嗎？', en: 'May I enter now?' },
        { jp: '入館料はいくらですか？', say: 'にゅうかんりょうわいくらですか？', ruby: '<ruby>入館料<rt>にゅうかんりょう</rt></ruby>はいくらですか？', zh: '入館費是多少？', en: 'How much is the admission fee?' },
        { jp: 'タオルをレンタルできますか？', ruby: 'タオルをレンタルできますか？', zh: '可以租毛巾嗎？', en: 'Can I rent towels?' },
        { jp: 'シャンプーとボディーソープはありますか？', ruby: 'シャンプーとボディーソープはありますか？', zh: '有洗髮精和沐浴乳嗎？', en: 'Do you have shampoo and body soap?' }
      ]
    },
    {
      title: '規則を確認 · Confirm the rules',
      items: [
        { jp: 'タトゥーがあるのですが、入れますか？', ruby: 'タトゥーがあるのですが、<ruby>入<rt>はい</rt></ruby>れますか？', zh: '我有刺青，可以入浴嗎？', en: 'I have a tattoo. May I use the bath?' },
        { jp: 'タトゥーを隠せば利用できますか？', say: 'タトゥーをかくせばりようできますか？', ruby: 'タトゥーを<ruby>隠<rt>かく</rt></ruby>せば<ruby>利用<rt>りよう</rt></ruby>できますか？', zh: '把刺青遮住就可以使用嗎？', en: 'May I use it if I cover my tattoo?' },
        { jp: '水着は着用しますか？', say: 'みずぎわちゃくようしますか？', ruby: '<ruby>水着<rt>みずぎ</rt></ruby>は<ruby>着用<rt>ちゃくよう</rt></ruby>しますか？', zh: '需要穿泳裝嗎？', en: 'Do I wear a swimsuit?' },
        { jp: '浴場内で写真を撮れますか？', say: 'よくじょうないでしゃしんをとれますか？', ruby: '<ruby>浴場内<rt>よくじょうない</rt></ruby>で<ruby>写真<rt>しゃしん</rt></ruby>を<ruby>撮<rt>と</rt></ruby>れますか？', zh: '可以在浴場內拍照嗎？', en: 'May I take photos in the bathing area?' },
        { jp: '入浴前に体を洗いますか？', say: 'にゅうよくまえにからだをあらいますか？', ruby: '<ruby>入浴前<rt>にゅうよくまえ</rt></ruby>に<ruby>体<rt>からだ</rt></ruby>を<ruby>洗<rt>あら</rt></ruby>いますか？', zh: '入浴前要先洗身體嗎？', en: 'Should I wash before entering the bath?' }
      ]
    },
    {
      title: 'お風呂・設備 · Baths and facilities',
      items: [
        { jp: '貸切風呂はありますか？', say: 'かしきりぶろわありますか？', ruby: '<ruby>貸切風呂<rt>かしきりぶろ</rt></ruby>はありますか？', zh: '有私人包場湯屋嗎？', en: 'Do you have private baths?' },
        { jp: '貸切風呂は予約が必要ですか？', say: 'かしきりぶろわよやくがひつようですか？', ruby: '<ruby>貸切風呂<rt>かしきりぶろ</rt></ruby>は<ruby>予約<rt>よやく</rt></ruby>が<ruby>必要<rt>ひつよう</rt></ruby>ですか？', zh: '私人湯屋需要預約嗎？', en: 'Does the private bath require a reservation?' },
        { jp: '露天風呂はどこですか？', say: 'ろてんぶろわどこですか？', ruby: '<ruby>露天風呂<rt>ろてんぶろ</rt></ruby>はどこですか？', zh: '露天風呂在哪裡？', en: 'Where is the outdoor bath?' },
        { jp: 'サウナはありますか？', ruby: 'サウナはありますか？', zh: '有三溫暖嗎？', en: 'Do you have a sauna?' },
        { jp: '休憩所はどこですか？', say: 'きゅうけいじょわどこですか？', ruby: '<ruby>休憩所<rt>きゅうけいじょ</rt></ruby>はどこですか？', zh: '休息區在哪裡？', en: 'Where is the rest area?' }
      ]
    },
    {
      title: '困ったとき · If you need help',
      items: [
        { jp: 'ロッカーの鍵をなくしました。', say: 'ロッカーのかぎをなくしました。', ruby: 'ロッカーの<ruby>鍵<rt>かぎ</rt></ruby>をなくしました。', zh: '我弄丟置物櫃的鑰匙了。', en: 'I lost my locker key.' },
        { jp: 'のぼせたようです。休める場所はありますか？', say: 'のぼせたようです。やすめるばしょわありますか？', ruby: 'のぼせたようです。<ruby>休<rt>やす</rt></ruby>める<ruby>場所<rt>ばしょ</rt></ruby>はありますか？', zh: '我好像泡得頭暈了，有可以休息的地方嗎？', en: 'I think I am overheated. Is there somewhere I can rest?' },
        { jp: 'ドライヤーはありますか？', ruby: 'ドライヤーはありますか？', zh: '有吹風機嗎？', en: 'Do you have a hair dryer?' },
        { jp: '忘れ物をしたかもしれません。', say: 'わすれものをしたかもしれません。', ruby: '<ruby>忘<rt>わす</rt></ruby>れ<ruby>物<rt>もの</rt></ruby>をしたかもしれません。', zh: '我可能有遺失物品。', en: 'I may have left something behind.' }
      ]
    }
  ]
}
