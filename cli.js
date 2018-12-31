#!/usr/bin/env node

// packages/libraries
const fs = require("fs");
const argv = require("yargs").usage(
    `Flags:
      -t  ["template"  | String  | either "page" or "post"]
      -m  ["mdx file"  |   n/a   | if present file will be .mdx, else .js]
      -f  ["file name" | String  | e.g. "how-to-build-a-nextjs-app"]`
).argv;

// terminal output color functions
const { green, red, highlight } = require("./utils-cli/cli-colors.js");

// CLI flag vars
const templateType = argv.t === "page" ? argv.t : "post";
const ext = argv.m ? "mdx" : "js";
let fileName = argv.f
    ? `${argv.f}.${ext}`
    : `new-${argv.t}-${Date.now()}.${ext}`;

// template function, and pass in the argv properties as arguments
const template = require(`./utils-cli/cli-template`)(argv.m, argv.t);
const BLOG_DIR_PATH = templateType === "post" ? "./pages/blog" : "./pages";
const pathToFile = `${BLOG_DIR_PATH}/${fileName}`;

// script logic
try {
    // Abort if the blog directory does not exist.
    fs.accessSync(BLOG_DIR_PATH, fs.F_OK);
} catch (error) {
    console.log(
        `\n${red(
            "Error:"
        )} Could not find blog directory: ${BLOG_DIR_PATH}\n${error}\n`
    );
}

try {
    // Abort if file name is already being used.
    if (fs.existsSync(`${pathToFile}`)) {
        console.log(
            `\n${red(
                "Operation aborted"
            )}. The file ${BLOG_DIR_PATH}/${highlight(
                fileName
            )} already exists.\n`
        );
        process.exit(1);
    }
    // If file doesn't already exit, create it.
    fs.writeFileSync(`${pathToFile}`, template);
    console.log(
        `\n${green("Success!")} Created ${BLOG_DIR_PATH}/${highlight(
            fileName
        )}\n`
    );
} catch (error) {
    console.log(`\n${red("Error:")} creating new post.\n${error}\n`);
}
