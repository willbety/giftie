
export const GLOBAL_KEYS = {
  EXIST_KEY: 'HAS_GIFT',
  NAME_KEY: 'GIFT_NAME',
  IMAGE_KEY: 'GIFT_IMAGE_URL',
};

// 是否允许对方在抽奖结束后重新抽奖
export const IS_SHOW_RESTART = false;

// 首页配置
export const homeConfig = {
  // 标题
  title: '520送礼抽奖',
  // 留言，数组的每一项代表一行
  messages: [
    { key: 'a', wording: '这是第一行文案', },
    { key: 's', wording: '这是第二行文案', },
    { key: 'd', wording: '然后，这里是第三行文案', },
  ],
  // 最终解释权归属人
  owner: 'XXX',
  // 抽奖转盘的动画时间，单位毫秒
  timeout: 5000,
  // 指定赠送的礼物的索引（第几个礼物中奖），取值范围 0-8
  targetGiftIndex: null,
};

// 礼物清单
// 字段 key 不用改，只要保证每个礼物的 key 字段是不同的即可
// 图片放在 public/images 中，建议是正方形，否则影响视觉体验
// name 是礼物的全称；alias 是礼物的简称（用来显示在抽奖方格里）
export const gifts = [
  { key: 'q', name: '化妆品', alias: '化妆品', image: '/images/1.png',  description: '「给你也不会用啊」' },
  { key: 'w', name: '辣条大礼包', alias: '辣条', image: '/images/latiao.png',  description: '“辣你一辈子”' },
  { key: 'e', name: '兰蔻小黑瓶套装', alias: '小黑瓶套装', image: '/images/3.png',  description: '「豆豆快遮不住了」' },
  { key: 'r', name: '52红包', alias: '52', image: '/images/6.png',  description: '“好想打你”' },
  { key: 't', name: '一顿大餐', alias: '大餐', image: '/images/chi.png',  description: '「吃死你」' },
  { key: 'y', name: 'ipad', alias: 'ipad', image: '/images/ipad.png',  description: '“下辈子再见”' },
  { key: 'u', name: '电脑', alias: '电脑', image: '/images/conputer.png',  description: '“再说卡打死你”' },
  { key: 'i', name: '手机', alias: '戴森', image: '/images/phone.png',  description: '「回复再慢，就打死」' },
];
