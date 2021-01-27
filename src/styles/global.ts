import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: none;
    box-sizing: border-box;
  }

  body, input, textarea {
    color: #fff;
    font-family: 'Lato', sans-serif;
  }

  body {
    background: #1c1814;
  }

  button {
    cursor: pointer;
  }
`
