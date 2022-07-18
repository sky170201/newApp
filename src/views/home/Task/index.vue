<template>
  <NavBar :isCusLeft="true">
    <template #title>{{ $t('task.title') }}</template>
  </NavBar>
  <van-tabs v-model:active="initData.active" sticky @click-tab="onClickTab" @change="onClickTab" swipeable>
    <van-tab :title="`${$t('task.progress')}(${initData.process})`" name="progress">
      <TabContent v-if="initData.active === 'progress'" @onRefresh="onRefresh" @onLoad="onLoad"
        v-model:loading="initData.loading" v-model:finished="initData.finished" v-model:refreshing="initData.refreshing"
        :taskList="initData.taskList" :active="initData.active" />
    </van-tab>
    <van-tab :title="`${$t('task.review')}(${initData.check})`" name="review">
      <TabContent v-if="initData.active === 'review'" @onRefresh="onRefresh" @onLoad="onLoad"
        v-model:loading="initData.loading" v-model:finished="initData.finished" v-model:refreshing="initData.refreshing"
        :taskList="initData.taskList" :active="initData.active" />
    </van-tab>
    <van-tab :title="`${$t('task.completed')}(${initData.finsh})`" name="completed">
      <TabContent v-if="initData.active === 'completed'" @onRefresh="onRefresh" @onLoad="onLoad"
        v-model:loading="initData.loading" v-model:finished="initData.finished" v-model:refreshing="initData.refreshing"
        :taskList="initData.taskList" :active="initData.active" />
    </van-tab>
    <van-tab :title="`${$t('task.failed')}(${initData.cancel})`" name="failed">
      <TabContent v-if="initData.active === 'failed'" @onRefresh="onRefresh" @onLoad="onLoad"
        v-model:loading="initData.loading" v-model:finished="initData.finished" v-model:refreshing="initData.refreshing"
        :taskList="initData.taskList" :active="initData.active" />
    </van-tab>
  </van-tabs>
  <Loading v-if="isLoading" />
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue'
import NavBar from '@/components/NavBar'
import Loading from '@/components/Loading'
import TabContent from './TabContent.vue'
import { getTaskRecordList } from '@/api/home'

const statusMap = {
  progress: 0,
  review: 1,
  completed: 2,
  failed: 3,
}

const initData = reactive({
  process: 0,
  check: 0,
  finsh: 0,
  cancel: 0,
  page: 1,
  active: 'process',
  taskList: [],
  loading: false,
  finished: false,
  refreshing: false
})
const isLoading = ref(false)

const setData = () => {
  initData.page = 1
  initData.loading = false
  initData.finished = false
  initData.refreshing = false
}
const onClickTab = ({ title, name }) => {
  setData()
  _getTaskRecordList()
}

const _getTaskRecordList = async (flag) => {
  // 下拉加载更多或上滑加载中时不需要显示加载中
  if (!flag) {
    isLoading.value = true
  }
  try {
    const { result } = await getTaskRecordList({
      status: statusMap[initData.active],
      page: initData.page
    })
    result.list.forEach((item) => (item.fileList = []))
    if (flag === 'load') {
      initData.taskList.push(...result.list)
    } else {
      initData.process = result.process
      initData.check = result.check
      initData.finsh = result.finsh
      initData.cancel = result.cancel
      initData.taskList = result.list
    }
    initData.refreshing = false
    initData.loading = false
    if (initData.page === result.page) {
      initData.finished = true
    }
    isLoading.value = false
  } catch (error) {
    isLoading.value = false
  }
}
onMounted(async () => {
  _getTaskRecordList()
})

const onRefresh = () => {
  initData.page = 1
  // 重新加载数据
  _getTaskRecordList('refresh')
}
const onLoad = () => {
  initData.page += 1
  _getTaskRecordList('load')
}

</script>

<style scoped lang='less'>
.van-tabs {

  // height: calc(100% - 192px);
  // overflow: auto;
  :deep(.van-tabs__content) {
    // background: #0e1526 !important;
  }
}
.van-loading {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
