import axios from "axios";
import {CreateRaceRequest} from "../types/races/createRace";

export const raceAdminValidation = () => {

   const getAdminRacesForUser = async () : Promise<any>  => {
      return axios.get("/api/AdminRace/GetAdminRacesForLoggedInUser", {withCredentials: true})
      .then(response => {
      })
   }

   const createRace = async (createRaceRequest: CreateRaceRequest) : Promise<any>  => {
       console.log(createRaceRequest);
      return axios.post("/api/AdminRace/CreateRace", createRaceRequest , {withCredentials: true})
          .then(response => {
             console.log(response);
          })
   }

   const getSeriesForGame = async (gameId: string) : Promise<any>  => {
      return await axios.get(`/api/Series/GetSeriesByGame/${gameId}`)
          .then(response =>
             response.data
          )
   }
   const getTracksForGame = async (gameId: string) : Promise<any>  => {
       return await axios.get(`/api/Track/AllTracksByGame/${gameId}`)
           .then(response =>
               response.data
           )
   }

   return({getAdminRacesForUser, createRace, getSeriesForGame, getTracksForGame})
}