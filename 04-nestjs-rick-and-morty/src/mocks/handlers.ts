import { type HttpHandler } from "msw";
import { getAllCharacters, getCharacter } from "./characters";

//handlers only for happy path
export const handlers: HttpHandler[] = [getAllCharacters, getCharacter]