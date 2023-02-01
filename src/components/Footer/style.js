import styled from "styled-components"

export const Container = styled.div`
    grid-column: 5 / span 4;
    padding: 8px;

    @media (max-width: 1100px) {
        grid-column: 1 / span 4;
    }
`