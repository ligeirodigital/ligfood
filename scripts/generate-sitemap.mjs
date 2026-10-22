// Roda antes do build (prebuild) e gera public/sitemap.xml.
import { writeFileSync } from "fs";
import { resolve } from "path";

const BASE_URL = "https://ligfood.vercel.app";

const entries = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/planos", changefreq: "monthly", priority: "0.9" },
  { path: "/contato", changefreq: "monthly", priority: "0.7" },
  { path: "/documentacao", changefreq: "monthly", priority: "0.6" },
  { path: "/privacidade", changefreq: "yearly", priority: "0.3" },
  { path: "/termos", changefreq: "yearly", priority: "0.3" },
];

const urls = entries.map((e) =>
  [
    "  <url>",
    `    <loc>${BASE_URL}${e.path}</loc>`,
    `    <changefreq>${e.changefreq}</changefreq>`,
    `    <priority>${e.priority}</priority>`,
    "  </url>",
  ].join("\n"),
);

const xml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...urls,
  "</urlset>",
].join("\n");

writeFileSync(resolve("public/sitemap.xml"), xml);
console.log(`sitemap.xml written (${entries.length} entries)`);
