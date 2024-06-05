import axios from "axios";
import app from "~/app.vue";

export default defineNuxtPlugin(nuxtApp => {
    const config = app.$config;

    //axios.defaults.baseURL = config.public.apiBaseUrl;

});