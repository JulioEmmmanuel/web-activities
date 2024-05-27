import { test, expect } from 'vitest'
import { screen, render } from '@testing-library/react'
import CharacterCard from './CharacterCard'
import { TestCharacter } from '@/types/Character'

test('render card info', () => {
  render(
    <CharacterCard
      character={TestCharacter}
      isFavorite={false}
      type='normal'
    />,
  )
  expect(screen.getByTestId('card-info')).toBeDefined()
})

test('render card image', () => {
  render(
    <CharacterCard
      type='normal'
      character={TestCharacter}
      isFavorite={false}
    />,
  )
  const src = decodeURIComponent(
    screen.getByRole('img').getAttribute('src') ?? '',
  )
  expect(src).toContain(TestCharacter.image)
})
