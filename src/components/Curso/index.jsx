import { Titulo2, Paragrafo } from "../../styles/Text";
import { Container, Mockup, Texto, Links, Conteudo } from "./style";
import { Item } from "../Item";
import iconeLink from "../../assets/icone-link-azul.svg";
import github from "../../assets/icone-github-azul.svg";

export const Curso = ({
  imgDesktop,
  imgMobile,
  nome,
  descricao,
  link,
  repositorio,
}) => {
  return (
    <Container>
      <Conteudo>
        <Texto>
          <Titulo2>{nome}</Titulo2>
          <Paragrafo>{descricao}</Paragrafo>
        </Texto>

        <Mockup>
          <img src={imgDesktop} alt="" />
          <img src={imgMobile} alt="" />
        </Mockup>
      </Conteudo>

      <Links>
        <a href={link}>
          <Item imgSrc={iconeLink} nome="Link do projeto" />
        </a>
        <a href={repositorio}>
          <Item imgSrc={github} nome="Repositório do projeto" />
        </a>
      </Links>
    </Container>
  );
};
