import * as React from 'react'
import { posts_listing } from './posts_listing.module.css'
import { PostsProps, Post } from './posts.type'
import PostThumbnail from './PostThumbnail'

const Posts: React.FC<PostsProps> = (props) => {
  const { title, path, posts } = props

  const filteredPosts = posts.filter((post) =>
    post.frontmatter.path.startsWith(path)
  )

  return (
    <>
      <h1>{title}</h1>
      <main>
        {filteredPosts.length ? (
          <ul className={posts_listing}>{listPosts(filteredPosts)}</ul>
        ) : (
          <p>À venir...</p>
        )}
      </main>
    </>
  )
}

const listPosts = (posts: Array<Post>) =>
  posts.map((post) => <PostThumbnail post={post}></PostThumbnail>)

export default Posts
