<template>
    <NavBar>
        <template #title>{{ $t('wallet.title') }}</template>
    </NavBar>
    <div class="wallet">
        <WalletTop @withdraw="withdraw" :walletInfo="walletInfo" />
        <div class="line"></div>
        <WalletTable :records="records" />
        <van-action-sheet v-model:show="withdrawShow" :title="$t('wallet.withdraw')">
            <van-form @submit="onSubmit">
                <van-field name="method" @click-input="clickInput" v-model="method"
                    :label="$t('wallet.withdrawalMethod')" :placeholder="$t('wallet.withdrawalMethodPlaceHolder')" />
                <van-field name="amount" v-model="amount" :label="$t('wallet.withdrawalAmount')"
                    :placeholder="$t('wallet.withdrawalAmountPlaceHolder')" />
                <van-field name="password" v-model="password" type="password" :label="$t('wallet.FundPassword')"
                    :placeholder="$t('wallet.FundPasswordPlaceHolder')" />
                <div class="tip">
                    <p>{{ walletInfo.txt1 }}</p>
                    <p>{{ walletInfo.txt2 }}</p>
                    <p>{{ walletInfo.txt3 }}</p>
                </div>
                <div style="margin: 16px;">
                    <van-button block type="primary" native-type="submit">
                        {{ $t('wallet.submit') }}
                    </van-button>
                </div>
            </van-form>
        </van-action-sheet>
        <van-popup v-model:show="showPicker" round position="bottom">
            <van-picker :columns="columns" :columns-field-names="customFieldName" @cancel="showPicker = false"
                @confirm="onConfirm">
                <!-- 自定义内容选项，作用域插槽 -->
                <template #option="option">
                    <div class="custom-option">
                        {{ option.text }}
                    </div>
                </template>
            </van-picker>
        </van-popup>
    </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import NavBar from "@/components/NavBar";
import WalletTop from './Top'
import WalletTable from './Table.vue'
import {
    // walletInfo, records,
    withdrawalMethodList
} from './data'
import { getMyWallet, getMyWalletRecord, ajaxWithdraw } from "@/api/myApi";

const withdrawShow = ref(false)
const methodType = ref('')
const method = ref('')
const amount = ref('')
const password = ref('')

const walletInfo = ref({})
const records = ref([])

onMounted(async () => {
    const myWallet = await getMyWallet()
    walletInfo.value = myWallet.result
    const myWalletRecords = await getMyWalletRecord()
    records.value = myWalletRecords.result.list
})

const withdraw = () => {
    withdrawShow.value = true
}

const showPicker = ref(false)
const clickInput = (e) => {
    e.target.blur() // 阻止input获取焦点
    showPicker.value = true
}

const columns = withdrawalMethodList

const onConfirm = ({ text, name }) => {
    methodType.value = name
    method.value = text
    showPicker.value = false
}

const onSubmit = async (values) => {
    console.log(values);
    // money: 123
    // password: 123456
    // type: 2
    const res = await ajaxWithdraw({
        type: methodType.value,
        money: values.amount,
        password: values.password
    })
    console.log(res);
}

</script>

<style scoped lang='less'>
.wallet {

    :deep(.van-popup) {
        background-color: #151d31 !important;
    }

    .van-popup {
        .van-picker {
            background-color: #151d31 !important;

            :deep(.van-picker__mask) {
                background-image: none !important;
            }

            :deep(.van-picker-column__item--selected) {
                color: @mainColor  !important;
            }
        }
    }

    :deep(.van-popup--round) {
        border-radius: 27px 27px 0 0;
    }

    .van-field {
        padding: 40px;
    }

    .tip {
        padding: 30px 30px 0;
        line-height: 50px;
        color: orange;
    }
}
</style>
