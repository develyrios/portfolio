import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
    :root {
        --ubuntu: 'Ubuntu', sans-serif;;
        --branco: #FFFFFF;
        --preto: #000000;
        --principal: #d7f3fb;
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

    body, input, button, textarea {
        font-family: var(--ubuntu);
    }

    body {
        background-color:hsla(166,100%,94%,1);
        background-image:
        radial-gradient(at 71% 34%, hsla(36,44%,90%,0.62) 0px, transparent 50%),
        radial-gradient(at 100% 0%, hsla(299,44%,90%,0.53) 0px, transparent 50%),
        radial-gradient(at 2% 97%, hsla(270,44%,90%,1) 0px, transparent 50%),
        radial-gradient(at 40% 20%, hsla(206,44%,90%,1) 0px, transparent 50%),
        radial-gradient(at 96% 100%, hsla(218,44%,90%,1) 0px, transparent 50%),
        radial-gradient(at 0% 0%, hsla(175,44%,90%,0.52) 0px, transparent 50%);
        background-size: cover;
        background-attachment: fixed;

        margin: 0 auto;
        min-height: 100vh;
        padding: 16px 0;
        width: 1100px;
    }

    #root {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        grid-gap: 16px;

        > div {
            background: #fff
        }
    }

    @media (max-width: 1100px) {
        body {
            width: 90%;
        }
        
        #root {
            grid-template-columns: repeat(4, 1fr);
            grid-gap: 8px;
        }
    }

    .border-minor {
        border-radius: 8px;
    }
    
    .border-major {
        border-radius: 16px;
    }
    
    .border-shadow-minor {
        box-shadow: 0 0 8px rgba(0, 0, 0, 0.05);
    }
    
    .border-shadow-major {
        box-shadow: 0 0 16px rgba(0, 0, 0, 0.05);
    }
`