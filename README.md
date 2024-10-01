# Sentry Cloudflare Pages Bug

This repository is a demonstration of a bug when adding Sentry to a Next.js project which is then build with @cloudflare/next-on-pages. This massively bloats up the bundle size, making it impossible to deploy.

Related issue: https://github.com/cloudflare/next-on-pages/issues/860

## This is what I did

1. Created 6 new Next.js app with `npx create-next-app@latest`
2. Installed `@cloudflare/next-on-pages` with `npm install @cloudflare/next-on-pages --save-dev`
3. Added `export const runtime = 'edge';` to the dummy `page.tsx` file
4. Created 3 versions with 1, 10, 50 routes respectively
5. Went through sentry setup wizard (just pressed enter through all the options except for the example page, no special configurations)
6. Run the build for each app using `npx @cloudflare/next-on-pages`
7. Check the bundle size of folder `.vercel/output/static/_worker.js`

## Resulting build sizes Table

| # Routes | Build Size (w/o Sentry) | Build Size (w/ Sentry) |
| --- | ---------- | ---------- |
| 1 | 821 KB | 929 KB |
| 10 | 1.3 MB | 7.1 MB |
| 50 | 3.1 MB | 31.5 MB |

Obviously, there is something wrong here with the bundle size when sentry is installed and it is somehow related to the number of routes.
