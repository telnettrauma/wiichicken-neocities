---
layout: blog/25/layout.njk
title: "I Want to Start a Microblog"
date: 2026-10-03
permalink: "/more/archive/blog/26/10/microblog.html"
description: "yes, i want to start a microblog on this site!"
---
A recent personal favorite type of website I see on here is one where the creator frequently updates it with new "entries." They can be about whatever; thoughts on something new, life updates, progress in a video game, or just what they did that day.

Whenever people think of microblogs, I'm assuming they think of platforms such as Twitter and Bluesky. However, I want to start one on this website. I've somewhat considered this blog a microblog for some time, however it really isn't. Microblog posts are usually much shorter, while I try to make each post on this blog at least 200 words. Maybe this is a microblog more in a Tumblr way. I don't know. The main point I'm trying to make is that while my blog posts aren't exactly long, they aren't short either. They usually take at least 30 minutes minimum to write, but most take more.

## Why?

There are a lot of things I have thoughts on, however just because I have thoughts on something doesn't mean I have a lot to say. One of the things I love about microblogging platforms is that I don't have to say much. I can write a single sentence or two, and that's acceptable there. If I have a thought I can quickly beam it out and move on in 30 seconds.

There are a lot of articles on here that I never finished writing because I either moved on too quickly and forgot about it, or I just didn't have enough to say to make a whole article. I don't want a bunch of really short articles on my blog page because I don't want to clutter it, and navigating through a bunch of short pages gets annoying. It also makes regular length articles have less emphasis.

## What?

Because of all of this, I'm thinking of starting a microblog on this website. The posts on it won't be as short as Twitter, but they will be much shorter than the usual posts.

Writing shorter posts will allow me to write about more things, and also hopefully write more in general. Additionally, when I write longer posts it feels like I'm writing an informal essay. I don't want my posts to feel like that, so I'm hoping the microblog format will allow more personality to shine through. A lot of people say I'm funny, but I feel I never show that humor in this website.

### Goals and Implementation

I want to be able to quickly make articles, and preferably make them from more than just my laptop. Currently to make a blog post on here I go through the following steps:

* Write the article in Obsidian
* Turn the article into a page ([11ty](/more/archive/blog/2024/10/using11ty.html) makes this **much** faster, however I still need to do things like add page properties and link to other pages in my site)
* Add the article to the blog index page (and every month I have to do additional work for that due to organizing by month)
* Add the article to the RSS feed

When writing long articles, this isn't too bad. After all, it takes less than 5 minutes. However, this would quickly get tedious when writing a bunch of short articles. So I want the maintenance to be as low as possible. Ideally I should have to update **only 1** file, but at the most 2.

#### Navigation

My idea is to put all posts from the same month on the same page, with each entry grouped by date. I got the idea for this from [What Video Game Did I Play Yesterday?](https://miela583.neocities.org){target=_blank}, which does something similar, except the homepage shows entries from the past whenever, with the older posts being archived by month whenever the sitemaster feels like it.

For navigation, my idea is something similar to the desktop layout for the [Minecraft Wiki](https://minecraft.wiki){target=_blank}, where there is a page heading based sidebar. My articles already have an automatic table of contents feature, so this won't be hard. I was thinking there could be another sidebar for browsing older posts, too. On mobile the navigation sidebar could be at the bottom of the page, and the table of contents sidebar could be at the top of the page, automatically collapsed. Not the best solution ever, but it would work.

#### Optional Features

##### Most Recent Post

Something that would be cool is if the most recent post was displayed on the website homepage. I don't know how this would work though, so that probably won't be happening. The homepage is already big enough and takes like 2 seconds to render, so putting the entire monthly feed on it and later archiving it at the end of the month wouldn't work either.

##### Post Embedding

Another thing is it would be cool to be able to embed individual posts into articles. The best way to do this would be through 11ty partials, however I think that would be too much work for something I admit I would rarely ever use. Additionally, this site already has over 500 files and compiling it takes about 4 seconds, which is really annoying when I want to work on making styled HTML pages or tools. More likely, if I was going to embed a post in another one I would link to it and write out the contents of it using a `blockquote`.

##### Threads

Threads are a good format for when you're doing something and writing about it as you go. I don't really make threads on normal microblogging platforms unless I have more to say than the character limit allows, but I still think they *could* be fun here. With that said, I have no idea how in the world I would actually implement them without it being an HTML mess. This is better as something to workshop if I feel like it later on, as I don't think its worth the effort compared to how little I will use it.

## Issues

While this is cool, I do think there will be some issues.
### Navigation

As I already stated, navigation will be annoying. The way I currently have my blog page setup is having every article title on one page. This allows you to find a page simply by searching the text contents of the page using the tool in your browser. I can't currently put a search on my website (without using something like Google Custom Search), so this is the best I can do. However, with the structure of having all entries for each month on one page, it will make it harder to find articles. This won't be an issue for me writing them, because I can search through my Obsidian vault quickly and easily. But everyone reading this isn't viewing it through Obsidian on my computer with my plugins installed, they're viewing it as a HTML page on a website in a browser.

I was thinking that if I ended up not writing a lot of articles per month I could have a compact list of all the articles for that month I put in the blog index. This may be a little overwhelming, but it would work maybe. I would update this list at the end of the month instead of as I go along.

Another idea for this would be to just suck it up and make people find something they aren't looking for. I don't like this approach. However, this would be the easiest to do as it requires the least effort from me. I like being lazy, but sometimes you need to put an effort into things.

### Main vs. Micro

I fear I would start putting less posts on the main blog and more on the microblog instead. And maybe the length of the microblog posts will become the same as the posts on the regular blog. This would defeat the whole point of having the 2 different blogs, but at least it would get me writing more.

### Not Using It

The biggest and most likely/prominent fear is that about a week after I make the microblog I just forget to use it entirely. I already am a very inconsistent and forgetful person, so this more than likely **will** end up happening after not even a week, which is not good.

There isn't much I can do to gamify a microblog to encourage me to write more to it. I already have a writing goal for the regular blog that I hardly meet and I doubt that's going to change for the microblog. Last year I did the [#100DaysToOffload](/more/archive/blog/2024/10/100daystooffload/) challenge, and while I did write a post 100 days in a row of various qualities, I immediately quit writing after. In fact, I didn't even write a conclusion post when I completed the challenge.

## Conclusion

I don't know why this post would need a conclusion, but it feels weird to have it just suddenly end. So, hey, this is the end of my post.