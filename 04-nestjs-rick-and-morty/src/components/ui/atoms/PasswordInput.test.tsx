import { test, expect } from 'vitest'
import { screen, render } from '@testing-library/react'
import { PasswordInput } from './PasswordInput'

test('render password input', () => {
  render(<PasswordInput name='password' placeholder='Contraseña' />)
  const element = screen.getByTestId('password')
  expect(element).toBeInTheDocument()
  expect(element).toHaveAttribute('type', 'password')
  expect(element).toHaveAttribute('name', 'password')
  expect(element).toHaveAttribute('placeholder', 'Contraseña')
})
