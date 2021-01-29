import { AppProps } from 'next/app'
import theme from '../styles/theme'
import { ThemeProvider } from 'styled-components'
import Head from '../components/Head'
import GlobalStyle from '../styles/global'
import { Provider } from '../contexts/QuizContext'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Head />
      <GlobalStyle />
      <Provider>
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  )
}

export default App
