import './assets/main.css'

import {createApp} from "vue";
import App from "@/App.vue";
import router from "@/router/router.js";
import axios from "axios";
import {createPinia} from "pinia";

const app = createApp(App)

axios.defaults.baseURL ="http://localhost:8080/"
const pinia = createPinia()

const instance = axios.create({
   baseURL: 'http://localhost:8080/',
   timeout: 1000,
   params: {
       },
   withCredentials: true,
});

app.config.globalProperties.$axios = instance;

app.use(pinia)
app.use(router)
app.mount('#app')

