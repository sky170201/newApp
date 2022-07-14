import request from "@/utils/request.js";

/* 登录 */
export function login(data) {
  // account: 123 password: 123456
  return request({
    method: "post",
    url: "/api/init/login",
    data,
  });
}

/* 注册 */
export function register(data) {
  return request({
    method: "post",
    url: "/api/init/reg",
    data,
  });
}

/* 获取用户信息 */
export function getUserInfo() {
  return request({
    method: "get",
    url: "/api/user/index",
  });
}
