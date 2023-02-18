export interface PostQuery {
  data: PostQueryData
}

interface PostQueryData {
  markdownRemark?: MarkdownRemark
}

export interface MarkdownRemark {
  frontmatter: FrontMatter
  html: string
}

interface FrontMatter {
  date: string
  path: string
  title: string
}
