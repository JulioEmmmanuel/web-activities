'use server'

import { auth } from '@/auth'
import { createFavorite, deleteFavorite } from '@/data/favorites'

export const toggleFavorite = async (
  isFavorite: boolean,
  characterId: number,
) => {
  const session = await auth()
  const userId = Number(session?.user?.id)

  if (isFavorite) {
    await deleteFavorite({ userId, characterId: characterId })
  } else {
    await createFavorite({ userId, characterId: characterId })
  }
}
