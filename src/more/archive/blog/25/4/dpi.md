---
layout: blog/25/4/dpi.njk
title: "DPI Observations I've Made"
date: 2025-04-24
permalink: "/more/archive/blog/25/4/dpi.html"
---
For my creative classes in college, we usually use Macs. Macs have a beautiful display with a lot of pixels. I've never been a big 4k person—my Apple TV is set to `480p`, but I loved having more than just 1920x1080 pixels for displaying content. You could fit so much more on the screen without having to zoom out. You could actually use programs without them being full screen. It genuinely made me more productive in class. So I knew that I wanted to get my own 4k monitor.

I looked up the prices, and although they weren't terrible, they weren't anything I necessarily wanted to pay for. So, I hopped on eBay, looking for a bargain. And eventually, I found one. I bought one for `$170`, and 2 weeks later, it arrived.

If you're buying something for cheap, there is probably a reason. In my case, there are cosmetic damages to the monitor stand, but I'm looking at the screen, not the stand. Plus, I already have so many papers from school on my desk that it covered up the damages. The other issue is there are 2 stuck pixels on the screen, but it's only slightly annoying. My phone has a stuck pixel, too, so I'm already used to this. As long as you aren't thinking about the pixels, you likely won't notice them, especially because there are so many.

By default, Windows sets the DPI scale to 150%. I know that DPI is more complicated than that, but I'm going by the scale property in the Windows display settings. 150% is cool because you get about twice as much space as `1080p`. However, images that use pixel-perfect rendering (`image-rendering: pixelated;`) have issues of mixels, and look really ugly. You can also instead use 100% DPI, which will give you 4x as much screen space as when using `1080p`, which is actually insane. The problem with this is that there are just too many pixels in my opinion, so many that everything gets hard to read. So currently I keep my scale set to 200%. This makes everything on screen look really smooth, without making things look ugly. You still only get as much screen space as `1080p`, but because everything is bigger, you can make things smaller without impacting readability. When I **absolutely need** more screen space, I will set my scale to 150% temporarily.

I enjoy this a lot, however, there are some weird quirks about using DPI that I feel would be important for webmasters to be aware of. I don't think any of these are intentional results, but bugs with rendering engines, mostly Chromium. Yes, Gecko may have less bugs, but at the same time it's lacking in support, so shut up.

## Buttons

First off, when you use 88x31 buttons to link to other sites, **please** apply the `image-rendering: pixelated;` CSS style to the buttons. I have my button set to automatically apply this when copied from my site, and you can really see the difference. Applying this will preserve the sharp edges and pixel-perfect artwork of buttons whenever they're resized. This will make site buttons look much less ugly on mobile, but also for people who zoom in your page or use a DPI.

Take this example. Notice how most of the buttons look blurry, while mine doesn't. This is because of the `image-rendering: pixelated;` property. It really makes a huge difference, even if it isn't immediately obvious.

