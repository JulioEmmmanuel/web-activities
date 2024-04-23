"use client";

import { Character } from "@/types/Character"
import { PropsWithChildren } from 'react'

export function CharacterList({
    children
}: PropsWithChildren ){
    return (
        <div className="py-10 flex flex-wrap justify-around items-center content-center gap-x-5 gap-y-10">
            {children}
        </div>
    )
}