import { mkdir } from "fs/promises";

await mkdir("uploads");
await mkdir("uploads/images");

await mkdir("docs/resume/data", {recursive: true});

// remove only data folder
// await rm("docs/resume/data",{ recursive : true});

//remove main folder and sub folder also
await rm("docs", { recursive: true});