import * as React from 'react'
import * as style from './posts_listing.module.css'

const PostsListing = ({ title, path, posts }) => {
  const filteredPosts = posts.filter(({ node: post }) =>
    post.frontmatter.path.startsWith(path)
  )

  const { posts_listing__ul, posts_listing__li } = style

  const listPosts = (posts) => posts.map(({ node: post }) => {
    const { path: postPath, title, date } = post.frontmatter
    return (
      <li className={posts_listing__li} key={postPath}>
        {date} &rsaquo; <a href={postPath}>{title}</a>
        <p>{post.excerpt}</p>
      </li>
    )
  })

  return (
    <>
      <h1>{title}</h1>
      <ul className={posts_listing__ul}>
        {listPosts(filteredPosts)}
      </ul>
    </>
  )
}

export default PostsListing
