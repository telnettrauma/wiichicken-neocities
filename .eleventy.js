const { DateTime } = require("luxon");
const mdAttrs = require('markdown-it-attrs');
const markdownItFootnote = require('markdown-it-footnote');

module.exports = function (eleventyConfig) {

  eleventyConfig.addPassthroughCopy("src/**/*.{css,png,gif,json,jpg,jpeg,js,webmanifest,xml,ttf,ico,webp,txt,svg}");

  const markdownIt = require('markdown-it');
  const markdownItFootnote = require('markdown-it-footnote');
  const mdAttrs = require('markdown-it-attrs');

  const markdownLib = markdownIt({ html: true })
    .use(markdownItFootnote)
    .use(mdAttrs);

  eleventyConfig.setLibrary("md", markdownLib);

  eleventyConfig.addPairedShortcode("markdown", (content, inline = null) => {
    return inline
      ? markdownLib.renderInline(content)
      : markdownLib.render(content);
  });

  // date filter
  eleventyConfig.addFilter("date", (dateObj, format = "MMMM d, yyyy") => {
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat(format);
  });

  eleventyConfig.addGlobalData("eleventyComputed", {
    permalink: (data) => {
      if (data.page.filePathStem.startsWith("/")) {
        return `${data.page.filePathStem}.html`;
      }
      return data.permalink; // fallback to the current permalink if it's set
    },
  });

  return {
    passthroughFileCopy: true,
    dir: {
      input: "src",
      output: "public",
      includes: "_includes",
    },
  };
};