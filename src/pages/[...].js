import * as React from 'react'
import * as style from './index.module.css'

import { Header } from '../components/Header'
import { Home } from '../components/Home'
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
      {/* <Header /> */}
      <div className={index__main}>
        <div className={index__content}>
          <Router>
            {/* <Home path="/" /> */}
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
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default App
