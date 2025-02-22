import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2::before {
    content: " ";
    background-color: var(--verde-neon);
    display: inline-block;
    height: 1.5rem;
    width: 0.25rem;
    margin-right: 0.25rem;
  }
`;

export const Conteudo = styled.div`
  display: flex;
  gap: 4rem;

  position: relative;

  > section,
  ul {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  ::before {
    content: " ";
    display: inline-block;
    background-color: var(--detalhe);
    height: 90%;
    width: 0.125rem;
    position: absolute;
    left: 50%;
    top: 10%;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
    gap: 2rem;

    > section,
    ul {
      gap: 1rem;
    }

    ::before {
      display: none;
    }
  }
`;

export const Linkedin = styled.section``;
export const Instagram = styled.section``;

export const Post = styled.li`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: auto auto 1fr;
  align-items: end;
  column-gap: 1rem;
  row-gap: 0.5rem;

  > img {
    grid-column: 1 / 2;
    grid-row: 1 / 4;

    width: 200px;
    height: 200px;
  }

  h3 {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
  }

  p {
    grid-column: 2 / 3;
    grid-row: 2 / 3;

    width: 25ch;
  }

  a {
    font-family: var(--nunito);

    grid-column: 2 / 3;
    grid-row: 3 / 4;

    width: fit-content;

    border-bottom: 0.125rem solid transparent;
    transition: 400ms;
  }

  a:hover {
    border-bottom: 0.125rem solid var(--verde-neon);
  }

  a > img {
    height: 0.75rem;
    margin-left: 0.25rem;
  }

  @media (max-width: 1000px) {
    position: relative;

    :nth-child(odd)::after {
      content: " ";
      display: inline-block;
      background-color: var(--detalhe);
      height: 0.1rem;
      width: 100%;
      position: absolute;
      bottom: -0.6rem;
    }
  }

  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    align-items: start;
  }
`;
