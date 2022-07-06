<template>
  <div id="swiperTop">
    <!-- 懒加载 -->
    <van-swipe :height="200" :autoplay="3000" lazy-render>
      <van-swipe-item v-for="image in images" :key="image">
        <img :src="image" />
      </van-swipe-item>
    </van-swipe>
  </div>

</template>
<script setup >

const props = defineProps({
  images: {
    type: Array,
    default: () => ([])
  }
})

</script>
<style scoped lang='less'>
.van-swipe {
  .van-swipe-item {
    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }

  :deep(.van-swipe__indicator--active) {
    background: #fff !important;
  }
}

</style>
