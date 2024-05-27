import { test, expect } from 'vitest'
import { screen, render } from '@testing-library/react'
import { CardInfo } from './CardInfo'
import { TestCharacter } from '@/types/Character'

test('render card info correctly', () => {
  render(
    <CardInfo type='normal' character={TestCharacter} isFavorite={false} />,
  )
  expect(screen.getByText(TestCharacter.name)).toBeInTheDocument()
  expect(
    screen.getByText(`${TestCharacter.status} - ${TestCharacter.species}`),
  ).toBeInTheDocument()
  expect(
    screen.getByText(`Location: ${TestCharacter.location.name}`),
  ).toBeInTheDocument()
})

test('render star button correctly when not favorite', () => {
  render(
    <CardInfo type='favorite' character={TestCharacter} isFavorite={false} />,
  )
  expect(screen.getByTestId('star-empty')).toBeDefined()
})

test('render star button correctly when favorite', () => {
  render(
    <CardInfo type='favorite' character={TestCharacter} isFavorite={true} />,
  )
  expect(screen.getByTestId('star-full')).toBeDefined()
})
