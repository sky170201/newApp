<template>
    <NavBar>
        <template #title>{{ $t('userInfo.bankCard') }}</template>
    </NavBar>
    <div class="bank">
        <van-field disabled v-model="myBank.bankName" :label="$t('userInfo.bankName')" />
        <van-field disabled v-model="myBank.bankUser" :label="$t('userInfo.realName')" />
        <van-field disabled v-model="myBank.bankNumber" :label="$t('userInfo.bankAccount')" />
        <van-field disabled v-model="myBank.occupation" :label="$t('userInfo.rm')" />
        <div class="btns">
            <van-button disabled type="primary" block>{{ $t('userInfo.saveBtn') }}</van-button>
        </div>
    </div>
</template>

<script setup>
import { onMounted, reactive } from 'vue'
import NavBar from "@/components/NavBar";
// import { bankList } from './data'
import { getMyBank } from '@/api/myApi';

const myBank = reactive({
    bankName: '',
    bankUser: '',
    bankNumber: '',
    occupation: ''
})
onMounted(async () => {
    const { result } = await getMyBank()
    myBank.bankName = result.bank_name
    myBank.bankUser = result.bank_user
    myBank.bankNumber = result.bank_number
    myBank.occupation = result.occupation
})

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
