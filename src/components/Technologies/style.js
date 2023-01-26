import styled from "styled-components"

export const Container = styled.div`
    grid-column: 6 / span 7;
    grid-row: 2 / span 1;
    padding: 8px 16px 16px;

    display: flex;
    flex-direction: column;
    row-gap: 8px;
`

export const TechnologiesGroup = styled.div`
    display: flex;
    column-gap: 8px;
    justify-content: center;
`

export const TechnologyBox = styled.div`
    background-color: var(--ciano);
    padding: 4px 8px;

    display: flex;
    column-gap: 4px;
    justify-content: center;
`