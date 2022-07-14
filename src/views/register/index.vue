<template>
  <NavBar>
    <template #title>{{ $t('register.title') }}</template>
    <template #right>
      <SelectLanguage />
    </template>
  </NavBar>
  <div class="registerBox">
    <div class="title">
      <p class="top-h1">{{ $t('register.welcome') }}</p>
    </div>
    <van-form @submit="onSubmit">
      <van-row>
        <van-col span="9">
          <van-field @click-input="clickInput" class="area-code" v-model="areaCode" left-icon="manager" label="+"
            type="text" :placeholder="$t('login.areaCode')" />
        </van-col>
        <van-col span="15">
          <van-field clearable v-model="phone" :placeholder="$t('register.phone')" />
        </van-col>
      </van-row>
      <van-row align="center" justify="space-around">
        <van-col span="18">
          <van-field class="code" clearable v-model="verifyCode" left-icon="phone" type="text"
            :placeholder="$t('register.code')" />
        </van-col>
        <van-col span="6">
          <van-button size="mini" type="primary">{{ $t('register.btnCode') }}</van-button>
        </van-col>
      </van-row>
      <van-field v-model="password" clearable :type="isPassword ? 'password' : 'text'" left-icon="lock"
        :right-icon="isPassword ? 'closed-eye' : 'eye-o'" @click-right-icon="clickRightIcon"
        :placeholder="$t('register.password1')" />
      <van-field v-model="confirmPassword" clearable :type="isPassword ? 'password' : 'text'" left-icon="lock"
        :right-icon="isPassword ? 'closed-eye' : 'eye-o'" @click-right-icon="clickRightIcon"
        :placeholder="$t('register.password2')" />
      <van-field v-model="inventCode" clearable left-icon="lock" :placeholder="$t('register.inventCode')" />
      <div style="margin: 16px;">
        <van-button :loading="isLoading" block type="primary" native-type="submit">
          {{ $t('register.submit') }}
        </van-button>
      </div>
    </van-form>
  </div>
  <Online />
  <van-popup v-model:show="showPicker" round position="bottom">
    <van-picker :columns="columns" :columns-field-names="customFieldName" @cancel="showPicker = false"
      @confirm="onConfirm">
      <!-- 自定义内容选项，作用域插槽 -->
      <template #option="option">
        <div class="custom-option">
          {{ option.name }} ——— {{ option.code }}
        </div>
      </template>
    </van-picker>
  </van-popup>
</template>
<script setup>
import router from '@/router'
import { ref, onMounted } from 'vue'
import { Toast } from 'vant'

import NavBar from '@/components/NavBar'
import SelectLanguage from '@/views/common/SelectLanguage'
import Online from '@/views/common/Online'

import { mainStore } from '@/store/mainStore.js'
import i18n from '@/language/i18n'
import { getAreasCode } from '@/api/getStaticDataApi';
import { register } from '@/api/login';
const store = mainStore()

const isLoading = ref(false)
const areaCode = ref('')
const phone = ref('')
const verifyCode = ref('')
const password = ref('')
const confirmPassword = ref('')
const inventCode = ref('')
const isPassword = ref(false)
const showPicker = ref(false)

const columns = ref([])
const customFieldName = {
  text: 'code',
}
onMounted(async () => {
  const res = await getAreasCode()
  columns.value = res.result.list
})
const onConfirm = ({ code, name }) => {
  areaCode.value = code
  showPicker.value = false
}

const clickInput = (e) => {
  e.target.blur() // 阻止input获取焦点
  showPicker.value = true
}

const clickRightIcon = () => {
  isPassword.value = !isPassword.value
}

const onSubmit = async () => {
  isLoading.value = true
  if (areaCode.value === '') {
    Toast(i18n.global.t('login.areaCodeP'));
  } else if (phone.value === '') {
    Toast(i18n.global.t('register.phone'));
  } else if (verifyCode.value === '') {
    Toast(i18n.global.t('register.code'));
  } else if (password.value === '') {
    Toast(i18n.global.t('register.password1'));
  } else if (confirmPassword.value === '') {
    Toast(i18n.global.t('register.password2'));
  } else if (password.value !== confirmPassword.value) {
    Toast(i18n.global.t('register.validTwo'));
  } else if (inventCode.value === '') {
    Toast(i18n.global.t('register.inventCode'));
  } else {
    // await store.register({
    // password: 123
    // ltc: 1
    // phone: 123
    // code: 1935
    // })
  }
  isLoading.value = false
  // router.push('/')
}
</script>
<style lang='less' scoped>
.registerBox {
  height: 100vh;
  width: 100%;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
    padding: 100px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .van-button--primary {
    background-color: @mainColor;
    border: 1px solid @mainColor;
  }

  .van-form {
    width: 100%;

    .area-code {
      padding-right: 0;

      :deep(.van-field__label) {
        width: 0;
      }
    }
  }
}

.van-popup {
  .van-picker {
    background-color: #151d31;

    :deep(.van-picker__columns) {
      .van-picker-column__item {
        .custom-option {
          font-size: 32px;
        }
      }
    }
  }
}
</style>
