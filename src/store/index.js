import Vue from 'vue'
import Vuex from 'vuex'
import mutations from "@/store/mutations";
import actions from "@/store/actions";
import getters from "@/store/getters";

Vue.use(Vuex)

const state = {
  banners: [
    {url: require('@/assets/img/home/banners/banner1.jpg'),},
    {url: require('@/assets/img/home/banners/banner3.jpg'),},
    {url: require('@/assets/img/home/banners/banner4.jpg'),},
    {url: require('@/assets/img/home/banners/banner2.jpg'),},
  ],
  recommends: [
    {
      url: require('@/assets/img/home/recommends/保证.png'),
      title: '明星单品',
    },
    {
      url: require('@/assets/img/home/recommends/热卖.png'),
      title: '热卖',
    },
    {
      url: require('@/assets/img/home/recommends/礼物.png'),
      title: '礼物',
    },
    {
      url: require('@/assets/img/home/recommends/优惠券.png'),
      title: '优惠券',
    },
  ],
  goods: {
    'pop': [
      {
        id: 'p1',
        url: require('@/assets/img/home/goods/pop1.jpg'),
        title: 'Urban DecayUD衰败城市NAKED HEAT2/3代',
        price: '￥420'
      },
      {
        id: 'p2',
        url: require('@/assets/img/home/goods/pop2.jpg'),
        title: 'MAC/魅可子弹头口红唇膏',
        price: '￥180'
      },
      {
        id: 'p3',
        url: require('@/assets/img/home/goods/pop3.jpg'),
        title: 'Wet n Wild Color Icon维特娃魅影',
        price: '￥40'
      },
      {
        id: 'p4',
        url: require('@/assets/img/home/goods/pop4.jpg'),
        title: 'BOBBI BROWN芭比波朗化妆刷',
        price: '￥440'
      },
      {
        id: 'p5',
        url: require('@/assets/img/home/goods/pop5.jpg'),
        title: 'shu uemura植村秀绿茶新肌洁颜油卸妆油',
        price: '￥259'
      },
      {
        id: 'p6',
        url: require('@/assets/img/home/goods/pop6.jpg'),
        title: 'freeplus芙丽芳丝净润洗面霜',
        price: "￥150"
      },
      {
        id: 'p7',
        url: require('@/assets/img/home/goods/pop7.jpg'),
        title: '玫珂菲全新双用水粉霜',
        price: '￥ 380'
      },
      {
        id: 'p8',
        url: require('@/assets/img/home/goods/pop8.jpg'),
        title: '魅可立体绒光修容饼',
        price: '¥ 340'
      },

    ],
    'new': [
      {
        id: 'n1',
        url: require('@/assets/img/home/goods/new1.jpg'),
        title: '娇兰花草水语淡香水75ml',
        price: "￥730"
      },
      {
        id: 'n2',
        url: require('@/assets/img/home/goods/new2.jpg'),
        title: 'YSL圣罗兰Mon Paris反转巴黎女士香水',
        price: '￥770'
      },
      {
        id: 'n3',
        url: require('@/assets/img/home/goods/new3.jpg'),
        title: '套刷cici化妆刷眼部眼影套装四件套',
        price: '￥43.9'
      },
      {
        id: 'n4',
        url: require('@/assets/img/home/goods/new4.jpg'),
        title: '无印良品MUJI 睫毛夹',
        price: '￥50'
      },
      {
        id: 'n5',
        url: require('@/assets/img/home/goods/new5.jpg'),
        title: '兰蔻 「小黑瓶」全规格精华肌底液',
        price: '￥760'
      },
      {
        id: 'n6',
        url: require('@/assets/img/home/goods/new6.jpg'),
        title: '娇兰金钻修颜粉底液30ml',
        price: '￥710'
      },
      {
        id: 'n7',
        url: require('@/assets/img/home/goods/new7.jpg'),
        title: '限定柔雾唇膏',
        price: '￥180'
      },
      {
        id: 'n8',
        url: require('@/assets/img/home/goods/new8.jpg'),
        title: '定制无瑕柔光散粉',
        price: '¥290'
      },
    ],
    'sell': [
      {
        id: 's1',
        url: require('@/assets/img/home/goods/sell5.jpg'),
        title: '娇兰幻彩流星粉球 透明散粉定妆粉',
        price: '￥550'
      },
      {
        id: 's2',
        url: require('@/assets/img/home/goods/sell6.jpg'),
        title: 'dior/迪奥香水真我',
        price: '￥725'
      },
      {
        id: 's3',
        url: require('@/assets/img/home/goods/sell1.jpg'),
        title: '日本嘉娜宝ALLIE皑丽矿物保湿防晒霜',
        price: '￥219'
      },
      {
        id: 's4',
        url: require('@/assets/img/home/goods/sell2.jpg'),
        title: '资生堂红妍肌活眼部精华露15ml',
        price: '￥550'
      },
      {
        id: 's5',
        url: require('@/assets/img/home/goods/sell3.jpg'),
        title: 'Kiehl\'s科颜氏高保湿面膜 125ml',
        price: '￥340'
      },
      {
        id: 's6',
        url: require('@/assets/img/home/goods/sell4.jpg'),
        title: 'LA MER海蓝之谜精华面霜',
        price: '￥1520'
      },
      {
        id: 's7',
        url: require('@/assets/img/home/goods/sell7.jpg'),
        title: '定制无瑕粉底液',
        price: '¥ 320'
      },
      {
        id: 's8',
        url: require('@/assets/img/home/goods/sell8.jpg'),
        title: 'GIVENCHY纪梵希四宫格散粉',
        price: '¥550'
      },
    ]
  },
  detail: [
    {
      id: 'p1',
      topImages: [
        {url: require('@/assets/img/detail/p1/p1-1.jpg')},
        {url: require('@/assets/img/detail/p1/p1-2.jpg')},
        {url: require('@/assets/img/detail/p1/p1-3.jpg')},
        {url: require('@/assets/img/detail/p1/p1-4.jpg')},
      ],
      itemInfo: {
        title: "Urban Decay官方正品衰败城市Naked Heat南瓜枫叶盘哑光眼影盘ud",
        desc: '',
        newPrice: '￥420',
        price: 420,
        sales: '月销1222',
        columns: [
          {
            name: '推荐',
            img: require('@/assets/img/common/like.svg')
          },
          {
            name: '分享',
            img: require('@/assets/img/common/share.svg')
          }
        ],
        service: ['大牌好货', '假一赔四', '赠运险费', '七天无理由退换']
      },
      shopInfo: {
        shopLogo: 'https://img.alicdn.com/imgextra//i3/2207224563560/O1CN01jk2NRx1cAWZkYmtTh_!!2207224563560.jpg_120x120Q50s50.jpg_.webp',
        name: 'UrbanDecay官方海外旗舰店',
        score: [
          {
            name: '宝贝描述',
            score: 4.8
          },
          {
            name: '卖家服务',
            score: 4.8
          },
          {
            name: '跨境物流',
            score: 4.8
          },
        ]
      },
      detailImages: [
        'https://img.alicdn.com/imgextra/i1/2207224563560/O1CN01pwcVoh1cAWbcifiry_!!2207224563560.jpg_760x760Q90s50.jpg_.webp',
        'https://img.alicdn.com/imgextra/i3/2207224563560/O1CN01AuuA6P1cAWcPsPbfV_!!2207224563560.jpg_760x760Q90s50.jpg_.webp',
        'https://img.alicdn.com/imgextra/i3/2207224563560/O1CN01ghY9HB1cAWcJl5ij8_!!2207224563560.jpg_760x760Q90s50.jpg_.webp',
        'https://img.alicdn.com/imgextra/i2/2207224563560/O1CN01s80pMI1cAWcP0r09C_!!2207224563560.jpg_760x760Q90s50.jpg_.webp',
        'https://img.alicdn.com/imgextra/i4/2207224563560/O1CN01aCEgkp1cAWcMohygk_!!2207224563560.jpg_760x760Q90s50.jpg_.webp',
        'https://img.alicdn.com/imgextra/i1/2207224563560/O1CN01W6mnMB1cAWcOhrjG7_!!2207224563560.jpg_760x760Q90s50.jpg_.webp',
        'https://img.alicdn.com/imgextra/i1/2207224563560/O1CN01mPAKex1cAWcIhHQS8_!!2207224563560.jpg_760x760Q90s50.jpg_.webp',
        'https://img.alicdn.com/imgextra/i3/2207224563560/O1CN01FjkEHS1cAWcQVFW47_!!2207224563560.jpg_760x760Q90s50.jpg_.webp',
        'https://img.alicdn.com/imgextra/i2/2207224563560/O1CN01wS2Yga1cAWcKDW0DH_!!2207224563560.jpg_760x760Q90s50.jpg_.webp',
        'https://img.alicdn.com/imgextra/i4/2207224563560/O1CN019Kp8y31cAWcRfSa9H_!!2207224563560.jpg_760x760Q90s50.jpg_.webp',
        'https://img.alicdn.com/imgextra/i4/2207224563560/O1CN01ywHZjc1cAWcLv9EgM_!!2207224563560.jpg_760x760Q90s50.jpg_.webp',
        'https://img.alicdn.com/tps/TB1pRlEMXXXXXaMXpXXXXXXXXXX-750-214.png_2200x2200Q100s50.jpg_.webp'
      ],
      recommends: [
        {
          id: 'p3',
          url: require('@/assets/img/home/goods/pop3.jpg'),
          title: 'Wet n Wild Color Icon维特娃魅影',
          price: '￥40'
        },
        {
          id: 'n4',
          url: require('@/assets/img/home/goods/new4.jpg'),
          title: '无印良品MUJI 睫毛夹',
          price: '￥50'
        },
        {
          id: 'n3',
          url: require('@/assets/img/home/goods/new3.jpg'),
          title: '套刷cici化妆刷眼部眼影套装四件套',
          price: '￥43.9'
        },
        {
          id: 'p4',
          url: require('@/assets/img/home/goods/pop4.jpg'),
          title: 'BOBBI BROWN芭比波朗化妆刷',
          price: '￥440'
        },
      ]

    },
    {
      id: 'p2',
      topImages: [
        {url: 'https://img.alicdn.com/imgextra/i3/3170729146/O1CN01tlKL0V2HQv2cS7EPY_!!3170729146-0-lubanu-s.jpg_2200x2200Q100s50.jpg_.webp'},
        {url: 'https://img.alicdn.com/imgextra/i2/3170729146/O1CN01POmuYp2HQuz4JtqXf_!!3170729146.jpg_2200x2200Q100s50.jpg_.webp'},
        {url: 'https://img.alicdn.com/imgextra/i3/3170729146/O1CN01HV1QfZ2HQv2mrz4rE_!!3170729146.jpg_2200x2200Q100s50.jpg_.webp'},
        {url: 'https://img.alicdn.com/imgextra/i3/3170729146/O1CN01I4yHz52HQv2b5zJWP_!!0-item_pic.jpg_2200x2200Q100s50.jpg_.webp'},
      ],
      itemInfo: {
        title: "MAC/魅可尤雾弹哑光唇膏口红大牌正品923/316 奶茶色",
        desc: '',
        newPrice: '￥180',
        price: 180,
        sales: '月销5.0万+',
        columns: [
          {
            name: '推荐',
            img: require('@/assets/img/common/like.svg')
          },
          {
            name: '分享',
            img: require('@/assets/img/common/share.svg')
          }
        ],
        service: ['假一赔四', '过敏包退', '赠运险费', '急速退款']
      },
      shopInfo: {
        shopLogo: 'https://img.alicdn.com/imgextra//i1/3170729146/TB2LqHGH1SSBuNjy0FlXXbBpVXa_!!3170729146.jpg_120x120Q50s50.jpg_.webp',
        name: 'MAC魅可官方旗舰店',
        score: [
          {
            name: '宝贝描述',
            score: 4.8
          },
          {
            name: '卖家服务',
            score: 4.8
          },
          {
            name: '跨境物流',
            score: 4.8
          },
        ]
      },
      detailImages: [
        'https://img.alicdn.com/imgextra/i4/3170729146/O1CN01jDaPF12HQv2cgjBUL_!!3170729146.jpg_2200x2200Q100s50.jpg_.webp',
        'https://img.alicdn.com/imgextra/i3/3170729146/O1CN01c7cZdK2HQuxCb5KX6_!!3170729146.jpg_2200x2200Q100s50.jpg_.webp',
        'https://img.alicdn.com/imgextra/i2/3170729146/O1CN01PuVB0t2HQv2bmwwtj_!!3170729146.jpg_2200x2200Q100s50.jpg_.webp',
        'https://img.alicdn.com/imgextra/i3/3170729146/O1CN01ZJHvsH2HQv2ZcwBgd_!!3170729146.jpg_2200x2200Q100s50.jpg_.webp',
        'https://img.alicdn.com/imgextra/i4/3170729146/O1CN01KIbk4e2HQv2dvI3kK_!!3170729146.jpg_2200x2200Q100s50.jpg_.webp',
        'https://img.alicdn.com/imgextra/i1/3170729146/O1CN01SA9PUg2HQv22sR1Qd_!!3170729146.jpg_2200x2200Q100s50.jpg_.webp',
        'https://img.alicdn.com/imgextra/i3/3170729146/O1CN01YxFHxw2HQv26fCO5m_!!3170729146.jpg_2200x2200Q100s50.jpg_.webp',
        'https://img.alicdn.com/imgextra/i3/3170729146/O1CN01zulTpD2HQv2g5O4Cg_!!3170729146.jpg_2200x2200Q100s50.jpg_.webp',

      ],
      recommends: []

    },
    {
      id: 'p3',
      topImages: [
        {url: 'https://img.alicdn.com/imgextra/i1/923113807/TB2JrpvihxmpuFjSZFNXXXrRXXa_!!923113807.jpg_640x640q80_.webp'},
        {url: 'https://img.alicdn.com/imgextra/i3/923113807/TB2lLWagSBjpuFjSsplXXa5MVXa_!!923113807.jpg_640x640q80_.webp'},
        {url: 'https://img.alicdn.com/imgextra/i3/923113807/TB246GsgS0jpuFjy0FlXXc0bpXa_!!923113807.jpg_640x640q80_.webp'},
        {url: 'https://img.alicdn.com/imgextra/i3/923113807/TB2Ic8tsb0kpuFjy0FjXXcBbVXa_!!923113807.jpg_640x640q80_.webp'},
      ],
      itemInfo: {
        title: "维特娃眼影wet n wild湿又野八色眼影盘",
        desc: '',
        newPrice: '￥40',
        price: 40,
        sales: '月销1388',
        columns: [
          {
            name: '推荐',
            img: require('@/assets/img/common/like.svg')
          },
          {
            name: '分享',
            img: require('@/assets/img/common/share.svg')
          }
        ],
        service: ['假一赔四', '过敏包退', '赠运险费', '急速退款']
      },
      shopInfo: {
        shopLogo: 'https://img.alicdn.com/imgextra//55/04/TB19PhQRXXXXXX0XFXXSutbFXXX.jpg_120x120Q50s50.jpg_.webp',
        name: 'wetnwild旗舰店',
        score: [
          {
            name: '宝贝描述',
            score: 4.8
          },
          {
            name: '卖家服务',
            score: 4.8
          },
          {
            name: '跨境物流',
            score: 4.8
          },
        ]
      },
      detailImages: [
        'https://img.alicdn.com/imgextra/i2/3243332102/O1CN01dsKyZ21ROl9SJ1NVD_!!3243332102.jpg_760x760Q90s50.jpg_.webp',
        'https://img.alicdn.com/imgextra/i1/3243332102/O1CN01sBgt931ROl9TOue08_!!3243332102.jpg_760x760Q90s50.jpg_.webp',
        'https://img.alicdn.com/imgextra/i1/3243332102/O1CN01SASpIT1ROl9U2cvrW_!!3243332102.jpg_760x760Q90s50.jpg_.webp',
        'https://img.alicdn.com/imgextra/i2/3243332102/O1CN01H6cdmd1ROl9ULuX7Y_!!3243332102.jpg_760x760Q90s50.jpg_.webp',
        'https://img.alicdn.com/imgextra/i3/3243332102/O1CN016dKx4q1ROl9JP6pAf_!!3243332102.jpg_760x760Q90s50.jpg_.webp',
        'https://img.alicdn.com/imgextra/i3/3243332102/O1CN01oBu4sp1ROl9MmVjVc_!!3243332102.jpg_760x760Q90s50.jpg_.webp',
        'https://img.alicdn.com/imgextra/i1/3243332102/O1CN01ZjaYMB1ROl9LeZNfr_!!3243332102.jpg_760x760Q90s50.jpg_.webp',

      ],
      recommends: []

    },
    {
      id: 'p4',
      topImages: [
        {url: 'https://img.alicdn.com/imgextra/i2/2563613536/O1CN01m1LJn81bzX73gwt9V_!!2563613536-0-lubanu-s.jpg_2200x2200Q100s50.jpg_.webp'},
        {url: 'https://img.alicdn.com/imgextra/i1/2563613536/O1CN01JJ6SNl1bzX5AhhzAp_!!2563613536-0-lubanu-s.jpg_2200x2200Q100s50.jpg_.webp'},
        {url: 'https://img.alicdn.com/imgextra/i1/2563613536/O1CN011bzWxn1Mj4ZIMRT_!!2563613536.jpg_2200x2200Q100s50.jpg_.webp'},
        {url: 'https://img.alicdn.com/imgextra/i2/2563613536/O1CN01btDvk81bzWziS8nA9_!!2563613536.jpg_2200x2200Q100s50.jpg_.webp'},
      ],
      itemInfo: {
        title: "BOBBI BROWN芭比波朗魔术底妆刷 化妆刷新手适用 舒适柔滑 贴合",
        desc: '',
        newPrice: '￥440',
        price: 440,
        sales: '月销68',
        columns: [
          {
            name: '推荐',
            img: require('@/assets/img/common/like.svg')
          },
          {
            name: '分享',
            img: require('@/assets/img/common/share.svg')
          }
        ],
        service: ['假一赔四', '过敏包退', '赠运险费', '急速退款']
      },
      shopInfo: {
        shopLogo: 'https://img.alicdn.com/imgextra//67/e0/TB1akjQIVXXXXbAaXXXSutbFXXX.jpg_120x120Q50s50.jpg_.webp',
        name: 'BOBBI BROWN芭比波朗官方旗舰店',
        score: [
          {
            name: '宝贝描述',
            score: 4.8
          },
          {
            name: '卖家服务',
            score: 4.8
          },
          {
            name: '跨境物流',
            score: 4.8
          },
        ]
      },
      detailImages: [
        'https://img.alicdn.com/imgextra/i1/2563613536/O1CN014g8dwK1bzX68hYzum_!!2563613536.jpg_2200x2200Q100s50.jpg_.webp',
        'https://img.alicdn.com/imgextra/i4/2563613536/O1CN01s7f21W1bzX58KeN9S_!!2563613536.jpg_2200x2200Q100s50.jpg_.webp',
        'https://img.alicdn.com/imgextra/i2/2563613536/O1CN013Z9nKx1bzX59grQww_!!2563613536.jpg_2200x2200Q100s50.jpg_.webp',
        'https://img.alicdn.com/imgextra/i3/2563613536/O1CN011bzWwc99BcsQJvf_!!2563613536.jpg_2200x2200Q100s50.jpg_.webp',
        'https://img.alicdn.com/imgextra/i4/2563613536/O1CN01LIRm9D1bzWylxOl09_!!2563613536.jpg_2200x2200Q100s50.jpg_.webp',

      ],
      recommends: []

    },
    {
      id: 'p5',
      topImages: [
        {url: 'https://img.alicdn.com/imgextra/i2/2549841410/TB233FLc8fM8KJjSZFOXXXr5XXa_!!2549841410-0-sm.jpg_2200x2200Q100s50.jpg_.webp'},
        {url: 'https://img.alicdn.com/imgextra/i4/2549841410/TB2cMLweqLN8KJjSZFmXXcQ6XXa_!!2549841410.jpg_2200x2200Q100s50.jpg_.webp'},
        {url: 'https://img.alicdn.com/imgextra/i1/2549841410/TB2VWNEg8USMeJjy1zjXXc0dXXa_!!2549841410.jpg_2200x2200Q100s50.jpg_.webp'},
        {url: 'https://img.alicdn.com/imgextra/i4/2549841410/TB2sOxngYwTMeJjSszfXXXbtFXa_!!2549841410.jpg_2200x2200Q100s50.jpg_.webp'},
      ],
      itemInfo: {
        title: "日本shu uemura植村秀绿茶新肌洁颜油脸部卸妆油温和眼唇深层清洁",
        desc: '',
        newPrice: '￥259',
        price: 259,
        sales: '月销68',
        columns: [
          {
            name: '推荐',
            img: require('@/assets/img/common/like.svg')
          },
          {
            name: '分享',
            img: require('@/assets/img/common/share.svg')
          }
        ],
        service: ['假一赔四', '过敏包退', '赠运险费', '急速退款']
      },
      shopInfo: {
        shopLogo: 'https://img.alicdn.com/imgextra//7b/31/TB1zjHKahD1gK0jSZFKSuwJrVXa.jpg_120x120Q50s50.jpg_.webp',
        name: '天猫国际妙颜社',
        score: [
          {
            name: '宝贝描述',
            score: 4.8
          },
          {
            name: '卖家服务',
            score: 4.8
          },
          {
            name: '跨境物流',
            score: 4.8
          },
        ]
      },
      detailImages: [
        'https://img.alicdn.com/imgextra/i1/3596640214/TB2yBrRltnJ8KJjSszdXXaxuFXa_!!3596640214-0-scmitem1000.jpg_2200x2200Q100s50.jpg_.webp',
        'https://img.alicdn.com/imgextra/i1/3596640214/TB2ovvWlv6H8KJjSspmXXb2WXXa_!!3596640214-0-scmitem1000.jpg_2200x2200Q100s50.jpg_.webp',
        'https://img.alicdn.com/imgextra/i1/3596640214/TB26eztlxrI8KJjy0FpXXb5hVXa_!!3596640214-0-scmitem1000.jpg_2200x2200Q100s50.jpg_.webp',
        'https://img.alicdn.com/imgextra/i1/3596640214/TB2GOTElsbI8KJjy1zdXXbe1VXa_!!3596640214-0-scmitem1000.jpg_2200x2200Q100s50.jpg_.webp',
        'https://img.alicdn.com/imgextra/i3/3596640214/TB2wzPJlznD8KJjSspbXXbbEXXa_!!3596640214-0-scmitem1000.jpg_2200x2200Q100s50.jpg_.webp'

      ],
      recommends: []

    },
    {
      id: 'p6',
      topImages: [
        {url: 'https://img.alicdn.com/imgextra/i4/2646612614/O1CN014rBtlp1VBFvSqpeq5_!!2646612614-0-lubanu-s.jpg_760x760Q50s50.jpg_.webp'},
        {url: 'https://img.alicdn.com/imgextra/i4/2646612614/O1CN0120LpE11VBFqg7hFHO_!!2646612614.jpg_2200x2200Q100s50.jpg_.webp'},
        {url: 'https://img.alicdn.com/imgextra/i2/2646612614/O1CN014tJ41Y1VBFt7WHk8S_!!2646612614.jpg_2200x2200Q100s50.jpg_.webp'},
        {url: 'https://img.alicdn.com/imgextra/i2/2646612614/O1CN01v9wwTl1VBFr29qK9o_!!2646612614.jpg_2200x2200Q100s50.jpg_.webp'},
      ],
      itemInfo: {
        title: "freeplus芙丽芳丝洗面奶氨基酸系净润洗面霜男女温和清洁敏感肌",
        desc: '',
        newPrice: '￥150',
        price: 150,
        sales: '月销5万+',
        columns: [
          {
            name: '推荐',
            img: require('@/assets/img/common/like.svg')
          },
          {
            name: '分享',
            img: require('@/assets/img/common/share.svg')
          }
        ],
        service: ['假一赔四', '过敏包退', '赠运险费', '急速退款']
      },
      shopInfo: {
        shopLogo: 'https://img.alicdn.com/imgextra//29/e5/TB1Ck8TLXXXXXb7aXXXSutbFXXX.jpg_120x120Q50s50.jpg_.webp',
        name: 'freeplus芙丽芳丝官方旗舰店',
        score: [
          {
            name: '宝贝描述',
            score: 4.8
          },
          {
            name: '卖家服务',
            score: 4.8
          },
          {
            name: '跨境物流',
            score: 4.8
          },
        ]
      },
      detailImages: [
        'https://img.alicdn.com/imgextra/i2/2646612614/O1CN01Qja04B1VBFwDE2l2e_!!2646612614.jpg_2200x2200Q100s50.jpg_.webp',
        'https://img.alicdn.com/imgextra/i3/2646612614/O1CN01XcHC3T1VBFwCBaB7m_!!2646612614.jpg_2200x2200Q100s50.jpg_.webp',
        'https://img.alicdn.com/imgextra/i4/2646612614/O1CN01Yl19ym1VBFwBTpsV0_!!2646612614.jpg_2200x2200Q100s50.jpg_.webp',
        'https://img.alicdn.com/imgextra/i2/2646612614/O1CN01yBqYhT1VBFwGIvxmE_!!2646612614.jpg_2200x2200Q100s50.jpg_.webp',
        'https://img.alicdn.com/imgextra/i4/2646612614/O1CN01VxU4kc1VBFwIUczYM_!!2646612614.jpg_2200x2200Q100s50.jpg_.webp',
        'https://img.alicdn.com/imgextra/i1/2646612614/O1CN01PuZxnL1VBFwDE98eX_!!2646612614.jpg_2200x2200Q100s50.jpg_.webp',
        'https://img.alicdn.com/imgextra/i1/2646612614/O1CN01on6Cut1VBFwLsdnR7_!!2646612614.jpg_2200x2200Q100s50.jpg_.webp',
        'https://img.alicdn.com/imgextra/i3/2646612614/O1CN01hGHtEC1VBFwQ1nIEn_!!2646612614.jpg_2200x2200Q100s50.jpg_.webp',


      ],
      recommends: []

    },
    {
      id: 'p7',
      topImages: [
        {url: 'https://img.alicdn.com/imgextra/i3/2500428739/O1CN01D0rkds2EQVokpgGn9_!!0-item_pic.jpg_2200x2200Q100s50.jpg_.webp'},
        {url: 'https://img.alicdn.com/imgextra/i2/2500428739/O1CN01ZjtBnk2EQVltkOvsf_!!0-item_pic.jpg_2200x2200Q100s50.jpg_.webp'},
        {url: 'https://img.alicdn.com/imgextra/i2/2500428739/TB2JCKFgrZnBKNjSZFhXXc.oXXa_!!2500428739.jpg_2200x2200Q100s50.jpg_.webp'},
        {url: 'https://img.alicdn.com/imgextra/i2/2500428739/O1CN013Yj4892EQVoBJRoGN_!!2500428739.jpg_2200x2200Q100s50.jpg_.webp'},
      ],
      itemInfo: {
        title: "MAKEUPFOREVER玫珂菲全新双用水粉霜粉底水润轻薄",
        desc: '',
        newPrice: '￥380',
        price: 380,
        sales: '月销500+',
        columns: [
          {
            name: '推荐',
            img: require('@/assets/img/common/like.svg')
          },
          {
            name: '分享',
            img: require('@/assets/img/common/share.svg')
          }
        ],
        service: ['假一赔四', '过敏包退', '赠运险费', '急速退款']
      },
      shopInfo: {
        shopLogo: 'https://img.alicdn.com//b4/07/TB1Gr5iPVXXXXcMXpXXSutbFXXX.jpg_120x120Q50s50.jpg_.webp',
        name: 'MAKE UP FOR EVER玫珂菲官方旗舰店',
        score: [
          {
            name: '宝贝描述',
            score: 4.8
          },
          {
            name: '卖家服务',
            score: 4.8
          },
          {
            name: '跨境物流',
            score: 4.8
          },
        ]
      },
      detailImages: [
        'https://img.alicdn.com/imgextra/i1/2500428739/O1CN01PuiAy62EQVofKjSOa_!!2500428739.jpg_2200x2200Q100s50.jpg_.webp',
        'https://img.alicdn.com/imgextra/i3/2500428739/O1CN01bccbe72EQVojZNGem_!!2500428739.jpg_2200x2200Q100s50.jpg_.webp',
        'https://img.alicdn.com/imgextra/i4/2500428739/O1CN01glMKVD2EQVogpFI0t_!!2500428739.jpg_2200x2200Q100s50.jpg_.webp',
        'https://img.alicdn.com/imgextra/i4/2500428739/O1CN01L25qgO2EQVoZHfybn_!!2500428739.jpg_2200x2200Q100s50.jpg_.webp',
        'https://img.alicdn.com/imgextra/i3/2500428739/O1CN015Tvtls2EQVoiiy9pf_!!2500428739.jpg_2200x2200Q100s50.jpg_.webp',
        'https://img.alicdn.com/imgextra/i3/2500428739/O1CN013o2nIX2EQVohDI4zr_!!2500428739.jpg_2200x2200Q100s50.jpg_.webp',
        'https://img.alicdn.com/imgextra/i1/2500428739/O1CN01Sxj60b2EQVojIrfHR_!!2500428739.jpg_2200x2200Q100s50.jpg_.webp'

      ],
      recommends: []

    },
    {
      id: 'p8',
      topImages: [
        {url: 'https://img.alicdn.com/imgextra/i1/3170729146/O1CN01n7lM0z2HQuzmyEOtr_!!0-item_pic.jpg_2200x2200Q100s50.jpg_.webp'},
        {url: 'https://img.alicdn.com/imgextra/i3/3170729146/O1CN01VgBaYl2HQv2dYED84_!!3170729146.jpg_2200x2200Q100s50.jpg_.webp'},
        {url: 'https://img.alicdn.com/imgextra/i3/3170729146/O1CN01NjTMIp2HQv2VKzqCj_!!3170729146.jpg_2200x2200Q100s50.jpg_.webp'},
        {url: 'https://img.alicdn.com/imgextra/i3/3170729146/O1CN01zwE7rn2HQv2G696TD_!!3170729146.jpg_2200x2200Q100s50.jpg_.webp'},
      ],
      itemInfo: {
        title: "【立减10元】MAC/魅可立体绒光修容盘生姜高光闪粉修容提亮",
        desc: '',
        newPrice: '￥340',
        price: 340,
        sales: '月销1万+',
        columns: [
          {
            name: '推荐',
            img: require('@/assets/img/common/like.svg')
          },
          {
            name: '分享',
            img: require('@/assets/img/common/share.svg')
          }
        ],
        service: ['假一赔四', '过敏包退', '赠运险费', '急速退款']
      },
      shopInfo: {
        shopLogo: 'https://img.alicdn.com/imgextra//i1/3170729146/TB2LqHGH1SSBuNjy0FlXXbBpVXa_!!3170729146.jpg_120x120Q50s50.jpg_.webp',
        name: 'MAC魅可官方旗舰店',
        score: [
          {
            name: '宝贝描述',
            score: 4.8
          },
          {
            name: '卖家服务',
            score: 4.8
          },
          {
            name: '跨境物流',
            score: 4.8
          },
        ]
      },
      detailImages: [
        'https://img.alicdn.com/imgextra/i3/3170729146/O1CN01a9yKCu2HQv2io3q0c_!!3170729146.jpg_2200x2200Q100s50.jpg_.webp',
        'https://img.alicdn.com/imgextra/i2/3170729146/O1CN010XGd0c2HQv2hjM1QS_!!3170729146.jpg_2200x2200Q100s50.jpg_.webp',
        'https://img.alicdn.com/imgextra/i3/3170729146/O1CN019d3Zv22HQv2ewmnUW_!!3170729146.jpg_2200x2200Q100s50.jpg_.webp',
        'https://img.alicdn.com/imgextra/i1/3170729146/O1CN01XoxTYJ2HQv2YkwvHy_!!3170729146.jpg_2200x2200Q100s50.jpg_.webp',
        'https://img.alicdn.com/imgextra/i1/3170729146/O1CN01ilKI4E2HQv2io19du_!!3170729146.jpg_2200x2200Q100s50.jpg_.webp',
        'https://img.alicdn.com/imgextra/i3/3170729146/O1CN01eA0HL52HQv2gyAxSp_!!3170729146.jpg_2200x2200Q100s50.jpg_.webp',
        'https://img.alicdn.com/imgextra/i1/3170729146/O1CN01EaD5Kf2HQv2kdsXrB_!!3170729146.jpg_2200x2200Q100s50.jpg_.webp',
        'https://img.alicdn.com/imgextra/i3/3170729146/O1CN01zulTpD2HQv2g5O4Cg_!!3170729146.jpg_2200x2200Q100s50.jpg_.webp'

      ],
      recommends: []

    },
    {
      id: 'p',
      topImages: [
        {url: ''},
        {url: ''},
        {url: ''},
        {url: ''},
      ],
      itemInfo: {
        title: "",
        desc: '',
        newPrice: '￥',
        sales: '月销',
        columns: [
          {
            name: '推荐',
            img: require('@/assets/img/common/like.svg')
          },
          {
            name: '分享',
            img: require('@/assets/img/common/share.svg')
          }
        ],
        service: ['假一赔四', '过敏包退', '赠运险费', '急速退款']
      },
      shopInfo: {
        shopLogo: '',
        name: '',
        score: [
          {
            name: '宝贝描述',
            score: 4.8
          },
          {
            name: '卖家服务',
            score: 4.8
          },
          {
            name: '跨境物流',
            score: 4.8
          },
        ]
      },
      detailImages: [],
      recommends: []

    },
  ],
  cartList: [],
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
})
