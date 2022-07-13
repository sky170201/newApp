<template>
    <NavBar>
        <template #title>{{$t('help.title')}}</template>
    </NavBar>
    <van-cell
      v-for="(item, index) in helpData"
      :key="index"
      is-link
      :to="`/article?id=${item.id}`"
      :title="item.title"/>
</template>

<script setup>
import { getHelpDocList } from '@/api/home'
import NavBar from '@/components/NavBar'
import { onMounted, ref } from 'vue'
// import { helpData } from './data'

const helpData = ref([])
onMounted(async () => {
  const { result } = await getHelpDocList()
  helpData.value = result.list
})

</script>

<style scoped lang='less'>

</style>
