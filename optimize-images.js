// optimize-images.js
import sharp from "sharp";
import { glob } from "glob";
import path from "path";
import fs from "fs/promises";

const INPUT_PATTERN = "public/designs/GermanyMap.png"; // <-- adjust to your real path
const QUALITY = 70;

(async () => {
  console.log("🟡 CWD:", process.cwd());
  console.log("🟡 Pattern:", INPUT_PATTERN);

  const files = await glob(INPUT_PATTERN, {
    nodir: true,
    windowsPathsNoEscape: true, // helps on Windows
  });

  console.log(`🔎 Found ${files.length} file(s).`);

  if (files.length === 0) {
    console.log("ℹ️ No matching images. Check your folder and the pattern above.");
    return;
  }

  // optional: reduce sharp cache if processing many files
  sharp.cache(false);

  for (const file of files) {
    const ext = path.extname(file);
    const base = file.slice(0, -ext.length);

    console.log(`🔄 Optimizing: ${file}`);

    try {
      // Ensure output dir exists (in case of odd paths)
      await fs.mkdir(path.dirname(file), { recursive: true });

      // WEBP
      await sharp(file).webp({ quality: QUALITY }).toFile(`${base}.webp`);

      // AVIF
      await sharp(file).avif({ quality: QUALITY }).toFile(`${base}.avif`);

      // Optimized JPEG (keeps original too)
      await sharp(file).jpeg({ mozjpeg: true, quality: QUALITY }).toFile(`${base}-optimized.jpg`);

      console.log(`✅ Done: ${file}`);
    } catch (err) {
      console.error(`❌ Error processing ${file}:`, err.message);
    }
  }

  console.log("🎉 All done.");
})();
