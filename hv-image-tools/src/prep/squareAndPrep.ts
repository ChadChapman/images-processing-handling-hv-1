import sharp, { FormatEnum } from "sharp";

const BMP_FORMAT: keyof FormatEnum = "bmp";

toFormat(format?: keyof FormatEnum | AvailableFormatInfo, options?: OutputOptions): Sharp


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
      // .toFormat(BMP_FORMAT)  // ✅ TS now knows this is a valid format
      .toFormat("bmp" as any)      .toFile(outputPath);

    console.log(`Square-prepped image saved to ${outputPath}`);
}
