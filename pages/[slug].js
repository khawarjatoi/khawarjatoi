import fs from 'fs'
// import path from 'path'
import matter from 'gray-matter'

export const getStaticProps = async () => {
  const files = fs.readdirSync('/')
  const contents = files.map((fname) => {
    const md = fs.readFileSync(`/${fname}`).toString()
    const {data, excerpt} = matter(md, {excerpt_separator: '\n\n'})
    return {
      slug: fname.replace('.md', ''),
      title: data.title,
      excerpt,
    }
  })
  return {
    props: {
      contents,
    },
  }
}
