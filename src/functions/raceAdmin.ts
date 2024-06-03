import axios from "axios";
import {CreateRaceRequest} from "../types/races/createRace";

export const raceAdminValidation = () => {

    const getAdminRacesForUser = async (): Promise<any> => {
        return axios.get("/api/AdminRace/GetAdminRacesForLoggedInUser", {withCredentials: true})
            .then(response => response.data)
    }

    const createOrEditRace = async (createRaceRequest: CreateRaceRequest): Promise<any> => {
        console.log(createRaceRequest);
        return axios.post("/api/AdminRace/CreateRace", createRaceRequest, {withCredentials: true})
            .then(response => {
                console.log(response);
            })
    }

    const removeRace = async (raceId: string): Promise<any> => {
        console.log(raceId);
        return axios.delete(`/api/AdminRace/RemoveRace/${raceId}`, {withCredentials: true})
            .then(response => {
                console.log(response);
            })
    }

    const getSeriesForGame = async (gameId: string): Promise<any> => {
        return await axios.get(`/api/Series/GetSeriesByGame/${gameId}`)
            .then(response =>
                response.data
            )
    }

    const getTracksForGame = async (gameId: string): Promise<any> => {
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