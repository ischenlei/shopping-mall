<template>
  <div class="shop-info">
    <div class="shop-top">
      <img :src="shop.shopLogo" alt="">
      <span class="title">{{shop.name}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  props: {
    shop: {
      type: Object
    }
  }
}
</script>

<style scoped>
.shop-info {
  padding: 25px 8px;
  border-bottom: 10px solid #f2f5f8;
}
.shop-top {
  line-height: 50px;
  display: flex;
  align-items: center;
}

.shop-top img {
  width: 50px;
  height: 50px;
  border-radius: 10px;
}

.shop-top .title {
  margin-left: 20px;
  vertical-align: center;
  font-size: 16px;
  color: #333;
}

</style>
