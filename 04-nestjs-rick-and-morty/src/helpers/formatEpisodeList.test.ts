import { test, expect } from 'vitest'
import { TestCharacter, TestCharacter2 } from '@/types/Character'
import { formatEpisodeList } from './formatEpisodeList'

test("format episode list for length <= 4", () => {
    const res = formatEpisodeList(TestCharacter.episode)
    expect(res).toContain("Episode 33")
    expect(res).toContain("Episode 34")
})

test("format episode list for length > 4", () => {
    const res = formatEpisodeList(TestCharacter2.episode)
    expect(res).toContain("Episode 20")
    expect(res).toContain("Episode 50")
    expect(res).toContain("Episode 70")
    expect(res).toContain("Episode 90")
    expect(res).toContain("Etc...")
})