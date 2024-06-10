import { createPinia } from 'pinia';

export default defineNuxtPlugin((context) => {
    const pinia = createPinia();
    context.vueApp.use(pinia); // Use context.app to access the Vue app instance
});