import { CSSProperties } from "react";
import configuration from "../config.json";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import Header from "../src/components/Header"
import Timeline from "../src/components/Timeline";
import { Config } from "../types";

const config: Config = configuration;

export default function HomePage() {
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
            </div>
        </>
    );
}
