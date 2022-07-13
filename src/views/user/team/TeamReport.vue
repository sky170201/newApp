<template>
    <van-grid :gutter="1" :column-num="2">
        <van-grid-item v-for="(item, index) in reportList" :key="index">
            <template #default>
                <div class="title">{{ item.name }}</div>
                <div class="value">{{ item.value }}</div>
            </template>
        </van-grid-item>
    </van-grid>
    <div class="line"></div>
    <van-tabs @click-tab="onClickTab" v-model:active="active" swipeable>
        <van-tab :title="$t('team.tab11')">
            <TeamReportTable />
        </van-tab>
        <van-tab :title="$t('team.tab12')">
            <TeamReportTable />
        </van-tab>
        <van-tab :title="$t('team.tab13')">
            <TeamReportTable />
        </van-tab>
    </van-tabs>
</template>

<script setup>
import { ref } from 'vue';
// import { teamData } from './data'
import TeamReportTable from './TeamReportTable.vue'

defineProps({
    reportList: {
        type: Array,
        default: () => ([])
    }
})
const active = ref(0)

const onClickTab = () => { }

</script>

<style scoped lang="less">
.van-grid {
    :deep(.van-grid-item) {

        .van-grid-item__content--surround:after,
        .van-grid-item__content:after {
            border-width: 0;
        }

        .van-grid-item__content {
            text-align: center;

            .value {
                margin-top: 12px;
                font-size: 40px;
                color: @mainColor;
            }
        }
    }
}
</style>
