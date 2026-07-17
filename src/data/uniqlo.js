// ユニクロで服を買う — functional wear, sizing, fitting rooms and checkout.
export const uniqlo = {
  id: 'uniqlo-shopping',
  title: 'UNIQLO Shopping',
  titleJp: 'ユニクロで服を買う',
  emoji: '👕',
  staffAvatar: '👕',
  staffLabel: '店員 · UNIQLO Staff',
  description: 'Find functional clothing, check colors and sizes, use fitting rooms and complete tax-free shopping at UNIQLO.',
  menuTabLabel: '品項 · Items',
  menuIntro: '🔊 聽發音 · 🎤 練習品項 · 點一下商品展開購買句型',
  menuPatternLabel: '購買句型 · Purchase patterns',
  lines: [
    { speaker: 'staff', jp: 'いらっしゃいませ。何かお手伝いしましょうか？', say: 'いらっしゃいませ。なにかおてつだいしましょうか？', ruby: 'いらっしゃいませ。<ruby>何<rt>なに</rt></ruby>かお<ruby>手伝<rt>てつだ</rt></ruby>いしましょうか？', romaji: 'Irasshaimase. Nanika otetsudai shimashō ka?', zh: '歡迎光臨。需要幫忙嗎？', en: 'Welcome. May I help you with anything?' },
    { speaker: 'you', jp: 'エアリズムのインナーを探しています。', say: 'エアリズムのインナーをさがしています。', ruby: 'エアリズムのインナーを<ruby>探<rt>さが</rt></ruby>しています。', romaji: 'Earizumu no innā o sagashite imasu.', zh: '我在找 AIRism 內著。', en: 'I am looking for AIRism innerwear.' },
    { speaker: 'staff', jp: 'エアリズムは一階のインナー売り場にございます。', say: 'エアリズムわいっかいのインナーうりばにございます。', ruby: 'エアリズムは<ruby>一階<rt>いっかい</rt></ruby>のインナー<ruby>売<rt>う</rt></ruby>り<ruby>場<rt>ば</rt></ruby>にございます。', romaji: 'Earizumu wa ikkai no innā uriba ni gozaimasu.', zh: 'AIRism 在一樓的內著區。', en: 'AIRism is in the innerwear section on the first floor.' },
    { speaker: 'you', jp: '白のMサイズはありますか？', say: 'しろのエムサイズわありますか？', ruby: '<ruby>白<rt>しろ</rt></ruby>のMサイズはありますか？', romaji: 'Shiro no emu saizu wa arimasu ka?', zh: '有白色 M 號嗎？', en: 'Do you have it in white, size M?' },
    { speaker: 'staff', jp: '在庫を確認します。こちらにございます。', say: 'ざいこをかくにんします。こちらにございます。', ruby: '<ruby>在庫<rt>ざいこ</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>します。こちらにございます。', romaji: 'Zaiko o kakunin shimasu. Kochira ni gozaimasu.', zh: '我確認一下庫存。有，在這裡。', en: 'I will check the stock. Yes, it is right here.' },
    { speaker: 'you', jp: 'UVカットのパーカも見たいです。', say: 'ユーブイカットのパーカもみたいです。', ruby: 'UVカットのパーカも<ruby>見<rt>み</rt></ruby>たいです。', romaji: 'Yūbui katto no pākā mo mitai desu.', zh: '我也想看防 UV 連帽外套。', en: 'I would also like to see a UV-cut parka.' },
    { speaker: 'staff', jp: 'レディースとメンズ、どちらをご覧になりますか？', say: 'レディースとメンズ、どちらをごらんになりますか？', ruby: 'レディースとメンズ、どちらをご<ruby>覧<rt>らん</rt></ruby>になりますか？', romaji: 'Redīsu to menzu, dochira o goran ni narimasu ka?', zh: '您要看女裝還是男裝？', en: 'Would you like to see women’s or men’s clothing?' },
    { speaker: 'you', jp: 'レディースをお願いします。試着できますか？', say: 'レディースをおねがいします。しちゃくできますか？', ruby: 'レディースをお<ruby>願<rt>ねが</rt></ruby>いします。<ruby>試着<rt>しちゃく</rt></ruby>できますか？', romaji: 'Redīsu o onegai shimasu. Shichaku dekimasu ka?', zh: '請看女裝。可以試穿嗎？', en: 'Women’s, please. May I try it on?' },
    { speaker: 'staff', jp: 'はい、試着室は奥にございます。お一人様三点までお持ち込みいただけます。', say: 'はい、しちゃくしつわおくにございます。おひとりさまさんてんまでおもちこみいただけます。', ruby: 'はい、<ruby>試着室<rt>しちゃくしつ</rt></ruby>は<ruby>奥<rt>おく</rt></ruby>にございます。お<ruby>一人様<rt>ひとりさま</rt></ruby><ruby>三点<rt>さんてん</rt></ruby>までお<ruby>持<rt>も</rt></ruby>ち<ruby>込<rt>こ</rt></ruby>みいただけます。', romaji: 'Hai, shichakushitsu wa oku ni gozaimasu. Ohitorisama santen made omochikomi itadakemasu.', zh: '可以，試衣間在裡面。每人一次可帶三件。', en: 'Yes, the fitting rooms are in the back. You may bring up to three items at a time.' },
    { speaker: 'you', jp: '丈を直すことはできますか？', say: 'たけをなおすことわできますか？', ruby: '<ruby>丈<rt>たけ</rt></ruby>を<ruby>直<rt>なお</rt></ruby>すことはできますか？', romaji: 'Take o naosu koto wa dekimasu ka?', zh: '可以修改褲長嗎？', en: 'Can you alter the length?' },
    { speaker: 'staff', jp: '対象のパンツは裾上げを承ります。仕上がり時間と料金を確認します。', say: 'たいしょうのパンツわすそあげをうけたまわります。しあがりじかんとりょうきんをかくにんします。', ruby: '<ruby>対象<rt>たいしょう</rt></ruby>のパンツは<ruby>裾上<rt>すそあ</rt></ruby>げを<ruby>承<rt>うけたまわ</rt></ruby>ります。<ruby>仕上<rt>しあ</rt></ruby>がり<ruby>時間<rt>じかん</rt></ruby>と<ruby>料金<rt>りょうきん</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>します。', romaji: 'Taishō no pantsu wa susoage o uketamawarimasu. Shiagari jikan to ryōkin o kakunin shimasu.', zh: '符合條件的褲子可以改褲長。我幫您確認完成時間和費用。', en: 'We offer hemming for eligible pants. I will check the completion time and cost.' },
    { speaker: 'you', jp: 'この二点を買います。免税手続きはできますか？', say: 'このにてんをかいます。めんぜいてつづきわできますか？', ruby: 'この<ruby>二点<rt>にてん</rt></ruby>を<ruby>買<rt>か</rt></ruby>います。<ruby>免税<rt>めんぜい</rt></ruby><ruby>手続<rt>てつづ</rt></ruby>きはできますか？', romaji: 'Kono niten o kaimasu. Menzei tetsuzuki wa dekimasu ka?', zh: '我要買這兩件，可以辦理免稅嗎？', en: 'I will buy these two items. Can I complete the tax-free procedure?' },
    { speaker: 'staff', jp: '対象商品と条件を確認します。パスポートをお持ちください。', say: 'たいしょうしょうひんとじょうけんをかくにんします。パスポートをおもちください。', ruby: '<ruby>対象商品<rt>たいしょうしょうひん</rt></ruby>と<ruby>条件<rt>じょうけん</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>します。パスポートをお<ruby>持<rt>も</rt></ruby>ちください。', romaji: 'Taishō shōhin to jōken o kakunin shimasu. Pasupōto o omochi kudasai.', zh: '我會確認適用商品和條件。請出示護照。', en: 'I will check the eligible items and conditions. Please have your passport ready.' }
  ],
  menu: [
    { title: '機能性インナー · Functional innerwear', items: [
      { emoji: '👕', jp: 'エアリズムTシャツ', ruby: 'エアリズムTシャツ', romaji: 'earizumu tī shatsu', zh: 'AIRism T 恤', en: 'AIRism T-shirt', desc: 'AIRism 系列的機能性內著 T 恤。' },
      { emoji: '👕', jp: 'エアリズムキャミソール', ruby: 'エアリズムキャミソール', romaji: 'earizumu kyamisōru', zh: 'AIRism 細肩帶背心', en: 'AIRism camisole', desc: 'AIRism 系列的細肩帶內著。' },
      { emoji: '👕', jp: 'エアリズムパーカ', ruby: 'エアリズムパーカ', romaji: 'earizumu pākā', zh: 'AIRism 連帽外套', en: 'AIRism parka', desc: 'AIRism 系列的連帽上衣。' },
      { emoji: '🧣', jp: 'ヒートテック', ruby: 'ヒートテック', romaji: 'hīto tekku', zh: 'HEATTECH 發熱衣', en: 'HEATTECH', desc: 'HEATTECH 系列的保暖內著；請確認當季庫存。' },
      { emoji: '🧣', jp: 'ヒートテックレギンス', ruby: 'ヒートテックレギンス', romaji: 'hīto tekku regginsu', zh: 'HEATTECH 內搭褲', en: 'HEATTECH leggings', desc: 'HEATTECH 系列的保暖內搭褲；請確認當季庫存。' }
    ] },
    { title: 'トップス・アウター · Tops and outerwear', items: [
      { emoji: '👕', jp: 'クルーネックTシャツ', ruby: 'クルーネックTシャツ', romaji: 'kurū nekku tī shatsu', zh: '圓領 T 恤', en: 'crew-neck T-shirt', desc: '圓領基本款 T 恤。' },
      { emoji: '👔', jp: 'オックスフォードシャツ', ruby: 'オックスフォードシャツ', romaji: 'okkusufōdo shatsu', zh: '牛津襯衫', en: 'Oxford shirt', desc: '牛津布材質的襯衫。' },
      { emoji: '🧥', jp: 'フリースジャケット', ruby: 'フリースジャケット', romaji: 'furīsu jaketto', zh: '刷毛外套', en: 'fleece jacket', desc: '保暖刷毛材質外套。' },
      { emoji: '🧥', jp: 'ウルトラライトダウン', ruby: 'ウルトラライトダウン', romaji: 'urutora raito daun', zh: '輕羽絨外套', en: 'ultra light down jacket', desc: '輕量羽絨外套；請確認當季庫存。' },
      { emoji: '🧥', jp: 'UVカットパーカ', ruby: 'UVカットパーカ', romaji: 'yūbui katto pākā', zh: '防 UV 連帽外套', en: 'UV-cut parka', desc: '具紫外線防護功能的連帽外套。' }
    ] },
    { title: 'パンツ・スカート · Bottoms', items: [
      { emoji: '👖', jp: 'ジーンズ', ruby: 'ジーンズ', romaji: 'jīnzu', zh: '牛仔褲', en: 'jeans', desc: '丹寧牛仔褲。' },
      { emoji: '👖', jp: 'ワイドパンツ', ruby: 'ワイドパンツ', romaji: 'waido pantsu', zh: '寬褲', en: 'wide-leg pants', desc: '褲管寬鬆的長褲。' },
      { emoji: '👖', jp: 'レギンスパンツ', ruby: 'レギンスパンツ', romaji: 'regginsu pantsu', zh: '內搭褲型長褲', en: 'leggings pants', desc: '貼身、具彈性的長褲。' },
      { emoji: '👖', jp: 'チノパンツ', ruby: 'チノパンツ', romaji: 'chino pantsu', zh: '卡其褲', en: 'chino pants', desc: '棉質斜紋布長褲。' },
      { emoji: '👗', jp: 'スカート', ruby: 'スカート', romaji: 'sukāto', zh: '裙子', en: 'skirt', desc: '各種款式的裙子。' }
    ] },
    { title: '小物・部屋着 · Accessories and loungewear', items: [
      { emoji: '🧦', jp: '靴下', say: 'くつした', ruby: '<ruby>靴下<rt>くつした</rt></ruby>', romaji: 'kutsushita', zh: '襪子', en: 'socks', desc: '基本襪款。' },
      { emoji: '👜', jp: 'ショルダーバッグ', ruby: 'ショルダーバッグ', romaji: 'shorudā baggu', zh: '肩背包', en: 'shoulder bag', desc: '斜背或肩背使用的包款。' },
      { emoji: '🧢', jp: 'キャップ', ruby: 'キャップ', romaji: 'kyappu', zh: '棒球帽', en: 'cap', desc: '遮陽用帽子。' },
      { emoji: '🩳', jp: 'ルームウェア', ruby: 'ルームウェア', romaji: 'rūmu wea', zh: '居家服', en: 'loungewear', desc: '在家或住宿時穿著的服裝。' },
      { emoji: '🛌', jp: 'パジャマ', ruby: 'パジャマ', romaji: 'pajama', zh: '睡衣', en: 'pajamas', desc: '睡覺時穿的衣物。' }
    ] }
  ],
  phrases: [
    { title: '商品・在庫 · Items and stock', items: [
      { jp: 'エアリズムはどこですか？', ruby: 'エアリズムはどこですか？', zh: 'AIRism 在哪裡？', en: 'Where is AIRism?' },
      { jp: 'ヒートテックはありますか？', ruby: 'ヒートテックはありますか？', zh: '有 HEATTECH 嗎？', en: 'Do you have HEATTECH?' },
      { jp: 'この色はありますか？', say: 'このいろわありますか？', ruby: 'この<ruby>色<rt>いろ</rt></ruby>はありますか？', zh: '有這個顏色嗎？', en: 'Do you have this color?' },
      { jp: '別のサイズはありますか？', say: 'べつのサイズわありますか？', ruby: '<ruby>別<rt>べつ</rt></ruby>のサイズはありますか？', zh: '有其他尺寸嗎？', en: 'Do you have another size?' }
    ] },
    { title: '試着・お直し · Fitting and alterations', items: [
      { jp: '試着できますか？', say: 'しちゃくできますか？', ruby: '<ruby>試着<rt>しちゃく</rt></ruby>できますか？', zh: '可以試穿嗎？', en: 'May I try it on?' },
      { jp: '試着室はどこですか？', say: 'しちゃくしつわどこですか？', ruby: '<ruby>試着室<rt>しちゃくしつ</rt></ruby>はどこですか？', zh: '試衣間在哪裡？', en: 'Where is the fitting room?' },
      { jp: '丈を直せますか？', say: 'たけをなおせますか？', ruby: '<ruby>丈<rt>たけ</rt></ruby>を<ruby>直<rt>なお</rt></ruby>せますか？', zh: '可以修改褲長嗎？', en: 'Can you alter the length?' },
      { jp: '仕上がりはいつですか？', say: 'しあがりわいつですか？', ruby: '<ruby>仕上<rt>しあ</rt></ruby>がりはいつですか？', zh: '何時可以完成？', en: 'When will it be ready?' }
    ] },
    { title: '機能を確認 · Checking features', items: [
      { jp: 'UVカット機能はありますか？', ruby: 'UVカット<ruby>機能<rt>きのう</rt></ruby>はありますか？', zh: '有防 UV 功能嗎？', en: 'Does it have UV-cut protection?' },
      { jp: '洗濯機で洗えますか？', say: 'せんたくきであらえますか？', ruby: '<ruby>洗濯機<rt>せんたくき</rt></ruby>で<ruby>洗<rt>あら</rt></ruby>えますか？', zh: '可以機洗嗎？', en: 'Can I machine-wash it?' },
      { jp: '素材を教えてください。', say: 'そざいをおしえてください。', ruby: '<ruby>素材<rt>そざい</rt></ruby>を<ruby>教<rt>おし</rt></ruby>えてください。', zh: '請告訴我材質。', en: 'Please tell me the material.' },
      { jp: 'ポケットはありますか？', ruby: 'ポケットはありますか？', zh: '有口袋嗎？', en: 'Does it have pockets?' }
    ] },
    { title: '会計 · Checkout', items: [
      { jp: 'これを買います。', say: 'これをかいます。', ruby: 'これを<ruby>買<rt>か</rt></ruby>います。', zh: '我要買這個。', en: 'I will buy this.' },
      { jp: '免税手続きはできますか？', say: 'めんぜいてつづきわできますか？', ruby: '<ruby>免税<rt>めんぜい</rt></ruby><ruby>手続<rt>てつづ</rt></ruby>きはできますか？', zh: '可以辦理免稅手續嗎？', en: 'Can I complete the tax-free procedure?' },
      { jp: '返品できますか？', say: 'へんぴんできますか？', ruby: '<ruby>返品<rt>へんぴん</rt></ruby>できますか？', zh: '可以退貨嗎？', en: 'Can I return it?' },
      { jp: 'レシートをください。', ruby: 'レシートをください。', zh: '請給我收據。', en: 'Please give me a receipt.' }
    ] }
  ]
}
