// import assert methods
import { test, expect } from 'vitest'
// import testinglibrary for react
import { screen, render } from '@testing-library/react'
import { CardText } from './CardText'
// import component

test("render as p", () => {
    render(<CardText text="Texto"/>)
    expect(screen.getByRole("paragraph")).toBeInTheDocument()
})