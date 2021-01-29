import { useState } from 'react'
import Button from '../Button'
import * as Styled from './styles'

interface QuizFormProps {
  question: string
  description: string
  alternatives: string[]
  answer: number
  onEvaluated(answer: boolean): void
}

const QuizForm: React.FC<QuizFormProps> = ({
  question,
  description,
  alternatives,
  answer,
  onEvaluated
}) => {
  const [selected, setSelected] = useState<number>()
  const [evaluated, setEvaluated] = useState(false)

  const evaluate = () => {
    setEvaluated(true)

    setTimeout(() => {
      setEvaluated(false)
      setSelected(undefined)
      onEvaluated(answer === selected)
    }, 1000);
  }

  const getHighlightStatus = (index: number) => {
    if (selected === index) {
      if (evaluated)
        return answer === index ? 'CORRECT' : 'WRONG'

      return 'SELECTED'
    }

    return 'NONE'
  }

  return (
    <form>
      <Styled.Title>{question}</Styled.Title>
      <p>{description}</p>
      <Styled.Options>
        {alternatives.map((alternative, index) => (
          <Styled.Option
            key={index}
            highlight={getHighlightStatus(index)}
          >
            <input
              type='radio'
              name='choiceID'
              disabled={evaluated}
              checked={selected === index}
              onChange={() => setSelected(index)}
            />
            {alternative}
          </Styled.Option>
        ))}
      </Styled.Options>
      <Button
        type='button'
        disabled={evaluated}
        onClick={evaluate}
      >
        CONFIRMAR
      </Button>
    </form>
  )
}

export default QuizForm
