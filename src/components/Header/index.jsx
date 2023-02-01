import { Container, Infobox } from "./style"
import { Title1 } from "../../styles/Text"
import profilePicture from "../../assets/profile-picture.svg"

export const Header = () => {
    return (
        <Container className="border-major border-shadow-major">
            <img 
                src={profilePicture}
                alt="Foto de Bev. Pessoa de pele branca, cabelo castanho, blusa
                preta de gola alta e fundo sólido azul."/>

            <Infobox>
                <Title1>Bev Feitosa</Title1>
                <Title1>ê/elu/-e</Title1>
                <Title1>Dev Front-end</Title1>
            </Infobox>
        </Container>
    )
}