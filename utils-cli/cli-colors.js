const fs = require("fs");
const chalk = require("chalk");

// This repo has two yaml parsing deps; one for frontend/webpack (js-yaml-loader),
// and one for strictly Node files like this one (js-yaml). If you don't want to
// use the config here, you can `npm uninstall js-yaml` as it  is only used in
// this file.

// const yaml = require("js-yaml");
// const { config } = yaml.safeLoad(
//     fs.readFileSync(__dirname + "/../config/config.yml", "utf8")
// );
// Then you can custom create colorized output strings like this:
// export function highlight(msg) {
//     if (!msg) return "";
//     return chalk.hex(config.css.accentColor)(msg)
// }
// If you are no going to use the config file here, then run `npm uninstall js-yaml`
// as it is only used in this file.

module.exports = {
    green,
    red,
    highlight
};

function green(msg) {
    if (!msg) return "";
    return chalk.green.bold(msg);
}

function red(msg) {
    if (!msg) return "";
    return chalk.red.bold(msg);
}

function highlight(msg) {
    if (!msg) return "";
    return chalk.yellow(msg);
}
