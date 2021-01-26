import { AppProps } from 'next/app'
import Head from '../components/Head'
import GlobalStyle from '../styles/global'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head />
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default App
