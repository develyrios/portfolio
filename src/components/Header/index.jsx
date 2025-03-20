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
import logoPequena from "../../assets/logo-pequena.svg";
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
            <img src={logoGrande} className="logo-grande" alt="Bev Feitosa" />
            <img src={logoPequena} className="logo-pequena" alt="Bev Feitosa" />
          </HeaderTitulo>

          <HeaderSubTitulo>Dev Front-End</HeaderSubTitulo>
        </Infos>

        <HeaderParagrafo>
          Resolvo problemas de forma <strong>multidisciplinar</strong> e{" "}
          <strong>criativa</strong>, tendo <strong>comunicação</strong> e{" "}
          <strong>inteligência emocional</strong> como pilares. Vamos nos
          conectar?
        </HeaderParagrafo>

        <Links>
          {/* <li>
            <a href="#" className="b16" target="blank">
              <img src={curriculo} alt="(Abre uma nova guia)" /> Currículo
            </a>
          </li> */}
          <li>
            <a
              href="https://www.linkedin.com/in/bevfeitosa"
              className="b16"
              target="blank"
            >
              <img src={linkedin} alt="(Abre uma nova guia)" /> Linkedin
            </a>
          </li>
        </Links>

        <Footer>
          <img src={mouse} />
          <Span>Role para baixo</Span>
          <img src={setas} />
        </Footer>
      </Container>
    </Background>
  );
};
