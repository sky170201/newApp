import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import i18n from './language/i18n'
import './style/index.less'

/* 引入插件 */
import getVant from './plugins'
const app = createApp(App)
getVant(app)

app.use(i18n)
app.use(router)
app.use(createPinia())
app.mount('#app')
