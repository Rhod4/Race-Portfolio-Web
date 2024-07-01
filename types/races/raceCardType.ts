import type {Game, Track} from "~/types/races/raceType";

export type RaceCard = {
    id: string
    name: string
    raceDate: string
    tracks: Track
    game: Game
    createdBy: {} | null
    createdOn: string
    isDeleted: boolean
    deletedBy: {} | null
    deletedOn: string | null
    raceMarshel: number
    raceParticipants: number
    raceSeries: number
    updatedBy: string | null
    updatedOn: string | null

}