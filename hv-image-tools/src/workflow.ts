// src/workflow.ts

// import { squareAndPrep } from "./squareAndPrep";
// import { vectorizeBmpToSvg } from "./vectorize";
// import path from "path";

import { squareAndPrep } from "./prep/squareAndPrep";
import { vectorizeBmpToSvg } from "./vector/vectorize";
import path from "path";


async function run() {
  const input = process.argv[2];
  if (!input) throw new Error("Provide an input PNG file!");

  const base = path.basename(input, path.extname(input));

  const bmpPath = `output/png/${base}-prep.bmp`;
  const svgPath = `output/svg/${base}.svg`;

  await squareAndPrep(input, bmpPath);
  await vectorizeBmpToSvg(bmpPath, svgPath);

  console.log(`SVG created: ${svgPath}`);
}

run();

