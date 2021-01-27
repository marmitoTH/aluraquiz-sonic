import * as Styled from '../styles/pages/home'
import logo from '../assets/logo.svg'

const Home = () => {
  return (
    <div>
      <Styled.Background />
      <Styled.Main>
        <Styled.Logo src={logo} alt='Logo AluraQuiz' />
        <Styled.Widget>
          <Styled.WidgetHeader>
            <Styled.Title>Sonic The Hedgehog</Styled.Title>
          </Styled.WidgetHeader>
          <Styled.WidgetContent>
            <p>Teste os seus conhecimentos sobre o universo Sonic e compare seu resultado com os amigos!</p>
            <Styled.Form>
              <input placeholder='Diz aí seu nome pra jogar! :)' />
              <button>JOGAR</button>
            </Styled.Form>
          </Styled.WidgetContent>
        </Styled.Widget>
        <Styled.Widget>
          <Styled.WidgetContent>
            <Styled.Title>Quizes da galera</Styled.Title>
            <p>Dá uma olhada nesses quizes incríveis que o pessoal da Imersão Alguma coisa fez:</p>
          </Styled.WidgetContent>
        </Styled.Widget>
      </Styled.Main>
    </div>
  )
}

export default Home
