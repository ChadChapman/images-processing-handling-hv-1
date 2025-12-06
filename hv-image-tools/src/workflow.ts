import { squareAndPrep } from "./prep/squareAndPrep";
import { vectorizePbmToSvg } from "./vector/vectorize";
import path from "path";

async function run() {
    const input = process.argv[2];
    if (!input) {
        throw new Error(
          "Provide an input PNG file: npx ts-node src/workflow.ts input/icons/hoof-aspect-solar.png"
        );
    }

    const base = path.basename(input, path.extname(input));

    const prepPngPath = `output/png/${base}-prep.png`;
    const pbmPath = `output/png/${base}-prep.pbm`;
    const svgPath = `output/svg/${base}.svg`;

    await squareAndPrep(input, prepPngPath);
    await vectorizePbmToSvg(prepPngPath, pbmPath, svgPath);

    console.log(`Done. Final SVG: ${svgPath}`);
}

run().catch((err) => {
    console.error(err);
    process.exit(1);
});
