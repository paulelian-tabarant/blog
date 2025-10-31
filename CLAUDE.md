# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal blog built with Gatsby 4, React 18, and TypeScript. Content is written in Markdown and sourced from `src/posts/`. The site is deployed on Netlify.

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (localhost:8000)
npm start
# or
npm run develop

# Build for production
npm run build

# Serve production build
npm run serve

# Clean Gatsby cache
npm run clean

# Run tests
npm test
```

## Architecture

### Content Management
- Blog posts are stored as Markdown files in `src/posts/`
- Each post directory contains:
  - A `.md` file with frontmatter (path, title, date, featuredImage)
  - Associated images referenced in the post
- Gatsby's GraphQL layer transforms Markdown via `gatsby-transformer-remark`

### Page Generation
- `gatsby-node.ts` dynamically creates pages from Markdown files using the `createPages` API
- Each post's `path` frontmatter field determines its URL
- Pages are rendered using the `Post.tsx` component template

### Component Structure
- `Layout.tsx`: Base layout wrapper for all pages
- `Post.tsx`: Individual blog post template with GraphQL query
- `Posts.tsx`: Blog post listing/grid
- `PostThumbnail.tsx`: Individual post card in the grid
- Main entry point: `src/pages/[...].tsx` (uses Gatsby's client-side routing)

### Styling
- CSS Modules for component styling (e.g., `post.module.css`, `layout.module.css`)
- Custom fonts: Butler (serif), Silk Serif, Forum Regular
- Type-safe CSS Modules via `module.css.d.ts`

### TypeScript
- Gatsby's `graphqlTypegen` is enabled for type-safe GraphQL queries
- Type definitions in `*.type.ts` files (e.g., `post.type.ts`, `posts.type.ts`)
- Strict mode enabled

## Important Constraints

**Markdown Frontmatter Requirements:**
- All post paths MUST begin with `/` (e.g., `path: /my-post`) for correct routing
- Every post MUST have a `featuredImage` field or the site will fail (this is a known limitation)
- Escape special characters in titles (e.g., apostrophes)

## Testing

- Jest configured with ts-jest and jsdom
- CSS imports mocked via `identity-obj-proxy`
- Run with: `ts-node node_modules/.bin/jest`
