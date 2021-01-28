import { DOMAttributes } from 'react'
import * as Styled from './styles'

const Button: React.FC<DOMAttributes<HTMLButtonElement>> = ({ children, ...rest }) => {
  return <Styled.Button {...rest}>{children}</Styled.Button>
}

export default Button
