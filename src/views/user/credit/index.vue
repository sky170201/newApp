<template>
  <div class="credit">
    <NavBar>
      <template #title>{{$t('credit.title')}}</template>
    </NavBar>
    <div class="circle">
      <van-circle
        v-model:current-rate="currentRate"
        :rate="rate"
        :color="gradientColor"
        size="200px"
        :stroke-width="70"
        :speed="100"
        :text="$t('credit.type')"
      />
    </div>
    <van-cell :title="$t('credit.statement')" icon="info" />
    <div class="info">
      <p>{{$t('credit.p1')}}</p>
      <p>{{$t('credit.p2')}}</p>
      <p>
        {{$t('credit.p3')}}
      </p>
      <p>{{$t('credit.p4')}}</p>
      <p>{{$t('credit.p5')}}</p>
      <p>{{$t('credit.p6')}}</p>
      <p>{{$t('credit.p7')}}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import i18n from "@/language/i18n";
import NavBar from "@/components/NavBar";
const currentRate = ref(0);
const rate = ref(68);
const gradientColor = {
  "0%": "#3fecff",
  "100%": "#6149f6",
};
</script>

<style scoped lang="less">
.circle {
  width: 100%;
  height: 500px;
  margin-top: 40px;
  text-align: center;
  :deep(.van-circle__text) {
    color: #fff;
    font-size: 44px;
  }
}
.van-cell {
  :deep(.van-icon) {
    color: #0071e3;
  }
  :deep(.van-cell__title) {
    color: #0071e3;
  }
}
.info {
    padding: 20px 30px;
    line-height: 50px;
}
</style>
