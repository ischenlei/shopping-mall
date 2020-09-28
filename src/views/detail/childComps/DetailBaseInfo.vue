<template>
  <div class="base-info">
    <div class="info-goods">
      <span class="goods-price">{{goods.newPrice}}</span>
      <span class="goods-sales">{{goods.sales}}</span>
      <div class="info-title">{{goods.title}}</div>
      <div class="info-other">
        <div>
          <img :src="goods.columns[0].img" alt="">
          <span>{{goods.columns[0].name}}</span>
        </div>
        <div>
          <img :src="goods.columns[1].img" alt="">
          <span>{{goods.columns[1].name}}</span>
        </div>
      </div>
    </div>
    <div class="info-service">
      <span>服务</span>
      <span v-for="item in goods.service">{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props: {
    goods: {
      type: Object
    }
  }
}
</script>

<style scoped>
.base-info {
  margin-top: 10px;
}
.info-goods{
  padding: 10px;
  color: #000;
  border-bottom: 10px solid #f2f5f8;
}
.goods-price {
  font-size: 24px;
}

.goods-sales {
  float: right;
  color: #999;
  font-size: 13px;
}

.info-other{
  margin-top: 15px;
  line-height: 30px;
  color: #999;
  display: flex;
  justify-content: space-around;
}

.info-other img {
  width: 20px;
  height: 20px;
  position: relative;
  top: 5px;
}

.info-other div span {
  margin: 10px;
}

.info-service {
  display: flex;
  padding: 15px;
  justify-content: space-between;
  font-size: 12px;
  border-bottom: 10px solid #f2f5f8;
  color: #333;
}

.info-service span:nth-child(1) {
  color: #999;
}
</style>
