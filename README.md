# Paul-Elian's personal blog repository

## Troubleshootings

- Always add a `/` at the beginning of your markdown files path in frontmatter, otherwise routing won't be done correctly.
- Verify that article titles don't contain non-escaped characters as `'` for example.

## Deploy to a docker container

~~~bash
npm run build
~~~

Then remove lines containing `brotli` in the generated `nginx.conf`, go to the root dir of the project and run, with Docker installed:

~~~bash
sed -i -e 's/\$PORT/80/' public/nginx.conf && docker run --rm --name local_nginx -v "$PWD/public/nginx.conf:/etc/nginx/nginx.conf" -v "$PWD/public:/etc/nginx/html" -p 80:80 -it nginx:latest
~~~

See [gastby nginx plugin documentation](https://www.gatsbyjs.com/plugins/@vtex/gatsby-plugin-nginx/) for more details.

Your server will then be available at `localhost`.
