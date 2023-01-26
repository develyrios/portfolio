import { Span, Title1 } from "../../styles/Text"
import { Container, TechnologiesGroup, TechnologyBox } from "./style"
import { FaHtml5, FaCss3Alt, FaReact, FaJava } from "react-icons/fa"
import { SiJavascript, SiTypescript } from "react-icons/si"


export const Technologies = () => {
    return (
        <Container className="border-major border-shadow-major">
            <Title1>Tecnologias</Title1>

            <TechnologiesGroup>
                <TechnologyBox className="border-minor border-shadow-minor">
                    <FaHtml5 />
                    <Span>HTML</Span>
                </TechnologyBox>
                
                <TechnologyBox className="border-minor border-shadow-minor">
                    <FaCss3Alt />
                    <Span>CSS</Span>
                </TechnologyBox>

                <TechnologyBox className="border-minor border-shadow-minor">
                    <SiJavascript />
                    <Span>JavaScript</Span>
                </TechnologyBox>

                <TechnologyBox className="border-minor border-shadow-minor">
                    <FaReact />
                    <Span>React</Span>
                </TechnologyBox>

                <TechnologyBox className="border-minor border-shadow-minor">
                    <SiTypescript />
                    <Span>TypeScript</Span>
                </TechnologyBox>

                <TechnologyBox className="border-minor border-shadow-minor">
                    <FaJava />
                    <Span>Java</Span>
                </TechnologyBox>
            </TechnologiesGroup>
        </Container>
    )
}