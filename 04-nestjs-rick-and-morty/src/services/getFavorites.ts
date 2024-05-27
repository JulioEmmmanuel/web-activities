import { getUserFavoritesIds } from '@/data/favorites'
import { getCharactersByIds } from './getCharactersByIds'

export const getFavorites = async (userId: number) => {
  const favoritesIds = await getUserFavoritesIds({ userId })
  const favoriteCharacters = await getCharactersByIds(favoritesIds)
  return favoriteCharacters
}
