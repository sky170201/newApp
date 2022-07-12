<template>
    <NavBar>
        <template #title>{{ $t('businessHall') }}</template>
    </NavBar>
    <div class="top-100 task-list">
        <van-cell v-for="(item, index) in lists" :key="index">
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
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import NavBar from "@/components/NavBar";
// import { taskList } from './data'
import { getTaskList, getTaskDraw } from '@/api/home'
import youtube from '@/assets/img/youtube.png'
import tiktok from '@/assets/img/tiktok.png'
import { useRoute } from 'vue-router';
import { Toast } from 'vant';
// import { deepClone } from '@/utils'

// const lists = ref(deepClone(taskList))
const route = useRoute()
const page = ref(1)
const lists = ref([])
const _getTaskList = async (count) => {
    const { result } = await getTaskList({ // result -> list & lunbo & page
        type: 1,
        level: route.query.level,
        page: count || page.value
    })
    lists.value = result.list
}
onMounted(() => {
    console.log(123);
    _getTaskList()
})

const reveive = async (item) => {
    const res = await getTaskDraw({ id: item.id })
    console.log(res);
    if (res.code === 200) {
        Toast('领取成功')
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
