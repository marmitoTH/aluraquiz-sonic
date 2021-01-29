import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: none;
    box-sizing: border-box;
  }

  body, input, textarea {
    color: ${({ theme }) => theme.colors.contrastTextColor};
    font-family: 'Lato', sans-serif;
  }

  body {
    background: ${({ theme }) => theme.colors.backgroundColor};
  }

  button {
    cursor: pointer;
  }
`
