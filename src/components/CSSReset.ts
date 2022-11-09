import { createGlobalStyle } from "styled-components";
import { Theme } from "../types";

/**
 * margin:
 *    margin: 0; //
 * padding:
 *    padding: 0; //
 * box-sizing: sets how the total width and height of an element is calculated
 *    box-sizing: border-box; // Keeps the element inside
 * font-family:
 *    font-family: sans-serif; //
 * display:
 *    display: flex; //
 * flex-direction:
 *    flex-direction: column; //
 * min-height:
 *    min-height: 100%; //
 * flex:
 *    flex: 1; //
 * text-decoration: sets the appearance of decorative lines on text
 *    text-decoration: none; // No decoration
 * opacity: sets the opacity of an element
 *    opacity: 1; //
 *    opacity: .5; //
 * transition:
 *    transition: .3s; //
 */
export const CSSReset = createGlobalStyle`
    /* Reset */
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: sans-serif;
        background-color: ${({ theme }: { theme: Theme }) => theme.backgroundBase};
    }
    /* NextJS */
    html {
        display: flex;
        flex-direction: column;
        min-height: 100%;
    }
    body {
        display: flex;
        flex: 1;
    }
    #__next {
        display: flex;
        flex: 1;
    }
    /* Globals */
    button,
    a {
        text-decoration: none;
        opacity: 1;
        transition: .3s;
        &:hover,
        &:focus {
            opacity: .5;
        }
    }
`;