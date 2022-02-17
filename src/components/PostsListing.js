import * as React from 'react'

const PostsListing = ({ title, path, posts }) => {
  const filteredPosts = posts.filter(({ node: post }) =>
    post.frontmatter.path.startsWith(path)
  )

  const listPosts = (posts) => posts.map(({ node: post }) => {
    const { path: postPath, title, date } = post.frontmatter
    console.log(postPath, title, date)
    return (
      <li key={postPath}>
        {date} &rsaquo; <a href={postPath}>{title}</a>
      </li>
    )
  })

  return (
    <>
      <h1>{title}</h1>
      <ul>
        {listPosts(filteredPosts)}
      </ul>
    </>
  )
}

export default PostsListing
