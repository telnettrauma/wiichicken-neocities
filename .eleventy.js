const { DateTime } = require("luxon")
const markdownIt = require('markdown-it')
const mdAttrs = require('markdown-it-attrs')
const markdownItFootnote = require('markdown-it-footnote')
const markdownItAnchor = require("markdown-it-anchor")
const pluginTOC = require('eleventy-plugin-toc')

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/**/*.{css,png,gif,json,jpg,jpeg,js,webmanifest,xml,ttf,ico,webp,txt,svg}")

  const markdownLib = markdownIt({ html: true })
    .use(markdownItFootnote)
    .use(mdAttrs)
    .use(markdownItAnchor, {
      permalink: markdownItAnchor.permalink.headerLink()
    })

  eleventyConfig.setLibrary("md", markdownLib)

  eleventyConfig.addPlugin(pluginTOC, {
    tags: ['h2', 'h3', 'h4', 'h5', 'h6'],
    wrapper: 'div',
    ul: true
  })

  eleventyConfig.addPairedShortcode("markdown", (content, inline = null) => {
    return inline
      ? markdownLib.renderInline(content)
      : markdownLib.render(content)
  })

  eleventyConfig.addFilter("date", (dateObj, format = "MMMM d, yyyy") => {
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat(format)
  })

  eleventyConfig.addGlobalData("eleventyComputed", {
    permalink: (data) => {
      if (data.page.filePathStem.startsWith("/")) {
        return `${data.page.filePathStem}.html`
      }
      return data.permalink
    },
  })

  eleventyConfig.setServerOptions({
    port: 1738
  })

  return {
    passthroughFileCopy: true,
    dir: {
      input: "src",
      output: "public",
      includes: "_includes",
    },
  }
}