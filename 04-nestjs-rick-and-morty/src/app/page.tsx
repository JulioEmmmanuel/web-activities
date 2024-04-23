"use client";

import CharacterCard from "@/components/molecules/CharacterCard";
import { CharacterList } from "@/components/organisms/CharacterList";
import { PageTemplate } from "@/components/organisms/PageTemplate";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { getCharacters } from "@/services/getCharacters";
import { Character } from "@/types/Character";
import { useEffect, useState } from "react";

export default function Home() {

  const {
    state:favorites, 
    setValue:setFavorites
  } = useLocalStorage<Character[]>("characters", []);

  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {

    const fetchCharacters = async () => {
        const res = await getCharacters();
        setCharacters(res);
    }

    fetchCharacters();

  }, [])

  const toggleFavorite = (character: Character, favorite: boolean) => {
    if(favorite){
        setFavorites(favorites.filter(fav => fav.id !== character.id))
    } else {
        setFavorites([...favorites, character])
    }
  }

  return (
    <>
      <PageTemplate
        titleLink="Favoritos"
        urlLink="/favorites"
      >
        <CharacterList>

          {characters.map(character => (
            <CharacterCard
                key={character.id}
                character={character}
                isFavorite={favorites.some(fav => fav.id === character.id)}
                toggleFavorite={toggleFavorite}
            />
          ))}

        </CharacterList>


      </PageTemplate>
    </>   
  );
}
