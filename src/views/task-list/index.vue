<template>
  <NavBar>
    <template #title>{{ $t('businessHall') }}</template>
  </NavBar>
  <div class="top-100 task-list">
    <van-empty v-if="!initData.lists.length" :description="$t('task.noRecord')" />
    <van-pull-refresh v-else :pulling-text="$t('task.pulling')" :loosing-text="$t('task.loosing')"
      :loading-text="$t('task.loading')" v-model="refreshing" @refresh="onRefresh">
      <van-list :immediate-check="false" v-model:loading="loading" :finished="finished"
        :finished-text="$t('task.noMore')" @load="onLoad">
        <van-cell v-for="(item, index) in initData.lists" :key="index">
          <template #icon>
            <!-- type:4 youtube type:1 tiktok -->
            <div class="cell-img">
              <img :src="item.type == 4 ? youtube : tiktok">
            </div>
          </template>
          <template #title>
            <p>{{ item.type == 4 ? "YouTuBe" : "TikTok" }}</p>
            <p>{{ $t('taskHall.require') }}：{{ $t('taskHall.action') }}</p>
            <p>{{ $t('taskHall.level') }}：<van-tag type="success">{{ item.level }}</van-tag>
            </p>
          </template>
          <template #right-icon>
            <div class="cell-right">
              <p>{{ $t('taskHall.price') }}</p>
              <p><span>{{ item.price }}</span>EUR</p>
              <van-button @click="reveive(item)" :disabled="!item.type" size="small" type="primary">{{
                  $t('taskHall.btnText')
              }}</van-button>
            </div>
          </template>
        </van-cell>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue'
import NavBar from "@/components/NavBar";
// import { taskList } from './data'
import { getTaskList, getTaskDraw } from '@/api/home'
import youtube from '@/assets/img/youtube.png'
import tiktok from '@/assets/img/tiktok.png'
import { useRoute } from 'vue-router';
import { Toast } from 'vant';
// import { deepClone } from '@/utils'
import i18n from '@/language/i18n'

// const lists = ref(deepClone(taskList))
const route = useRoute()
const initData = reactive({
  page: 1,
  lists: []
})
const _getTaskList = async () => {
  return new Promise(async (resolve) => {
    const { result } = await getTaskList({ // result -> list & lunbo & page
      type: route.query.type,
      level: route.query.level,
      page: initData.page
    })
    resolve(result)
  })
}
onMounted(async () => {
  const res = await _getTaskList()
  initData.lists = res.list
})
const loading = ref(false)
const finished = ref(false)
const refreshing = ref(false)
const onLoad = async () => {
  initData.page += 1
  const res = await _getTaskList()
  initData.lists.push(...res.list)
  loading.value = false
  if (initData.page === res.page) {
    finished.value = true
  }
}
const onRefresh = async () => {
  // 清空列表数据
  initData.page = 1
  // 重新加载数据
  const res = await _getTaskList()
  console.log('res', res);
  initData.lists = res.list
  refreshing.value = false
}
const reveive = async (item) => {
  const res = await getTaskDraw({ id: item.id })
  if (res.code === 200) {
    Toast(i18n.global.t('taskHall.receiveTxt'))
    item.type = 0
  } else if (res.code === 500) {
    Toast(res.message)
  }
}

</script>

<style scoped lang='less'>
.task-list {

  .van-cell {
    border-top: 1px solid #0e1526;

    .cell-img {
      width: 64px;
      height: 64px;
      border-radius: 8px;
      background: #fff;
      margin-right: 30px;

      img {
        width: 100%;
        // height: 100%;
      }
    }

    .cell-right {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      font-size: 24px;

      span {
        font-size: 28px;
        color: @mainColor;
      }
    }
  }
}
</style>
