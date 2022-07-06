<template>
    <NavBar :isCusLeft="true">
        <template #left>
        </template>
        <template #title>任务记录</template>
        <template #right>
        </template>
    </NavBar>
    <van-tabs v-model:active="active" sticky @click-tab="onClickTab">
        <van-tab title="进行中(0)" name="progress" />
        <van-tab title="审核中(0)" name="review" />
        <van-tab title="已完成(10)" name="completed" />
        <van-tab title="已失败(15)" name="failed" />
    </van-tabs>
    <TabContent />
</template>

<script setup>
import { ref } from 'vue'
import NavBar from '@/components/NavBar'
import TabContent from './TabContent.vue'

const active = ref('progress')
const onClickTab = ({ title, name }) => console.log(title, name)

</script>

<style scoped lang='less'>
.van-tabs {
    :deep(.van-tabs__content) {
        background: #0e1526 !important;
    }
}
</style>
