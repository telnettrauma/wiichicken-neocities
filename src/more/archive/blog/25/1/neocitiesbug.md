---
layout: blog/24/10/100daystounload.njk
title: "Really Stupid Neocities Bug I'm Experiencing"
date: 2025-01-04
light: "#ffd9df"
dark: "#3a0718"
accent: "#ff0073"
articleNumber: 90
permalink: "/more/archive/blog/25/1/neocitiesbug.html"
---
I'm having a strange error with my website. I think this is being caused by the [deploy-to-neocities](https://github.com/marketplace/actions/deploy-to-neocities){target=_blank} GitHub action, but it could also be caused by Neocities itself. There are actually two main issues, one of which is annoying but harmless. However, the other is the main thing I'm having a problem with.

## Small Issue - File Deletion

First, the small issue, which has just been annoying but annoying me for much longer.

I tried linking this site to my Discord profile. I could never make it work, the Discord process for linking a website to your profile is annoying and just doesn't work correctly for some reason.

Anyways, as apart of this process, you have to add a file at `.well-known/discord` on your site. For some reason this folder behaves strange. On the Neocities dashboard, it appears completely empty. The only way to get to the `discord` folder is to manually create it inside `.well-known/`, which will cause the folder to appear.

It should be noted that you aren't supposed to make a folder called `discord`, but a file without a file extension. When I noticed this, I tried deleting the `discord` folder, but it would not let me.

*I just tried this again and it showed a new error screen notifying that the problem has been recorded.*

After that, I was able to make the `discord` file, but it didn't work. However, there is no way to access it anymore. If you try creating the file again, you get the error:

> Web page ".well-known/discord" already exists! Choose another name.

And if you manually try editing the file by changing the page URL, you get an error saying you cannot edit a directory.

Anyways, because of this, deploy-to-neocities tried deleting these files (because I had them in my repo and deleted them), and it always runs into this error:

```
body: '{\n' +
(https://github.com/telnettrauma/wiichicken-neocities/actions/runs/12613126777/job/35150602795#step:7:249) ' "result": "error",\n' +(https://github.com/telnettrauma/wiichicken-neocities/actions/runs/12613126777/job/35150602795#step:7:250) ' "error_type": "missing_files",\n' +(https://github.com/telnettrauma/wiichicken-neocities/actions/runs/12613126777/job/35150602795#step:7:251) ' "message": ".well-known/discord was not found on your site, canceled deleting"\n' +(https://github.com/telnettrauma/wiichicken-neocities/actions/runs/12613126777/job/35150602795#step:7:252) '}\n',
```

Because this happens during the deletion part, I am able to upload and edit files, but any files I delete in the repo aren't deleted on the live site. This isn't too annoying as I have plenty of storage, as well as editing through the repository anyways. However, you could still see how this is annoying and confusing.

## The New Error - Wrong File

This next error is a little different.

For Christmas, you may recall I redid the entire site to be in light theme. I use a grainy texture in pages, and as part of the theme I changed the texture to fit with the light theme. However, it is no longer Christmas, so I switched back to the dark theme.

Everything has gone great, except for some reason the main grain texture I use remains light. In my repo it is dark, but on the live site it's always light. This is what I have tried:

- Clearing the cache. However, this cannot be the case because it appears in automated site screenshots as well as other devices
- Manually replacing the image on the Neocities dashboard
- Deleting the image and uploading the new one

However, every time the site updates, the light version of the static appears. This should not be happening, and is getting really annoying. There are still a few more things I could try. However, for right now I think I'm better just disabling the noise until I can figure out what is going on.

If you have any suggestions or concepts of an idea of what's going on, **please let me know**.