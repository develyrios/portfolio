import { Paragraph, Title1 } from "../../styles/Text"
import { Container } from "./style"

export const Bio = () => {
    return (
        <Container className="border-major border-shadow-major">
            <Title1>Sobre</Title1>
            <Paragraph>
                Meu foco atual é uma colocação no mercado de 
                Desenvolvimento Front-end  como trainee ou junior, 
                tanto remoto como presencial.
            </Paragraph>
            <Paragraph>
                Gosto de resolver problemas, trabalhar em equipe, aprender 
                coisas novas e aprimorar o que já sei. Faço uso de ferramentas 
                como Git, Github, Figma, VS Code e Trello. Adoro criar e 
                desenvolver ideias, fazendo elas saírem do papel e aprimorá-las 
                sempre que preciso.
            </Paragraph>
            <Paragraph>
                Amo me comunicar com pessoas e compartilhar meus processos produtivos e resultados.
            </Paragraph>
        </Container>
    )
}