<template>
  <NavBar>
    <template #title>{{$t('register.title')}}</template>
    <template #right>
      <SelectLanguage/>
    </template>
  </NavBar>
  <div class="registerBox">
    <div class="title">
      <p class="top-h1">{{$t('register.welcome')}}</p>
    </div>
    <van-form @submit="onSubmit">
      <van-row>
        <van-col span="9">
          <van-field
            class="area-code"
            v-model="areaCode"
            left-icon="manager"
            label="+"
            type="text"
            :placeholder="$t('login.areaCode')"
          />
        </van-col>
        <van-col span="15">
          <van-field
            clearable
            v-model="phone"
            :placeholder="$t('register.phone')"
          />
        </van-col>
      </van-row>
      <van-row
        align="center"
        justify="space-around">
        <van-col span="18">
          <van-field
            class="code"
            clearable
            v-model="areaCode"
            left-icon="phone"
            type="text"
            :placeholder="$t('register.code')"
          />
        </van-col>
        <van-col span="6">
          <van-button size="mini" type="primary">{{$t('register.btnCode')}}</van-button>
        </van-col>
      </van-row>
      <van-field
        v-model="password"
        clearable
        :type="isPassword ? 'password':'text'"
        left-icon="lock"
        :right-icon="isPassword ? 'closed-eye':'eye-o'"
        @click-right-icon="clickRightIcon"
        :placeholder="$t('register.password1')"
      />
      <van-field
        v-model="password"
        clearable
        :type="isPassword ? 'password':'text'"
        left-icon="lock"
        :right-icon="isPassword ? 'closed-eye':'eye-o'"
        @click-right-icon="clickRightIcon"
        :placeholder="$t('register.password2')"
      />
      <van-field
        v-model="password"
        clearable
        left-icon="lock"
        :placeholder="$t('register.inventCode')"
      />
      <div style="margin: 16px;">
        <van-button block type="primary" native-type="submit">
          {{$t('register.submit')}}
        </van-button>
      </div>
    </van-form>
  </div>
</template>
<!-- 登录路由组件 -->
<script setup>
/* 在setup中使用访问路由 */
import { useRouter } from 'vue-router'
import { ref } from 'vue'
// import { useI18n } from 'vue-i18n'

import NavBar from '@/components/NavBar'
import SelectLanguage from '@/views/common/SelectLanguage'

import { FooterMusicStore } from '@/store/FooterMusic.js'
import { getLoginUser } from '@/api/homeApi.js'
const store = FooterMusicStore()
const router = useRouter()

const areaCode = ref('')
const phone = ref('')
const password = ref('')

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
      background-color: #0071e3;
      border: 1px solid #0071e3;
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
</style>
