export const formatEpisodeName = (url: string):string => {
    const lastIndex = url.lastIndexOf("/");
    return url.substring(lastIndex+1);
}