<template>
    <NavBar :isCusLeft="true">
        <template #left>
            <van-icon name="chat-o" @click="openChat" size="24" />
        </template>
        <template #title>{{ $t('my.super') }}:{{ userInfo.pid }}</template>
        <template #right>
            <SelectLanguage />
        </template>
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
import { reactive } from 'vue'
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

const userInfo = reactive({
    code: '808961',
    pid: 100000068,
    username: '723209',
    avatar: 'https://pic.rmb.bdstatic.com/bjh/b811af55477f31aa6e9415d09f9ddb46.png',
    uid: 1,
    money: 5254.58,
    vip: 'AP1',
    msg: 0,
    nickname: '14',
    usdt: '0.000',
    set_usdt: 0,
    set_bank: 1,
    set_paypwd: 1,
    set_wdf: 1,
    set_bkash: 0,
    set_rocket: 0,
    tele: 'https://t.me/+KkDXUu6hpR84NDdh',
    app: 'https://www.gsmedia.cc/app/',
    sy_money: '23.00',
    sy_zuori: 0,
    sy_jinri: 0,
    sy_benzhou: 0,
    sy_benyue: 0,
    sy_shangyue: 0,
    sy_total: '89.58',
    sy_finsh: 0,
    sy_shengyu: 3
})

const openChat = () => {
    router.push('/notice')
}

const accountList = [
    { name: i18n.global.t('my.sy_money'), value: userInfo.sy_money },
    { name: i18n.global.t('my.sy_zuori'), value: userInfo.sy_zuori },
    { name: i18n.global.t('my.sy_jinri'), value: userInfo.sy_jinri },
    { name: i18n.global.t('my.sy_benzhou'), value: userInfo.sy_benzhou },
    { name: i18n.global.t('my.sy_benyue'), value: userInfo.sy_benyue },
    { name: i18n.global.t('my.sy_shangyue'), value: userInfo.sy_shangyue },
    { name: i18n.global.t('my.sy_total'), value: userInfo.sy_total },
    { name: i18n.global.t('my.sy_finsh'), value: userInfo.sy_finsh },
    { name: i18n.global.t('my.sy_shengyu'), value: userInfo.sy_shengyu }
]

const appList = [
    { name: i18n.global.t('my.info'), icon: info, url: '/user/info' },
    { name: i18n.global.t('my.load'), icon: download, url: '' },
    { name: i18n.global.t('my.excel'), icon: excel, url: '' },
    { name: i18n.global.t('my.zbjl'), icon: wallet, url: '/user/record' },
    { name: i18n.global.t('my.invent'), icon: gift, url: '/share' },
    { name: i18n.global.t('my.team'), icon: team, url: '' },
    { name: i18n.global.t('my.help'), icon: help, url: '/help' },
    { name: i18n.global.t('my.tv'), icon: telegram, url: 'https://t.me/AP9506' },
    { name: i18n.global.t('my.center'), icon: flower, url: '' }
]

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
                        color: #0071e3;
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
                color: #0071e3;
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
