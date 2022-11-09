import { CSSProperties, useState } from "react";
import configuration from "../config.json";
import themes from "../themes.json";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import Header from "../src/components/Header"
import Timeline from "../src/components/Timeline";
import { Config, Themes } from "../src/types";
import Favorites from "../src/components/Favorites";
import { ThemeProvider } from "styled-components";

const config: Config = configuration;
const { lightMode, darkMode }: Themes = themes

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

    const [toSearch, setToSearch] = useState('');
    const [isLight, toggleMode] = useState(true);

    return (
        <>
            <ThemeProvider theme={isLight ? lightMode : darkMode}>
                <CSSReset />
                <div style={homePageStyle}>
                    <Menu setToSearch={setToSearch} isLight={isLight} toggleMode={toggleMode} />
                    <Header config={config} />
                    <Timeline searchedValue={toSearch} playlists={config.playlists} />
                    <Favorites favorites={config.favorites} />
                </div>
            </ThemeProvider>
        </>
    );
}
