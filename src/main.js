import './assets/main.css'

import {createApp} from "vue";
import App from "@/App.vue";
import router from "@/router/router.js";
import axios from "axios";

const app = createApp(App)

axios.defaults.baseURL = 'http://localhost:8080/api/';

const instance = axios.create({
   baseURL: 'http://localhost:8081/api/',
   timeout: 1000,
});

app.use(router, instance)
app.mount('#app')

