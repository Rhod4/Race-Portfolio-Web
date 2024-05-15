import axios from "axios";

export default class auth {

   static postLogout = async () => {
      await axios.post("Auth/logout")
      .then((response) =>
         console.log(response)
      ).catch((error) => console.log(error))

   }

   static profileTest = async () => {
      await axios.get("Profile/test")
         .then((response)=> console.log(response))
         .catch((error) =>console.log(error))
   }
}