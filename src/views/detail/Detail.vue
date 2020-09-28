<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" @titleClick="titleClick"/>
    <scroll class="content" ref="scroll">
      <detail-swiper :top-images="topImages"/>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>
      <detail-goods-info
        :detail-images="detailImages"
        @imageLoad="imageLoad"
        ref="goodsImage"/>
      <goods-list :goods="recommends" ref="recommend"/>
    </scroll>
  </div>
</template>

<script>
import DetailNavBar from "@/views/detail/childComps/DetailNavBar";
import DetailSwiper from "@/views/detail/childComps/DetailSwiper";
import DetailBaseInfo from "@/views/detail/childComps/DetailBaseInfo";
import DetailShopInfo from "@/views/detail/childComps/DetailShopInfo";
import DetailGoodsInfo from "@/views/detail/childComps/DetailGoodsInfo";

import GoodsList from "@/components/content/goods/GoodsList";

import Scroll from "@/components/common/scroll/Scroll";

export default {
  name: "Detail",
  components: {
    GoodsList,
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    Scroll
  },
  data() {
    return {
      id: null,
      topImages: [],
      goods: {},
      shop: {},
      detailImages: [],
      recommends: [],
      topY: [],
    }

  },
  created() {
    //保存传入的id
    this.id = this.$route.params.id
    // console.log(this.id)

    const data = this.$store.getters.getDetailById(this.id)
    //获取顶部轮播图数据
    this.topImages = data.topImages
    // console.log(this.topImages)

    //获取商品信息
    this.goods = data.itemInfo

    //获取店铺信息
    this.shop = data.shopInfo

    //获取详情数据
    this.detailImages = data.detailImages

    //获取推荐商品
    this.recommends = data.recommends

  },
  methods: {
    imageLoad() {
      this.$refs.scroll.refresh
    },
    titleClick(index) {
      // console.log(index)
      this.$refs.scroll.scrollTo(0, this.topY[index], 200)
    }
  },
  mounted() {
    this.topY = []

    this.topY.push(0);
    this.topY.push(-this.$refs.goodsImage.$el.offsetTop)
    this.topY.push(-this.$refs.recommend.$el.offsetTop)

    console.log(this.topY);
  }
}
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}
.detail-nav {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.content {
  height: calc(100% - 44px);
}
</style>
