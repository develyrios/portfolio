import styled from "styled-components";

export const Container = styled.section`
  background-color: var(--preto);

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 2rem 0;

  > span {
    padding-top: 4rem;
  }
`;

export const Redes = styled.ul`
  display: flex;
  gap: 1rem;
`;
