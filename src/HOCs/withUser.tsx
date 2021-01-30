import React, { useEffect } from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import { Context } from '../contexts/QuizContext'

const withUser = <P extends object>(Component: NextPage<P>) => {
  const WithUser: NextPage<P> = (props: P) => {
    const router = useRouter()
    const { user } = useContext(Context)

    useEffect(() => {
      if (!user) {
        router.push('/')
      }
    }, [])

    return (
      <>
        {user && <Component {...props} />}
      </>
    )
  }

  return WithUser
}

export default withUser
