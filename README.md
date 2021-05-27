Descritiion
---

forked by https://github.com/timlrx/tailwind-nextjs-starter-blog

이 프로젝트는 https://github.com/timlrx/tailwind-nextjs-starter-blog 를 fork해 커스터마이징한 repo 입니다.

기존 프로젝트에서 사용중인 next/image를 제거하고 static export가 가능하게 구조를 변경했으며 project 탭을 블로그 갤러리 뷰로 사용하고 있습니다.

### 블로그 작성

/data/blog

### 페이지 작성

/staticPages

### Frontmatter

blog 작성시 주요 필드 정리

```
title (required)
date (required) '2021-01-01'
tags (required, can be empty array) ['test1','test2']
draft (optional) true | false
summary (optional) 
thumbs (required, can be empty array) ['/images/avatar.png'] 
```

page 작성시 주요 필드 정리

```
title (required)
date (required)
tag (optional)
```



![tailwind-nextjs-banner](/public/static/images/twitter-card.png)

# Tailwind Nextjs Starter Blog

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/timlrx/tailwind-nextjs-starter-blog)

This is a [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/) blogging starter template. Comes out of the box configured with the latest technologies to make technical writing a breeze. Easily configurable and customizable. Perfect as a replacement to existing Jekyll and Hugo individual blogs.

## Examples

- [Demo Blog](https://tailwind-nextjs-starter-blog.vercel.app/) - this repo
- [My personal blog](https://www.timlrx.com) - modified to auto-generate blog posts with dates

Using the template? Happy to accept any PR with modifications made e.g. sub-paths, localization or multiple authors

## Motivation

I wanted to port my existing blog to Nextjs and Tailwind CSS but there was no easy out of the box template to use so I decided to create one.

It is inspired by [Lee Robinson's blog](https://github.com/leerob/leerob.io), but focuses only on static site generation. Design is adapted from [Tailwindlabs blog](https://github.com/tailwindlabs/blog.tailwindcss.com).

I wanted it to be nearly as feature-rich as popular blogging templates like [beautiful-jekyll](https://github.com/daattali/beautiful-jekyll) and [Hugo Academic](https://github.com/wowchemy/wowchemy-hugo-modules) but with the best of React's ecosystem and current web development's best practices.

## Features

- Easy styling customization with [Tailwind 2.0](https://blog.tailwindcss.com/tailwindcss-v2)
- Near perfect lighthouse score - [Lighthouse report](https://www.webpagetest.org/result/210111_DiC1_08f3670c3430bf4a9b76fc3b927716c5/)
- Lightweight, 43kB first load JS, uses Preact in production build
- Mobile-friendly view
- Light and dark theme
- [MDX - write JSX in markdown documents!](https://mdxjs.com/)
- Server-side syntax highlighting with [rehype-prism](https://github.com/mapbox/rehype-prism)
- Math display supported via [KaTeX](https://katex.org/)
- Automatic image optimization via [next/image](https://nextjs.org/docs/basic-features/image-optimization)
- Flexible data retrieval with [next-mdx-remote](https://github.com/hashicorp/next-mdx-remote)
- Support for tags - each unique tag will be its own page
- Support for nested routing of blog posts
- Projects page
- SEO friendly with RSS feed, sitemaps and more!

## Sample posts

- [A markdown guide](https://tailwind-nextjs-starter-blog.vercel.app/blog/github-markdown-guide)
- [Learn more about images in Next.js](https://tailwind-nextjs-starter-blog.vercel.app/blog/guide-to-using-images-in-nextjs)
- [A tour of math typesetting](https://tailwind-nextjs-starter-blog.vercel.app/blog/deriving-ols-estimator)
- [Simple MDX image grid](https://tailwind-nextjs-starter-blog.vercel.app/blog/pictures-of-canada)
- [Example of long prose](https://tailwind-nextjs-starter-blog.vercel.app/blog/the-time-machine)
- [Example of Nested Route Post](https://tailwind-nextjs-starter-blog.vercel.app/blog/nested-route/introducing-multi-part-posts-with-nested-routing)

## Quick Start Guide

1. `npx degit https://github.com/timlrx/tailwind-nextjs-starter-blog.git`
2. Personalize `siteMetadata.json`
3. Modify `projectsData.js`
4. Modify `headerNavLinks.js` to customize navigation links
5. Add blog posts
6. Deploy on Vercel

## Development

First, run the development server:

```bash
npm start
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Extend / Customize

`data/siteMetadata.json` - contains most of the site related information which should be modified for a user's need.

`data/projectsData.js` - data used to generate styled card in projects page.

`data/headerNavLinks.js` - navigation links.

`data/logo.svg` - replace with your own logo.

`data/blog` - replace with your own blog posts.

`public/static` - store assets such as images and favicons.

`css/tailwind.css` - contains the tailwind stylesheet which can be modified to change the overall look and feel of the site.

`components/social-icons` - to add other icons, simply copy an svg file from [Simple Icons](https://simpleicons.org/) and map them in `index.js`. Other icons uses [heroicons](https://heroicons.com/).

`components/MDXComponents.js` - pass your own JSX code or React component by specifying it over here. You can then call them directly in the `.mdx` or `.md` file. By default, a custom link and image component is passed.

`layouts` - main templates used in pages.

`pages` - pages to route to. Read the [Next.js documentation](https://nextjs.org/docs) for more information

## Post

