import { useContext } from 'react'
import { Context } from '../contexts/QuizContext'
import * as Styled from '../styles/pages/result'
import Background from '../components/Background'
import Header from '../components/Header'
import Container from '../components/Container'
import GitHubCorner from '../components/GitHubCorner'
import * as Widget from '../components/Widget'

const Result = () => {
  const { user, points } = useContext(Context)

  return (
    <>
      <Background />
      <GitHubCorner projectUrl='https://github.com/marmitoTH/aluraquiz-sonic' />
      <Container>
        <Header />
        <Widget.default>
          <Widget.Header>
            <strong>Resultado</strong>
          </Widget.Header>
          <Widget.Content>
            <p>Obrigado por responder o quiz, {user}!</p>
            <Styled.Score>Você fez {points} pontos!</Styled.Score>
            <Styled.HomeAnchor href='/'>Voltar para a home</Styled.HomeAnchor>
          </Widget.Content>
        </Widget.default>
      </Container>
    </>
  )
}

export default Result
