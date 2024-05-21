import axios from "axios";


export const raceValidations = () => {

   const getRaces = async () => {
      return await axios.get("api/Race/Races/", { withCredentials: true})
         .then(response => {
            console.log(response.data.success)
            return response.data.success;
         })
         .catch(error => {
            console.error("There was a problem with the Axios request:", error);
         });
   }
   const getDashboardRaces = async () => {
      return await axios.get("api/Race/Races/" + 2, { withCredentials: true})
         .then(response => {
            console.log(response.data.success)
            return response.data.success;
         })
         .catch(error => {
            console.error("There was a problem with the Axios request:", error);
         });
   }

   const getRace = async (id) => {
      return await axios.get("api/Race/Race/"+id, { withCredentials: true})
         .then(response => {
            console.log(response.data.race)
            return response.data.race;
         })
         .catch(error => {
            console.error("There was a problem with the Axios request:", error);
         });
   }

   const addToRace = async (raceId, raceNumber, carId) => {
      return await axios.post("api/Race/ParticipateInRace", null , {
         withCredentials: true,
         params: {
            raceId ,
            raceNumber,
            carId
         }
      })
         .then(response => {
            console.log(response.data.race)
            return response.data.race;
         })
         .catch(error => {
            console.error("There was a problem with the Axios request:", error);
         });
   }
   const removedFromRace = async (raceId) => {
      return await axios.post(`api/Race/RemoveParticipateInRace/${raceId}`, null , {
         withCredentials: true,
      })
         .then(response => {
            console.log(response)
            return response.data;
         })
         .catch(error => {
            console.error("There was a problem with the Axios request:", error);
         });
   }

   const checkIfRacing = async (raceId) => {
      return await axios.post(`api/Race/AlreadyRacing/${raceId}`, null, {
         withCredentials: true,
      })
         .then(response => {
            return response.data.isParticipating;
         })
         .catch(error => {
            console.error("There was a problem with the Axios request:", error);
            return false
         });
   }

   const getParticipants = async (raceId) => {
      return await axios.get(`api/Race/GetParticipants/${raceId}`, null, {
         withCredentials: true,
      })
         .then(response => {
            console.log(response.data)
            return response.data.participants
         })
         .catch(error => {
            console.error("There was a problem with the Axios request:", error);
            return false
         });
   }

   return {getRaces, getRace, getDashboardRaces, addToRace, removedFromRace, checkIfRacing, getParticipants}
}