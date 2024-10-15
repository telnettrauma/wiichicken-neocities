const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {

	eleventyConfig.addPassthroughCopy("css");
	eleventyConfig.addPassthroughCopy("images");
	eleventyConfig.addPassthroughCopy("js");

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