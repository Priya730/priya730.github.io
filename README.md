# Welcome to my digital garden 🌱
[![pages-build-deployment](https://github.com/Priya730/priya730.github.io/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/Priya730/priya730.github.io/actions/workflows/pages/pages-build-deployment)

I'm a software developer, and by day, I'm deep in the world of tech innovation at [HackerRank](https://www.hackerrank.com). In this cozy corner of the internet, you can expect to join me on a [journey of coding adventures](https://priya730.github.io/achievements). From my [latest projects](https://priya730.github.io/projects) to [discoveries](https://priya730.github.io/blog) in the ever-evolving tech landscape, I'm here to share it all. Plus, we'll dive into design, explore new technologies, and maybe even learn a few development tricks together. 

This isn't just another website; it's my place 🏡 , and I'm thrilled to have you here. So go ahead, click around, and let's embark on this journey together. Welcome to my world of coding, building, and exploring tech! 🚀

### Develop site
Start the site by running `npm run develop`.

Site is now running at `http://localhost:8000`!

### Code Highlighting

**Language tabs:**

When you add a language (such as e.g. `js` or `javascript`) to the code block, a little tab will appear at the top left corner.

````
```js
// code goes here
```
````

**Code titles:**

You can display a title (e.g. the file path) above the code block.

````
```jsx title=your-title
// code goes here
```
````

Or without a specific language:

````
```none title=your-title
// code goes here
```
````

**Line highlighting:**

You can highlight single or multiple (or both) lines in a code block. You need to add a language.

````
```js highlight=2,4-5
const test = 3
const foo = 'bar'
const harry = 'potter'
const hermione = 'granger'
const ron = 'weasley'
```
````

**Show line numbers:**

If you want to show line numbers you can either globally enable them (see theme options) or on a block-by-block basis. You can also combine that with the other attributes.

````
```js withLineNumbers
// code goes here
```
````

### Adding content

#### Adding a new blog post

New blog posts will be shown on the index page (the three most recent ones) of this theme and on the blog overview page. They can be added by creating MDX files inside `content/posts`. General setup:

1. Create a new folder inside `content/posts`
1. Create a new `index.mdx` file, and add the frontmatter
1. Add images to the created folder (from step 1) you want to reference in your blog post
1. Reference an image as your `banner` in the frontmatter
1. Write your content below the frontmatter
1. Add a `slug` to the frontmatter to use a custom slug, e.g. `slug: "/my-slug"` (Optional)
1. Use `defer` to opt-in into Deferred Static Generation (DSG) (optional)

**Frontmatter reference:**

```md
---
title: Introduction to "Defence against the Dark Arts"
date: 2019-11-07
description: Defence Against the Dark Arts (abbreviated as DADA) is a subject taught at Hogwarts School of Witchcraft and Wizardry and Ilvermorny School of Witchcraft and Wizardry.
defer: false
tags:
  - Tutorial
  - Dark Arts
banner: ./defence-against-the-dark-arts.jpg
canonicalUrl: https://random-blog-about-curses.com/curses-counter-curses-and-more
---
```

**The fields `description`, `banner`, `defer` and `canonicalUrl` are optional!** If no description is provided, an excerpt of the blog post will be used. If no banner is provided, the default `siteImage` (from `siteMetadata`) is used. If no `canonicalUrl` is provided, it will not be included in the header.

The `date` field has to be written in the format `YYYY-MM-DD`!

#### Adding a new page

Additional pages can be created by placing MDX files inside `contents/pages`, e.g. an "About" or "Contact" page. You'll manually need to link to those pages, for example by adding them to the navigation (in `siteMetadata`). General instructions:

1. Create a new folder inside `content/pages`
1. Create a new `index.mdx` file, and add the frontmatter
1. Write your content below the frontmatter
1. Optionally add files/images to the folder you want to reference from the page
1. Use `defer` to opt-in into Deferred Static Generation (DSG) (optional)

**Frontmatter reference:**

```md
---
title: About
slug: "/about"
defer: false
---
```
