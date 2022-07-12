import router from "@/router";
import axios from "axios";
import { Toast } from "vant";
import { getSessionStorage, removeSessionStorage } from "./auth";
const service = axios.create({
  // baseURL: 'http://localhost:3000',
  baseURL: "https://api.gsmedia.cc",
  timeout: 3000,
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
    if (message === "Token Invalid") {
      removeSessionStorage("TOKEN");
      Toast(message);
      router.push("/login");
    }
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default service;
