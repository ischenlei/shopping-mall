<template>
  <div class="goods-info" >
    <img v-for="(item, index) in detailImages"
         :key="index"
         :src="item" @load="imageLoad">
  </div>
</template>

<script>
export default {
  name: "DetailGoodsInfo",
  props: {
    detailImages: {
      type: Array
    }
  },
  methods: {
    imageLoad() {
      this.$emit('detailImageLoad');
    }
  },
}
</script>

<style scoped>
.goods-info img{
  display: block;
  width: 100%;
}
</style>
