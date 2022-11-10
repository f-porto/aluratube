import { ThemeProvider } from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import { Themes } from "../src/types";
import themesjs from "../themes.json"
import { ColorModeProvider, ColorModeContext } from "../src/components/Menu/components/ColorMode";
import { useContext } from "react";
import RegisterVideo from "../src/components/RegisterVideo";

const themes: Themes = themesjs

function ProviderWrapper({ children }: { children: JSX.Element }) {
    return (
        <ColorModeProvider initialMode="light">
            {children}
        </ColorModeProvider>
    )
}

function MyApp({ Component, pageProps }) {
    const context = useContext(ColorModeContext);

    return (
        <ThemeProvider theme={themes[context.mode]}>
            <CSSReset />
            <Component {...pageProps} />
            <RegisterVideo />
        </ThemeProvider>
    );
}

export default function _App(props) {
    return (
        <ProviderWrapper>
            <MyApp {...props} />
        </ProviderWrapper>
    )
}