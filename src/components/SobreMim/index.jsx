import { Paragrafo, Titulo1, Titulo2 } from "../../styles/Text";
import {
  Container,
  Ferramentas,
  Stacks,
  Resumo,
  Conteudo,
  Tecnologias,
} from "./style";
import rct from "../../assets/icone-react-azul.svg";
import js from "../../assets/icone-javascript-azul.svg";
import css from "../../assets/icone-css-azul.svg";
import html from "../../assets/icone-html-azul.svg";
import git from "../../assets/icone-git-azul.svg";
import github from "../../assets/icone-github-azul.svg";
import trello from "../../assets/icone-trello-azul.svg";
import figma from "../../assets/icone-figma-azul.svg";
import { Item } from "../Item";

export const SobreMim = () => {
  return (
    <Container className="b32 background">
      <Titulo1>Sobre mim</Titulo1>

      <Conteudo>
        <Resumo>
          <Titulo2>Resumo</Titulo2>
          <Paragrafo>
            Sou <strong>Dev Front-End</strong> com uma paixão por comunicação e
            criação de conteúdo. A mentalidade que levo pra minha carreira e
            pros meus projetos é sempre buscar criar soluções de forma criativa
            e inovadora!
          </Paragrafo>

          <Paragrafo>
            <strong>Inteligência emocional</strong> é um dos meus pilares e a
            partir dela busco melhorar meu autoconhecimento.{" "}
            <strong>Comunicação é o meu forte</strong>: gosto de falar com
            pessoas, além de compartilhar e apresentar meus processos produtivos
            e resultados
          </Paragrafo>

          <Paragrafo>
            <strong>Estou em busca de oportunidades como Junior</strong> na área
            de desenvolvimento front-end, em que eu possa exercer todas as
            minhas habilidades e competências além de poder crescer e evoluir
            como profissional.
          </Paragrafo>

          <Paragrafo>
            <strong>
              Vamos conversar sobre como posso agregar valor à sua equipe ou
              projeto?
            </strong>{" "}
            Ao final da página você encontra minhas informações para contato.
          </Paragrafo>
        </Resumo>

        <Tecnologias>
          <Stacks>
            <Titulo2>Stacks</Titulo2>
            <ul>
              <Item imgSrc={rct} nome="React" />
              <Item imgSrc={js} nome="JavaScript" />
              <Item imgSrc={html} nome="CSS" />
              <Item imgSrc={css} nome="HTML" />
            </ul>
          </Stacks>

          <Ferramentas>
            <Titulo2>Ferramentas</Titulo2>
            <ul>
              <Item imgSrc={git} nome="Git" />
              <Item imgSrc={github} nome="Github" />
              <Item imgSrc={rct} nome="Styled Components" />
              <Item imgSrc={trello} nome="Trello" />
              <Item imgSrc={figma} nome="Figma" />
            </ul>
          </Ferramentas>
        </Tecnologias>
      </Conteudo>
    </Container>
  );
};
