import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root {
        --montserrat: "Montserrat", serif;
        --poppins: "Poppins", serif;
        --nunito: "Nunito", serif;
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
    font-size: 16px;
    }

    button {
    cursor: pointer;
    }

    body {
        background-color: var(--off-black);
        color: var(--branco);
        margin: 0 auto;
    }

    a {
        text-decoration: none;
        color: var(--branco);

        transition: 200ms;
    }

    a:hover {
        transform: scale(1.1);
    }

    a:active {
        transform: scale(0.9);
    }

    .layout-grid {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        grid-auto-rows: auto;
        column-gap: 1rem;
        row-gap: 2rem;
        margin: 0 2rem;
        align-content: center;
        justify-items: center;

        padding: 2rem 0;
    }

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
        border-radius: 0.25rem;
    }

    .b8 {
        border-radius: 0.5rem;
    }
    
    .b16 {
        border-radius: 1rem;
    }

    .b32 {
        border-radius: 2rem;
    }
`;
