import { graphql } from 'gatsby'
import React from 'react'
import * as style from './post.module.css'

const Post = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const {
    post,
    post__date,
    post__body,
    post__content,
    post__nav,
    post__back_link,
  } = style
  return (
    <>
      <div className={post}>
        <div className={post__body}>
          <nav className={post__nav}>
            <a className={post__back_link} href="/">
              &larr; Retour
            </a>
          </nav>
          <aside className={post__date}>{frontmatter.date}</aside>
          <main className={post__content}>
            <h1>{frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </main>
        </div>
      </div>
    </>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "DD MMMM YYYY", locale: "fr")
        path
        title
      }
    }
  }
`

export default Post
