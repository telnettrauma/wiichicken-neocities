---
layout: blog/25/layout.njk
title: "I'm (Partially) a Linux User Now"
date: 2025-06-08
permalink: "/more/archive/blog/25/6/ubuntu.html"
description: "How a bug on Windows explorer brought me to Ubuntu, and why I'm not happy to be here"
---
You read the title, I am now using Linux. Somewhat. I'm actually dual booting Windows 11 and Ubuntu.

## Why?

Most people switch to Linux because they're tired of Microsoft, and that's somewhat the reason why I switched. But instead of switching as a middle finger towards Windows, it was because of a glitch that got really annoying.

About a month ago, the Windows Explorer started getting really buggy. Randomly when I would open folders, the entire process would crash. And later on it started to get even worse. Whenever I right clicked anywhere on the desktop, explorer would crash. It got so bad I had to start using [OneCommander](https://www.onecommander.com){target=_blank} as my explorer. However, the issue wasn't the bug itself, but the fact I couldn't get it fixed. I tried **every** single troubleshooting step recommended online, and still **nothing** would make my explorer work again.

### Nothing Just Works Anymore

About 5 years ago when I got my iPhone 6, I loved iOS because everything "just worked," unlike Android which I had been using before. Yeah, I was trading off customization (something that was very important to me), but that was worth it as I could just use my phone without having to worry about the home screen suddenly refusing to load.

But that was back in *iOS 12*. Now *iOS 19* (sorry, *iOS 26*) is going to be announced in a few days, and the current state of the OS is a mess. There are so many random glitches, especially visual bugs. There aren't enough bugs to make it seem unstable, but there are just enough to feel like a beta. Here are just some of the bugs I experience:

- Randomly my volume is forced on max, with no way to turn it down
- I can only use iMessage from my watch
- App icons randomly go invisible on the home screen
- When cropping screenshots, sometimes it ignores the crop
- **Every** notification I get twice (not just text messages, which I know text messages repeat twice)
- AirDrop is a gamble on if it works
- For almost 8 months the date widget on my lock screen randomly vanished, until suddenly appearing again last month

And so many more things I won't include because this is an article about Linux. Point is, reliability is down greatly. I'm not saying that iOS 12 had no bugs, but it certainly had a lot less. There was a quality assurance team that focused on the OS, not on *Freeform*[^1].

The same thing can be said about Windows. While some of it is my fault (I do have things like custom CSS for my browser itself, not the web pages), I feel a lot of people share the sentiment that software just isn't as good as it used to be. I want something that's flexible, but still works.

## Installing Ubuntu

At first, I wanted to move to a Mac. However, those are expensive, and I just spent `$1,200` on car repairs. I don't have Mac money right now. It sucks, because not only do Macs match my workflow the best, but they're actually supported by companies (in some cases better than on Windows). Maybe once my laptop hits the fan I'll consider it.

So, like that friend who can get you into a blue collar job, I ran to the old reliable: Ubuntu. I've previously used [Kubuntu](https://kubuntu.org){target=_blank} on a second laptop, but it annoyed me. The customization was cool, but actually using it casually was a pain. I decided on Ubuntu because it felt like it would be the most stable, intuitive, and clean of all the distros. Plus, it made setting up dual booting easy, kinda.

### Setting up Dual Booting

Setting this up was a pain, but that was mostly the fault of Windows. You need to create a partition[^2] for Windows and Ubuntu, but luckily Ubuntu will create one for you, very nice. However, it can only create one if Windows lets it. You have to disable a ton of Windows features, or else the shrink size will be comedically small (`1500 MB`). Some of these features include:

- System restore
- Paging file (virtual memory)
- Quick boot

It took about 2 hours, but I was finally able to make everything work. And now, here I am. In Ubuntu.

## Things I Like

I **love** how good memory efficiency is. My laptop fan rarely ever gets loud, and CPU usage is always low. I have a browser and 3 Electron apps open right now, and I'm hovering at ~1.8% usage. Just, yes!

Also, I will say Ubuntu is clean. It doesn't have the classic FOSS (Free/Open Source Software) jank in the design.

## Things I Don't Like

Although a lot of the apps I use are available, a lot of apps I use also aren't. For example, [ShareX](https://getsharex.com){target=_blank}, a really important tool to my workflow, isn't available for Linux. But one of the most annoying ones not available is GitHub Desktop.

I can use Git without GitHub Desktop, but one of the things I like is how easy it makes authenticating for private repos. I sync my [Obsidian](https://obsidian.md){target=_blank} vault with Git, but every 3 minutes I get a popup asking me to authenticate. No matter how many times I do (even if I use a token), the popup still returns. This is very frustrating, as you could likely imagine.

And another annoying thing is the top bar. I remember in much earlier versions of Ubuntu the top bar behaved like the macOS one, where it showed menu commands. But it no longer does that. Now, it shows an indicator for your virtual desktop (not virtual machine), the clock, and status area. I feel all of this could've been put on the dock, it just wastes space being at the top with no real purpose.

Another annoying thing is drivers, specifically interactions with my monitor. Because I use a laptop connected to a monitor, obviously the laptop has a screen. But an issue with this is during startup, things only appear on the screen, including when in textmode. So, I'm left in the dark on what's happening when turning my laptop on. However, I will say that it works with my magic mouse near perfectly. Scrolling is a little weird, but middle click works. The magic mouse doesn't even have a middle click.

The final annoying thing is temptation. Because Linux has so many different versions and things you can do with it, I have to avoid temptation to want to switch what version I'm using. Additionally, because I want something that works, I don't want to install a bunch of stuff. I'm already using Latte and the icon for Obsidian appears as the logo for Twitter's rebrand.

[^1]: Serious question, has anybody ever used Freeform outside of randomly opening it when bored?

[^2]: If you don't know what a partition is, think of it as a folder. It's much more than that, but for simplicity sake it's a folder.