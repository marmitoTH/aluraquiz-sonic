import { createContext, Dispatch, SetStateAction, useState } from 'react'

interface GameProps {
  user: string
  points: number

  setUser: Dispatch<SetStateAction<string>>
  setPoints: Dispatch<SetStateAction<number>>
}

export const Context = createContext<GameProps>({} as GameProps)

export const Provider: React.FC = ({ children }) => {
  const [user, setUser] = useState('')
  const [points, setPoints] = useState(0)

  return (
    <Context.Provider value={{ user, points, setUser, setPoints }}>
      {children}
    </Context.Provider>
  )
}
