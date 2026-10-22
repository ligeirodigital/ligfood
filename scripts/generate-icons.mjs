// Roda antes do build (prebuild): gera ícones PNG, favicon.ico e a imagem de
// compartilhamento (og-ligfood.png) a partir das logos SVG em public/.
import sharp from "sharp";
import { readFileSync, writeFileSync } from "fs";
import { resolve } from "path";

const pub = (f) => resolve("public", f);
const favicon = readFileSync(pub("favicon.svg"));
const logoOnOrange = readFileSync(pub("logo-ligfood-on-orange.svg"));

const sizes = { "icon-512.png": 512, "icon-192.png": 192, "apple-touch-icon.png": 180, "favicon-32.png": 32 };
for (const [name, size] of Object.entries(sizes)) {
  await sharp(favicon, { density: 300 }).resize(size, size).png().toFile(pub(name));
}

// favicon.ico com um PNG 32x32 embutido (formato ICO aceita PNG direto).
const png32 = readFileSync(pub("favicon-32.png"));
const header = Buffer.alloc(6);
header.writeUInt16LE(0, 0);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(1, 4);
const entry = Buffer.alloc(16);
entry.writeUInt8(32, 0);
entry.writeUInt8(32, 1);
entry.writeUInt8(0, 2);
entry.writeUInt8(0, 3);
entry.writeUInt16LE(1, 4);
entry.writeUInt16LE(32, 6);
entry.writeUInt32LE(png32.length, 8);
entry.writeUInt32LE(6 + 16, 12);
writeFileSync(pub("favicon.ico"), Buffer.concat([header, entry, png32]));

// Imagem de compartilhamento 1200x630: fundo laranja com a logo centralizada.
const logo = await sharp(logoOnOrange, { density: 300 }).resize({ width: 820 }).png().toBuffer();
const meta = await sharp(logo).metadata();
await sharp({ create: { width: 1200, height: 630, channels: 4, background: "#FF6A00" } })
  .composite([{ input: logo, left: Math.round((1200 - meta.width) / 2), top: Math.round((630 - meta.height) / 2) }])
  .png()
  .toFile(pub("og-ligfood.png"));

console.log("ícones e og-ligfood.png gerados");
