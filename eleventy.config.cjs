const SITE_URL = "https://cmbitton.github.io/gianni-site-demo/";

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ assets: "assets" });
  eleventyConfig.addPassthroughCopy({ "robots.txt": "robots.txt" });
  eleventyConfig.addPassthroughCopy({ ".nojekyll": ".nojekyll" });

  eleventyConfig.addFilter("isActive", function (currentUrl, targetUrl) {
    if (!currentUrl || !targetUrl) return false;
    if (targetUrl === "/") return currentUrl === "/";
    return currentUrl === targetUrl || currentUrl.startsWith(targetUrl);
  });

  eleventyConfig.addFilter("sitemapPages", function (pages) {
    return pages
      .filter((entry) => entry.data.sitemap !== false && entry.data.sitemap)
      .sort((a, b) => {
        const aOrder = a.data.sitemap.order ?? 9999;
        const bOrder = b.data.sitemap.order ?? 9999;
        return aOrder - bOrder;
      });
  });

  eleventyConfig.addFilter("absoluteUrl", function (url) {
    return new URL(String(url).replace(/^\//, ""), SITE_URL).toString();
  });

  return {
    pathPrefix: "/gianni-site-demo/",
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    templateFormats: ["njk", "md"]
  };
};
