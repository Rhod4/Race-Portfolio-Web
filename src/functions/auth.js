import instance from "axios";
import axios from "axios";
import {useAuthStore} from "@/stores/authStore.js";

export default class auth {

   static postLogin = async (login) => {
      await instance.post("http://localhost:8080/login", login, {params: {useCookies: true}, withCredentials: true}
      ).then((response) =>{
            this.getUserDetails();
            console.log(response);
         }
      ).catch((error) => console.log(error))
   }

   static postLogout = async () => {
      const authStore = useAuthStore();
      await instance.post("api/auth/logout", {},{withCredentials:true})
         .then((response) => {
            authStore.$reset()
            console.log(response)
         }
         ).catch((error) => console.log(error))

   }

   static postRegister = async (user) => {
      const data ={
         email : user.email,
         password : user.password,
      }
      await instance.post("http://localhost:8080/register", data, {params: {useCookies: true}, withCredentials: true}
      ).then((response) =>{
         console.log(response)
         }
      ).catch((error) => console.log(error))
   }

   static getUserDetails = async () => {
      const authStore = useAuthStore();

      await instance.get("http://localhost:8080/api/Profile/Profile",  { withCredentials: true}
         ).then(async (response) =>{
            await authStore.setUser(response.data.profile)
         }
         ).catch((error) => console.log(error))
   }
}