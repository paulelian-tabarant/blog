import { IGatsbyImageData } from 'gatsby-plugin-image'

export interface PostsProps {
  title: string
  path: string
  posts: Array<Post>
}

export interface Post {
  frontmatter: FrontMatter
  excerpt: string
}

export interface FrontMatter {
  path: string
  title: string
  date: string
  featuredImage: FeaturedImage
}

export interface FeaturedImage {
  childImageSharp: ChildImageSharp
}

interface ChildImageSharp {
  gatsbyImageData: IGatsbyImageData
}
