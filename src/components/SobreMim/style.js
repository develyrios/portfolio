import styled from "styled-components";
import hexagonosPequenos2x from "../../assets/hexagonos-pequenos-azul-2x.svg";
import hexagonosPequenos1x from "../../assets/hexagonos-pequenos-azul-1x.svg";

export const Container = styled.section`
  background-image: url(${hexagonosPequenos2x});
  background-position: center left;
  background-repeat: no-repeat;
  background-size: auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1366px) {
    background-image: url(${hexagonosPequenos1x});
  }

  @media (max-width: 800px) {
    background-size: contain;

    > div,
    h1,
    p {
      width: calc(100vw - 10rem);
    }
  }

  @media (max-width: 500px) {
    background-image: none;

    > div,
    h1,
    p {
      width: calc(100vw - 4rem);
    }
  }
`;

export const Conteudo = styled.div`
  display: flex;
  justify-content: center;

  gap: 2.5rem;

  section,
  ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  h2::before {
    content: " ";
    background-color: var(--azul);
    display: inline-block;
    height: 1.5rem;
    width: 0.25rem;
    margin-right: 0.25rem;
  }

  @media (max-width: 1250px) {
    flex-direction: column;
  }
`;

export const Resumo = styled.section`
  max-width: 70ch;

  @media (max-width: 500px) {
    h2::before {
      height: 1.25rem;
    }
  }
`;

export const Tecnologias = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2.5rem;

  @media (max-width: 570px) {
    h2 {
      font-size: 1.25rem;

      ::before {
        height: 1rem;
      }
    }
  }

  @media (max-width: 430px) {
    flex-direction: column;
  }
`;

export const Stacks = styled.section``;

export const Ferramentas = styled.section``;
