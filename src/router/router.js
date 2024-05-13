import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import {createRouter, createWebHistory} from "vue-router";
import Races from "@/views/Races.vue";
import TrackList from "@/views/tracks/TrackList.vue";

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
   {
      path: "/Tracks",
      component: TrackList
   },
]

const router = createRouter({
   history: createWebHistory(),
   routes,
})


export default router