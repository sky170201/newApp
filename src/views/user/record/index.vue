<template>
    <div class="record">
        <NavBar>
            <template #title>{{title}}</template>
        </NavBar>
        <van-tabs @click-tab="onClickTab" v-model:active="active" swipeable>
            <van-tab name="income" :title="$t('record.income.name')"></van-tab>
            <van-tab name="thaw" :title="$t('record.thaw.name')"></van-tab>
            <van-tab name="expenditure" :title="$t('record.expenditure.name')"></van-tab>
            <van-tab name="recharge" :title="$t('record.recharge.name')"></van-tab>
        </van-tabs>
        <List :active="active" />
        <!-- <van-list v-model:loading="loading" :finished="finished" :finished-text="$t('task.noMore')" @load="onLoad">
            <div v-for="(item, index) in recordList" :key="index" class="item">
                <div class="i">
                    <p>
                        <van-tag type="success">收入</van-tag>
                        {{ item.txt }}
                    </p>
                    <div class="flex justify-between align-end mt-10">
                        <span class="amount">{{ item.money }}</span>
                        <span>{{ item.times }}</span>
                    </div>
                </div>
            </div>
        </van-list> -->
    </div>
</template>

<script setup>
import { ref } from 'vue'
import NavBar from "@/components/NavBar";
import List from './List.vue'
import i18n from '@/language/i18n'
import { recordData } from './data'

const active = ref('income')
const title = ref(i18n.global.t('record.income.title'))
const onClickTab = ({ name }) => {
  title.value = i18n.global.t(`record.${name}.title`)
}

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
}
</style>
