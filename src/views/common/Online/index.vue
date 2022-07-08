<template>
    <img class="online" @click="toChat" src="~@/assets/img/online-h.png">
</template>

<script setup>
import router from '@/router'
const toChat = () => {
  router.push('/chat')
}

</script>

<style scoped lang='less'>
.online {
    position: fixed;
    z-index: 999;
    right: 20px;
    bottom: 300px;
    border-radius: 50%;
}
</style>
