import sharp from "sharp";

export async function squareAndPrep(
  inputPath: string,
  outputPath: string,
  size = 1024
) {
    await sharp(inputPath)
      .resize({
          width: size,
          height: size,
          fit: "contain",
          background: { r: 255, g: 255, b: 255, alpha: 1 }
      })
      // make it nice, crisp B/W for tracing
      .threshold(180)
      .png()                // ✅ explicit PNG output
      .toFile(outputPath);

    console.log(`Square-prepped image saved to ${outputPath}`);
}
