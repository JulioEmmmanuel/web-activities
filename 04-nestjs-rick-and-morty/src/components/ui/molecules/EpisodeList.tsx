import { getEpisode } from "@/libs/strings/getEpisode";

interface EpisodeListProps {
    episodes: string[]
}

export default function EpisodeList({
    episodes,
}: EpisodeListProps){

    const getEpisodesNames = (episodes: string[]) => {
        const list = episodes.length <= 4 ? episodes : episodes.slice(0, 4);
        const episodesNames = list.map(ep => {
            const episodeName = getEpisode(ep)
            return <p key={episodeName} className="text-sm">Episode {episodeName}</p>
        })
        if(episodes.length > 4){
            episodesNames.push(<p className="text-sm">Etc...</p>)
        }
        return episodesNames
    }
  
    return (
        <div className="flex flex-col space-y-1">
            {getEpisodesNames(episodes)}
        </div>
    )
}