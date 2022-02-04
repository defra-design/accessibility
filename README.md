# Defra Accessibility Resources 

This repository contains the code used to build the Defra accessibility resources site.

## Creating a new post

To add a new blog post, you can use either the GitHub Web UI or you can clone this repository and make the changes locally.

[Inside of the source content, navigate to the blog folder and then the content folder.](#)

Within the content folder, create a new file. This should be named appropriately, relating to your post. The file can be written in HTML or Markdown, so must end in either `.html` or `.md`.

Start by adding some of [11ty's YAML front matter data](https://www.11ty.dev/docs/data-frontmatter/) - data that makes up specific parts of the template that we have created for this site.

This data includes:
* `title` - The title of the new post.
* `author` - An array of authors who have contributed to the post.
* `summary` - A short summary of the post.
* `tags` - Topics that this post relates to, currently we have `awareness` and `knowledgeSharing`.

An example of front matter data can be found below.

```markdown
---
title: Sharing knowledge with a11y community
author: ["Joe Lamyman"]
summary: This is a blog post that provides some of the granular lessons that we have learnt about a really specific feature, please provide feedback if we have missed anything.
tags: 
    - awareness
    - knowledgeSharing
---
```

Beneath this front matter data, you can insert the contents of your blog post as you would any other HTML or Markdown file.

Once complete, you can commit the change and when pushed to the `main` branch, GitHub Actions will automatically build the site and update the live version.

**If you do not want the live site to be updated automatically (if content has not been peer-reviewed yet), please create a branch.**

## Installation for building the website locally

Clone this repository to a directory on your machine.

Use the package manager npm by installing [Node](https://nodejs.org/en/download/).

Once you have npm installed, inside the 11ty-github-pages-test folder that you cloned earlier, install the dependencies using the following command.

```bash
npm install
```

## Usage

Once installed, you should be able to build the site locally using the following command.

```bash
npx @11ty/eleventy
```

[More information about 11ty can be found in the 11ty documentation website](https://www.11ty.dev/docs/).
