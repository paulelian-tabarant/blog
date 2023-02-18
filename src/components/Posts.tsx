import * as React from 'react'
import { posts_listing } from './posts_listing.module.css'
import { PostsProps, Post } from './posts.type'
import PostThumbnail from './PostThumbnail'

const listPosts = (posts: Array<Post>) =>
  posts.map((post) => <PostThumbnail post={post}></PostThumbnail>)

const Posts: React.FC<PostsProps> = (props) => {
  const { title, path, posts } = props

  const filteredPosts = posts.filter((post) =>
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
