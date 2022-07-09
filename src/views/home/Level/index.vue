<template>
    <div class="top-100 vip">
        <div class="current">
            <div class="current-box">
                <p>{{ $t('hall.level') }}：<span>{{ vipInfo.vip }}</span></p>
                <p>{{ $t('hall.taskName') }}：<span>{{ vipInfo.num }}</span></p>
            </div>
        </div>
        <ul class="vip-box">
            <li @click="toVipPay" class="vip-box-item" v-for="(item, index) in vipInfo.list" :key="index">
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
import router from '@/router';
import { reactive } from 'vue'

const toVipPay = () => {
    router.push('/vip-pay')
}

const vipInfo = reactive({
    vip: 'AP1',
    num: 3,
    list: [
        {
            id: 4,
            name: 'AP2',
            money: 400,
            num: 6,
            isshow: 1,
            remark: '',
            limit: 'AP2'
        },
        {
            id: 5,
            name: 'AP3',
            money: 800,
            num: 8,
            isshow: 1,
            remark: '',
            limit: 'AP3'
        },
        {
            id: 7,
            name: 'AP4',
            money: 1500,
            num: 10,
            isshow: 1,
            remark: '',
            limit: 'AP4'
        },
        {
            id: 9,
            name: 'AP5',
            money: 3000,
            num: 15,
            isshow: 1,
            remark: '',
            limit: 'AP5'
        }
    ]
})
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
