export type Config = {
    name: string
    description: string
    github: string
    bannerUrl: string
    playlists: Playlists
    favorites: Favorite[]
}

export type Playlists = { [key: string]: Video[] }

export type Video = {
    title: string
    url: string
    thumb: string
}

export type Favorite = {
    github: string
}

export type Themes = {
    light: Theme
    dark: Theme
}

export type Theme = {
    backgroundBase: string
    backgroundLevel1: string
    backgroundLevel2: string
    borderBase: string
    textColorBase: string
}
