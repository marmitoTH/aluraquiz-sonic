import * as Styled from '../styles/pages/home'
import * as Widget from '../components/Widget'
import logo from '../assets/logo.svg'
import alura from '../assets/alura.svg'

const Home = () => {
  return (
    <>
      <Styled.Background />
      <Styled.Container>
        <main>
          <Styled.Logo src={logo} alt='Logo AluraQuiz' />
          <Widget.default>
            <Widget.Header>
              <Styled.Title>Sonic The Hedgehog</Styled.Title>
            </Widget.Header>
            <Widget.Content>
              <p>Teste os seus conhecimentos sobre o universo Sonic e compare seu resultado com os amigos!</p>
              <Styled.Form>
                <input placeholder='Diz aí seu nome pra jogar! :)' />
                <button>JOGAR</button>
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
        <Styled.Footer>
          <img src={alura} alt='Logo Alura' />
          <p>Orgulhosamente criado durante a <a href='https://www.alura.com.br/' target='__blank'>Imersão React da Alura</a></p>
        </Styled.Footer>
      </Styled.Container>
    </>
  )
}

export default Home
