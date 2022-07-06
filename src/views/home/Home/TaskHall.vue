<template>
    <div class="business-hall">
      <p class="title">{{$t('businessHall')}}</p>
      <ul class="box">
        <li class="bg-opacity item">
          <div>
            TikTok
            <br>
            Like Follow
          </div>
          <img src="~@/assets/img/tiktok.png">
        </li>
        <li class="bg-opacity item">
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
      font-size: 24px;
      line-height: 40px;
      img {
        height: 64px;
        height: 64px;
      }
    }
    .item + .item {
      margin-left: 20px;
    }
  }
}
</style>
