import axios, {AxiosResponse} from "axios";
import {GameAdminResponse} from "../types/races/gamesAdminResponse";

export const gameValidation = () => {

    const getGames = async ():Promise<Array<GameAdminResponse>> => {
       return await axios.get("/api/Game/games", {withCredentials: true})
           .then((response : AxiosResponse<GameAdminResponse[]>) => {
               return response.data.map((game: GameAdminResponse) => {
                   return <GameAdminResponse>{
                       id: game.id,
                       name: game.name,
                   }
               })
           })
           .catch(reason => {
               console.log(reason)
               return <Array<GameAdminResponse>>{}
           });
    }

    return({getGames})
}