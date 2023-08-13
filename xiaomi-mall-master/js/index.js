const App = new Vue({
  el: '#app',
  data() {
    return {
      topLeft_list: ['小米商城', 'MIUI', 'loT', '云服务', '天星数科', '有品', '小爱开放平台', '企业团购', '资质证照', '协议规则', '下载app',
        'Select Location'
      ],
      topRight_list: ['登录', '注册', '消息通知', '购物车'],
      link_list: ['Xiaomi手机', 'Redmi红米', '电视', '笔记本', '平板', '家电', '路由器', '服务', '社区'],
      searchTip_list: ['全部商品', '小米手机', '小米平板5', '电视', '冰箱', '红米', '洗衣机', '耳机'],
      isShow: false,
      bannerImg: ['./img/banner1.jpg', './img/banner2.webp', './img/banner3.webp', './img/banner4.webp',
        './img/banner5.webp'
      ],
      listItem: ['手机', '电视', '笔记本 平板', '家电', '出行 穿戴', '智能 路由器', '电源 配件', '健康 儿童', '耳机 音箱', '生活 箱包'],
      channels: [{
        icon: './img/icon1.png',
        name: '保障服务'
      }, {
        icon: './img/icon2.png',
        name: '企业团购'
      }, {
        icon: './img/icon3.png',
        name: 'F码通道'
      }, {
        icon: './img/icon4.png',
        name: '米粉卡'
      }, {
        icon: './img/icon5.png',
        name: '以旧换新'
      }, {
        icon: './img/icon6.png',
        name: '话费充值'
      }, ],
      recomImg: ['./img/Redmi_K50.jpg', './img/RedmiK50.jpg', './img/Mi_Watch.jpg'],
      goodsList: [{
        imgSrc: './img/civi1s.webp',
        title: 'Xiaomi Civi 1S',
        desc: '原生美肌人像 | 奇迹阳光动人新色',
        price: 2299,
        del: ''
      }, {
        imgSrc: './img/redmi10A.webp',
        title: 'Redmi 10A',
        desc: '大电量、大音量、大屏幕',
        price: 649,
        del: 699
      }, {
        imgSrc: './img/redmiK50pro.webp',
        title: 'Redmi K50 Pro',
        desc: '2k直屏的狠旗舰',
        price: 2999,
        del: ''
      }, {
        imgSrc: './img/Redmik50.webp',
        title: 'Redmi K50',
        desc: '2k直屏的狠旗舰',
        price: 2399,
        del: ''
      }, {
        imgSrc: './img/Redmik40s.webp',
        title: 'Redmi K40S',
        desc: '口碑真旗舰',
        price: 1799,
        del: ''
      }, {
        imgSrc: './img/RedmiK50_Game.webp',
        title: 'Redmi K50',
        desc: '全线拉满的冷血旗舰',
        price: 2999,
        del: 3299
      }, {
        imgSrc: './img/xiaomi12pro.webp',
        title: 'Xiaomi 12 Pro',
        desc: '全新骁龙8 | 2K AMOLED屏幕',
        price: 4699,
        del: ''
      }, {
        imgSrc: './img/Xiaomi12.webp',
        title: 'Xiaomi 12',
        desc: '全新骁龙8 | 5000万主摄',
        price: 3699,
        del: ''
      }]
    }
  },
  methods: {
    inputFocus() {
      this.isShow = true;
    },
    inputBlur() {
      this.isShow = false;
    }
  }
});
var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 3000,
    stopOnLastSlide: false,
    disableOnInteraction: false
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});