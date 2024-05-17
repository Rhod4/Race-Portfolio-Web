import instance from "axios";
import axios from "axios";
import router from "@/router/router.js";

export default class auth {

   static postLogout = async () => {
      await instance.post("api/auth/logout", {},{withCredentials:true})
         .then((response) =>
            console.log(response)
         ).catch((error) => console.log(error))

   }

   static profileTest = async () => {
      await axios.get("api/auth/Test",{withCredentials:true})
         .then((response)=> console.log(response))
         .catch((error) =>console.log(error))
   }
   static postLogin = async (login) => {
      await instance.post("http://localhost:8080/login", login, {params: {useCookies: true}, withCredentials: true}
         ).then((response) =>
            router.push("/")
         ).catch((error) => console.log(error))
   }
}