import Image from 'next/image'
import { Character } from '@/types/Character'
import { CardInfo } from './CardInfo'

interface CharacterCardProps {
  character: Character
  type: 'normal' | 'favorite'
  isFavorite?: boolean
  toggleFavorite?: (element: Character, favorite: boolean) => void
}

export default function CharacterCard({
  character,
  type,
  isFavorite,
  toggleFavorite,
}: CharacterCardProps) {
  return (
    <>
      <div className='flex w-1/4 max-w-[500px] items-stretch gap-x-6 rounded-xl border bg-teal-600'>
        <Image
          width={150}
          height={150}
          src={character.image}
          alt={character.name}
          className='h-auto w-1/3 rounded-bl-xl rounded-tl-xl'
        />
        <div
          data-testid='card-info'
          className='items-around flex w-2/3 flex-col gap-y-2 py-5 pr-10 text-center text-white'
        >
          <CardInfo
            type={type}
            character={character}
            isFavorite={isFavorite}
            toggleFavorite={toggleFavorite}
          />
        </div>
      </div>
    </>
  )
}
