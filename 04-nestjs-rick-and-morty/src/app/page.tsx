"use client";

import CharacterCard from "@/components/ui/molecules/CharacterCard";
import { CharacterList } from "@/components/ui/organisms/CharacterList";
import { PageTemplate } from "@/components/ui/organisms/PageTemplate";
import { useFavorites } from "@/hooks/useFavorites";
import { getCharacters } from "@/services/getCharacters";
import { Character } from "@/types/Character";
import { useEffect, useState } from "react";

export default function Home() {

  const [characters, setCharacters] = useState<Character[]>([]);
  const {favorites, toggleFavorite} = useFavorites<Character>("characters");

  useEffect(() => {

    const fetchCharacters = async () => {
        const res = await getCharacters();
        setCharacters(res);
    }

    fetchCharacters();

  }, [])

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
