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
        --detalhe: #353739;
    }

    * {
        margin:0;
        padding: 0;
        outline:0;
        box-sizing: border-box;
    }

    li {
        text-decoration: none;
        list-style: none;
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

    #root {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    .background {
        margin-left: 2rem;
        margin-right: 2rem;

        display: flex;
        justify-content: center;

        @media (max-width: 1170px) {
            margin-left: 1rem;
            margin-right: 1rem;
        }

        @media (max-width: 500px) {
            margin-left: 0.5rem;
            margin-right: 0.5rem;
        }
    }

    .background:nth-child(even) {
        padding-top: 2rem;
        padding-bottom: 2rem;
        background-color: var(--preto);
        border-radius: 2rem;
    }

    a {
        text-decoration: none;
        color: var(--branco);

        transition: 400ms;
    }

    a:hover {
        transform: scale(1.1);
    }

    a:active {
        transform: scale(0.9);
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
