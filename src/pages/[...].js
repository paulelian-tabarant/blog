import * as React from 'react'
import * as style from './index.module.css'

import PostsListing from '../components/PostsListing'
import { Router } from '@reach/router'
import { graphql } from 'gatsby'
import { Layout } from '../components/Layout'

const App = ({ data }) => {
  const { allMarkdownRemark } = data
  const { edges: posts } = allMarkdownRemark
  const { index__main, index__content } = style

  return (
    <Layout>
      <div className={index__main}>
        <div className={index__content}>
          <Router basepath='/'>
            {/* <PostsListing path="/tech" title="Tech" posts={posts} /> */}
            {/* <PostsListing path="/thoughts" title="Pensées" posts={posts} /> */}
            <PostsListing path="/" title="Pensées" posts={posts} />
          </Router>
        </div>
      </div>
    </Layout>
  )
}

export const listingQuery = graphql`
  query TechPostsListingQuery {
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
                gatsbyImageData(
                  layout: FULL_WIDTH
                  placeholder: BLURRED
                )
              }
            }
          }
        }
      }
    }
  }
`

export default App
