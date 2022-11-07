export interface Config {
    name: string
    description: string
    github: string
    playlists: Playlists
}

export type Playlists = { [key: string]: Video[] }

export interface Video {
    title: string
    url: string
    thumb: string
}
