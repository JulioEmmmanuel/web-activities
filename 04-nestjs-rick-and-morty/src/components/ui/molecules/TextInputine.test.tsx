import { test, expect } from 'vitest'
import { screen, render } from '@testing-library/react'
import { TextInputLine } from './TextInputLine'

test('render label', () => {
  render(<TextInputLine title='Nombre' name='name' placeholder='Nombre' />)
  expect(screen.getByText('Nombre')).toBeDefined()
})

test('render input', () => {
  render(<TextInputLine title='Nombre' name='name' placeholder='Nombre' />)
  expect(screen.getByRole('textbox')).toBeDefined()
  expect(screen.getByLabelText('Nombre')).toBeDefined()
})
