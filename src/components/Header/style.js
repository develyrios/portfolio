import styled from "styled-components";
import hexagonosGrande from "../../assets/hexagonos-grande-verde.svg";

export const Container = styled.section`
  background-image: url(${hexagonosGrande});
  background-position: center right;
  background-repeat: no-repeat;
  background-size: contain;

  height: 90vh;
  margin-top: 3rem;

  > img {
    grid-column: 2 / 5;
    width: 100%;
  }
`;

export const Infos = styled.section`
  grid-column: 6 / 11;
  display: flex;
  flex-wrap: wrap;
  justify-content: end;
  align-content: center;
  gap: 2rem;
`;

export const HeaderTitle = styled.h1`
  width: fit-content;
`;

export const HeaderSubTitle = styled.h2`
  font-weight: 600;
  font-size: 3rem;
  text-align: right;
`;

export const HeaderParagraph = styled.p`
  font-weight: 500;
  font-size: 2rem;
  text-align: right;
`;

export const HeaderParagraphStrong = styled.strong`
  font-weight: 700;
  font-size: 2rem;
  color: var(--verde-neon);
`;

export const Links = styled.div`
  display: flex;
  column-gap: 3rem;

  a {
    font-size: 2rem;
    font-weight: 600;

    display: flex;
    gap: 0.5rem;

    background-color: var(--carbono);
    padding: 1rem 2rem;
  }
`;

export const Footer = styled.footer`
  display: flex;
  grid-row: 2 / 2;
  grid-column: 6 / 8;
  gap: 1rem;

  margin-top: 2rem;
`;
