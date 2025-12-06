import { exec } from "child_process";

export function vectorizeBmpToSvg(bmpPath: string, svgPath: string) {
  return new Promise((resolve, reject) => {
    const cmd = `potrace "${bmpPath}" -s -o "${svgPath}"`;

    exec(cmd, (err) => {
      if (err) reject(err);
      else resolve(svgPath);
    });
  });
}

