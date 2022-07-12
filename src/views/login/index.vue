<template>
  <NavBar>
    <template #title>{{ $t('login.title') }}</template>
    <template #right>
      <SelectLanguage />
    </template>
  </NavBar>
  <div class="loginBox">
    <div class="title">
      <img src="~@/assets/img/app.png">
      <p style="margin-top: 10px;" class="top-h1">AP New Media</p>
    </div>
    <van-form @submit="onSubmit">
      <van-row>
        <van-col span="9">
          <van-field @click-input="clickInput" class="area-code" v-model="areaCode" left-icon="manager" label="+"
            type="text" :placeholder="$t('login.areaCode')" />
        </van-col>
        <van-col span="15">
          <van-field v-model="phone" :placeholder="$t('login.phone')" />
        </van-col>
      </van-row>
      <van-field v-model="password" clearable :type="isPassword ? 'password' : 'text'" left-icon="lock"
        :right-icon="isPassword ? 'closed-eye' : 'eye-o'" @click-right-icon="clickRightIcon"
        :placeholder="$t('login.password')" />
      <div style="margin: 16px;">
        <van-button block type="primary" native-type="submit">
          {{ $t('login.submit') }}
        </van-button>
      </div>
    </van-form>
    <div class="tip">
      <span>{{ $t('login.noAccount') }}?</span>
      <span @click="register" class="register">{{ $t('login.register') }}</span>
    </div>
  </div>
  <Online />
  <!-- <van-popup v-model:show="show" position="bottom" :style="{ height: '30%' }" /> -->
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
<!-- 登录路由组件 -->
<script setup>
/* 在setup中使用访问路由 */
import { useRouter } from 'vue-router'
import { ref } from 'vue'
// import { useI18n } from 'vue-i18n'
import { areasCode } from './data'

import NavBar from '@/components/NavBar'
import SelectLanguage from '@/views/common/SelectLanguage'
import Online from '@/views/common/Online'

import { mainStore } from '@/store/mainStore.js'
import { getLoginUser } from '@/api/homeApi.js'

const columns = areasCode
const store = mainStore()
const router = useRouter()

const areaCode = ref('')
const phone = ref('')
const password = ref('')
const isPassword = ref(false)
const showPicker = ref(false)

const customFieldName = {
  text: 'code',
  children: 'cities'
}

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

const register = () => {
  router.push('/register')
}

const onSubmit = async () => {
  router.push('/')
  return
  const res = await store.getLogin({ phone: phone.value, password: password.value })
  console.log(res)
  if (res.data.code === 200) {
    // 将用户登录状态传过去
    store.udpateIsLogin(true)
    // 将用户id传到发起获取用户详情的接口
    const result = await getLoginUser(res.data.account.id)
    console.log('获取用户详情返回的数据:', result)
    // 将后端返回来的token传去pinia和本地存储
    store.updateToken(res.data.token)
    // 将用户详情数据存储到pinia和本地存储
    store.updateUser(result)
    // 如果返回的code为200，说明登录成功，跳转个人中心页面
    router.push('/infoUser')
  } else {
    alert('手机号码或密码错误！')
  }
}
</script>
<style lang='less' scoped>
.loginBox {
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

    img {
      border-radius: 50%;
      width: 100px;
      height: 100px;
    }
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

  .tip {
    width: 100%;
    text-align: left;
    font-size: 28px;
    padding-left: 30px;

    .register {
      color: @mainColor;
      margin-left: 20px;
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
