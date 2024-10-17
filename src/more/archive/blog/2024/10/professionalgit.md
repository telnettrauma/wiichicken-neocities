---
layout: blog/24/10/100daystounload.njk
title: "Working With More Complex Git"
date: 2024-10-09
light: "#ffdad4"
dark: "#3a0a04"
articleNumber: 3
permalink: "/more/archive/blog/2024/10/professionalgit.html"
---
Some people see doing things other than using the Neocities editor or copy pasting changes into the Neocities editor as "ruining the experience," but using Git was something that I wish I did much earlier. It makes everything so much easier to use, doesn't change the way I actually make my website, and allows me to come back to projects or experiment without the website breaking for everyone until I'm finished.

I used to just instantly update the site whenever I pushed a commit, but after some time I realized this was holding me back. It also made things confusing for writing site updates, as I didn't have a specific time when I would write them. Instead, I would just write them whenever.

Now, I update the site almost every Sunday. This allows me to work on bigger projects where I would have to make multiple commits. The way I do this is having 2 branches, `main` and `live`. The `main` branch is the work in progress branch, while the `live` branch is the version that everyone gets to see. I also sometimes update the `live` branch on days other than Sunday, usually when publishing new content such as blog posts. I am not very consistent with that. Sometimes much larger projects would get their own branch, and I would merge the branches together once the time came.

When I started 100DaysToUnload, I realized that this current setup is a good start, but it will get really annoying to manage when writing a ton of blog posts. So, I added a third branch. This allows me to write articles using more than one commit without either publishing them early, or adding all my other site updates for the week early. So far, this has worked out great.

One thing that is annoying is pull requests. I am the only person who makes commits on this repository. Having to ask myself for permission to make sure a branch is up to date can get somewhat annoying. Luckily, the only times I really have to make a pull request is when I'm updating the site, as pull requests only add/remove changes, not change a branch to the exact point in time of the other branch.

%% TODO add link once i make the tutorial, if i ever make it %%
Setting up Git is quite easy, and takes like 15 minutes to adapt to, especially if you use Visual Studio Code. I want to make a tutorial for how to setup updating your site with Git sometime in the future. [afellowu already has a good tutorial for installing with 11ty](https://afellowu.neocities.org/blog/11ty-github-and-neocities){target=_blank}, which I followed, however I don't use 11ty, and I have already seen sites make the same mistake as me, so I want to make my tutorial for how to setup Git without 11ty. Accidentally replacing your index page with a plaintext file saying you don't know what you're doing is only funny when it doesn't happen to you.

(the Internet Archive didn't have an archive of the day it happened, but i think you can imagine what the page looked like from the raw code:)
```md
‐‐‐
title: Main Page
layout: layout/base.njk
‐‐‐

# Uh oh! I broke something!

uhhhh... awkward!
```

Luckily, because you're using Git, you can just revert the change.