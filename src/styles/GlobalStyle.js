import { createGlobalStyle } from "styled-components"
import backgroundBW from "../assets/background-black-white.svg"
import backgroundBlue from "../assets/background-blue.svg"

export default createGlobalStyle`
    :root {
        --ubuntu: 'Ubuntu', sans-serif;;
        --azul: #7BDFF2;
        --branco: #FFFFFF;
        --ciano: #B2F7EF;
        --preto: #000000;
    }

    * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
    }

    html{
    width: 100vw;
    height: 100vh;
    }

    body {
        width: 1100px;
        min-height: 100vh;
        margin: 0 auto;
        padding: 16px 0;
    }

    /* @todo media query do body para telas menores */

    button {
    cursor: pointer;
    }

    body, input, button, textarea {
        font-family: var(--ubuntu);
    }

    body {
        background-image: url(${backgroundBW});
        background-repeat: no-repeat;
        background-size: cover;
        background-attachment: fixed;
    }

    #root {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        grid-gap: 16px;

        > div {
            background-color: var(--branco);
        }
    }

    .border-minor {
        border-radius: 4px;
    }
    
    .border-major {
        border-radius: 16px;
    }
    
    .border-shadow-minor {
        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
    }
    
    .border-shadow-major {
        box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
    }
`