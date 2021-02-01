import { useContext } from 'react'
import { useRouter } from 'next/router'
import { Context } from '../contexts/QuizContext'
import * as Styled from '../styles/pages/result'
import Background from '../components/Background'
import Header from '../components/Header'
import Container from '../components/Container'
import GitHubCorner from '../components/GitHubCorner'
import * as Widget from '../components/Widget'
import Button from '../components/Button'
import withUser from '../HOCs/withUser'

const Result = () => {
  const router = useRouter()
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
            <Button
              type='button'
              onClick={() => window.open('/api/db', '__blank')}
            >
              ADICIONAR AO MEU PROJETO
            </Button>
            <Styled.HomeAnchor href='/'>Voltar para a home</Styled.HomeAnchor>
          </Widget.Content>
        </Widget.default>
      </Container>
    </>
  )
}

export default withUser(Result)
