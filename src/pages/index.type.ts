import GatsbyImage from 'gatsby-image'
import { Post } from '../components/posts.type'

export interface AllMarkdownRemark {
  edges: Array<Edge>
}

interface Edge {
  node: Post
}
