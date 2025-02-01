import {
  Container,
  HeaderParagrafo,
  HeaderNegrito,
  HeaderSubTitulo,
  HeaderTitulo,
  Infos,
  Footer,
  Links,
} from "./style";
import { Span } from "../../styles/Text";
import fotoDePerfil from "../../assets/foto.svg";
import logoGrande from "../../assets/logo-grande.svg";
import mouse from "../../assets/icone-mouse.svg";
import setas from "../../assets/icone-setas-brancas.svg";
import curriculo from "../../assets/icone-curriculo.svg";
import linkedin from "../../assets/icone-linkedin.svg";

export const Header = () => {
  return (
    <Container className="layout-grid b32">
      <img src={fotoDePerfil} alt="Foto de Bev Feitosa" />

      <Infos>
        <HeaderTitulo>
          <img src={logoGrande} alt="Bev Feitosa" />
        </HeaderTitulo>

        <HeaderSubTitulo>Dev Front-End</HeaderSubTitulo>
        <HeaderParagrafo>
          Lorem ipsum dolor sit{" "}
          <HeaderNegrito>amet, consectetur adipiscing elit</HeaderNegrito>.
          Suspendisse mattis id enim quis porta.
        </HeaderParagrafo>

        <Links>
          <a href="#" className="b16">
            <img src={curriculo} /> Currículo
          </a>
          <a href="" className="b16">
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
  );
};
