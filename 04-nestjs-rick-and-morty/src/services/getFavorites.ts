import { getUserFavorites } from '@/data/favorites'
import { getCharactersByIds } from './getCharactersByIds'

export const getFavorites = async (userId: number) => {
  const favorites = await getUserFavorites({ userId })
  const favoriteCharacters = await getCharactersByIds(favorites)
  return favoriteCharacters
}
