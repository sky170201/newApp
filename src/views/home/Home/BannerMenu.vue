<template>
    <div class="menu">
      <div
        @click="toVip"
        class="menu-item bg-opacity">
        <span>{{$t('bannerMenu.k1')}}</span>
        <img src="~@/assets/img/m-vip.png">
      </div>
      <div
        @click="toHelp"
        class="menu-item bg-opacity">
        <span>{{$t('bannerMenu.k2')}}</span>
        <img src="~@/assets/img/m-video.png">
      </div>
      <div
        @click="toShare"
        class="menu-item bg-opacity">
        <span>{{$t('bannerMenu.k3')}}</span>
        <img src="~@/assets/img/m-money.png">
      </div>
    </div>
</template>

<script setup>
import router from '@/router';

const toVip = () => {
  router.push('/level')
}

const toHelp = () => {
  router.push('/help')
}

const toShare = () => {
  router.push('/share')
}

</script>

<style scoped lang='less'>
.menu {
  display: flex;
  padding: 0 5px;
  &-item {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px 20px;
    font-size: 28px;
    margin: 0 5px;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    img {
      height: 48px;
      width: 48px;
    }
  }
}
</style>
