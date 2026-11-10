import { copyFile, mkdir } from "node:fs/promises";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = resolve(fileURLToPath(new URL("..", import.meta.url)));
const webDirectory = resolve(projectRoot, "www");
const webAssets = [
  "index.html",
  "site.webmanifest",
  "service-worker.js",
  "favicon.svg",
  "icon-192.png",
  "icon-512.png"
];

await mkdir(webDirectory, { recursive: true });

for (const asset of webAssets) {
  await copyFile(resolve(projectRoot, asset), resolve(webDirectory, asset));
}

console.log(`Vidéobox prête pour Capacitor (${webAssets.length} fichiers copiés).`);
