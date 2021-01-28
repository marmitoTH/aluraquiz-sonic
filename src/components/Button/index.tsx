import { ButtonHTMLAttributes } from 'react'
import * as Styled from './styles'

const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, ...rest }) => {
  return <Styled.Button {...rest}>{children}</Styled.Button>
}

export default Button
