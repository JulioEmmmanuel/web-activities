import { Place } from "@/types/Place";

export interface Character {
    id: number,
    name: string,
    status: string,
    species: string,
    type: string,
    gender: string,
    origin: Place,
    location: Place,
    image: string,
    episode : string[],
    url: string,
    created: string
}