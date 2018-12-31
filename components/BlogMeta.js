import React, { Component } from "react";
import TagBlock from "../components/Tags";
import ReadingProgress from "../components/ReadingProgress";
import { articleSEO } from "../utils/seo";
import { formatDisplayDate } from "../utils/formatters";

export default class BlogMeta extends Component {
    renderProgressBar = postData => {
        return postData.hideProgressBar ? null : <ReadingProgress />;
    };

    render() {
        const { postData } = this.props.data;
        const { formattedPublishDate } = postData;
        return (
            <React.Fragment>
                {this.renderProgressBar(postData)}
                <h1>{postData.title}</h1>
                <small className="post-date">
                    {formatDisplayDate(formattedPublishDate)}
                </small>
                <TagBlock tags={postData.tags} />
                {articleSEO(postData)}
            </React.Fragment>
        );
    }
}
