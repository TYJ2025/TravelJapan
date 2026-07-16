// オノマトペのひとこと — high-frequency mimetic and sound-symbolic phrases.
// Inspired by the supplied video's confirmed topic; examples are original
// practice sentences rather than a transcription of the video.

const feelings = [
  { jp: '旅行が楽しみで、わくわくしている。', say: 'りょこうがたのしみで、わくわくしている。', ruby: '<ruby>旅行<rt>りょこう</rt></ruby>が<ruby>楽<rt>たの</rt></ruby>しみで、わくわくしている。', romaji: 'Ryokō ga tanoshimi de, wakuwaku shite iru.', zh: '我很期待旅行，心情雀躍。', en: 'I am excited about the trip.' },
  { jp: '大事な発表の前で、どきどきする。', say: 'だいじなはっぴょうのまえで、どきどきする。', ruby: '<ruby>大事<rt>だいじ</rt></ruby>な<ruby>発表<rt>はっぴょう</rt></ruby>の<ruby>前<rt>まえ</rt></ruby>で、どきどきする。', romaji: 'Daiji na happyō no mae de, dokidoki suru.', zh: '重要發表前，我心跳加速、很緊張。', en: 'My heart is racing before an important presentation.' },
  { jp: '電車が遅れて、いらいらしている。', say: 'でんしゃがおくれて、いらいらしている。', ruby: '<ruby>電車<rt>でんしゃ</rt></ruby>が<ruby>遅<rt>おく</rt></ruby>れて、いらいらしている。', romaji: 'Densha ga okurete, iraira shite iru.', zh: '電車誤點，我覺得煩躁。', en: 'The train is delayed, and I am getting irritated.' },
  { jp: 'ホテルに着いて、ほっとした。', say: 'ホテルについて、ほっとした。', ruby: 'ホテルに<ruby>着<rt>つ</rt></ruby>いて、ほっとした。', romaji: 'Hoteru ni tsuite, hotto shita.', zh: '抵達飯店後，我鬆了一口氣。', en: 'I felt relieved when I arrived at the hotel.' },
  { jp: '欲しかった商品が売り切れで、がっかりした。', say: 'ほしかったしょうひんがうりきれで、がっかりした。', ruby: '<ruby>欲<rt>ほ</rt></ruby>しかった<ruby>商品<rt>しょうひん</rt></ruby>が<ruby>売<rt>う</rt></ruby>り<ruby>切<rt>き</rt></ruby>れで、がっかりした。', romaji: 'Hoshikatta shōhin ga urikire de, gakkari shita.', zh: '想買的商品賣完了，我很失望。', en: 'The item I wanted was sold out, so I was disappointed.' },
  { jp: '急に声をかけられて、びっくりした。', say: 'きゅうにこえをかけられて、びっくりした。', ruby: '<ruby>急<rt>きゅう</rt></ruby>に<ruby>声<rt>こえ</rt></ruby>をかけられて、びっくりした。', romaji: 'Kyū ni koe o kakerarete, bikkuri shita.', zh: '突然有人叫我，嚇了一跳。', en: 'Someone suddenly spoke to me, and I was surprised.' },
  { jp: '昨夜はぐっすり眠れた。', say: 'さくやわぐっすりねむれた。', ruby: '<ruby>昨夜<rt>さくや</rt></ruby>はぐっすり<ruby>眠<rt>ねむ</rt></ruby>れた。', romaji: 'Sakuya wa gussuri nemureta.', zh: '昨晚睡得很熟。', en: 'I slept soundly last night.' },
  { jp: 'シャワーを浴びて、すっきりした。', say: 'シャワーをあびて、すっきりした。', ruby: 'シャワーを<ruby>浴<rt>あ</rt></ruby>びて、すっきりした。', romaji: 'Shawā o abite, sukkiri shita.', zh: '洗完澡覺得很清爽。', en: 'I felt refreshed after taking a shower.' },
  { jp: '一日中歩いて、へとへとだ。', say: 'いちにちじゅうあるいて、へとへとだ。', ruby: '<ruby>一日中<rt>いちにちじゅう</rt></ruby><ruby>歩<rt>ある</rt></ruby>いて、へとへとだ。', romaji: 'Ichinichijū aruite, hetoheto da.', zh: '走了一整天，累壞了。', en: 'I walked all day and am exhausted.' },
  { jp: '映画を見ていたら、うとうとしてしまった。', say: 'えいがをみていたら、うとうとしてしまった。', ruby: '<ruby>映画<rt>えいが</rt></ruby>を<ruby>見<rt>み</rt></ruby>ていたら、うとうとしてしまった。', romaji: 'Eiga o mite itara, utouto shite shimatta.', zh: '看電影時不小心打起瞌睡。', en: 'I started dozing off while watching a movie.' }
]

