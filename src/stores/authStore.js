import { defineStore } from 'pinia'
import router from "@/router/router.js";
import Swal from "sweetalert2";

export const useAuthStore  =  defineStore("userAuth", {
   state: () => (
      {
         user: {
            id: undefined,
            firstname: undefined,
            lastname: undefined,
            email: undefined
         }
   }),
   actions: {
      async setUser(setUser){
         this.user = setUser
      },
      async checkLogin() {
         if(this.user.id === undefined){
            await Swal.fire({
               icon: "error",
               title: "Please Login To View This Page",
               text: "User Not Logged In"
            })
            await router.push("/Account/login")
         }
      }
   }
})