import type {Car} from "~/types/cars/carType";

export type Race = {
    id: string
    name: string
    raceDate: string
    tracks: Track[]
    game: Game
    createdBy: {} | null
    createdOn: string
    isDeleted: boolean
    deletedBy: {} | null
    deletedOn: string | null
    raceMarshel: []
    raceParticipants: []
    raceSeries: []
    updatedBy: string | null
    updatedOn: string | null
}

export type Game = {
    id: string,
    name: string,
    tracks: Track[] | null,
    races: Race[] | null,
    cars: Car[] | null}


export type Track = {
    id: string,
    name: string,
    description: string,
    location: {} | null,
    game: Game | null
}


