import { test, expect } from 'vitest'
import { screen, render } from '@testing-library/react'
import { TextAreaBlock } from './TextAreaBlock'

test('render label', () => {
  render(<TextAreaBlock title='Nombre' name='name' placeholder='Nombre' />)
  expect(screen.getByText('Nombre')).toBeDefined()
})

test('render input', () => {
  render(<TextAreaBlock title='Nombre' name='name' placeholder='Nombre' />)
  expect(screen.getByRole('textbox')).toBeDefined()
  expect(screen.getByLabelText('Nombre')).toBeDefined()
})
