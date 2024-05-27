import { db } from '@/db'
import { FavoritesInsert, FavoritesSelect, favorites } from '@/db/schema'
import { and, eq } from 'drizzle-orm'

export const getUserFavoritesIds = async ({
  userId,
}: {
  userId: number
}): Promise<number[]> => {
  try {
    const favs = await db
      .select()
      .from(favorites)
      .where(eq(favorites.userId, userId))

    return favs.map((fav) => fav.characterId)
  } catch (error) {
    console.log(error)
    return []
  }
}

export const createFavorite = async ({
  userId,
  characterId,
}: FavoritesInsert): Promise<FavoritesSelect | null> => {
  try {
    if (!userId || !characterId) {
      console.log('Parámetros inválidos')
      return null
    }

    const res = await db
      .insert(favorites)
      .values({
        userId,
        characterId,
      })
      .returning()

    return res[0]
  } catch (error) {
    console.log(error)
    return null
  }
}

export const deleteFavorite = async ({
  userId,
  characterId,
}: FavoritesInsert): Promise<FavoritesSelect | null> => {
  try {
    if (!userId || !characterId) {
      console.log('Parámetros inválidos')
      return null
    }

    const res = await db
      .delete(favorites)
      .where(
        and(
          eq(favorites.userId, userId),
          eq(favorites.characterId, characterId),
        ),
      )
      .returning()

    return res[0]
  } catch (error) {
    console.log(error)
    return null
  }
}
