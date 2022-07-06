<template>
      <van-empty v-if="!taskList.length" description="暂无记录" />
      <van-pull-refresh v-else v-model="refreshing" @refresh="onRefresh">
        <van-list
          v-model:loading="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <!-- <van-cell v-for="item in taskList" :key="item" :title="item" /> -->
          <van-cell
             v-for="(item, index) in taskList"
             :key="index"
          >
            <template #icon>
              <!-- type:4 youtube type:1 tiktok -->
              <div class="cell-img">
                <img :src="item.type == 4 ? youtube : tiktok">
              </div>
            </template>
            <template #title>
              <p>{{item.type == 4 ? "YouTuBe" : "TikTok"}}</p>
              <p>要求：点赞</p>
              <p>创建：{{item.create_time}}</p>
            </template>
            <template #right-icon>
              <!-- 状态 state:-1 失败 -->
              <div class="cell-right">
                <img :src="state4Zh">
              </div>
            </template>
          </van-cell>
        </van-list>
      </van-pull-refresh>
</template>

<script setup>
import { ref } from 'vue'
import { data } from './data'
import youtube from '@/assets/img/youtube.png'
import tiktok from '@/assets/img/tiktok.png'

import state4Zh from '@/assets/img/state4-zh-CN.png'

const props = defineProps({
  taskList: {
    type: Array,
    default: () => (data.list)
  }
})
const loading = ref(false)
const finished = ref(false)
const refreshing = ref(false)
const onLoad = () => {
  console.log('onLoad')
  setTimeout(() => {
    if (refreshing.value) {
      props.taskList = []
      refreshing.value = false
    }

    for (let i = 0; i < 10; i++) {
      props.taskList.push({
        type: 4,
        create_time: i + 10
      })
    }
    loading.value = false

    if (props.taskList.length >= 40) {
      finished.value = true
    }
  }, 2000)
}
const onRefresh = () => {
  // 清空列表数据
  finished.value = false

  // 重新加载数据
  // 将 loading 设置为 true，表示处于加载状态
  loading.value = true
  onLoad()
}
</script>

<style scoped lang='less'>
.van-pull-refresh {
  height: calc(100% - 280px);
  overflow: auto;
  .van-cell {
    border-top: 1px solid #333;
    .cell-img {
      width: 64px;
      height: 64px;
      border-radius: 8px;
      background: #fff;
      margin-right: 20px;
      img {
        width: 100%;
        // height: 100%;
      }
    }
    .cell-right {
      width: 128px;
      img {
        width: 100%;
      }
    }
  }
}
</style>
