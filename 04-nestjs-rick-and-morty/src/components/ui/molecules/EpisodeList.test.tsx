import { test, expect} from 'vitest'
import { screen, render} from '@testing-library/react'
import { TestCharacter } from '@/types/Character';
import EpisodeList from './EpisodeList';

test("render episode names", () => {
    render(<EpisodeList episodes={TestCharacter.episode}/>)
    expect(screen.getByText("Episode 33")).toBeInTheDocument()
    expect(screen.getByText("Episode 34")).toBeInTheDocument()
})