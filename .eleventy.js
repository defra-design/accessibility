const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  // Return your Object options:

  eleventyConfig.addCollection("writing", function(collectionApi) {
    return collectionApi.getFilteredByGlob("./src/writing/content/*.md");
  });

  eleventyConfig.addCollection("recentPosts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("./src/writing/content/*.md").reverse().slice(0, 3);
  });

  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_FULL);
  });

  // Copy across all images
  eleventyConfig.addPassthroughCopy("src/**/*.jpg");
  eleventyConfig.addPassthroughCopy("src/**/*.png");

  // Copy across CSS in the documents folder
  eleventyConfig.addPassthroughCopy("src/documents/**/*.css");

  // Copy across docx files
  eleventyConfig.addPassthroughCopy("src/**/*.docx");

  // Copy across PDF files
  eleventyConfig.addPassthroughCopy("src/**/*.pdf");
  
  return {
    htmlTemplateEngine: "njk",
    pathPrefix: "https://defra-design.github.io/accessibility/",
    dir: {
      input: "src",
      output: "docs",
      includes: "_includes",
      layouts: "_includes/_layouts",
    }
  }
};