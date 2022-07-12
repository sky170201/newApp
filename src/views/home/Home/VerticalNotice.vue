<template>
  <van-notice-bar class="bg-opacity" left-icon="volume-o" :scrollable="false">
    <van-swipe vertical class="notice-swipe" :autoplay="3000" :show-indicators="false">
      <van-swipe-item v-for="(item, index) in swipeList" :key="index">
        <div>

          {{ `${$t('noticeSwipe.k1')} ${item.username} ${$t('noticeSwipe.k2')}` }}
          <br v-if="proxy.$i18n.locale === 'zh'" />
          {{ `${$t('noticeSwipe.k3')} ${item.price} ${$t('noticeSwipe.k4')}` }}
        </div>
      </van-swipe-item>
    </van-swipe>
  </van-notice-bar>
</template>

<script setup>
import { ref, getCurrentInstance } from 'vue'
const { proxy } = getCurrentInstance()

defineProps({
  swipeList: {
    type: Array,
    default: () => ([])
  }
})
// const swipeList = ref([
//   {
//     price: '5.00',
//     username: '60****03'
//   },
//   {
//     price: '5.00',
//     username: '81****78'
//   },
//   {
//     price: '5.00',
//     username: '92****03'
//   },
//   {
//     price: '5.00',
//     username: '93****41'
//   },
//   {
//     price: '5.00',
//     username: '98****18'
//   },
//   {
//     price: '5.00',
//     username: '96****86'
//   },
//   {
//     price: '5.00',
//     username: '55****15'
//   },
//   {
//     price: '5.00',
//     username: '91****14'
//   },
//   {
//     price: '5.00',
//     username: '75****80'
//   },
//   {
//     price: '5.00',
//     username: '45****79'
//   },
//   {
//     price: '5.00',
//     username: '89****20'
//   },
//   {
//     price: '5.00',
//     username: '06****18'
//   },
//   {
//     price: '5.00',
//     username: '02****81'
//   },
//   {
//     price: '5.00',
//     username: '04****29'
//   },
//   {
//     price: '5.00',
//     username: '65****12'
//   },
//   {
//     price: '5.00',
//     username: '68****10'
//   },
//   {
//     price: '5.00',
//     username: '33****89'
//   },
//   {
//     price: '5.00',
//     username: '59****00'
//   },
//   {
//     price: '5.00',
//     username: '03****71'
//   },
//   {
//     price: '5.00',
//     username: '71****30'
//   }
// ])

</script>

<style scoped lang='less'>
.bg-opacity {
  height: 150px;

  :deep(.van-notice-bar__content) {
    position: relative;
    white-space: normal !important;
    word-wrap: break-word;
  }
}

.notice-swipe {
  height: 100px;
  line-height: 35px;
  font-size: 28px;

  .van-swipe-item {
    display: flex;
    align-items: center;
  }
}
</style>
