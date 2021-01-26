import logo from '../assets/logo.svg'

const Home = () => {
  return (
    <div>
      <div />
      <main>
        <img src={logo} alt='Logo AluraQuiz' />
        <div>
          <h1>Sonic The Hedgehog</h1>
          <p>Teste os seus conhecimentos sobre o universo Sonic The Hedgehog e compare seu resultado com os amigos!</p>
          <form>
            <input placeholder='Diz aí seu nome pra jogar! :)' />
            <button>JOGAR</button>
          </form>
        </div>
        <div>
          <h1>Quizes da galera</h1>
          <p>Dá uma olhada nesses quizes incríveis que o pessoal da Imersão Alguma coisa fez:</p>
        </div>
      </main>
    </div>
  )
}

export default Home
