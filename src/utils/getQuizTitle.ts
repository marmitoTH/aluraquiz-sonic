export default (url: string): string => {
  const regex = /^https:\/\/(.*)\.vercel\.app\/?$/
  const match = url.match(regex)
  return match ? match[1].replace('.', '/') : url
}
