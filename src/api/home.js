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
