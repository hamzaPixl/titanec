import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const contentDirectory = path.join(process.cwd(), 'src/content')

export function getAllMarkdown(language = 'fr') {
  const dirFiles = path.join(contentDirectory, language)
  if (!fs.existsSync(dirFiles)) {
    return []
  }
  const files = fs.readdirSync(dirFiles)
  return files.map((fileName) => {
    const slug = fileName.replace('.md', '')
    const filePath = path.join(contentDirectory, language, fileName)
    let content = ''
    if (fs.existsSync(filePath)) {
      const fileContents = fs.readFileSync(filePath, 'utf8')
      const result = matter(fileContents)
      content = result.content
    }
    return {
      content,
      slug,
    }
  })
}
