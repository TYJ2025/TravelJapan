// 無印良品で買い物 — travel goods, everyday goods, clothes and food at MUJI.
export const muji = {
  id: 'muji-shopping',
  title: 'MUJI Shopping',
  titleJp: '無印良品で買い物',
  emoji: '🧺',
  staffAvatar: '🧺',
  staffLabel: '店員 · MUJI Staff',
  description: 'Find travel goods, clothing, skincare, household items and food at MUJI.',
  menuTabLabel: '品項 · Items',
  menuIntro: '🔊 聽發音 · 🎤 練習品項 · 點一下商品展開購買句型',
  menuPatternLabel: '購買句型 · Purchase patterns',
  lines: [
    { speaker: 'staff', jp: 'いらっしゃいませ。何かお探しですか？', say: 'いらっしゃいませ。なにかおさがしですか？', ruby: 'いらっしゃいませ。<ruby>何<rt>なに</rt></ruby>かお<ruby>探<rt>さが</rt></ruby>しですか？', romaji: 'Irasshaimase. Nanika osagashi desu ka?', zh: '歡迎光臨。您在找什麼嗎？', en: 'Welcome. Are you looking for something?' },
    { speaker: 'you', jp: '旅行用品を探しています。圧縮袋と仕分けケースはどこですか？', say: 'りょこうようひんをさがしています。あっしゅくぶくろとしわけケースわどこですか？', ruby: '<ruby>旅行用品<rt>りょこうようひん</rt></ruby>を<ruby>探<rt>さが</rt></ruby>しています。<ruby>圧縮袋<rt>あっしゅくぶくろ</rt></ruby>と<ruby>仕分<rt>しわ</rt></ruby>けケースはどこですか？', romaji: 'Ryokō yōhin o sagashite imasu. Asshuku bukuro to shiwake kēsu wa doko desu ka?', zh: '我在找旅行用品。壓縮袋和收納分裝袋在哪裡？', en: 'I am looking for travel goods. Where are compression bags and packing cubes?' },
    { speaker: 'staff', jp: 'トラベル用品は二階です。ハードキャリーケースもそちらにございます。', say: 'トラベルようひんわにかいです。ハードキャリーケースもそちらにございます。', ruby: 'トラベル<ruby>用品<rt>ようひん</rt></ruby>は<ruby>二階<rt>にかい</rt></ruby>です。ハードキャリーケースもそちらにございます。', romaji: 'Toraberu yōhin wa nikai desu. Hādo kyarī kēsu mo sochira ni gozaimasu.', zh: '旅行用品在二樓，硬殼行李箱也在那邊。', en: 'Travel goods are on the second floor. Hard-shell suitcases are there as well.' },
    { speaker: 'you', jp: 'このキャリーケースの容量を教えてください。', say: 'このキャリーケースのようりょうをおしえてください。', ruby: 'このキャリーケースの<ruby>容量<rt>ようりょう</rt></ruby>を<ruby>教<rt>おし</rt></ruby>えてください。', romaji: 'Kono kyarī kēsu no yōryō o oshiete kudasai.', zh: '請告訴我這個行李箱的容量。', en: 'Please tell me the capacity of this suitcase.' },
    { speaker: 'staff', jp: 'こちらは機内持ち込みの目安になる小さめのサイズです。航空会社の規定もご確認ください。', say: 'こちらわきないもちこみのめやすになるちいさめのサイズです。こうくうがいしゃのきていもごかくにんください。', ruby: 'こちらは<ruby>機内持<rt>きないも</rt></ruby>ち<ruby>込<rt>こ</rt></ruby>みの<ruby>目安<rt>めやす</rt></ruby>になる<ruby>小<rt>ちい</rt></ruby>さめのサイズです。<ruby>航空会社<rt>こうくうがいしゃ</rt></ruby>の<ruby>規定<rt>きてい</rt></ruby>もご<ruby>確認<rt>かくにん</rt></ruby>ください。', romaji: 'Kochira wa kinai mochikomi no meyasu ni naru chiisame no saizu desu. Kōkūgaisha no kitei mo go-kakunin kudasai.', zh: '這是可作為隨身行李參考的小尺寸；也請確認航空公司的規定。', en: 'This is a smaller size that can be a guide for carry-on baggage. Please also check your airline’s rules.' },
    { speaker: 'you', jp: '敏感肌用の化粧水も探しています。テスターはありますか？', say: 'びんかんはだようのけしょうすいもさがしています。テスターわありますか？', ruby: '<ruby>敏感肌用<rt>びんかんはだよう</rt></ruby>の<ruby>化粧水<rt>けしょうすい</rt></ruby>も<ruby>探<rt>さが</rt></ruby>しています。テスターはありますか？', romaji: 'Binkan hada-yō no keshōsui mo sagashite imasu. Tesutā wa arimasu ka?', zh: '我也在找敏感肌化妝水，有試用品嗎？', en: 'I am also looking for toner for sensitive skin. Is there a tester?' },
    { speaker: 'staff', jp: 'はい、スキンケア売り場にございます。お試しいただけます。', say: 'はい、スキンケアうりばにございます。おためしいただけます。', ruby: 'はい、スキンケア<ruby>売<rt>う</rt></ruby>り<ruby>場<rt>ば</rt></ruby>にございます。お<ruby>試<rt>ため</rt></ruby>しいただけます。', romaji: 'Hai, sukin kea uriba ni gozaimasu. Otameshi itadakemasu.', zh: '有，在保養品區。您可以試用。', en: 'Yes, it is in the skincare section. You may try it.' },
    { speaker: 'you', jp: '白いTシャツのMサイズはありますか？', say: 'しろいティーシャツのエムサイズわありますか？', ruby: '<ruby>白<rt>しろ</rt></ruby>いTシャツのMサイズはありますか？', romaji: 'Shiroi tī shatsu no emu saizu wa arimasu ka?', zh: '有白色 M 號 T 恤嗎？', en: 'Do you have this T-shirt in white, size M?' },
    { speaker: 'staff', jp: '在庫を確認します。試着室はあちらです。', say: 'ざいこをかくにんします。しちゃくしつわあちらです。', ruby: '<ruby>在庫<rt>ざいこ</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>します。<ruby>試着室<rt>しちゃくしつ</rt></ruby>はあちらです。', romaji: 'Zaiko o kakunin shimasu. Shichakushitsu wa achira desu.', zh: '我確認一下庫存。試衣間在那邊。', en: 'I will check the stock. The fitting rooms are over there.' },
    { speaker: 'you', jp: 'レトルトカレーも一つください。', say: 'レトルトカレーもひとつください。', ruby: 'レトルトカレーも<ruby>一<rt>ひと</rt></ruby>つください。', romaji: 'Retoruto karē mo hitotsu kudasai.', zh: '再給我一包調理包咖哩。', en: 'I will also take one pouch curry.' },
    { speaker: 'staff', jp: '食品売り場は一階です。レジで一緒にお会計できます。', say: 'しょくひんうりばわいっかいです。レジでいっしょにおかいけいできます。', ruby: '<ruby>食品売<rt>しょくひんう</rt></ruby>り<ruby>場<rt>ば</rt></ruby>は<ruby>一階<rt>いっかい</rt></ruby>です。レジで<ruby>一緒<rt>いっしょ</rt></ruby>にお<ruby>会計<rt>かいけい</rt></ruby>できます。', romaji: 'Shokuhin uriba wa ikkai desu. Reji de issho ni okaikei dekimasu.', zh: '食品區在一樓，可以在收銀台一起結帳。', en: 'The food section is on the first floor. You can pay for everything together at the register.' },
    { speaker: 'you', jp: '免税の手続きはできますか？', say: 'めんぜいのてつづきわできますか？', ruby: '<ruby>免税<rt>めんぜい</rt></ruby>の<ruby>手続<rt>てつづ</rt></ruby>きはできますか？', romaji: 'Menzei no tetsuzuki wa dekimasu ka?', zh: '可以辦理免稅手續嗎？', en: 'Can I complete the tax-free procedure?' },
    { speaker: 'staff', jp: '対象商品と条件を確認します。パスポートをお持ちください。', say: 'たいしょうしょうひんとじょうけんをかくにんします。パスポートをおもちください。', ruby: '<ruby>対象商品<rt>たいしょうしょうひん</rt></ruby>と<ruby>条件<rt>じょうけん</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>します。パスポートをお<ruby>持<rt>も</rt></ruby>ちください。', romaji: 'Taishō shōhin to jōken o kakunin shimasu. Pasupōto o omochi kudasai.', zh: '我會確認適用商品和條件。請出示護照。', en: 'I will check the eligible items and conditions. Please have your passport ready.' }
  ],
  menu: [
    { title: 'トラベル用品 · Travel', items: [
      { emoji: '🧳', jp: 'ハードキャリーケース', ruby: 'ハードキャリーケース', romaji: 'hādo kyarī kēsu', zh: '硬殼行李箱', en: 'hard-shell suitcase', desc: '旅行用硬殼行李箱；請依航空公司的尺寸規定確認。' },
      { emoji: '🧳', jp: '圧縮袋', say: 'あっしゅくぶくろ', ruby: '<ruby>圧縮袋<rt>あっしゅくぶくろ</rt></ruby>', romaji: 'asshuku bukuro', zh: '壓縮袋', en: 'compression bag', desc: '收納衣物、壓縮體積用的旅行用品。' },
      { emoji: '🧳', jp: '仕分けケース', say: 'しわけケース', ruby: '<ruby>仕分<rt>しわ</rt></ruby>けケース', romaji: 'shiwake kēsu', zh: '行李收納分裝袋', en: 'packing cube', desc: '把衣物、充電線或盥洗用品分門別類收納。' },
      { emoji: '🧳', jp: '吊るせるポーチ', say: 'つるせるポーチ', ruby: '<ruby>吊<rt>つ</rt></ruby>るせるポーチ', romaji: 'tsuruseru pōchi', zh: '可吊掛收納包', en: 'hanging pouch', desc: '可掛起使用的盥洗收納包。' },
      { emoji: '🧳', jp: 'ネッククッション', ruby: 'ネッククッション', romaji: 'nekku kusshon', zh: '頸枕', en: 'neck cushion', desc: '搭乘飛機或長途交通時使用的頸部靠枕。' }
    ] },
    { title: '衣料品 · Clothing', items: [
      { emoji: '👕', jp: 'Tシャツ', ruby: 'Tシャツ', romaji: 'tī shatsu', zh: 'T 恤', en: 'T-shirt', desc: '基本款短袖上衣。' },
      { emoji: '👔', jp: 'リネンシャツ', ruby: 'リネンシャツ', romaji: 'rinen shatsu', zh: '亞麻襯衫', en: 'linen shirt', desc: '以亞麻材質製成的襯衫。' },
      { emoji: '🛌', jp: 'パジャマ', ruby: 'パジャマ', romaji: 'pajama', zh: '睡衣', en: 'pajamas', desc: '居家或旅行住宿時穿的睡衣。' },
      { emoji: '🧦', jp: '靴下', say: 'くつした', ruby: '<ruby>靴下<rt>くつした</rt></ruby>', romaji: 'kutsushita', zh: '襪子', en: 'socks', desc: '各種長度與材質的襪子。' },
      { emoji: '👟', jp: '撥水スニーカー', say: 'はっすいスニーカー', ruby: '<ruby>撥水<rt>はっすい</rt></ruby>スニーカー', romaji: 'hassui sunīkā', zh: '防潑水運動鞋', en: 'water-repellent sneakers', desc: '具防潑水功能的運動鞋。' }
    ] },
    { title: 'ケア・日用品 · Care and everyday goods', items: [
      { emoji: '🧴', jp: '敏感肌用化粧水', say: 'びんかんはだようけしょうすい', ruby: '<ruby>敏感肌用<rt>びんかんはだよう</rt></ruby><ruby>化粧水<rt>けしょうすい</rt></ruby>', romaji: 'binkan hada-yō keshōsui', zh: '敏感肌化妝水', en: 'toner for sensitive skin', desc: '敏感肌保養系列的化妝水。' },
      { emoji: '🧴', jp: '敏感肌用乳液', say: 'びんかんはだようにゅうえき', ruby: '<ruby>敏感肌用<rt>びんかんはだよう</rt></ruby><ruby>乳液<rt>にゅうえき</rt></ruby>', romaji: 'binkan hada-yō nyūeki', zh: '敏感肌乳液', en: 'moisturizing milk for sensitive skin', desc: '敏感肌保養系列的乳液。' },
      { emoji: '🧴', jp: '日焼け止め', say: 'ひやけどめ', ruby: '<ruby>日焼<rt>ひや</rt></ruby>け<ruby>止<rt>ど</rt></ruby>め', romaji: 'hiyakedome', zh: '防曬乳', en: 'sunscreen', desc: '日常防曬用品。' },
      { emoji: '📦', jp: '収納ケース', say: 'しゅうのうケース', ruby: '<ruby>収納<rt>しゅうのう</rt></ruby>ケース', romaji: 'shūnō kēsu', zh: '收納盒', en: 'storage case', desc: '用於整理居家物品的收納容器。' },
      { emoji: '🖊️', jp: 'ゲルインキボールペン', ruby: 'ゲルインキボールペン', romaji: 'geru inki bōrupen', zh: '凝膠原子筆', en: 'gel ink ballpoint pen', desc: '文具區常見的凝膠原子筆。' }
    ] },
    { title: '食品 · Food', items: [
      { emoji: '🍛', jp: 'レトルトカレー', ruby: 'レトルトカレー', romaji: 'retoruto karē', zh: '調理包咖哩', en: 'pouch curry', desc: '加熱即可食用的咖哩調理包。' },
      { emoji: '🍝', jp: 'パスタソース', ruby: 'パスタソース', romaji: 'pasuta sōsu', zh: '義大利麵醬', en: 'pasta sauce', desc: '搭配義大利麵使用的調理醬。' },
      { emoji: '🍰', jp: '不揃いバウム', say: 'ふぞろいバウム', ruby: '<ruby>不揃<rt>ふぞろ</rt></ruby>いバウム', romaji: 'fuzoroi baumu', zh: '不規則年輪蛋糕', en: 'irregular baumkuchen', desc: '無印良品常見的年輪蛋糕點心。' },
      { emoji: '🍵', jp: 'お茶', say: 'おちゃ', ruby: 'お<ruby>茶<rt>ちゃ</rt></ruby>', romaji: 'ocha', zh: '茶飲', en: 'tea', desc: '茶葉或即飲茶。' },
      { emoji: '🍘', jp: 'お菓子', say: 'おかし', ruby: 'お<ruby>菓子<rt>かし</rt></ruby>', romaji: 'okashi', zh: '零食甜點', en: 'snacks and sweets', desc: '餅乾、糖果等零食。' }
    ] }
  ],
  phrases: [
    { title: '探す・在庫 · Finding items and stock', items: [
      { jp: '旅行用品はどこですか？', say: 'りょこうようひんわどこですか？', ruby: '<ruby>旅行用品<rt>りょこうようひん</rt></ruby>はどこですか？', zh: '旅行用品在哪裡？', en: 'Where are the travel goods?' },
      { jp: 'この商品の在庫はありますか？', say: 'このしょうひんのざいこわありますか？', ruby: 'この<ruby>商品<rt>しょうひん</rt></ruby>の<ruby>在庫<rt>ざいこ</rt></ruby>はありますか？', zh: '這個商品有庫存嗎？', en: 'Is this item in stock?' },
      { jp: 'ほかの色はありますか？', say: 'ほかのいろわありますか？', ruby: 'ほかの<ruby>色<rt>いろ</rt></ruby>はありますか？', zh: '有其他顏色嗎？', en: 'Do you have other colors?' },
      { jp: '別の店舗に在庫はありますか？', say: 'べつのてんぽにざいこわありますか？', ruby: '<ruby>別<rt>べつ</rt></ruby>の<ruby>店舗<rt>てんぽ</rt></ruby>に<ruby>在庫<rt>ざいこ</rt></ruby>はありますか？', zh: '其他分店有庫存嗎？', en: 'Is it in stock at another store?' }
    ] },
    { title: 'サイズ・試着 · Size and fitting', items: [
      { jp: 'Mサイズはありますか？', ruby: 'Mサイズはありますか？', zh: '有 M 號嗎？', en: 'Do you have size M?' },
      { jp: '試着できますか？', say: 'しちゃくできますか？', ruby: '<ruby>試着<rt>しちゃく</rt></ruby>できますか？', zh: '可以試穿嗎？', en: 'May I try it on?' },
      { jp: '試着室はどこですか？', say: 'しちゃくしつわどこですか？', ruby: '<ruby>試着室<rt>しちゃくしつ</rt></ruby>はどこですか？', zh: '試衣間在哪裡？', en: 'Where is the fitting room?' },
      { jp: 'もう少し大きいサイズはありますか？', say: 'もうすこしおおきいサイズわありますか？', ruby: 'もう<ruby>少<rt>すこ</rt></ruby>し<ruby>大<rt>おお</rt></ruby>きいサイズはありますか？', zh: '有再大一點的尺寸嗎？', en: 'Do you have a slightly larger size?' }
    ] },
    { title: '商品を確認 · Checking an item', items: [
      { jp: 'テスターはありますか？', ruby: 'テスターはありますか？', zh: '有試用品嗎？', en: 'Is there a tester?' },
      { jp: '素材を教えてください。', say: 'そざいをおしえてください。', ruby: '<ruby>素材<rt>そざい</rt></ruby>を<ruby>教<rt>おし</rt></ruby>えてください。', zh: '請告訴我材質。', en: 'Please tell me the material.' },
      { jp: '機内持ち込み用に使えますか？', say: 'きないもちこみようにつかえますか？', ruby: '<ruby>機内持<rt>きないも</rt></ruby>ち<ruby>込<rt>こ</rt></ruby>み<ruby>用<rt>よう</rt></ruby>に<ruby>使<rt>つか</rt></ruby>えますか？', zh: '可以作為隨身行李使用嗎？', en: 'Can I use it as carry-on baggage?' },
      { jp: '返品できますか？', say: 'へんぴんできますか？', ruby: '<ruby>返品<rt>へんぴん</rt></ruby>できますか？', zh: '可以退貨嗎？', en: 'Can I return it?' }
    ] },
    { title: '会計 · Checkout', items: [
      { jp: 'これをください。', ruby: 'これをください。', zh: '我要這個。', en: 'I will take this.' },
      { jp: '免税手続きはできますか？', say: 'めんぜいてつづきわできますか？', ruby: '<ruby>免税<rt>めんぜい</rt></ruby><ruby>手続<rt>てつづ</rt></ruby>きはできますか？', zh: '可以辦理免稅手續嗎？', en: 'Can I complete the tax-free procedure?' },
      { jp: '袋をください。', say: 'ふくろをください。', ruby: '<ruby>袋<rt>ふくろ</rt></ruby>をください。', zh: '請給我袋子。', en: 'Please give me a bag.' },
      { jp: 'カードで払えますか？', say: 'カードではらえますか？', ruby: 'カードで<ruby>払<rt>はら</rt></ruby>えますか？', zh: '可以刷卡嗎？', en: 'Can I pay by card?' }
    ] }
  ]
}