const travel = [
  { jp: '休日は町をぶらぶら歩くのが好き。', say: 'きゅうじつわまちをぶらぶらあるくのがすき。', ruby: '<ruby>休日<rt>きゅうじつ</rt></ruby>は<ruby>町<rt>まち</rt></ruby>をぶらぶら<ruby>歩<rt>ある</rt></ruby>くのが<ruby>好<rt>す</rt></ruby>き。', romaji: 'Kyūjitsu wa machi o burabura aruku no ga suki.', zh: '我喜歡假日隨意逛街。', en: 'I like strolling around town on my days off.' },
  { jp: '今日はのんびり観光しよう。', say: 'きょうわのんびりかんこうしよう。', ruby: '<ruby>今日<rt>きょう</rt></ruby>はのんびり<ruby>観光<rt>かんこう</rt></ruby>しよう。', romaji: 'Kyō wa nonbiri kankō shiyō.', zh: '今天慢慢觀光吧。', en: 'Let’s take it easy and sightsee today.' },
  { jp: '駅で案内板をきょろきょろ探した。', say: 'えきであんないばんをきょろきょろさがした。', ruby: '<ruby>駅<rt>えき</rt></ruby>で<ruby>案内板<rt>あんないばん</rt></ruby>をきょろきょろ<ruby>探<rt>さが</rt></ruby>した。', romaji: 'Eki de annaiban o kyorokyoro sagashita.', zh: '我在車站四處張望找指示牌。', en: 'I looked around restlessly for the station sign.' },
  { jp: '道に迷って、駅の周りをうろうろした。', say: 'みちにまよって、えきのまわりをうろうろした。', ruby: '<ruby>道<rt>みち</rt></ruby>に<ruby>迷<rt>まよ</rt></ruby>って、<ruby>駅<rt>えき</rt></ruby>の<ruby>周<rt>まわ</rt></ruby>りをうろうろした。', romaji: 'Michi ni mayotte, eki no mawari o urouro shita.', zh: '我迷路了，在車站周圍徘徊。', en: 'I got lost and wandered around the station.' },
  { jp: '朝の電車はぎゅうぎゅうだった。', say: 'あさのでんしゃわぎゅうぎゅうだった。', ruby: '<ruby>朝<rt>あさ</rt></ruby>の<ruby>電車<rt>でんしゃ</rt></ruby>はぎゅうぎゅうだった。', romaji: 'Asa no densha wa gyūgyū datta.', zh: '早上的電車擠得滿滿的。', en: 'The morning train was packed.' },
  { jp: '雨が降る前に、さっと店に入った。', say: 'あめがふるまえに、さっとみせにはいった。', ruby: '<ruby>雨<rt>あめ</rt></ruby>が<ruby>降<rt>ふ</rt></ruby>る<ruby>前<rt>まえ</rt></ruby>に、さっと<ruby>店<rt>みせ</rt></ruby>に<ruby>入<rt>はい</rt></ruby>った。', romaji: 'Ame ga furu mae ni, satto mise ni haitta.', zh: '下雨前我迅速進了店裡。', en: 'I quickly went into a shop before it started raining.' },
  { jp: 'この靴は足にぴったりだ。', say: 'このくつわあしにぴったりだ。', ruby: 'この<ruby>靴<rt>くつ</rt></ruby>は<ruby>足<rt>あし</rt></ruby>にぴったりだ。', romaji: 'Kono kutsu wa ashi ni pittari da.', zh: '這雙鞋尺寸剛好合腳。', en: 'These shoes fit my feet perfectly.' },
  { jp: '写真をどんどん撮ってください。', say: 'しゃしんをどんどんとってください。', ruby: '<ruby>写真<rt>しゃしん</rt></ruby>をどんどん<ruby>撮<rt>と</rt></ruby>ってください。', romaji: 'Shashin o dondon totte kudasai.', zh: '請盡量多拍些照片。', en: 'Please take lots of photos.' },
  { jp: '地図を見ながら、駅の周りをぐるぐる回った。', say: 'ちずをみながら、えきのまわりをぐるぐるまわった。', ruby: '<ruby>地図<rt>ちず</rt></ruby>を<ruby>見<rt>み</rt></ruby>ながら、<ruby>駅<rt>えき</rt></ruby>の<ruby>周<rt>まわ</rt></ruby>りをぐるぐる<ruby>回<rt>まわ</rt></ruby>った。', romaji: 'Chizu o minagara, eki no mawari o guruguru mawatta.', zh: '我一邊看地圖，一邊繞著車站打轉。', en: 'I circled around the station while looking at the map.' },
  { jp: '暑さで少しふらふらする。', say: 'あつさですこしふらふらする。', ruby: '<ruby>暑<rt>あつ</rt></ruby>さで<ruby>少<rt>すこ</rt></ruby>しふらふらする。', romaji: 'Atsusa de sukoshi furafura suru.', zh: '因為太熱，我有點頭暈。', en: 'I feel a little dizzy from the heat.' }
]

