import { Character } from "./Character";

interface ResponseInfo {
    count: number,
    pages: number,
    next: string,
    prev: null
}

export interface CharactersResponse {
    info: ResponseInfo,
    results: Character[]
}