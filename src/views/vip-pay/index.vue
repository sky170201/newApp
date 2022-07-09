<template>
    <NavBar>
        <template #title>{{ $t('vipPay.title') }}</template>
    </NavBar>
    <div class="top-100 vip-list">
        <template v-for="(item, index) in vipPayList" :key="index">
            <van-cell center :title="item.title" :label="item.sub" is-link :url="item.url">
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
import { vipPayList } from './data'
import masterCard from '@/assets/img/master-card.png'
import usdt from '@/assets/img/usdt.png'
import online5x5 from '@/assets/img/online5x5.png'

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
}
</style>
