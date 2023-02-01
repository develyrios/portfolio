import styled from "styled-components"

export const Container = styled.div`
    grid-column: 4 / span 4;
    padding: 8px 0;

    display: flex;
    column-gap: 32px;
    justify-content: center;

    @media (max-width: 1100px) {
        grid-column: 1 / span 3;
    }
`

export const Infobox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`