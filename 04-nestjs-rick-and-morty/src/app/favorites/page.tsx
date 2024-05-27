import { auth } from '@/auth'
import CharacterCard from '@/components/ui/molecules/CharacterCard'
import { CharacterList } from '@/components/ui/organisms/CharacterList'
import { PageTemplate } from '@/components/ui/organisms/PageTemplate'
import { getFavorites } from '@/services/getFavorites'

export default async function Favorites() {
  const session = await auth()
  const favoriteCharacters = await getFavorites(Number(session?.user?.id))

  return (
    <>
      <PageTemplate
        titleLinks={['Todos los personajes', 'Acerca de']}
        urlLinks={['/', '/about']}
      >
        {!session && (
          <p className='ml-16 mt-5 font-bold'>
            Inicia sesión para guardar tus personajes favoritos
          </p>
        )}
        {session && favoriteCharacters.length > 0 && (
          <CharacterList>
            {favoriteCharacters.map((favorite) => (
              <CharacterCard
                type='favorite'
                key={favorite.id}
                character={favorite}
                isFavorite={true}
              />
            ))}
          </CharacterList>
        )}
      </PageTemplate>
    </>
  )
}
