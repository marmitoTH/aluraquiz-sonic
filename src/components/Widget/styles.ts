import styled from 'styled-components'

export const Container = styled.div`
  border-radius: 4px;
  border: 2px solid #2869f0;
  background-color: #1c1814;

  & + & {
    margin-top: 24px;
  }
`

export const Header = styled.header`
  padding: 14px 32px;
  background-color: #2869f0;
`

export const Content = styled.div`
  padding: 18px 32px;

  p {
    font-size: 14px;
    line-height: 1.4;
  }
`
