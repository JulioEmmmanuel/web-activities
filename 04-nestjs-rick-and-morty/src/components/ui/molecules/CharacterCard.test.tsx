import { test, expect, vi } from 'vitest'
import { screen, render } from '@testing-library/react'
import CharacterCard from './CharacterCard'
import { TestCharacter } from '@/types/Character'

//mock toggleFavorite function
const mockToggleFavorite = vi.fn()

test('render card info', () => {
  render(
    <CharacterCard
      character={TestCharacter}
      isFavorite={false}
      toggleFavorite={mockToggleFavorite}
    />,
  )
  expect(screen.getByTestId('card-info')).toBeDefined()
})

test('render card image', () => {
  render(
    <CharacterCard
      character={TestCharacter}
      isFavorite={false}
      toggleFavorite={mockToggleFavorite}
    />,
  )
  const src = decodeURIComponent(
    screen.getByRole('img').getAttribute('src') ?? '',
  )
  expect(src).toContain(TestCharacter.image)
})
