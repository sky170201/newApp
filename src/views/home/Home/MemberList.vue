<template>
  <div class="member-list">
    <van-cell :title="$t('memberList.title')" color="#0071e3" icon="friends-o" />
    <swiper :initialSlide='0' slidesPerView="auto"
      :autoplay="{ stopOnLastSlide: false, delay: 2000, disableOnInteraction: false }" direction="vertical"
      :grabCursor="true" :mousewheelControl="true" :autoHeight="true" :observer="true" :observeParents="true"
      :loop="true">
      <!-- :speed= "1000" 滚动速度 -->
      <swiper-slide v-for="(item, index) in memberList" :key="index">
        <div class="list-item">
          <span class="text">
            {{ $t('memberList.k1') }}：{{ item.user }}
            <br>
            {{ $t('memberList.k2') }}{{ item.num }}, {{ $t('memberList.k3') }}{{ item.money }}EUR!
          </span>
          <van-tag type="primary">+{{ item.money }}</van-tag>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import SwiperCore, { Scrollbar, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper.less'

// 想自动轮播，需要单独引入Autoplay 并注册
SwiperCore.use([Scrollbar, Autoplay])
const memberList = ref([
  {
    user: '57****84',
    num: 15,
    money: '90.00',
    avatar: 'https://ae01.alicdn.com/kf/Hfcb0f96581c544d894419c1b840ab393L.jpg'
  },
  {
    user: '05****21',
    num: 12,
    money: '72.00',
    avatar: 'https://ae01.alicdn.com/kf/Hf36fe96cfb2740cca8ad9bc62742f49cW.jpg'
  },
  {
    user: '58****54',
    num: 8,
    money: '48.00',
    avatar: 'https://ae01.alicdn.com/kf/Hf36fe96cfb2740cca8ad9bc62742f49cW.jpg'
  },
  {
    user: '59****17',
    num: 9,
    money: '53.00',
    avatar: 'https://ae01.alicdn.com/kf/H3aaf191e1d27417b8386478b507fb3b6C.jpg'
  },
  {
    user: '59****18',
    num: 9,
    money: '54.00',
    avatar: 'https://ae01.alicdn.com/kf/H8c119aa793e5478a803c7c7ec232dc39m.jpg'
  },
  {
    user: '80****62',
    num: 9,
    money: '54.00',
    avatar: 'https://ae01.alicdn.com/kf/Hfcb0f96581c544d894419c1b840ab393L.jpg'
  },
  {
    user: '59****02',
    num: 8,
    money: '48.00',
    avatar: 'https://ae01.alicdn.com/kf/H8c119aa793e5478a803c7c7ec232dc39m.jpg'
  },
  {
    user: '75****73',
    num: 12,
    money: '72.00',
    avatar: 'https://ae01.alicdn.com/kf/Hb54b854ae61b49b18fb192e366d2f4d8b.jpg'
  },
  {
    user: '94****96',
    num: 12,
    money: '72.00',
    avatar: 'https://ae01.alicdn.com/kf/H3aaf191e1d27417b8386478b507fb3b6C.jpg'
  },
  {
    user: '77****33',
    num: 13,
    money: '78.00',
    avatar: 'https://ae01.alicdn.com/kf/Hb54b854ae61b49b18fb192e366d2f4d8b.jpg'
  }
])

</script>

<style scoped lang='less'>
.member-list {
  margin-bottom: 30px;

  :deep(.van-cell__title) {
    font-weight: 700;
    color: @mainColor;
  }

  .swiper-container {
    height: 700px;
  }

  .list-item {
    display: flex;
    padding: 25px 20px;
    align-items: center;
    justify-content: space-between;
    background-color: #151d31;
    margin: 5px;

    .text {
      line-height: 40px;
      font-size: 28px;
    }
  }
}
</style>