![Screenshot of various 88x31 site buttons, with 2 of them using nearest neighbor upscaling](https://i.imgur.com/XCtGu2Z.png)

## Favicons

Favicons are another important thing. Most indieweb sites I've seen only use `16x16`, but there are other sizes that are important. Current best practices include supporting both `16x16` and `32x32`. Some suggest skipping `16x16` entirely, but that is unnecessary in my opinion.

There are 2 ways that you can support multiple sizes:

- A `.ico` file supports multiple sizes, and is likely the easiest. After all, you only need one file, and you're good to go. With that said, who actually uses `.ico` files anymore?
- You can use multiple `.png` files. This is likely the most annoying, especially if you already have a lot of pages on your website. This is an example of the HTML needed for this:

```
<link rel="icon" type="image/png" href="/favicon.png" sizes="16x16">
<link rel="icon" type="image/png" href="//favicon32.png" sizes="32x32">
```

There are a lot of sizes that you can specify for favicon icon sizes. You probably don't need the larger ones, as I doubt anybody is visiting your website on a television or saving your website as a progressive web app. Unless you're me, because I totally am saving my site as a web app. This is how it looks on the macOS dock:

![Screenshot of the macOS dock](https://i.imgur.com/VV3K8IJ.png)

Yes, the border doesn't follow the rounded corner formula[^1], but I'm probably going to be the only person that sees this, so does it really matter? After all, macOS icons would be [better freeform anyway](/more/archive/blog/2024/12/shapes.html){target=_blank}[^2].

If you're making a personal website just for fun, none of this fancy favicon stuff is required. It's tedious work, and only benefits a small number of people. But it's still something that's an option, and it always makes me smile when someone supports it. If you want a tool to maybe make this easier, here is a [favicon generator I found](https://realfavicongenerator.net)[^3].

## i don't know

Finally, there is one issue that has been annoying me forever. I don't even know what causes it to happen. When I visited this site on macOS in Safari, I noticed that the background wasn't starry, only a gradient.

![Screenshot of the blog page of wiggle.monster displayed in Safari](https://i.imgur.com/9AfKMSG.png)

At the time, I assumed this was Safari and WebKit being stupid, like they always are. I had basically no way to test on WebKit, as I don't own a Mac. I have an iPhone, but that wasn't the same[^4]. But when I got a 4K monitor, I noticed the same issue appearing again. Something fishy was going on.

I made a post on Bluesky about this:

<blockquote class="bluesky-embed" data-bluesky-uri="at://did:plc:johso5m3blvy2qy6u7f6zq6s/app.bsky.feed.post/3lla2cl2m6s2q" data-bluesky-cid="bafyreibufco2ivoszb4nghs5hm2afmh3woy7j6ohcrcxuaw5duy6c6qbki" data-bluesky-embed-color-mode="system"><p lang="en">it appears there&#x27;s a bug on chromium where the background of my site doesn&#x27;t appear when you set your windows scaling mode to more than 100%<br><br><a href="https://bsky.app/profile/did:plc:johso5m3blvy2qy6u7f6zq6s/post/3lla2cl2m6s2q?ref_src=embed">[image or embed]</a></p>&mdash; wiiChicken&#x27;s Wonderful World (<a href="https://bsky.app/profile/did:plc:johso5m3blvy2qy6u7f6zq6s?ref_src=embed">@wiggle.monster</a>) <a href="https://bsky.app/profile/did:plc:johso5m3blvy2qy6u7f6zq6s/post/3lla2cl2m6s2q?ref_src=embed">March 25, 2025 at 3:53 PM</a></blockquote><script async src="https://embed.bsky.app/static/embed.js" charset="utf-8"></script>

The strange thing is that I cannot figure out what exactly causes this bug to happen. The way I have everything setup is a background image, and then an element that takes up the whole screen and remains in place. This element is a gradient, and uses `mix-blend-mode: color;` to apply the effect. But when I tried recreating this exact setup, it would work and I have no idea why.

One day, I hope to fix this very annoying bug. But that day has not come yet.

[^1]: Completely unrelated, did you know that Microsoft Office has a gay mode, only on macOS? ![Screenshot of the "Show Your Pride" setting in Microsoft Office on macOS](https://i.imgur.com/y1rw5VM.png) All it really does is adds rainbow accents to some parts of the UI (such as the zoom slider) as well as a rainbow border around the app icon while it's running. ![Screenshot of PowerPoint in the macOS dock, with a rainbow border around the app icon](https://i.imgur.com/ybi6fCR.png) Windows users are forced to be straight.

[^2]: I know they technically still are freeform, but all the icons are clearly a squircle, which is boring. The iPhone already took squircles!

[^3]: Okay, fine, the only reason I found it was because it was linked in the [Stack Overflow post](https://stackoverflow.com/questions/4014823/does-a-favicon-have-to-be-32%C3%9732-or-16%C3%9716){target=_blank}.

[^4]: There is actually a way you can test locally on mobile. Check out this article from Ridvenge: [How to Test Your Website Locally on Mobile](https://ridvenge.neocities.org/scrapbox/test-locally){target=_blank}