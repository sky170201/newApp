<template>
    <NavBar>
        <template #title>{{$t('team.title')}}</template>
    </NavBar>
    <van-tabs v-model:active="active" swipeable>
        <van-tab :title="$t('team.title')">
            <TeamReport />
        </van-tab>
        <van-tab :title="$t('team.tab2')">
            <MyTeam />
        </van-tab>
    </van-tabs>
</template>

<script setup>
import { ref } from 'vue';
import NavBar from "@/components/NavBar";
import TeamReport from './TeamReport.vue'
import MyTeam from './MyTeam.vue'

const active = ref(0)

</script>

<style scoped lang="less">
</style>
