export type raceResponse = {
    id: string
    name: string
    raceDate: Date
    createdOn: Date
    createdBy: {}
    updatedOn: Date | null
    trackName: string
    game: []
    raceSeries: []
    raceParticipants: number
    raceMarshel: number
}