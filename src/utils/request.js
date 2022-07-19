import router from "@/router";
import axios from "axios";
import { Toast } from "vant";
import { getSessionStorage, removeSessionStorage } from "./auth";
const service = axios.create({
  // baseURL: 'http://localhost:3000',
  baseURL: "https://api.gsmedia.cc",
  // baseURL: "https://api.defi-usdt.world",
  timeout: 10000,
});

service.interceptors.request.use(
  (config) => {
    const hasToken = getSessionStorage("TOKEN");
    if (hasToken) {
      config.headers.authorization = `Bearer ${hasToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response) => {
    const message = response.data.message;
    const code = response.data.code;
    if (message === "Token Invalid") {
      removeSessionStorage("TOKEN");
      Toast(message);
      router.push("/login");
    } else if (code === 500) {
      Toast(message);
    }
    return response.data;
  },
  (error) => {
    console.log(error);
    console.log(error.message);
    Toast(error.message);
    return Promise.reject(error);
  }
);
export default service;
