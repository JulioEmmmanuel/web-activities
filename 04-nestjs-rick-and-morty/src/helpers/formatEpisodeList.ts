import { formatEpisodeName } from './formatEpisodeName'

export const formatEpisodeList = (episodes: string[]) => {
  const list = episodes.length <= 4 ? episodes : episodes.slice(0, 4)
  const episodesNames = list.map((ep) => `Episode ${formatEpisodeName(ep)}`)
  if (episodes.length > 4) {
    episodesNames.push('Etc...')
  }
  return episodesNames
}
