/* prettier-ignore */
const reactImport = `import { Component } from "react";`;
/* prettier-ignore */
const markdownImport = (type = "post") =>
    `import BlogMeta from "${
        type === "post" ? "../../" : "../"
    }components/BlogMeta";`;
/* prettier-ignore */
const mardownContent = () => 
`export const meta = {
    title: "MDX Page",
    // the first tag below will be used in <meta property="article:tag" content="first-tag" />
    tags: ["tag-1", "tag-2"], 
    layout: "blog-layout",
    publishDate: "2011-01-01",
    modifiedDate: false, // "If used it must be in 'YYYY-MM-DD format' like publishDate"
    seoDescription: "In this post I <keyword> with <keyword>. And blah blah.",
    exclude: false,
    hideProgressBar: false,
}

<BlogMeta data={props} />

No need to add a title, as it is in the \`meta\` data above and will auto-magically show up your post. See the \`renderLayout\` method in \`utils/render-app-layout.js\` to see how the blog layout is constructed.

The \`exclude\` can be excluded (ha!) unless you want this post to be excluded from the post list on the \`/blog\` page.`;
/* prettier-ignore */
const reactContent = () => 
`export const meta = {
    title: "JavaScript Page",
    // The tags are used for SEO in the header property: \`<meta name="keywords" content={stringOfAllPostTags} />\`
    tags: ["tag-1", "tag-2"], 
    layout: "page",
    publishDate: "2011-01-01",
    modifiedDate: false, // "If used it must be in 'YYYY-MM-DD format' like publishDate"
    seoDescription: "In this post I <keyword> with <keyword>. And blah blah.",
    exclude: false,
    hideProgressBar: false,
}

export default class Index extends Component {
    render() {
        return (
            <div>
                <p>
                    It is important that all <code>meta</code> properties have values. Without them, your website will have poor SEO resulting in your content reaching fewer people.
                </p>
            </div>
        );
    }
}`;

module.exports = (markdown = false, type = "post") => `${
    markdown ? markdownImport(type) : `${reactImport}\n`
}
${markdown ? `\n${mardownContent()}` : `${reactContent()}`}
`;
