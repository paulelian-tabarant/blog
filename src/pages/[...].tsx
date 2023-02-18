import * as React from 'react'
import { Router } from '@gatsbyjs/reach-router'
import { graphql, PageProps } from 'gatsby'
import { index__main, index__content } from './index.module.css'

import { Layout } from '../components/Layout'
import Posts from '../components/Posts'
import { AllMarkdownRemark } from './index.type'
import { Post } from '../components/posts.type'

const App: React.FC<PageProps<Queries.PostsQuery>> = ({ data }: any) => {
  const allMarkdownRemark: AllMarkdownRemark = data.allMarkdownRemark
  const { edges } = allMarkdownRemark
  const posts: Array<Post> = edges.map((edge) => edge.node)
  console.log('Posts: ', posts)

  return (
    <Layout>
      <div className={index__main}>
        <div className={index__content}>
          <Router basepath="/">
            {/* <Posts path="/tech" title="Tech" posts={posts} /> */}
            <Posts path="/" title="Pensées" posts={posts} />
          </Router>
        </div>
      </div>
    </Layout>
  )
}

export const postsQuery = graphql`
  query Posts {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 150)
          frontmatter {
            title
            path
            date(formatString: "DD MMMM YYYY", locale: "fr")
            featuredImage {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
              }
            }
          }
        }
      }
    }
  }
`

export default App
