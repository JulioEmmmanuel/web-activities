import { test, expect } from 'vitest'
import { screen, render } from '@testing-library/react'
import { FormMessage } from './FormMessage'

test("render span info message", () => {
    render(<FormMessage error={false} message="Título"/>)
    const element = screen.getByText("Título")
    expect(element).toBeInTheDocument()
    expect(element).toHaveClass("text-black")
    
})

test("render error message", () => {
    render(<FormMessage error={true} message="Error"/>)
    const element = screen.getByText("Error")
    expect(element).toBeInTheDocument()
    expect(element).toHaveClass("text-red-500")
})