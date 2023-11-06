//const fsPromises = require('fs').promises;
import { readFileSync } from "fs";
import { readFile } from "node:fs/promises";
(async () => {
    //good
    const content = await readFile(
        "/home/alberto/dev/git/typescript-roadmap/package.json"
    );
    // bad 💩
    const xx = readFileSync(
        "/home/alberto/dev/git/typescript-roadmap/package.json"
    );
    console.log(content);
})();
