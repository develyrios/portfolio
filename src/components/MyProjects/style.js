import styled from "styled-components"

export const Container = styled.div`
    grid-column: 1 / span 12;
    padding: 8px 16px 16px;

    display: flex;
    flex-direction: column;
    row-gap: 8px;
`

export const ProjectsGroup = styled.div`
    display: flex;
    column-gap: 16px;
`

export const ProjectBox = styled.div`
    background-color: var(--ciano);
    padding: 16px;

    display: flex;
    flex-direction: column;
    row-gap: 8px;

    width: 25%
`

export const ContentRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 8px;

    img {
        height: 16px;
    }

    a {
        background-color: var(--azul);
        color: var(--preto);
        padding: 4px 8px;
        transition: 250ms;
        text-decoration: none;

        display: flex;
        align-items: center;
        column-gap: 4px;
        justify-content: center;
    }

    a:hover {
        transform: scale(1.1);
    }
    
    a:active {
        transform: scale(0.75);
    }
`