import { test, expect } from 'vitest'
import { screen, render } from '@testing-library/react'
import { TextArea } from './TextArea'

test('render text area', () => {
  render(<TextArea name='comment' placeholder='Ingresa tu comentario' />)
  const element = screen.getByRole('textbox')
  expect(element).toBeInTheDocument()
  expect(element).toHaveAttribute('name', 'comment')
  expect(element).toHaveAttribute('placeholder', 'Ingresa tu comentario')
})
