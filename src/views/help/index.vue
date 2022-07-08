<template>
    <NavBar>
        <template #title>{{$t('help.title')}}</template>
    </NavBar>
    <van-cell
      v-for="(item, index) in helpData.list"
      :key="index"
      is-link
      :title="item.title"/>
</template>

<script setup>
import NavBar from '@/components/NavBar'
import { helpData } from './data'

</script>

<style scoped lang='less'>

</style>
