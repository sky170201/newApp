<template>
  <div class="business-hall">
    <p class="title">{{ $t('businessHall') }}</p>
    <ul class="box">
      <li @click="toHall('TikTok')" class="bg-opacity item">
        <div>
          TikTok
          <br>
          Like Follow
        </div>
        <img src="~@/assets/img/tiktok.png">
      </li>
      <li @click="toHall('YouTuBe')" class="bg-opacity item">
        <div>
          YouTuBe
          <br>
          Like Follow
        </div>
        <img src="~@/assets/img/youtube.png">
      </li>
    </ul>
  </div>
</template>

<script setup>
import router from '@/router';

const toHall = (active) => {
  router.push({
    path: '/hall',
    query: {
      type: active
    }
  })
}

</script>

<style scoped lang='less'>
.business-hall {
  .title {
    padding: 20px;
    font-size: 32px;
  }

  .box {
    display: flex;
    justify-content: space-between;
    padding: 0 20px;

    .item {
      padding: 20px 40px;
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 28px;
      line-height: 40px;
      border-radius: 8px;

      img {
        height: 64px;
        height: 64px;
      }
    }

    .item+.item {
      margin-left: 20px;
    }
  }
}
</style>
