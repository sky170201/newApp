<template>
  <div class="record">
    <NavBar>
      <template #title>{{ title }}</template>
    </NavBar>
    <van-tabs @change="onChange" v-model:active="initData.active" swipeable>
      <van-tab name="income" :title="$t('record.income.name')">
        <List v-if="initData.active === 'income'" @onLoad="onLoad" v-model:loading="initData.loading"
          v-model:finished="initData.finished" :recordList="initData.recordList" :active="initData.active" />
      </van-tab>
      <van-tab name="thaw" :title="$t('record.thaw.name')">
        <List v-if="initData.active === 'thaw'" @onLoad="onLoad" v-model:loading="initData.loading"
          v-model:finished="initData.finished" :recordList="initData.recordList" :active="initData.active" />
      </van-tab>
      <van-tab name="expenditure" :title="$t('record.expenditure.name')">
        <List v-if="initData.active === 'expenditure'" @onLoad="onLoad" v-model:loading="initData.loading"
          v-model:finished="initData.finished" :recordList="initData.recordList" :active="initData.active" />
      </van-tab>
      <van-tab name="recharge" :title="$t('record.recharge.name')">
        <List v-if="initData.active === 'recharge'" @onLoad="onLoad" v-model:loading="initData.loading"
          v-model:finished="initData.finished" :recordList="initData.recordList" :active="initData.active" />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script setup>
import { onMounted, ref, reactive } from 'vue'
import NavBar from "@/components/NavBar";
import List from './List.vue'
import i18n from '@/language/i18n'
import { getWalletDetail } from '@/api/myApi';
const recordMap = {
  income: 1,
  expenditure: 2,
  recharge: 3,
  thaw: 4,
}
const initData = reactive({
  active: 'income',
  recordList: [],
  loading: false,
  finished: false,
  page: 1
})
const title = ref(i18n.global.t('record.income.title'))
const onChange = (name) => {
  console.log('name', name);
  setData()
  _getWalletDetail()
  title.value = i18n.global.t(`record.${name}.title`)
}

const setData = () => {
  initData.page = 1
  initData.loading = false
  initData.finished = false
  initData.refreshing = false
}

const _getWalletDetail = async (flag) => {
  console.log(61, initData.loading, initData.finished);
  const { result } = await getWalletDetail({
    type: recordMap[initData.active],
    page: initData.page
  })
  if (flag) {
    initData.recordList.push(...result.list)
  } else {
    initData.process = result.process
    initData.check = result.check
    initData.finsh = result.finsh
    initData.cancel = result.cancel
    initData.recordList = result.list
  }
  initData.loading = false
  if (initData.page >= result.page) {
    initData.finished = true
  }
}
onMounted(async () => {
  _getWalletDetail()
})
const onLoad = () => {
  initData.page += 1
  _getWalletDetail('load')
};

</script>

<style scoped lang="less">
.record {
  height: 100%;

  .van-list {
    height: calc(100% - 180px);
    overflow: auto;

    .item {
      display: flex;
      padding: 30px;
      background-color: #151d31;
      border-bottom: 3px solid #0e1526;

      .i {
        flex: 1;
        font-size: 30px;

        .amount {
          color: @mainColor;
          font-size: 32px;
          font-weight: 700;
        }

        span {
          font-size: 30px;
        }

        .van-tag {
          font-size: 24px;
          margin-right: 24px;
        }
      }
    }
  }
}
</style>
