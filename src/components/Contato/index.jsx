import { Span, Titulo1 } from "../../styles/Text";
import { Container, Redes } from "./style";
import { Item } from "../Item";
import linkedin from "../../assets/icone-linkedin-azul.svg";
import github from "../../assets/icone-github-azul.svg";

export const Contato = () => {
  return (
    <Container>
      <Titulo1>Contato</Titulo1>

      <Redes>
        <a href="mailto:bevfeitosa@gmail.com">
          <Item
            imgSrc={linkedin}
            imgAlt="(Abre uma nova guia para enviar um e-mail)"
            nome="E-mail"
          />
        </a>

        <a href="https://www.linkedin.com/in/bevfeitosa/">
          <Item
            imgSrc={linkedin}
            imgAlt="(Abre uma nova guia)"
            nome="LinkedIn"
          />
        </a>

        <a href="https://github.com/develyrios">
          <Item imgSrc={github} imgAlt="(Abre uma nova guia)" nome="Github" />
        </a>

        <a href="https://instagram.com/develyrios#">
          <Item
            imgSrc={github}
            imgAlt="(Abre uma nova guia)"
            nome="Instagram"
          />
        </a>
      </Redes>

      <Span>Desenhado e desenvolvido por Bev Feitosa - 2025</Span>
    </Container>
  );
};
