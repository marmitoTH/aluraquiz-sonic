import * as Widget from '../components/Widget'
import Header from '../components/Header'
import Container from '../components/Container'
import Background from '../components/Background'
import QuizForm from '../components/QuizForm'
import Footer from '../components/Footer'

const Quiz = () => {
  return (
    <>
      <Background />
      <Container>
        <Header />
        <Widget.default>
          <Widget.Header>
            <strong>{`Pergunta ${'1'} de ${'10'}`}</strong>
          </Widget.Header>
          <Widget.Content>
            <QuizForm
              question='Em qual jogo Sonic fez sua primeira aparição?'
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
