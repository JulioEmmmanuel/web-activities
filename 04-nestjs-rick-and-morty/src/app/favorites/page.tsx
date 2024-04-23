"use client";

import CharacterCard from "@/components/molecules/CharacterCard";
import { CharacterList } from "@/components/organisms/CharacterList";
import { PageTemplate } from "@/components/organisms/PageTemplate";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { Character } from "@/types/Character";

export default function Home() {

    const {
        state:favorites, 
        setValue:setFavorites,
    } = useLocalStorage<Character[]>("characters", []);

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
