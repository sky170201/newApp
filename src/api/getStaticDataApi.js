import request from "@/utils/request.js";

/* 获取区号列表 */
export function getAreasCode() {
  return request({
    method: "GET",
    url: "/api/init/areas",
    params: {
      type: 1,
    },
  });
}

/* 获取客服列表 */
export function getKfList() {
  return request({
    method: "GET",
    url: "/api/index/kf",
  });
}
