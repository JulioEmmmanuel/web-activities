import { Character } from "@/types/Character";
import { CharactersResponse } from "@/types/CharactersReponse";
import axios from "axios";

export async function getCharacters(): Promise<Character[]>{
    const response = await axios.get<CharactersResponse>("https://rickandmortyapi.com/api/character")
    return response.data.results;
}