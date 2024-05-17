import { test, expect } from 'vitest'
import { screen, render } from '@testing-library/react'
import { TextInput } from './TextInput'

test("render text input", () => {
    render(<TextInput name="name" placeholder='Nombre'/>)
    const element = screen.getByRole("textbox")
    expect(element).toBeInTheDocument()
    expect(element).toHaveAttribute("name", "name")
    expect(element).toHaveAttribute("placeholder", "Nombre")
})
