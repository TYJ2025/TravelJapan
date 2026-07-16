// ドラッグストアで買い物 — shopping for cosmetics, skincare and daily essentials.
export const drugstore = {
  id: 'drugstore-shopping',
  title: 'Drugstore & Cosmetics',
  titleJp: 'ドラッグストアで買い物',
  emoji: '🧴',
  staffAvatar: '🧴',
  staffLabel: '店員 · Drugstore Staff',
  description: 'Find skincare, cosmetics and travel essentials, try testers, and complete tax-free shopping.',
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
      jp: 'すみません、クレンジングはどこですか？',
      say: 'すみません、クレンジングわどこですか？',
      ruby: 'すみません、クレンジングはどこですか？',
      romaji: 'Sumimasen, kurenjingu wa doko desu ka?',
      zh: '不好意思，卸妝產品在哪裡？',
      en: 'Excuse me, where is the cleansing section?'
    },
    {
      speaker: 'staff',
      jp: 'スキンケア売り場は、あちらです。',
      say: 'スキンケアうりばわ、あちらです。',
      ruby: 'スキンケア<ruby>売<rt>う</rt></ruby>り<ruby>場<rt>ば</rt></ruby>は、あちらです。',
      romaji: 'Sukin kea uriba wa, achira desu.',
      zh: '保養品區在那邊。',
      en: 'The skincare section is over there.'
    },
    {
      speaker: 'you',
      jp: '敏感肌用の化粧水を探しています。',
      say: 'びんかんはだようのけしょうすいをさがしています。',
      ruby: '<ruby>敏感肌用<rt>びんかんはだよう</rt></ruby>の<ruby>化粧水<rt>けしょうすい</rt></ruby>を<ruby>探<rt>さが</rt></ruby>しています。',
      romaji: 'Binkan hada-yō no keshōsui o sagashite imasu.',
      zh: '我在找敏感肌適用的化妝水。',
      en: 'I am looking for toner for sensitive skin.'
    },
    {
      speaker: 'staff',
      jp: 'こちらはいかがですか？無香料のタイプです。',
      say: 'こちらわいかがですか？むこうりょうのタイプです。',
      ruby: 'こちらはいかがですか？<ruby>無香料<rt>むこうりょう</rt></ruby>のタイプです。',
      romaji: 'Kochira wa ikaga desu ka? Mukōryō no taipu desu.',
      zh: '這款如何？是無香料型。',
      en: 'How about this one? It is fragrance-free.'
    },
    {
      speaker: 'you',
      jp: 'テスターはありますか？',
      say: 'テスターわありますか？',
      ruby: 'テスターはありますか？',
      romaji: 'Tesutā wa arimasu ka?',
      zh: '有試用品嗎？',
      en: 'Is there a tester?'
    },
    {
      speaker: 'staff',
      jp: 'はい、こちらでお試しいただけます。',
      say: 'はい、こちらでおためしいただけます。',
      ruby: 'はい、こちらでお<ruby>試<rt>ため</rt></ruby>しいただけます。',
      romaji: 'Hai, kochira de otameshi itadakemasu.',
      zh: '有，可以在這裡試用。',
      en: 'Yes, you may try it here.'
    },
    {
      speaker: 'you',
      jp: 'ありがとうございます。この日焼け止めは顔にも使えますか？',
      say: 'ありがとうございます。このひやけどめわかおにもつかえますか？',
      ruby: 'ありがとうございます。この<ruby>日焼<rt>ひや</rt></ruby>け<ruby>止<rt>ど</rt></ruby>めは<ruby>顔<rt>かお</rt></ruby>にも<ruby>使<rt>つか</rt></ruby>えますか？',
      romaji: 'Arigatō gozaimasu. Kono hiyake-dome wa kao ni mo tsukaemasu ka?',
      zh: '謝謝。這款防曬也可以擦臉嗎？',
      en: 'Thank you. Can I use this sunscreen on my face too?'
    },
    {
      speaker: 'staff',
      jp: 'はい、顔と体の両方に使えます。',
      say: 'はい、かおとからだのりょうほうにつかえます。',
      ruby: 'はい、<ruby>顔<rt>かお</rt></ruby>と<ruby>体<rt>からだ</rt></ruby>の<ruby>両方<rt>りょうほう</rt></ruby>に<ruby>使<rt>つか</rt></ruby>えます。',
      romaji: 'Hai, kao to karada no ryōhō ni tsukaemasu.',
      zh: '可以，臉和身體都能用。',
      en: 'Yes, you can use it on both your face and body.'
    },
    {
      speaker: 'you',
      jp: 'では、これとマスカラを一つずつお願いします。',
      say: 'では、これとマスカラをひとつずつおねがいします。',
      ruby: 'では、これとマスカラを<ruby>一<rt>ひと</rt></ruby>つずつお<ruby>願<rt>ねが</rt></ruby>いします。',
      romaji: 'Dewa, kore to masukara o hitotsu zutsu onegai shimasu.',
      zh: '那麼，這個和睫毛膏各一個，麻煩您。',
      en: 'Then, one of this and one mascara, please.'
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
      jp: 'はい、お願いします。パスポートはこちらです。',
      say: 'はい、おねがいします。パスポートはこちらです。',
      ruby: 'はい、お<ruby>願<rt>ねが</rt></ruby>いします。パスポートはこちらです。',
      romaji: 'Hai, onegai shimasu. Pasupōto wa kochira desu.',
      zh: '好，麻煩您。這是我的護照。',
      en: 'Yes, please. Here is my passport.'
    },
    {
      speaker: 'staff',
      jp: 'ありがとうございます。お会計は三千六百円です。',
      say: 'ありがとうございます。おかいけいわさんぜんろっぴゃくえんです。',
      ruby: 'ありがとうございます。お<ruby>会計<rt>かいけい</rt></ruby>は<ruby>三千六百円<rt>さんぜんろっぴゃくえん</rt></ruby>です。',
      romaji: 'Arigatō gozaimasu. Okaikei wa sanzen roppyaku en desu.',
      zh: '謝謝。一共是 3,600 日圓。',
      en: 'Thank you. Your total is 3,600 yen.'
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
      title: '商品を探す · Finding products',
      items: [
        { jp: 'クレンジングはどこですか？', ruby: 'クレンジングはどこですか？', zh: '卸妝產品在哪裡？', en: 'Where is the cleansing section?' },
        { jp: '敏感肌用はありますか？', say: 'びんかんはだようわありますか？', ruby: '<ruby>敏感肌用<rt>びんかんはだよう</rt></ruby>はありますか？', zh: '有敏感肌適用的嗎？', en: 'Do you have one for sensitive skin?' },
        { jp: '旅行用サイズはありますか？', say: 'りょこうようサイズわありますか？', ruby: '<ruby>旅行用<rt>りょこうよう</rt></ruby>サイズはありますか？', zh: '有旅行尺寸嗎？', en: 'Do you have a travel size?' },
        { jp: '詰め替え用はありますか？', say: 'つめかえようわありますか？', ruby: '<ruby>詰<rt>つ</rt></ruby>め<ruby>替<rt>か</rt></ruby>え<ruby>用<rt>よう</rt></ruby>はありますか？', zh: '有補充包嗎？', en: 'Do you have a refill pack?' }
      ]
    },
    {
      title: '試す・選ぶ · Testing and choosing',
      items: [
        { jp: 'テスターはありますか？', ruby: 'テスターはありますか？', zh: '有試用品嗎？', en: 'Is there a tester?' },
        { jp: '無香料のものはありますか？', say: 'むこうりょうのものわありますか？', ruby: '<ruby>無香料<rt>むこうりょう</rt></ruby>のものはありますか？', zh: '有無香料的嗎？', en: 'Do you have a fragrance-free one?' },
        { jp: 'ウォータープルーフですか？', ruby: 'ウォータープルーフですか？', zh: '這是防水的嗎？', en: 'Is it waterproof?' },
        { jp: 'この色を試してもいいですか？', say: 'このいろをためしてもいいですか？', ruby: 'この<ruby>色<rt>いろ</rt></ruby>を<ruby>試<rt>ため</rt></ruby>してもいいですか？', zh: '我可以試這個顏色嗎？', en: 'May I try this colour?' }
      ]
    },
    {
      title: '日用品 · Everyday essentials',
      items: [
        { jp: 'シャンプーを探しています。', ruby: 'シャンプーを<ruby>探<rt>さが</rt></ruby>しています。', zh: '我在找洗髮精。', en: 'I am looking for shampoo.' },
        { jp: '歯ブラシはどこですか？', say: 'はブラシわどこですか？', ruby: '<ruby>歯<rt>は</rt></ruby>ブラシはどこですか？', zh: '牙刷在哪裡？', en: 'Where are the toothbrushes?' },
        { jp: 'コンタクトレンズの洗浄液はありますか？', say: 'コンタクトレンズのせんじょうえきわありますか？', ruby: 'コンタクトレンズの<ruby>洗浄液<rt>せんじょうえき</rt></ruby>はありますか？', zh: '有隱形眼鏡清潔液嗎？', en: 'Do you have contact-lens solution?' },
        { jp: '生理用品はどこですか？', say: 'せいりようひんわどこですか？', ruby: '<ruby>生理用品<rt>せいりようひん</rt></ruby>はどこですか？', zh: '生理用品在哪裡？', en: 'Where are the sanitary products?' }
      ]
    },
    {
      title: '免税・会計 · Tax-free shopping and payment',
      items: [
        { jp: '免税できますか？', say: 'めんぜいできますか？', ruby: '<ruby>免税<rt>めんぜい</rt></ruby>できますか？', zh: '可以免稅嗎？', en: 'Is tax-free shopping available?' },
        { jp: 'パスポートを持っています。', ruby: 'パスポートを<ruby>持<rt>も</rt></ruby>っています。', zh: '我有帶護照。', en: 'I have my passport.' },
        { jp: 'クレジットカードで払えますか？', say: 'クレジットカードではらえますか？', ruby: 'クレジットカードで<ruby>払<rt>はら</rt></ruby>えますか？', zh: '可以用信用卡付款嗎？', en: 'Can I pay by credit card?' },
        { jp: 'レシートをお願いします。', ruby: 'レシートをお<ruby>願<rt>ねが</rt></ruby>いします。', zh: '麻煩給我收據。', en: 'The receipt, please.' }
      ]
    }
  ],
  menu: [
    {
      title: 'スキンケア · Skincare',
      items: [
        { emoji: '🫧', jp: 'クレンジング', ruby: 'クレンジング', romaji: 'kurenjingu', zh: '卸妝產品', en: 'cleansing product', desc: '可依卸妝油、卸妝乳、卸妝水或卸妝膏等質地選擇。' },
        { emoji: '💧', jp: '化粧水', say: 'けしょうすい', ruby: '<ruby>化粧水<rt>けしょうすい</rt></ruby>', romaji: 'keshōsui', zh: '化妝水', en: 'toner', desc: '日本藥妝店常有保濕、清爽、敏感肌與無香料等不同類型。' },
        { emoji: '🧴', jp: '乳液', say: 'にゅうえき', ruby: '<ruby>乳液<rt>にゅうえき</rt></ruby>', romaji: 'nyūeki', zh: '乳液', en: 'emulsion', desc: '通常用在化妝水後，協助保濕；可選清爽或滋潤型。' },
        { emoji: '✨', jp: '美容液', say: 'びようえき', ruby: '<ruby>美容液<rt>びようえき</rt></ruby>', romaji: 'biyōeki', zh: '精華液', en: 'serum', desc: '針對保濕、明亮感等保養需求的濃縮型產品。' },
        { emoji: '😷', jp: 'フェイスマスク', ruby: 'フェイスマスク', romaji: 'feisu masuku', zh: '面膜', en: 'face mask', desc: '單片與盒裝面膜都是常見伴手禮；可確認是否適合膚質。' },
        { emoji: '☀️', jp: '日焼け止め', say: 'ひやけどめ', ruby: '<ruby>日焼<rt>ひや</rt></ruby>け<ruby>止<rt>ど</rt></ruby>め', romaji: 'hiyake-dome', zh: '防曬乳', en: 'sunscreen', desc: '可依臉部、身體、防水或妝前使用等需求選擇。' }
      ]
    },
    {
      title: 'メイクアップ · Makeup',
      items: [
        { emoji: '🧴', jp: 'ファンデーション', ruby: 'ファンデーション', romaji: 'fandēshon', zh: '粉底', en: 'foundation', desc: '可先使用試用品確認色號與質地；常見粉餅、液態與氣墊型。' },
        { emoji: '🖍️', jp: 'コンシーラー', ruby: 'コンシーラー', romaji: 'konshīrā', zh: '遮瑕膏', en: 'concealer', desc: '用於局部遮瑕，可依膚色、黑眼圈或痘疤需求選擇。' },
        { emoji: '👁️', jp: 'アイシャドウ', ruby: 'アイシャドウ', romaji: 'ai shadō', zh: '眼影', en: 'eyeshadow', desc: '單色與多色盤皆常見，可先詢問是否有試用色。' },
        { emoji: '👁️', jp: 'マスカラ', ruby: 'マスカラ', romaji: 'masukara', zh: '睫毛膏', en: 'mascara', desc: '常標示纖長、濃密、捲翹或防水等特性。' },
        { emoji: '✏️', jp: 'アイブロウ', ruby: 'アイブロウ', romaji: 'ai burō', zh: '眉筆／眉彩', en: 'eyebrow makeup', desc: '筆狀、粉狀與染眉膠等形式不同，可依髮色選擇色號。' },
        { emoji: '💄', jp: 'リップクリーム', ruby: 'リップクリーム', romaji: 'rippu kurīmu', zh: '護唇膏', en: 'lip balm', desc: '常有無色、潤色、防曬與夜間修護等選擇。' }
      ]
    },
    {
      title: 'ヘア・バス用品 · Hair and bath products',
      items: [
        { emoji: '🧴', jp: 'シャンプー', ruby: 'シャンプー', romaji: 'shanpū', zh: '洗髮精', en: 'shampoo', desc: '可挑選旅行尺寸、補充包或針對乾燥／染髮等髮質需求的款式。' },
        { emoji: '🧴', jp: 'コンディショナー', ruby: 'コンディショナー', romaji: 'kondishonā', zh: '潤髮乳', en: 'conditioner', desc: '通常與同系列洗髮精搭配；包裝上也可能寫作「トリートメント」。' },
        { emoji: '🧼', jp: 'ボディソープ', ruby: 'ボディソープ', romaji: 'bodi sōpu', zh: '沐浴乳', en: 'body wash', desc: '有液體、泡沫與補充包等不同形式，常有多種香味。' },
        { emoji: '🪥', jp: '歯ブラシ', say: 'はブラシ', ruby: '<ruby>歯<rt>は</rt></ruby>ブラシ', romaji: 'ha burashi', zh: '牙刷', en: 'toothbrush', desc: '可選刷頭大小、軟硬度與旅行組；牙膏通常在同一區。' },
        { emoji: '🦷', jp: '歯磨き粉', say: 'はみがきこ', ruby: '<ruby>歯磨<rt>はみが</rt></ruby>き<ruby>粉<rt>こ</rt></ruby>', romaji: 'hamigakiko', zh: '牙膏', en: 'toothpaste', desc: '可選清新口氣、亮白或敏感牙齒用等日常護理類型。' },
        { emoji: '👁️', jp: 'コンタクトレンズ洗浄液', say: 'コンタクトレンズせんじょうえき', ruby: 'コンタクトレンズ<ruby>洗浄液<rt>せんじょうえき</rt></ruby>', romaji: 'kontakuto renzu senjōeki', zh: '隱形眼鏡清潔液', en: 'contact-lens solution', desc: '請確認適用鏡片類型與使用方式；可選旅行小瓶裝。' }
      ]
    },
    {
      title: '旅行の日用品 · Travel essentials',
      items: [
        { emoji: '🧻', jp: '生理用品', say: 'せいりようひん', ruby: '<ruby>生理用品<rt>せいりようひん</rt></ruby>', romaji: 'seiriyōhin', zh: '生理用品', en: 'sanitary products', desc: '常見衛生棉、衛生棉條與護墊；可依日用、夜用與吸收量選擇。' },
        { emoji: '😷', jp: 'マスク', ruby: 'マスク', romaji: 'masuku', zh: '口罩', en: 'face mask', desc: '常有不同尺寸、立體剪裁與獨立包裝，適合旅途中備用。' },
        { emoji: '🧼', jp: 'ウェットティッシュ', ruby: 'ウェットティッシュ', romaji: 'wetto tisshu', zh: '濕紙巾', en: 'wet wipes', desc: '有酒精與無酒精等選擇；可攜式小包適合旅行使用。' },
        { emoji: '🧻', jp: 'ティッシュ', ruby: 'ティッシュ', romaji: 'tisshu', zh: '衛生紙', en: 'tissues', desc: '可選盒裝或隨身包，旅行時很實用。' },
        { emoji: '🪥', jp: '綿棒', say: 'めんぼう', ruby: '<ruby>綿棒<rt>めんぼう</rt></ruby>', romaji: 'menbō', zh: '棉花棒', en: 'cotton swabs', desc: '小包裝與旅行組常見於日用品區。' },
        { emoji: '🩹', jp: '絆創膏', say: 'ばんそうこう', ruby: '<ruby>絆創膏<rt>ばんそうこう</rt></ruby>', romaji: 'bansōkō', zh: 'OK 繃／創可貼', en: 'adhesive bandages', desc: '小擦傷時可購買；若需要藥品或傷口建議，請改詢問藥劑師。' }
      ]
    }
  ]
}
