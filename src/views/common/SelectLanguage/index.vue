<template>
  <van-dropdown-menu>
    <van-dropdown-item @change="changeDropdown" @open="openDropdown" @close="closeDropdown" v-model="value1"
      :title="$t('selectLang')" :options="option1" />
  </van-dropdown-menu>
</template>

<script setup>
import { changeVantLocaleLang } from '@/language/vantLocal';
import { ref, getCurrentInstance } from 'vue'
const { proxy } = getCurrentInstance()

const value1 = ref(proxy.$i18n.locale || 'zh')
const option1 = [
  { text: '中文', value: 'zh' },
  { text: 'English', value: 'en' }
]

const changeDropdown = (lang) => {
  proxy.$i18n.locale = lang
  changeVantLocaleLang(lang)
}
const emit = defineEmits(['toggleDropdown'])

const openDropdown = (a) => {
  emit('toggleDropdown', 'open')
}
const closeDropdown = (a) => {
  emit('toggleDropdown', 'close')
}

</script>

<style scoped lang='less'>
.van-dropdown-menu {
  display: flex;
  height: 100%;

  :deep(.van-dropdown-menu__bar) {
    .van-ellipsis {
      font-size: 26px !important;
    }
  }

  :deep(.van-dropdown-item) {

    .van-popup {
      .van-cell {
        padding-left: 100px;
        position: relative;

        &::before {
          content: '';
          display: block;
          position: absolute;
          width: 64px;
          height: 40px;
          left: 20px;
          top: 50%;
          transform: translateY(-50%);
        }
      }

      .van-cell:nth-child(1)::before {
        background-image: url(~@/assets/img/zh.png);
        background-size: 100% 100%;
      }

      .van-cell:nth-child(2)::before {
        background-image: url(~@/assets/img/en.png);
        background-size: 100% 100%;
      }
    }
  }
}
</style>
