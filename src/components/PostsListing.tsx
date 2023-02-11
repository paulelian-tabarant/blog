import * as React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import {
  posts_listing,
  posts_listing__item,
  posts_listing__item__header,
  posts_listing__item__header__title,
  posts_listing__item__header__date,
  posts_listing__item__cover,
  posts_listing__item__excerpt,
} from './posts_listing.module.css'

function createPost({ node: post }: any) {
  const { path: postPath, title, date, featuredImage } = post.frontmatter

  const imageData = featuredImage.childImageSharp.gatsbyImageData

  return (
    <a key={postPath} href={postPath}>
      <article className={posts_listing__item} key={postPath}>
        {imageData && (
          <GatsbyImage
            alt=""
            className={posts_listing__item__cover}
            image={imageData}
          />
        )}
        <header className={posts_listing__item__header}>
          <h2 className={posts_listing__item__header__title}>{title}</h2>
          <div className={posts_listing__item__header__date}>{date}</div>
        </header>
        <p className={posts_listing__item__excerpt}>{post.excerpt}</p>
      </article>
    </a>
  )
}

const listPosts = (posts: any) => posts.map(createPost)

interface PostsProps {
  title: string
  path: string
  posts: any
}

const Posts: React.FC<PostsProps> = (props) => {
  const { title, path, posts } = props

  const filteredPosts = posts.filter(({ node: post }: any) =>
    post.frontmatter.path.startsWith(path)
  )

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

export default Posts
