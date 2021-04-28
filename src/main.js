import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import req from './utils/req.js'



createApp(App)
  .use(router)
  .use(req)
  .mount('#app')
