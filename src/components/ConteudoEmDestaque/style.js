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

  > section {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  ::before {
    content: " ";
    display: inline-block;
    background-color: #353739;
    height: 90%;
    width: 0.125rem;
    position: absolute;
    left: 50%;
    top: 10%;
  }
`;

export const Post = styled.article`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: auto 1fr;
  align-items: end;
  gap: 1rem;

  > img {
    grid-column: 1 / 2;
    grid-row: 1 / 3;

    width: 200px;
    height: 200px;
  }

  p {
    grid-column: 2 / 3;
    grid-row: 1 / 2;

    width: 25ch;
  }

  a {
    font-family: var(--nunito);

    grid-column: 2 / 3;
    grid-row: 2 / 3;

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
`;
