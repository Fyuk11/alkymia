const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");
const MarkdownIt = require("markdown-it");
const htmlmin = require("html-minifier-terser");
const { DateTime } = require("luxon"); // <-- agregamos Luxon

const md = new MarkdownIt({ html: true, breaks: true, linkify: true });

// Carga Markdown
function loadMarkdownFile(file) {
  const filepath = path.join(file);
  if (!fs.existsSync(filepath)) return {};
  const raw = fs.readFileSync(filepath, "utf8");
  const parsed = matter(raw);
  return {
    ...parsed.data,
    body: md.render(parsed.content || ""),
    _file: filepath,
  };
}

module.exports = function(eleventyConfig) {
  // Datos globales
  eleventyConfig.addGlobalData("landing", () =>
    loadMarkdownFile("./content/landings/landing-demo.md")
  );

  // Filtros
  eleventyConfig.addFilter("markdown", (str) => md.render(str || ""));

  // ✅ Filtro de fecha para sitemap
  eleventyConfig.addFilter("date", (dateObj, format = "yyyy-MM-dd") => {
    return DateTime.fromJSDate(new Date(dateObj)).toFormat(format);
  });

  // Passthrough de assets y CMS
  eleventyConfig.addPassthroughCopy({ assets: "assets" });
  eleventyConfig.addPassthroughCopy({ admin: "admin" });

  // Minificación HTML en producción
  eleventyConfig.addTransform("htmlmin", async (content, outputPath) => {
    if (process.env.ELEVENTY_ENV === "production" && outputPath && outputPath.endsWith(".html")) {
      return await htmlmin.minify(content, {
        collapseWhitespace: true,
        removeComments: true,
        minifyJS: true,
        minifyCSS: true,
      });
    }
    return content;
  });

  // Datos globales adicionales
  eleventyConfig.addGlobalData("version", Date.now());
  eleventyConfig.addGlobalData("build", { year: new Date().getFullYear() });
  eleventyConfig.addGlobalData("site", {
    name: "Landing Demo",
    url: "https://landing-demo.netlify.app",
    robots: "index,follow",
    og_image: "/assets/images/default-og.png",
    twitter_image: "/assets/images/default-twitter.png",
    twitter_site: "@miusuario",
    verification: "ApWt3O30nl49iN-AGMI1hcr91sNwY0BtyH2wvV0xJQs",
  });

  return {
    dir: {
      input: ".",
      includes: "includes",
      output: "_site",
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};


