import styled from 'styled-components'

export const Container = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 2px solid ${({ theme }) => theme.colors.primaryColor};
  background-color: ${({ theme }) => theme.colors.backgroundColor};

  & + & {
    margin-top: 24px;
  }
`

export const Header = styled.header`
  padding: 14px 32px;
  background-color: ${({ theme }) => theme.colors.primaryColor};
`

export const Content = styled.div`
  padding: 18px 32px;

  p {
    font-size: 14px;
    line-height: 1.4;
  }
`
