"use client";
import { CardText } from "@/components/atoms/CardText";
import { CardTitle } from "@/components/atoms/CardTitle";
import { PageTemplate } from "@/components/organisms/PageTemplate";
import { getEpisode } from "@/libs/strings/getEpisode";
import { getCharacterById } from "@/services/getCharacterById";
import { Character } from "@/types/Character";
import Image from "next/image";
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

    const getEpisodesNames = (episodes: string[]) => {
        let list = episodes.length <= 4 ? episodes : episodes.slice(0, 4);
        let episodesNames = list.map(ep => {
            const episodeName = getEpisode(ep)
            return <p key={episodeName} className="text-sm">Episode {episodeName}</p>
        })
        if(episodes.length > 4){
            episodesNames.push(<p className="text-sm">Etc...</p>)
        }
        return episodesNames
    }
  
    return (
      <>
        <PageTemplate
          titleLink="Todos los personajes"
          urlLink="/"
        >

        {character && (
            <>
                <div className="mt-10 w-full flex items-center justify-center gap-x-[100px]">
                    <Image
                        width={300}
                        height={300}
                        src={character.image} 
                        alt={character.name}
                        className="w-1/3 max-w-[300px]"
                        />
                    <div className="flex flex-col space-y-2">
                        <h2 className="mb-3 text-xl font-bold">{character.name}</h2>
                        <h3 className="text-md">{character.status} - {character.gender}</h3>
                        <h3 className="text-md"><span className="font-bold">Species: </span>{character.species}</h3>
                        <h3 className="text-md"><span className="font-bold">Origin: </span>{character.origin.name}</h3>
                        <h3 className="text-md"><span className="font-bold">Location: </span>{character.location.name}</h3>
                        <h3 className="text-md"><span className="font-bold">Episodes </span></h3>
                        <div className="flex flex-col space-y-1">
                            {getEpisodesNames(character.episode)}
                        </div>
                    </div>

                </div>
                
            </>
            

        )}

        
  
        </PageTemplate>
      </>   
    );
  }
  