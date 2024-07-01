import type {Race} from "~/types/races/raceType";
import axios, {type AxiosResponse} from "axios";

export const gameValidation = () => {

    const getGames = async ():Promise<Array<Race>> => {
       return await axios.get("/api/Game/games", {withCredentials: true})
           .then((response : AxiosResponse<Race[]>) => {
               return response.data.map((game: Race) => {
                   return <Race>{
                       id: game.id,
                       name: game.name,
                   }
               })
           })
           .catch(reason => {
               console.log(reason)
               return <Array<Race>>{}
           });
    }

    return({getGames})
}