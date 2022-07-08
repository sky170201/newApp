<template>
    <NavBar :isCusLeft="true">
        <template #title>{{$t('chat.title')}}</template>
    </NavBar>
    <van-cell title="Recharge problem" is-link url="https://github.com" />
    <van-cell title="Withdrawal problem" is-link url="https://github.com" />
    <van-cell title="Telegram1" is-link url="https://github.com" />
    <van-cell title="Telegram2" is-link url="https://github.com" />
  <!-- <van-cell title="路由跳转" is-link to="index" /> -->
</template>

<script setup>
import NavBar from '@/components/NavBar'

</script>

<style scoped lang='less'>

</style>
