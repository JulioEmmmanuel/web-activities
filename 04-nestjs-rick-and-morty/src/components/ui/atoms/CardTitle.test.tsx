import { test, expect } from 'vitest'
import { screen, render } from '@testing-library/react'
import { CardTitle } from './CardTitle'

test("render as h3", () => {
    render(<CardTitle title="Título"/>)
    expect(screen.getByRole("heading")).toBeInTheDocument()
})