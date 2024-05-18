import instance from "axios";
import {useAuthStore} from "@/stores/authStore.js";
import {useRouter} from "vue-router";
import Swal from "sweetalert2";

export const authValidation = () => {
   const router = useRouter();

   const postLogin = async (login) => {

      await instance.post("http://localhost:8080/login", login, {params: {useCookies: true}, withCredentials: true}
      ).then(() =>{
            getUserDetails();
            Swal.mixin({
               position: "top-end",
               title: "Successfully Logged In",
               showConfirmButton: false,
               timer: 1500
            })
            router.push('/')
         }
      ).catch((error) => console.log(error))
   }

   const postLogout = async () => {
      const authStore = useAuthStore();
      await instance.post("api/auth/logout", {},{withCredentials:true})
         .then(() => {
            authStore.$reset()
            router.push('/')
            Swal.mixin({
               position: "top-end",
               title: "Successfully Logged Out",
               showConfirmButton: false,
               timer: 1500
            })
         }
         ).catch((error) => console.log(error))

   }

   const postRegister = async (user) => {
      const data ={
         email : user.email,
         password : user.password,
      }
      await instance.post("http://localhost:8080/register", data, {params: {useCookies: true}, withCredentials: true}
      ).then(() =>{
         Swal.mixin({
            position: "top-end",
            title: "Successfully Registered",
            showConfirmButton: false,
            timer: 1500,
         })
         router.push('/')
         }
      ).catch((error) => {
         console.log(error)
         Swal.fire({
            icon: "error",
            title: "Error Submitting",
         })
      })
   }

   const getUserDetails = async () => {
      const authStore = useAuthStore();

      await instance.get("http://localhost:8080/api/Profile/Profile",  { withCredentials: true}
         ).then(async (response) =>{
            await authStore.setUser(response.data.profile)
         }
         ).catch((error) => console.log(error))
   }

   return {postLogin, postLogout, postRegister, getUserDetails}
}