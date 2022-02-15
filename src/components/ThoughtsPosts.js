import * as React from 'react'

export const ThoughtsPosts = ({ posts }) => {
  const thoughtsPrefix = '/thoughts'
  const thoughtsPosts = posts.filter(({ node: post }) =>
    post.frontmatter.path.startsWith(thoughtsPrefix)
  )

  return (
    <>
      <h1>Thoughts</h1>
      <ul>
        {thoughtsPosts.map(({ node: post }) => (
          <li>{post.frontmatter.title}</li>
        ))}
      </ul>
    </>
  )
}

export default ThoughtsPosts
