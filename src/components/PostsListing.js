import * as React from 'react'
import * as style from './posts_listing.module.css'

const PostsListing = ({ title, path, posts }) => {
  const filteredPosts = posts.filter(({ node: post }) =>
    post.frontmatter.path.startsWith(path)
  )

  const {
    posts_listing,
    posts_listing__item,
    posts_listing__item__header,
    posts_listing__item__header__title,
    posts_listing__item__header__date,
    posts_listing__item__excerpt,
  } = style

  const listPosts = (posts) =>
    posts.map(({ node: post }) => {
      const { path: postPath, title, date } = post.frontmatter
      return (
        <li className={posts_listing__item} key={postPath}>
          <header className={posts_listing__item__header}>
            <h2 className={posts_listing__item__header__title}>
              <a href={postPath}>{title}</a>
            </h2>
            <div className={posts_listing__item__header__date}>{date}</div>
          </header>
          <p className={posts_listing__item__excerpt}>{post.excerpt}</p>
        </li>
      )
    })

  return (
    <>
      <h1>{title}</h1>
      <ul className={posts_listing}>{listPosts(filteredPosts)}</ul>
    </>
  )
}

export default PostsListing
