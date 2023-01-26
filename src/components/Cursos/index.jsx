import { Span, Title1, Title2 } from "../../styles/Text"
import { Container, CursosGroup, CursoBox, TextRow } from "./style"
import { FaHtml5, FaCss3Alt, FaReact, FaJava, FaGraduationCap } from "react-icons/fa"
import { SiJavascript, SiTypescript } from "react-icons/si"
import iconTAL from "../../assets/icon-todas.svg"
import iconAlura from "../../assets/icon-alura.svg"



export const Cursos = () => {
    return (
        <Container className="border-major border-shadow-major">
            <Title1>Cursos</Title1>

            <CursosGroup>
                <CursoBox className="border-minor border-shadow-minor">
                    <Title2>React School</Title2>

                    <TextRow>
                        <img src="https://s3-sa-east-1.amazonaws.com/prod-jobsite-files.kenoby.com/uploads/mjv-1585853217-logo-header-10png.png"/>
                        <Span>MJV Innovation & Technology</Span>
                    </TextRow>

                    <TextRow>
                        <FaReact />
                        <SiTypescript />
                    </TextRow>
                </CursoBox>
                
                <CursoBox className="border-minor border-shadow-minor">
                    <Title2>Java School</Title2>

                    <TextRow>
                        <img src="https://s3-sa-east-1.amazonaws.com/prod-jobsite-files.kenoby.com/uploads/mjv-1585853217-logo-header-10png.png"/>
                        <Span>MJV Innovation & Technology</Span>
                    </TextRow>

                    <FaJava />
                </CursoBox>

                <CursoBox className="border-minor border-shadow-minor">
                    <Title2>Imersão Frontend</Title2>

                    <TextRow>
                        <img src={iconTAL} />
                        <Span>Todas as Letras</Span>
                    </TextRow>

                    <TextRow>
                        <FaHtml5 />
                        <FaCss3Alt />
                        <SiJavascript />
                    </TextRow>
                </CursoBox>

                <CursoBox className="border-minor border-shadow-minor">
                    <Title2>Formação Frontend</Title2>

                    <TextRow>
                        <img src={iconAlura} />
                        <Span>Alura</Span>
                    </TextRow>

                    <TextRow>
                        <FaHtml5 />
                        <FaCss3Alt />
                        <SiJavascript />
                    </TextRow>
                </CursoBox>

                <CursoBox className="border-minor border-shadow-minor">
                    <Title2>Engenharia de Materiais</Title2>
                    <Span>Universidade Federal do Cariri</Span>
                    <TextRow>
                        <FaGraduationCap />
                        <Span>Graduação</Span>
                    </TextRow>
                </CursoBox>

            </CursosGroup>
        </Container>
    )
}