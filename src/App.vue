<template>
<div class="main">
  <router-view />
</div>
</template>

<script setup>
// import { mainStore } from '@/store/mainStore.js'
// const store = mainStore()
import in18 from './language/i18n'
console.log(in18.global.t('login.title'))

</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  height: 100vh;
  width: 100%;
}

.main {
  width: 100%;
  height: 100%;
  background: url(~@/assets/img/main_bg.png);
  background-size: 100%;
}
</style>
