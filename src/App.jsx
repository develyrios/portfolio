import { Header } from "./components/Header";
import { SobreMim } from "./components/SobreMim";
import { Projetos } from "./components/Projetos";
import { Cursos } from "./components/Cursos";
import { ConteudoEmDestaque } from "./components/ConteudoEmDestaque";
import { Contato } from "./components/Contato";
import GlobalStyle from "./styles/GlobalStyle";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <SobreMim />
      <Projetos />
      <Cursos />
      <ConteudoEmDestaque />
      <Contato />
    </>
  );
};
