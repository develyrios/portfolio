import { Titulo2, Paragrafo } from "../../styles/Text";
import { Container, Mockup, Texto, Links, Conteudo } from "./style";
import { Item } from "../Item";
import iconeLink from "../../assets/icone-link-verde.svg";
import github from "../../assets/icone-github-verde.svg";
import ampulheta from "../../assets/icone-ampulheta-verde.svg";

export const Projeto = ({
  imgDesktop,
  imgMobile,
  nome,
  descricao,
  stacks,
  link,
  repositorio,
}) => {
  return (
    <Container>
      <Conteudo>
        <Mockup>
          <img src={imgDesktop} alt="Mockup desktop" />
          <img src={imgMobile} alt="Mockup mobile" />
        </Mockup>

        <Texto>
          <Titulo2>{nome}</Titulo2>
          <Paragrafo>{descricao}</Paragrafo>
          <Paragrafo>
            <strong>Stacks</strong>: {stacks}
          </Paragrafo>
        </Texto>
      </Conteudo>

      {link && repositorio ? (
        <Links>
          <a href={link} target="blank">
            <Item
              imgSrc={iconeLink}
              imgAlt="(Abre uma nova guia)"
              nome="Link"
            />
          </a>
          <a href={repositorio} target="blank">
            <Item
              imgSrc={github}
              imgAlt="(Abre uma nova guia)"
              nome="Repositório"
            />
          </a>
        </Links>
      ) : (
        <Links>
          <Item imgSrc={ampulheta} imgAlt="" nome="Disponível em breve" />
        </Links>
      )}
    </Container>
  );
};
