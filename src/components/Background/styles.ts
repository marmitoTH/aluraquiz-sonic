import styled from 'styled-components'

export const Container = styled.div`
  z-index: -1;
  position: absolute;
  width: 100%;
  height: 200px;
  background: linear-gradient(0deg, #1c1814 1%, transparent),
              url(${({ theme }) => theme.images.background});
  background-size: cover;

  h1 {
    font-size: 16px;
  }

  @media (min-width: 1000px) {
    height: 100vh;
    background: url(${({ theme }) => theme.images.background});
    background-size: cover;
  }
`
