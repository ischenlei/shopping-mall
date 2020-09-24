<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">BEAUTYLISH</div>
    </nav-bar>

    <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll">
      <home-swiper :banners="banners"/>
      <recommend-view :recommends="recommends"/>
      <feature-view/>
      <tab-control class="tab-control"
                   :titles="['流行', '新款', '精选']" @tabClick="tabClick"/>
      <goods-list :goods="showGoods"/>
    </scroll>

    <back-top @click.native="backClick" v-show="isShowBackTop"/>
  </div>
</template>

<script>
import HomeSwiper from "@/views/home/childComps/HomeSwiper";
import RecommendView from "@/views/home/childComps/RecommendView";
import FeatureView from "@/views/home/childComps/FeatureView";

import NavBar from "@/components/common/navbar/NavBar";
import TabControl from "@/components/content/tabControl/TabControl";
import GoodsList from "@/components/content/goods/GoodsList";
import BackTop from "@/components/content/backTop/BackTop";

import Scroll from "@/components/common/scroll/Scroll";

export default {
  name: "home",
  components: {
    Scroll,
    HomeSwiper,
    RecommendView,
    FeatureView,
    NavBar,
    TabControl,
    GoodsList,
    BackTop
  },
  data() {
    return {
      banners: [
        {
          url: require('@/assets/img/home/banners/banner1.jpg'),
        },
        {
          url: require('@/assets/img/home/banners/banner3.jpg'),
        },
        {
          url: require('@/assets/img/home/banners/banner4.jpg'),
        },
        {
          url: require('@/assets/img/home/banners/banner2.jpg'),
        },
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
            url: require('@/assets/img/home/goods/pop1.jpg'),
            title: 'Urban DecayUD衰败城市NAKED HEAT2/3代',
            price: 255
          },
          {
            url: require('@/assets/img/home/goods/pop2.jpg'),
            title: 'MAC/魅可全色号子弹头口红唇膏',
            price: 255
          },
          {
            url: require('@/assets/img/home/goods/pop3.jpg'),
            title: 'Wet n Wild Color Icon维特娃魅影',
            price: 255
          },
          {
            url: require('@/assets/img/home/goods/pop4.jpg'),
            title: 'BOBBI BROWN芭比波朗化妆刷',
            price: 255
          },
          {
            url: require('@/assets/img/home/goods/pop5.jpg'),
            title: 'shu uemura植村秀绿茶新肌洁颜油卸妆油',
            price: 255
          },
          {
            url: require('@/assets/img/home/goods/pop6.jpg'),
            title: 'freeplus芙丽芳丝净润洗面霜',
            price: 255
          },
        ],
        'new': [
          {
            url: require('@/assets/img/home/goods/new1.jpg'),
            title: '娇兰花草水语淡香水75ml',
            price: 255
          },
          {
            url: require('@/assets/img/home/goods/new2.jpg'),
            title: 'YSL圣罗兰Mon Paris反转巴黎女士香水',
            price: 255
          },
          {
            url: require('@/assets/img/home/goods/new3.jpg'),
            title: '套刷cici化妆刷眼部眼影套装四件套',
            price: 255
          },
          {
            url: require('@/assets/img/home/goods/new4.jpg'),
            title: '无印良品MUJI 睫毛夹',
            price: 255
          },
          {
            url: require('@/assets/img/home/goods/new5.jpg'),
            title: '兰蔻 「小黑瓶」全规格精华肌底液\t',
            price: 255
          },
          {
            url: require('@/assets/img/home/goods/new6.jpg'),
            title: '娇兰金钻修颜粉底液30ml\t',
            price: 255
          },
        ],
        'sell': [
          {
            url: require('@/assets/img/home/goods/sell5.jpg'),
            title: '娇兰幻彩流星粉球 透明散粉定妆粉',
            price: 255
          },
          {
            url: require('@/assets/img/home/goods/sell6.jpg'),
            title: 'dior/迪奥香水真我套装',
            price: 255
          },
          {
            url: require('@/assets/img/home/goods/sell1.jpg'),
            title: '日本嘉娜宝ALLIE皑丽矿物保湿防晒霜',
            price: 255
          },
          {
            url: require('@/assets/img/home/goods/sell2.jpg'),
            title: '资生堂红妍肌活眼部精华露15ml',
            price: 255
          },
          {
            url: require('@/assets/img/home/goods/sell3.jpg'),
            title: 'Kiehl\'s科颜氏高保湿面膜 125ml',
            price: 255
          },
          {
            url: require('@/assets/img/home/goods/sell4.jpg'),
            title: 'LA MER海蓝之谜精华面霜 经典传奇面霜',
            price: 255
          },
        ]
      },
      currentType: 'pop',
      isShowBackTop: false
    }
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType]
    }
  },
  methods: {
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
    },
    backClick() {
      this.$refs.scroll.scrollTo(0, 0)
    },
    contentScroll(position) {
      this.isShowBackTop = (-position.y) > 500
    },
  }

}
</script>

<style scoped>
#home {
  padding-top: 44px;
  height: 100vh;
  position: relative;
}

.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
}

.tab-control {
  position: sticky;
  top: 44px;
  z-index: 9;
}

.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>
