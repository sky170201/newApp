<template>
    <div class="top-100 vip">
        <div class="current">
            <div class="current-box">
                <p>{{ $t('hall.level') }}：<span>{{ vipInfo.vip }}</span></p>
                <p>{{ $t('hall.taskName') }}：<span>{{ vipInfo.num }}</span></p>
            </div>
        </div>
        <ul class="vip-box">
            <li @click="() => toVipPay(item)" class="vip-box-item" v-for="(item, index) in vipInfo.list" :key="index">
                <p class="main">{{ item.name }} <span class="light-text">{{ item.money }}EUR</span></p>
                <div class="content">
                    <p>{{ $t('hall.taskName') }}：<span class="light-text">{{ item.num }}</span></p>
                    <div class="btn">{{ $t('level.btnName') }}</div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { getVipInfo } from '@/api/home';
import router from '@/router';
import { onMounted, reactive } from 'vue'

const vipInfo = reactive({
    vip: '',
    num: '',
    list: []
})
onMounted(async () => {
    const { result } = await getVipInfo()
    vipInfo.vip = result.vip
    vipInfo.num = result.num
    vipInfo.list = result.list
})

const toVipPay = (item) => {
    router.push({
        path: '/vip-pay',
        query: {
            level: item.id
        }
    })
}

</script>

<style scoped lang='less'>
.vip {
    .current {
        padding: 30px;

        &-box {
            border-radius: 8px;
            background: url(~@/assets/img/vip_new_bg.png) no-repeat 50px, linear-gradient(60deg, #8ab2f3, #115dd1);
            background-size: contain;
            box-shadow: 13px 13px 27px 0 #115dd1;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 40px;
            font-size: 28px;
            color: #fff;

            p:first-of-type {
                margin-bottom: 20px;
            }

            p {
                span {
                    color: #efb322;
                    font-weight: 700;
                    font-size: 36px;
                }
            }
        }
    }

    .vip-box {
        padding: 30px;

        &-item {
            border-radius: 8px;
            background: url(~@/assets/img/vip_new_bg.png) no-repeat 50px, linear-gradient(60deg, #ccd7e9, #7085a5);
            background-size: contain;
            box-shadow: 13px 13px 27px 0 #7085a5;
            margin-bottom: 30px;
            padding: 50px 40px;
            font-size: 28px;
            color: #fff;

            .main {
                margin-bottom: 20px;
                background: transparent;
            }

            .light-text {
                color: #efb322;
                font-weight: 700;
                font-size: 36px;
                margin-left: 5px;
            }

            .content {
                display: flex;
                justify-content: space-between;

                .btn {
                    font-size: 28px;
                }
            }
        }

        &-item:nth-of-type(2) {
            background: url(~@/assets/img/vip_new_bg.png) no-repeat 50px, linear-gradient(60deg, #fd9e02, #d86a25);
            background-size: contain;
            box-shadow: 13px 13px 27px 0 #fd7e35;
        }

        &-item:nth-of-type(3) {
            background: url(~@/assets/img/vip_new_bg.png) no-repeat 50px, linear-gradient(60deg, #3044b3, #273580);
            background-size: contain;
            box-shadow: 13px 13px 27px 0 #273580;
        }

        &-item:nth-of-type(4) {
            background: url(~@/assets/img/vip_new_bg.png) no-repeat 50px, linear-gradient(60deg, #31b489, #3e91b8);
            background-size: contain;
            box-shadow: 13px 13px 27px 0 #3e91b8;
        }
    }
}
</style>
