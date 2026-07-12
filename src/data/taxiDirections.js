// タクシーの道案内 — giving turn-by-turn instructions to a taxi driver.
export const taxiDirections = {
  id: 'taxi-directions',
  title: 'Taxi Turn-by-Turn',
  titleJp: 'タクシーの道案内',
  emoji: '🧭',
  staffAvatar: '🚕',
  staffLabel: '運転手 · Driver',
  description: 'Tell a taxi driver to go straight, turn left or right, slow down, and stop.',
  lines: [
    {
      speaker: 'staff',
      jp: '目的地はこの住所でよろしいですか？',
      say: 'もくてきちはこのじゅうしょでよろしいですか？',
      ruby: '<ruby>目的地<rt>もくてきち</rt></ruby>はこの<ruby>住所<rt>じゅうしょ</rt></ruby>でよろしいですか？',
      romaji: 'Mokutekichi wa kono jūsho de yoroshii desu ka?',
      zh: '目的地是這個地址，對嗎？',
      en: 'Is this address the destination?'
    },
    {
      speaker: 'you',
      jp: 'はい。近くまで来たら、道を案内します。',
      say: 'はい。ちかくまできたら、みちをあんないします。',
      ruby: 'はい。<ruby>近<rt>ちか</rt></ruby>くまで<ruby>来<rt>き</rt></ruby>たら、<ruby>道<rt>みち</rt></ruby>を<ruby>案内<rt>あんない</rt></ruby>します。',
      romaji: 'Hai. Chikaku made kitara, michi o annai shimasu.',
      zh: '是。接近的時候我會指路。',
      en: "Yes. When we're close, I'll guide you."
    },
    {
      speaker: 'staff',
      jp: '承知しました。近くなったら教えてください。',
      say: 'しょうちしました。ちかくなったらおしえてください。',
      ruby: '<ruby>承知<rt>しょうち</rt></ruby>しました。<ruby>近<rt>ちか</rt></ruby>くなったら<ruby>教<rt>おし</rt></ruby>えてください。',
      romaji: 'Shōchi shimashita. Chikaku nattara oshiete kudasai.',
      zh: '了解。接近時請告訴我。',
      en: 'Understood. Please let me know when we get close.'
    },
    {
      speaker: 'you',
      jp: 'このまままっすぐ進んでください。',
      say: 'このまままっすぐすすんでください。',
      ruby: 'このまままっすぐ<ruby>進<rt>すす</rt></ruby>んでください。',
      romaji: 'Kono mama massugu susunde kudasai.',
      zh: '請就這樣直走。',
      en: 'Please keep going straight.'
    },
    {
      speaker: 'staff',
      jp: 'はい、まっすぐですね。',
      ruby: 'はい、まっすぐですね。',
      romaji: 'Hai, massugu desu ne.',
      zh: '好，直走對吧。',
      en: 'Okay, straight ahead.'
    },
    {
      speaker: 'you',
      jp: '次の信号を左に曲がってください。',
      say: 'つぎのしんごうをひだりにまがってください。',
      ruby: '<ruby>次<rt>つぎ</rt></ruby>の<ruby>信号<rt>しんごう</rt></ruby>を<ruby>左<rt>ひだり</rt></ruby>に<ruby>曲<rt>ま</rt></ruby>がってください。',
      romaji: 'Tsugi no shingō o hidari ni magatte kudasai.',
      zh: '請在下一個紅綠燈左轉。',
      en: 'Please turn left at the next traffic light.'
    },
    {
      speaker: 'staff',
      jp: '次の信号を左ですね。',
      say: 'つぎのしんごうをひだりですね。',
      ruby: '<ruby>次<rt>つぎ</rt></ruby>の<ruby>信号<rt>しんごう</rt></ruby>を<ruby>左<rt>ひだり</rt></ruby>ですね。',
      romaji: 'Tsugi no shingō o hidari desu ne.',
      zh: '下一個紅綠燈左轉，對吧。',
      en: 'Left at the next traffic light, right?'
    },
    {
      speaker: 'you',
      jp: 'そのあと、一つ目の角を右に曲がってください。',
      say: 'そのあと、ひとつめのかどをみぎにまがってください。',
      ruby: 'そのあと、<ruby>一<rt>ひと</rt></ruby>つ<ruby>目<rt>め</rt></ruby>の<ruby>角<rt>かど</rt></ruby>を<ruby>右<rt>みぎ</rt></ruby>に<ruby>曲<rt>ま</rt></ruby>がってください。',
      romaji: 'Sono ato, hitotsume no kado o migi ni magatte kudasai.',
      zh: '然後請在第一個路口右轉。',
      en: 'After that, please turn right at the first corner.'
    },
    {
      speaker: 'staff',
      jp: '一つ目の角を右ですね。',
      say: 'ひとつめのかどをみぎですね。',
      ruby: '<ruby>一<rt>ひと</rt></ruby>つ<ruby>目<rt>め</rt></ruby>の<ruby>角<rt>かど</rt></ruby>を<ruby>右<rt>みぎ</rt></ruby>ですね。',
      romaji: 'Hitotsume no kado o migi desu ne.',
      zh: '第一個路口右轉，對吧。',
      en: 'Right at the first corner.'
    },
    {
      speaker: 'you',
      jp: '少しゆっくり走ってもらえますか？建物を探しています。',
      say: 'すこしゆっくりはしってもらえますか？たてものをさがしています。',
      ruby: '<ruby>少<rt>すこ</rt></ruby>しゆっくり<ruby>走<rt>はし</rt></ruby>ってもらえますか？<ruby>建物<rt>たてもの</rt></ruby>を<ruby>探<rt>さが</rt></ruby>しています。',
      romaji: 'Sukoshi yukkuri hashitte moraemasu ka? Tatemono o sagashite imasu.',
      zh: '可以開慢一點嗎？我在找那棟建築物。',
      en: "Could you drive a little slower? I'm looking for the building."
    },
    {
      speaker: 'staff',
      jp: 'はい、ゆっくり走ります。',
      say: 'はい、ゆっくりはしります。',
      ruby: 'はい、ゆっくり<ruby>走<rt>はし</rt></ruby>ります。',
      romaji: 'Hai, yukkuri hashirimasu.',
      zh: '好，我開慢一點。',
      en: "Okay, I'll drive slowly."
    },
    {
      speaker: 'you',
      jp: 'あのコンビニの手前で止めてください。',
      say: 'あのコンビニのてまえでとめてください。',
      ruby: 'あのコンビニの<ruby>手前<rt>てまえ</rt></ruby>で<ruby>止<rt>と</rt></ruby>めてください。',
      romaji: 'Ano konbini no temae de tomete kudasai.',
      zh: '請在那間便利商店前面一點停。',
      en: 'Please stop just before that convenience store.'
    },
    {
      speaker: 'staff',
      jp: 'コンビニの手前ですね。',
      say: 'コンビニのてまえですね。',
      ruby: 'コンビニの<ruby>手前<rt>てまえ</rt></ruby>ですね。',
      romaji: 'Konbini no temae desu ne.',
      zh: '便利商店前面一點，對吧。',
      en: 'Just before the convenience store, right?'
    },
    {
      speaker: 'you',
      jp: 'すみません、やっぱりその先で左に寄せてください。',
      say: 'すみません、やっぱりそのさきでひだりによせてください。',
      ruby: 'すみません、やっぱりその<ruby>先<rt>さき</rt></ruby>で<ruby>左<rt>ひだり</rt></ruby>に<ruby>寄<rt>よ</rt></ruby>せてください。',
      romaji: 'Sumimasen, yappari sono saki de hidari ni yosete kudasai.',
      zh: '不好意思，還是請在前面靠左停。',
      en: 'Sorry, actually please pull over on the left up ahead.'
    },
    {
      speaker: 'staff',
      jp: 'かしこまりました。ここでよろしいですか？',
      ruby: 'かしこまりました。ここでよろしいですか？',
      romaji: 'Kashikomarimashita. Koko de yoroshii desu ka?',
      zh: '好的。這裡可以嗎？',
      en: 'Certainly. Is here okay?'
    },
    {
      speaker: 'you',
      jp: 'はい、ここで大丈夫です。ありがとうございました。',
      say: 'はい、ここでだいじょうぶです。ありがとうございました。',
      ruby: 'はい、ここで<ruby>大丈夫<rt>だいじょうぶ</rt></ruby>です。ありがとうございました。',
      romaji: 'Hai, koko de daijōbu desu. Arigatō gozaimashita.',
      zh: '好，這裡可以。謝謝您。',
      en: 'Yes, here is fine. Thank you very much.'
    }
  ],
  phrases: [
    {
      title: '曲がる・進む · Turning and going',
      items: [
        { jp: 'このまままっすぐ進んでください。', say: 'このまままっすぐすすんでください。', ruby: 'このまままっすぐ<ruby>進<rt>すす</rt></ruby>んでください。', zh: '請就這樣直走。', en: 'Please keep going straight.' },
        { jp: '次の信号を左に曲がってください。', say: 'つぎのしんごうをひだりにまがってください。', ruby: '<ruby>次<rt>つぎ</rt></ruby>の<ruby>信号<rt>しんごう</rt></ruby>を<ruby>左<rt>ひだり</rt></ruby>に<ruby>曲<rt>ま</rt></ruby>がってください。', zh: '請在下一個紅綠燈左轉。', en: 'Please turn left at the next traffic light.' },
        { jp: '次の角を右に曲がってください。', say: 'つぎのかどをみぎにまがってください。', ruby: '<ruby>次<rt>つぎ</rt></ruby>の<ruby>角<rt>かど</rt></ruby>を<ruby>右<rt>みぎ</rt></ruby>に<ruby>曲<rt>ま</rt></ruby>がってください。', zh: '請在下一個路口右轉。', en: 'Please turn right at the next corner.' },
        { jp: 'ここを左です。', say: 'ここをひだりです。', ruby: 'ここを<ruby>左<rt>ひだり</rt></ruby>です。', zh: '這裡左轉。', en: 'Left here.' },
        { jp: 'ここを右です。', say: 'ここをみぎです。', ruby: 'ここを<ruby>右<rt>みぎ</rt></ruby>です。', zh: '這裡右轉。', en: 'Right here.' },
        { jp: 'この道に入ってください。', say: 'このみちにはいってください。', ruby: 'この<ruby>道<rt>みち</rt></ruby>に<ruby>入<rt>はい</rt></ruby>ってください。', zh: '請開進這條路。', en: 'Please enter this road.' }
      ]
    },
    {
      title: '止まる・寄せる · Stopping and pulling over',
      items: [
        { jp: '少しゆっくり走ってください。', say: 'すこしゆっくりはしってください。', ruby: '<ruby>少<rt>すこ</rt></ruby>しゆっくり<ruby>走<rt>はし</rt></ruby>ってください。', zh: '請開慢一點。', en: 'Please drive a little slower.' },
        { jp: 'ここで止めてください。', say: 'ここでとめてください。', ruby: 'ここで<ruby>止<rt>と</rt></ruby>めてください。', zh: '請在這裡停。', en: 'Please stop here.' },
        { jp: '左側に寄せてください。', say: 'ひだりがわによせてください。', ruby: '<ruby>左側<rt>ひだりがわ</rt></ruby>に<ruby>寄<rt>よ</rt></ruby>せてください。', zh: '請靠左邊停。', en: 'Please pull over on the left side.' },
        { jp: '右側に寄せてください。', say: 'みぎがわによせてください。', ruby: '<ruby>右側<rt>みぎがわ</rt></ruby>に<ruby>寄<rt>よ</rt></ruby>せてください。', zh: '請靠右邊停。', en: 'Please pull over on the right side.' },
        { jp: 'あの建物の前で止めてください。', say: 'あのたてもののまえでとめてください。', ruby: 'あの<ruby>建物<rt>たてもの</rt></ruby>の<ruby>前<rt>まえ</rt></ruby>で<ruby>止<rt>と</rt></ruby>めてください。', zh: '請在那棟建築物前面停。', en: 'Please stop in front of that building.' },
        { jp: 'ここで降ります。', say: 'ここでおります。', ruby: 'ここで<ruby>降<rt>お</rt></ruby>ります。', zh: '我在這裡下車。', en: "I'll get out here." }
      ]
    },
    {
      title: '間違えた時 · If you missed it',
      items: [
        { jp: 'すみません、通り過ぎました。', say: 'すみません、とおりすぎました。', ruby: 'すみません、<ruby>通<rt>とお</rt></ruby>り<ruby>過<rt>す</rt></ruby>ぎました。', zh: '不好意思，開過頭了。', en: 'Sorry, we passed it.' },
        { jp: '戻れますか？', say: 'もどれますか？', ruby: '<ruby>戻<rt>もど</rt></ruby>れますか？', zh: '可以回去嗎？', en: 'Can we go back?' },
        { jp: 'Uターンできますか？', ruby: 'Uターンできますか？', zh: '可以迴轉嗎？', en: 'Can you make a U-turn?' },
        { jp: '安全なところで止めてください。', say: 'あんぜんなところでとめてください。', ruby: '<ruby>安全<rt>あんぜん</rt></ruby>なところで<ruby>止<rt>と</rt></ruby>めてください。', zh: '請在安全的地方停。', en: 'Please stop somewhere safe.' }
      ]
    }
  ]
}
