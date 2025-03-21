import styled from "styled-components";

export const Container = styled.li`
  background-color: var(--carbono);

  display: flex;
  align-items: center;
  gap: 0.75rem;

  padding: 0.5rem 1rem;

  img {
    height: 1.5rem;
  }

  transition: 400ms;

  :hover {
    background-color: var(--cinza);
  }

  @media (max-width: 725px) {
    img {
      height: 1.25rem;
    }
  }
`;
