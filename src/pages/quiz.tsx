import { useRouter } from 'next/router'
import { useContext, useState } from 'react'
import * as Styled from '../styles/pages/quiz'
import * as Widget from '../components/Widget'
import Header from '../components/Header'
import Container from '../components/Container'
import Background from '../components/Background'
import QuizForm from '../components/QuizForm'
import Footer from '../components/Footer'
import GitHubCorner from '../components/GitHubCorner'
import db from '../../db.json'
import { Context } from '../contexts/QuizContext'
import withUser from '../HOCs/withUser'

const Quiz = () => {
  const router = useRouter()
  const { points, setPoints } = useContext(Context)
  const [questionID, setQuestionID] = useState(0)

  const onAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setPoints(points + 1)
    }

    if (questionID < db.questions.length - 1) {
      setQuestionID(questionID + 1)
    } else {
      router.push('result')
    }
  }

  return (
    <>
      <Background />
      <GitHubCorner projectUrl='https://github.com/marmitoTH/aluraquiz-sonic' />
      <Container>
        <Header />
        <Widget.default>
          <Widget.Header>
            <strong>{`Pergunta ${questionID + 1} de ${db.questions.length}`}</strong>
          </Widget.Header>
          <Styled.Image
            src={db.questions[questionID].image}
            alt='Imagem da questão'
          />
          <Widget.Content>
            <QuizForm
              question={db.questions[questionID].title}
              description={db.questions[questionID].description}
              alternatives={db.questions[questionID].alternatives}
              answer={parseInt(db.questions[questionID].answer)}
              onEvaluated={onAnswer}
            />
          </Widget.Content>
        </Widget.default>
        <Footer />
      </Container>
    </>
  )
}

export default withUser(Quiz)
