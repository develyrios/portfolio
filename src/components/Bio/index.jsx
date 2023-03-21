import { Paragraph, Title1 } from "../../styles/Text"
import { Container } from "./style"

export const Bio = () => {
    return (
        <Container className="border-major border-shadow-major">
            <Title1>Sobre</Title1>
            <Paragraph>
                Tenho formação em Engenharia de Materiais e meu foco atual é 
                colocação no mercado de Desenvolvimento Front-end como trainee 
                ou junior tanto remoto como presencial.
            </Paragraph>
            <Paragraph>
                Gosto de resolver problemas, trabalhar em equipe, aprender 
                coisas novas e aprimorar o que já sei. Faço uso de ferramentas 
                como Git, Github, Figma e Trello, além das linguagens descritas
                na seção "Tecnologias". Também gosto de criar e 
                desenvolver ideias, fazendo elas saírem do papel e aprimorá-las 
                sempre que preciso.
            </Paragraph>
            <Paragraph>
                Estou há cerca de um ano estudando desenvolvimento front-end. Durante 
                minha jornada já fiz diversos cursos, aplicando sempre que possível os 
                conhecimentos adquiridos em projetos pessoais e no meu portfólio.
            </Paragraph>
        </Container>
    )
}