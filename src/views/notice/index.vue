<template>
  <NavBar>
    <template #title>{{ $t('notice.title') }}</template>
    <template #right>
      <span class="mainColor">{{ $t('notice.btnText') }}</span>
    </template>
  </NavBar>
  <van-cell v-for="(item, index) in noticeData.list" :key="index" :title="item.msg" :value="item.time" />
</template>

<script setup>
import NavBar from '@/components/NavBar'
import { noticeData } from './data'

</script>

<style scoped lang='less'>
</style>
