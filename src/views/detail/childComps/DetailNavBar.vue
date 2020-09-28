<template>
  <nav-bar>
    <div slot="left" class="back" @click="backClick">
      <img src="~@/assets/img/common/back.svg" alt="">
    </div>
    <div slot="center" class="title">
      <div v-for="(item, index) in titles"
           class="title-item"
           :class="{active: index === currentIndex}"
           @click="titleClick(index)">
        <span>{{ item }}</span>
      </div>
    </div>
  </nav-bar>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";

export default {
  name: "DetailNavBar",
  components: {
    NavBar
  },
  data() {
    return {
      titles: ['商品', '详情', '推荐'],
      currentIndex: 0
    }
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index
      this.$emit('titleClick', index)
    },
    backClick() {
      this.$router.back()
    }
  },

}
</script>

<style scoped>
.title {
  display: flex;
  font-size: 14px;
}

.title-item {
  flex: 1;
}
.title-item span {
  padding: 5px;
}
.active span {
  color: var(--color-high-text);
  border-bottom: 2px solid var(--color-high-text);
}

.back img {
  width: 25px;
  height: 25px;
  margin-top: 8px;
}
</style>
