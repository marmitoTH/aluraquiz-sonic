import db from '../../../db.json'
import NextHead from 'next/head'

const Head = () => {
  return (
    <NextHead>
      <title>AluraQuiz {db.title}</title>
      <meta name='description' content={db.description} />
      <meta property='og:title' content={`AluraQuiz ${db.title}`} />
      <meta property='og:description' content={db.description} />
      <meta property='og:image' content={db.bg} />
      <meta property='twitter:title' content={`AluraQuiz ${db.title}`} />
      <meta property='twitter:description' content={db.description} />
      <meta property='twitter:image' content={db.bg} />
      <link rel='preconnect' href='https://fonts.gstatic.com' />
      <link href='https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap' rel='stylesheet' />
    </NextHead>
  )
}

export default Head
