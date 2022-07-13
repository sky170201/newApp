import request from "@/utils/request.js";

/* 获取首页内容 */
export function getHomeInfo() {
  return request({
    method: "get",
    url: "/api/index/index",
  });
}

/* 获取消息列表 */
export function getMsgList() {
  return request({
    method: "get",
    url: "/api/msg/index",
    params: {
      page: 1,
    },
  });
}

/* 获取帮助手册列表 */
export function getHelpDocList() {
  // page=1
  return request({
    method: "get",
    url: "/api/doc/index",
    params: {
      page: 1,
    },
  });
}

/* 获取帮助手册文章 */
export function getHelpArticle(params) {
  // id=8
  return request({
    method: "get",
    url: "/api/doc/info",
    params,
  });
}

/* 获取邀请码信息 */
export function getUserQrcode() {
  // id=8
  return request({
    method: "get",
    url: "/api/user/qrcode",
  });
}

/* 获取所有vip列表 */
export function getAllVipList() {
  return request({
    method: "get",
    url: "/api/vip/alllist",
  });
}

/* 获取所有vip列表 */
export function getTaskList(params) {
  // ?type=1&level=2&page=1
  return request({
    method: "get",
    url: "/api/task/index",
    params,
  });
}

/* 领取任务 */
export function getTaskDraw(data) {
  // id: 3214
  return request({
    method: "post",
    url: "/api/task/draw",
    data,
  });
}

/* 获取vip信息 */
export function getVipInfo() {
  return request({
    method: "get",
    url: "/api/vip/index",
  });
}

/* 获取vip支付信息 */
export function getVipPayInfo(params) {
  // level=5
  return request({
    method: "get",
    url: "/api/pay/index",
    params,
  });
}

/* 获取vip支付信息 */
export function payForUsdt(data) {
  // level=5&id=3
  return request({
    method: "post",
    url: "/api/pay/usdt",
    data,
  });
}

/* 获取vip usdt地址 */
export function getVipUsdtAddress() {
  return request({
    method: "get",
    url: "/api/vip/usdt",
  });
}

/* 查询任务记录列表 */
export function getTaskRecordList(params) {
  // status=0&page=1
  return request({
    method: "get",
    url: "/api/task/user",
    params,
  });
}

/* 上传图片 */
export function uploadFile(data) {
  return request({
    method: "post",
    url: "/api/file/index",
    data,
  });
}

/* 进行中提交 */
export function submitUploadFile(data) {
  // id: 3600448
  // txt:
  // image: http://mimgs.oss-cn-hongkong.aliyuncs.com/f/f6d06f11a146f25d6c6446d86c7de3a2.png
  return request({
    method: "post",
    url: "/api/task/submit",
    data,
  });
}

/* 放弃任务 */
export function cancelTask(data) {
  // id: 3600448
  return request({
    method: "post",
    url: "/api/task/cancel",
    data,
  });
}

/* 获取任务详情 */
export function getTaskDetail(params) {
  // id=3598853
  return request({
    method: "get",
    url: "/api/task/info",
    params,
  });
}
