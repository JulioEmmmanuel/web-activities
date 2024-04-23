"use client";

import { FaRegStar, FaStar } from "react-icons/fa6"
import { CardTitle } from "@/components/atoms/CardTitle"
import { CardText } from "@/components/atoms/CardText"
import { useState } from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { Character } from "@/types/Character";

interface CardInfoProps {
    character: Character
    isFavorite: boolean
    toggleFavorite: (character:Character, favorite:boolean) => void
}

export function CardInfo({
    character,
    isFavorite,
    toggleFavorite
}: CardInfoProps){

    return <>
        <div className="flex justify-around items-center">
            <CardTitle title={character.name}/>
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