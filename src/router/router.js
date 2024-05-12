import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import {createRouter, createWebHistory} from "vue-router";
import Races from "@/views/Races.vue";

const routes = [{
   path: '/',
   component: Home
   },
   {
      path: "/Login",
      component: Login
   },
   {
      path: "/Races",
      component: Races
   },
]

const router = createRouter({
   history: createWebHistory(),
   routes,
})


export default router