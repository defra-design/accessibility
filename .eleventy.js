const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  // Return your Object options:

  eleventyConfig.addCollection("writing", function(collectionApi) {
    return collectionApi.getFilteredByGlob("./src/writing/content/*.md");
  });

  eleventyConfig.addCollection("recentPosts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("./src/writing/content/*.md").reverse().slice(0, 3);
  });

  // The following code sorts the resource collections alphabetically
  // https://github.com/11ty/eleventy/issues/411
  eleventyConfig.addCollection("checkingAccessibilityAlphabetised", (collection) =>
    collection.getFilteredByTags("checkingAccessibility").sort((a, b) => {
      let nameA = a.data.title.toUpperCase();
      let nameB = b.data.title.toUpperCase();
      if (nameA < nameB) return -1;
      else if (nameA > nameB) return 1;
      else return 0;
    })
  );

  eleventyConfig.addCollection("contentFormsAlphabetised", (collection) =>
    collection.getFilteredByTags("contentForms").sort((a, b) => {
      let nameA = a.data.title.toUpperCase();
      let nameB = b.data.title.toUpperCase();
      if (nameA < nameB) return -1;
      else if (nameA > nameB) return 1;
      else return 0;
    })
  );

  eleventyConfig.addCollection("requirementsRulesAlphabetised", (collection) =>
    collection.getFilteredByTags("requirementsRules").sort((a, b) => {
      let nameA = a.data.title.toUpperCase();
      let nameB = b.data.title.toUpperCase();
      if (nameA < nameB) return -1;
      else if (nameA > nameB) return 1;
      else return 0;
    })
  );

  eleventyConfig.addCollection("researchAlphabetised", (collection) =>
    collection.getFilteredByTags("research").sort((a, b) => {
      let nameA = a.data.title.toUpperCase();
      let nameB = b.data.title.toUpperCase();
      if (nameA < nameB) return -1;
      else if (nameA > nameB) return 1;
      else return 0;
    })
  );

  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toFormat('d LLLL yyyy');
  });

  // Copy across all images
  eleventyConfig.addPassthroughCopy("src/**/*.jpg");
  eleventyConfig.addPassthroughCopy("src/**/*.png");

  // Copy across CSS in the documents folder
  eleventyConfig.addPassthroughCopy("src/documents/**/*.css");

  // Copy across document files
  eleventyConfig.addPassthroughCopy("src/**/*.docx");
  eleventyConfig.addPassthroughCopy("src/**/*.odt");

  // Copy across spreadsheet files
  eleventyConfig.addPassthroughCopy("src/**/*.xlsx");
  eleventyConfig.addPassthroughCopy("src/**/*.ods");
  eleventyConfig.addPassthroughCopy("src/**/*.csv");

  // Copy across PDF files
  eleventyConfig.addPassthroughCopy("src/**/*.pdf");

  // Copy across the interview example page
  eleventyConfig.addPassthroughCopy("src/interview/index.html");
  eleventyConfig.addPassthroughCopy("src/interview/style.css");

  // Copy across the fonts
  eleventyConfig.addPassthroughCopy("src/_includes/css/AtkinsonHyperlegible/*.*");

  return {
    htmlTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "docs",
      includes: "_includes",
      layouts: "_includes/_layouts",
    }
  }
};
