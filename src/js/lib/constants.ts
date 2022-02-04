export const Prefectures: {[index: number]: string} = {
  1: "北海道",
  2: "青森県",
  3: "岩手県",
  4: "宮城県",
  5: "秋田県",
  6: "山形県",
  7: "福島県",
  8: "茨城県",
  9: "栃木県",
  10: "群馬県",
  11: "埼玉県",
  12: "千葉県",
  13: "東京都",
  14: "神奈川県",
  15: "新潟県",
  16: "富山県",
  17: "石川県",
  18: "福井県",
  19: "山梨県",
  20: "長野県",
  21: "岐阜県",
  22: "静岡県",
  23: "愛知県",
  24: "三重県",
  25: "滋賀県",
  26: "京都府",
  27: "大阪府",
  28: "兵庫県",
  29: "奈良県",
  30: "和歌山県",
  31: "鳥取県",
  32: "島根県",
  33: "岡山県",
  34: "広島県",
  35: "山口県",
  36: "徳島県",
  37: "香川県",
  38: "愛媛県",
  39: "高知県",
  40: "福岡県",
  41: "佐賀県",
  42: "長崎県",
  43: "熊本県",
  44: "大分県",
  45: "宮崎県",
  46: "鹿児島県",
  47: "沖縄県"
};

type AreaType = {
  name: string,
  prefectures: number[]
}

export const Areas: {[index: string]: AreaType} = {
  "1": {
    "name": "北海道・東北地方",
    "prefectures": [
      1,
      2,
      3,
      4,
      5,
      6,
      7
    ]
  },
  "2": {
    "name": "関東",
    "prefectures": [
      13,
      14,
      11,
      12,
      8,
      9,
      10
    ]
  },
  "3": {
    "name": "北陸・甲信越",
    "prefectures": [
      15,
      20,
      16,
      17,
      18,
      19
    ]
  },
  "4": {
    "name": "東海・近畿",
    "prefectures": [
      23,
      22,
      21,
      24,
      27,
      26,
      28,
      25,
      30,
      29
    ]
  },
  "5": {
    "name": "中国・四国",
    "prefectures": [
      31,
      32,
      33,
      34,
      35,
      36,
      37,
      38,
      39
    ]
  },
  "7": {
    "name": "九州・沖縄",
    "prefectures": [
      40,
      41,
      42,
      43,
      44,
      45,
      46,
      47
    ]
  }
}

export const OpenStates: {[index: string]: string} = {
  'normal': '通常営業中',
  'warn': '営業時間変更もしくは給油制限あり',
  'stop': '営業休止中',
  'em': '緊急車両のみ給油可能',
  'none': '確認中(入力なし)',
}
