import { CSSProperties } from "react";
import configuration from "../config.json";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import Header from "../src/components/Header"
import Timeline from "../src/components/Timeline";
import { Config } from "../types";

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

    return (
        <>
            <CSSReset />
            <div style={homePageStyle}>
                <Menu />
                <Header config={config}/>
                <Timeline playlists={config.playlists} />
                {/* TODO: Add favorites */}
            </div>
        </>
    );
}
