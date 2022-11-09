import { createContext, useState } from "react"

type ColorMode = "light" | "dark"

interface ColorModeContext {
    mode: ColorMode
    toggleMode: () => void
}

export const ColorModeContext = createContext<ColorModeContext>({
    mode: "light",
    toggleMode: () => { throw new Error("`toggleMode` for ColorModeContext was not provided!") }
});

export function ColorModeProvider(
    { initialMode, children }:
        { initialMode: ColorMode, children: JSX.Element }
) {
    const [mode, setMode] = useState(initialMode);

    const toggleMode = () => setMode(mode === "light" ? "dark" : "light");

    return (
        <ColorModeContext.Provider value={{
            mode: mode,
            toggleMode: toggleMode
        }}>
            {children}
        </ColorModeContext.Provider>
    )
}