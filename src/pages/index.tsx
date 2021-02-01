import { useRouter } from 'next/router'
import * as Styled from '../styles/pages/home'
import * as Widget from '../components/Widget'
import Header from '../components/Header'
import Container from '../components/Container'
import Button from '../components/Button'
import Footer from '../components/Footer'
import GitHubCorner from '../components/GitHubCorner'
import Background from '../components/Background'
import { FormEvent, useContext, useEffect, useState } from 'react'
import { Context } from '../contexts/QuizContext'
import getQuizTitle from '../utils/getQuizTitle'
import db from '../../db.json'

const Home = () => {
  const router = useRouter()
  const [name, setName] = useState('')
  const { setUser, setPoints } = useContext(Context)

  const startGame = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (name.length > 0) {
      setUser(name)
      router.push('/quiz')
    }
  }

  useEffect(() => {
    setUser('')
    setPoints(0)
  }, [])

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
              <Styled.Form onSubmit={startGame}>
                <input
                  placeholder='Diz aí seu nome pra jogar! :)'
                  onChange={e => setName(e.target.value)}
                />
                <Button disabled={!name}>JOGAR</Button>
              </Styled.Form>
            </Widget.Content>
          </Widget.default>
          <Widget.default>
            <Widget.Content>
              <Styled.Title>Quizes da galera</Styled.Title>
              <Styled.Description>Dá uma olhada nesses quizes incríveis que o pessoal da Imersão Alguma coisa fez:</Styled.Description>
              {db.external.map((url, index) => (
                <Styled.ExternalLink
                  key={index}
                  href={url}
                  target='__blank'
                >
                  {getQuizTitle(url)}
                </Styled.ExternalLink>
              ))}
            </Widget.Content>
          </Widget.default>
        </main>
        <Footer />
      </Container>
    </>
  )
}

export default Home
