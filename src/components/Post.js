import { graphql } from 'gatsby'
import React from 'react'
import * as style from './post.module.css'

const Post = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const { post, post__body, post__content, post__nav } = style
  return (
    <>
      <div className={post}>
        <main className={post__body}>
          <nav className={post__nav}>
            <a href="/">Back home</a>
          </nav>
          <aside>{frontmatter.date}</aside>
          <div className={post__content}>
            <h1>{frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        </main>
      </div>
    </>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`

export default Post
