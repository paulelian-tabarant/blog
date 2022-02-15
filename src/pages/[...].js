import * as React from 'react'
import { Router } from '@reach/router'
import TechPosts from '../components/TechPosts'
import { ThoughtsPosts } from '../components/ThoughtsPosts'
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
        <TechPosts path="/tech" posts={posts}/>
        <ThoughtsPosts path="/thoughts" posts={posts}/>
      </Router>
    </>
  )
}

export const listingQuery = graphql`
  query TechPostsListingQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`

export default App
