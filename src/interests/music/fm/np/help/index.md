---
layout: interests/music/fm/np/help.njk
title: "last.fm Now Playing Screen Help"
permalink: "/interests/music/fm/np/help/index.html"
---
## Table of Contents

- Requirements
- Settings
- Known Issues

## Requirements

- A [last.fm](https://last.fm){target=_blank} account. This is only required if you are interested in looking at **your own** music data. Additionally, the account must have scrobble history set to public.
- Javascript must be enabled in the browser
- This experience has been tested in the Chrome browser, however it 100% should work in Firefox and Safari, although Safari's behavior may be weird as I have no way to test on Mac.

## Settings

The display of the settings screen can be displayed by clicking or tapping anywhere on the screen. Clicking or tapping outside of the settings area will cause the window to be hidden.

### Layout

This changes the layout of the screen. By default, the layout will be determined by the aspect ratio of your device. The available layout options are:

- **Landscape** - All information will be left aligned
- **Portrait** - All information will be displayed in the center of the screen

### Username

The last.fm username for the account that should be used. All that is required is entering the username, you do not need to login to your account. The default username is the creator of the tool, `wiichicken`.

### Background

The background image that should be used for the now playing screen. The default setting is `Cover`. There are 4 available options:

- **Cover** - Uses the album cover as the background. The background has a subtle motion effect applied to generate unique color patterns based on the cover art
- **Light** - White background on dark text
- **Dark** - Dark background on white text
- **Custom** - Allows you to set custom colors for the background and foreground

### Blur

**This setting is only available if the background is set to `Cover`!**

Changes how blurred the background is, allowing more or less colors and complexity to appear. It is not recommended to set this to a very low setting, as it reveals how the background animation is generated, which looks ugly.

### Colors

**This setting is only available if the background is set to `Custom`!**

Allows setting the foreground and background colors to whatever colors you want. The color picker used is the color picker provided by your operating system.

### Cover Art

Toggles displaying the cover art next to or on top of the song information. By default, this setting is `enabled`.

Disabling this option while the background is set to `Cover` will still cause the background image to update. If you don't want to see cover art at all, change the background to `Light`, `Dark`, or `Custom`.

### Rounded Corners

Changes how round the corners of the cover art are, using percentages. By default, this value is set to `0%`. This setting has no visible effect when cover art is disabled.

If you would like to not round the corners of cover art at all, set the slider to `0%`, or all the way to the left. If you would like to have cover art displayed as a circle, set the slider to `50%`, or all the way to the right.

### Display

Toggles displaying various pieces of information about the now playing track. The options include:

- Song
- Artist
- Album

By default, this is set so the `Song` and `Artist` are displayed, but the `Album` is not.

### Save to URL

Saving the cover art to a URL is an experimental feature. This will make it easier to save your settings if you would like to come back to them later. Settings will be saved inside of the page URL. Simply bookmark the page with the new URL, or share the link to have your settings enabled over the default settings.

Clicking the save button will refresh the page.

## Known Issues

**Sometimes cover art displays as a star instead of the correct image**

The last.fm API does this sometimes, and I have no idea why. I have implemented a system where the cover art should only change if it has been updated, but this issue may still happen. Not much I can do about it.

**Blurred background flickers when track is changed**

Yes, this happens sometimes.

**Track information is a few seconds behind**

This is intentional, as the now playing screen only updates every `15` seconds. This is done to not get rate limited, as well as to save bandwidth. Most now playing screens do this.