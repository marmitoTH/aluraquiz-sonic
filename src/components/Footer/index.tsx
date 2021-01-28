import * as Styled from './styles'
import alura from '../../assets/alura.svg'

const Footer = () => {
  return (
    <Styled.Footer>
      <img src={alura} alt='Logo Alura' />
      <p>Orgulhosamente criado durante a <a href='https://www.alura.com.br/' target='__blank'>Imersão React da Alura.</a></p>
    </Styled.Footer>
  )
}

export default Footer
