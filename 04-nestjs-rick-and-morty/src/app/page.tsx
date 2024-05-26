import { auth } from '@/auth'
import CharacterCard from '@/components/ui/molecules/CharacterCard'
import { CharacterList } from '@/components/ui/organisms/CharacterList'
import { PageTemplate } from '@/components/ui/organisms/PageTemplate'
import { getCharacters } from '@/services/getCharacters'

export default async function Home() {
  const session = await auth()
  const characters = await getCharacters()

  return (
    <>
      <PageTemplate
        titleLinks={
          session ? ['Favoritos', 'Acerca de'] : ['Iniciar sesión', 'Acerca de']
        }
        urlLinks={session ? ['/favorites', '/about'] : ['/login', '/about']}
      >
        <p className='ml-16 mt-5 font-bold'>
          Inicia sesión para guardar tus personajes favoritos
        </p>

        <CharacterList>
          {characters.map((character) => (
            <CharacterCard
              type={session ? 'favorite' : 'normal'}
              key={character.id}
              character={character}
              isFavorite={false}
            />
          ))}
        </CharacterList>
      </PageTemplate>
    </>
  )
}
