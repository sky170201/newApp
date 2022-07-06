<template>
    <NavBar :isCusLeft="true">
        <template #left>
            <van-icon name="chat-o" @click="openChat" size="24"/>
        </template>
        <template #title>我的上级:100000068</template>
        <template #right>
            <SelectLanguage/>
        </template>
    </NavBar>
    <div class="container">
        <div class="account">
            <div class="account-left">
                <img :src="userInfo.avatar">
                <div>
                    <p>ID: {{userInfo.uid}}</p>
                    <p>账号: {{userInfo.username}} <span>{{userInfo.vip}}</span></p>
                    <p>邀请码: {{userInfo.code}}</p>
                </div>
            </div>
            <div @click="logout" class="account-right">
                <img src="~@/assets/img/exit.png">
                <p>退出登录</p>
            </div>
        </div>
        <div class="wallet">
            <div class="box">
                <div class="up">
                    <div>
                        <p>余额：<span>{{userInfo.money}}</span> EUR</p>
                        <p>USDT: <span>{{userInfo.usdt}}</span></p>
                    </div>
                    <van-button type="primary">我的钱包</van-button>
                </div>
                <van-steps :active="userInfo.sy_shengyu">
                    <van-step>封号</van-step>
                    <van-step>限制</van-step>
                    <van-step>良好</van-step>
                    <van-step>优秀</van-step>
                </van-steps>
            </div>
        </div>
        <van-grid :gutter="3" :column-num="3">
            <van-grid-item v-for="value in 9" :key="value" text="文字">
                <template #icon>
                    123
                </template>
            </van-grid-item>
        </van-grid>
        <div class="line"></div>
        <div class="line"></div>
        <van-grid :gutter="3" :column-num="3">
            <van-grid-item v-for="value in 9" :key="value" text="文字">
                <template #icon>
                    123
                </template>
            </van-grid-item>
        </van-grid>
    </div>
</template>

<script setup>
import { reactive } from 'vue'
import NavBar from '@/components/NavBar'
import router from '@/router'

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

const logout = () => {
  router.push('/login')
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
        }
    }
}
</style>
