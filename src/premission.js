import router from "./router";
import { getSessionStorage } from "@/utils/auth"; // get token from cookie

const whiteList = ["/login", "/register"]; // no redirect whitelist

router.beforeEach(async (to, from, next) => {
  const hasToken = getSessionStorage("TOKEN");
  if (hasToken) {
    if (to.path === "/login") {
      next({ path: "/" });
    } else {
      next();
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next();
    } else {
      next(`/login`);
    }
  }
});
