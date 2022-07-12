<template>
  <NavBar>
    <template #title>{{ $t('chat.title') }}</template>
  </NavBar>
  <van-cell v-for="(item, index) in chatList.filter(o => o.name)" :key="index" :title="item.name" is-link
    :url="item.url" />
  <!-- <van-cell title="路由跳转" is-link to="index" /> -->
</template>

<script setup>
import { ref, onMounted } from 'vue'
import NavBar from '@/components/NavBar'
// import { chatList } from './data'
import { getKfList } from '@/api/getStaticDataApi';

const chatList = ref([])
onMounted(async () => {
  const res = await getKfList()
  chatList.value = res.result
})

</script>

<style scoped lang='less'>
</style>
