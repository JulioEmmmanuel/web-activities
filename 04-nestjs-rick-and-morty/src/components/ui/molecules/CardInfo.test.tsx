import { test, expect, vi } from 'vitest'
import { screen, render, fireEvent } from '@testing-library/react'
import { CardInfo } from './CardInfo'
import { TestCharacter } from '@/types/Character'

//mock toggleFavorite function
const mockToggleFavorite = vi.fn();

test("render card info correctly", () => {
    render(<CardInfo character={TestCharacter} isFavorite={false} toggleFavorite={mockToggleFavorite}/>)
    expect(screen.getByText(TestCharacter.name)).toBeInTheDocument()
    expect(screen.getByText(`${TestCharacter.status} - ${TestCharacter.species}`)).toBeInTheDocument()
    expect(screen.getByText(`Location: ${TestCharacter.location.name}`)).toBeInTheDocument()
})

test("render star button correctly when not favorite", () => {
    render(<CardInfo character={TestCharacter} isFavorite={false} toggleFavorite={mockToggleFavorite}/>)
    expect(screen.getByTestId("star-empty")).toBeDefined()
})

test("render star button correctly when favorite", () => {
    render(<CardInfo character={TestCharacter} isFavorite={true} toggleFavorite={mockToggleFavorite}/>)
    expect(screen.getByTestId("star-full")).toBeDefined()
})

test("call toggleFavorite function on button click", () => {
    render(<CardInfo character={TestCharacter} isFavorite={true} toggleFavorite={mockToggleFavorite}/>)
    fireEvent.click(screen.getByRole("button"))
    expect(mockToggleFavorite).toBeCalledWith(TestCharacter, true);
})

