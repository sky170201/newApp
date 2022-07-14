// 进行中
import progressEnImg from "@/assets/img/state1-en-US.png";
import progressZhImg from "@/assets/img/state1-zh-CN.png";
// 审核中
import reviewEnImg from "@/assets/img/state2-en-US.png";
import reviewZhImg from "@/assets/img/state2-zh-CN.png";
// 已完成
import completedEnImg from "@/assets/img/state3-en-US.png";
import completedZhImg from "@/assets/img/state3-zh-CN.png";
// 已失败
import failedEnImg from "@/assets/img/state4-en-US.png";
import failedZhImg from "@/assets/img/state4-zh-CN.png";

export const stateImgMap = {
  progress: {
    zh: progressZhImg,
    en: progressEnImg,
  },
  review: {
    zh: reviewZhImg,
    en: reviewEnImg,
  },
  completed: {
    zh: completedZhImg,
    en: completedEnImg,
  },
  failed: {
    zh: failedZhImg,
    en: failedEnImg,
  },
};
