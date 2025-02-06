import { Paragrafo, Titulo1, Titulo2 } from "../../styles/Text";
import { Container, Conteudo, Post } from "./style";
import setas from "../../assets/icone-setas-verde.svg";

export const ConteudoEmDestaque = () => {
  return (
    <Container className="background">
      <Titulo1>Conteúdo em destaque</Titulo1>

      <Conteudo>
        <section>
          <Titulo2>Linkedin</Titulo2>

          <Post>
            <img src="" alt="" className="b16" />
            <Paragrafo>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse mattis id enim quis porta. Fusce pellentesque eros in
              nulla commodo, nec consectetur odio sodales.
            </Paragrafo>

            <a href="">
              Acessar post <img src={setas} alt="" />
            </a>
          </Post>

          <Post>
            <img src="" alt="" className="b16" />
            <Paragrafo>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse mattis id enim quis porta. Fusce pellentesque eros in
              nulla commodo, nec consectetur odio sodales.
            </Paragrafo>

            <a href="">
              Acessar post <img src={setas} alt="" />
            </a>
          </Post>
        </section>

        <section>
          <Titulo2>Instagram</Titulo2>

          <Post>
            <img src="" alt="" className="b16" />
            <Paragrafo>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse mattis id enim quis porta. Fusce pellentesque eros in
              nulla commodo, nec consectetur odio sodales.
            </Paragrafo>

            <a href="">
              Acessar post <img src={setas} alt="" />
            </a>
          </Post>

          <Post>
            <img src="" alt="" className="b16" />
            <Paragrafo>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse mattis id enim quis porta. Fusce pellentesque eros in
              nulla commodo, nec consectetur odio sodales.
            </Paragrafo>

            <a href="">
              Acessar post <img src={setas} alt="" />
            </a>
          </Post>
        </section>
      </Conteudo>
    </Container>
  );
};
