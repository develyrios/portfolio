import { Paragrafo, Titulo1, Titulo2, Titulo3 } from "../../styles/Text";
import { Container, Conteudo, Linkedin, Instagram, Post } from "./style";
import setas from "../../assets/icone-setas-verde.svg";
import postLI1 from "../../assets/post-linkedin-1.svg";
import postLI2 from "../../assets/post-linkedin-2.svg";
import postIG1 from "../../assets/post-instagram-1.svg";
import postIG2 from "../../assets/post-instagram-2.svg";

export const ConteudoEmDestaque = () => {
  return (
    <Container className="background">
      <Titulo1>Conteúdo em destaque</Titulo1>

      <Conteudo>
        <Linkedin>
          <Titulo2>Linkedin</Titulo2>
          <ul>
            <Post>
              <Titulo3>O que é um Wireframe</Titulo3>
              <img src={postLI1} alt="" className="b8" />
              <Paragrafo>
                Nesse post explico o que é um Wireframe e como apliquei esse
                conceito em um projeto.
              </Paragrafo>

              <a
                href="https://www.linkedin.com/posts/bevfeitosa_designthinking-wireframe-figma-activity-7074429978192338944-otVk?utm_source=share&utm_medium=member_desktop&rcm=ACoAACPxINoBdzupP2uXc1sm5bk5LsA3UMOdrjY"
                target="blank"
              >
                Acessar post <img src={setas} alt="(Abre uma nova guia)" />
              </a>
            </Post>

            <Post>
              <Titulo3>Sobre ser multidisciplinar</Titulo3>
              <img src={postLI2} alt="" className="b8" />
              <Paragrafo>
                Aqui falo sobre a importância de ser multidisciplinar contando
                de um episódio em que precisei usar conhecimentos de Front-End
                pra resolver um problema de outra área.
              </Paragrafo>

              <a
                href="https://www.linkedin.com/posts/bevfeitosa_programaaexaeto-frontend-html-activity-7257406145827405826-cs2D?utm_source=share&utm_medium=member_desktop&rcm=ACoAACPxINoBdzupP2uXc1sm5bk5LsA3UMOdrjY"
                target="blank"
              >
                Acessar post <img src={setas} alt="(Abre uma nova guia)" />
              </a>
            </Post>
          </ul>
        </Linkedin>

        <Instagram>
          <Titulo2>Instagram</Titulo2>
          <ul>
            <Post>
              <Titulo3>Tag FORM</Titulo3>
              <img src={postIG1} alt="" className="b8" />
              <Paragrafo>
                Conteúdo explicativo e gráfico descomplicando vários usos da tag
                form.
              </Paragrafo>

              <a
                href="https://www.instagram.com/p/DDXfER0x911/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                target="blank"
              >
                Acessar post <img src={setas} alt="(Abre uma nova guia)" />
              </a>
            </Post>

            <Post>
              <Titulo3>Elementos HTML</Titulo3>
              <img src={postIG2} alt="" className="b8" />
              <Paragrafo>
                Explico de forma didática o que é um elemento HTML falando sobre
                tag, atribulo, valor, conteúdo com exemplos práticos.
              </Paragrafo>

              <a
                href="https://www.instagram.com/p/DCzhxQyx_pB/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                target="blank"
              >
                Acessar post <img src={setas} alt="(Abre uma nova guia)" />
              </a>
            </Post>
          </ul>
        </Instagram>
      </Conteudo>
    </Container>
  );
};
