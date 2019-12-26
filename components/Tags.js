import React from "react";
import Link from "next/link";

function tagMaker(tagList) {
    let alphabetizedTags = tagList.sort();
    return (
        <div className={`tag-container`}>
            <span>Tags: </span>
            {alphabetizedTags.map(tag => (
                <Link key={`${tag}-link`} href={`/search?q=${tag}`}>
                    <a key={tag} className="tag">
                        {tag}
                    </a>
                </Link>
            ))}
            <style jsx>{`
                .tag-container {
                    margin-top: 10px;
                }
                a.tag {
                    margin-left: 10px;
                    background-color: #eee;

                    font-size: 14px;
                    padding: 3px 9px;
                    border: 2px solid #ddd;
                    border-radius: 17px;
                    cursor: pointer;
                    text-decoration: none;
                }

                a.tag:first-of-type {
                    margin-left: 0px;
                }
            `}</style>
        </div>
    );
}

const TagBlock = props => {
    if (!props.tags || !Array.isArray(props.tags)) return null;
    return tagMaker(props.tags);
};

export default TagBlock;
