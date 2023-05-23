import styled from "styled-components"

export const Container = styled.div`
    grid-column: 1 / span 12;
    padding: 8px 16px 16px;

    display: flex;
    flex-direction: column;
    row-gap: 8px;

    @media (max-width: 1100px)  {
        grid-column: 1 / span 4;
    }
`

export const ProjectsGroup = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;

    @media (max-width: 1100px)  {
        gap: 16px;
    }
`

export const ProjectBox = styled.div`
    background-color: var(--principal);
    padding: 16px;

    display: flex;
    flex-direction: column;
    row-gap: 8px;

    width: calc(25% - 16px);

    p {
        flex-grow: 1;
    }

    @media (max-width: 960px)  {
        width: calc(50% - 16px);
    }

    @media (max-width: 580px)  {
        width: calc(100% - 16px);
    }
`

export const ContentRow = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    gap: 8px;

    img {
        height: 16px;
    }

    a {
        background-color: var(--branco);
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