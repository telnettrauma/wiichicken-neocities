---
layout: blog/25/layout.njk
title: "New Default Blog Theme"
date: 2025-05-05
permalink: "/more/archive/blog/25/5/postlayout.html"
description: "Instead of making a generic, unoriginal theme for each article, I decided to make a new uniform theme for my blog posts."
---
The design for my blog was inspired by [Neonaut's Microblog](https://neonaut.neocities.org/microblog/){target=_blank}, where each page on their blog *could* be uniquely themed. The keyword there is **could**. [Some articles](https://neonaut.neocities.org/microblog/2022/google-drive-spam){target=_blank} have unique themes, but most use a basic, default theme.

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

Because of all this, I decided it was finally time to make a default, uniform blog layout.

I had a few goals for this new layout that I **had** to meet:

- **Unique**: Make it look like something **I** would make, rather than looking like [Bear Blog](https://bearblog.dev){target=_blank}
- **Robust**: Support robust formatting features, such as footnotes[^4]
- Have a light mode and dark mode. There's no one word to describe this one
- **Navigable**: Include site navigation
- **Responsive**: Be responsive for both desktop and mobile
- **Inoffensive**: The theme shouldn't get in the way of the article content. If I'm writing about something serious, this theme shouldn't make me appear tone deaf
- **Accessible**: The page should be easy to read for anybody. Additionally, the page should remain perfectly readable when using a browsers reader mode

Additionally, I had a couple optional goals. These weren't required, but would still be nice to have:

- Ability to have site navigation work for **any** blog post page, even ones without this layout
- Set custom color themes per article[^5]
- No JavaScript
- Automatically generated table of contents
- [Open Graph](https://ogp.me){target=_blank}

With my goals set out, I began working on the new layout.

## New Layout

The result of all the work I did is what you're looking at right now. I'm quite happy with how everything turned out. The layout looks nice and hits **most** of the goals I set out on.

### Theme

The theme is white and orange, a color combination I started to like one day and have no idea why. This works really well with the sharp, "futuristic" corners that I like to use. However, when you switch to dark mode, you get a brown and orange look, which although being more rustic, still looks nice.

My favorite part is the header, especially on desktop. I messed around with line height and leading, and it really paid off. And the best part is that its mobile responsive.

### Navigation

I decided to use a navigation bar that's similar to the one already on the site. However, this time the designs are consistent across desktop and mobile.

I might make adjustments to it in the future. I feel it's a little too flashy and colorful for the rest of the page, as well as a little too big, but it works. I wanted to toy around with making the colors orange to match the page, but I figured that would look weird on pages without the theme.

### Features That Didn't Make It

Sadly, not everything that I intended to include made it into the final version. I might work on adding them in later, but they aren't here as of writing.

Per article customization was one of those, mainly because I couldn't figure out how it would work. Maybe I could change the colors, but I definitely couldn't change the background image. Plus, I don't think there would be much value in being able to change these.

I skipped out on Social Graph support simply because I don't have a need for that. Search engine optimization isn't that big of a priority for me. It would probably be easy for me to setup social graph, but it just isn't in my best interest right now.

Finally, I didn't include the table of contents because I don't know how and I'm too busy playing Splatoon 3 to learn it.

## Future

I will likely start applying this theme to articles that have little to no theming. Most themed articles will remain the way they currently are, but I will include the brand new navigation bar on them.

[^1]: A static site generator writes the code for pages automatically, but if no code is changed, the page is never changed. This is how most blogs work, and shouldn't be confused for a dynamic page (like a Twitter feed)

[^2]: Allows inserting code snippets into a page. If the snippet is updated, than every page with that snippet is updated to reflect that snippet. Unlike a template—which inserts your code inside an existing skeleton—a snippet inserts itself into your code, not around it. Does that make sense?

[^3]: I understand people on desktop not wanting to make their complex layouts mobile compatible, but locking people out of my website because they don't have a computer is dumb. I'm not going to lock people who don't have a computer out of culture. Plus, blog posts are images and text, there is no reason I can't optimize the mobile experience.

[^4]: hi

[^5]: Inspired by [so1o.xyz](https://so1o.xyz/blog/mood){target=_blank}