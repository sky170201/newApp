<template>
    <NavBar>
        <template #title>USDT-TRC20</template>
    </NavBar>
    <div class="usdt">
        <van-field v-model="usdtAddress" label="USDT-TRC20" placeholder="请输入USDT-TRC20地址" />
        <div class="btns">
            <van-button type="primary" block>保存</van-button>
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
