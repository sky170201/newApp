<template>
    <NavBar>
        <template #title>{{$t('userInfo.bankCard')}}</template>
    </NavBar>
    <div class="bank">
        <van-field disabled v-model="bankName" :label="$t('userInfo.bankName')" />
        <van-field disabled v-model="bankUser" :label="$t('userInfo.realName')" />
        <van-field disabled v-model="bankNumber" :label="$t('userInfo.bankAccount')" />
        <van-field disabled v-model="occupation" :label="$t('userInfo.rm')" />
        <div class="btns">
            <van-button disabled type="primary" block>{{$t('userInfo.saveBtn')}}</van-button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import NavBar from "@/components/NavBar";
import { bankList } from './data'

const bankName = ref(bankList.bank_name)
const bankUser = ref(bankList.bank_user)
const bankNumber = ref(bankList.bank_number)
const occupation = ref(bankList.occupation)

</script>

<style scoped lang="less">
.bank {

    :deep(.van-field--disabled) {
        .van-field__label {
            color: #c8c9cc !important;
        }
    }

    .btns {
        padding: 30px;

        .van-button {
            border-radius: 8px;
        }

    }
}
</style>
