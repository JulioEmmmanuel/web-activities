import { test, expect } from 'vitest'
import { formatEpisodeName } from './formatEpisodeName'
import { TestCharacter } from '@/types/Character'

test('format episode name', () => {
  const res = formatEpisodeName(TestCharacter.episode[0])
  expect(res).toBe('33')
})
