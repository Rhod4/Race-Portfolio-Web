import { defineStore } from 'pinia'

export const useAuthStore  =  defineStore("userAuth", {
   state: () => (
      {
         user: {
            id: undefined,
            firstname: undefined,
            lastname: undefined,
         }
   }),
   actions: {
      async setUser(setUser){
         this.user.id = setUser.id
         this.user.firstname = setUser.firstname
         this.user.lastname = setUser.lastname
      }
   }
})