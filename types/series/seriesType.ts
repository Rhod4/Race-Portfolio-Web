import type {Car} from "~/types/cars/carType";

export type Series = {
    id: string,
    name: string,
    cars: Car[]
    raceSeries: []
}