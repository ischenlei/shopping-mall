<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">BEAUTYLISH</div>
    </nav-bar>
    <home-swiper :banners="banners"/>
    <recommend-view :recommends="recommends"/>
    <feature-view/>
    <tab-control class="tab-control" :titles="['流行', '新款', '精选']"/>
    <goods-list :goods="goods['sell']"/>

  </div>
</template>

<script>
import HomeSwiper from "@/views/home/childComps/HomeSwiper";
import RecommendView from "@/views/home/childComps/RecommendView";
import FeatureView from "@/views/home/childComps/FeatureView";

import NavBar from "@/components/common/navbar/NavBar";
import TabControl from "@/components/content/tabControl/TabControl";
import GoodsList from "@/components/content/goods/GoodsList";

export default {
  name: "home",
  components: {
    HomeSwiper,
    RecommendView,
    FeatureView,
    NavBar,
    TabControl,
    GoodsList
  },
  data() {
    return {
      recommends: [
        {
          url: require('@/assets/img/home/goods/01_5.jpg'),
          title: '娇兰幻彩流星粉球 透明散粉定妆粉',
        },
        {
          url: require('@/assets/img/home/goods/01_6.jpg'),
          title: 'dior/迪奥香水真我套装',
        },
        {
          url: require('@/assets/img/home/goods/01_1.jpg'),
          title: '特价',
        },
        {
          url: require('@/assets/img/home/goods/01_2.jpg'),
          title: '资生堂红妍肌活眼部精华露15ml',
        },
      ],
      /*goods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []},
      }*/
      banners: [
        {
          url: require('@/assets/img/home/goods/banner1.jpg'),
        },
        {
          url: require('@/assets/img/home/goods/banner3.jpg'),
        },
        {
          url: require('@/assets/img/home/goods/banner4.jpg'),
        },
        {
          url: require('@/assets/img/home/goods/banner2.jpg'),
        },
      ],
      goods: {
        'sell': [
          {
            url: require('@/assets/img/home/goods/01_5.jpg'),
            title: '娇兰幻彩流星粉球 透明散粉定妆粉',
            price: 255
          },
          {
            url: require('@/assets/img/home/goods/01_6.jpg'),
            title: 'dior/迪奥香水真我套装',
            price: 255
          },
          {
            url: require('@/assets/img/home/goods/01_1.jpg'),
            title: '日本嘉娜宝ALLIE皑丽矿物保湿防晒霜',
            price: 255
          },
          {
            url: require('@/assets/img/home/goods/01_2.jpg'),
            title: '资生堂红妍肌活眼部精华露15ml',
            price: 255
          },
          {
            url: require('@/assets/img/home/goods/01_3.jpg'),
            title: 'Kiehl\'s科颜氏高保湿面膜 125ml',
            price: 255
          },
          {
            url: require('@/assets/img/home/goods/01_4.jpg'),
            title: 'LA MER海蓝之谜精华面霜 经典传奇面霜',
            price: 255
          },
        ],
        'new': '',
        'pop': ''
      }
    }
  }

}
</script>

<style scoped>
#home {
  padding-top: 44px;
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
</style>
