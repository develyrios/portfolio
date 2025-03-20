import styled from "styled-components";
import hexagonosGrandes2x from "../../assets/hexagonos-grandes-verde-2x.svg";
import hexagonosGrandes1x from "../../assets/hexagonos-grandes-verde-1x.svg";
import hexagonosPequenos from "../../assets/hexagonos-pequenos-verde.svg";

export const Background = styled.header`
  background-image: url(${hexagonosGrandes2x});
  background-position: center right;
  background-repeat: no-repeat;
  background-size: fill;

  margin-top: 2rem;
  height: 88vh;

  @media (max-width: 1700px) {
    background-image: url(${hexagonosGrandes1x});
  }

  @media (max-width: 1200px) {
    background-image: url(${hexagonosPequenos});

    height: fit-content;
    margin-top: 1rem;

    padding: 1rem 0;
  }

  @media (max-width: 700px) {
    background-image: none;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  grid-auto-rows: auto;
  gap: 2rem;
  align-content: center;
  align-items: center;
  justify-items: center;

  width: 70vw;

  > img {
    grid-column: 1 / 2;
    grid-row: 1 / 4;
    width: 100%;
  }

  @media (max-width: 1280px) {
    grid-template-columns: 1fr 40vw;
  }

  @media (max-width: 1170px) {
    > img {
      grid-row: 1 / 2;
    }
  }

  @media (max-width: 700px) {
    width: 90vw;
  }

  @media (max-width: 365px) {
    > img {
      display: none;
    }
  }
`;

export const Infos = styled.div`
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  display: flex;
  flex-wrap: wrap;
  justify-content: end;
  align-content: center;

  @media (max-width: 365px) {
    grid-column: 1 / -1;
  }
`;

export const HeaderTitulo = styled.h1`
  width: fit-content;

  .logo-grande {
    width: 100%;
  }

  .logo-pequena {
    display: none;
  }
`;

export const HeaderSubTitulo = styled.h2`
  font-weight: 600;
  font-size: 3rem;
  text-align: right;

  font-family: var(--poppins);

  padding-bottom: 2rem;

  @media (max-width: 1440px) {
    font-size: 2.5rem;
  }

  @media (max-width: 1280px) {
    font-size: 1.75rem;
  }

  @media (max-width: 1170px) {
    padding-bottom: 0;
  }

  @media (max-width: 700px) {
    font-size: 1.25rem;
  }
`;

export const HeaderParagrafo = styled.p`
  grid-column: 2 / 3;
  grid-row: 2 / 3;

  font-weight: 500;
  font-size: 2rem;
  text-align: right;

  font-family: var(--nunito);

  padding-bottom: 2rem;

  @media (max-width: 1440px) {
    font-size: 1.75rem;
  }

  @media (max-width: 1280px) {
    font-size: 1.25rem;
  }

  @media (max-width: 1170px) {
    grid-column: 1 / -1;
    padding-bottom: 0;
  }
`;

export const HeaderNegrito = styled.strong`
  font-weight: 700;
  color: var(--verde-neon);
`;

export const Links = styled.ul`
  grid-column: 2 / 3;
  grid-row: 3 / 4;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  column-gap: 3rem;
  row-gap: 1rem;

  a {
    font-family: var(--poppins);
    font-size: 2rem;
    font-weight: 600;

    display: flex;
    align-items: center;
    gap: 0.5rem;

    background-color: var(--carbono);
    padding: 1rem 2rem;

    :hover {
      background-color: var(--cinza);
    }
  }

  @media (max-width: 1440px) {
    column-gap: 2rem;

    a {
      font-size: 1.5rem;
      padding: 0.75rem 1.5rem;

      > img {
        height: 1.5rem;
      }
    }
  }

  @media (max-width: 1280px) {
    column-gap: 1.5rem;

    a {
      font-size: 1rem;
      padding: 0.75rem 1.5rem;

      > img {
        height: 1rem;
      }
    }
  }

  @media (max-width: 1170px) {
    grid-column: 1 / -1;
  }
`;

export const Footer = styled.footer`
  grid-row: 4 / 5;
  grid-column: 1 / -1;

  display: flex;
  align-items: center;
  gap: 0.75rem;

  margin-top: 2rem;

  > img {
    height: 1.5rem;
  }
`;
