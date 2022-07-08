<template>
  <van-nav-bar safe-area-inset-top @click-left="back" :fixed="fixed" :left-arrow="!isCusLeft">
    <template v-if="isCusLeft" #left>
      <slot name="left"></slot>
    </template>
    <template #title>
      <slot name="title"></slot>
    </template>
    <template #right>
      <slot name="right"></slot> <!-- <van-icon name="search" size="18" /> -->
    </template>
  </van-nav-bar>
</template>

<script setup>

const props = defineProps({
  isCusLeft: {
    type: Boolean,
    default: false
  },
  fixed: {
    type: Boolean,
    default: false
  }
})

const back = () => {
  if (!props.isCusLeft) history.back()
}
</script>

<style scoped lang='less'>
.van-nav-bar {
  z-index: 999;
}
</style>
