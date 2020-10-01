<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" @titleClick="titleClick"/>
    <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll">
      <detail-swiper :top-images="topImages"/>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>
      <detail-goods-info
        :detail-images="detailImages"
        @detailImageLoad="detailImageLoad"
        ref="goodsImage"/>
      <goods-list :goods="recommends" ref="recommend"/>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"/>
    <detail-bottom-bar @addCart="addCart"/>
  </div>
</template>

<script>
import DetailNavBar from "@/views/detail/childComps/DetailNavBar";
import DetailSwiper from "@/views/detail/childComps/DetailSwiper";
import DetailBaseInfo from "@/views/detail/childComps/DetailBaseInfo";
import DetailShopInfo from "@/views/detail/childComps/DetailShopInfo";
import DetailGoodsInfo from "@/views/detail/childComps/DetailGoodsInfo";
import DetailBottomBar from "@/views/detail/childComps/DetailBottomBar";

import GoodsList from "@/components/content/goods/GoodsList";
import BackTop from "@/components/content/backTop/BackTop";

import Scroll from "@/components/common/scroll/Scroll";

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailBottomBar,
    GoodsList,
    BackTop,
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
      isShowBackTop: false,
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
    detailImageLoad() {
      this.$refs.scroll.refresh()
    },
    titleClick(index) {
      // console.log(index)
      this.$refs.scroll.scrollTo(0, this.topY[index], 200)
    },
    contentScroll(position) {
      this.isShowBackTop = (-position.y) > 1000
      // console.log(position)
      const positionY = -position.y
      for (let i = 0; i < this.topY.length; i++) {

      }
    },
    backClick() {
      this.$refs.scroll.scrollTo(0, 0)
    },
    addCart() {
      const product = {}
      product.id = this.id
      product.image = this.topImages[0].url
      product.title = this.goods.title
      product.price = this.goods.newPrice

      // console.log(product)
      this.$store.dispatch('addCart', product)
    }
  },
  mounted() {
    this.topY = []
    this.topY.push(0);
    this.topY.push(-this.$refs.goodsImage.$el.offsetTop)
    this.topY.push(-this.$refs.recommend.$el.offsetTop)
    // console.log(this.topY);

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
  height: calc(100% - 44px - 49px);
}
</style>
