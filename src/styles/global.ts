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

  a {
    color: ${({ theme }) => theme.colors.contrastTextColor};
    transition: 150ms;
  }

  a:hover {
    opacity: .5;
  }

  button {
    cursor: pointer;
  }
`
