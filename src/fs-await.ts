import { readFile } from "node:fs/promises";
(async () => {
    try {
        const content = await readFile(
            "/home/alberto/dev/git/typescript-roadmap/package-vad.json"
        );
        console.log(content);
    } catch (error) {
        console.error(error);
    }

    try {
        const content2 = await readFile(
            "/home/alberto/dev/git/typescript-roadmap/package.json"
        );
        console.log(content2);
    } catch (error) {
        console.error(error);
    }
})();
