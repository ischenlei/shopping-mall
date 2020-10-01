<template>
  <div class="bottom-bar">
    <div class="service">
      <img src="~@/assets/img/common/service.svg" alt="">
    </div>
    <div class="cart" @click="addCart">加入购物车</div>
    <div class="buy">立即购买</div>
  </div>
</template>

<script>
export default {
  name: "DetailBottomBar",
  methods: {
    addCart() {
      console.log('添加到购物车')
      this.$emit('addCart')
    }
  }
}
</script>

<style scoped>
.bottom-bar {
  height: 49px;
  position: relative;
  /*bottom: 49px;*/
  z-index: 1000;
  box-shadow: 0 -1px 1px rgba(100, 100, 100, .2);
  display: flex;
  text-align: center;
  line-height: 49px;
}

.service {
  background-color: #fff;
  flex: 1;
  color: #000;
}
.service img {
  display: block;
  width: 25px;
  height: 25px;
  margin: 10px auto 3px;
}
.cart {
  background-color: #000;
  flex: 2;
  color: #fff;
}

.buy {
  background-color: #e31837;
  flex: 2;
  color: #fff;
}
</style>
