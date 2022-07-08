// import { getMusicLyric } from '@/api/itemApi'
import { getPhoneLogin } from '@/api/homeApi.js'
import { defineStore } from 'pinia'

export const mainStore = defineStore('main', {
  state: () => {
    return {
      token: '', // 接收后台返回的token字段
      user: {}, // 用户信息
      show: true // 首页公告弹框
    }
  },

  getters: {

  },
  actions: {
    // 更新首页公告弹框状态
    updateShow (bool) {
      this.show = bool
    },
    // 登录请求
    async getLogin (value) {
      const res = await getPhoneLogin(value)
      console.log('登录返回的数据：', res)
      return res
    },
    // 更新登录状态
    udpateIsLogin (value) {
      this.isLogin = value
    },
    // 更新token字段
    updateToken (value) {
      this.token = value
      localStorage.setItem('token', this.token)
    },
    // 更新用户信息
    updateUser (value) {
      this.user = value
      localStorage.setItem('mydata', JSON.stringify(this.user))
    }
  }

})
