import { test, expectTypeOf } from 'vitest'
import { Character } from '@/types/Character'
import { waitFor } from '@testing-library/react'
import { getCharacterById } from './getCharacterById'

test("expect getCharacterById to return a character", async () => {
    const res = await waitFor(() => getCharacterById(1));
    expectTypeOf(res).toMatchTypeOf<Character>();
})