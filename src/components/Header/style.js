import styled from "styled-components";
import hexagonosGrande from "../../assets/hexagonos-grande-verde.svg";

export const Background = styled.section`
  background-image: url(${hexagonosGrande});
  background-position: center right;
  background-repeat: no-repeat;
  background-size: contain;

  margin-top: 2rem;
  height: 88vh;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  grid-auto-rows: auto;
  column-gap: 1rem;
  row-gap: 2rem;
  align-content: center;
  justify-items: center;

  width: 70vw;

  > img {
    grid-column: 1 / 2;
    width: 100%;
  }
`;

export const Infos = styled.section`
  grid-column: 2 / 3;
  display: flex;
  flex-wrap: wrap;
  justify-content: end;
  align-content: center;
  gap: 2rem;
`;

export const HeaderTitulo = styled.h1`
  width: fit-content;
`;

export const HeaderSubTitulo = styled.h2`
  font-weight: 600;
  font-size: 3rem;
  text-align: right;

  font-family: var(--poppins);
`;

export const HeaderParagrafo = styled.p`
  font-weight: 500;
  font-size: 2rem;
  text-align: right;

  font-family: var(--nunito);
`;

export const HeaderNegrito = styled.strong`
  font-weight: 700;
  color: var(--verde-neon);
`;

export const Links = styled.div`
  display: flex;
  column-gap: 3rem;

  a {
    font-family: var(--poppins);
    font-size: 2rem;
    font-weight: 600;

    display: flex;
    gap: 0.5rem;

    background-color: var(--carbono);
    padding: 1rem 2rem;

    :hover {
      background-color: var(--cinza);
    }
  }
`;

export const Footer = styled.footer`
  grid-row: 2 / 2;
  grid-column: 1 / -1;

  display: flex;
  align-items: center;
  gap: 0.75rem;

  margin-top: 2rem;

  > img {
    height: 1.5rem;
  }
`;
