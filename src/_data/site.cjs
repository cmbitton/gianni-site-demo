const FALLBACK_SITE_URL = "https://honest-drain-site.pages.dev/";

function normalizeSiteUrl(url) {
  const rawUrl = String(url || FALLBACK_SITE_URL).trim();
  const urlWithProtocol = /^[a-z][a-z0-9+.-]*:\/\//i.test(rawUrl)
    ? rawUrl
    : `https://${rawUrl}`;

  return `${urlWithProtocol.replace(/\/+$/, "")}/`;
}

module.exports = {
  name: "Honest Drain",
  url: normalizeSiteUrl(process.env.SITE_URL || process.env.CF_PAGES_URL || process.env.URL),
  phoneDisplay: "(401) 593-5553",
  phoneHref: "tel:14015935553",
  topBarText: "24/7 emergency drain & sewer service",
  footerDescription: "Honest drain cleaning, sewer repair, and commercial maintenance for local homes and businesses.",
  footerTagline: "Honest answers. Honest pricing. Honest work.",
  copyright: "Copyright 2026 Honest Drain. All rights reserved."
};
