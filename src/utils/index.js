import { Toast } from "vant";
import i18n from "@/language/i18n";

export function copy(str, text) {
  const input = document.createElement("input");
  //   input.readOnly = "readonly";
  input.value = str;
  document.body.appendChild(input);
  input.focus(); // 需要先获取焦点才能复制
  // 选择需要复制的文本
  if (input.setSelectionRange) {
    input.setSelectionRange(0, input.value.length);
  } else {
    input.select();
  }
  try {
    document.execCommand("copy");
    Toast(text || i18n.global.t("share.copyText"));
  } catch (e) {
    console.error("复制失败，请重试~");
  }
  //   避免弹起键盘
  input.blur();
  document.activeElement.blur();
  document.body.removeChild(input);
}

export function deepClone(source) {
  if (!source && typeof source !== "object") {
    throw new Error("error arguments", "deepClone");
  }
  const targetObj = source.constructor === Array ? [] : {};
  Object.keys(source).forEach((keys) => {
    if (source[keys] && typeof source[keys] === "object") {
      targetObj[keys] = deepClone(source[keys]);
    } else {
      targetObj[keys] = source[keys];
    }
  });
  return targetObj;
}
