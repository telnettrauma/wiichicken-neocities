---
layout: more/tools/snippets/noprev.njk
title: "Frame Link+"
script: https://gist.github.com/telnettrauma/15376bf2fc7944b25e416d0806aba64b.js
---
This is a modified version of Melonking's [Frame Link Management System](https://melonking.net/scripts/frame-link.js){target=_blank}. The difference is my version is intended for usage on subpages, while the original is optimized for index pages.

This script adds a URL parameter for frame based pages, allowing people to share URLs to individual pages, which is usually impossible when using a frame-based page.

## Usage

Simply create a Javascript file with this code, and link to that file in your HTML document.
To use parameters, you can adjust variables in a separate `script` element placed **after** the link to the Javascript.

## Parameters

All parameters are optional.

- `"updateTitle = false;"` - disables title updating
- `titlePrefix` - adds a prefix to titles. Blank by default
- `pageParam` - changes the page parameter in the URL. For example, if the pageParam is set to `z`, the URL will be `example.com?z=page.html`
- `basePath` - sets the root path