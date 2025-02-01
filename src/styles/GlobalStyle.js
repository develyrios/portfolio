import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root {
        --montserrat: "Montserrat", serif;
        --poppins: "Poppins", serif;
        -nunito: "Nunito", serif;
        --preto: #131415;
        --off-black: #1F2022;
        --carbono: #374151;
        --cinza: #60779C;
        --branco: #F9FAFB;
        --verde-neon: #7FFF00;
        --azul-bebe: #93C5FD;
        --azul: #3B82F6;
    }

    * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
    }

    html{
    width: 100%;
    height: 100%;
    }

    button {
    cursor: pointer;
    }

    body {
        background-color: var(--off-black);
        margin: 0 auto;
    }

    .layout-grid {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        grid-gap: 16px;
        margin: 0 32px;
    }

    /* @media (max-width: 1100px) {
        body {
            width: 90%;
        }
        
        #root {
            grid-template-columns: repeat(4, 1fr);
            grid-gap: 8px;
        }
    } */

    .montserrat {
        font-family: var(--montserrat);
    }

    .poppins {
        font-family: var(--poppins);
    }

    .nunito {
        font-family: var(--nunito);
    }

    .b4 {
        border-radius: 4px;
    }

    .b8 {
        border-radius: 8px;
    }
    
    .b16 {
        border-radius: 16px;
    }
`;
