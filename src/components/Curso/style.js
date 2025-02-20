import styled from "styled-components";

export const Container = styled.li`
  padding: 2rem;
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  border-left: 0.5rem solid transparent;
  transition: 400ms;

  :nth-child(odd) {
    background-color: var(--off-black);
  }

  :hover {
    border-left: 0.5rem solid var(--azul);
  }
`;

export const Conteudo = styled.div`
  display: flex;
  width: 50rem;
  gap: 2rem;
`;

export const Mockup = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const Texto = styled.div`
  display: flex;
  flex-direction: column;

  h2::before {
    content: " ";
    background-color: var(--azul);
    display: inline-block;
    height: 1.5rem;
    width: 0.25rem;
    margin-right: 0.25rem;
  }
`;

export const Links = styled.ul`
  display: flex;
  gap: 1rem;
`;
