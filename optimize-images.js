// optimize-images.js
import sharp from "sharp";
import { glob } from "glob";
import path from "path";
import fs from "fs";

const inputPattern = "public/craiyon_124738_image.{jpg,jpeg,png}";
const outputQuality = 70; // جودة مناسبة (60-75 عادة مثالية)

(async () => {
  const files = await glob(inputPattern, { nodir: true });

  for (const file of files) {
    const ext = path.extname(file);
    const base = file.replace(ext, "");

    console.log(`🔄 Optimizing: ${file}`);

    // تأكد أن الملف فعلاً صورة
    try {
      // WebP
      await sharp(file)
        .webp({ quality: outputQuality })
        .toFile(`${base}.webp`);

      // AVIF
      await sharp(file)
        .avif({ quality: outputQuality })
        .toFile(`${base}.avif`);

      // MozJPEG
      await sharp(file)
        .jpeg({ mozjpeg: true, quality: outputQuality })
        .toFile(`${base}-optimized.jpg`);

      console.log(`✅ Done: ${file}`);
    } catch (err) {
      console.error(`❌ Error processing ${file}:`, err);
    }
  }
})();
