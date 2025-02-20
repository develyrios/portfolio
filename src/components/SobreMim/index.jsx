import { Paragrafo, Titulo1, Titulo2 } from "../../styles/Text";
import { Container, Ferramentas, Stacks, Resumo, Conteudo } from "./style";
import ts from "../../assets/icone-typescript-azul.svg";
import rct from "../../assets/icone-react-azul.svg";
import js from "../../assets/icone-javascript-azul.svg";
import css from "../../assets/icone-css-azul.svg";
import html from "../../assets/icone-html-azul.svg";
import { Item } from "../Item";

export const SobreMim = () => {
  return (
    <Container className="b32 background">
      <Titulo1>Sobre mim</Titulo1>

      <Conteudo>
        <Resumo>
          <Titulo2>Resumo</Titulo2>
          <Paragrafo>
            Sou Dev Front-End com uma paixão por comunicação e criação de
            conteúdo. A mentalidade que levo pra minha carreira e pros meus
            projetos é sempre buscar criar soluções de forma criativa e
            inovadora!
          </Paragrafo>

          <Paragrafo>
            Inteligência emocional é um dos meus pilares e a partir dela busco
            melhorar meu autoconhecimento. Gosto de me comunicar com pessoas,
            além de compartilhar e apresentar meus processos produtivos e
            resultados.
          </Paragrafo>

          <Paragrafo>
            Estou em busca de oportunidades como Junior ou Trainee na área de
            desenvolvimento front-end, em que eu possa exercer todas as minhas
            habilidades e competências além de poder crescer e evoluir como
            profissional.
          </Paragrafo>

          <Paragrafo>
            Vamos conversar sobre como posso agregar valor à sua equipe ou
            projeto?
          </Paragrafo>
        </Resumo>

        <Stacks>
          <Titulo2>Stacks</Titulo2>
          <ul>
            <Item imgSrc={ts} nome="TypeScript" />
            <Item imgSrc={rct} nome="React" />
            <Item imgSrc={js} nome="JavaScript" />
            <Item imgSrc={html} nome="CSS" />
            <Item imgSrc={css} nome="HTML" />
          </ul>
        </Stacks>

        <Ferramentas>
          <Titulo2>Ferramentas</Titulo2>
          <ul>
            <Item imgSrc={rct} nome="React" />
            <Item imgSrc={rct} nome="React" />
            <Item imgSrc={rct} nome="React" />
            <Item imgSrc={rct} nome="React" />
            <Item imgSrc={rct} nome="React" />
          </ul>
        </Ferramentas>
      </Conteudo>
    </Container>
  );
};
