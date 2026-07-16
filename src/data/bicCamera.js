// ビックカメラで家電を買う — buying electronics and checking Taiwan compatibility.
export const bicCamera = {
  id: 'bic-camera-electronics',
  title: 'Bic Camera Electronics',
  titleJp: 'ビックカメラで家電を買う',
  emoji: '📷',
  staffAvatar: '📷',
  staffLabel: '店員 · Electronics Staff',
  description: 'Choose electronics, check Taiwan voltage and frequency compatibility, ask about adapters, warranties and tax-free shopping.',
  menuTabLabel: '品項 · Items',
  menuIntro: '🔊 聽發音 · 🎤 練習品項 · 點一下商品展開購買句型',
  menuPatternLabel: '購買句型 · Purchase patterns',
  lines: [
    {
      speaker: 'staff',
      jp: 'いらっしゃいませ。何かお探しですか？',
      say: 'いらっしゃいませ。なにかおさがしですか？',
      ruby: 'いらっしゃいませ。<ruby>何<rt>なに</rt></ruby>かお<ruby>探<rt>さが</rt></ruby>しですか？',
      romaji: 'Irasshaimase. Nanika osagashi desu ka?',
      zh: '歡迎光臨。您在找什麼嗎？',
      en: 'Welcome. Are you looking for something?'
    },
    {
      speaker: 'you',
      jp: '台湾で使えるヘアドライヤーを探しています。',
      say: 'たいわんでつかえるヘアドライヤーをさがしています。',
      ruby: '<ruby>台湾<rt>たいわん</rt></ruby>で<ruby>使<rt>つか</rt></ruby>えるヘアドライヤーを<ruby>探<rt>さが</rt></ruby>しています。',
      romaji: 'Taiwan de tsukaeru hea doraiyā o sagashite imasu.',
      zh: '我在找可以在台灣使用的吹風機。',
      en: 'I am looking for a hair dryer I can use in Taiwan.'
    },
    {
      speaker: 'staff',
      jp: '台湾は百十ボルト、六十ヘルツです。製品の定格表示を確認しましょう。',
      say: 'たいわんわひゃくじゅうボルト、ろくじゅうヘルツです。せいひんのていかくひょうじをかくにんしましょう。',
      ruby: '<ruby>台湾<rt>たいわん</rt></ruby>は<ruby>百十<rt>ひゃくじゅう</rt></ruby>ボルト、<ruby>六十<rt>ろくじゅう</rt></ruby>ヘルツです。<ruby>製品<rt>せいひん</rt></ruby>の<ruby>定格表示<rt>ていかくひょうじ</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>しましょう。',
      romaji: 'Taiwan wa hyaku-jū boruto, roku-jū herutsu desu. Seihin no teikaku-hyōji o kakunin shimashō.',
      zh: '台灣是 110V、60Hz。我們先確認產品的額定標示。',
      en: 'Taiwan uses 110 volts and 60 hertz. Let’s check the product rating.'
    },
    {
      speaker: 'you',
      jp: 'この商品にはAC百ボルトと書いてあります。台湾で使えますか？',
      say: 'このしょうひんにわエーシーひゃくボルトとかいてあります。たいわんでつかえますか？',
      ruby: 'この<ruby>商品<rt>しょうひん</rt></ruby>にはAC<ruby>百<rt>ひゃく</rt></ruby>ボルトと<ruby>書<rt>か</rt></ruby>いてあります。<ruby>台湾<rt>たいわん</rt></ruby>で<ruby>使<rt>つか</rt></ruby>えますか？',
      romaji: 'Kono shōhin ni wa AC hyaku boruto to kaite arimasu. Taiwan de tsukaemasu ka?',
      zh: '這個產品標示 AC 100V，可以在台灣使用嗎？',
      en: 'This product says AC 100V. Can I use it in Taiwan?'
    },
    {
      speaker: 'staff',
      jp: '百ボルト専用の製品は、台湾で使えると判断しないでください。メーカーの仕様をご確認ください。',
      say: 'ひゃくボルトせんようのせいひんわ、たいわんでつかえるとはんだんしないでください。メーカーのしようをごかくにんください。',
      ruby: '<ruby>百<rt>ひゃく</rt></ruby>ボルト<ruby>専用<rt>せんよう</rt></ruby>の<ruby>製品<rt>せいひん</rt></ruby>は、<ruby>台湾<rt>たいわん</rt></ruby>で<ruby>使<rt>つか</rt></ruby>えると<ruby>判断<rt>はんだん</rt></ruby>しないでください。メーカーの<ruby>仕様<rt>しよう</rt></ruby>をご<ruby>確認<rt>かくにん</rt></ruby>ください。',
      romaji: 'Hyaku boruto sen-yō no seihin wa, Taiwan de tsukaeru to handan shinaide kudasai. Mēkā no shiyō o go-kakunin kudasai.',
      zh: '只標示 100V 專用的產品，不要自行判定可在台灣使用。請確認原廠規格。',
      en: 'Do not assume a 100V-only product can be used in Taiwan. Please confirm the manufacturer’s specifications.'
    },
    {
      speaker: 'you',
      jp: 'では、AC百から二百四十ボルト、五十・六十ヘルツ対応のものはありますか？',
      say: 'では、エーシーひゃくからにひゃくよんじゅうボルト、ごじゅうろくじゅうヘルツたいおうのものわありますか？',
      ruby: 'では、AC<ruby>百<rt>ひゃく</rt></ruby>から<ruby>二百四十<rt>にひゃくよんじゅう</rt></ruby>ボルト、<ruby>五十<rt>ごじゅう</rt></ruby>・<ruby>六十<rt>ろくじゅう</rt></ruby>ヘルツ<ruby>対応<rt>たいおう</rt></ruby>のものはありますか？',
      romaji: 'Dewa, AC hyaku kara nihyaku yonjū boruto, gojū-rokujū herutsu taiō no mono wa arimasu ka?',
      zh: '那麼，有支援 AC 100–240V、50／60Hz 的嗎？',
      en: 'Then, do you have one that supports AC 100–240V and 50/60Hz?'
    },
    {
      speaker: 'staff',
      jp: 'はい、こちらは海外対応モデルです。使用前に本体と説明書の定格をもう一度ご確認ください。',
      say: 'はい、こちらわかいがいたいおうモデルです。しようまえにほんたいとせつめいしょのていかくをもういちどごかくにんください。',
      ruby: 'はい、こちらは<ruby>海外対応<rt>かいがいたいおう</rt></ruby>モデルです。<ruby>使用前<rt>しようまえ</rt></ruby>に<ruby>本体<rt>ほんたい</rt></ruby>と<ruby>説明書<rt>せつめいしょ</rt></ruby>の<ruby>定格<rt>ていかく</rt></ruby>をもう<ruby>一度<rt>いちど</rt></ruby>ご<ruby>確認<rt>かくにん</rt></ruby>ください。',
      romaji: 'Hai, kochira wa kaigai taiō moderu desu. Shiyō mae ni hontai to setsumeisho no teikaku o mō ichido go-kakunin kudasai.',
      zh: '有，這款是海外適用機型。使用前仍請再次確認機身和說明書上的額定規格。',
      en: 'Yes, this is an international-use model. Please check the rating on the product and manual again before use.'
    },
    {
      speaker: 'you',
      jp: '台湾のコンセントに、そのまま差し込めますか？',
      say: 'たいわんのコンセントに、そのままさしこめますか？',
      ruby: '<ruby>台湾<rt>たいわん</rt></ruby>のコンセントに、そのまま<ruby>差<rt>さ</rt></ruby>し<ruby>込<rt>こ</rt></ruby>めますか？',
      romaji: 'Taiwan no konsento ni, sono mama sashikomemasu ka?',
      zh: '可以直接插進台灣的插座嗎？',
      en: 'Can I plug it directly into a Taiwanese outlet?'
    },
    {
      speaker: 'staff',
      jp: 'プラグの形状もご確認ください。変換プラグは形状を変えるだけで、電圧は変えません。',
      say: 'プラグのけいじょうもごかくにんください。へんかんプラグわけいじょうをかえるだけで、でんあつわかえません。',
      ruby: 'プラグの<ruby>形状<rt>けいじょう</rt></ruby>もご<ruby>確認<rt>かくにん</rt></ruby>ください。<ruby>変換<rt>へんかん</rt></ruby>プラグは<ruby>形状<rt>けいじょう</rt></ruby>を<ruby>変<rt>か</rt></ruby>えるだけで、<ruby>電圧<rt>でんあつ</rt></ruby>は<ruby>変<rt>か</rt></ruby>えません。',
      romaji: 'Puragu no keijō mo go-kakunin kudasai. Henkan puragu wa keijō o kaeru dake de, denatsu wa kaemasen.',
      zh: '也請確認插頭形狀。轉接插頭只改變插頭形狀，不會改變電壓。',
      en: 'Please also check the plug shape. A plug adapter only changes the plug shape; it does not change the voltage.'
    },
    {
      speaker: 'you',
      jp: 'このモバイルバッテリーとUSB-Cケーブルもください。',
      say: 'このモバイルバッテリーとユーエスビーシーケーブルもください。',
      ruby: 'このモバイルバッテリーとUSB-Cケーブルもください。',
      romaji: 'Kono mobairu batterī to yū-esu-bī shī kēburu mo kudasai.',
      zh: '這個行動電源和 USB-C 線也請給我。',
      en: 'I will also take this power bank and USB-C cable.'
    },
    {
      speaker: 'staff',
      jp: 'かしこまりました。航空会社によってモバイルバッテリーの持ち込み規則が異なりますので、ご確認ください。',
      say: 'かしこまりました。こうくうがいしゃによってモバイルバッテリーのもちこみきそくがことなりますので、ごかくにんください。',
      ruby: 'かしこまりました。<ruby>航空会社<rt>こうくうがいしゃ</rt></ruby>によってモバイルバッテリーの<ruby>持<rt>も</rt></ruby>ち<ruby>込<rt>こ</rt></ruby>み<ruby>規則<rt>きそく</rt></ruby>が<ruby>異<rt>こと</rt></ruby>なりますので、ご<ruby>確認<rt>かくにん</rt></ruby>ください。',
      romaji: 'Kashikomarimashita. Kōkūgaisha ni yotte mobairu batterī no mochikomi kisoku ga kotonarimasu node, go-kakunin kudasai.',
      zh: '好的。各航空公司對行動電源的攜帶規則不同，請先確認。',
      en: 'Certainly. Rules for carrying power banks differ by airline, so please check with yours.'
    },
    {
      speaker: 'staff',
      jp: '免税手続きはなさいますか？',
      say: 'めんぜいてつづきわなさいますか？',
      ruby: '<ruby>免税手続<rt>めんぜいてつづ</rt></ruby>きはなさいますか？',
      romaji: 'Menzei tetsuzuki wa nasaimasu ka?',
      zh: '需要辦理免稅手續嗎？',
      en: 'Would you like to complete the tax-free procedure?'
    },
    {
      speaker: 'you',
      jp: 'はい、お願いします。海外保証があるかも確認したいです。',
      say: 'はい、おねがいします。かいがいほしょうがあるかもかくにんしたいです。',
      ruby: 'はい、お<ruby>願<rt>ねが</rt></ruby>いします。<ruby>海外保証<rt>かいがいほしょう</rt></ruby>があるかも<ruby>確認<rt>かくにん</rt></ruby>したいです。',
      romaji: 'Hai, onegai shimasu. Kaigai hoshō ga aru ka mo kakunin shitai desu.',
      zh: '好，麻煩您。我也想確認是否有國際保固。',
      en: 'Yes, please. I would also like to check whether it has an international warranty.'
    },
    {
      speaker: 'staff',
      jp: '保証の対象地域と条件は、こちらの保証書でご確認ください。',
      say: 'ほしょうのたいしょうちいきとじょうけんわ、こちらのほしょうしょでごかくにんください。',
      ruby: '<ruby>保証<rt>ほしょう</rt></ruby>の<ruby>対象地域<rt>たいしょうちいき</rt></ruby>と<ruby>条件<rt>じょうけん</rt></ruby>は、こちらの<ruby>保証書<rt>ほしょうしょ</rt></ruby>でご<ruby>確認<rt>かくにん</rt></ruby>ください。',
      romaji: 'Hoshō no taishō chiiki to jōken wa, kochira no hoshōsho de go-kakunin kudasai.',
      zh: '保固適用地區和條件，請查看這份保固書。',
      en: 'Please check this warranty document for the covered regions and conditions.'
    },
    {
      speaker: 'you',
      jp: 'クレジットカードでお願いします。',
      ruby: 'クレジットカードでお<ruby>願<rt>ねが</rt></ruby>いします。',
      romaji: 'Kurejitto kādo de onegai shimasu.',
      zh: '我用信用卡付款。',
      en: 'By credit card, please.'
    }
  ],
  phrases: [
    {
      title: '電圧・周波数 · Voltage and frequency',
      items: [
        { jp: '台湾で使えますか？', say: 'たいわんでつかえますか？', ruby: '<ruby>台湾<rt>たいわん</rt></ruby>で<ruby>使<rt>つか</rt></ruby>えますか？', zh: '可以在台灣使用嗎？', en: 'Can I use it in Taiwan?' },
        { jp: '台湾は百十ボルト、六十ヘルツです。', say: 'たいわんわひゃくじゅうボルト、ろくじゅうヘルツです。', ruby: '<ruby>台湾<rt>たいわん</rt></ruby>は<ruby>百十<rt>ひゃくじゅう</rt></ruby>ボルト、<ruby>六十<rt>ろくじゅう</rt></ruby>ヘルツです。', zh: '台灣是 110V、60Hz。', en: 'Taiwan uses 110 volts and 60 hertz.' },
        { jp: 'AC百から二百四十ボルト、五十・六十ヘルツ対応ですか？', say: 'エーシーひゃくからにひゃくよんじゅうボルト、ごじゅうろくじゅうヘルツたいおうですか？', ruby: 'AC<ruby>百<rt>ひゃく</rt></ruby>から<ruby>二百四十<rt>にひゃくよんじゅう</rt></ruby>ボルト、<ruby>五十<rt>ごじゅう</rt></ruby>・<ruby>六十<rt>ろくじゅう</rt></ruby>ヘルツ<ruby>対応<rt>たいおう</rt></ruby>ですか？', zh: '支援 AC 100–240V、50／60Hz 嗎？', en: 'Does it support AC 100–240V and 50/60Hz?' },
        { jp: '定格表示を見せてください。', say: 'ていかくひょうじをみせてください。', ruby: '<ruby>定格表示<rt>ていかくひょうじ</rt></ruby>を<ruby>見<rt>み</rt></ruby>せてください。', zh: '請讓我看額定規格標示。', en: 'Please show me the rating label.' }
      ]
    },
    {
      title: 'プラグ・変圧器 · Plugs and transformers',
      items: [
        { jp: '台湾のコンセントにそのまま差し込めますか？', say: 'たいわんのコンセントにそのままさしこめますか？', ruby: '<ruby>台湾<rt>たいわん</rt></ruby>のコンセントにそのまま<ruby>差<rt>さ</rt></ruby>し<ruby>込<rt>こ</rt></ruby>めますか？', zh: '可以直接插進台灣的插座嗎？', en: 'Can I plug it directly into a Taiwanese outlet?' },
        { jp: '変換プラグが必要ですか？', say: 'へんかんプラグがひつようですか？', ruby: '<ruby>変換<rt>へんかん</rt></ruby>プラグが<ruby>必要<rt>ひつよう</rt></ruby>ですか？', zh: '需要插頭轉接器嗎？', en: 'Do I need a plug adapter?' },
        { jp: '変圧器が必要ですか？', say: 'へんあつきがひつようですか？', ruby: '<ruby>変圧器<rt>へんあつき</rt></ruby>が<ruby>必要<rt>ひつよう</rt></ruby>ですか？', zh: '需要變壓器嗎？', en: 'Do I need a voltage transformer?' },
        { jp: '変換プラグは電圧を変えませんよね？', say: 'へんかんプラグわでんあつをかえませんよね？', ruby: '<ruby>変換<rt>へんかん</rt></ruby>プラグは<ruby>電圧<rt>でんあつ</rt></ruby>を<ruby>変<rt>か</rt></ruby>えませんよね？', zh: '轉接插頭不會改變電壓，對吧？', en: 'A plug adapter does not change the voltage, right?' }
      ]
    },
    {
      title: '商品・保証 · Product and warranty',
      items: [
        { jp: '海外対応モデルはありますか？', say: 'かいがいたいおうモデルわありますか？', ruby: '<ruby>海外対応<rt>かいがいたいおう</rt></ruby>モデルはありますか？', zh: '有海外適用機型嗎？', en: 'Do you have an international-use model?' },
        { jp: '海外保証はありますか？', say: 'かいがいほしょうわありますか？', ruby: '<ruby>海外保証<rt>かいがいほしょう</rt></ruby>はありますか？', zh: '有國際保固嗎？', en: 'Is there an international warranty?' },
        { jp: '台湾で修理できますか？', say: 'たいわんでしゅうりできますか？', ruby: '<ruby>台湾<rt>たいわん</rt></ruby>で<ruby>修理<rt>しゅうり</rt></ruby>できますか？', zh: '可以在台灣維修嗎？', en: 'Can it be repaired in Taiwan?' },
        { jp: '展示品ではなく、新品をください。', say: 'てんじひんでわなく、しんぴんをください。', ruby: '<ruby>展示品<rt>てんじひん</rt></ruby>ではなく、<ruby>新品<rt>しんぴん</rt></ruby>をください。', zh: '不要展示品，請給我新品。', en: 'Please give me a new one, not the display model.' }
      ]
    },
    {
      title: '旅行・会計 · Travel and checkout',
      items: [
        { jp: 'モバイルバッテリーの持ち込み規則を確認したいです。', say: 'モバイルバッテリーのもちこみきそくをかくにんしたいです。', ruby: 'モバイルバッテリーの<ruby>持<rt>も</rt></ruby>ち<ruby>込<rt>こ</rt></ruby>み<ruby>規則<rt>きそく</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>したいです。', zh: '我想確認行動電源的攜帶規則。', en: 'I would like to check the rules for carrying a power bank.' },
        { jp: '免税手続きはできますか？', say: 'めんぜいてつづきわできますか？', ruby: '<ruby>免税手続<rt>めんぜいてつづ</rt></ruby>きはできますか？', zh: '可以辦理免稅手續嗎？', en: 'Can I complete the tax-free procedure?' },
        { jp: 'パスポートを持っています。', ruby: 'パスポートを<ruby>持<rt>も</rt></ruby>っています。', zh: '我有帶護照。', en: 'I have my passport.' },
        { jp: 'クレジットカードで払えますか？', say: 'クレジットカードではらえますか？', ruby: 'クレジットカードで<ruby>払<rt>はら</rt></ruby>えますか？', zh: '可以用信用卡付款嗎？', en: 'Can I pay by credit card?' }
      ]
    }
  ],
  menu: [
    {
      title: 'スマホ・充電 · Phones and charging',
      items: [
        { emoji: '📱', jp: 'SIMフリースマートフォン', ruby: 'SIMフリースマートフォン', romaji: 'shimu furī sumātofon', zh: '無鎖 SIM 智慧型手機', en: 'SIM-free smartphone', desc: '購買前可確認語言、頻段、保固地區與台灣電信服務是否適用。' },
        { emoji: '🔋', jp: 'モバイルバッテリー', ruby: 'モバイルバッテリー', romaji: 'mobairu batterī', zh: '行動電源', en: 'power bank', desc: '航空公司對攜帶與使用規則可能不同，登機前應向所搭航空公司確認。' },
        { emoji: '🔌', jp: 'USB充電器', say: 'ユーエスビーじゅうでんき', ruby: 'USB<ruby>充電器<rt>じゅうでんき</rt></ruby>', romaji: 'yū-esu-bī jūdenki', zh: 'USB 充電器', en: 'USB charger', desc: '查看充電器 INPUT 標示是否涵蓋使用地的電壓與頻率。' },
        { emoji: '🔗', jp: 'USB-Cケーブル', ruby: 'USB-Cケーブル', romaji: 'yū-esu-bī shī kēburu', zh: 'USB-C 線材', en: 'USB-C cable', desc: '可依充電功率、資料傳輸與長度選擇，並確認接頭規格。' },
        { emoji: '🟣', jp: 'ワイヤレス充電器', ruby: 'ワイヤレス充電器', romaji: 'waiyaresu jūdenki', zh: '無線充電器', en: 'wireless charger', desc: '請確認手機是否支援該無線充電標準與所需的電源供應器。' },
        { emoji: '🔊', jp: 'Bluetoothスピーカー', ruby: 'Bluetoothスピーカー', romaji: 'burūtūsu supīkā', zh: '藍牙喇叭', en: 'Bluetooth speaker', desc: '可確認充電規格、語言設定與電池攜帶限制。' }
      ]
    },
    {
      title: 'カメラ・音響 · Cameras and audio',
      items: [
        { emoji: '📷', jp: 'デジタルカメラ', ruby: 'デジタルカメラ', romaji: 'dejitaru kamera', zh: '數位相機', en: 'digital camera', desc: '可比較鏡頭、感光元件、介面語言、保固區域與充電器規格。' },
        { emoji: '🔍', jp: '交換レンズ', say: 'こうかんレンズ', ruby: '<ruby>交換<rt>こうかん</rt></ruby>レンズ', romaji: 'kōkan renzu', zh: '可換鏡頭', en: 'interchangeable lens', desc: '購買前務必確認相機機身的鏡頭接環是否相容。' },
        { emoji: '💾', jp: 'SDカード', ruby: 'SDカード', romaji: 'esudī kādo', zh: 'SD 記憶卡', en: 'SD card', desc: '可依容量、讀寫速度與相機錄影格式選擇。' },
        { emoji: '📐', jp: '三脚', say: 'さんきゃく', ruby: '<ruby>三脚<rt>さんきゃく</rt></ruby>', romaji: 'sankyaku', zh: '三腳架', en: 'tripod', desc: '可確認承重、收納長度與相機固定螺絲規格。' },
        { emoji: '🎧', jp: 'ワイヤレスイヤホン', ruby: 'ワイヤレスイヤホン', romaji: 'waiyaresu iyahon', zh: '真無線耳機', en: 'wireless earbuds', desc: '可試戴貼合度，並確認編解碼、降噪與充電規格。' },
        { emoji: '🎧', jp: 'ノイズキャンセリングヘッドホン', ruby: 'ノイズキャンセリングヘッドホン', romaji: 'noizu kyanseringu heddohon', zh: '降噪耳機', en: 'noise-cancelling headphones', desc: '旅行與飛機上常用，可比較配戴舒適度、續航與降噪模式。' }
      ]
    },
    {
      title: '生活家電 · Home and travel appliances',
      items: [
        { emoji: '💨', jp: '海外対応ヘアドライヤー', say: 'かいがいたいおうヘアドライヤー', ruby: '<ruby>海外対応<rt>かいがいたいおう</rt></ruby>ヘアドライヤー', romaji: 'kaigai taiō hea doraiyā', zh: '海外適用吹風機', en: 'international-use hair dryer', desc: '使用前仍須確認機身銘板的電壓、頻率與切換方式；勿只憑插頭形狀判斷。' },
        { emoji: '🪒', jp: '電気シェーバー', say: 'でんきシェーバー', ruby: '<ruby>電気<rt>でんき</rt></ruby>シェーバー', romaji: 'denki shēbā', zh: '電動刮鬍刀', en: 'electric shaver', desc: '充電式機型請確認充電器的 INPUT 額定與海外保固。' },
        { emoji: '🪥', jp: '電動歯ブラシ', say: 'でんどうはブラシ', ruby: '<ruby>電動<rt>でんどう</rt></ruby><ruby>歯<rt>は</rt></ruby>ブラシ', romaji: 'dendō ha burashi', zh: '電動牙刷', en: 'electric toothbrush', desc: '可確認充電座是否支援 100–240V，以及刷頭在台灣是否容易購得。' },
        { emoji: '🍚', jp: '炊飯器', say: 'すいはんき', ruby: '<ruby>炊飯器<rt>すいはんき</rt></ruby>', romaji: 'suihanki', zh: '電子鍋', en: 'rice cooker', desc: '高耗電家電務必確認電壓、頻率、功率與海外保固；不可自行假定相容。' },
        { emoji: '🫖', jp: '電気ケトル', say: 'でんきケトル', ruby: '<ruby>電気<rt>でんき</rt></ruby>ケトル', romaji: 'denki ketoru', zh: '電熱水壺', en: 'electric kettle', desc: '高耗電家電，需逐一核對額定電壓、頻率與變壓器容量是否合適。' },
        { emoji: '💧', jp: '加湿器', say: 'かしつき', ruby: '<ruby>加湿器<rt>かしつき</rt></ruby>', romaji: 'kashitsuki', zh: '加濕器', en: 'humidifier', desc: '馬達或加熱元件的家電，應確認 50／60Hz 與電壓相容性。' }
      ]
    },
    {
      title: '電源・変換用品 · Power and conversion',
      items: [
        { emoji: '🔄', jp: '変換プラグ', say: 'へんかんプラグ', ruby: '<ruby>変換<rt>へんかん</rt></ruby>プラグ', romaji: 'henkan puragu', zh: '插頭轉接器', en: 'plug adapter', desc: '只改變插頭形狀，不轉換電壓或頻率；請先確認器材的額定輸入。' },
        { emoji: '⚡', jp: '変圧器', say: 'へんあつき', ruby: '<ruby>変圧器<rt>へんあつき</rt></ruby>', romaji: 'henatsuki', zh: '變壓器', en: 'voltage transformer', desc: '選購時須確認輸入／輸出電壓、可承受功率與設備相容性；頻率問題須另行確認。' },
        { emoji: '🔌', jp: 'ACアダプター', ruby: 'ACアダプター', romaji: 'ē-shī adaputā', zh: 'AC 電源供應器', en: 'AC adapter', desc: '查看 INPUT 是否標示 AC100–240V、50/60Hz；不要只看輸出端規格。' },
        { emoji: '🔌', jp: '電源タップ', say: 'でんげんタップ', ruby: '<ruby>電源<rt>でんげん</rt></ruby>タップ', romaji: 'dengen tappu', zh: '延長插座', en: 'power strip', desc: '確認插頭形狀、最大額定功率與是否適合旅行目的地。' },
        { emoji: '🔋', jp: 'USB電源タップ', say: 'ユーエスビーでんげんタップ', ruby: 'USB<ruby>電源<rt>でんげん</rt></ruby>タップ', romaji: 'yū-esu-bī dengen tappu', zh: '附 USB 延長插座', en: 'USB power strip', desc: '請確認整體 INPUT 額定、USB 輸出功率與各孔合計負載。' },
        { emoji: '🌍', jp: '海外旅行用変圧器', say: 'かいがいりょこうようへんあつき', ruby: '<ruby>海外旅行用<rt>かいがいりょこうよう</rt></ruby><ruby>変圧器<rt>へんあつき</rt></ruby>', romaji: 'kaigai ryokō-yō henatsuki', zh: '旅行用變壓器', en: 'travel voltage transformer', desc: '請向店員出示欲使用設備的銘板，確認電壓、頻率與瓦數是否全部相符。' }
      ]
    }
  ]
}
