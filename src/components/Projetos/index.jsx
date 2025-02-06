import { Titulo1 } from "../../styles/Text";
import { Container } from "./style";
import { Projeto } from "../Projeto";
import ciaaDesktop from "../../assets/mockup-desktop-ciaa.svg";
import ciaaMobile from "../../assets/mockup-mobile-ciaa.svg";

export const Projetos = () => {
  return (
    <Container className="background">
      <Titulo1>Projetos</Titulo1>
      <Projeto
        imgDesktop={ciaaDesktop}
        imgMobile={ciaaMobile}
        nome="CIAA"
        descricao="Site feito pra uma comunidade do twitter. Nele foram usados conhecimentos de Desing Thinking, Git Flow, Conventional Commits e SCRUM."
        link="https://ciaa.vercel.app/"
        repositorio="https://github.com/develyrios/ciaa"
      />

      <Projeto
        imgDesktop={ciaaDesktop}
        imgMobile={ciaaMobile}
        nome="CIAA"
        descricao="Site feito pra uma comunidade do twitter. Nele foram usados conhecimentos de Desing Thinking, Git Flow, Conventional Commits e SCRUM."
        link="https://ciaa.vercel.app/"
        repositorio="https://github.com/develyrios/ciaa"
      />

      <Projeto
        imgDesktop={ciaaDesktop}
        imgMobile={ciaaMobile}
        nome="CIAA"
        descricao="Site feito pra uma comunidade do twitter. Nele foram usados conhecimentos de Desing Thinking, Git Flow, Conventional Commits e SCRUM."
        link="https://ciaa.vercel.app/"
        repositorio="https://github.com/develyrios/ciaa"
      />

      <Projeto
        imgDesktop={ciaaDesktop}
        imgMobile={ciaaMobile}
        nome="CIAA"
        descricao="Site feito pra uma comunidade do twitter. Nele foram usados conhecimentos de Desing Thinking, Git Flow, Conventional Commits e SCRUM."
        link="https://ciaa.vercel.app/"
        repositorio="https://github.com/develyrios/ciaa"
      />
    </Container>
  );
};
