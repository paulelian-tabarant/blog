import * as React from 'react'
import { Router } from '@reach/router'
import PostsListing from '../components/PostsListing'
import { Home } from '../components/Home'
import { Header } from '../components/Header'
import { graphql } from 'gatsby'
import * as style from './index.module.css'

const App = ({ data }) => {
  const { allMarkdownRemark } = data
  const { edges: posts } = allMarkdownRemark
  const { index__main, index__content } = style

  return (
    <>
      <Header />
      <main className={index__main}>
      <div className={index__content}>
      <Router>
        <Home path="/" />
        <PostsListing path="/tech" title="Tech" posts={posts} />
        <PostsListing path="/thoughts" title="Pensées" posts={posts} />
      </Router>
      </div>
      </main>
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
