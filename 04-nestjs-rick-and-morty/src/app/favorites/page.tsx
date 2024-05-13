"use client";

import CharacterCard from "@/components/ui/molecules/CharacterCard";
import { CharacterList } from "@/components/ui/organisms/CharacterList";
import { PageTemplate } from "@/components/ui/organisms/PageTemplate";
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
