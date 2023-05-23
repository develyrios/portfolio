import { Paragraph, Title1, Title2, Span } from "../../styles/Text"
import { Container, ContentRow, ProjectBox, ProjectsGroup } from "./style"
import { BsLink45Deg, BsGithub } from "react-icons/bs"
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa"
import { SiJavascript, SiTypescript } from "react-icons/si"
import aquiexpress from "../../assets/preview-aquiexpress.svg"
import adopet from "../../assets/preview-adopet.svg"
import bevVerso from "../../assets/preview-bev-verso.svg"
import ciaa from "../../assets/preview-ciaa.svg"

export  const MyProjects = () => {
    return (
        <Container className="border-major border-shadow-major">
            <Title1>Projetos</Title1>

            <ProjectsGroup>
                <ProjectBox className="border-minor border-shadow-minor">
                    <img src={bevVerso} />

                    <Title2>Bev verso</Title2>

                    <Paragraph>
                        Meu laboratório de testes. Aqui documento fundamentos e faço treinos de
                        trechos de códigos e funcionalidades isoladas para usar em projetos maiores.
                    </Paragraph>

                    <ContentRow>
                        <a  href="https://bev-verso.vercel.app/" target="_blank" className="border-minor border-shadow-minor">
                            <BsLink45Deg />
                            <Span>Link</Span>
                        </a>

                        <a  href="https://github.com/develyrios/bev-verso" target="_blank" className="border-minor border-shadow-minor">
                            <BsGithub />
                            <Span>Repositório</Span>
                        </a>
                    </ContentRow>

                    <ContentRow>
                        <FaReact />
                    </ContentRow>
                </ProjectBox>

                <ProjectBox className="border-minor border-shadow-minor">
                    <img src={aquiexpress} />

                    <Title2>Aquiexpress</Title2>

                    <Paragraph>
                        Projeto final do curso React School. Foi desenvolvido em grupo, 
                        sendo eu responsável pela responsividade do site e pela revisão do código.
                    </Paragraph>

                    <ContentRow>
                        <a  href="https://aquiexpress.vercel.app/" target="_blank" className="border-minor border-shadow-minor">
                            <BsLink45Deg />
                            <Span>Link</Span>
                        </a>

                        <a  href="https://github.com/mjvturma07/ProjetoMJV" target="_blank" className="border-minor border-shadow-minor">
                            <BsGithub />
                            <Span>Repositório</Span>
                        </a>
                    </ContentRow>

                    <ContentRow>
                        <FaReact />
                        <SiTypescript />
                    </ContentRow>
                </ProjectBox>

                <ProjectBox className="border-minor border-shadow-minor">
                    <img src={ciaa} />

                    <Title2>CIAA - Site Oficial</Title2>

                    <Paragraph>
                        Site feito pra uma comunidade do twitter. Nele foram usados conhecimentos de Desing Thinking, Git Flow, Conventional Commits e SCRUM.
                    </Paragraph>

                    <ContentRow>
                        <a  href="https://ciaa.vercel.app/" target="_blank" className="border-minor border-shadow-minor">
                            <BsLink45Deg />
                            <Span>Link</Span>
                        </a>

                        <a  href="https://github.com/develyrios/ciaa" target="_blank" className="border-minor border-shadow-minor">
                            <BsGithub />
                            <Span>Repositório</Span>
                        </a>
                    </ContentRow>

                    <ContentRow>
                        <FaReact />
                    </ContentRow>
                </ProjectBox>

                <ProjectBox className="border-minor border-shadow-minor">
                    <img src={adopet} />

                    <Title2>Adopet</Title2>

                    <Paragraph>
                        Projeto desenvolvido durante a imersão dev da alura.
                        O site foi desenvolvido em mobile-first e a partir de um layout pronto no figma.
                    </Paragraph>

                    <ContentRow>
                        <a  href="https://adopets-develyrios.vercel.app/" target="_blank" className="border-minor border-shadow-minor">
                            <BsLink45Deg />
                            <Span>Link</Span>
                        </a>

                        <a  href="https://github.com/develyrios/adopet" target="_blank" className="border-minor border-shadow-minor">
                            <BsGithub />
                            <Span>Repositório</Span>
                        </a>
                    </ContentRow>

                    <ContentRow>
                        <FaHtml5 />
                        <FaCss3Alt />
                    </ContentRow>
                </ProjectBox>

            </ProjectsGroup>
        </Container>
    )
}