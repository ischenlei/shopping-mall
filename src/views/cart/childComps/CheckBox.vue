<template>
  <div class="check-box">
      <img v-if="!isChecked" src="~@/assets/img/cart/untick.svg" alt="">
      <img v-else src="~@/assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>

export default {
  name: "CheckBox",
  props: {
    isChecked: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.check-box img {
  width: 25px;
}
</style>
