<template>
    <NavBar>
        <!-- <template #title>{{ $t('vipPay.title') }}</template> -->
        <template #title>USDT {{ $t('vipPay.address') }}</template>
    </NavBar>
    <div class="main">
      <p class="title">USDT-TRC20</p>
      <van-image
        width="150"
        height="150"
        :src="vipPayAddress.qrcode"
      />
      <p class="address">{{vipPayAddress.address}}</p>
      <van-button size="small" type="primary">{{$t('taskDetail.btn2')}}</van-button>
    </div>
</template>

<script setup>
import { getVipUsdtAddress } from "@/api/home";
import NavBar from "@/components/NavBar";
import { reactive, onMounted } from "vue";
// import { vipPayAddress } from './data'

const vipPayAddress = reactive({
  address: '',
  qrcode: ''
})
onMounted(async () => {
  const { result } = await getVipUsdtAddress()
  vipPayAddress.address = result.address
  vipPayAddress.qrcode = result.qrcode
})

</script>

<style scoped lang='less'>
.main {
    display: flex;
    padding: 30px;
    flex-direction: column;
    align-items: center;
    .title {
      font-size: 32px;
    }
    .van-image {
      margin: 30px 0;
    }
    .address {
      font-size: 28px;
      margin-bottom: 30px;
    }
    .van-button {
        padding: 0 100px;
    }
}
</style>
