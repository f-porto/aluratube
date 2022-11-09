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

export interface Themes {
    lightMode: Theme
    darkMode: Theme
}

export interface Theme {
    backgroundBase: string
    backgroundLevel1: string
    backgroundLevel2: string
    borderBase: string
    textColorBase: string
}
