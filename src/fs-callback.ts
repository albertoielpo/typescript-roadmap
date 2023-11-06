// fetch, fs, promise

// https://nodejs.org/api/fs.html
import { readFile } from "fs";
(() => {
    function afterFileRead(err: unknown, content: Buffer) {
        if (err != null) {
            console.error("error!");
            console.error(err);
            return;
        }
        console.log("file readed");
        console.log(content);
    }

    console.log("code sync 1");
    readFile(
        "/home/alberto/dev/git/typescript-roadmap/package-fake.json",
        afterFileRead
    );
    console.log("code sync 2");
})();
