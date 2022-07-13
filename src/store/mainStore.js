import { defineStore } from "pinia";
import { login, getUserInfo } from "@/api/login.js";
import { Toast } from "vant";
import { setSessionStorage } from "@/utils/auth";
import router from "@/router";

export const mainStore = defineStore("main", {
  state: () => {
    return {
      token: "", // 接收后台返回的token字段
      user: {}, // 用户信息
      show: true, // 首页公告弹框
      telegram: "",
      app: "",
    };
  },

  getters: {},
  actions: {
    // 设置外链
    setLink({ app, telegram }) {
      this.app = app;
      this.telegram = telegram;
    },
    // 更新首页公告弹框状态
    updateShow(bool) {
      this.show = bool;
    },
    // 设置用户信息
    setUserInfo(user) {
      this.user = user;
    },
    // 登录请求
    async getLogin(data) {
      return new Promise(async (resolve) => {
        try {
          const res = await login(data);
          if (res.code === 500) {
            Toast(res.message);
          } else {
            const token = res.result.token;
            this.token = token;
            setSessionStorage("TOKEN", token);
            const user = await getUserInfo();
            this.setUserInfo(user.result);
            router.push("/");
          }
          resolve();
        } catch (error) {
          resolve();
        }
      });
    },
  },
});
