"use client";
import CharacterDetailCard from "@/components/molecules/CharacterDetailCard";
import { PageTemplate } from "@/components/organisms/PageTemplate";
import { getCharacterById } from "@/services/getCharacterById";
import { Character } from "@/types/Character";
import { useEffect, useState } from "react";

export default function CharacterDetail({ params }: { params: { id: string } }) {

    const [character, setCharacter] = useState<Character>();
  
    useEffect(() => {

      const fetchCharacters = async () => {
          const res = await getCharacterById(Number(params.id));
          setCharacter(res);
      }
  
      fetchCharacters();
  
    }, [])
  
    return (
      <>
        <PageTemplate
          titleLink="Todos los personajes"
          urlLink="/"
        >

        {character && (
            <>
                <CharacterDetailCard character={character}/>
            </>
            

        )}

        
  
        </PageTemplate>
      </>   
    );
  }
  