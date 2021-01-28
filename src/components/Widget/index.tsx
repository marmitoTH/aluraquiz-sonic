import * as Styled from './styles'

export const Header: React.FC = ({ children }) => {
  return <Styled.Header>{children}</Styled.Header>
}

export const Content: React.FC = ({ children }) => {
  return <Styled.Content>{children}</Styled.Content>
}

const Widget: React.FC = ({ children }) => {
  return <Styled.Container>{children}</Styled.Container>
}

export default Widget
