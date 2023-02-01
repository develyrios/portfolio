import { Title1 } from "../../styles/Text"
import { Container, SocialLinks } from "./style"
import { BsLinkedin, BsGithub } from 'react-icons/bs'

export const Social = () => {
    return (
        <Container className="border-major border-shadow-major">
            <Title1>Redes</Title1>
            <SocialLinks>
                <a  href="https://linkedin.com/in/bevfeitosa" target="_blank">
                    <BsLinkedin />
                </a>
                <a  href="https://github.com/develyrios" target="_blank">
                    <BsGithub />
                </a>
            </SocialLinks>
        </Container>
    )
}