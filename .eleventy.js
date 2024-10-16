const { DateTime } = require("luxon");
const markdownIt = require("markdown-it");

module.exports = function (eleventyConfig) {

	eleventyConfig.addPassthroughCopy("css");
	eleventyConfig.addPassthroughCopy("images");
	eleventyConfig.addPassthroughCopy("js");

	let markdownLib = markdownIt({
		html: true,
		linkify: true
	}).use(function(md) {
		// override link_open rule to add target="_blank" unless disabled by front matter or class
		const defaultRender = md.renderer.rules.link_open || function(tokens, idx, options, env, self) {
			return self.renderToken(tokens, idx, options);
		};

		md.renderer.rules.link_open = function(tokens, idx, options, env, self) {
			const aIndex = tokens[idx].attrIndex('target');
			const classIndex = tokens[idx].attrIndex('class');
			const classes = classIndex >= 0 ? tokens[idx].attrs[classIndex][1] : '';

			// Check for noBlankLinks flag in front matter or no-blank class
			if (!env.page || !env.page.data || !env.page.data.noBlankLinks) {
				if (!classes.includes('no-blank')) {
					if (aIndex < 0) {
						tokens[idx].attrPush(['target', '_blank']);
					} else {
						tokens[idx].attrs[aIndex][1] = '_blank';
					}
				}
			}

			return defaultRender(tokens, idx, options, env, self);
		};
	});

	eleventyConfig.setLibrary("md", markdownLib);

	eleventyConfig.addFilter("date", (dateObj, format = "MMMM d, yyyy") => {
		return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat(format);
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