const site = require("./src/_data/site.cjs");

const SITE_URL_TOKEN = "__SITE_URL__";
const SITE_URL = site.url;
const SITE_URL_BASE = SITE_URL.replace(/\/+$/, "");
const PATH_PREFIX = normalizePathPrefix(process.env.PATH_PREFIX);

function normalizePathPrefix(prefix) {
  if (!prefix || prefix === "/") return "/";
  return `/${String(prefix).replace(/^\/+|\/+$/g, "")}/`;
}

function resolveSiteUrl(value) {
  if (value == null) return value;
  return String(value).replaceAll(SITE_URL_TOKEN, SITE_URL_BASE);
}

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ assets: "assets" });
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

  eleventyConfig.addFilter("resolveSiteUrl", resolveSiteUrl);

  eleventyConfig.addFilter("absoluteUrl", function (url) {
    const resolvedUrl = resolveSiteUrl(url);
    if (!resolvedUrl) return resolvedUrl;
    if (/^https?:\/\//i.test(resolvedUrl)) return resolvedUrl;
    return new URL(String(resolvedUrl).replace(/^\//, ""), SITE_URL).toString();
  });

  return {
    pathPrefix: PATH_PREFIX,
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
