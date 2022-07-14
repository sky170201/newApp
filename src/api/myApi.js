import request from "@/utils/request.js";

/* 获取我的钱包 */
export function getMyWallet () {
  return request({
    method: "get",
    url: "/api/wallet/index",
  });
}

/* 获取我的钱包记录 */
export function getMyWalletRecord () {
  // page=1
  return request({
    method: "get",
    url: "/api/wallet/record",
  });
}

/* 提现 */
export function ajaxWithdraw () {
  // money: 123;password: 123456;type: 2
  return request({
    method: "post",
    url: "/api/wallet/tixian",
  });
}

/* 更新头像 */
export function updateAvatar (data) {
  // image: http://mimgs.oss-cn-hongkong.aliyuncs.com/f/493133dae808d9f67309bde30a05a131.jpg
  return request({
    method: "post",
    url: "/api/user/avatar",
    data,
  });
}

/* 获取我的银行卡信息 */
export function getMyBank () {
  return request({
    method: "get",
    url: "/api/user/mybank",
  });
}

/* 设置usdt地址 */
export function setUsdtAddress () {
  // usdt: 123
  return request({
    method: "post",
    url: "/api/user/usdt",
  });
}

/* 查询usdt地址 */
export function setMyusdt () {
  return request({
    method: "get",
    url: "/api/user/myusdt",
  });
}

/* 查询钱包明细 */
export function getWalletDetail (params) {
  // page=1&type=3
  return request({
    method: "get",
    url: "/api/wallet/mingxi",
    params
  });
}

/* 日结报表 */
export function getDayReport () {
  return request({
    method: "get",
    url: "/api/report/day",
  });
}

/* 团队报表 */
export function getTeamReport () {
  // type=1&page=1
  return request({
    method: "get",
    url: "/api/report/team",
  });
}
