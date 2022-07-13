<template>
    <NavBar>
        <template #title>{{$t('article.title')}}</template>
    </NavBar>
    <div class="top-100">
      <div class="title">{{title}}</div>
      <div v-html="content" class="content">
      </div>
    </div>
</template>

<script setup>
import { getHelpArticle } from '@/api/home'
import NavBar from '@/components/NavBar'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const title = ref('')
const content = ref('')
onMounted(async () => {
  const { result } = await getHelpArticle({ id: route.query.id })
  title.value = result.title
  content.value = result.content
})

</script>

<style scoped lang='less'>
.title {
    padding: 30px;
    border-bottom: 1px solid #0e1526;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 36px;
    font-weight: 700;
}
.content {
  padding: 30px;
  text-align: justify;
  font-size: 28px;
  line-height: 44px;

  width: 100%;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(2,49%);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  color: #fff;
  :deep(p) {
    img {
      max-width: 100%;
    }
  }
}
</style>
