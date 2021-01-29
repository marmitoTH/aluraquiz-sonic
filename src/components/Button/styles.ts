import styled from 'styled-components'
import { shade } from 'polished'

export const Button = styled.button`
  width: 100%;
  height: 36px;
  border-radius: ${({ theme }) => theme.borderRadius};
  background: ${({ theme }) => theme.colors.secondaryColor};
  color: ${({ theme }) => theme.colors.contrastTextColor};
  font-size: 14px;
  font-weight: bold;
  transition: 150ms;

  &:hover {
    background: ${({ theme }) => shade(.2, theme.colors.secondaryColor)};
  }
`
