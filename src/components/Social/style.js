import styled from "styled-components"

export const Container = styled.div`
    grid-column: 8 / span 2;
    padding: 8px 0;

    display: flex;
    flex-direction: column;
    row-gap: 8px;
`

export const SocialLinks = styled.div`
    display: flex;
    column-gap: 16px;
    justify-content: center;

    a {
        color: var(--preto);
        transition: 250ms;

        height: 36px;
        width: 36px;
    }

    a:hover {
        transform: scale(1.2);
    }
    
    a:active {
        transform: scale(0.75);
    }

    svg {
        width: 100%;
        height: 100%;
    }
`