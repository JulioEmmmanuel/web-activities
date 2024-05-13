import { FaRegStar, FaStar } from "react-icons/fa6"
import { CardTitle } from "@/components/ui/atoms/CardTitle"
import { CardText } from "@/components/ui/atoms/CardText"
import { Character } from "@/types/Character";
import Link from "next/link";

interface CardInfoProps {
    character: Character
    isFavorite: boolean
    toggleFavorite: (element:Character, favorite:boolean) => void
}

export function CardInfo({
    character,
    isFavorite,
    toggleFavorite
}: CardInfoProps){

    return <>
        <div className="flex justify-around items-center">
            <Link href={`/characters/${character.id}`}>
                <CardTitle title={character.name}/>
            </Link>
            <div 
                className="cursor-pointer"
                onClick={() => {
                    toggleFavorite(character, isFavorite)
                }}
            >
                { isFavorite && <FaStar size={25}/> }
                { !isFavorite && <FaRegStar size={25}/> }
            </div>
        </div>
        <CardText text={`${character.status} - ${character.species}`}/>
        <CardText text={`Location: ${character.location.name}`}/>
    </>
}