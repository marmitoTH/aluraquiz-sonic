import { useContext } from 'react'
import { Context } from '../contexts/QuizContext'

const Result = () => {
  const { user, points } = useContext(Context)

  return (
    <>
      <h1>{user}</h1>
      <p>{points}</p>
    </>
  )
}

export default Result
