import * as React from 'react'
import { Router } from '@reach/router'
import PostsListing from '../components/PostsListing'
import { Home } from '../components/Home'
import { Header } from '../components/Header'
import { graphql } from 'gatsby'

const App = ({ data }) => {
  const { allMarkdownRemark } = data
  const { edges: posts } = allMarkdownRemark

  return (
    <>
      <Header />
      <Router>
        <Home path="/" />
        <PostsListing path="/tech" title="Tech posts" posts={posts} />
        <PostsListing path="/thoughts" title="Thoughts posts" posts={posts} />
      </Router>
    </>
  )
}

export const listingQuery = graphql`
  query TechPostsListingQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          frontmatter {
            title
            path
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`

export default App
