import css from "styled-jsx/css";

// In an attempt to keep all configuration in one place, css variables
// are currently stored in config.yml. Move these variables into a
// variables file in this style/ directory if that is your preference.
import { config } from "../config/config.yml";

// used in pages/about.js, pages/index.js
export const centeredPageStyles = css`
    .centered-container {
        height: 80vh;
        width: 98vw;
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
`;

// used in _app.js
export const globalStyles = css.global`
@font-face {
    font-family: "Abril Fatface";
    font-display: auto; /* Important for performance */
    src: url("/static/fonts/Abril-Fatface.woff2") format("woff2");
    font-style: normal;
}
html {
    scroll-behavior: smooth;
}
body {
    position: relative;
    top: 0;
    margin: 0;
    padding: 0;
    color: ${config.css.black};
}
#__next {
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 100vh;
}
.footer {
    background: #fff;
    height: 80px;
    width: 100%;
    border-top: 2px solid ${config.css.lightGray};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    position: absolute;
    bottom: 0;
}
strong,
h1,
h1 > *,
h2,
h2 > *,
h3,
h3 > *,
h4,
h4 > *,
h5,
h5 > *,
h6,
h6 > * {
    font-family: "Abril Fatface";
    letter-spacing: 1px;
}
strong {
    color: ${config.css.accentColor}
}
.search-layout,
.blog-layout,
.blog-post-list {
    max-width: 740px;
    padding: 40px 20px 100px 20px;
    position: relative;
}
.blog-layout > div {
    display: flex;
    flex-direction: column;
}
img {
    max-width: 100%;
}
img.img-centered {
    align-self: center;
    margin: 10px 0px;
}
.icon-button {
    outline: none;
    border: none;
    background: ${config.css.backgroundColor};
}
.icon-button.hamburger {
    position: fixed;
    left: 0px;
    top: 0px;
    z-index: 3; /* the navigation menu is z-index: 4 */
    border: 1px solid ${config.css.lightGray};
    padding-top: 4px;
    border-radius: 3px;
}
a {
    color: ${config.css.accentColor};
}
label {
    color: ${config.css.black};
    font-weight: 600;
    font-family: sans-serif;
    font-size: 18px;
}
p,
p a,
b,
em,
span,
li,
ul,
ol {
    font-size: 18px;
    word-break: break-word /* This prevents a bug with the reading progress bar. Leave this style here unless you are removing the reading progress bar. */
}

code > span {
    font-size: inherit; /* make sure code font size is set in <CodeBlock /> */
    background: inherit !important; /* Fixes code block style bug*/
}
`;
