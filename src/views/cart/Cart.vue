<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{ cartGoodsNum }})</div>
    </nav-bar>
    <scroll class="content" ref="scroll">
      <cart-list />
    </scroll>
    <cart-bottom-bar/>
  </div>
</template>

<script>
import CartList from "@/views/cart/childComps/CartList";
import CartBottomBar from "@/views/cart/childComps/CartBottomBar";

import NavBar from "@/components/common/navbar/NavBar";
import Scroll from "@/components/common/scroll/Scroll";

import {mapGetters} from 'vuex'

export default {
  name: "Cart",
  components: {
    CartList,
    CartBottomBar,
    NavBar,
    Scroll
  },
  computed: {
    ...mapGetters(['cartGoodsNum'])

  },
  activated() {
    this.$refs.scroll.refresh();
  }
}
</script>

<style scoped>
.cart {
  position: relative;
  height: 100vh;
}

.nav-bar {
  background-color: #000;
  color: #fff;
}

.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 89px;
  left: 0;
  right: 0;
}
</style>
