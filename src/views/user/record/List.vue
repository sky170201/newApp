<template>
  <van-empty v-if="!recordList.length" :description="$t('task.noRecord')" />
  <van-list v-else :immediate-check="false" v-model:loading="loading" :finished="finished"
    :finished-text="$t('task.noMore')" @load="onLoad">
    <div v-for="(item, index) in recordList" :key="index" class="item">
      <div class="i">
        <p>
          <van-tag :color="typeColor[active]">{{ $t(`record.${active}.name`) }}</van-tag>
          {{ item.txt }}
        </p>
        <div class="flex justify-between align-end mt-10">
          <span class="amount">{{ item.money }}</span>
          <span>{{ item.times }}</span>
        </div>
      </div>
    </div>
  </van-list>
</template>

<script setup>
// import { ref } from 'vue'
// import { recordData } from './data'

// active: income->#07c160; thaw->; expenditure->#ff976a; recharge->#7232dd
const typeColor = {
  income: '#07c160',
  thaw: '#ee0a24',
  expenditure: '#ff976a',
  recharge: '#7232dd'
}
// const recordList = ref(recordData.list)
// const loading = ref(false);
// const finished = ref(false);
const props = defineProps({
  recordList: {
    type: Array,
    default: () => ([])
  },
  active: {
    type: String,
    default: ''
  },
  loading: Boolean,
  finished: Boolean,
})
const emits = defineEmits(['update:loading', 'update:finished', 'onLoad', 'onRefresh'])

const onLoad = () => {
  emits('update:loading', true)
  emits('onLoad')
}

</script>

<style scoped lang="less">
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
</style>
