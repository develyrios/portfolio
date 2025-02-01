import styled from "styled-components";
import hexagonosPequeno from "../../assets/hexagonos-pequeno-azul.svg";

export const Container = styled.section`
  background-image: url(${hexagonosPequeno});
  background-position: center left;
  background-repeat: no-repeat;
  background-size: contain;

  grid-row: 1 / 2;

  position: relative;

  > section {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  > section > h2::before {
    content: " ";
    background-color: var(--azul);
    display: inline-block;
    height: 1.5rem;
    width: 0.25rem;
    margin-right: 0.25rem;
  }
`;

export const Resumo = styled.section`
  grid-row: 2 / 3;
  grid-column: 3 / 7;
`;

export const Stacks = styled.section`
  grid-row: 2 / 3;
  grid-column: 7 / 9;
`;

export const Ferramentas = styled.section`
  grid-row: 2 / 3;
  grid-column: 9 / 11;
`;

export const Item = styled.div`
  display: flex;
  gap: 0.75rem;

  padding: 0.5rem 1rem;

  background-color: var(--carbono);

  img {
    width: 1.5rem;
  }
`;
