// 割烹 (Kappō) — upscale counter dining, seasonal chef's recommendations, omakase, sake.
export const kappo = {
  id: 'kappo',
  title: 'Kappo (Chef’s Counter)',
  titleJp: '割烹',
  emoji: '🍶',
  description: 'Dine at the chef’s counter — seasonal catch, omakase, and sake the staff recommend.',
  lines: [
    {
      speaker: 'staff',
      jp: 'いらっしゃいませ。お一人様ですか？',
      ruby: 'いらっしゃいませ。お<ruby>一人様<rt>ひとりさま</rt></ruby>ですか？',
      romaji: 'Irasshaimase. O-hitori-sama desu ka?',
      zh: '歡迎光臨。是一位嗎？',
      en: 'Welcome. Just one person?'
    },
    {
      speaker: 'you',
      jp: 'はい、一人です。カウンターでお願いします。',
      ruby: 'はい、<ruby>一人<rt>ひとり</rt></ruby>です。カウンターでお<ruby>願<rt>ねが</rt></ruby>いします。',
      romaji: 'Hai, hitori desu. Kauntā de onegai shimasu.',
      zh: '是的，一個人。請給我吧台座位。',
      en: 'Yes, just me. The counter, please.'
    },
    {
      speaker: 'staff',
      jp: 'どうぞ、こちらへ。本日のおすすめは旬の魚です。',
      say: 'どうぞ、こちらへ。ほんじつのおすすめはしゅんのさかなです。',
      ruby: 'どうぞ、こちらへ。<ruby>本日<rt>ほんじつ</rt></ruby>のおすすめは<ruby>旬<rt>しゅん</rt></ruby>の<ruby>魚<rt>さかな</rt></ruby>です。',
      romaji: 'Dōzo, kochira e. Honjitsu no osusume wa shun no sakana desu.',
      zh: '請往這邊。今天的推薦是當季的魚。',
      en: 'This way, please. Today’s recommendation is the seasonal fish.'
    },
    {
      speaker: 'you',
      jp: '旬の魚は何ですか？',
      say: 'しゅんのさかなはなんですか？',
      ruby: '<ruby>旬<rt>しゅん</rt></ruby>の<ruby>魚<rt>さかな</rt></ruby>は<ruby>何<rt>なん</rt></ruby>ですか？',
      romaji: 'Shun no sakana wa nan desu ka?',
      zh: '當季的魚是什麼呢？',
      en: 'What is the seasonal fish?'
    },
    {
      speaker: 'staff',
      jp: '今日は鯛が良いですよ。お造りがおすすめです。',
      say: 'きょうはたいがいいですよ。おつくりがおすすめです。',
      ruby: '<ruby>今日<rt>きょう</rt></ruby>は<ruby>鯛<rt>たい</rt></ruby>が<ruby>良<rt>よ</rt></ruby>いですよ。お<ruby>造<rt>つく</rt></ruby>りがおすすめです。',
      romaji: 'Kyō wa tai ga yoi desu yo. O-tsukuri ga osusume desu.',
      zh: '今天的鯛魚很棒喔。推薦做成生魚片。',
      en: 'The sea bream is excellent today. I recommend it as sashimi.'
    },
    {
      speaker: 'you',
      jp: 'では、お任せでお願いします。',
      ruby: 'では、お<ruby>任<rt>まか</rt></ruby>せでお<ruby>願<rt>ねが</rt></ruby>いします。',
      romaji: 'Dewa, o-makase de onegai shimasu.',
      zh: '那麼，就交給師傅安排吧。',
      en: 'Then I’ll leave it to you, omakase please.'
    },
    {
      speaker: 'staff',
      jp: 'かしこまりました。まず先付からお出しします。',
      say: 'かしこまりました。まずさきづけからおだしします。',
      ruby: 'かしこまりました。まず<ruby>先付<rt>さきづけ</rt></ruby>からお<ruby>出<rt>だ</rt></ruby>しします。',
      romaji: 'Kashikomarimashita. Mazu sakizuke kara o-dashi shimasu.',
      zh: '好的。先從前菜開始上菜。',
      en: 'Certainly. We’ll start with the appetizer.'
    },
    {
      speaker: 'you',
      jp: 'これは何ですか？',
      ruby: 'これは<ruby>何<rt>なん</rt></ruby>ですか？',
      romaji: 'Kore wa nan desu ka?',
      zh: '這是什麼呢？',
      en: 'What is this?'
    },
    {
      speaker: 'staff',
      jp: 'それは土瓶蒸しです。出汁を少し飲んでみてください。',
      say: 'それはどびんむしです。だしをすこしのんでみてください。',
      ruby: 'それは<ruby>土瓶蒸<rt>どびんむ</rt></ruby>しです。<ruby>出汁<rt>だし</rt></ruby>を<ruby>少<rt>すこ</rt></ruby>し<ruby>飲<rt>の</rt></ruby>んでみてください。',
      romaji: 'Sore wa dobin-mushi desu. Dashi o sukoshi nonde mite kudasai.',
      zh: '那是土瓶蒸。請先喝一點高湯看看。',
      en: 'That’s dobin-mushi. Please try a little of the broth first.'
    },
    {
      speaker: 'you',
      jp: '冷酒のおすすめはありますか？',
      say: 'れいしゅのおすすめはありますか？',
      ruby: '<ruby>冷酒<rt>れいしゅ</rt></ruby>のおすすめはありますか？',
      romaji: 'Reishu no osusume wa arimasu ka?',
      zh: '有推薦的冷酒嗎？',
      en: 'Do you have a recommended cold sake?'
    },
    {
      speaker: 'you',
      jp: 'とても美味しいです。出汁が上品ですね。',
      say: 'とてもおいしいです。だしがじょうひんですね。',
      ruby: 'とても<ruby>美味<rt>おい</rt></ruby>しいです。<ruby>出汁<rt>だし</rt></ruby>が<ruby>上品<rt>じょうひん</rt></ruby>ですね。',
      romaji: 'Totemo oishii desu. Dashi ga jōhin desu ne.',
      zh: '非常好吃。高湯很雅緻呢。',
      en: 'It’s delicious. The broth is so refined.'
    },
    {
      speaker: 'you',
      jp: 'ごちそうさまでした。お会計お願いします。',
      ruby: 'ごちそうさまでした。お<ruby>会計<rt>かいけい</rt></ruby>お<ruby>願<rt>ねが</rt></ruby>いします。',
      romaji: 'Gochisōsama deshita. O-kaikei onegai shimasu.',
      zh: '謝謝招待。麻煩結帳。',
      en: 'Thank you for the meal. The bill, please.'
    }
  ],
  menu: [
    {
      title: '先付・前菜 · Appetizers',
      items: [
        { emoji: '🥢', jp: '先付', say: 'さきづけ', ruby: '<ruby>先付<rt>さきづけ</rt></ruby>', romaji: 'sakizuke', zh: '開胃前菜', en: 'amuse-bouche', desc: '套餐開頭的一小道前菜，展現當季風味。' },
        { emoji: '🍱', jp: '前菜の盛り合わせ', say: 'ぜんさいのもりあわせ', ruby: '<ruby>前菜<rt>ぜんさい</rt></ruby>の<ruby>盛<rt>も</rt></ruby>り<ruby>合<rt>あ</rt></ruby>わせ', romaji: 'zensai no moriawase', zh: '前菜拼盤', en: 'assorted appetizers', desc: '數種季節小菜的拼盤，繽紛精緻。' },
        { emoji: '🥬', jp: '季節の和え物', say: 'きせつのあえもの', ruby: '<ruby>季節<rt>きせつ</rt></ruby>の<ruby>和<rt>あ</rt></ruby>え<ruby>物<rt>もの</rt></ruby>', romaji: 'kisetsu no aemono', zh: '季節涼拌', en: 'seasonal dressed dish', desc: '當季蔬菜以芝麻或味噌涼拌，清淡爽口。' },
        { emoji: '🥗', jp: '酢の物', say: 'すのもの', ruby: '<ruby>酢<rt>す</rt></ruby>の<ruby>物<rt>もの</rt></ruby>', romaji: 'sunomono', zh: '醋漬小菜', en: 'vinegared dish', desc: '海鮮或蔬菜以醋醃漬，清爽開胃解膩。' },
        { emoji: '🍮', jp: '茶碗蒸し', say: 'ちゃわんむし', ruby: '<ruby>茶碗蒸<rt>ちゃわんむ</rt></ruby>し', romaji: 'chawan-mushi', zh: '茶碗蒸', en: 'savory egg custard', desc: '滑嫩蒸蛋羹，內含蝦、雞肉與銀杏。' }
      ]
    },
    {
      title: 'お造り · Sashimi',
      items: [
        { emoji: '🐟', jp: 'お造り盛り合わせ', say: 'おつくりもりあわせ', ruby: 'お<ruby>造<rt>つく</rt></ruby>り<ruby>盛<rt>も</rt></ruby>り<ruby>合<rt>あ</rt></ruby>わせ', romaji: 'o-tsukuri moriawase', zh: '生魚片拼盤', en: 'assorted sashimi', desc: '當季鮮魚切片拼盤，師傅依當日漁獲現切。' },
        { emoji: '🐠', jp: '鯛のお造り', say: 'たいのおつくり', ruby: '<ruby>鯛<rt>たい</rt></ruby>のお<ruby>造<rt>つく</rt></ruby>り', romaji: 'tai no o-tsukuri', zh: '鯛魚生魚片', en: 'sea bream sashimi', desc: '鯛魚切片，肉質緊實、味道清甜高雅。' },
        { emoji: '🐟', jp: '鰤のお造り', say: 'ぶりのおつくり', ruby: '<ruby>鰤<rt>ぶり</rt></ruby>のお<ruby>造<rt>つく</rt></ruby>り', romaji: 'buri no o-tsukuri', zh: '鰤魚生魚片', en: 'yellowtail sashimi', desc: '冬季鰤魚切片，油脂豐厚、入口即化。' },
        { emoji: '🍣', jp: '本マグロ', say: 'ほんマグロ', ruby: '<ruby>本<rt>ほん</rt></ruby>マグロ', romaji: 'hon-maguro', zh: '黑鮪魚', en: 'bluefin tuna', desc: '黑鮪魚生魚片，赤身與脂肪皆鮮美濃郁。' },
        { emoji: '🐟', jp: '季節の白身', say: 'きせつのしらみ', ruby: '<ruby>季節<rt>きせつ</rt></ruby>の<ruby>白身<rt>しらみ</rt></ruby>', romaji: 'kisetsu no shiromi', zh: '季節白肉魚', en: 'seasonal white fish', desc: '當季白肉魚生魚片，清爽細緻。' }
      ]
    },
    {
      title: '焼き物・揚げ物 · Grilled & fried',
      items: [
        { emoji: '🔥', jp: '焼き魚', say: 'やきざかな', ruby: '<ruby>焼<rt>や</rt></ruby>き<ruby>魚<rt>ざかな</rt></ruby>', romaji: 'yakizakana', zh: '烤魚', en: 'grilled fish', desc: '當季鮮魚以鹽烤調理，外香內嫩。' },
        { emoji: '🐟', jp: '西京焼き', say: 'さいきょうやき', ruby: '<ruby>西京焼<rt>さいきょうや</rt></ruby>き', romaji: 'saikyō-yaki', zh: '西京燒', en: 'miso-marinated grilled fish', desc: '魚肉以西京味噌醃漬後燒烤，甘甜入味。' },
        { emoji: '🍤', jp: '鰻の蒲焼き', say: 'うなぎのかばやき', ruby: '<ruby>鰻<rt>うなぎ</rt></ruby>の<ruby>蒲焼<rt>かばや</rt></ruby>き', romaji: 'unagi no kabayaki', zh: '蒲燒鰻魚', en: 'grilled eel in sweet sauce', desc: '鰻魚刷甜醬燒烤，皮脆肉嫩、香氣四溢。' },
        { emoji: '🍤', jp: '天ぷら盛り合わせ', say: 'てんぷらもりあわせ', ruby: '<ruby>天<rt>てん</rt></ruby>ぷら<ruby>盛<rt>も</rt></ruby>り<ruby>合<rt>あ</rt></ruby>わせ', romaji: 'tenpura moriawase', zh: '天婦羅拼盤', en: 'assorted tempura', desc: '當季蔬菜與海鮮現炸，麵衣輕薄酥脆。' },
        { emoji: '🍢', jp: '揚げ出し豆腐', say: 'あげだしどうふ', ruby: '<ruby>揚<rt>あ</rt></ruby>げ<ruby>出<rt>だ</rt></ruby>し<ruby>豆腐<rt>どうふ</rt></ruby>', romaji: 'agedashi-dōfu', zh: '炸豆腐', en: 'agedashi tofu', desc: '豆腐輕炸後浸高湯醬汁，外軟內嫩。' },
        { emoji: '🍤', jp: '海老の天ぷら', say: 'えびのてんぷら', ruby: '<ruby>海老<rt>えび</rt></ruby>の<ruby>天<rt>てん</rt></ruby>ぷら', romaji: 'ebi no tenpura', zh: '炸蝦天婦羅', en: 'shrimp tempura', desc: '大蝦現炸，麵衣酥脆、蝦肉鮮甜彈牙。' }
      ]
    },
    {
      title: '煮物・蒸し物 · Simmered & steamed',
      items: [
        { emoji: '🍲', jp: '煮魚', say: 'にざかな', ruby: '<ruby>煮魚<rt>にざかな</rt></ruby>', romaji: 'nizakana', zh: '煮魚', en: 'simmered fish', desc: '以醬油與味醂慢燉的魚，入味甘鹹。' },
        { emoji: '🍲', jp: '季節の煮物', say: 'きせつのにもの', ruby: '<ruby>季節<rt>きせつ</rt></ruby>の<ruby>煮物<rt>にもの</rt></ruby>', romaji: 'kisetsu no nimono', zh: '季節燉煮', en: 'seasonal simmered dish', desc: '當季蔬菜以高湯燉煮，溫潤入味。' },
        { emoji: '🫖', jp: '土瓶蒸し', say: 'どびんむし', ruby: '<ruby>土瓶蒸<rt>どびんむ</rt></ruby>し', romaji: 'dobin-mushi', zh: '土瓶蒸', en: 'teapot broth with matsutake', desc: '以土瓶盛裝的松茸清湯，香氣高雅。' },
        { emoji: '🍮', jp: '茶碗蒸し', say: 'ちゃわんむし', ruby: '<ruby>茶碗蒸<rt>ちゃわんむ</rt></ruby>し', romaji: 'chawan-mushi', zh: '茶碗蒸', en: 'savory egg custard', desc: '滑嫩蒸蛋羹，內含蝦、雞肉與銀杏。' },
        { emoji: '🥘', jp: '肉じゃが', say: 'にくじゃが', ruby: '<ruby>肉<rt>にく</rt></ruby>じゃが', romaji: 'niku-jaga', zh: '馬鈴薯燉肉', en: 'simmered meat & potatoes', desc: '牛肉與馬鈴薯以甜鹹醬汁燉煮，家常溫暖。' }
      ]
    },
    {
      title: 'お食事 · Rice & finish',
      items: [
        { emoji: '🍚', jp: '季節の炊き込みご飯', say: 'きせつのたきこみごはん', ruby: '<ruby>季節<rt>きせつ</rt></ruby>の<ruby>炊<rt>た</rt></ruby>き<ruby>込<rt>こ</rt></ruby>みご<ruby>飯<rt>はん</rt></ruby>', romaji: 'kisetsu no takikomi-gohan', zh: '季節炊飯', en: 'seasonal mixed rice', desc: '當季食材與米同炊，吸滿高湯香氣。' },
        { emoji: '🍚', jp: '土鍋ご飯', say: 'どなべごはん', ruby: '<ruby>土鍋<rt>どなべ</rt></ruby>ご<ruby>飯<rt>はん</rt></ruby>', romaji: 'donabe-gohan', zh: '土鍋飯', en: 'clay-pot rice', desc: '土鍋現炊的白飯，粒粒分明、帶鍋巴香。' },
        { emoji: '🍵', jp: '味噌汁', say: 'みそしる', ruby: '<ruby>味噌汁<rt>みそしる</rt></ruby>', romaji: 'miso-shiru', zh: '味噌湯', en: 'miso soup', desc: '以高湯與味噌調成的湯，溫潤暖胃。' },
        { emoji: '🥒', jp: '香の物', say: 'こうのもの', ruby: '<ruby>香<rt>こう</rt></ruby>の<ruby>物<rt>もの</rt></ruby>', romaji: 'kōnomono', zh: '醃漬醬菜', en: 'pickles', desc: '日式醃漬醬菜，清爽爽脆、佐飯解膩。' },
        { emoji: '🍨', jp: '自家製デザート', say: 'じかせいデザート', ruby: '<ruby>自家製<rt>じかせい</rt></ruby>デザート', romaji: 'jikasei dezāto', zh: '自製甜點', en: 'house-made dessert', desc: '店家手作的季節甜點，收尾清爽。' }
      ]
    },
    {
      title: 'お酒 · Sake & drinks',
      items: [
        { emoji: '🍶', jp: '冷酒', say: 'れいしゅ', ruby: '<ruby>冷酒<rt>れいしゅ</rt></ruby>', romaji: 'reishu', zh: '冷酒', en: 'chilled sake', desc: '冰鎮日本酒，口感清爽、香氣細緻。' },
        { emoji: '🍶', jp: '熱燗', say: 'あつかん', ruby: '<ruby>熱燗<rt>あつかん</rt></ruby>', romaji: 'atsukan', zh: '熱清酒', en: 'warm sake', desc: '溫熱的日本酒，香氣飽滿、暖身。' },
        { emoji: '🍶', jp: '純米酒', say: 'じゅんまいしゅ', ruby: '<ruby>純米酒<rt>じゅんまいしゅ</rt></ruby>', romaji: 'junmai-shu', zh: '純米酒', en: 'junmai sake', desc: '純米釀造的清酒，米香飽滿、口感醇厚。' },
        { emoji: '🍶', jp: '大吟醸', say: 'だいぎんじょう', ruby: '<ruby>大吟醸<rt>だいぎんじょう</rt></ruby>', romaji: 'daiginjō', zh: '大吟釀', en: 'daiginjo sake', desc: '高度精米的頂級清酒，香氣華麗、口感細緻。' },
        { emoji: '🍺', jp: '生ビール', say: 'なまビール', ruby: '<ruby>生<rt>なま</rt></ruby>ビール', romaji: 'nama-bīru', zh: '生啤酒', en: 'draft beer', desc: '冰涼生啤，泡沫綿密、暢快解膩。' },
        { emoji: '🥃', jp: '焼酎', say: 'しょうちゅう', ruby: '<ruby>焼酎<rt>しょうちゅう</rt></ruby>', romaji: 'shōchū', zh: '燒酎', en: 'shochu', desc: '蒸餾酒，可加冰或兌水，風味多元。' },
        { emoji: '🍵', jp: 'ウーロン茶', ruby: 'ウーロン<ruby>茶<rt>ちゃ</rt></ruby>', romaji: 'ūron-cha', zh: '烏龍茶', en: 'oolong tea', desc: '無酒精的烏龍茶，解膩順口。' }
      ]
    }
  ],
  phrases: [
    {
      title: 'よく使う一言 · Handy phrases',
      items: [
        { jp: 'お任せでお願いします。', ruby: 'お<ruby>任<rt>まか</rt></ruby>せでお<ruby>願<rt>ねが</rt></ruby>いします。', zh: '請交給師傅安排（無菜單）。', en: 'I’ll leave it to you, omakase please.' },
        { jp: '本日のおすすめは何ですか？', say: 'ほんじつのおすすめはなんですか？', ruby: '<ruby>本日<rt>ほんじつ</rt></ruby>のおすすめは<ruby>何<rt>なん</rt></ruby>ですか？', zh: '今天的推薦是什麼？', en: 'What do you recommend today?' },
        { jp: 'これは何ですか？', ruby: 'これは<ruby>何<rt>なん</rt></ruby>ですか？', zh: '這是什麼？', en: 'What is this?' },
        { jp: '冷酒のおすすめはありますか？', say: 'れいしゅのおすすめはありますか？', ruby: '<ruby>冷酒<rt>れいしゅ</rt></ruby>のおすすめはありますか？', zh: '有推薦的冷酒嗎？', en: 'Do you have a recommended cold sake?' },
        { jp: '少なめでお願いします。', say: 'すくなめでおねがいします。', ruby: '<ruby>少<rt>すく</rt></ruby>なめでお<ruby>願<rt>ねが</rt></ruby>いします。', zh: '請給我少一點。', en: 'A smaller portion, please.' },
        { jp: 'ごちそうさまでした。', ruby: 'ごちそうさまでした。', zh: '謝謝招待（吃飽了）。', en: 'Thank you for the meal.' }
      ]
    }
  ]
}
