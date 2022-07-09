<template>
    <div class="top">
        <div class="balance">
            <p class="flex1 flex justify-center">
                <span class="amount">{{ walletInfo.total }}</span>
            </p>
            <div class="flex mt-30">
                <div class="i flex1">{{ $t('wallet.freeze') }}:<span>{{ walletInfo.freeze }}</span></div>
                <div class="i flex1">{{ $t('wallet.available') }}:<span>{{ walletInfo.price }}</span></div>
            </div>
        </div>
        <div class="btn">
            <van-button @click="toVip" type="success" size="small">{{ $t('wallet.rechange') }}</van-button>
            <van-button @click="withdraw" type="primary" size="small">{{ $t('wallet.withdraw') }}</van-button>
        </div>
    </div>
    <div class="line"></div>
    <Table :records="records" />
</template>

<script setup>
import router from "@/router";

defineProps({
    walletInfo: {
        type: Object,
        default: () => ({})
    }
})

const emit = defineEmits('withdraw')

const withdraw = () => {
    emit('withdraw')
}

const toVip = () => {
    router.push('/level')
}

</script>

<style scoped lang='less'>
.top {
    padding: 20px;

    .balance {
        display: flex;
        flex-direction: column;

        .amount {
            font-size: 40px;
            color: #0071e3;
        }

        .i {
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;

            span {
                color: #0071e3;
                font-size: 36px;
                margin-left: 10px;
            }
        }
    }

    .btn {
        margin-top: 40px;
        display: flex;

        .van-button {
            flex: 1;
        }

        .van-button:nth-child(2) {
            margin-left: 50px;
        }
    }
}
</style>
