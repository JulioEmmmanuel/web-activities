import { endpoints } from '@/const/endpoints'
import { Character } from '@/types/Character'
import axios from 'axios'

export async function getCharactersByIds(ids: number[]): Promise<Character[]> {
  if (ids.length === 0) {
    return []
  }
  const response = await axios.get<Character | Character[]>(
    `${endpoints.baseUrl}${endpoints.getCharacters}/${ids.join(',')}`,
  )
  if (Array.isArray(response.data)) {
    return response.data
  } else {
    return [response.data]
  }
}
