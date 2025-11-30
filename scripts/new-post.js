#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

function slugify(text) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove accents
    .replace(/[^\w\s-]/g, '') // Remove special chars
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/--+/g, '-') // Replace multiple hyphens
    .trim();
}

async function createPost() {
  console.log('=== New Blog Post Generator ===\n');

  const title = await question('Post title: ');
  if (!title.trim()) {
    console.error('Error: Title is required');
    rl.close();
    process.exit(1);
  }

  const dateInput = await question('Date (YYYY-MM-DD, default: today): ');
  const date = dateInput.trim() || new Date().toISOString().split('T')[0];

  // Validate date format
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    console.error('Error: Invalid date format. Use YYYY-MM-DD');
    rl.close();
    process.exit(1);
  }

  const pathInput = await question('URL path (default: auto-generated from title): ');
  const urlPath = pathInput.trim() || slugify(title);

  const imageInput = await question('Featured image filename (default: cover-bathroom.jpg): ');
  const featuredImage = imageInput.trim() || 'cover-bathroom.jpg';

  rl.close();

  // Create directory name: YYYY-MM-DD_slug
  const dirName = `${date}_${slugify(title)}`;
  const dirPath = path.join(__dirname, '..', 'src', 'posts', dirName);

  // Check if directory exists
  if (fs.existsSync(dirPath)) {
    console.error(`\nError: Directory already exists: ${dirName}`);
    process.exit(1);
  }

  // Create directory
  fs.mkdirSync(dirPath, { recursive: true });

  // Create markdown file
  const frontmatter = `---
path: '/${urlPath}'
date: ${date}
title: "${title.replace(/"/g, '\\"')}"
featuredImage: '${featuredImage}'
---

`;

  const mdPath = path.join(dirPath, 'article.md');
  fs.writeFileSync(mdPath, frontmatter, 'utf8');

  console.log(`\n✓ Post created successfully!`);
  console.log(`  Directory: src/posts/${dirName}/`);
  console.log(`  Markdown: src/posts/${dirName}/article.md`);
  console.log(`  URL: /${urlPath}`);
  console.log(`\nNext steps:`);
  console.log(`  1. Add your featured image: src/posts/${dirName}/${featuredImage}`);
  console.log(`  2. Write your content in: src/posts/${dirName}/article.md`);
}

createPost().catch(err => {
  console.error('Error:', err);
  rl.close();
  process.exit(1);
});
