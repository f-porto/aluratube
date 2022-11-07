import { createGlobalStyle } from "styled-components";

/**
 * margin:
 *    margin: 0; //
 * padding:
 *    padding: 0; //
 * box-sizing:
 *    box-sizing: border-box; //
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
 * text-decoration::
 *    text-decoration: none; //
 * opacity:
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