import * as Widget from '../components/Widget'
import Background from '../components/Background'
import QuizForm from '../components/QuizForm'

const Quiz = () => {
  return (
    <>
      <Background />
      <Widget.default>
        <Widget.Header>
          {`Pergunta ${'1'} de ${'10'}`}
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
    </>
  )
}

export default Quiz
