import type {CreateRaceRequest} from "~/types/races/createRace";
import type {Race, Track} from "~/types/races/raceType";
import type {Series} from "~/types/series/seriesType";
import axios from "axios";

export const raceAdminValidation = () => {

    const getAdminRacesForUser = async (): Promise<Race[]> => {
        return axios.get("/api/AdminRace/GetAdminRacesForLoggedInUser", {withCredentials: true})
            .then(response =>
                response.data
            )
    }

    const createOrEditRace = async (createRaceRequest: CreateRaceRequest): Promise<any> => {
        console.log(createRaceRequest);
        return axios.post("/api/AdminRace/CreateRace", createRaceRequest, {withCredentials: true})
            .then(response => {
                console.log(response);
            })
    }

    const removeRace = async (raceId: string): Promise<boolean> => {
        console.log(raceId);
        return axios.delete(`/api/AdminRace/RemoveRace/${raceId}`, {withCredentials: true})
            .then(() => true)
            .catch(() => false)
    }

    const getSeriesForGame = async (gameId: string): Promise<Series[]> => {
        return await axios.get(`/api/Series/GetSeriesByGame/${gameId}`)
            .then(response =>
            {
                console.log(response.data)
                return response.data
    })
    }

    const getTracksForGame = async (gameId: string): Promise<Track[]> => {
        return await axios.get(`/api/Track/AllTracksByGame/${gameId}`)
            .then(response =>
                response.data
            )
    }

    const getAdminRace = async (id: string) => {
        return await axios.get(`api/Race/Race/${id}`, { withCredentials: true})
            .then(response => {
                return response.data;
            })
            .catch(error => {
                console.error("There was a problem with the Axios request:", error);
            });
    }

    return ({getAdminRacesForUser, createOrEditRace, removeRace, getSeriesForGame, getTracksForGame, getAdminRace})
}