const food = [
  { jp: 'このパンはもちもちしている。', say: 'このパンわもちもちしている。', ruby: 'このパンはもちもちしている。', romaji: 'Kono pan wa mochimochi shite iru.', zh: '這個麵包很有嚼勁、Q 彈。', en: 'This bread is pleasantly chewy.' },
  { jp: 'このケーキはふわふわだ。', say: 'このケーキわふわふわだ。', ruby: 'このケーキはふわふわだ。', romaji: 'Kono kēki wa fuwafuwa da.', zh: '這個蛋糕很鬆軟。', en: 'This cake is fluffy.' },
  { jp: '揚げたての天ぷらはさくさくだ。', say: 'あげたてのてんぷらわさくさくだ。', ruby: '<ruby>揚<rt>あ</rt></ruby>げたての<ruby>天<rt>てん</rt></ruby>ぷらはさくさくだ。', romaji: 'Agetate no tenpura wa sakusaku da.', zh: '剛炸好的天婦羅很酥脆。', en: 'Freshly fried tempura is crisp.' },
  { jp: 'このせんべいはぱりぱりしている。', say: 'このせんべいわぱりぱりしている。', ruby: 'このせんべいはぱりぱりしている。', romaji: 'Kono senbei wa paripari shite iru.', zh: '這個仙貝很脆。', en: 'This rice cracker is crunchy.' },
  { jp: '煮込み料理がとろとろだ。', say: 'にこみりょうりがとろとろだ。', ruby: '<ruby>煮込<rt>にこ</rt></ruby>み<ruby>料理<rt>りょうり</rt></ruby>がとろとろだ。', romaji: 'Nikomi ryōri ga torotoro da.', zh: '燉煮料理煮得濃稠柔軟。', en: 'The stew is rich and meltingly tender.' },
  { jp: 'このうどんはつるつるしている。', say: 'このうどんわつるつるしている。', ruby: 'このうどんはつるつるしている。', romaji: 'Kono udon wa tsurutsuru shite iru.', zh: '這個烏龍麵很滑順。', en: 'These udon noodles are smooth and slippery.' },
  { jp: 'このクッキーはしっとりしている。', say: 'このクッキーわしっとりしている。', ruby: 'このクッキーはしっとりしている。', romaji: 'Kono kukkī wa shittori shite iru.', zh: '這個餅乾濕潤不乾。', en: 'This cookie is moist.' },
  { jp: 'このラーメンはこってりしている。', say: 'このラーメンわこってりしている。', ruby: 'このラーメンはこってりしている。', romaji: 'Kono rāmen wa kotteri shite iru.', zh: '這碗拉麵口味濃厚。', en: 'This ramen is rich and heavy.' },
  { jp: 'このスープはあっさりしている。', say: 'このスープわあっさりしている。', ruby: 'このスープはあっさりしている。', romaji: 'Kono sūpu wa assari shite iru.', zh: '這個湯口味清爽。', en: 'This soup is light and refreshing.' },
  { jp: 'えびがぷりぷりしている。', say: 'えびがぷりぷりしている。', ruby: 'えびがぷりぷりしている。', romaji: 'Ebi ga puripuri shite iru.', zh: '蝦子很彈牙。', en: 'The shrimp is plump and springy.' }
]

