import { Locale } from "vant";
// 引入英文语言包
import zhCN from "vant/es/locale/lang/zh-CN";
import enUS from "vant/es/locale/lang/en-US";

export const changeVantLocaleLang = (lang) => {
  switch (lang) {
    case "zh":
      Locale.use("zh-CN", zhCN);
      break;
    case "en":
      Locale.use("en-US", enUS);
      break;
    default:
      break;
  }
};
