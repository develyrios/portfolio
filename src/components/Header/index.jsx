import {
  Container,
  HeaderParagrafo,
  HeaderNegrito,
  HeaderSubTitulo,
  HeaderTitulo,
  Infos,
  Footer,
  Links,
  Background,
} from "./style";
import { Span } from "../../styles/Text";
import fotoDePerfil from "../../assets/foto.svg";
import logoGrande from "../../assets/logo-grande.svg";
import mouse from "../../assets/icone-mouse.svg";
import setas from "../../assets/icone-setas-brancas.svg";
import curriculo from "../../assets/icone-curriculo.svg";
import linkedin from "../../assets/icone-linkedin-verde.svg";

export const Header = () => {
  return (
    <Background className="b32 background">
      <Container>
        <img src={fotoDePerfil} alt="Foto de Bev Feitosa" />

        <Infos>
          <HeaderTitulo>
            <img src={logoGrande} alt="Bev Feitosa" />
          </HeaderTitulo>

          <HeaderSubTitulo>Dev Front-End</HeaderSubTitulo>
          <HeaderParagrafo>
            Quero construir um futuro que{" "}
            <HeaderNegrito>minha existência</HeaderNegrito> seja{" "}
            <HeaderNegrito>inevitável</HeaderNegrito>. Vem comigo?
          </HeaderParagrafo>

          <Links>
            <a href="#" className="b16">
              <img src={curriculo} /> Currículo
            </a>
            <a
              href="https://www.linkedin.com/in/bevfeitosa"
              className="b16"
              target="blank"
            >
              <img src={linkedin} /> Linkedin
            </a>
          </Links>
        </Infos>

        <Footer>
          <img src={mouse} />
          <Span>Role para baixo</Span>
          <img src={setas} />
        </Footer>
      </Container>
    </Background>
  );
};
