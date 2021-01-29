import styled from 'styled-components'

export const Container = styled.div`
  margin: auto;
  padding-top: 40px;
  width: min(350px, 95%);

  @media (min-width: 1000px) {
    padding-top: 55px;
    margin-left: 128px;
  }
`
