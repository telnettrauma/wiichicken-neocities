---
layout: blog/24/10/100daystounload.njk
title: "Using 11ty"
date: 2024-10-20
light: "#f7e388"
dark: "#211b00"
accent: "#ffdd00"
articleNumber: 14
permalink: "/more/archive/blog/2024/10/using11ty.html"
---
Sometimes you have to realize that you're just hating things for the sake of hating. For me that was the case with static site generators. I have always wanted to make my site "100% hand coded" (despite most pages just being copy pasted from templated I created). But once I tried [11ty](https://www.11ty.dev){target=_blank}, I realized just how fun and easy they can be.

A static site generator basically allows you to generate a plain webpage, like the one you're looking at now. The main benefits are that they allow you to use templates, and write in markdown instead of HTML. Some people reading this blog might not know what that means, so let me show you.

![Screenshot of the same document in HTML and Markdown](https://i.imgur.com/t6t6mo3.png)

Both of the code documents shown are the same page. The main difference is that the one on the left is what I would have to right before, while the one on the right is what I write now. If you can write using Obsidian ([like I do](notion.html)) or even if you can format Discord messages, you can now write using markdown. And the cool thing is that you can use templates so pages can be consistent, and you can add parameters to each template so make each page unique. For example, I use them to change the article count at the bottom of the page, as well as the title, date, and colors the page uses. And if you ever want to make changes to a template, you can change all the pages that use it at once, instead of manually adjusting each one.

Another cool thing about 11ty is that you can use HTML along with Markdown in your documents, so you aren't entirely limited to text. So if I wanted to add a marquee inside my page,

<marquee><p>I could do that.</p></marquee>

## Installation & Setup

Installation and setting up was honestly not as hard as I thought it would be. When I setup Git for this site, I downloaded 11ty as well, because I was following [afellowu's 11ty and Git tutorial](https://afellowu.neocities.org/blog/11ty-github-and-neocities){target=_blank}, but I didn't use 11ty until now.

Setting up 11ty with my already existing site was much quicker than I thought. I thought it would be a multi-day project, but I knocked it out in about 30 minutes. You don't have to setup all your existing pages to use it, you can just start using it and it won't modify any of your existing files unless you set it to do so.

Because I draft all these posts in markdown, converting the existing pages that I did want to change wasn't too hard. I just synced all their properties and went on my way. And the cool thing was that once I compiled the pages, the HTML code was the exact same, so it was like nothing ever changed.

With everything said, there are still some features that 11ty doesn't have, but you can add them using plugins. Plugins are a little more confusing, but with the help of Stack Overflow, I was able to make them work. The only plugins that I use are [Luxon](https://moment.github.io/luxon/#/){target=_blank}, [markdown-it](https://markdown-it.github.io/markdown-it/){target=_blank}, and [markdown-it-attrs](https://github.com/arve0/markdown-it-attrs){target=_blank}. This is what I use each plugin for:

- **Luxon** is used for the dates at the top of articles. Instead of typing out `October 20, 2024`, I just use `10/20/2024` and it is automatically converted
- I originally started using **markdown-it** because I wanted every link to open in a new tab when clicked. However, when I started working on making other pages on my site use 11ty, I realized I didn't need every single page to open in a new tab. So, I started using
- **markdown-it-attrs**, which allows me to specify if I want each link to open in a new tab or not
## Limitations

First off, I am not going to replace every single page on my website with an 11ty generated page. The only pages that I have used 11ty for are ones which use custom designs, would benefit from templates, and are primarily text based. Currently the only pages that use it are the [archive wiki pages](/more/archive/){target=_blank} and the #100DaysToOffload blog posts (which I keep calling them \#100DaysToUnload by accident). I might make some more things use it, but right now I still want to keep things simple.

Another issue is compiling. Because you actually have to generate the sites, you need to have node.js installed, as well as all the required packages. And including plugins, you could end up with a ton of things that you need to install, so that means I cannot just run the compiler on any computer.

However, compiling isn't too much of an issue, because I can just have GitHub compile for me whenever I commit, and then automatically open a pull request with the changes made during compiling. This means I don't have to compile on the computer I'm using. The main issue is that I have to select a branch that will run the compiler on commit, as well as another branch that the compiled files will go to. Currently I have the compiler run on the `live` branch, and push the changes to `main`, as I want the `main` branch synced with `live`. However, this doesn't really work, as the site is updated whenever something is pushed to `live`, and the compiled files aren't pushed to `live`, so the site doesn't even see them. A better strategy would be compiling on every branch, and have it push back to that branch. But I'm still working on that, and the last time I tried I accidentally caused a recursion loop which ended with the `live` branch being updated a few days early. I need to learn actual Git.

With this being said, compiling is really fast with 11ty, so it's not that annoying. And only once have I had an issue where I accidentally pushed changes to the live site without compiling, causing links to appear but pages not to.

## Future

Currently, I still have to do a lot of manual labor, and it would be nice to cut down on it. For example, I still manually update the RSS feeds, as well as article lists. So it would be a little nice to automate some of that. But it's not too big of an issue right now.

## Should You Use 11ty?

It depends. For people who don't write blog posts too often, I would just say no. Same with people who use the Neocities editor or don't have Git setup. Those are really important things that will make using 11ty a much better experience.

However, if you write a lot of blog posts and have a little bit of technical experience, I would totally recommend using 11ty if you want to. It's really easy to setup, easy to maintain, doesn't bloat your site, and has a lot of other fun tricks.