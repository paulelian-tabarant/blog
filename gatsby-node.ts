import { GatsbyNode } from 'gatsby'
import path from 'path'

interface Frontmatter {
  path?: string
}

interface MarkdownRemark {
  frontmatter: Frontmatter
}

interface AllMarkdownRemarkQueryResult {
  allMarkdownRemark: {
    edges: Array<{ node: MarkdownRemark }>
  }
}

export const createPages: GatsbyNode['createPages'] = async ({
  actions,
  graphql,
}: any) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`src/components/Post.tsx`)

  const result = await graphql(`
    query AllBlogPosts {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    throw new Error(result.errors.join(', '))
  }

  const edges = result.data?.allMarkdownRemark?.edges

  if (!edges) {
    throw new Error('No blog post data available')
  }

  edges.forEach(({ node }: any) => {
    const path = node.frontmatter?.path

    if (!path) {
      throw new Error('Blog post has no path')
    }

    createPage({
      path,
      component: blogPostTemplate,
      context: {},
    })
  })
}
