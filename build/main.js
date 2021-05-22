import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import req from './utils/req.js'
import config from './utils/config.js'

const app = createApp(App)
app.config.globalProperties.$ORIGIN = config
app.use(router).use(req).mount('#app')
