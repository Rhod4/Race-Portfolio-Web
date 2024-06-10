import instance from "axios";
import {useAuthStore} from "../stores/authStore.js";
import Swal from "sweetalert2";

export const authValidation = () => {

   const postLogin = async (login) => {

      return await $fetch("http://localhost:8080/login",
         login,
         {
            method: "POST",
            params: {useCookies: true},
            withCredentials: true
         }
      ).then(() => {
            getUserDetails();
            Swal.mixin({
               position: "top-end",
               title: "Successfully Logged In",
               showConfirmButton: false,
               timer: 1500
            })
            // router.push('/')
         }
      ).catch((error) => error)
   }

   const postLogout = async () => {
      const authStore = useAuthStore();
      await instance.post("api/auth/logout", {}, {withCredentials: true})
         .then(() => {
               authStore.$reset()
               // router.push('/')
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
      const data = {
         email: user.email,
         password: user.password,
      }
      await instance.post("http://localhost:8080/register", data, {params: {useCookies: true}, withCredentials: true}
      ).then(() => {
            Swal.mixin({
               position: "top-end",
               title: "Successfully Registered",
               showConfirmButton: false,
               timer: 1500,
            })
            // router.push('/Account/RoleSelector')
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

      return await instance.get("http://localhost:8080/api/Profile/Profile", {withCredentials: true}
      ).then(async (response) => {
            await authStore.setUser(response.data)
            return response.data
         }
      ).catch((error) => console.log(error))

   }

   const postProfileData = async (userDetails) => {
      const authStore = useAuthStore();

      return await instance.post("http://localhost:8080/api/Profile/ProfileDetails", {...userDetails}, {withCredentials: true}
      ).then(async (response) => {
         await authStore.setUser(response.data)
         console.log(response)
      }).catch((error) => {
         console.log(error)
      })
   }

   const checkLogin = async () => {
      const authStore = useAuthStore();
      await getUserDetails()

      await authStore.checkLogin()
   }

   return {postLogin, postLogout, postRegister, getUserDetails, postProfileData, checkLogin}
}