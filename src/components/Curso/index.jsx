import { Titulo2, Paragrafo, Span } from "../../styles/Text";
import { Container, Mockup, Texto, Links, Conteudo } from "./style";
import { Item } from "../Item";
import iconeLink from "../../assets/icone-link-azul.svg";
import github from "../../assets/icone-github-azul.svg";
import ampulheta from "../../assets/icone-ampulheta-azul.svg";

export const Curso = ({
  imgDesktop,
  imgMobile,
  nome,
  instituicao,
  ano,
  descricao,
  stacks,
  nomeDoProjeto,
  link,
  repositorio,
}) => {
  return (
    <Container>
      <Conteudo>
        <Texto>
          <Titulo2>{nome}</Titulo2>
          <Span>
            <strong>{instituicao}</strong> - {ano}
          </Span>
          <Paragrafo>{descricao}</Paragrafo>
          <Paragrafo>
            <strong>Stacks</strong>: {stacks}
          </Paragrafo>
        </Texto>

        <Mockup>
          <img src={imgDesktop} alt="Mockup desktop" />
          <img src={imgMobile} alt="Mockup mobile" />
        </Mockup>
      </Conteudo>

      {link && repositorio ? (
        <Links>
          <a href={link} target="blank">
            <Item
              imgSrc={iconeLink}
              imgAlt="(Abre o link do projeto em uma nova guia)"
              nome={nomeDoProjeto}
            />
          </a>
          <a href={repositorio} target="blank">
            <Item
              imgSrc={github}
              imgAlt="(Abre o repositório do projeto em uma nova guia)"
              nome={nomeDoProjeto}
            />
          </a>
        </Links>
      ) : (
        <Links>
          <Item
            imgSrc={ampulheta}
            imgAlt=""
            nome="Projeto disponível em breve"
          />
        </Links>
      )}
    </Container>
  );
};
