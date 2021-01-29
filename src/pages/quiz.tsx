import * as Styled from '../styles/pages/quiz'
import * as Widget from '../components/Widget'
import Header from '../components/Header'
import Container from '../components/Container'
import Background from '../components/Background'
import QuizForm from '../components/QuizForm'
import Footer from '../components/Footer'
import GitHubCorner from '../components/GitHubCorner'

const Quiz = () => {
  return (
    <>
      <Background />
      <GitHubCorner projectUrl='https://github.com/marmitoTH/aluraquiz-sonic' />
      <Container>
        <Header />
        <Widget.default>
          <Widget.Header>
            <strong>{`Pergunta ${'1'} de ${'10'}`}</strong>
          </Widget.Header>
          <Styled.Image src='https://img.utdstc.com/screen/13/sonic-the-hedgehog-1.png' alt='Imagem da questão' />
          <Widget.Content>
            <QuizForm
              question='Em qual jogo Sonic fez sua primeira aparição?'
              description='Vamos começar no nível fácil!'
              alternatives={[
                'Out Run',
                'Sonic The Hedgehog (Genesis)',
                'Sonic The Hedgehog (Master System)',
                'Sega Forever Collection',
                'Rad Mobile'
              ]}
              answer={3}
            />
          </Widget.Content>
        </Widget.default>
        <Footer />
      </Container>
    </>
  )
}

export default Quiz
