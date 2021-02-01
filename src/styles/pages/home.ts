import { shade } from 'polished'
import styled from 'styled-components'

export const Logo = styled.img`
  margin-bottom: 32px;
`

export const Form = styled.form`
  margin: 32px 0 16px 0;

  input {
    width: 100%;
    height: 36px;
    border-radius: ${({ theme }) => theme.borderRadius};
    padding: 8px 16px;
    background: none;
    color: rgba(255, 255, 255, 0.7);
    border: 2px solid rgba(255, 255, 255, 0.5);
  }

  button {
    margin-top: 24px;
  }
`

export const Title = styled.h1`
  font-size: 16px;
  line-height: 1.8;
  margin-bottom: 8px;
`

export const Description = styled.p`
  margin-bottom: 10px;
`

export const ExternalLink = styled.a`
  display: block;
  padding: 9px 15px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.contrastTextColor};
  background: ${({ theme }) => shade(.5, theme.colors.primaryColor)};
  border-radius: ${({ theme }) => theme.borderRadius};
  text-decoration: none;
  transition: 150ms;

  & + & {
    margin-top: 8px;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.primaryColor};
  }
`
