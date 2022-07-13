<template>
    <NavBar>
        <template #title>{{ $t('team.title') }}</template>
    </NavBar>
    <van-tabs v-model:active="active" swipeable>
        <van-tab :title="$t('team.title')">
            <TeamReport :reportList="reportList" />
        </van-tab>
        <van-tab :title="$t('team.tab2')">
            <MyTeam v-if="teamList.length" />
        </van-tab>
    </van-tabs>
</template>

<script setup>
import { onMounted, provide, ref } from 'vue';
import NavBar from "@/components/NavBar";
import TeamReport from './TeamReport.vue'
import MyTeam from './MyTeam.vue'
import { getTeamReport } from '@/api/myApi';
import i18n from '@/language/i18n'

const reportList = ref([])
const teamList = ref([])
provide('teamList', teamList)
onMounted(async () => {
    const { result } = await getTeamReport({
        type: 1,
        page: 1
    })
    teamList.value = result.list
    reportList.value = [
        { name: `${i18n.global.t('team.ttb')}`, value: result.team_ye },
        { name: `${i18n.global.t('team.ttf')}`, value: result.team_ls },
        { name: `${i18n.global.t('team.ttr')}`, value: result.team_cz },
        { name: `${i18n.global.t('team.ttco')}`, value: result.team_tx },
        { name: `${i18n.global.t('team.nofc')}`, value: result.team_sc },
        { name: `${i18n.global.t('team.dpn')}`, value: result.team_zt },
        { name: `${i18n.global.t('team.ts')}`, value: result.team_td },
        { name: `${i18n.global.t('team.np')}`, value: result.team_day },
    ]
})
const active = ref(0)

</script>

<style scoped lang="less">
</style>
