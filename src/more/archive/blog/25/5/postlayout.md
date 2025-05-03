---
layout: blog/25/layout.njk
title: "New Default Blog Theme"
date: 2025-05-05
permalink: "/more/archive/blog/25/5/postlayout.html"
---
The design for my blog was inspired by [Neonaut's Microblog](https://neonaut.neocities.org/microblog/), where each page on their blog *could* be uniquely themed. The keyword there is **could**. [Some articles](https://neonaut.neocities.org/microblog/2022/google-drive-spam) have unique themes, but most use a basic, default theme.

I've given almost every article on this website a unique theme. At first, each article's theme had a little bit of thought put into it.

[![](https://i.imgur.com/hTfKqk7.png)](/more/archive/blog/2024/1/spotify.html)

And it was like this for some time, although there was **some** quality in themes. That continued, until I participated in [\#100DaysToOffload](/more/archive/blog/2024/10/100daystooffload/). Because I would be writing so many articles, it only made sense to have a uniform theme for each article written for the challenge. To shake it up, I gave each article a unique color, but everything else was uniform.

![Screenshot of the same article layout applied across different articles with different colors](https://i.imgur.com/zPVXmdp.png)

During the challenge I also [setup 11ty](/more/archive/blog/2024/10/using11ty.html), a static site generator[^1]. This made it **so much** easier to write blog posts. Instead of writing in HTML, I could write in markdown, which was much easier. HTML could still be used inside pages, so my creativity wasn't being limited. Plus, 11ty had many benefits. I could use page templates, which made writing many articles much easier. And if I needed to change something across the template, all the pages would be changed at once. And **no Javascript** was required!

Later on, I discovered the partials[^2] feature of 11ty could be used with HTML documents, which would allow me to start removing Javascript from some pages. I became so obsessed with this, I [moved my site to 11ty](/more/archive/blog/updates.html#m1a3) rather than having 11ty only generate specific pages.

Around this time, the blog posts on my site quit having complex layouts. It turns out that sometimes, you just can't come up with a themed layout. Most layouts started being basically the same thing:

- Text in the center of the page with a `700px` page width
- Arial or sans-serif font
- Solid colored background
- If I was feeling nice that day, maybe a border around the page

This just works, but it feels thrown together. I spend less than 5 minutes making the theme for each blog post. There are other issues as well:

- Blog posts have no navigation to other pages on the site
- Look generic, I'm not proud of the design of them
- Mobile compatibility[^3]

Because of all this, I decided it was finally time to make a default, uniform blog layout. And that's what you're looking at right now.

## New Layout

I had a few goals for this new layout that I **had** to meet:

- Make it look like something **I** would make, rather than looking like [Bear Blog](https://bearblog.dev)
- Support robust formatting features, such as footnotes[^4]
- Have a light mode and dark mode
- Include site navigation
- Be responsive for both desktop and mobile

Additionally, I had a couple optional goals. These weren't required, but would still be nice to have:

- Ability to have site navigation work for **any** blog post page, even ones without this layout
- Set custom color themes per article[^5]
- No JavaScript
- Automatically generated table of contents
- [Open Graph](https://ogp.me)

All that ended up with this.

[^1]: A static site generator writes the code for pages automatically, but if no code is changed, the page is never changed. This is how most blogs work, and shouldn't be confused for a dynamic page (like a Twitter feed)

[^2]: Allows inserting code snippets into a page. If the snippet is updated, than every page with that snippet is updated to reflect that snippet. Unlike a template—which inserts your code inside an existing skeleton—a snippet inserts itself into your code, not around it. Does that make sense?

[^3]: I understand people on desktop not wanting to make their complex layouts mobile compatible, but locking people out of my website because they don't have a computer is dumb. I'm not going to lock people who don't have a computer out of culture. Plus, blog posts are images and text, there is no reason I can't optimize the mobile experience.

[^4]: hi

[^5]: Inspired by [so1o.xyz](https://so1o.xyz/blog/mood)