'use client'

import { FaRegStar, FaStar } from 'react-icons/fa6'
import { CardTitle } from '@/components/ui/atoms/CardTitle'
import { CardText } from '@/components/ui/atoms/CardText'
import { Character } from '@/types/Character'
import Link from 'next/link'

interface CardInfoProps {
  character: Character
  type: 'normal' | 'favorite'
  isFavorite?: boolean
  toggleFavorite?: (element: Character, favorite: boolean) => void
}

export function CardInfo({
  character,
  type,
  isFavorite = false,
  toggleFavorite = () => {},
}: CardInfoProps) {
  return (
    <>
      <div className='flex items-center justify-around'>
        <Link href={`/characters/${character.id}`}>
          <CardTitle title={character.name} />
        </Link>
        {type === 'favorite' && (
          <button
            className='cursor-pointer'
            onClick={() => {
              toggleFavorite(character, isFavorite)
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
