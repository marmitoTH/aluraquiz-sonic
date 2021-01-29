import { useState } from 'react'
import Button from '../Button'
import * as Styled from './styles'

interface QuizFormProps {
  question: string
  description: string
  alternatives: string[]
  answer: number
}

const QuizForm: React.FC<QuizFormProps> = ({ question, description, alternatives, answer }) => {
  const [selected, setSelected] = useState<number>()

  const handleSelection = (choice: number) => {
    setSelected(choice)
  }

  return (
    <form>
      <Styled.Title>{question}</Styled.Title>
      <p>{description}</p>
      <Styled.Options>
        {alternatives.map((alternative, index) => (
          <Styled.Option
            key={index}
            selected={index === selected}
          >
            <input
              type='radio'
              name='choiceID'
              onChange={() => handleSelection(index)}
            />
            {alternative}
          </Styled.Option>
        ))}
      </Styled.Options>
      <Button type='button'>CONFIRMAR</Button>
    </form>
  )
}

export default QuizForm
