import {TracksAdminResponse} from "../tracks/tracksAdminResponse";

export type GameAdminResponse = {
    id: string
    name: string
    tracks: TracksAdminResponse[]
}
