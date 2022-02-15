import * as React from 'react'

const TechPosts = ({ posts }) => {
  const techPrefix = '/tech'
  const techPosts = posts.filter(({ node: post }) =>
    post.frontmatter.path.startsWith(techPrefix)
  )

  return (
    <>
      <h1>Tech posts</h1>
      <ul>
        {techPosts.map(({ node: post }) => (
          <li>{post.frontmatter.title}</li>
        ))}
      </ul>
    </>
  )
}

export default TechPosts
