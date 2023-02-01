import styled from "styled-components"

export const Container = styled.div`
    grid-column: 1 / span 5;
    grid-row: 2 / span 3;
    padding: 16px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: 1100px)  {
        grid-column: 1 / span 4;
        grid-row: auto;
        row-gap: 8px;
    }
`