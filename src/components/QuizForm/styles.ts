import styled from 'styled-components'
import { shade } from 'polished'

interface OptionProps {
  highlight: 'NONE' | 'SELECTED' | 'WRONG' | 'CORRECT'
}

export const Options = styled.div`
  padding: 24px 0;
`

export const Option = styled.label<OptionProps>`
  display: block;
  padding: 10px 15px;
  font-size: 14px;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: 150ms;

  background: ${({ highlight, theme }) => {
    switch (highlight) {
      default:
      case 'NONE':
        return shade(.5, theme.colors.primaryColor)
      case 'SELECTED':
        return theme.colors.primaryColor
      case 'WRONG':
        return theme.colors.failed
      case 'CORRECT':
        return theme.colors.success
    }
  }};

  & + & {
    margin-top: 8px;
  }

  &:hover {
    cursor: pointer;
    background: ${({ theme }) => theme.colors.primaryColor};
  }

  input {
    display: none;
  }
`

export const Title = styled.h1`
  font-size: 16px;
  margin-bottom: 8px;
`
