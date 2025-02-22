import { Paragrafo, Titulo1, Titulo2, Titulo3 } from "../../styles/Text";
import { Container, Conteudo, Linkedin, Instagram, Post } from "./style";
import setas from "../../assets/icone-setas-verde.svg";

export const ConteudoEmDestaque = () => {
  return (
    <Container className="background">
      <Titulo1>Conteúdo em destaque</Titulo1>

      <Conteudo>
        <Linkedin>
          <Titulo2>Linkedin</Titulo2>
          <ul>
            <Post>
              <Titulo3>Título</Titulo3>
              <img src="" alt="" className="b16" />
              <Paragrafo>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse mattis id enim quis porta. Fusce pellentesque eros
                in nulla commodo, nec consectetur odio sodales.
              </Paragrafo>

              <a href="">
                Acessar post <img src={setas} alt="(Abre uma nova guia)" />
              </a>
            </Post>

            <Post>
              <Titulo3>Título</Titulo3>
              <img src="" alt="" className="b16" />
              <Paragrafo>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse mattis id enim quis porta. Fusce pellentesque eros
                in nulla commodo, nec consectetur odio sodales.
              </Paragrafo>

              <a href="">
                Acessar post <img src={setas} alt="(Abre uma nova guia)" />
              </a>
            </Post>
          </ul>
        </Linkedin>

        <Instagram>
          <Titulo2>Instagram</Titulo2>
          <ul>
            <Post>
              <Titulo3>Título</Titulo3>
              <img src="" alt="" className="b16" />
              <Paragrafo>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse mattis id enim quis porta. Fusce pellentesque eros
                in nulla commodo, nec consectetur odio sodales.
              </Paragrafo>

              <a href="">
                Acessar post <img src={setas} alt="(Abre uma nova guia)" />
              </a>
            </Post>

            <Post>
              <Titulo3>Título</Titulo3>
              <img src="" alt="" className="b16" />
              <Paragrafo>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse mattis id enim quis porta. Fusce pellentesque eros
                in nulla commodo, nec consectetur odio sodales.
              </Paragrafo>

              <a href="">
                Acessar post <img src={setas} alt="(Abre uma nova guia)" />
              </a>
            </Post>
          </ul>
        </Instagram>
      </Conteudo>
    </Container>
  );
};
