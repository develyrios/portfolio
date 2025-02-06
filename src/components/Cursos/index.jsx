import { Titulo1 } from "../../styles/Text";
import { Container } from "./style";
import { Curso } from "../Curso";
import ciaaDesktop from "../../assets/mockup-desktop-ciaa.svg";
import ciaaMobile from "../../assets/mockup-mobile-ciaa.svg";

export const Cursos = () => {
  return (
    <Container className="background b32">
      <Titulo1>Cursos e Certificações</Titulo1>
      <Curso
        imgDesktop={ciaaDesktop}
        imgMobile={ciaaMobile}
        nome="CIAA"
        descricao="Site feito pra uma comunidade do twitter. Nele foram usados conhecimentos de Desing Thinking, Git Flow, Conventional Commits e SCRUM."
        link="https://ciaa.vercel.app/"
        repositorio="https://github.com/develyrios/ciaa"
      />

      <Curso
        imgDesktop={ciaaDesktop}
        imgMobile={ciaaMobile}
        nome="CIAA"
        descricao="Site feito pra uma comunidade do twitter. Nele foram usados conhecimentos de Desing Thinking, Git Flow, Conventional Commits e SCRUM."
        link="https://ciaa.vercel.app/"
        repositorio="https://github.com/develyrios/ciaa"
      />

      <Curso
        imgDesktop={ciaaDesktop}
        imgMobile={ciaaMobile}
        nome="CIAA"
        descricao="Site feito pra uma comunidade do twitter. Nele foram usados conhecimentos de Desing Thinking, Git Flow, Conventional Commits e SCRUM."
        link="https://ciaa.vercel.app/"
        repositorio="https://github.com/develyrios/ciaa"
      />

      <Curso
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
