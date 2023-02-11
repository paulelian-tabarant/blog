import { graphql, PageProps } from 'gatsby'
import React from 'react'
import { Layout } from './Layout'
import {
  post,
  post__date,
  post__body,
  post__content,
  post__nav,
  post__back_link,
} from './post.module.css'

const Post = ({ data }: PageProps<Queries.PostQuery>) => {
  const markdownRemark = data.markdownRemark
  const backKey = <span>&larr;</span>

  return (
    <Layout>
      <div className={post}>
        <div className={post__body}>
          <nav className={post__nav}>
            <a className={post__back_link} href="/">
              {backKey} Retour
            </a>
          </nav>
          <aside className={post__date}>
            {markdownRemark?.frontmatter?.date}
          </aside>
          <main className={post__content}>
            <h1>{markdownRemark?.frontmatter?.title}</h1>
            <div
              dangerouslySetInnerHTML={{ __html: markdownRemark?.html || '' }}
            />
          </main>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query Post($path: String!) {
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
