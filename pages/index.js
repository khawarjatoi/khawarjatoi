import Intro from '../components/Intro'
import fs from 'fs'
// import path from 'path'
import matter from 'gray-matter'

const HomePage = (props) => <Intro />


export const getStaticProps = async () => {
  const files = fs.readdirSync('/')
  const posts = files.map((fname) => {
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
      posts,
    },
  }
}

export default HomePage
