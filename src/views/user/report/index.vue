<template>
    <div class="report">
        <NavBar>
            <template #title>{{ $t('report.title') }}</template>
        </NavBar>
        <van-cell class="one" :title="`${$t('report.totalRevenue')}7EUR`" icon="label" />
        <van-grid :gutter="1" :column-num="2">
            <van-grid-item v-for="(item, index) in appList" :key="index">
                <template #default>
                    <div class="title">{{ item.name }}</div>
                    <div class="value">{{ item.value }}</div>
                </template>
            </van-grid-item>
        </van-grid>
        <div class="line"></div>
        <van-cell :title="$t('report.title')" icon="label" :value="$t('report.value')" />
        <ReportTable :records="reportData" />
    </div>
</template>

<script setup>
import i18n from '@/language/i18n'
import NavBar from "@/components/NavBar";
import ReportTable from './Table.vue'
// import { reportData } from './data'
import { getDayReport } from '@/api/myApi';
import { onMounted, ref } from 'vue';

const reportData = ref({})
const appList = ref([])
onMounted(async () => {
    const { result } = await getDayReport()
    reportData.value = result.list
    appList.value = [
        { name: `${i18n.global.t('report.own')}(EUR)`, value: result.ziji },
        { name: `${i18n.global.t('report.subordinate')}(EUR)`, value: result.renwu },
        { name: `${i18n.global.t('report.sRecharge')}(EUR)`, value: result.chongzhi },
        { name: `${i18n.global.t('report.robot')}(EUR)`, value: result.roboot },
    ]
})

</script>

<style scoped lang="less">
.report {
    .one {
        margin-bottom: 2px;
    }

    .van-cell {
        :deep(.van-icon) {
            color: @mainColor;
        }

        :deep(.van-cell__title) {
            color: @mainColor;
            font-weight: 700;
        }
    }

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
}
</style>
