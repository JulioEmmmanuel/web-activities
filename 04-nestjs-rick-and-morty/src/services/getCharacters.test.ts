import { test, expectTypeOf } from 'vitest'
import { Character } from '@/types/Character'
import { getCharacters } from './getCharacters'
import { waitFor } from '@testing-library/react'

test('expect getCharacters to return a list of Characters', async () => {
  const res = await waitFor(() => getCharacters())
  expectTypeOf(res).toMatchTypeOf<Character[]>()
})
