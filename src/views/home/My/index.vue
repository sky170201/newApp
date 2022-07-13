<template>
    <NavBar :isCusLeft="true">
        <template #left>
            <van-icon name="chat-o" @click="openChat" />
        </template>
        <template #title>{{ $t('my.super') }}:{{ userInfo.pid }}</template>
    </NavBar>
    <div class="container">
        <div class="account">
            <div class="account-left">
                <img :src="userInfo.avatar">
                <div>
                    <p>ID: {{ userInfo.uid }}</p>
                    <p>{{ $t('my.account') }}: {{ userInfo.username }} <span>{{ userInfo.vip }}</span></p>
                    <p>{{ $t('my.iCode') }}: {{ userInfo.code }}</p>
                </div>
            </div>
            <div @click="logout" class="account-right">
                <img src="~@/assets/img/exit.png">
                <p>{{ $t('my.exit') }}</p>
            </div>
        </div>
        <div class="wallet">
            <div class="box">
                <div class="up">
                    <div>
                        <p>{{ $t('my.balance') }}：<span>{{ userInfo.money }}</span> EUR</p>
                        <p>{{ $t('my.usdt') }}: <span>{{ userInfo.usdt }}</span></p>
                    </div>
                    <van-button @click="toMyWallet" type="primary">{{ $t('my.wallet') }}</van-button>
                </div>
                <van-steps :active="userInfo.uid">
                    <van-step>{{ $t('my.credit') }}</van-step>
                    <van-step>{{ $t('my.restriction') }}</van-step>
                    <van-step>{{ $t('my.good') }}</van-step>
                    <van-step>{{ $t('my.excellent') }}</van-step>
                </van-steps>
            </div>
        </div>
        <van-grid :gutter="3" :column-num="3">
            <van-grid-item v-for="(item, index) in accountList" :key="index" :text="item.name">
                <template #icon>
                    {{ item.value }}
                </template>
            </van-grid-item>
        </van-grid>
        <div class="line"></div>
        <div class="line"></div>
        <van-grid :gutter="3" :column-num="3">
            <van-grid-item @click="action(item.url)" v-for="(item, index) in appList" :key="index" :text="item.name">
                <template #icon>
                    <img :src="item.icon">
                </template>
            </van-grid-item>
        </van-grid>
    </div>
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue'
import { Dialog } from 'vant';
import NavBar from '@/components/NavBar'
import router from '@/router'
import i18n from '@/language/i18n'

import info from '@/assets/img/info.png'
import download from '@/assets/img/cloud-download.png'
import excel from '@/assets/img/excel.png'
import wallet from '@/assets/img/wallet.png'
import gift from '@/assets/img/gift.png'
import team from '@/assets/img/tubiao-bingtu.png'
import help from '@/assets/img/help.png'
import telegram from '@/assets/img/telegram.png'
import flower from '@/assets/img/flower.png'
import { isExternal } from '@/utils';
import { removeSessionStorage } from '@/utils/auth';
import { getUserInfo } from '@/api/login';
import { mainStore } from '@/store/mainStore';
const userInfo = ref({})

const main = mainStore()
const appList = ref([])
const accountList = ref([])

onMounted(async () => {
    const { result } = await getUserInfo()
    userInfo.value = result
    main.setUserInfo(result)
    accountList.value = [
        { name: i18n.global.t('my.sy_money'), value: result.sy_money },
        { name: i18n.global.t('my.sy_zuori'), value: result.sy_zuori },
        { name: i18n.global.t('my.sy_jinri'), value: result.sy_jinri },
        { name: i18n.global.t('my.sy_benzhou'), value: result.sy_benzhou },
        { name: i18n.global.t('my.sy_benyue'), value: result.sy_benyue },
        { name: i18n.global.t('my.sy_shangyue'), value: result.sy_shangyue },
        { name: i18n.global.t('my.sy_total'), value: result.sy_total },
        { name: i18n.global.t('my.sy_finsh'), value: result.sy_finsh },
        { name: i18n.global.t('my.sy_shengyu'), value: result.sy_shengyu }
    ]
    appList.value = [
        { name: i18n.global.t('my.info'), icon: info, url: '/user/info' },
        { name: i18n.global.t('my.load'), icon: download, url: result.app },
        { name: i18n.global.t('my.excel'), icon: excel, url: '/user/report' },
        { name: i18n.global.t('my.zbjl'), icon: wallet, url: '/user/record' },
        { name: i18n.global.t('my.invent'), icon: gift, url: '/share' },
        { name: i18n.global.t('my.team'), icon: team, url: '/user/team' },
        { name: i18n.global.t('my.help'), icon: help, url: '/help' },
        { name: i18n.global.t('my.tv'), icon: telegram, url: result.tele }, // 'https://t.me/AP9506'
        { name: i18n.global.t('my.center'), icon: flower, url: '/user/credit' }
    ]
})

const openChat = () => {
    router.push('/notice')
}

const action = (url) => {
    if (!url) return
    if (isExternal(url)) {
        window.location.href = url
        // window.open(url)
    } else {
        router.push(url)
    }
}

const logout = () => {
    Dialog.confirm({
        title: i18n.global.t('my.exitConfirmTitle'),
        message: i18n.global.t('my.exitConfirmMessage'),
        confirmButtonColor: '#0071e3'
    })
        .then(() => {
            // on confirm
            removeSessionStorage('TOKEN')
            router.push('/login')
        })
        .catch(() => {
            // on cancel
        });
}

const toMyWallet = () => {
    router.push('/my-wallet')
}

</script>

<style scoped lang='less'>
.van-icon {
    font-size: 44px;
}

.container {
    position: relative;
    width: 100%;
    height: calc(100% - 192px);
    overflow: auto;

    .account {
        padding: 30px 20px;
        // background: transparent;
        display: flex;
        justify-content: space-between;
        align-items: center;

        &-left {
            display: flex;
            align-items: center;

            img {
                height: 120px;
                width: 120px;
                border-radius: 50%;
                margin-right: 20px;
            }

            &>div {
                p {
                    // color: #fff;
                    font-size: 28px;
                    line-height: 50px;

                    span {
                        font-weight: 700;
                        color: red;
                    }
                }
            }
        }

        &-right {
            font-size: 26px;
            color: red;
            text-align: center;

            img {
                height: 68px;
            }
        }
    }

    .wallet {
        padding: 0 20px 20px;

        .box {
            padding: 20px 15px;
            background: #fff;
            box-shadow: 0 0 13px 0 #e3e3e3;
            border-radius: 13px;

            .up {
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-size: 28px;
                color: rgb(51, 51, 51);

                p {
                    line-height: 40px;

                    span {
                        font-size: 36px;
                        color: @mainColor;
                    }
                }
            }

            .van-button {
                height: 70px;
            }
        }
    }

    .van-grid {
        :deep(.van-grid-item) {

            .van-grid-item__content--surround:after,
            .van-grid-item__content:after {
                border-width: 0;
            }

            .van-grid-item__content {
                color: @mainColor;
                font-size: 36px;

                .van-badge__wrapper {
                    img {
                        width: 48px;
                    }
                }

                .van-grid-item__text {
                    color: #ddd;
                    margin-top: 10px;
                    text-align: center;
                }
            }
        }
    }
}
</style>
