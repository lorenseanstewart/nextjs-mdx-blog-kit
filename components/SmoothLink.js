import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function SmoothLink(props) {
    return (
        <AnchorLink href={props.target} offset="10">
            {props.linkText}
        </AnchorLink>
    );
}
