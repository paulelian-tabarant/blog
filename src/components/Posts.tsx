import { posts_listing } from './posts.module.css'
import React from 'react'
import { PostsProps, Post } from './posts.type'
import PostThumbnail, { PostThumbnailProps } from './PostThumbnail'

const Posts: React.FC<PostsProps> = (props: PostsProps) => {
  const { title, path, posts } = props

  const filteredPosts = posts.filter((post) =>
    post.frontmatter.path.startsWith(path)
  )

  return (
    <>
      <h1>{title}</h1>
      <main>
        {filteredPosts.length ? (
          <ul className={posts_listing}>
            {posts.map((post: Post) => (
              <li>
                <PostThumbnail post={post}></PostThumbnail>
              </li>
            ))}
          </ul>
        ) : (
          <p>À venir...</p>
        )}
      </main>
    </>
  )
}

export default Posts
