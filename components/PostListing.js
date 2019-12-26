import React from "react";
import Link from "next/link";
import TagBlock from "./Tags";

export default function PostListing(props) {
    const { post, index } = props;
    return (
        <React.Fragment key={`post-list-${index}`}>
            <h2 key={`${post.name}-headline`}>
                <Link href={`/blog/${post.name}`}>
                    <a>{post.title}</a>
                </Link>
            </h2>
            <TagBlock tags={post.tags} />
        </React.Fragment>
    );
}
