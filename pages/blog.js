import React from "react";
import PostListing from "../components/PostListing";

export const meta = {
    title: "Programming Posts",
    tags: ["Next.js", "MDX"],
    layout: "blog-post-list",
    publishDate: "2011-01-01",
    modifiedDate: false,
    seoDescription:
        "All of your blog posts are listed on this page, unless a post has the meta property `exclude: true`."
};

export default function Blog(props) {
    const blogPosts = props.allData.filter(content => content.type == "post");
    return (
        <div className="blog-post-list">
            <h1>{meta.title}</h1>
            {blogPosts.map((post, index) => (
                <PostListing key={index} post={post} indes={index} />
            ))}
        </div>
    );
}
Blog.defaultProps = {
    allData: []
};
