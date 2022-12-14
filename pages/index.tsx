import { CSSProperties, useEffect, useState } from "react";
import configuration from "../config.json";
import Menu from "../src/components/Menu";
import Header from "../src/components/Header"
import Timeline from "../src/components/Timeline";
import { Config, Favorite, Playlists } from "../src/types";
import Favorites from "../src/components/Favorites";
import { playlistsServices } from "../src/services/playlistsService";
import { favoritesServices } from "../src/services/favoriteService";

const config: Config = configuration;


export default function HomePage() {
    /**
     * display:
     *      display: flex; //
     * flexDirection: How is flex understandable?
     *      flexDirection: column; // I guess it makes a column with the inner elements
     * flex: sets how a flex item will grow or shrink to fit the space available in its flex container
     *      flex: 1; // It works
     */
    const homePageStyle: CSSProperties = {
        display: "flex",
        flexDirection: "column",
        flex: 1
    };

    const playlistsServ = playlistsServices();
    const favoriteServ = favoritesServices();
    const [toSearch, setToSearch] = useState("");
    const [playlists, setPlaylists] = useState<Playlists>({});
    const [favorites, setFavorites] = useState<Favorite[]>([]);

    useEffect(() => {
        playlistsServ.getAllPlaylists()
            .then(
                (playlists) => setPlaylists(playlists),
                (reason) => console.log("[REJECTED]", reason)
            );
    });
    useEffect(() => {
        favoriteServ.getAllFavorites()
            .then(
                (favorites) => setFavorites(favorites),
                (reason) => console.log("[REJECTED]", reason)
            );
    }, []);

    return (
        <div style={homePageStyle}>
            <Menu setToSearch={setToSearch} />
            <Header config={config} />
            <Timeline searchedValue={toSearch} playlists={playlists} />
            <Favorites favorites={favorites} />
        </div>
    );
}
