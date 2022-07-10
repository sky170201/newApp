<template>
    <NavBar>
        <template #title>银行卡</template>
    </NavBar>
    <div class="bank">
        <van-field disabled v-model="bankName" label="银行名称" />
        <van-field disabled v-model="bankUser" label="真实姓名" />
        <van-field disabled v-model="bankNumber" label="银行账号" />
        <van-field disabled v-model="occupation" label="预留手机号" />
        <div class="btns">
            <van-button disabled type="primary" block>保存</van-button>
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
