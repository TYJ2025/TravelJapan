// 市場で買い物 — shopping for produce, fish and traditional foods at a local market.
export const traditionalMarket = {
  id: 'traditional-market',
  title: 'At a Traditional Market',
  titleJp: '市場で買い物',
  emoji: '🏮',
  staffAvatar: '🏮',
  staffLabel: '店主 · Market Vendor',
  description: 'Ask prices, buy seasonal food and request fish preparation at a local market.',
  menuTabLabel: '品項 · Items',
  menuIntro: '🔊 聽發音 · 🎤 練習品項 · 點一下商品展開購買句型',
  menuPatternLabel: '購買句型 · Purchase patterns',
  lines: [
    {
      speaker: 'staff',
      jp: 'いらっしゃい。何をお探しですか？',
      say: 'いらっしゃい。なにをおさがしですか？',
      ruby: 'いらっしゃい。<ruby>何<rt>なに</rt></ruby>をお<ruby>探<rt>さが</rt></ruby>しですか？',
      romaji: 'Irasshai. Nani o osagashi desu ka?',
      zh: '歡迎。您在找什麼？',
      en: 'Welcome. What are you looking for?'
    },
    {
      speaker: 'you',
      jp: 'このトマトは一袋いくらですか？',
      say: 'このトマトわひとふくろいくらですか？',
      ruby: 'このトマトは<ruby>一袋<rt>ひとふくろ</rt></ruby>いくらですか？',
      romaji: 'Kono tomato wa hitofukuro ikura desu ka?',
      zh: '這袋番茄多少錢？',
      en: 'How much is this bag of tomatoes?'
    },
    {
      speaker: 'staff',
      jp: '一袋三百円です。今日の朝に入ったばかりですよ。',
      say: 'ひとふくろさんびゃくえんです。きょうのあさにはいったばかりですよ。',
      ruby: '<ruby>一袋<rt>ひとふくろ</rt></ruby><ruby>三百円<rt>さんびゃくえん</rt></ruby>です。<ruby>今日<rt>きょう</rt></ruby>の<ruby>朝<rt>あさ</rt></ruby>に<ruby>入<rt>はい</rt></ruby>ったばかりですよ。',
      romaji: 'Hitofukuro sanbyaku en desu. Kyō no asa ni haitta bakari desu yo.',
      zh: '一袋 300 日圓。今天早上才剛進貨。',
      en: 'It is 300 yen a bag. They just came in this morning.'
    },
    {
      speaker: 'you',
      jp: 'では、二袋お願いします。',
      say: 'では、ふたふくろおねがいします。',
      ruby: 'では、<ruby>二袋<rt>ふたふくろ</rt></ruby>お<ruby>願<rt>ねが</rt></ruby>いします。',
      romaji: 'Dewa, futafukuro onegai shimasu.',
      zh: '那麼，麻煩兩袋。',
      en: 'Then, two bags, please.'
    },
    {
      speaker: 'staff',
      jp: 'ありがとうございます。ほかにいかがですか？',
      say: 'ありがとうございます。ほかにいかがですか？',
      ruby: 'ありがとうございます。ほかにいかがですか？',
      romaji: 'Arigatō gozaimasu. Hoka ni ikaga desu ka?',
      zh: '謝謝。還需要其他的嗎？',
      en: 'Thank you. Anything else?'
    },
    {
      speaker: 'you',
      jp: 'このあじは新鮮ですか？',
      say: 'このあじわしんせんですか？',
      ruby: 'このあじは<ruby>新鮮<rt>しんせん</rt></ruby>ですか？',
      romaji: 'Kono aji wa shinsen desu ka?',
      zh: '這個竹筴魚新鮮嗎？',
      en: 'Is this horse mackerel fresh?'
    },
    {
      speaker: 'staff',
      jp: 'はい、今朝市場に入ったあじです。',
      say: 'はい、けさしじょうにはいったあじです。',
      ruby: 'はい、<ruby>今朝<rt>けさ</rt></ruby><ruby>市場<rt>しじょう</rt></ruby>に<ruby>入<rt>はい</rt></ruby>ったあじです。',
      romaji: 'Hai, kesa shijō ni haitta aji desu.',
      zh: '是，這是今天早上市場進的竹筴魚。',
      en: 'Yes, this horse mackerel came into the market this morning.'
    },
    {
      speaker: 'you',
      jp: '三枚におろしてもらえますか？',
      say: 'さんまいにおろしてもらえますか？',
      ruby: '<ruby>三枚<rt>さんまい</rt></ruby>におろしてもらえますか？',
      romaji: 'Sanmai ni oroshite moraemasu ka?',
      zh: '可以幫我處理成三枚魚片嗎？',
      en: 'Could you fillet it into three pieces for me?'
    },
    {
      speaker: 'staff',
      jp: 'はい、できます。頭と骨はどうしますか？',
      say: 'はい、できます。あたまとほねわどうしますか？',
      ruby: 'はい、できます。<ruby>頭<rt>あたま</rt></ruby>と<ruby>骨<rt>ほね</rt></ruby>はどうしますか？',
      romaji: 'Hai, dekimasu. Atama to hone wa dō shimasu ka?',
      zh: '可以。魚頭和骨頭要怎麼處理？',
      en: 'Yes. What would you like to do with the head and bones?'
    },
    {
      speaker: 'you',
      jp: '頭と骨もください。あら汁に使います。',
      say: 'あたまとほねもください。あらじるにつかいます。',
      ruby: '<ruby>頭<rt>あたま</rt></ruby>と<ruby>骨<rt>ほね</rt></ruby>もください。あら<ruby>汁<rt>じる</rt></ruby>に<ruby>使<rt>つか</rt></ruby>います。',
      romaji: 'Atama to hone mo kudasai. Ara-jiru ni tsukaimasu.',
      zh: '魚頭和骨頭也請給我。我會拿來煮魚骨湯。',
      en: 'Please give me the head and bones too. I will use them for fish-head soup.'
    },
    {
      speaker: 'staff',
      jp: 'かしこまりました。ほかにお漬物はいかがですか？',
      say: 'かしこまりました。ほかにおつけものわいかがですか？',
      ruby: 'かしこまりました。ほかにお<ruby>漬物<rt>つけもの</rt></ruby>はいかがですか？',
      romaji: 'Kashikomarimashita. Hoka ni otsukemono wa ikaga desu ka?',
      zh: '好的。另外需要醃漬物嗎？',
      en: 'Certainly. Would you like some pickles as well?'
    },
    {
      speaker: 'you',
      jp: 'このお漬物を一つください。',
      say: 'このおつけものをひとつください。',
      ruby: 'このお<ruby>漬物<rt>つけもの</rt></ruby>を<ruby>一<rt>ひと</rt></ruby>つください。',
      romaji: 'Kono otsukemono o hitotsu kudasai.',
      zh: '請給我一份這個醃漬物。',
      en: 'One of these pickles, please.'
    },
    {
      speaker: 'staff',
      jp: 'はい、全部で千二百円です。',
      say: 'はい、ぜんぶでせんにひゃくえんです。',
      ruby: 'はい、<ruby>全部<rt>ぜんぶ</rt></ruby>で<ruby>千二百円<rt>せんにひゃくえん</rt></ruby>です。',
      romaji: 'Hai, zenbu de sen-nihyaku en desu.',
      zh: '好的，一共 1,200 日圓。',
      en: 'All together, it is 1,200 yen.'
    },
    {
      speaker: 'you',
      jp: '現金で払います。',
      say: 'げんきんではらいます。',
      ruby: '<ruby>現金<rt>げんきん</rt></ruby>で<ruby>払<rt>はら</rt></ruby>います。',
      romaji: 'Genkin de haraimasu.',
      zh: '我用現金付款。',
      en: 'I will pay in cash.'
    }
  ],
  menu: [
    {
      title: '旬の野菜・果物 · Seasonal produce',
      items: [
        { emoji: '🍅', jp: 'トマト', ruby: 'トマト', romaji: 'tomato', zh: '番茄', en: 'tomatoes', desc: '市場常按袋或按顆販售，可直接詢問一袋多少錢。' },
        { emoji: '🥒', jp: 'きゅうり', ruby: 'きゅうり', romaji: 'kyūri', zh: '小黃瓜', en: 'cucumbers', desc: '夏季常見蔬菜，可做沙拉、漬物或搭配味噌。' },
        { emoji: '🥕', jp: '大根', say: 'だいこん', ruby: '<ruby>大根<rt>だいこん</rt></ruby>', romaji: 'daikon', zh: '白蘿蔔', en: 'daikon radish', desc: '日本料理常用根菜，可煮、燉、磨成蘿蔔泥或做漬物。' },
        { emoji: '🧅', jp: '長ねぎ', say: 'ながねぎ', ruby: '<ruby>長<rt>なが</rt></ruby>ねぎ', romaji: 'naganegi', zh: '長蔥', en: 'Japanese long onion', desc: '鍋物、湯品與燒烤常用，是市場常見的日本蔬菜。' },
        { emoji: '🍄', jp: 'しいたけ', ruby: 'しいたけ', romaji: 'shiitake', zh: '香菇', en: 'shiitake mushrooms', desc: '鮮香菇可烤、煮或加入湯品；乾香菇也常見。' },
        { emoji: '🥬', jp: '京野菜', say: 'きょうやさい', ruby: '<ruby>京野菜<rt>きょうやさい</rt></ruby>', romaji: 'kyōyasai', zh: '京野菜', en: 'Kyoto heirloom vegetables', desc: '京都市場常見的傳統在地蔬菜，品項依季節變化。' },
        { emoji: '🍊', jp: 'みかん', ruby: 'みかん', romaji: 'mikan', zh: '蜜柑', en: 'mandarin oranges', desc: '秋冬常見水果，通常按袋或按網袋販售。' },
        { emoji: '🍎', jp: 'りんご', ruby: 'りんご', romaji: 'ringo', zh: '蘋果', en: 'apples', desc: '依產地與品種有不同甜度與脆度，可請店家推薦當季品種。' }
      ]
    },
    {
      title: '鮮魚・海産物 · Fresh fish and seafood',
      items: [
        { emoji: '🐟', jp: 'あじ', ruby: 'あじ', romaji: 'aji', zh: '竹筴魚', en: 'horse mackerel', desc: '可請魚販二枚おろし或三枚おろし，適合鹽烤、南蠻漬或生魚料理。' },
        { emoji: '🐟', jp: 'さば', ruby: 'さば', romaji: 'saba', zh: '鯖魚', en: 'mackerel', desc: '油脂豐厚，常用於鹽烤、味噌煮或醋漬。' },
        { emoji: '🐟', jp: '鯛', say: 'たい', ruby: '<ruby>鯛<rt>たい</rt></ruby>', romaji: 'tai', zh: '鯛魚', en: 'sea bream', desc: '白身魚代表，常見於慶祝料理、鹽烤與刺身。' },
        { emoji: '🐟', jp: '鮭', say: 'さけ', ruby: '<ruby>鮭<rt>さけ</rt></ruby>', romaji: 'sake', zh: '鮭魚', en: 'salmon', desc: '可買生鮮切片、鹽鮭或醃漬鮭魚。' },
        { emoji: '🐟', jp: 'しらす', ruby: 'しらす', romaji: 'shirasu', zh: '吻仔魚', en: 'whitebait', desc: '常拌飯、做丼飯或搭配蘿蔔泥食用。' },
        { emoji: '🐟', jp: '干物', say: 'ひもの', ruby: '<ruby>干物<rt>ひもの</rt></ruby>', romaji: 'himono', zh: '魚乾／一夜干', en: 'dried fish', desc: '經風乾處理的魚，烤後香氣濃郁，常見鯖魚與花魚。' },
        { emoji: '🦪', jp: '牡蠣', say: 'かき', ruby: '<ruby>牡蠣<rt>かき</rt></ruby>', romaji: 'kaki', zh: '牡蠣', en: 'oysters', desc: '冬季常見；可詢問適合生食、烤或油炸的品項。' },
        { emoji: '🦐', jp: 'えび', ruby: 'えび', romaji: 'ebi', zh: '蝦子', en: 'shrimp', desc: '可買整尾蝦，適合鹽烤、天婦羅或加入湯品。' }
      ]
    },
    {
      title: '伝統食品・お惣菜 · Traditional foods and prepared items',
      items: [
        { emoji: '🥒', jp: 'お漬物', say: 'おつけもの', ruby: 'お<ruby>漬物<rt>つけもの</rt></ruby>', romaji: 'otsukemono', zh: '醃漬物', en: 'Japanese pickles', desc: '常見蘿蔔、黃瓜、茄子與白菜漬物，是日本市場代表性伴手食材。' },
        { emoji: '🧊', jp: '豆腐', say: 'とうふ', ruby: '<ruby>豆腐<rt>とうふ</rt></ruby>', romaji: 'tōfu', zh: '豆腐', en: 'tofu', desc: '傳統市場常有現做豆腐店，可買冷奴、油豆腐或豆乳。' },
        { emoji: '🟨', jp: '湯葉', say: 'ゆば', ruby: '<ruby>湯葉<rt>ゆば</rt></ruby>', romaji: 'yuba', zh: '湯葉', en: 'tofu skin', desc: '豆漿加熱表面形成的薄膜，是京都等地常見的傳統食材。' },
        { emoji: '🥚', jp: 'だし巻き卵', say: 'だしまきたまご', ruby: 'だし<ruby>巻<rt>ま</rt></ruby>き<ruby>卵<rt>たまご</rt></ruby>', romaji: 'dashimaki tamago', zh: '高湯玉子燒', en: 'dashi rolled omelet', desc: '帶高湯香氣的日式玉子燒，市場常可買到現做品。' },
        { emoji: '🟤', jp: '佃煮', say: 'つくだに', ruby: '<ruby>佃煮<rt>つくだに</rt></ruby>', romaji: 'tsukudani', zh: '佃煮', en: 'soy-simmered preserved food', desc: '將小魚、海藻或貝類以醬油、味醂慢煮，是配飯保存食。' },
        { emoji: '🐟', jp: 'かつお節', say: 'かつおぶし', ruby: 'かつお<ruby>節<rt>ぶし</rt></ruby>', romaji: 'katsuobushi', zh: '柴魚片', en: 'bonito flakes', desc: '可用來熬高湯或灑在料理上；市場常有現削品。' },
        { emoji: '🍘', jp: 'おせんべい', ruby: 'おせんべい', romaji: 'osenbei', zh: '米果／仙貝', en: 'rice crackers', desc: '適合作為邊走邊吃或伴手禮的傳統零食；請留意各市場飲食規則。' },
        { emoji: '🍱', jp: 'お惣菜', say: 'おそうざい', ruby: 'お<ruby>惣菜<rt>そうざい</rt></ruby>', romaji: 'osōzai', zh: '熟食小菜', en: 'prepared side dishes', desc: '炸物、煮物、沙拉等可直接帶走的市場熟食。' }
      ]
    }
  ],
  phrases: [
    {
      title: '値段と量 · Price and quantity',
      items: [
        { jp: 'これはいくらですか？', ruby: 'これはいくらですか？', zh: '這個多少錢？', en: 'How much is this?' },
        { jp: '一袋いくらですか？', say: 'ひとふくろいくらですか？', ruby: '<ruby>一袋<rt>ひとふくろ</rt></ruby>いくらですか？', zh: '一袋多少錢？', en: 'How much is one bag?' },
        { jp: '二つお願いします。', say: 'ふたつおねがいします。', ruby: '<ruby>二<rt>ふた</rt></ruby>つお<ruby>願<rt>ねが</rt></ruby>いします。', zh: '麻煩兩個。', en: 'Two, please.' },
        { jp: '少しだけください。', say: 'すこしだけください。', ruby: '<ruby>少<rt>すこ</rt></ruby>しだけください。', zh: '請給我一點就好。', en: 'Just a little, please.' }
      ]
    },
    {
      title: '魚屋で · At the fish stall',
      items: [
        { jp: 'この魚は新鮮ですか？', say: 'このさかなわしんせんですか？', ruby: 'この<ruby>魚<rt>さかな</rt></ruby>は<ruby>新鮮<rt>しんせん</rt></ruby>ですか？', zh: '這條魚新鮮嗎？', en: 'Is this fish fresh?' },
        { jp: '三枚におろしてもらえますか？', say: 'さんまいにおろしてもらえますか？', ruby: '<ruby>三枚<rt>さんまい</rt></ruby>におろしてもらえますか？', zh: '可以幫我處理成三枚魚片嗎？', en: 'Could you fillet it into three pieces?' },
        { jp: '頭と骨もください。', say: 'あたまとほねもください。', ruby: '<ruby>頭<rt>あたま</rt></ruby>と<ruby>骨<rt>ほね</rt></ruby>もください。', zh: '魚頭和骨頭也請給我。', en: 'Please give me the head and bones too.' },
        { jp: 'おすすめの魚は何ですか？', say: 'おすすめのさかなわなんですか？', ruby: 'おすすめの<ruby>魚<rt>さかな</rt></ruby>は<ruby>何<rt>なん</rt></ruby>ですか？', zh: '推薦的魚是什麼？', en: 'What fish do you recommend?' }
      ]
    }
  ]
}
