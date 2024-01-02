# Paul-Elian's personal blog repository

## Troubleshooting

- Always add a `/` at the beginning of your markdown files path in front-matter, otherwise routing won't be done
  correctly.
- Verify that article titles don't contain non-escaped characters as `'` for example.
- The blog needs to have a `featuredImage` field in front-matter of each blog post in order to work correctly. This is
  not the desired behavior, but it's a workaround for now.

## Run the site locally

~~~bash
npm start
~~~

will run `gatsby develop`.

Your server will then be available at `localhost:8080`.