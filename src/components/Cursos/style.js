import styled from "styled-components"

export const Container = styled.div`
    grid-column: 6 / span 7;
    grid-row: 3 / span 2;
    padding: 8px 16px 16px;

    display: flex;
    flex-direction: column;
    row-gap: 8px;

    @media (max-width: 1100px)  {
        grid-column: 1 / span 4;
        grid-row: auto;
    }
`

export const CursosGroup = styled.div`
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
    justify-content: center;

    @media (max-width: 1100px)  {
        gap: 8px;
    }
`

export const CursoBox = styled.div`
    background-color: var(--principal);
    padding: 8px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    row-gap: 4px;
`

export const TextRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 4px;

    img {
        height: 16px;
    }
`