import styled from 'styled-components'

export const Logo = styled.img`
  margin-bottom: 32px;
`

export const Form = styled.form`
  margin: 32px 0;

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
