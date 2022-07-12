<template>
  <NavBar>
    <template #title>{{ $t('notice.title') }}</template>
    <template #right>
      <span class="mainColor">{{ $t('notice.btnText') }}</span>
    </template>
  </NavBar>
  <van-cell v-for="(item, index) in noticeData" :key="index" :title="item.msg" :value="item.time" />
</template>

<script setup>
import { onMounted, ref } from 'vue';
import NavBar from '@/components/NavBar'
// import { noticeData } from './data'
import { getMsgList } from '@/api/home';

const noticeData = ref([])
onMounted(async () => {
  const { result } = await getMsgList()
  noticeData.value = result.list
})

</script>

<style scoped lang='less'>
</style>
