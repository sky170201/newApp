<template>
    <div class="info">
        <NavBar>
            <template #title>个人信息</template>
        </NavBar>
        <van-uploader>
            <van-cell title="头像" is-link>
                <template #icon>
                    <van-image round width="28px" height="28px" fit="contain" :src="avatarImg" />
                </template>
                <template #value>
                    <van-image round width="40px" height="40px" fit="contain" :src="avatar" />
                </template>
            </van-cell>
        </van-uploader>
        <van-cell title="手机号" is-link>
            <template #icon>
                <van-image round width="28px" height="28px" fit="contain" :src="phoneImg" />
            </template>
            <template #value>
                {{ phone }}
            </template>
        </van-cell>
        <van-cell title="银行卡" is-link to="/user/set-bank">
            <template #icon>
                <van-image round width="28px" height="28px" fit="contain" :src="bankImg" />
            </template>
            <template #value>

            </template>
        </van-cell>
        <van-cell title="USDT-TRC20" is-link to="/user/set-usdt">
            <template #icon>
                <van-image round width="28px" height="28px" fit="contain" :src="usdtImg" />
            </template>
            <template #value>
                <span style="color: red">未设置</span>
            </template>
        </van-cell>
        <van-cell title="登录密码" is-link @click="clickInput('login')">
            <template #icon>
                <van-image round width="28px" height="28px" fit="contain" :src="lPImg" />
            </template>
            <template #value>
            </template>
        </van-cell>
        <van-cell title="资金密码" is-link @click="clickInput('amount')">
            <template #icon>
                <van-image round width="28px" height="28px" fit="contain" :src="apImg" />
            </template>
            <template #value>
            </template>
        </van-cell>
        <van-action-sheet v-model:show="isShowSetPassword" :title="modifyCell.title">
            <van-form @submit="onSubmit">
                <van-field v-model="originPassword" :label="modifyCell.cell1" :placeholder="modifyCell.cell1p" />
                <van-field v-model="newPassword" type="password" :label="modifyCell.cell2"
                    :placeholder="modifyCell.cellp2" />
                <van-field v-model="confirmPassword" type="password" :label="modifyCell.cell3"
                    :placeholder="modifyCell.cell3p" />
                <div style="margin: 16px;">
                    <van-button round block type="primary" native-type="submit">
                        提交
                    </van-button>
                </div>
            </van-form>
        </van-action-sheet>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import NavBar from "@/components/NavBar";
import appImg from '@/assets/img/app.png'
import avatarImg from '@/assets/img/info_01.png'
import phoneImg from '@/assets/img/info_02.png'
import bankImg from '@/assets/img/info_03.png'
import usdtImg from '@/assets/img/info_04.png'
import lPImg from '@/assets/img/info_05.png'
import apImg from '@/assets/img/info_06.png'

const avatar = ref(appImg)
const phone = ref('123')

const isShowSetPassword = ref(false)

const modifyTitle = ref('')
const modifyCell = ref('')
const originPassword = ref('')
const newPassword = ref('')
const confirmPassword = ref('')

const strategy = {
    login: {
        title: '修改登录密码',
        cell1: '原登录密码',
        cell1p: '请输入原登录密码',
        cell2: '新登录密码',
        cellp2: '请输入新登录密码',
        cell3: '确认密码',
        cell3p: '请确认登录密码',
    },
    amount: {
        title: '修改资金密码',
        cell1: '原资金密码',
        cell1p: '请输入原资金密码',
        cell2: '新资金密码',
        cellp2: '请输入新资金密码',
        cell3: '确认密码',
        cell3p: '请确认资金密码',
    }
}

const clickInput = (type) => {
    console.log(type, strategy[type]);
    modifyCell.value = strategy[type]
    console.log(modifyCell.value);
    isShowSetPassword.value = true
}

</script>

<style scoped lang="less">
.info {
    .van-uploader {
        width: 100%;

        :deep(.van-uploader__input-wrapper) {
            width: 100%;
        }
    }

    .van-cell {
        display: flex;
        align-items: center;

        .van-image {
            margin-right: 10px;
        }
    }

    :deep(.van-action-sheet) {
        background-color: #151d31;
    }
}
</style>
