import styled from 'styled-components'
import { shade } from 'polished'

export const Options = styled.div`
  padding: 24px 0;
`

export const Option = styled.label<{ selected: boolean }>`
  display: block;
  padding: 10px 15px;
  font-size: 14px;
  border-radius: ${({ theme }) => theme.borderRadius};
  background: ${({ selected, theme }) => (selected && theme.colors.primaryColor)
    || shade(.5, theme.colors.primaryColor)};
  transition: 150ms;

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
