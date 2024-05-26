'use client'

import { FaRegStar, FaStar } from 'react-icons/fa6'
import { CardTitle } from '@/components/ui/atoms/CardTitle'
import { CardText } from '@/components/ui/atoms/CardText'
import { Character } from '@/types/Character'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { toggleFavorite } from '@/actions/toggleFavorite'

interface CardInfoProps {
  character: Character
  type: 'normal' | 'favorite'
  isFavorite?: boolean
}

export function CardInfo({
  character,
  type,
  isFavorite = false,
}: CardInfoProps) {
  const router = useRouter()

  return (
    <>
      <div className='flex items-center justify-around'>
        <Link href={`/characters/${character.id}`}>
          <CardTitle title={character.name} />
        </Link>
        {type === 'favorite' && (
          <button
            className='cursor-pointer'
            onClick={async () => {
              await toggleFavorite(isFavorite, character.id)
              router.refresh()
            }}
          >
            {isFavorite && <FaStar data-testid='star-full' size={25} />}
            {!isFavorite && <FaRegStar data-testid='star-empty' size={25} />}
          </button>
        )}
      </div>
      <CardText text={`${character.status} - ${character.species}`} />
      <CardText text={`Location: ${character.location.name}`} />
    </>
  )
}
