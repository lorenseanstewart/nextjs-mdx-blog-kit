import { formatSEODate, getSecondsSinceEpoch } from "./formatters";
import { config } from "../config/config.yml";

// _app.js and _document.js are next.js specific files, and should be ignored
// the blog directory is ignored here, but is processed in post-list.js
const ignoreList = ["_app.js", "_document.js", "blog"];

const pageFileNames = () => {
    const allPageFileNames =
        preval`module.exports = require("fs").readdirSync("./pages")` || [];
    const filteredFileNames = allPageFileNames.filter(
        name => !name || !ignoreList.includes(name)
    );
    return Promise.resolve(filteredFileNames);
};

const createPageList = fileNameList => {
    return fileNameList.reduce((collection, name) => {
        // These are properties we want to extract from the file's meta export.
        // This data is returned is added to the `collection` array below.
        const { default: Component } = require(`../pages/${name}`);
        const {
            title,
            tags,
            layout,
            publishDate,
            modifiedDate,
            seoDescription,
            hideProgressBar = false,
            ...moreMeta // any extra properties a page may have
        } = require(`../pages/${name}`).meta;

        // remove the extension from the file name to make a component name string
        let cleaned_name = name.split(".")[0];

        // format dates for SEO, but preserve publishDate as the latter is
        // displayed on the blog post. Currently not displaying modifiedDate, but
        // preserving it for possible future use.
        const formattedPublishDate = formatSEODate(publishDate);

        const formattedModifiedDate = formatSEODate(modifiedDate, true);

        // This is used to sort pages/posts
        const secondsSinceEpoch = getSecondsSinceEpoch(formattedPublishDate);

        // data that is returned for each page
        collection.push({
            Component,
            title,
            tags,
            layout,
            publishDate,
            formattedPublishDate,
            modifiedDate,
            formattedModifiedDate,
            seoDescription,
            urlPath: `/${cleaned_name === "index" ? "" : cleaned_name}`,
            canonicalUrl: `${config.baseUrl}/${
                cleaned_name === "index" ? "" : cleaned_name
            }`,
            hideProgressBar,
            name: cleaned_name,
            type: "page",
            secondsSinceEpoch,
            ...moreMeta // any extra properties a page may have
        });

        return collection;
    }, []);
};

export function pages() {
    return pageFileNames()
        .then(fileNameList => {
            const pageList = createPageList(fileNameList);
            const sortedList = pageList
                .sort((a, b) => a.secondsSinceEpoch - b.secondsSinceEpoch)
                .reverse();
            return sortedList;
        })
        .catch(error => console.log("Error creating pageList", error));
}
