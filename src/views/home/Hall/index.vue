<template>
    <div>
        <SwiperTop :images="banner"></SwiperTop>
        <van-tabs v-model:active="active" sticky>
            <van-tab name="TikTok">
                <template #title><img :src="active === 'TikTok' ? tiktokActive : tiktokTab"> TikTok </template>
                <TaskList :list="list" />
            </van-tab>
            <van-tab name="YouTuBe">
                <template #title><img :src="active === 'YouTuBe' ? youtubeActive : youtubeTab"> YouTuBe </template>
                <TaskList :list="list" />
            </van-tab>
        </van-tabs>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import SwiperTop from '@/components/Swiper'
import TaskList from './TaskList.vue'

import tiktokActive from '@/assets/img/tiktok-active.png'
import tiktokTab from '@/assets/img/tiktok-tab.png'
import youtubeActive from '@/assets/img/youtube-active.png'
import youtubeTab from '@/assets/img/youtube-tab.png'
import { useRoute } from 'vue-router'

const route = useRoute()

const active = route.query.type || ref('TikTok')
const banner = ref(['http://mimgs.oss-cn-hongkong.aliyuncs.com/f/979b2f58fb2185c231c8642a2d9eeb01.jpg',
    'http://mimgs.oss-cn-hongkong.aliyuncs.com/f/2cf6c44903e55d31f6c0c85cb93544dc.png'
])

const list = ref([
    { name: 'AP0', day_limit_task_num: 2 },
    { name: 'AP1', day_limit_task_num: 3 },
    { name: 'AP2', day_limit_task_num: 6 },
    { name: 'AP3', day_limit_task_num: 8 },
    { name: 'AP4', day_limit_task_num: 10 },
    { name: 'AP5', day_limit_task_num: 15 }
])
</script>

<style scoped lang='less'>
.van-tabs {
    :deep(.van-tab__text) {
        display: flex;
        align-items: center;

        img {
            height: 48px;
            margin-right: 5px;
        }
    }
}
</style>
