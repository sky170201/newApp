<template>
    <div class="info">
        <NavBar>
            <template #title>{{ $t('userInfo.title') }}</template>
        </NavBar>
        <van-uploader :after-read="afterRead">
            <van-cell :title="$t('userInfo.avatar')" is-link>
                <template #icon>
                    <van-image round width="28px" height="28px" fit="contain" :src="avatarImg" />
                </template>
                <template #value>
                    <van-image round width="40px" height="40px" fit="cover" :src="avatar" />
                </template>
            </van-cell>
        </van-uploader>
        <van-cell :title="$t('userInfo.accountNumber')" is-link>
            <template #icon>
                <van-image round width="28px" height="28px" fit="contain" :src="phoneImg" />
            </template>
            <template #value>
                {{ phone }}
            </template>
        </van-cell>
        <van-cell :title="$t('userInfo.bankCard')" is-link to="/user/set-bank">
            <template #icon>
                <van-image round width="28px" height="28px" fit="contain" :src="bankImg" />
            </template>
            <template #value>

            </template>
        </van-cell>
        <van-cell :title="$t('userInfo.usdt')" is-link to="/user/set-usdt">
            <template #icon>
                <van-image round width="28px" height="28px" fit="contain" :src="usdtImg" />
            </template>
            <template #value>
                <span v-if="!main.user.set_bank" style="color: red">{{ $t('userInfo.setTxt') }}</span>
            </template>
        </van-cell>
        <van-cell :title="$t('userInfo.lp')" is-link @click="clickInput('login')">
            <template #icon>
                <van-image round width="28px" height="28px" fit="contain" :src="lPImg" />
            </template>
            <template #value>
            </template>
        </van-cell>
        <van-cell :title="$t('userInfo.fp')" is-link @click="clickInput('amount')">
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
                        {{ $t('userInfo.submitBtn') }}
                    </van-button>
                </div>
            </van-form>
        </van-action-sheet>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import i18n from '@/language/i18n'

import NavBar from "@/components/NavBar";

// import appImg from '@/assets/img/app.png'
import avatarImg from '@/assets/img/info_01.png'
import phoneImg from '@/assets/img/info_02.png'
import bankImg from '@/assets/img/info_03.png'
import usdtImg from '@/assets/img/info_04.png'
import lPImg from '@/assets/img/info_05.png'
import apImg from '@/assets/img/info_06.png'
import { uploadFile } from '@/api/home';
import { updateAvatar } from '@/api/myApi';
import { mainStore } from '@/store/mainStore';

// import
const main = mainStore()
const avatar = ref(main.user.avatar)
const phone = ref('123')
const afterRead = async (file) => {
    console.log(123);
    // 此时可以自行将文件上传至服务器
    const formData = new FormData()
    formData.append('pic', file.file)
    const { result } = await uploadFile(formData)
    const { code, message } = await updateAvatar({ image: result })
    if (code === 200) {
        avatar.value = result
    }
};

const isShowSetPassword = ref(false)

const modifyCell = ref('')
const originPassword = ref('')
const newPassword = ref('')
const confirmPassword = ref('')

const strategy = {
    login: {
        title: i18n.global.t('userInfo.mlp'),
        cell1: i18n.global.t('userInfo.olp'),
        cell1p: i18n.global.t('userInfo.olpp'),
        cell2: i18n.global.t('userInfo.nlp'),
        cellp2: i18n.global.t('userInfo.nlpp'),
        cell3: i18n.global.t('userInfo.cp'),
        cell3p: i18n.global.t('userInfo.cpp'),
    },
    amount: {
        title: i18n.global.t('userInfo.mfp'),
        cell1: i18n.global.t('userInfo.ofp'),
        cell1p: i18n.global.t('userInfo.ofpp'),
        cell2: i18n.global.t('userInfo.nfp'),
        cellp2: i18n.global.t('userInfo.nfpp'),
        cell3: i18n.global.t('userInfo.cp'),
        cell3p: i18n.global.t('userInfo.cfp'),
    }
}

const clickInput = (type) => {
    modifyCell.value = strategy[type]
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
