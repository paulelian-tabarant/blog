import GatsbyImage from 'gatsby-image'

export interface AllMarkdownRemark {
  edges: Array<Edge>
}

interface Edge {
  excerpt: string
  frontmatter: FrontMatter
}

interface FrontMatter {
  title: string
  path: string
  date: string
  featuredImage: FeaturedImage
}

interface FeaturedImage {
  childImageSharp: GatsbyImage
}
