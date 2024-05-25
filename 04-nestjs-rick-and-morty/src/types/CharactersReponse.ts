import { Character } from './Character'

interface ResponseInfo {
  count: number
  pages: number
  next: string | null
  prev: string | null
}

export interface CharactersResponse {
  info: ResponseInfo
  results: Character[]
}
