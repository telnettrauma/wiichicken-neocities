const { DateTime } = require("luxon");
const markdownLib = require('markdown-it')({html: true});
const mdAttrs = require('markdown-it-attrs');

module.exports = function (eleventyConfig) {

  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("js");
	eleventyConfig.addPassthroughCopy("**/*.css");
  eleventyConfig.addPassthroughCopy("**/*.png");
  eleventyConfig.addPassthroughCopy("**/*.gif");
  eleventyConfig.addPassthroughCopy("**/*.json");
  eleventyConfig.addPassthroughCopy("**/*.jpg");
  eleventyConfig.addPassthroughCopy("**/*.jpeg");
  eleventyConfig.addPassthroughCopy("**/*.js");
  eleventyConfig.addPassthroughCopy("**/*.webmanifest");
  eleventyConfig.addPassthroughCopy("**/*.xml");

  eleventyConfig.setLibrary("md", markdownLib);
  eleventyConfig.amendLibrary("md", (markdownLib) => markdownLib.use(mdAttrs));

  eleventyConfig.addPairedShortcode("markdown", (content, inline = null) => {
    return inline
      ? markdownLib.renderInline(content)
      : markdownLib.render(content);
  });

  eleventyConfig.setLibrary("md", markdownLib);

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