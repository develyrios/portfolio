import {
  Container,
  HeaderParagraph,
  HeaderParagraphStrong,
  HeaderSubTitle,
  HeaderTitle,
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
        <HeaderTitle>
          <img src={logoGrande} alt="Bev Feitosa" />
        </HeaderTitle>

        <HeaderSubTitle className="poppins">Dev Front-End</HeaderSubTitle>
        <HeaderParagraph className="nunito">
          Lorem ipsum dolor sit{" "}
          <HeaderParagraphStrong>
            amet, consectetur adipiscing elit
          </HeaderParagraphStrong>
          . Suspendisse mattis id enim quis porta.
        </HeaderParagraph>

        <Links>
          <a href="#" className="poppins b16">
            <img src={curriculo} /> Currículo
          </a>
          <a href="" className="poppins b16">
            <img src={linkedin} /> Linkedin
          </a>
        </Links>
      </Infos>

      <Footer>
        <img src={mouse} />
        <Span className="nunito">Role para baixo</Span>
        <img src={setas} />
      </Footer>
    </Container>
  );
};
