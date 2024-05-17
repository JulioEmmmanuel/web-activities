import { Character } from "@/types/Character";
import EpisodeList from "./EpisodeList";

interface CharacterDetailInfoProps {
    character: Character
}

export default function CharacterDetailInfo({
    character,
}: CharacterDetailInfoProps){

    return (
        <div data-testid="character-detail" className="flex flex-col space-y-2">
            <h2 className="mb-3 text-xl font-bold">{character.name}</h2>
            <h3>{character.status} - {character.gender}</h3>
            <h3><span className="font-bold">Species: </span>{character.species}</h3>
            <h3><span className="font-bold">Origin: </span>{character.origin.name}</h3>
            <h3><span className="font-bold">Location: </span>{character.location.name}</h3>
            <h3><span className="font-bold">Episodes </span></h3>
            <EpisodeList episodes={character.episode}/>
        </div>
    )
}