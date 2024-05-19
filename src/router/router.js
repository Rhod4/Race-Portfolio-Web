import Home from "@/views/Home.vue";
import Account from "@/views/Login.vue";
import {createRouter, createWebHistory} from "vue-router";
import Races from "@/views/Races.vue";
import TrackList from "@/views/tracks/TrackList.vue";
import Profile from "@/views/Profile.vue";
import RaceDetails from "@/views/RaceDetails.vue";

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
   {
      path: "/Profile",
      component: Profile
   },
   {
      path: "/RaceDetails/:id",
      component: RaceDetails
   }
]

const router = createRouter({
   history: createWebHistory(),
   routes,
})


export default router