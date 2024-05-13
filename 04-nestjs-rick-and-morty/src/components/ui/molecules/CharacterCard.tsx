import Image from "next/image";
import { Character } from "@/types/Character";
import { CardInfo } from "./CardInfo";


interface CharacterCardProps {
    character: Character
    isFavorite: boolean
    toggleFavorite: (element:Character, favorite:boolean)=> void
}

export default function CharacterCard({
    character,
    isFavorite,
    toggleFavorite
}: CharacterCardProps){
    return (
        <>
            <div className="w-1/4 max-w-[500px] flex items-stretch gap-x-6 border bg-teal-600 rounded-xl">
                <Image 
                    width={150}
                    height={150}
                    src={character.image} 
                    alt={character.name}
                    className="w-1/3 h-auto rounded-bl-xl rounded-tl-xl"
                    />
                <div className="w-2/3 py-5 pr-10 flex flex-col gap-y-2 text-center items-around text-white">
                    <CardInfo
                        character={character}
                        isFavorite={isFavorite}
                        toggleFavorite={toggleFavorite}
                    />
                </div>
            </div>
        </>
    )
}