import * as Styled from './styles'
import logo from '../../assets/logo.svg'

const Header = () => {
  return (
    <Styled.Header>
      <img src={logo} alt='Logo AluraQuiz' />
    </Styled.Header>
  )
}

export default Header
