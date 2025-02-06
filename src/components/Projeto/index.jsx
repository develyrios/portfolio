import { Titulo2, Paragrafo } from "../../styles/Text";
import { Container, Mockup, Texto, Links, Conteudo } from "./style";
import { Item } from "../Item";
import iconeLink from "../../assets/icone-link-verde.svg";
import github from "../../assets/icone-github-verde.svg";

export const Projeto = ({
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
        <Mockup>
          <img src={imgDesktop} alt="" />
          <img src={imgMobile} alt="" />
        </Mockup>

        <Texto>
          <Titulo2>{nome}</Titulo2>
          <Paragrafo>{descricao}</Paragrafo>
        </Texto>
      </Conteudo>

      <Links>
        <a href={link}>
          <Item imgSrc={iconeLink} nome="Link" />
        </a>
        <a href={repositorio}>
          <Item imgSrc={github} nome="Repositório" />
        </a>
      </Links>
    </Container>
  );
};
