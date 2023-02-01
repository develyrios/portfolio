import styled from "styled-components"

export const Container = styled.div`
    grid-column: 8 / span 2;
    padding: 8px 0;

    display: flex;
    flex-direction: column;
    row-gap: 8px;

    @media (max-width: 1100px) {
        grid-column: 4 / span 1;
    }
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

    @media (max-width: 1100px) {
        column-gap: 8px;

        a {
            height: 24px;
            width: 24px;
        }
    }
`