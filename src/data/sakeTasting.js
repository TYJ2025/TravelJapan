// 日本酒を利き酒する — a sake tasting with flavor, temperature and food-pairing requests.
export const sakeTasting = {
  id: 'sake-tasting',
  title: 'Sake Tasting',
  titleJp: '日本酒を利き酒する',
  emoji: '🍶',
  staffAvatar: '🍶',
  staffLabel: '利酒師 · Sake Sommelier',
  description: 'Taste Japanese sake, read sake-label terminology, describe your preferences, ask about serving temperature and pair sake with food.',
  menuTabLabel: '清酒 · Sake',
  menuIntro: '🔊 聽發音 · 🎤 練習清酒名稱 · 點一下品項展開點酒句型',
  menuPatternLabel: '點酒句型 · Ordering patterns',
  lines: [
    { speaker: 'staff', jp: 'いらっしゃいませ。利き酒セットはいかがですか？', say: 'いらっしゃいませ。ききざけセットはいかがですか？', ruby: 'いらっしゃいませ。<ruby>利<rt>き</rt></ruby>き<ruby>酒<rt>ざけ</rt></ruby>セットはいかがですか？', romaji: 'Irasshaimase. Kikizake setto wa ikaga desu ka?', zh: '歡迎光臨。要不要試試清酒品飲組合？', en: 'Welcome. Would you like a sake tasting set?' },
    { speaker: 'you', jp: 'お願いします。辛口で、すっきりした日本酒が好きです。', say: 'おねがいします。からくちで、すっきりしたにほんしゅがすきです。', ruby: 'お<ruby>願<rt>ねが</rt></ruby>いします。<ruby>辛口<rt>からくち</rt></ruby>で、すっきりした<ruby>日本酒<rt>にほんしゅ</rt></ruby>が<ruby>好<rt>す</rt></ruby>きです。', romaji: 'Onegai shimasu. Karakuchi de, sukkiri shita nihonshu ga suki desu.', zh: '好的。我喜歡辛口、清爽型的清酒。', en: 'Yes, please. I like dry, crisp sake.' },
    { speaker: 'staff', jp: 'では、辛口の純米酒、純米吟醸、特別本醸造を三種類ご用意します。', say: 'では、からくちのじゅんまいしゅ、じゅんまいぎんじょう、とくべつほんじょうぞうをさんしゅるいごよういします。', ruby: 'では、<ruby>辛口<rt>からくち</rt></ruby>の<ruby>純米酒<rt>じゅんまいしゅ</rt></ruby>、<ruby>純米吟醸<rt>じゅんまいぎんじょう</rt></ruby>、<ruby>特別本醸造<rt>とくべつほんじょうぞう</rt></ruby>を<ruby>三種類<rt>さんしゅるい</rt></ruby>ご<ruby>用意<rt>ようい</rt></ruby>します。', romaji: 'Dewa, karakuchi no junmaishu, junmai ginjō, tokubetsu honjōzō o sanshurui go-yōi shimasu.', zh: '那麼我為您準備三種辛口：純米酒、純米吟釀和特別本釀造。', en: 'Then I will prepare three dry styles: junmai, junmai ginjo, and special honjozo.' },
    { speaker: 'you', jp: '冷酒と燗酒では、味わいはどう違いますか？', say: 'れいしゅとかんしゅでわ、あじわいわどうちがいますか？', ruby: '<ruby>冷酒<rt>れいしゅ</rt></ruby>と<ruby>燗酒<rt>かんしゅ</rt></ruby>では、<ruby>味<rt>あじ</rt></ruby>わいはどう<ruby>違<rt>ちが</rt></ruby>いますか？', romaji: 'Reishu to kanshu de wa, ajiwai wa dō chigaimasu ka?', zh: '冰飲和溫熱飲，風味有什麼不同？', en: 'How does the flavor differ between chilled and warmed sake?' },
    { speaker: 'staff', jp: '冷酒は香りと軽やかさを楽しみやすく、燗酒は米の旨味を感じやすくなります。', say: 'れいしゅわかおりとかろやかさをたのしみやすく、かんしゅわこめのうまみをかんじやすくなります。', ruby: '<ruby>冷酒<rt>れいしゅ</rt></ruby>は<ruby>香<rt>かお</rt></ruby>りと<ruby>軽<rt>かろ</rt></ruby>やかさを<ruby>楽<rt>たの</rt></ruby>しみやすく、<ruby>燗酒<rt>かんしゅ</rt></ruby>は<ruby>米<rt>こめ</rt></ruby>の<ruby>旨味<rt>うまみ</rt></ruby>を<ruby>感<rt>かん</rt></ruby>じやすくなります。', romaji: 'Reishu wa kaori to karoyakasa o tanoshimiyasuku, kanshu wa kome no umami o kanjiyasuku narimasu.', zh: '冰飲較容易感受香氣與輕盈感；溫熱飲則較能感受米的旨味。', en: 'Chilled sake makes aroma and lightness easier to enjoy, while warmed sake brings out the rice umami.' },
    { speaker: 'you', jp: 'お造りに合う一本をおすすめしてください。', say: 'おつくりにあういっぽんをおすすめしてください。', ruby: 'お<ruby>造<rt>つく</rt></ruby>りに<ruby>合<rt>あ</rt></ruby>う<ruby>一本<rt>いっぽん</rt></ruby>をおすすめしてください。', romaji: 'Otsukuri ni au ippon o osusume shite kudasai.', zh: '請推薦一款適合搭配生魚片的清酒。', en: 'Please recommend one sake that pairs well with sashimi.' },
    { speaker: 'staff', jp: '香りが華やかすぎない純米吟醸を、冷やしてお出しします。', say: 'かおりがはなやかすぎないじゅんまいぎんじょうを、ひやしておだしします。', ruby: '<ruby>香<rt>かお</rt></ruby>りが<ruby>華<rt>はな</rt></ruby>やかすぎない<ruby>純米吟醸<rt>じゅんまいぎんじょう</rt></ruby>を、<ruby>冷<rt>ひ</rt></ruby>やしてお<ruby>出<rt>だ</rt></ruby>しします。', romaji: 'Kaori ga hanayaka sugina i junmai ginjō o, hiyashite odashi shimasu.', zh: '我為您冰鎮奉上香氣不會太強烈的純米吟釀。', en: 'I will serve a chilled junmai ginjo with a restrained aroma.' },
    { speaker: 'you', jp: '少量ずつ、飲み比べできますか？', say: 'しょうりょうずつ、のみくらべできますか？', ruby: '<ruby>少量<rt>しょうりょう</rt></ruby>ずつ、<ruby>飲<rt>の</rt></ruby>み<ruby>比<rt>くら</rt></ruby>べできますか？', romaji: 'Shōryō zutsu, nomikurabe dekimasu ka?', zh: '可以每種少量比較品飲嗎？', en: 'Can I compare small pours of several kinds?' },
    { speaker: 'staff', jp: 'はい、三種の飲み比べをご用意できます。左から順にお試しください。', say: 'はい、さんしゅののみくらべをごよういできます。ひだりからじゅんにおためしください。', ruby: 'はい、<ruby>三種<rt>さんしゅ</rt></ruby>の<ruby>飲<rt>の</rt></ruby>み<ruby>比<rt>くら</rt></ruby>べをご<ruby>用意<rt>ようい</rt></ruby>できます。<ruby>左<rt>ひだり</rt></ruby>から<ruby>順<rt>じゅん</rt></ruby>にお<ruby>試<rt>ため</rt></ruby>しください。', romaji: 'Hai, sanshu no nomikurabe o go-yōi dekimasu. Hidari kara jun ni otameshi kudasai.', zh: '可以，我們有三種比較品飲。請由左至右依序品嚐。', en: 'Yes, we can prepare a three-sake comparison. Please taste them in order from left to right.' },
    { speaker: 'you', jp: 'このにごり酒は甘口ですか？', say: 'このにごりざけわあまくちですか？', ruby: 'この<ruby>にごり酒<rt>にごりざけ</rt></ruby>は<ruby>甘口<rt>あまくち</rt></ruby>ですか？', romaji: 'Kono nigorizake wa amakuchi desu ka?', zh: '這款濁酒是甜口嗎？', en: 'Is this nigori sake sweet?' },
    { speaker: 'staff', jp: 'やや甘口で、米のやさしい甘みがあります。よく冷やしてお楽しみください。', say: 'ややあまくちで、こめのやさしいあまみがあります。よくひやしておたのしみください。', ruby: 'やや<ruby>甘口<rt>あまくち</rt></ruby>で、<ruby>米<rt>こめ</rt></ruby>のやさしい<ruby>甘<rt>あま</rt></ruby>みがあります。よく<ruby>冷<rt>ひ</rt></ruby>やしてお<ruby>楽<rt>たの</rt></ruby>しみください。', romaji: 'Yaya amakuchi de, kome no yasashii amami ga arimasu. Yoku hiyashite otanoshimi kudasai.', zh: '是微甜口，有柔和的米香甜味。請冰鎮後享用。', en: 'It is slightly sweet, with a gentle rice sweetness. Please enjoy it well chilled.' },
    { speaker: 'you', jp: '一番気に入ったものを一合ください。', say: 'いちばんきにいったものをいちごうください。', ruby: '<ruby>一番<rt>いちばん</rt></ruby><ruby>気<rt>き</rt></ruby>に<ruby>入<rt>い</rt></ruby>ったものを<ruby>一合<rt>いちごう</rt></ruby>ください。', romaji: 'Ichiban ki ni itta mono o ichigō kudasai.', zh: '請給我一合我最喜歡的那款。', en: 'One go of the one I liked best, please.' },
    { speaker: 'staff', jp: 'かしこまりました。お水もご一緒にお持ちします。', say: 'かしこまりました。おみずもごいっしょにおもちします。', ruby: 'かしこまりました。お<ruby>水<rt>みず</rt></ruby>もご<ruby>一緒<rt>いっしょ</rt></ruby>にお<ruby>持<rt>も</rt></ruby>ちします。', romaji: 'Kashikomarimashita. Omizu mo goissho ni omochi shimasu.', zh: '好的，也會一併為您送上水。', en: 'Certainly. I will bring water with it as well.' }
  ],
  menu: [
    { title: '定番の清酒 · Classic styles', items: [
      { emoji: '🍶', jp: '純米酒', say: 'じゅんまいしゅ', ruby: '<ruby>純米酒<rt>じゅんまいしゅ</rt></ruby>', romaji: 'junmaishu', zh: '純米酒', en: 'junmai sake', desc: '以米、米麴和水釀造的清酒類型。' },
      { emoji: '🍶', jp: '純米吟醸', say: 'じゅんまいぎんじょう', ruby: '<ruby>純米吟醸<rt>じゅんまいぎんじょう</rt></ruby>', romaji: 'junmai ginjō', zh: '純米吟釀', en: 'junmai ginjo', desc: '純米酒中帶有吟釀風格的清酒。' },
      { emoji: '🍶', jp: '純米大吟醸', say: 'じゅんまいだいぎんじょう', ruby: '<ruby>純米大吟醸<rt>じゅんまいだいぎんじょう</rt></ruby>', romaji: 'junmai daiginjō', zh: '純米大吟釀', en: 'junmai daiginjo', desc: '精米度較高的純米吟釀類型。' },
      { emoji: '🍶', jp: '吟醸酒', say: 'ぎんじょうしゅ', ruby: '<ruby>吟醸酒<rt>ぎんじょうしゅ</rt></ruby>', romaji: 'ginjōshu', zh: '吟釀酒', en: 'ginjo sake', desc: '帶有吟釀香氣特色的清酒。' },
      { emoji: '🍶', jp: '本醸造', say: 'ほんじょうぞう', ruby: '<ruby>本醸造<rt>ほんじょうぞう</rt></ruby>', romaji: 'honjōzō', zh: '本釀造', en: 'honjozo sake', desc: '常見的清酒類型之一，請向店員確認具體風味。' }
    ] },
    { title: '個性派 · Distinctive styles', items: [
      { emoji: '🍶', jp: '山廃純米', say: 'やまはいじゅんまい', ruby: '<ruby>山廃純米<rt>やまはいじゅんまい</rt></ruby>', romaji: 'yamahai junmai', zh: '山廢純米', en: 'yamahai junmai', desc: '使用山廢酒母製法的純米酒。' },
      { emoji: '🍶', jp: '生酛純米', say: 'きもとじゅんまい', ruby: '<ruby>生酛純米<rt>きもとじゅんまい</rt></ruby>', romaji: 'kimoto junmai', zh: '生酛純米', en: 'kimoto junmai', desc: '使用生酛酒母製法的純米酒。' },
      { emoji: '🍶', jp: '生酒', say: 'なまざけ', ruby: '<ruby>生酒<rt>なまざけ</rt></ruby>', romaji: 'namazake', zh: '生酒', en: 'unpasteurized sake', desc: '未經火入處理的清酒；保存與供應方式依商品而異。' },
      { emoji: '🍶', jp: 'にごり酒', say: 'にごりざけ', ruby: '<ruby>にごり酒<rt>にごりざけ</rt></ruby>', romaji: 'nigorizake', zh: '濁酒', en: 'nigori sake', desc: '帶有白濁酒粕成分的清酒。' },
      { emoji: '🍶', jp: '発泡清酒', say: 'はっぽうせいしゅ', ruby: '<ruby>発泡清酒<rt>はっぽうせいしゅ</rt></ruby>', romaji: 'happō seishu', zh: '氣泡清酒', en: 'sparkling sake', desc: '帶有氣泡感的清酒。' }
    ] },
    { title: '熟成・甘味 · Aged and sweet styles', items: [
      { emoji: '🍶', jp: '古酒', say: 'こしゅ', ruby: '<ruby>古酒<rt>こしゅ</rt></ruby>', romaji: 'koshu', zh: '古酒', en: 'aged sake', desc: '經過熟成的清酒。' },
      { emoji: '🍶', jp: '貴醸酒', say: 'きじょうしゅ', ruby: '<ruby>貴醸酒<rt>きじょうしゅ</rt></ruby>', romaji: 'kijōshu', zh: '貴釀酒', en: 'kijoshu', desc: '較甜潤、濃厚風格的清酒類型。' },
      { emoji: '🍶', jp: '梅酒', say: 'うめしゅ', ruby: '<ruby>梅酒<rt>うめしゅ</rt></ruby>', romaji: 'umeshu', zh: '梅酒', en: 'plum liqueur', desc: '以梅子浸泡製成的酒；不是清酒，但常見於日本酒單。' },
      { emoji: '🍶', jp: 'ゆず酒', say: 'ゆずしゅ', ruby: 'ゆず<ruby>酒<rt>しゅ</rt></ruby>', romaji: 'yuzushu', zh: '柚子酒', en: 'yuzu liqueur', desc: '帶有柚子香氣的果實酒。' },
      { emoji: '🍶', jp: '地酒', say: 'じざけ', ruby: '<ruby>地酒<rt>じざけ</rt></ruby>', romaji: 'jizake', zh: '當地清酒', en: 'local sake', desc: '當地酒藏釀造的清酒；品牌和風味依地區而異。' }
    ] },
    { title: '飲み比べ · Tasting sets', items: [
      { emoji: '🥂', jp: '三種飲み比べ', say: 'さんしゅのみくらべ', ruby: '<ruby>三種<rt>さんしゅ</rt></ruby><ruby>飲<rt>の</rt></ruby>み<ruby>比<rt>くら</rt></ruby>べ', romaji: 'sanshu nomikurabe', zh: '三種比較品飲', en: 'three-sake tasting flight', desc: '以小杯比較三種清酒。' },
      { emoji: '🥂', jp: '辛口飲み比べ', say: 'からくちのみくらべ', ruby: '<ruby>辛口<rt>からくち</rt></ruby><ruby>飲<rt>の</rt></ruby>み<ruby>比<rt>くら</rt></ruby>べ', romaji: 'karakuchi nomikurabe', zh: '辛口比較品飲', en: 'dry sake tasting flight', desc: '比較數種辛口清酒。' },
      { emoji: '🥂', jp: '甘口飲み比べ', say: 'あまくちのみくらべ', ruby: '<ruby>甘口<rt>あまくち</rt></ruby><ruby>飲<rt>の</rt></ruby>み<ruby>比<rt>くら</rt></ruby>べ', romaji: 'amakuchi nomikurabe', zh: '甜口比較品飲', en: 'sweet sake tasting flight', desc: '比較數種甜口或圓潤風格清酒。' },
      { emoji: '🥂', jp: '地酒飲み比べ', say: 'じざけのみくらべ', ruby: '<ruby>地酒<rt>じざけ</rt></ruby><ruby>飲<rt>の</rt></ruby>み<ruby>比<rt>くら</rt></ruby>べ', romaji: 'jizake nomikurabe', zh: '當地清酒比較品飲', en: 'local sake tasting flight', desc: '比較不同當地酒藏的清酒。' },
      { emoji: '🥂', jp: 'お燗飲み比べ', say: 'おかんのみくらべ', ruby: 'お<ruby>燗<rt>かん</rt></ruby><ruby>飲<rt>の</rt></ruby>み<ruby>比<rt>くら</rt></ruby>べ', romaji: 'okan nomikurabe', zh: '溫熱清酒比較品飲', en: 'warmed sake tasting flight', desc: '以不同溫度或酒款比較溫熱清酒。' }
    ] }
  ],
  phrases: [
    { title: '好みを伝える · Describe your preference', items: [
      { jp: '辛口が好きです。', say: 'からくちがすきです。', ruby: '<ruby>辛口<rt>からくち</rt></ruby>が<ruby>好<rt>す</rt></ruby>きです。', zh: '我喜歡辛口。', en: 'I like dry sake.' },
      { jp: '甘口はありますか？', say: 'あまくちわありますか？', ruby: '<ruby>甘口<rt>あまくち</rt></ruby>はありますか？', zh: '有甜口嗎？', en: 'Do you have a sweet sake?' },
      { jp: 'フルーティーなものがいいです。', ruby: 'フルーティーなものがいいです。', zh: '我想要果香型的。', en: 'I would like something fruity.' },
      { jp: '香りが控えめなものはありますか？', say: 'かおりがひかえめなものわありますか？', ruby: '<ruby>香<rt>かお</rt></ruby>りが<ruby>控<rt>ひか</rt></ruby>えめなものはありますか？', zh: '有香氣較低調的嗎？', en: 'Do you have something with a restrained aroma?' }
    ] },
    { title: '温度・飲み方 · Temperature and serving', items: [
      { jp: '冷やして飲みたいです。', say: 'ひやしてのみたいです。', ruby: '<ruby>冷<rt>ひ</rt></ruby>やして<ruby>飲<rt>の</rt></ruby>みたいです。', zh: '我想冰飲。', en: 'I would like it chilled.' },
      { jp: 'お燗でお願いします。', say: 'おかんでおねがいします。', ruby: 'お<ruby>燗<rt>かん</rt></ruby>でお<ruby>願<rt>ねが</rt></ruby>いします。', zh: '麻煩溫熱飲。', en: 'Warmed, please.' },
      { jp: '少量ずつ飲み比べできますか？', say: 'しょうりょうずつのみくらべできますか？', ruby: '<ruby>少量<rt>しょうりょう</rt></ruby>ずつ<ruby>飲<rt>の</rt></ruby>み<ruby>比<rt>くら</rt></ruby>べできますか？', zh: '可以每種少量比較品飲嗎？', en: 'Can I compare small pours?' },
      { jp: 'お水もください。', say: 'おみずもください。', ruby: 'お<ruby>水<rt>みず</rt></ruby>もください。', zh: '也請給我水。', en: 'Please give me water as well.' }
    ] },
    { title: '料理との相性 · Food pairing', items: [
      { jp: 'お造りに合う日本酒はどれですか？', say: 'おつくりにあうにほんしゅわどれですか？', ruby: 'お<ruby>造<rt>つく</rt></ruby>りに<ruby>合<rt>あ</rt></ruby>う<ruby>日本酒<rt>にほんしゅ</rt></ruby>はどれですか？', zh: '哪款清酒適合搭配生魚片？', en: 'Which sake pairs well with sashimi?' },
      { jp: '焼き魚に合うものをお願いします。', say: 'やきざかなにあうものをおねがいします。', ruby: '<ruby>焼<rt>や</rt></ruby>き<ruby>魚<rt>ざかな</rt></ruby>に<ruby>合<rt>あ</rt></ruby>うものをお<ruby>願<rt>ねが</rt></ruby>いします。', zh: '麻煩推薦適合烤魚的。', en: 'Please recommend something that pairs with grilled fish.' },
      { jp: 'チーズに合うものはありますか？', ruby: 'チーズに<ruby>合<rt>あ</rt></ruby>うものはありますか？', zh: '有適合起司的嗎？', en: 'Do you have something that pairs with cheese?' },
      { jp: 'この料理にはどれがおすすめですか？', say: 'このりょうりにわどれがおすすめですか？', ruby: 'この<ruby>料理<rt>りょうり</rt></ruby>にはどれがおすすめですか？', zh: '這道菜推薦哪一款？', en: 'Which one do you recommend with this dish?' }
    ] },
    { title: '注文 · Ordering', items: [
      { jp: 'これを一合ください。', say: 'これをいちごうください。', ruby: 'これを<ruby>一合<rt>いちごう</rt></ruby>ください。', zh: '請給我一合這款。', en: 'One go of this, please.' },
      { jp: 'グラスでお願いします。', ruby: 'グラスでお<ruby>願<rt>ねが</rt></ruby>いします。', zh: '請用杯裝。', en: 'By the glass, please.' },
      { jp: '地酒をおすすめしてください。', say: 'じざけをおすすめしてください。', ruby: '<ruby>地酒<rt>じざけ</rt></ruby>をおすすめしてください。', zh: '請推薦當地清酒。', en: 'Please recommend a local sake.' },
      { jp: 'お会計をお願いします。', say: 'おかいけいをおねがいします。', ruby: 'お<ruby>会計<rt>かいけい</rt></ruby>をお<ruby>願<rt>ねが</rt></ruby>いします。', zh: '麻煩結帳。', en: 'The bill, please.' }
    ] },
    { title: 'ラベルの基本 · Label basics', items: [
      { jp: '精米歩合', say: 'せいまいぶあい', ruby: '<ruby>精米<rt>せいまい</rt></ruby><ruby>歩合<rt>ぶあい</rt></ruby>', zh: '精米步合：白米相對玄米的重量比例；60% 表示約磨去 40%。', en: 'Rice-polishing ratio: 60% means about 40% of the brown rice was polished away.' },
      { jp: '酒造好適米', say: 'しゅぞうこうてきまい', ruby: '<ruby>酒造<rt>しゅぞう</rt></ruby><ruby>好適米<rt>こうてきまい</rt></ruby>', zh: '酒造好適米：適合釀清酒的米；酒標常見山田錦、五百万石等品種。', en: 'Sake-brewing rice: rice suited to making sake, such as Yamada Nishiki or Gohyakumangoku.' },
      { jp: '日本酒度', say: 'にほんしゅど', ruby: '<ruby>日本酒度<rt>にほんしゅど</rt></ruby>', zh: '日本酒度：清酒比重指標；要和酸度一起看，不能單獨等同甜或辛口。', en: 'Sake meter value: a specific-gravity index; read it with acidity, not as sweetness alone.' },
      { jp: '酸度', say: 'さんど', ruby: '<ruby>酸度<rt>さんど</rt></ruby>', zh: '酸度：酒標上的酸含量指標，常用來一起判讀清爽感與結構。', en: 'Acidity: a label indicator used with other values to read freshness and structure.' },
      { jp: '特定名称酒', say: 'とくていめいしょうしゅ', ruby: '<ruby>特定名称酒<rt>とくていめいしょうしゅ</rt></ruby>', zh: '特定名稱酒：符合原料與製法標示規定的分類，如純米、吟釀與本釀造。', en: 'Specially designated sake: categories such as junmai, ginjo and honjozo defined by label standards.' }
    ] },
    { title: '製法・季節語 · Brewing and seasonal terms', items: [
      { jp: '火入れ', say: 'ひいれ', ruby: '<ruby>火入<rt>ひい</rt></ruby>れ', zh: '火入：加熱殺菌並穩定酒質的處理。', en: 'Hi-ire: heat treatment that pasteurizes and stabilizes sake.' },
      { jp: '原酒', say: 'げんしゅ', ruby: '<ruby>原酒<rt>げんしゅ</rt></ruby>', zh: '原酒：裝瓶前未加水調整的清酒；酒精度與風味常較集中。', en: 'Genshu: sake not diluted with water after pressing, often more concentrated.' },
      { jp: '生詰酒', say: 'なまづめしゅ', ruby: '<ruby>生詰酒<rt>なまづめしゅ</rt></ruby>', zh: '生詰酒：儲藏前已火入，裝瓶時不再火入；不等於完全不加熱的生酒。', en: 'Namazume: heat-treated before storage but not again at bottling; it is not fully unpasteurized sake.' },
      { jp: 'しぼりたて', say: 'しぼりたて', ruby: 'しぼりたて', zh: '搾りたて：剛壓榨完成、較早出貨的新酒，常帶新鮮感。', en: 'Shiboritake: freshly pressed new sake, usually released soon after pressing.' },
      { jp: 'ひやおろし', say: 'ひやおろし', ruby: 'ひやおろし', zh: 'ひやおろし：火入儲藏後於秋季出貨的酒，通常有較圓潤的熟成感。', en: 'Hiyaoroshi: sake stored after pasteurization and released in autumn, often with a rounded maturity.' },
      { jp: '無濾過', say: 'むろか', ruby: '<ruby>無濾過<rt>むろか</rt></ruby>', zh: '無濾過：常指未做活性碳濾過；實際處理方式仍依酒藏而異。', en: 'Muroka: commonly means no activated-carbon filtration; the exact process varies by brewery.' }
    ] },
    { title: '酒母・味わい · Starter and flavor terms', items: [
      { jp: '酒母', say: 'しゅぼ', ruby: '<ruby>酒母<rt>しゅぼ</rt></ruby>', zh: '酒母：培養酵母的發酵基礎，也叫「もと」。', en: 'Shubo: the yeast starter that becomes the foundation for fermentation.' },
      { jp: '生酛', say: 'きもと', ruby: '<ruby>生酛<rt>きもと</rt></ruby>', zh: '生酛：以傳統且費工方式製作的酒母。', en: 'Kimoto: a traditional, labor-intensive method of making the yeast starter.' },
      { jp: '山廃', say: 'やまはい', ruby: '<ruby>山廃<rt>やまはい</rt></ruby>', zh: '山廢：省略生酛製程中「山卸し」操作的生酛系酒母。', en: 'Yamahai: a kimoto-family starter method that omits the yama-oroshi mashing step.' },
      { jp: '吟醸香', say: 'ぎんじょうか', ruby: '<ruby>吟醸香<rt>ぎんじょうか</rt></ruby>', zh: '吟釀香：吟釀酒特有的華麗香氣，常讓人聯想到水果或花。', en: 'Ginjo aroma: the distinctive, often fruity or floral fragrance of ginjo sake.' },
      { jp: '冷や', say: 'ひや', ruby: '<ruby>冷<rt>ひ</rt></ruby>や', zh: '冷や：常溫飲用；不是冷酒（冰飲）。', en: 'Hiya: sake served at room temperature, not chilled sake.' }
    ] },
    { title: '酒標を聞く · Ask about the label', items: [
      { jp: '精米歩合は何パーセントですか？', say: 'せいまいぶあいわなんパーセントですか？', ruby: '<ruby>精米<rt>せいまい</rt></ruby><ruby>歩合<rt>ぶあい</rt></ruby>は<ruby>何<rt>なん</rt></ruby>パーセントですか？', zh: '精米步合是多少？', en: 'What is the rice-polishing ratio?' },
      { jp: '使っている酒米は何ですか？', say: 'つかっているさかまいわなんですか？', ruby: '<ruby>使<rt>つか</rt></ruby>っている<ruby>酒米<rt>さかまい</rt></ruby>は<ruby>何<rt>なん</rt></ruby>ですか？', zh: '使用的是哪一種酒米？', en: 'Which sake rice is used?' },
      { jp: '日本酒度と酸度を教えてください。', say: 'にほんしゅどとさんどをおしえてください。', ruby: '<ruby>日本酒度<rt>にほんしゅど</rt></ruby>と<ruby>酸度<rt>さんど</rt></ruby>を<ruby>教<rt>おし</rt></ruby>えてください。', zh: '請告訴我日本酒度和酸度。', en: 'Please tell me the sake meter value and acidity.' },
      { jp: 'これは生酒ですか？ 火入れしていますか？', say: 'これわなまざけですか？ ひいれしていますか？', ruby: 'これは<ruby>生酒<rt>なまざけ</rt></ruby>ですか？ <ruby>火入<rt>ひい</rt></ruby>れしていますか？', zh: '這是生酒嗎？有火入處理嗎？', en: 'Is this namazake? Has it been pasteurized?' },
      { jp: '原酒ですか？', say: 'げんしゅですか？', ruby: '<ruby>原酒<rt>げんしゅ</rt></ruby>ですか？', zh: '這是原酒嗎？', en: 'Is this genshu?' },
      { jp: '無濾過ですか？', say: 'むろかですか？', ruby: '<ruby>無濾過<rt>むろか</rt></ruby>ですか？', zh: '這是無濾過嗎？', en: 'Is this muroka?' }
    ] },
    { title: '飲み方を聞く · Ask about serving', items: [
      { jp: '生酛ですか、山廃ですか？', say: 'きもとですか、やまはいですか？', ruby: '<ruby>生酛<rt>きもと</rt></ruby>ですか、<ruby>山廃<rt>やまはい</rt></ruby>ですか？', zh: '這是生酛還是山廢？', en: 'Is this kimoto or yamahai?' },
      { jp: '冷や、つまり常温でも飲めますか？', say: 'ひや、つまりじょうおんでものめますか？', ruby: '<ruby>冷<rt>ひ</rt></ruby>や、つまり<ruby>常温<rt>じょうおん</rt></ruby>でも<ruby>飲<rt>の</rt></ruby>めますか？', zh: '可以用冷や，也就是常溫飲用嗎？', en: 'Can I have it hiya, meaning at room temperature?' },
      { jp: 'お燗に向いていますか？', say: 'おかんにむいていますか？', ruby: 'お<ruby>燗<rt>かん</rt></ruby>に<ruby>向<rt>む</rt></ruby>いていますか？', zh: '適合加熱飲用嗎？', en: 'Is it suitable for warming?' },
      { jp: '和らぎ水をください。', say: 'やわらぎみずをください。', ruby: '<ruby>和<rt>やわ</rt></ruby>らぎ<ruby>水<rt>みず</rt></ruby>をください。', zh: '請給我清酒間飲用的水。', en: 'Please give me water to drink alongside the sake.' }
    ] }
  ]
}
