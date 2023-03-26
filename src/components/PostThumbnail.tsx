import * as React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import {
  posts_listing__item,
  posts_listing__item__header,
  posts_listing__item__header__title,
  posts_listing__item__header__date,
  posts_listing__item__cover,
  posts_listing__item__excerpt,
} from './posts_listing.module.css'
import { Post } from './posts.type'

interface PostThumbnailProps {
  post: Post
}

const PostThumbnail: React.FC<PostThumbnailProps> = ({ post }) => {
  const { path: postPath, title, date, featuredImage } = post.frontmatter

  const hasImage = featuredImage != null
  const imageData = featuredImage?.childImageSharp.gatsbyImageData

  return (
    <a key={postPath} href={postPath}>
      <article className={posts_listing__item} key={postPath}>
        {hasImage && (
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

export default PostThumbnail
