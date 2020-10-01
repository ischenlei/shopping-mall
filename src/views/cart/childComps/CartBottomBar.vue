<template>
  <div class="bottom-bar">
    <div class="total-price">订单总计   ￥{{totalPrice}}</div>
    <div class="pay">去支付</div>
  </div>
</template>

<script>
export default {
  name: "CartBottomBar",
  computed: {
    totalPrice() {
      return this.$store.state.cartList.filter(item => {
        return item.checked
      }).reduce((preValue, item) => {
        return preValue + item.price * item.count
      }, 0).toFixed(2)
    }
  }
}
</script>

<style scoped>
.bottom-bar {
  height: 40px;
  line-height: 40px;
  position: absolute;
  bottom: 49px;
  right: 0;
  left: 0;
  z-index: 1000;
  box-shadow: 0 -1px 1px rgba(100, 100, 100, .2);
  display: flex;
  text-align: center;
}

.total-price {
  background-color: #000;
  flex: 2;
  color: #fff;
}

.pay {
  background-color: #e31837;
  flex: 1;
  color: #fff;
}
</style>
