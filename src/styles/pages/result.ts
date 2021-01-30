import styled from 'styled-components'
import { shade } from 'polished'

export const Score = styled.h1`
  font-size: 18px;
  margin: 8px 0 21px 0;
`

export const HomeAnchor = styled.a`
  display: flex;
  justify-content: center;
  margin: 17px 0 8px 0;
  text-decoration: none;
  color: ${({ theme }) => shade(0.2, theme.colors.primaryColor)};
  transition: 150ms;

  &:hover {
    color: ${({ theme }) => theme.colors.primaryColor};
  }
`
