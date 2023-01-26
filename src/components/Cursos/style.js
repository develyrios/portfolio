import styled from "styled-components"

export const Container = styled.div`
    grid-column: 6 / span 7;
    grid-row: 3 / span 2;
    padding: 8px 16px 16px;

    display: flex;
    flex-direction: column;
    row-gap: 8px;
`

export const CursosGroup = styled.div`
    display: flex;
    column-gap: 8px;
    justify-content: center;
`

export const CursoBox = styled.div`
    background-color: var(--ciano);
    padding: 4px 8px;

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