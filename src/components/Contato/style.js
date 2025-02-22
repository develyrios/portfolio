import styled from "styled-components";

export const Container = styled.section`
  background-color: var(--preto);

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 2rem 1rem;

  > h3 {
    padding-top: 2rem;
    text-align: center;

    > a {
      color: var(--azul-bebe);

      border-bottom: 0.125rem solid transparent;
      transition: 400ms;

      :hover {
        border-bottom: 0.1rem solid var(--azul-bebe);
      }
    }
  }

  > span {
    padding-top: 4rem;
  }
`;

export const Links = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;
