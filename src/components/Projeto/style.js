import styled from "styled-components";

export const Container = styled.li`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  border-left: 0.5rem solid transparent;
  transition: 400ms;

  :nth-child(odd) {
    background-color: var(--preto);
  }

  :hover {
    border-left: 0.5rem solid var(--verde-neon);
  }

  @media (max-width: 1000px) {
    width: calc(100vw - 6rem);
  }

  @media (max-width: 500px) {
    width: calc(100vw - 4rem);

    padding: 1rem;
  }
`;

export const Conteudo = styled.div`
  display: flex;
  align-items: center;
  width: 50rem;
  gap: 2rem;

  @media (max-width: 1000px) {
    flex-direction: column;

    width: 100%;
  }
`;

export const Mockup = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  max-height: 10rem;

  @media (max-width: 500px) {
    img {
      max-height: 25vw;
    }
  }
`;

export const Texto = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;

  h2::before {
    content: " ";
    background-color: var(--verde-neon);
    display: inline-block;
    height: 1.5rem;
    width: 0.25rem;
    margin-right: 0.25rem;
  }

  @media (max-width: 500px) {
    h2::before {
      height: 1.25rem;
    }
  }
`;

export const Links = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;
