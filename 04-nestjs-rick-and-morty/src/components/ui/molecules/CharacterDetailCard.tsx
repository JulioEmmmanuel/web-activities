import { Character } from "@/types/Character";
import CharacterDetailInfo from "./CharacterDetailInfo";
import Image from "next/image";

interface CharacterDetailCardProps {
    character: Character
}

export function CharacterDetailCard({
    character,
}: CharacterDetailCardProps){

    return (
        <div className="mt-10 w-full flex items-center justify-center gap-x-[100px]">
            <Image
                width={300}
                height={300}
                src={character.image} 
                alt={character.name}
                className="w-1/3 max-w-[300px]"
                />
            <CharacterDetailInfo character={character}/>
        </div>
    )
}