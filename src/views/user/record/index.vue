<template>
    <div class="record">
        <NavBar>
            <template #title>个人信息</template>
        </NavBar>
        <van-tabs @click-tab="onClickTab" v-model:active="active">
            <van-tab title="收入"></van-tab>
            <van-tab title="解冻"></van-tab>
            <van-tab title="支出"></van-tab>
            <van-tab title="充值"></van-tab>
        </van-tabs>
        <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
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
        </van-list>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import NavBar from "@/components/NavBar";
import { recordData } from './data'

const active = ref(0)
const onClickTab = (item) => {
    console.log(item);
}

const recordList = ref(recordData.list)

const list = ref([]);
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
