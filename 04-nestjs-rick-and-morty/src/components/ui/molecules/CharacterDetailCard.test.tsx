import { test, expect } from 'vitest'
import { screen, render } from '@testing-library/react'
import { TestCharacter } from '@/types/Character'
import { CharacterDetailCard } from './CharacterDetailCard'

test('render card detail info', () => {
  render(<CharacterDetailCard character={TestCharacter} />)
  expect(screen.getByTestId('character-detail')).toBeDefined()
})

test('render card image', () => {
  render(<CharacterDetailCard character={TestCharacter} />)
  const src = decodeURIComponent(
    screen.getByRole('img').getAttribute('src') ?? '',
  )
  expect(src).toContain(TestCharacter.image)
})