const sightsAndSounds = [
  { jp: '雨がぽつぽつ降ってきた。', say: 'あめがぽつぽつふってきた。', ruby: '<ruby>雨<rt>あめ</rt></ruby>がぽつぽつ<ruby>降<rt>ふ</rt></ruby>ってきた。', romaji: 'Ame ga potsupotsu futte kita.', zh: '雨開始零星地下起來。', en: 'It has started to rain in drops.' },
  { jp: '雨がざあざあ降っている。', say: 'あめがざあざあふっている。', ruby: '<ruby>雨<rt>あめ</rt></ruby>がざあざあ<ruby>降<rt>ふ</rt></ruby>っている。', romaji: 'Ame ga zāzā futte iru.', zh: '雨下得嘩啦嘩啦、很大。', en: 'It is pouring with rain.' },
  { jp: '雪がしんしんと降っている。', say: 'ゆきがしんしんとふっている。', ruby: '<ruby>雪<rt>ゆき</rt></ruby>がしんしんと<ruby>降<rt>ふ</rt></ruby>っている。', romaji: 'Yuki ga shinshin to futte iru.', zh: '雪靜靜地下著。', en: 'Snow is falling quietly and steadily.' },
  { jp: '夜景がきらきらしている。', say: 'やけいがきらきらしている。', ruby: '<ruby>夜景<rt>やけい</rt></ruby>がきらきらしている。', romaji: 'Yakei ga kirakira shite iru.', zh: '夜景閃閃發亮。', en: 'The night view is sparkling.' },
  { jp: '新しい靴がぴかぴかだ。', say: 'あたらしいくつがぴかぴかだ。', ruby: '<ruby>新<rt>あたら</rt></ruby>しい<ruby>靴<rt>くつ</rt></ruby>がぴかぴかだ。', romaji: 'Atarashii kutsu ga pikapika da.', zh: '新鞋亮晶晶的。', en: 'My new shoes are shiny.' },
  { jp: '店内がしーんとしている。', say: 'てんないがしーんとしている。', ruby: '<ruby>店内<rt>てんない</rt></ruby>がしーんとしている。', romaji: 'Tennai ga shīn to shite iru.', zh: '店裡安靜得鴉雀無聲。', en: 'The shop is completely silent.' },
  { jp: 'お祭りの会場はわいわいしている。', say: 'おまつりのかいじょうわわいわいしている。', ruby: 'お<ruby>祭<rt>まつ</rt></ruby>りの<ruby>会場<rt>かいじょう</rt></ruby>はわいわいしている。', romaji: 'Omatsuri no kaijō wa waiwai shite iru.', zh: '祭典會場熱熱鬧鬧的。', en: 'The festival venue is lively and bustling.' },
  { jp: '荷物がぐちゃぐちゃになっている。', say: 'にもつがぐちゃぐちゃになっている。', ruby: '<ruby>荷物<rt>にもつ</rt></ruby>がぐちゃぐちゃになっている。', romaji: 'Nimotsu ga guchagucha ni natte iru.', zh: '行李裡亂七八糟的。', en: 'My luggage is a mess.' },
  { jp: 'みんながばらばらに帰った。', say: 'みんながばらばらにかえった。', ruby: 'みんながばらばらに<ruby>帰<rt>かえ</rt></ruby>った。', romaji: 'Minna ga barabara ni kaetta.', zh: '大家各自分散回去了。', en: 'Everyone went home separately.' },
  { jp: '出発時間ぎりぎりに駅に着いた。', say: 'しゅっぱつじかんぎりぎりにえきについた。', ruby: '<ruby>出発時間<rt>しゅっぱつじかん</rt></ruby>ぎりぎりに<ruby>駅<rt>えき</rt></ruby>に<ruby>着<rt>つ</rt></ruby>いた。', romaji: 'Shuppatsu jikan girigiri ni eki ni tsuita.', zh: '我在出發時間的最後一刻抵達車站。', en: 'I arrived at the station just in time for departure.' }
]

