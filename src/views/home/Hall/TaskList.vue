<template>
  <ul class="task-list">
    <li class="task-list-item" @click="toTaskList" v-for="(item, index) in list" :key="index">
      <van-tag v-if="index === 1" color="#ffe1e1" text-color="#ad0000">{{ $t('hall.level') }}</van-tag>
      <p>{{ item.name }}</p>
      <div>{{ $t('hall.taskName') }}：{{ item.day_limit_task_num }}</div>
    </li>
  </ul>
</template>

<script setup>
import router from '@/router';

defineProps({
  list: {
    type: Array,
    default: () => ([])
  }
})

const toTaskList = () => {
  router.push('/task-list')
}

</script>

<style scoped lang='less'>
.task-list {
  display: flex;
  flex-wrap: wrap;
  padding: 40px;
  justify-content: space-between;

  &-item {
    position: relative;
    padding: 30px;
    width: calc(50vw - 60px);
    margin-bottom: 40px;
    color: #fff;
    background: url(~@/assets/img/vip_new_bg.png) no-repeat 50px, linear-gradient(60deg, #8ab2f3, #115dd1);
    background-size: contain;
    box-shadow: 7px 7px 13px 0 #115dd1;
    position: relative;
    border-radius: 8px;
    font-size: 28px;
    line-height: 30px;

    p {
      font-weight: 700;
      margin-bottom: 15px;
    }

    .van-tag {
      position: absolute;
      top: 10px;
      right: 10px;
    }
  }

  &-item:nth-of-type(2) {
    background: url(~@/assets/img/vip_new_bg.png) no-repeat 50px, linear-gradient(60deg, #ccd7e9, #7085a5);
    background-size: contain;
    box-shadow: 7px 7px 13px 0 #7085a5;
  }

  &-item:nth-of-type(3) {
    background: url(~@/assets/img/vip_new_bg.png) no-repeat 50px, linear-gradient(60deg, #fd9e02, #d86a25);
    background-size: contain;
    box-shadow: 7px 7px 13px 0 #fd7e35;
  }

  &-item:nth-of-type(4) {
    background: url(~@/assets/img/vip_new_bg.png) no-repeat 50px, linear-gradient(60deg, #3044b3, #273580);
    background-size: contain;
    box-shadow: 7px 7px 13px 0 #273580;
  }

  &-item:nth-of-type(5) {
    background: url(~@/assets/img/vip_new_bg.png) no-repeat 50px, linear-gradient(60deg, #31b489, #3e91b8);
    background-size: contain;
    box-shadow: 7px 7px 13px 0 #3e91b8;
  }

  &-item:nth-of-type(6) {
    background: url(~@/assets/img/vip_new_bg.png) no-repeat 50px, linear-gradient(60deg, #47484c, #1f2025);
    background-size: contain;
    box-shadow: 7px 7px 13px 0 #1f2025;
  }
}
</style>
