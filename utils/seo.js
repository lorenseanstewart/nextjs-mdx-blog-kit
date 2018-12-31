import React from "react";
import { ArticleJsonLd } from "next-seo";
import { config } from "../config/config.yml";

export function articleSEO(postData) {
    if (!postData) return;
    const description = postData.seoDescription
        ? postData.seoDescription
        : config.siteDescription;

    return (
        <ArticleJsonLd
            url={postData.canonicalUrl}
            title={postData.title}
            images={[config.websiteLogo]}
            datePublished={postData.formattedPublishDate}
            dateModified={postData.formattedModifiedDate}
            authorName={config.author}
            publisherName={config.author}
            publisherLogo={config.websiteLogo}
            description={description}
        />
    );
}

export function createSEOConfig(data) {
    if (!data) return;
    const description = data.seoDescription
        ? data.seoDescription
        : config.siteDescription;
    return {
        title: data.title,
        description: description,
        openGraph: {
            type: "website",
            locale: "en_US",
            url: data.canonicalUrl,
            title: data.title,
            description: description,
            images: [
                {
                    url: config.websiteLogo,
                    width: 280,
                    height: 280,
                    alt: "Demo image for Next.js MDX Blog kit"
                }
            ],
            site_name: config.siteName
        },
        twitter: {
            handle: config.twitterHandle,
            site: config.twitterHandle,
            cardType: config.twitterCardType
        }
    }; // defaultImageHeight: 500, // defaultImageWidth: 500,
}
