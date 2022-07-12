<template>
    <NavBar>
        <template #title>{{ $t('vipPay.title') }}</template>
    </NavBar>
    <div class="top-100 vip-list">
        <template v-for="(item, index) in vipPayList" :key="index">
            <van-cell @click="action(item, index)" center :title="item.title" :label="item.sub" is-link :url="item.url">
                <template #icon>
                    <div class="left-icon">
                        <van-image round width="50" height="50" :src="index == 1 ? usdt : masterCard" />
                    </div>
                </template>
                <template #value>
                    <div v-if="item.money" class="mainColor">{{ item.money }}</div>
                </template>
            </van-cell>
        </template>
        <van-cell center :title="$t('vipPay.online')" :label="$t('vipPay.description')" is-link to="/chat">
            <template #icon>
                <div class="left-icon">
                    <van-image round width="50" height="50" :src="online5x5"></van-image>
                </div>
            </template>
        </van-cell>
    </div>
</template>

<script setup>
import NavBar from "@/components/NavBar";
// import { vipPayList } from './data'
import masterCard from '@/assets/img/master-card.png'
import usdt from '@/assets/img/usdt.png'
import online5x5 from '@/assets/img/online5x5.png'
import { getVipPayInfo, payForUsdt } from "@/api/home";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { Dialog, Toast } from "vant";

const route = useRoute()
const vipPayList = ref([])
onMounted(async () => {
    const { result } = await getVipPayInfo({ level: route.query.level })
    vipPayList.value = result
})
const action = async (item, idx) => {
    if (idx === 0) {

    } else if (idx === 1) {
        const res = await payForUsdt({
            id: item.id,
            level: route.query.leve
        })
        console.log(res);
        if (res.result.status === 0) {
            Dialog.alert({
                message: '余额不足',
                // confirmButtonText: ''
            }).then(() => {
                // on close
            });
        } else if (res.code === 500) {
            Toast(res.message)
        }
    }
}

</script>

<style scoped lang='less'>
.vip-list {
    .van-cell {
        .left-icon {
            // width: 100px;
            border-radius: 50%;
            margin-right: 30px;
            overflow: hidden;

        }
    }

    .van-cell:nth-child(1) {
        :deep(.van-cell__value) {
            display: none;
        }
    }
}
</style>
