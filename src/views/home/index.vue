<template>
  <Home v-if="active==='home'" />
  <Hall v-if="active==='hall'" />
  <Level v-if="active==='level'" />
  <Task v-if="active==='task'" />
  <My v-if="active==='my'" />
  <van-tabbar
    safe-area-inset-bottom
    v-model="active">
    <van-tabbar-item name="home" icon="home-o">{{$t('tabbar.home')}}</van-tabbar-item>
    <van-tabbar-item name="hall" icon="apps-o">{{$t('tabbar.hall')}}</van-tabbar-item>
    <van-tabbar-item name="level" icon="diamond-o">{{$t('tabbar.level')}}</van-tabbar-item>
    <van-tabbar-item name="task" icon="orders-o">{{$t('tabbar.task')}}</van-tabbar-item>
    <van-tabbar-item name="my" icon="manager-o">{{$t('tabbar.my')}}</van-tabbar-item>
  </van-tabbar>
</template>

<script setup>
import { ref } from 'vue'
import Home from './Home'
import Hall from './Hall'
import Level from './Level'
import Task from './Task'
import My from './My'

const active = ref('home')

</script>
