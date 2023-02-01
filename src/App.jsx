import { Bio } from './components/Bio'
import { Cursos } from './components/Cursos'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { MyProjects } from './components/MyProjects'
import { Social } from './components/Social'
import { Technologies } from './components/Technologies'
import GlobalStyle from './styles/GlobalStyle'

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Social />
      <Bio />
      <Technologies />
      <Cursos />
      <MyProjects />
      <Footer />
    </>
  )
}
