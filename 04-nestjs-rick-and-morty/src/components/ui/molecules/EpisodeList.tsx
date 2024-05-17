import { formatEpisodeList } from "@/helpers/formatEpisodeList"

interface EpisodeListProps {
    episodes: string[]
}

export default function EpisodeList({
    episodes,
}: EpisodeListProps){
    return (
        <div className="flex flex-col space-y-1">
            {formatEpisodeList(episodes).map(episode => (
                <p key={episode} className="text-sm">{episode}</p>
            ))}
        </div>
    )
}