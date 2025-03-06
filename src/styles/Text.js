import styled from "styled-components";

export const Titulo1 = styled.h1`
  font-family: var(--montserrat);
  font-weight: 800;
  font-size: 4rem;
  text-align: center;
  text-transform: uppercase;

  grid-column: 1 / -1;

  margin-bottom: 1rem;

  @media (max-width: 725px) {
    font-size: 3rem;
  }

  @media (max-width: 500px) {
    font-size: 2.5rem;
  }

  @media (max-width: 380px) {
    font-size: 2rem;
  }
`;

export const Titulo2 = styled.h2`
  font-family: var(--poppins);
  font-weight: 500;
  font-size: 2rem;
  text-align: left;

  @media (max-width: 725px) {
    font-size: 1.75rem;
  }

  @media (max-width: 500px) {
    font-size: 1.5rem;
  }
`;

export const Titulo3 = styled.h3`
  font-family: var(--poppins);
  font-weight: 400;
  font-size: 1.5rem;
  text-align: left;

  @media (max-width: 725px) {
    font-size: 1.35rem;
  }

  @media (max-width: 500px) {
    font-size: 1.15rem;
  }
`;

export const Paragrafo = styled.p`
  font-family: var(--nunito);
  font-weight: 500;
  font-size: 1rem;
  text-align: left;
`;

export const Span = styled.span`
  font-family: var(--nunito);
  font-size: 1.125rem;
  font-weight: 500;

  @media (max-width: 725px) {
    font-size: 1rem;
  }

  @media (max-width: 500px) {
    font-size: 0.9rem;
  }
`;
