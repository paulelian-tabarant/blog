import * as React from 'react'
import { Router } from '@gatsbyjs/reach-router'
import { graphql, PageProps } from 'gatsby'
import { index__main, index__content } from './index.module.css'

import { Layout } from '../components/Layout'
import PostsListing from '../components/PostsListing'
import { AllMarkdownRemark } from './index.type'

const App: React.FC<PageProps<Queries.PostsQuery>> = ({ data }: any) => {
  const allMarkdownRemark: AllMarkdownRemark = data.allMarkdownRemark
  const { edges } = allMarkdownRemark

  return (
    <Layout>
      <div className={index__main}>
        <div className={index__content}>
          <Router basepath="/">
            {/* <PostsListing path="/tech" title="Tech" posts={posts} /> */}
            {/* <PostsListing path="/thoughts" title="Pensées" posts={posts} /> */}
            <PostsListing path="/" title="Pensées" posts={edges} />
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
