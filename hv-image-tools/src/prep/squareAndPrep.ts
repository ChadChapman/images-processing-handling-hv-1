import sharp, { FormatEnum } from "sharp";

const BMP_FORMAT: keyof FormatEnum = "bmp";

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
      .threshold(180)
      .toFormat(BMP_FORMAT)  // ✅ properly typed, no TS error
      .toFile(outputPath);

    console.log(`Square-prepped image saved to ${outputPath}`);
}
