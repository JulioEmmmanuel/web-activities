import { Character } from '@/types/Character'
import { CharactersResponse } from '@/types/CharactersReponse'
import { endpoints } from '@/const/endpoints'

import axios from 'axios'

export async function getCharacters(): Promise<Character[]> {
  const response = await axios.get<CharactersResponse>(
    `${endpoints.baseUrl}${endpoints.getCharacters}`,
  )
  return response.data.results
}
