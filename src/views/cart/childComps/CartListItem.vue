<template>
  <div class="cart-list-item">
    <div class="item-selector">
      <check-box :is-checked="product.checked" @click.native="checkedClick"/>
    </div>
    <div class="item-img">
      <img :src="product.image" alt="">
    </div>
    <div class="item-info">
      <div class="item-info-title">{{product.title}}</div>
      <div class="info-bottom">
        <div class="item-info-count">×{{product.count}}</div>
        <div class="item-info-price">{{product.price}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckBox from "@/views/cart/childComps/CheckBox";
export default {
  name: "CartListItem",
  components: {
    CheckBox
  },
  props: {
    product: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    checkedClick() {
      this.product.checked = !this.product.checked
      // console.log(this.product.checked)
    }
  }
}
</script>

<style scoped>
.cart-list-item {
  display: flex;
  padding: 15px;
  /*border-bottom: 1px solid #ccc;*/
}
.item-selector {
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.item-info {
  font-size: 14px;
  padding: 10px;
  position: relative;
  overflow: hidden;
}
.item-info-title {
  white-space: nowrap;
  /*text-overflow: ellipsis;*/
}
.item-img img {
  width: 100px;
  padding: 5px;
  border-radius: 10px;
  display: block;
}

.info-bottom {
  margin-top: 20px;
  position: absolute;
  bottom: 10px;
  left: 10px;
  right: 10px;
}

.info-bottom .item-info-price {
  color: #000;
}
</style>
