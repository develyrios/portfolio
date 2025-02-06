import styled from "styled-components";
import hexagonosPequeno from "../../assets/hexagonos-pequeno-azul.svg";

export const Container = styled.section`
  background-image: url(${hexagonosPequeno});
  background-position: center left;
  background-repeat: no-repeat;
  background-size: contain;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Conteudo = styled.div`
  display: flex;
  justify-content: center;

  gap: 2.5rem;

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
  width: 70ch;
`;

export const Stacks = styled.section``;

export const Ferramentas = styled.section``;
