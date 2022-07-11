<template>
    <NavBar>
        <template #title>{{$t('userInfo.usdt')}}</template>
    </NavBar>
    <div class="usdt">
        <van-field v-model="usdtAddress" :label="$t('userInfo.usdt')" :placeholder="$t('userInfo.usdtp')" />
        <div class="btns">
            <van-button type="primary" block>{{$t('userInfo.bankCard')}}</van-button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import NavBar from "@/components/NavBar";

const usdtAddress = ref('')

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
