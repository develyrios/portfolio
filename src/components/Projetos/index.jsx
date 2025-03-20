import { Titulo1 } from "../../styles/Text";
import { Container } from "./style";
import { Projeto } from "../Projeto";
import bevVersoDesktop from "../../assets/mockup-desktop-bevverso.svg";
import bevVersoMobile from "../../assets/mockup-mobile-bevverso.svg";
import ciaaDesktop from "../../assets/mockup-desktop-ciaa.svg";
import ciaaMobile from "../../assets/mockup-mobile-ciaa.svg";
import universeDesktop from "../../assets/mockup-desktop-universe.svg";
import universeMobile from "../../assets/mockup-mobile-universe.svg";

export const Projetos = () => {
  return (
    <Container className="background">
      <Titulo1>Projetos</Titulo1>
      <ul>
        <Projeto
          imgDesktop={bevVersoDesktop}
          imgMobile={bevVersoMobile}
          nome="Bev Verso"
          descricao="Meu laboratório de testes. Aqui documento fundamentos e faço treinos de trechos de códigos e funcionalidades isoladas para usar em projetos maiores."
          stacks="React"
          link="https://bev-verso.vercel.app/"
          repositorio="https://github.com/develyrios/bev-verso"
        />

        <Projeto
          imgDesktop={ciaaDesktop}
          imgMobile={ciaaMobile}
          nome="CIAA"
          descricao="Site feito pra uma comunidade do twitter. Nele foram usados conhecimentos de Desing Thinking, Git Flow, Conventional Commits e SCRUM."
          stacks="React"
          link="https://ciaa.vercel.app/"
          repositorio="https://github.com/develyrios/ciaa"
        />

        <Projeto
          imgDesktop={universeDesktop}
          imgMobile={universeMobile}
          nome="universe"
          descricao="Rede social fictícia de astronomia. Desenvolvi o projeto para o curso de Front-End Básico do TransDevs que ministrei. Foi pensado para alunes reproduzirem usando os conhecimentos passados."
          stacks="HTML e CSS"
        />
      </ul>
    </Container>
  );
};
