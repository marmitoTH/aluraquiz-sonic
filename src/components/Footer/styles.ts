import styled from 'styled-components'

export const Footer = styled.footer`
  display: flex;
  padding: 20px;
  margin-top: 20px;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: rgba(0, 0, 0, .5);

  img {
    margin-right: 20px;
  }

  a {
    color: ${({ theme }) => theme.colors.contrastTextColor};
    transition: 150ms;
  }

  a:hover {
    opacity: .5;
  }
`
