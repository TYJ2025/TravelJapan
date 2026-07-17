// 支払い方法とセルフレジ — payment choices and asking for help at self-checkout.
export const paymentMethods = {
  id: 'payment-and-self-checkout',
  title: 'Payment & Self-Checkout',
  titleJp: '支払い方法とセルフレジ',
  emoji: '💳',
  staffAvatar: '🛒',
  staffLabel: '店員 · Store Staff',
  description: 'Confirm cashless payment methods, use a transport IC card, and ask for help at a self-checkout.',
  lines: [
    { speaker: 'staff', jp: 'セルフレジをご利用ですか？ お困りでしたらお手伝いします。', say: 'セルフレジをごりようですか？ おこまりでしたらおてつだいします。', ruby: 'セルフレジをご<ruby>利用<rt>りよう</rt></ruby>ですか？ お<ruby>困<rt>こま</rt></ruby>りでしたらお<ruby>手伝<rt>てつだ</rt></ruby>いします。', romaji: 'Serufu reji o go-riyō desu ka? Okomari deshitara otetsudai shimasu.', zh: '您要使用自助結帳嗎？如果有困難，我可以協助。', en: 'Are you using self-checkout? I can help if you have any trouble.' },
    { speaker: 'you', jp: 'Suicaで払えますか？', say: 'スイカではらえますか？', ruby: 'Suicaで<ruby>払<rt>はら</rt></ruby>えますか？', romaji: 'Suica de haraemasu ka?', zh: '可以用 Suica 付款嗎？', en: 'Can I pay with Suica?' },
    { speaker: 'staff', jp: 'はい、交通系ICカードでお支払いいただけます。画面で「電子マネー」を選んでください。', say: 'はい、こうつうけいアイシーカードでおしはらいいただけます。がめんででんしマネーをえらんでください。', ruby: 'はい、<ruby>交通系<rt>こうつうけい</rt></ruby>ICカードでお<ruby>支払<rt>しはら</rt></ruby>いいただけます。<ruby>画面<rt>がめん</rt></ruby>で「<ruby>電子<rt>でんし</rt></ruby>マネー」を<ruby>選<rt>えら</rt></ruby>んでください。', romaji: 'Hai, kōtsūkei ai shī kādo de oshiharai itadakemasu. Gamen de denshi manē o erande kudasai.', zh: '可以，您可用交通系 IC 卡付款。請在畫面選擇「電子錢包」。', en: 'Yes, you can pay with a transportation IC card. Please select “electronic money” on the screen.' },
    { speaker: 'you', jp: 'この商品のバーコードが読み取れません。', say: 'このしょうひんのバーコードがよみとれません。', ruby: 'この<ruby>商品<rt>しょうひん</rt></ruby>のバーコードが<ruby>読<rt>よ</rt></ruby>み<ruby>取<rt>と</rt></ruby>れません。', romaji: 'Kono shōhin no bākōdo ga yomitor emasen.', zh: '這個商品的條碼掃不出來。', en: 'The barcode on this item will not scan.' },
    { speaker: 'staff', jp: 'こちらのスキャナーで、バーコードをもう一度ゆっくり読み取ってみてください。', say: 'こちらのスキャナーで、バーコードをもういちどゆっくりよみとってみてください。', ruby: 'こちらのスキャナーで、バーコードをもう<ruby>一度<rt>いちど</rt></ruby>ゆっくり<ruby>読<rt>よ</rt></ruby>み<ruby>取<rt>と</rt></ruby>ってみてください。', romaji: 'Kochira no sukyanā de, bākōdo o mō ichido yukkuri yomitotte mite kudasai.', zh: '請用這邊的掃描器，再慢慢掃一次條碼。', en: 'Please try scanning the barcode again slowly with this scanner.' },
    { speaker: 'you', jp: '画面が進みません。店員さんを呼ぶボタンはどれですか？', say: 'がめんがすすみません。てんいんさんをよぶボタンわどれですか？', ruby: '<ruby>画面<rt>がめん</rt></ruby>が<ruby>進<rt>すす</rt></ruby>みません。<ruby>店員<rt>てんいん</rt></ruby>さんを<ruby>呼<rt>よ</rt></ruby>ぶボタンはどれですか？', romaji: 'Gamen ga susumimasen. Tenin-san o yobu botan wa dore desu ka?', zh: '畫面無法繼續。叫店員的按鈕是哪一個？', en: 'The screen will not proceed. Which button calls a staff member?' },
    { speaker: 'staff', jp: '右下の「係員呼出」を押してください。すぐに伺います。', say: 'みぎしたのかかりいんよびだしをおしてください。すぐにうかがいます。', ruby: '<ruby>右下<rt>みぎした</rt></ruby>の「<ruby>係員呼出<rt>かかりいんよびだし</rt></ruby>」を<ruby>押<rt>お</rt></ruby>してください。すぐに<ruby>伺<rt>うかが</rt></ruby>います。', romaji: 'Migishita no kakariin yobidashi o oshite kudasai. Sugu ni ukagaimasu.', zh: '請按右下角的「呼叫服務人員」。我馬上過去。', en: 'Please press “call attendant” at the lower right. I will come right away.' },
    { speaker: 'you', jp: 'クレジットカードでも払えますか？', say: 'クレジットカードでもはらえますか？', ruby: 'クレジットカードでも<ruby>払<rt>はら</rt></ruby>えますか？', romaji: 'Kurejitto kādo demo haraemasu ka?', zh: '也可以用信用卡付款嗎？', en: 'Can I also pay by credit card?' },
    { speaker: 'staff', jp: 'はい、カード払いを選んで、タッチまたは差し込みをしてください。', say: 'はい、カードばらいをえらんで、タッチまたわさしこみをしてください。', ruby: 'はい、カード<ruby>払<rt>ばら</rt></ruby>いを<ruby>選<rt>えら</rt></ruby>んで、タッチまたは<ruby>差<rt>さ</rt></ruby>し<ruby>込<rt>こ</rt></ruby>みをしてください。', romaji: 'Hai, kādo barai o erande, tacchi matawa sashikomi o shite kudasai.', zh: '可以，請選擇刷卡付款，再感應或插卡。', en: 'Yes. Select card payment, then tap or insert your card.' },
    { speaker: 'you', jp: '支払いが完了したか、確認していただけますか？', say: 'しはらいがかんりょうしたか、かくにんしていただけますか？', ruby: '<ruby>支払<rt>しはら</rt></ruby>いが<ruby>完了<rt>かんりょう</rt></ruby>したか、<ruby>確認<rt>かくにん</rt></ruby>していただけますか？', romaji: 'Shiharai ga kanryō shita ka, kakunin shite itadakemasu ka?', zh: '可以幫我確認付款是否完成嗎？', en: 'Could you confirm whether my payment was completed?' },
    { speaker: 'staff', jp: 'はい、完了しています。レシートをお取りください。', say: 'はい、かんりょうしています。レシートをおとりください。', ruby: 'はい、<ruby>完了<rt>かんりょう</rt></ruby>しています。レシートをお<ruby>取<rt>と</rt></ruby>りください。', romaji: 'Hai, kanryō shite imasu. Reshīto o otori kudasai.', zh: '有，已完成。請取走收據。', en: 'Yes, it is complete. Please take your receipt.' },
    { speaker: 'you', jp: 'ありがとうございます。', ruby: 'ありがとうございます。', romaji: 'Arigatō gozaimasu.', zh: '謝謝。', en: 'Thank you.' }
  ],
  phrases: [
    { title: '支払い方法 · Payment methods', items: [
      { jp: 'Suicaで払えますか？', ruby: 'Suicaで<ruby>払<rt>はら</rt></ruby>えますか？', zh: '可以用 Suica 付款嗎？', en: 'Can I pay with Suica?' },
      { jp: '交通系ICカードで払えますか？', say: 'こうつうけいアイシーカードではらえますか？', ruby: '<ruby>交通系<rt>こうつうけい</rt></ruby>ICカードで<ruby>払<rt>はら</rt></ruby>えますか？', zh: '可以用交通系 IC 卡付款嗎？', en: 'Can I pay with a transportation IC card?' },
      { jp: 'クレジットカードで払えますか？', say: 'クレジットカードではらえますか？', ruby: 'クレジットカードで<ruby>払<rt>はら</rt></ruby>えますか？', zh: '可以用信用卡付款嗎？', en: 'Can I pay by credit card?' },
      { jp: 'QRコード決済は使えますか？', say: 'キューアールコードけっさいわつかえますか？', ruby: 'QRコード<ruby>決済<rt>けっさい</rt></ruby>は<ruby>使<rt>つか</rt></ruby>えますか？', zh: '可以使用 QR code 支付嗎？', en: 'Can I use QR-code payment?' },
      { jp: '現金で払います。', say: 'げんきんではらいます。', ruby: '<ruby>現金<rt>げんきん</rt></ruby>で<ruby>払<rt>はら</rt></ruby>います。', zh: '我用現金付款。', en: 'I will pay in cash.' }
    ] },
    { title: 'セルフレジ · Self-checkout', items: [
      { jp: 'セルフレジの使い方を教えてください。', say: 'セルフレジのつかいかたをおしえてください。', ruby: 'セルフレジの<ruby>使<rt>つか</rt></ruby>い<ruby>方<rt>かた</rt></ruby>を<ruby>教<rt>おし</rt></ruby>えてください。', zh: '請告訴我自助結帳的使用方式。', en: 'Please tell me how to use the self-checkout.' },
      { jp: 'バーコードが読み取れません。', say: 'バーコードがよみとれません。', ruby: 'バーコードが<ruby>読<rt>よ</rt></ruby>み<ruby>取<rt>と</rt></ruby>れません。', zh: '條碼掃不出來。', en: 'The barcode will not scan.' },
      { jp: '商品を取り消したいです。', say: 'しょうひんをとりけしたいです。', ruby: '<ruby>商品<rt>しょうひん</rt></ruby>を<ruby>取<rt>と</rt></ruby>り<ruby>消<rt>け</rt></ruby>したいです。', zh: '我想取消這個商品。', en: 'I would like to remove this item.' },
      { jp: '店員さんを呼ぶボタンはどれですか？', say: 'てんいんさんをよぶボタンわどれですか？', ruby: '<ruby>店員<rt>てんいん</rt></ruby>さんを<ruby>呼<rt>よ</rt></ruby>ぶボタンはどれですか？', zh: '叫店員的按鈕是哪一個？', en: 'Which button calls a staff member?' },
      { jp: '画面が進みません。', say: 'がめんがすすみません。', ruby: '<ruby>画面<rt>がめん</rt></ruby>が<ruby>進<rt>すす</rt></ruby>みません。', zh: '畫面無法繼續。', en: 'The screen will not proceed.' }
    ] },
    { title: 'トラブル · Payment problems', items: [
      { jp: 'カードが読み取れません。', say: 'カードがよみとれません。', ruby: 'カードが<ruby>読<rt>よ</rt></ruby>み<ruby>取<rt>と</rt></ruby>れません。', zh: '卡片讀不到。', en: 'My card will not read.' },
      { jp: '支払いが完了したか確認したいです。', say: 'しはらいがかんりょうしたかかくにんしたいです。', ruby: '<ruby>支払<rt>しはら</rt></ruby>いが<ruby>完了<rt>かんりょう</rt></ruby>したか<ruby>確認<rt>かくにん</rt></ruby>したいです。', zh: '我想確認付款是否完成。', en: 'I would like to confirm whether the payment was completed.' },
      { jp: '別の支払い方法に変えられますか？', say: 'べつのしはらいほうほうにかえられますか？', ruby: '<ruby>別<rt>べつ</rt></ruby>の<ruby>支払<rt>しはら</rt></ruby>い<ruby>方法<rt>ほうほう</rt></ruby>に<ruby>変<rt>か</rt></ruby>えられますか？', zh: '可以換成其他付款方式嗎？', en: 'Can I change to another payment method?' },
      { jp: 'レシートをください。', ruby: 'レシートをください。', zh: '請給我收據。', en: 'Please give me a receipt.' }
    ] },
    { title: 'ICカード · IC card', items: [
      { jp: 'ICカードにチャージできますか？', say: 'アイシーカードにチャージできますか？', ruby: 'ICカードにチャージできますか？', zh: '可以幫 IC 卡儲值嗎？', en: 'Can I top up my IC card?' },
      { jp: '残高を確認したいです。', say: 'ざんだかをかくにんしたいです。', ruby: '<ruby>残高<rt>ざんだか</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>したいです。', zh: '我想確認餘額。', en: 'I would like to check the balance.' },
      { jp: 'タッチする場所はどこですか？', say: 'タッチするばしょわどこですか？', ruby: 'タッチする<ruby>場所<rt>ばしょ</rt></ruby>はどこですか？', zh: '感應的位置在哪裡？', en: 'Where do I tap?' },
      { jp: 'この店で使えますか？', say: 'このみせでつかえますか？', ruby: 'この<ruby>店<rt>みせ</rt></ruby>で<ruby>使<rt>つか</rt></ruby>えますか？', zh: '這家店可以使用嗎？', en: 'Can I use it at this store?' }
    ] }
  ]
}
