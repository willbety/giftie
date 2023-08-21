
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
  title: '七夕无敌趣味抽签',
  // 留言，数组的每一项代表一行
  messages: [
    { key: 'a', wording: '你太想一个结果了，所以你不快乐', },
    { key: 's', wording: '你只是浇了一次水，你就希望这朵花永远为你开', },
    { key: 'd', wording: '人世间得失取舍，又不是只用你一个人爱而不得', },
    { key: 'f', wording: '理想主义只是理想主义，有些问题就没有答案', },
    { key: 'g', wording: '大家只是阶段性的陪伴，岁月会为你去轻描谈写', },
    { key: 'h', wording: '大家只是阶段性的陪伴，岁月会为你去轻描谈写', },
    { key: 'j', wording: '时间会未我们筛选对的人', },
    { key: 'k', wording: '上面是七夕文学，送你也送我,我只想未来有你也有我', },
  ],
  // 最终解释权归属人
  owner: '刘易',
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
  { key: 'q', name: '不知名香水', alias: '化妆品', image: '/images/xiangshui.png',  description: '「想(香)你一辈子」' },
  { key: 'w', name: '辣条大礼包', alias: '辣条', image: '/images/latiao.png',  description: '“辣你一辈子”' },
  { key: 'e', name: '优酷或者芒果Tv会员', alias: '会员', image: '/images/youku.png',  description: '「为你承包一辈子VIP，好好看剧」' },
  { key: 'r', name: '52红包', alias: '52', image: '/images/6.png',  description: '“凑个数”' },
  { key: 't', name: '一顿大餐', alias: '大餐', image: '/images/chi.png',  description: '「请大哥陪小弟吃一餐」' },
  { key: 'y', name: '两张电影票', alias: 'ipad', image: '/images/ipad.png',  description: '' },
  { key: 'u', name: '电脑', alias: '电脑', image: '/images/conputer.png',  description: '“再说卡打死你”' },
  { key: 'i', name: 'ipad', alias: 'ipad', image: '/images/ipad.png',  description: '「不喜欢，换成我也行」' },
];
