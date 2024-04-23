"use client";

import CharacterCard from "@/components/molecules/CharacterCard";
import { CharacterList } from "@/components/organisms/CharacterList";
import { PageTemplate } from "@/components/organisms/PageTemplate";
import { useFavorites } from "@/hooks/useFavorites";
import { Character } from "@/types/Character";

export default function Favorites() {

    const {favorites, toggleFavorite} = useFavorites<Character>("characters");

    
    return (
        <>
      <PageTemplate
        titleLink="Todos los personajes"
        urlLink="/"
      >
        <CharacterList>

          {favorites.map(favorite => (
            <CharacterCard
                key={favorite.id}
                character={favorite}
                isFavorite={true}
                toggleFavorite={toggleFavorite}
            />
          ))}

        </CharacterList>


      </PageTemplate>
    </> 
    );
}
