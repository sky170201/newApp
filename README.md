## 安装依赖
npm i

## 启动项目
npm run serve

## 技术栈
vue3 + vue-i18n + vant3 + pinia + vue-router4 + axios

## 国际化 vue-i18n
支持中文、英文...切换

## 定义全局样式变量
```
css: {
  sourceMap: true,
  loaderOptions: {
    less: {
      lessOptions: {
        globalVars: {
          mainColor: '#0071e3'
        }
      }
    }
  }
}
```

## vant 国际化+组件按需引入+定制化主题
1. vant 国际化参考链接：https://youzan.github.io/vant/v2/#/zh-CN/locale

2. vant2 定义主题参考链接：https://youzan.github.io/vant/v2/#/zh-CN/theme
> 配置方式参考文档

3. vant3 定义主题参考链接：https://youzan.github.io/vant/#/zh-CN/config-provider#shi-li
- 支持通过 CSS 覆盖
你可以直接在代码中覆盖这些 CSS 变量，Button 组件的样式会随之发生改变：
```
/* 添加这段样式后，Primary Button 会变成红色 */
:root {
  --van-blue: red !important; // 需要加上!important覆盖，才能生效
}
```

- 通过 ConfigProvider 覆盖
> 注意：ConfigProvider 仅影响它的子组件的样式，不影响全局 root 节点。
```
import { createApp } from 'vue';
import { ConfigProvider } from 'vant';

const app = createApp();
app.use(ConfigProvider);

index.vue
<van-config-provider :theme-vars="themeVars">
  <van-form>
    <van-field name="rate" label="评分">
      <template #input>
        <van-rate v-model="rate" />
      </template>
    </van-field>
    <van-field name="slider" label="滑块">
      <template #input>
        <van-slider v-model="slider" />
      </template>
    </van-field>
    <div style="margin: 16px">
      <van-button round block type="primary" native-type="submit">
        提交
      </van-button>
    </div>
  </van-form>
</van-config-provider>

import { ref } from 'vue';

const rate = ref(4);
const slider = ref(50);

// themeVars 内的值会被转换成对应 CSS 变量
// 比如 sliderBarHeight 会转换成 `--van-slider-bar-height`
const themeVars = {
  rateIconFullColor: '#07c160',
  sliderBarHeight: '4px',
  sliderButtonWidth: '20px',
  sliderButtonHeight: '20px',
  sliderActiveBackgroundColor: '#07c160',
  buttonPrimaryBorderColor: '#07c160',
  buttonPrimaryBackgroundColor: '#07c160',
};
```