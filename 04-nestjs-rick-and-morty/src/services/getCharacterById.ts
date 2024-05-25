import { endpoints } from '@/const/endpoints'
import { Character } from '@/types/Character'
import axios from 'axios'

export async function getCharacterById(id: number): Promise<Character> {
  const response = await axios.get<Character>(
    `${endpoints.baseUrl}${endpoints.getCharacters}/${id}`,
  )
  return response.data
}
