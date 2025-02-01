import { Paragrafo, Span, Titulo1, Titulo2 } from "../../styles/Text";
import { Container, Ferramentas, Stacks, Resumo, Item } from "./style";
import ts from "../../assets/icone-typescript.svg";
import rct from "../../assets/icone-react.svg";
import js from "../../assets/icone-javascript.svg";
import css from "../../assets/icone-css.svg";
import html from "../../assets/icone-html.svg";

export const SobreMim = () => {
  return (
    <Container className="layout-grid b32">
      <Titulo1>Sobre mim</Titulo1>

      <Resumo>
        <Titulo2>Resumo</Titulo2>
        <Paragrafo>
          Tenho formação em Engenharia de Materiais e meu foco atual é colocação
          no mercado de Desenvolvimento Front-end como trainee ou junior tanto
          remoto como presencial.
        </Paragrafo>

        <Paragrafo>
          Gosto de resolver problemas, trabalhar em equipe, aprender coisas
          novas e aprimorar o que já sei. Faço uso de ferramentas como Git,
          Github, Figma e Trello, além das linguagens descritas na seção
          "Tecnologias". Também gosto de criar e desenvolver ideias, fazendo
          elas saírem do papel e aprimorá-las sempre que preciso.
        </Paragrafo>

        <Paragrafo>
          Estou há cerca de um ano estudando desenvolvimento front-end. Durante
          minha jornada já fiz diversos cursos, aplicando sempre que possível os
          conhecimentos adquiridos em projetos pessoais e no meu portfólio.
        </Paragrafo>
      </Resumo>

      <Stacks>
        <Titulo2>Stacks</Titulo2>
        <Item className="b8">
          <img src={ts} alt="" />
          <Span>TypeScript</Span>
        </Item>
        <Item className="b8">
          <img src={rct} alt="" />
          <Span>React</Span>
        </Item>
        <Item className="b8">
          <img src={js} alt="" />
          <Span>JavaScript</Span>
        </Item>
        <Item className="b8">
          <img src={css} alt="" />
          <Span>CSS</Span>
        </Item>
        <Item className="b8">
          <img src={html} alt="" />
          <Span>HTML</Span>
        </Item>
      </Stacks>

      <Ferramentas>
        <Titulo2>Ferramentas</Titulo2>
        <Item className="b8">
          <img src={ts} alt="" />
          <Span>TypeScript</Span>
        </Item>
        <Item className="b8">
          <img src={rct} alt="" />
          <Span>React</Span>
        </Item>
        <Item className="b8">
          <img src={js} alt="" />
          <Span>JavaScript</Span>
        </Item>
        <Item className="b8">
          <img src={css} alt="" />
          <Span>CSS</Span>
        </Item>
        <Item className="b8">
          <img src={html} alt="" />
          <Span>HTML</Span>
        </Item>
      </Ferramentas>
    </Container>
  );
};
