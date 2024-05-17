import { Place } from "@/types/Place";
import { Identifiable } from "./Identifiable";

export interface Character extends Identifiable {
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

export const TestCharacter: Character = {
    "id": 536,
    "name": "Josiah",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Male",
    "origin": {
        "name": "Earth (Replacement Dimension)",
        "url": "https://rickandmortyapi.com/api/location/20"
    },
    "location": {
        "name": "Earth",
        "url": "https://rickandmortyapi.com/api/location/20"
    },
    "image": "https://rickandmortyapi.com/api/character/avatar/536.jpeg",
    "episode": [
        "https://rickandmortyapi.com/api/episode/33",
        "https://rickandmortyapi.com/api/episode/34"
    ],
    "url": "https://rickandmortyapi.com/api/character/536",
    "created": "2020-05-02T13:54:48.651Z"
}

export const TestCharacter2: Character = {
    "id": 540,
    "name": "Mariah",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Female",
    "origin": {
        "name": "Earth (Replacement Dimension)",
        "url": "https://rickandmortyapi.com/api/location/20"
    },
    "location": {
        "name": "Earth",
        "url": "https://rickandmortyapi.com/api/location/20"
    },
    "image": "https://rickandmortyapi.com/api/character/avatar/536.jpeg",
    "episode": [
        "https://rickandmortyapi.com/api/episode/20",
        "https://rickandmortyapi.com/api/episode/50",
        "https://rickandmortyapi.com/api/episode/70",
        "https://rickandmortyapi.com/api/episode/90",
        "https://rickandmortyapi.com/api/episode/200",
    ],
    "url": "https://rickandmortyapi.com/api/character/540",
    "created": "2020-05-02T13:54:48.651Z"
}