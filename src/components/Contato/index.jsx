import { Span, Titulo1, Titulo3 } from "../../styles/Text";
import { Container, Links } from "./style";
import { Item } from "../Item";
import linkedin from "../../assets/icone-linkedin-azul.svg";
import github from "../../assets/icone-github-azul.svg";
import instagram from "../../assets/icone-instagram.svg";

export const Redes = () => {
  return (
    <Container>
      <Titulo1>Redes</Titulo1>

      <Links>
        <a href="https://www.linkedin.com/in/bevfeitosa/" target="blank">
          <Item
            imgSrc={linkedin}
            imgAlt="(Abre uma nova guia)"
            nome="LinkedIn"
          />
        </a>

        <a href="https://github.com/develyrios" target="blank">
          <Item imgSrc={github} imgAlt="(Abre uma nova guia)" nome="Github" />
        </a>

        <a href="https://instagram.com/develyrios#" target="blank">
          <Item
            imgSrc={instagram}
            imgAlt="(Abre uma nova guia)"
            nome="Instagram"
          />
        </a>
      </Links>

      <Titulo3>
        Me mande um e-mail:{" "}
        <a href="mailto:bevfeitosa@gmail.com">
          <strong>bevfeitosa@gmail.com</strong>
        </a>
      </Titulo3>

      <Span>Desenhado e desenvolvido por Bev Feitosa - 2025</Span>
    </Container>
  );
};