const speaking = [
  { jp: '彼女は日本語がぺらぺらだ。', say: 'かのじょわにほんごがぺらぺらだ。', ruby: '<ruby>彼女<rt>かのじょ</rt></ruby>は<ruby>日本語<rt>にほんご</rt></ruby>がぺらぺらだ。', romaji: 'Kanojo wa nihongo ga perapera da.', zh: '她日語說得很流利。', en: 'She speaks Japanese fluently.' },
  { jp: 'この文章をすらすら読める。', say: 'このぶんしょうをすらすらよめる。', ruby: 'この<ruby>文章<rt>ぶんしょう</rt></ruby>をすらすら<ruby>読<rt>よ</rt></ruby>める。', romaji: 'Kono bunshō o surasura yomeru.', zh: '我可以流暢地讀這段文章。', en: 'I can read this passage smoothly.' },
  { jp: 'もう少しゆっくり話してください。', say: 'もうすこしゆっくりはなしてください。', ruby: 'もう<ruby>少<rt>すこ</rt></ruby>しゆっくり<ruby>話<rt>はな</rt></ruby>してください。', romaji: 'Mō sukoshi yukkuri hanashite kudasai.', zh: '請再說慢一點。', en: 'Please speak a little more slowly.' },
  { jp: '声がはっきり聞こえません。', say: 'こえがはっきりきこえません。', ruby: '<ruby>声<rt>こえ</rt></ruby>がはっきり<ruby>聞<rt>き</rt></ruby>こえません。', romaji: 'Koe ga hakkiri kikoemasen.', zh: '我聽不清楚聲音。', en: 'I cannot hear your voice clearly.' },
  { jp: '住所をしっかり確認しよう。', say: 'じゅうしょをしっかりかくにんしよう。', ruby: '<ruby>住所<rt>じゅうしょ</rt></ruby>をしっかり<ruby>確認<rt>かくにん</rt></ruby>しよう。', romaji: 'Jūsho o shikkari kakunin shiyō.', zh: '好好確認一下地址吧。', en: 'Let’s check the address carefully.' },
  { jp: 'うっかり電車を乗り過ごした。', say: 'うっかりでんしゃをのりすごした。', ruby: 'うっかり<ruby>電車<rt>でんしゃ</rt></ruby>を<ruby>乗<rt>の</rt></ruby>り<ruby>過<rt>す</rt></ruby>ごした。', romaji: 'Ukkari densha o norisugoshita.', zh: '我一不小心坐過站了。', en: 'I accidentally rode past my stop.' },
  { jp: '友達をこっそりお祝いした。', say: 'ともだちをこっそりおいわいした。', ruby: '<ruby>友達<rt>ともだち</rt></ruby>をこっそりお<ruby>祝<rt>いわ</rt></ruby>いした。', romaji: 'Tomodachi o kossori oiwai shita.', zh: '我偷偷幫朋友慶祝。', en: 'I secretly celebrated my friend.' },
  { jp: '朝ごはんをたっぷり食べた。', say: 'あさごはんをたっぷりたべた。', ruby: '<ruby>朝<rt>あさ</rt></ruby>ごはんをたっぷり<ruby>食<rt>た</rt></ruby>べた。', romaji: 'Asagohan o tappuri tabeta.', zh: '我早餐吃得很飽。', en: 'I ate plenty for breakfast.' },
  { jp: '景色がすっかり変わった。', say: 'けしきがすっかりかわった。', ruby: '<ruby>景色<rt>けしき</rt></ruby>がすっかり<ruby>変<rt>か</rt></ruby>わった。', romaji: 'Keshiki ga sukkari kawatta.', zh: '景色完全變了。', en: 'The scenery has completely changed.' },
  { jp: '人をじろじろ見ないで。', say: 'ひとをじろじろみないで。', ruby: '<ruby>人<rt>ひと</rt></ruby>をじろじろ<ruby>見<rt>み</rt></ruby>ないで。', romaji: 'Hito o jirojiro minaide.', zh: '不要一直盯著人看。', en: 'Please do not stare at people.' }
]

const groups = [
  { title: '気持ち・体調 · Feelings and condition', items: feelings },
  { title: '移動・旅 · Movement and travel', items: travel },
  { title: '食感 · Food texture', items: food },
  { title: '音・様子 · Sounds and scenes', items: sightsAndSounds },
  { title: '話す・行動 · Speaking and actions', items: speaking }
]

const toLine = (item) => ({
  speaker: 'you',
  jp: item.jp,
  say: item.say,
  ruby: item.ruby,
  romaji: item.romaji,
  zh: item.zh,
  en: item.en
})

export const onomatopoeia = {
  id: 'onomatopoeia-short-phrases',
  title: 'Onomatopoeia Short Phrases',
  titleJp: 'オノマトペのひとこと',
  emoji: '✨',
  description: 'Fifty everyday Japanese sound-symbolic and mimetic phrases for more natural expression.',
  lines: groups.flatMap((group) => group.items).map(toLine),
  phrases: groups
}
