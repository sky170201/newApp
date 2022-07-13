<template>
    <NavBar>
        <template #title>{{ $t('userInfo.usdt') }}</template>
    </NavBar>
    <div class="usdt">
        <van-field v-model="usdtAddress" :label="$t('userInfo.usdt')" :placeholder="$t('userInfo.usdtp')" />
        <div class="btns">
            <van-button :disabled="disabled" @click="setAddress" type="primary" block>{{ $t('userInfo.bankCard') }}
            </van-button>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import NavBar from "@/components/NavBar";
import { setUsdtAddress, setMyusdt } from '@/api/myApi';

const usdtAddress = ref('')
const disabled = ref(false)
const setAddress = async () => {
    const res = await setAddress({
        usdt: usdtAddress.value
    })
}

onMounted(async () => {
    const { result } = await setMyusdt()
    result.usdt && (disabled.value = true)
    usdtAddress.value = result.usdt
})
</script>

<style scoped lang="less">
.usdt {

    .btns {
        padding: 30px;

        .van-button {
            border-radius: 8px;
        }

    }
}
</style>
