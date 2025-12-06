import { exec } from "child_process";

export function vectorizePbmToSvg(
  prepPngPath: string,
  pbmPath: string,
  svgPath: string
) {
    return new Promise<string>((resolve, reject) => {
        // 1) convert PNG -> PBM (1-bit bilevel, Potrace-friendly)
        // 2) potrace PBM -> SVG
        const cmd = `
      convert "${prepPngPath}" -colorspace Gray -threshold 80% -type bilevel "${pbmPath}" &&
      potrace "${pbmPath}" -s -o "${svgPath}"
    `;

        exec(cmd, (err, stdout, stderr) => {
            if (err) {
                console.error("vectorizePbmToSvg error:", stderr || err);
                reject(err);
                return;
            }

            console.log(`PBM created at ${pbmPath}`);
            console.log(`SVG created at ${svgPath}`);
            resolve(svgPath);
        });
    });
}
