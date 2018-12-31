import React from "react";
import { centeredPageStyles } from "../styles";

export const meta = {
    title: "About",
    tags: ["Next.js", "MDX"],
    layout: "page",
    publishDate: "2011-01-01",
    modifiedDate: false,
    seoDescription: "This is an about page."
};

function About() {
    return (
        <div className="centered-container">
            <h1>About</h1>
            <style jsx>{centeredPageStyles}</style>
        </div>
    );
}

export default About;
