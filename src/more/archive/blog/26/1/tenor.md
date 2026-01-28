---
layout: blog/25/layout.njk
title: "Tenor GIF Search is Going to Die"
date: 2026-01-28
permalink: "/more/archive/blog/26/1/tenor.html"
description: "the tenor developer api is shutting down and things are looking bleak"
---
## Providers

There are currently two major GIF providers: Tenor and GIPHY.

### GIPHY

[GIPHY](https://giphy.com){target=_blank} is most likely the most popular one. This is likely because GIPHY is sanitized, and has GIFs that would appear higher quality to the average millennial and above. Anyone can upload to the site, but when I was younger I uploaded hundreds of GIFs to the site and not a single one ever got approved. I don't even think it tells you if it did. Instead, most GIFs come from entertainment production companies or artists.

This is somewhat controversial, especially to young people. A lot of relevant topical GIFs aren't on GIPHY. This has led to creators such as [BenJammins](https://giphy.com/BenJammins){target=_blank} who recreate GIFs with themselves so they can be used. However, most people don't understand the reason why these GIFs are recreated instead of having the original, so the creators of these recreations get a lot of hate. Which is somewhat justified, I don't like BenJammins either.

GIPHY has more than just GIFs, however. They also have stickers (which are just transparent GIFs), clips, as well as full editors for making your own stuff. Plus, they feel like an actual company, with a proper brand identity that involves flashy colorful gradients everywhere. Plus they have a monetization strategy: making GIFs to promote things.

Overall, the platform feels sustainable, and isn't a rushed thing.

### Tenor

The other major platform is [Tenor](https://tenor.com){target=_blank}. Although everything on Tenor still needs to be manually approved by moderators, the chances of a GIF getting approved are so much higher you don't even need to think about it. I had created a lot of somewhat popular GIFs on Tenor, some of which I deeply regret.

Tenor feels rushed and thrown together quickly. For instance, the favorite feature will randomly forget what GIFs you favorited, and the website itself isn't memorable at all. With that said, Tenor is still popular due to the ability of allowing anybody to upload anything. However, this is also a negative. Sometimes you will find random friend group inside jokes when looking for something, especially when searching for more specific things. Tenor makes money in the same way that GIPHY does.

In 2018, [Google acquired Tenor](https://blog.tenor.com/google-acquires-tenor-77fdc1be737c), primarily so they could use their GIF search in Google's new keyboard app: Gboard. Uh, guys, the Tenor API is free ![sweat emoji](/media/emoji/sweat.gif). Tenor has also tried branching out, allowing uploading image memes and stickers too. However, these other offerings have had less success. The only platform I've ever seen use Tenor stickers was *Twitter Fleets*, and that [got discontinued](https://blog.x.com/en_us/topics/product/2021/goodbye-fleets){target=_blank}.

## Tenor API Shutdown

On January 13, 2026 Google added a new section to the Tenor FAQ support page: "[Discontinuation of Tenor API service for app developers](https://support.google.com/tenor/answer/10455265#whatll-happen-to-the-tenor-api&zippy=%2Cwhatll-happen-to-the-tenor-api){target=_blank}." Along with this, a bright red banner was put at the bottom of the Tenor API docs informing people of the change, and the ability to make new API keys or sign up was disabled. It was also stated that on June 30, 2026 the Tenor GIF API would quit working entirely.

The strange thing was that Google never made a formal announcement stating why (at least, as far as I could find). And the entire platform isn't shutting down either, just the API. However, the API is the only reason people use the platform. What's the point of uploading GIFs to a site that people can't use GIFs from?

## Migration

Developers essentially had 2 options of what they could do going forward:

- Migrate to GIPHY
- Migrate to a new service, Klipy

### Migration to GIPHY

Some platforms such as Twitter already use both Tenor and GIPHY search at the same time. But other platforms, such as Discord, only use Tenor[^1]. These platforms would have to do the work to start supporting GIPHY. Plus, platforms with younger users likely won't like using GIPHY due to how sanitized it is. It's GIF search for your grandparents.

However, there is an alternative.

## Klipy

[Klipy](https://klipy.com/en-US){target=_blank} is a relatively new platform, crated by people who used to work at Tenor. Like Tenor, users can upload GIFs to the site, but it already has support for many different formats too: GIFs, stickers, clips, memes, emojis, and AI. That's right, the way Klipy was able to quickly increase the size of its GIF library was by allowing users to generate GIFs using AI tools.

Klipy's monetization strategy has been by inserting ads into the search results themselves. Ads can be disabled by app developers, however ads are encouraged to be enabled as the developer gets a cut of the earnings. And the main reason targeting developers is how easy it is to switch to Klipy from Tenor. Instead of having to rewrite a new integration, all API references to `tenor.googleapis.com` can be replaced with `api.klipy.com` as well as replacing the API keys and everything is supposed to just work[^2]. Amazing!

Klipy somewhat disgusts me. The thought of putting ads in GIF search, but also having most of the site content being AI just doesn't sit right with me. Plus, the brand identity of the site is so overwhelmingly ugly it makes me want to vomit. Klipy is still very obviously a young company, but how are you going to call yourself a GIF company when the option to upload GIFs from your mobile device is still coming soon, while you can upload videos just fine. Who has **ever** sent a "clip" from anywhere but their camera roll?

## Future

So, now either everything will be full of ads and AI GIFs, or everything will be overly sanitized. I'm still somewhat rooting for Klipy, I just hope they get everything together.

I'm sad to see Tenor go. It was a somewhat big part of my early teens, which is a really sad thing to say now that I think about it.

**Remember**: when Google buys a product, there's only a matter of time before Google kills it off for no reason.

[^1]: Discord is a bad example for this, as you can search GIPHY using the `/giphy` command. However, the GIF search button uses Tenor, and that's what I assume most people use anyway.

[^2]: [https://klipy.com/migrate](https://klipy.com/migrate){target=_blank}