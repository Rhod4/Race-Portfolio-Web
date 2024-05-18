import Home from "@/views/Home.vue";
import Account from "@/views/Login.vue";
import {createRouter, createWebHistory} from "vue-router";
import Races from "@/views/Races.vue";
import TrackList from "@/views/tracks/TrackList.vue";

const routes = [{
   path: '/',
   component: Home
   },
   {
      path: "/Account",
      component: Account,
      props: true
   },
   {
      path: "/Account/:accountType",
      component: Account,
      props: true
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