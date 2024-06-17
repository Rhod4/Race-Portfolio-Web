import axios from "axios";
import {useAuthStore} from "../stores/authStore.js";
import Swal from "sweetalert2";
import type {raceResponse} from "~/types/races/raceResponse";

export const userRaceRequests = () => {

   const authStore = useAuthStore()

   const getRaces = async (page: number): Promise<raceResponse[]> => {
      return await axios.get(`api/Race/Races/${page}`, { withCredentials: true})
         .then(response => {
            return response.data;
         })
         .catch(error => {
            console.error("There was a problem with the Axios request:", error);
         });
   }

   const getDashboardRaces = async () => {
      return await axios.get(`api/Race/Races/${2}`, { withCredentials: true})
         .then(response => {
            return response.data;
         })
         .catch(error => {
            console.error("There was a problem with the Axios request:", error);
         });
   }

   const getRace = async (id: string) => {
      return await axios.get(`api/Race/Race/${id}`, { withCredentials: true})
         .then(response => {
            return response.data;
         })
         .catch(error => {
            console.error("There was a problem with the Axios request:", error);
         });
   }

   const addToRace = async (raceId: string, raceNumber: number, carId: string) => {
      if(authStore.user.firstname === "" || authStore.user.lastname === ""){
         return await basicDetailsMissing()
      }
      return await axios.post("api/Race/ParticipateInRace", null , {
         withCredentials: true,
         params: {
            raceId ,
            raceNumber,
            carId
         }
      })
         .then(() => {
            return true;
         })
         .catch(error => {
            console.error("There was a problem with the Axios request:", error);
         });
   }
   const removedFromRace = async (raceId: string) => {
      return await axios.post(`api/Race/RemoveParticipateInRace/${raceId}`, null , {
         withCredentials: true,
      })
         .then(response => {
            return response.data;
         })
         .catch(error => {
            console.error("There was a problem with the Axios request:", error);
         });
   }

   const checkIfRacing = async (raceId: string) => {
      return await axios.post(`api/Race/AlreadyRacing/${raceId}`, null, {
         withCredentials: true,
      })
         .then(response => {
            return response.data;
         })
         .catch(error => {
            console.error("There was a problem with the Axios request:", error);
            return false
         });
   }

   const getParticipants = async (raceId: string) => {
      return await axios.get(`api/Race/GetParticipants/${raceId}`, {
         withCredentials: true,
      })
         .then(response => {
            return response.data
         })
         .catch(error => {
            console.error("There was a problem with the Axios request:", error);
            return false
         });
   }

   const basicDetailsMissing = async () => {
      Swal.fire({
         icon: "warning",
         text: "Please fill in your basic details before racing",
         showCancelButton: true,
         customClass: {popup: "dark:bg-base-100 dark:text-white", }
      }).then((response) => {
            if(response.isConfirmed){
               // router.push("/Profile")
            }
         }
      )
   }

   const getCarsForSeries = async (gameId: string) => {
      return await axios.get(`/api/Series/GetSeriesAndCarsByGame/${gameId}`, {
         withCredentials: true,
      })
         .then(response => {
            return response.data
         })
         .catch(e => {
            console.log(e)
         return []})
   }

   const getUserRaces = async () => {
      return await axios.get('/api/Race/GetRacesForLoggedInUser', {
         withCredentials: true,
      })
         .then(response => {
            return response.data
         })
         .catch(e => {
            console.log(e)
   })
   }

   return {getRaces, getRace, getDashboardRaces, addToRace,
      removedFromRace, checkIfRacing, getParticipants,
      getCarsForSeries, getUserRaces}
}