import React from "react";

export default function LinkAnchor(props) {
    const nodeTypes = [
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "p",
        "ul",
        "ol",
        "li",
        "span",
        "div",
        "a"
    ];
    if (!nodeTypes.includes(props.element)) {
        throw new Error(
            `HTML tag ${
                props.element
            } is not in the list of valid tags. Add it to the list or use another tag.`
        );
    }
    return React.createElement(props.element, { id: props.id }, props.text);
}
