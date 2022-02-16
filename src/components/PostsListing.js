import * as React from 'react'

const PostsListing = ({ title, path, posts }) => {
  const filteredPosts = posts.filter(({ node: post }) =>
    post.frontmatter.path.startsWith(path)
  )

  return (
    <>
      <h1>{title}</h1>
      <ul>
        {filteredPosts.map(({ node: post }) => (
          <li>
            <a href={post.frontmatter.path}>{post.frontmatter.title}</a>
          </li>
        ))}
      </ul>
    </>
  )
}

export default PostsListing
