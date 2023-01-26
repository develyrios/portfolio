import styled from "styled-components"

export const Container = styled.div`
    grid-column: 4 / span 4;
    padding: 8px 0;

    display: flex;
    column-gap: 32px;
    justify-content: center;

    /* @media screen and (min-width: 768px) {
        header {
            height: 13.5rem;

            flex-direction: row;
            align-items: center;
            justify-content: center;
        }
    } */
`

export const Infobox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`