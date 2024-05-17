// import assert methods
import { test, expect } from 'vitest'
// import testinglibrary for react
import { screen, render } from '@testing-library/react'
// import component
import { Button } from './Button'

test("render as button", () => {
    render(<Button text="Ingresar"/>)
    expect(screen.getByRole("button")).toBeInTheDocument()
})