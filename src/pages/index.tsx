import * as Styled from '../styles/pages/home'
import * as Widget from '../components/Widget'
import Header from '../components/Header'
import Container from '../components/Container'
import Button from '../components/Button'
import Footer from '../components/Footer'
import GitHubCorner from '../components/GitHubCorner'
import Background from '../components/Background'

const Home = () => {
  return (
    <>
      <Background />
      <GitHubCorner projectUrl='https://github.com/marmitoTH/aluraquiz-sonic' />
      <Container>
        <Header />
        <main>
          <Widget.default>
            <Widget.Header>
              <strong>Sonic The Hedgehog</strong>
            </Widget.Header>
            <Widget.Content>
              <p>Teste os seus conhecimentos sobre o universo Sonic e compare seu resultado com os amigos!</p>
              <Styled.Form>
                <input placeholder='Diz aí seu nome pra jogar! :)' />
                <Button>JOGAR</Button>
              </Styled.Form>
            </Widget.Content>
          </Widget.default>
          <Widget.default>
            <Widget.Content>
              <Styled.Title>Quizes da galera</Styled.Title>
              <p>Dá uma olhada nesses quizes incríveis que o pessoal da Imersão Alguma coisa fez:</p>
            </Widget.Content>
          </Widget.default>
        </main>
        <Footer />
      </Container>
    </>
  )
}

export default Home
