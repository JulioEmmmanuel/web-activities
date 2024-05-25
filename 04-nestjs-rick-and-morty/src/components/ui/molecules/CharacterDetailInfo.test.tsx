import { test, expect } from 'vitest'
import { screen, render } from '@testing-library/react'
import { TestCharacter } from '@/types/Character'
import CharacterDetailInfo from './CharacterDetailInfo'

test('render detail info correctly', () => {
  render(<CharacterDetailInfo character={TestCharacter} />)
  expect(screen.getByText(TestCharacter.name)).toBeInTheDocument()
  expect(
    screen.getByText(`${TestCharacter.status} - ${TestCharacter.gender}`),
  ).toBeInTheDocument()
  expect(screen.getByText('Species:')).toBeInTheDocument()
  expect(screen.getByText(TestCharacter.species)).toBeInTheDocument()
  expect(screen.getByText('Origin:')).toBeInTheDocument()
  expect(screen.getByText(TestCharacter.origin.name)).toBeInTheDocument()
  expect(screen.getByText('Location:')).toBeInTheDocument()
  expect(screen.getByText(TestCharacter.location.name)).toBeInTheDocument()
})
