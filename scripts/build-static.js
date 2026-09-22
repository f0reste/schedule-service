import fs from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const dist = path.join(root, "dist");

await fs.rm(dist, { recursive: true, force: true });
await fs.mkdir(path.join(dist, "src"), { recursive: true });

await fs.copyFile(path.join(root, "index.html"), path.join(dist, "index.html"));

for (const file of ["config.js", "demoData.js", "main.js", "scheduleApi.js", "scheduleLogic.js", "styles.css"]) {
  await fs.copyFile(path.join(root, "src", file), path.join(dist, "src", file));
}

console.log("Static site built into dist/");
