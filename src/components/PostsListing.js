import * as React from 'react'
import * as style from './posts_listing.module.css'
import Img from 'gatsby-image'

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
    posts_listing__item__cover,
    posts_listing__item__excerpt,
  } = style

  const listPosts = (posts) =>
    posts.map(({ node: post }) => {
      const { path: postPath, title, date, featuredImage } = post.frontmatter
      const featuredImageFluid = featuredImage.childImageSharp?.fluid

      return (
        <article className={posts_listing__item} key={postPath}>
          <a href={postPath}>
            {featuredImageFluid && <Img className={posts_listing__item__cover} fluid={featuredImageFluid} />}
            <header className={posts_listing__item__header}>
              <h2 className={posts_listing__item__header__title}>{title}</h2>
              <div className={posts_listing__item__header__date}>{date}</div>
            </header>
          </a>
          <p className={posts_listing__item__excerpt}>{post.excerpt}</p>
        </article>
      )
    })

  const postElements = listPosts(filteredPosts)

  return (
    <>
      <h1>{title}</h1>
      <main>
        {postElements.length ? (
          <ul className={posts_listing}>{postElements}</ul>
        ) : (
          <p>À venir...</p>
        )}
      </main>
    </>
  )
}

export default PostsListing
