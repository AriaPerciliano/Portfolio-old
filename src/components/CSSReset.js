import { createGlobalStyle } from "styled-components";

export const CSSReset = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        max-width: 100%;
        scrollbar-width: auto;
        scrollbar-color: #8f54a0 #ffffff;
    }
    *::-webkit-scrollbar {
        width: 16px;
    }
    *::-webkit-scrollbar-track {
        background-color: #150c25;
        border-radius: 5px;
    }
    *::-webkit-scrollbar-thumb {
        background-color: #1f1137;
        border-radius: 10px;
        border: 3px solid #0a0612;
    }
    body {
        font-family: Arial, Helvetica, sans-serif;
        background-color: #0a0612;
        color: rgb(236, 217, 255);
    }
/* NextJS */
    html {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    scroll-behavior: smooth;
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