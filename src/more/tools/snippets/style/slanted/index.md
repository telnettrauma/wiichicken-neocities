---
layout: more/tools/snippets/full.njk
title: "CSS Slanted Corners with Variable Sizes"
script: https://gist.github.com/telnettrauma/718c68ff81582047c8f9b3f770fc3209.js
---
Currently, the only type of corner styles in CSS are rounded corners. However, you can use this to get slanted corners, along with the ability to change the size of each corner.

This script includes 2 box type variants; one with a border, and one without a border.

## Credits

The original slanted corner code is based off kwaamfan's Pictochat theme. You can view the page on [Neocities](https://kwaamfan.neocities.org/codes/pictochat/){target=_blank}, or look at the source code on [GitHub](https://github.com/balfiere/pictochat){target=_blank}.

I simply took the slanted corners from the theme, and allowed adjusting the size of each individual corner.

## Usage

There are a few CSS variables that can adjusted to customize boxes better.

The `--p` variable changes the scale of each box. By default, its set to `1`/

The most important variables are variables that change the size of the rounded corners:

- `--b-radius-tl` changes the size of the top-left corner
- `--b-radius-tr` changes the size of the top-right corner
- `--b-radius-bl` changes the size of the bottom-left corner
- `--b-radius-br` changes the size of the bottom-right corner

I would recommend having different classes for different border sizes.

`--border` changes the color of the border. This supports any type of background property (colors, gradients, images).

The `.box-no-border` class allows you to have slanted corners without having a border.

## Limitations

- Rendering issues still occur sometimes. Currently hardware acceleration is enabled to minimize issues, but they can still occur
- You cannot use this combined with `overflow: scroll` unless the overflow element is **inside** the box