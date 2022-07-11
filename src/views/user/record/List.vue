<template>
  <van-list v-model:loading="loading" :finished="finished" :finished-text="$t('task.noMore')" @load="onLoad">
      <div v-for="(item, index) in recordList" :key="index" class="item">
          <div class="i">
              <p>
                  <van-tag :color="typeColor[active]">{{$t(`record.${active}.name`)}}</van-tag>
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
import { ref } from 'vue'
import { recordData } from './data'

// active: income->#07c160; thaw->; expenditure->#ff976a; recharge->#7232dd
const typeColor = {
  income: '#07c160',
  thaw: '#ee0a24',
  expenditure: '#ff976a',
  recharge: '#7232dd'
}
const props = defineProps({
  active: {
    type: String,
    defualt: ''
  }
})

const recordList = ref(recordData.list)

const loading = ref(false);
const finished = ref(false);

const onLoad = () => {
  // 异步更新数据
  // setTimeout 仅做示例，真实场景中一般为 ajax 请求
  setTimeout(() => {
    for (let i = 0; i < 5; i++) {
      recordList.value.push({
        money: "5.00",
        txt: "Invite rewards",
        times: "2022-05-24",
      });
    }

    // 加载状态结束
    loading.value = false;

    // 数据全部加载完成
    if (recordList.value.length >= 40) {
      finished.value = true;
    }
  }, 1000);
};

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
                color: #0071e3;
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
