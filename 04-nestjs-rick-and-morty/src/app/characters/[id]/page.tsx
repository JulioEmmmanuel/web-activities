import CharacterDetailCard from "@/components/ui/molecules/CharacterDetailCard";
import { PageTemplate } from "@/components/ui/organisms/PageTemplate";
import { getCharacterById } from "@/services/getCharacterById";

export default async function CharacterDetail({ params }: { params: { id: string } }) {

  const character = await getCharacterById(Number(params.id));
  
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
  