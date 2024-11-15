---
layout: blog/24/10/100daystounload.njk
title: "Do We Still Need Shortened URLs?"
date: 2024-11-15
light: "#b0f1c3"
dark: "#00210f"
accent: "#00ff99"
articleNumber: 40
permalink: "/more/archive/blog/2024/11/shorturl.html"
---
When was the last time that you needed to create a shortened URL? Chances are... not anytime within the past few years, unless you work in a few specific industries.

Linking to URLs online used to be completely different. Automatic embeds weren't commonplace, so seeing someone send you a really long URL felt intimidating. And with the rise of the microblogging service Twitter and it's short character limit, people needed a way to make their URLs shorter.

Services such as TinyURL started popping up, allowing users to shorten their URLs to usually less than 20 characters. And if that wasn't enough, users could also pay for extra features, such as analytics, and the ability to set a custom URL name, instead of it being a random string of characters.

It's hard to talk about URL shorteners without talking about ad.fly. The main gimmick of ad.fly compared to the rest was that you could add an advertisement in your URL. Users would have to wait 5 seconds before they could continue to the linked webpage, and you would earn a small bit of money for each click. These were all over YouTube back in the day. The problem wasn't the concept, but how sketchy the ads themselves were. A lot of ads were sketchy, commonly using dark patterns such as fake continue screens. They were also just annoying.

However, the most popular of these URL shorteners, at least in my opinion, was the Google URL shortener. It was completely free, run by Google, easy to use, and not sketchy.

Everything was going good, until 2018, when Google announced they were [disabling creating new short URLs in 2019](https://developers.googleblog.com/en/transitioning-google-url-shortener-to-firebase-dynamic-links/){target=_blank}, opting for their replacement of [Firebase Dynamic Links](https://firebase.google.com/docs/dynamic-links){target=_blank}, whatever that is. Existing links would continue to work, but no new ones could be created. People were obviously confused and annoyed, because the Google URL shortener was really popular.

However, once the day came for Google to shut down the URL shortener, nobody really seemed to care anymore. The internet has changed since 2009, and people realized there wasn't a need for shortened URLs.

For example, embedding became much more popular of a practice. If you post a link online, most services will convert it to a preview of the site, usually the site name, page title, the first sentence or two of the article, and sometimes an image. This was much more information than you could get from simply a URL.

Not only that, but Twitter had launched their t.co URL shortener, which is used for every link posted on Twitter, whether you want it or not. And even if Twitter didn't have this service, links on Twitter only [count as 23 characters](https://developer.x.com/en/docs/counting-characters){target=_blank}, no matter how long the URL is.

The only real uses for shortened URLs are for call to actions in non interactive environments. For example, in videos and on posters. And even that is starting to be replaced by QR codes.

The biggest blow came recently, when Google decided to announce they are going to [completely shut off URL shortener](https://developers.googleblog.com/en/google-url-shortener-links-will-no-longer-be-available/){target=_blank}, impacting **all** links on August 25, 2025. After this, no shortened URLs made with URL shortener are going to work anymore.

And remember Firebase Dynamic Links, the replacement? Those are [deprecated](https://firebase.google.com/support/dynamic-links-faq){target=_blank} now, too.