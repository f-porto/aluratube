export interface Config {
    name: string
    description: string
    github: string
    bannerUrl: string
    playlists: Playlists
    favorites: Favorite[]
}

export type Playlists = { [key: string]: Video[] }

export interface Video {
    title: string
    url: string
    thumb: string
}

export interface Favorite {
    github: string
}
