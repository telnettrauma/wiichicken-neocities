---
layout: blog/24/10/100daystounload.njk
title: "Going Back to the Official Discord Client"
date: 2024-11-10
light: "#bdf0b3"
dark: "#002203"
accent: "#00ff44"
articleNumber: 35
permalink: "/more/archive/blog/2024/11/discord.html"
---
Due to concerns about third party clients with Discord, I have decided to go back to using the official Discord client. And I don't like it.

Previously, I would use the Discord website as a web app, so it could live in my taskbar. This changed when I downloaded a third party client, because it was faster, less resource intensive, and wasn't bloated with features. However, I'm starting to suspect that the reasons I got my spam warnings (as discussed in [yesterday's article](support.html)) was simply because I was using a third party client.

On mobile, I'm switching to a version from 2020. I might switch to a slightly newer version, because having replies instead of quotes is nice. However, not having the message composer bubbly is also nice.

On desktop, I decided to download the official Discord app so that I could benefit from [BetterDiscord](https://betterdiscord.app){target=_blank}. It may seem weird that the reason I moved was because of third party clients, only to move to a modified client, but that's different. BetterDiscord adds features into the already existing Discord client, while third party clients are written basically completely from the ground up, and usually rely on your account token.

## Plugins

I'm not going all out with BetterDiscord features, as I simply don't need them, I just want to make the Discord experience more tailored to how I use Discord. So here is a list of the plugins that I actually use:

- [BDFDB](https://github.com/mwittrien/BetterDiscordAddons/tree/master/Library/){target=_blank} - library
- [BetterChannelList](https://github.com/arg0NNY/DiscordPlugins/tree/master/BetterChannelList){target=_blank} - don't actually know if I'm going to end up keeping this one, but I like being able to see the channel previews
- [CollapsibleUI](https://github.com/programmer2514/BetterDiscord-CollapsibleUI){target=_blank} - used for hiding the UI elements when I don't need them to be shown. This one is **really** nice to have
- [HideDisabledEmojis](https://github.com/zerebos/BetterDiscordAddons/tree/master/Plugins/HideDisabledEmojis){target=_blank} - I don't use Nitro, so I have no reason for the emojis to be shown in the first place
- [ImageUtilities](https://github.com/mwittrien/BetterDiscordAddons/tree/master/Plugins/ImageUtilities/){target=_blank} - honestly this one is probably doing too much, and I might just go back to [BetterImageViewer](https://github.com/Legend-Master/discord-better-image-viewer){target=_blank}, because all I want is to zoom
- [PinDMs](https://github.com/mwittrien/BetterDiscordAddons/tree/master/Plugins/PinDMs/){target=_blank} - Discord already has this feature, but it's weird and you have to enter a cheat code to unlock it (if you still can anymore)
- [PluginRepo](https://github.com/mwittrien/BetterDiscordAddons/tree/master/Plugins/PluginRepo/){target=_blank} - makes finding and installing plugins easier
- [ThemeRepo](https://github.com/mwittrien/BetterDiscordAddons/tree/master/Plugins/ThemeRepo/){target=_blank} - same as PluginRepo
- [ZeresPluginLibrary](https://github.com/zerebos/BDPluginLibrary){target=_blank} - library

## Themes

On top of that, I also have a few (2) themes that I use. I don't have anything flashy, just some that slightly make the experience better:

- [DTM-16](https://github.com/XYZenix/XYZenixThemes/tree/master){target=_blank} - makes Discord look like how it looked in 2016. i mainly like this one because i like the easing curves on the animation when you hover over a server. the main thing is that its clear Discord's old design was optimized for Mac
- [HorizontalServerList](https://github.com/DiscordStyles/HorizontalServerList){target=_blank} - I'm not in enough servers to benefit from the vertical server list, so I use this

Obviously both the plugins and themes I use are subject to change, these are just what I use at this exact moment.

## Thoughts?

So, despite these enhancements I've made, I still don't like using the official Discord client.

First off, and this is the biggest thing, the official Discord client is **slow**, and I have a kinda good laptop. There are a few things that everything starts to struggle from that can be traced to this:

- Web app
- Too many features
- Too many technologies

**Web Apps** aren't exactly known for being fast or efficient on your memory. Which is funny because Discord launched with one of the main gimmick being that it was memory efficient compared to Skype and TeamSpeak. Despite that, it's just an Electron app, which is a more fancy version of a browser tab.

Having **too many features** is another obvious one, and Discord is no exception. There is so much useless stuff on Discord. What is the point of guilds? Plus, Discord is always monitoring for what games you have running on your computer, and tries displaying an overlay. I know these are old features, but they are still running in the background. And that's not even bringing up the failed Discord game store, which means Discord still has a built in game launcher that has to be kept for compatibility reasons.

Finally, modern websites just use **too many technologies**. For instance, just look at how long the [Discord Acknowledgements page](https://discord.com/acknowledgements){target=_blank} is. I know not every platform uses all of those, but that is still a lot of packages. Did you really need to save your dev team 10 seconds by adding the package [i-voted-for-trump/is-odd](https://github.com/i-voted-for-trump/is-odd){target=_blank}, a package dedicated to telling you if a number is odd?

Because of all these factors, the official Discord client is not a pleasant experience to use. For example, when you click something, there is a really obvious 2 second delay before the page changes. This happens even with BetterDiscord. And notifications are terrible.

Previously, I was used to seeing a count of unread conversations I selected in my taskbar. Only chats that I specifically chose would increment the counter, and each chat would only increment the counter once, so the number wouldn't be inflated by one conversation. Discord shows no number in the taskbar, and if it did, it counts all unread messages, which I have too many of. Taskbar flashing doesn't work either, and using desktop notifications isn't something I want to do, because I value sanity.

Another thing is that when you finally open Discord, you have to wait about 2-3 seconds before new messages are actually rendered on the screen. Look, I'm happy you're trying to save RAM, you're not really good at it, but could you please not make it an inconvenience?

Overall, I haven't been happy about having to move to the official Discord client, but I guess this is just something I am going to have to deal with.