module.exports = (phase, { defaultConfig }) => {
    const fs = require("fs");
    const path = require("path");
    const { promisify } = require("util");
    const copyFile = promisify(fs.copyFile);
    const withFonts = require("next-fonts");
    const images = require("remark-images");
    const emoji = require("remark-emoji");
    const withOptimizedImages = require("next-optimized-images");
    const withMDX = require("@zeit/next-mdx")({
        // parse mdx files
        extension: /\.mdx?$/,
        options: {
            mdPlugins: [images, emoji]
        }
    });

    return withFonts(
        withOptimizedImages(
            withMDX({
                pageExtensions: ["js", "jsx", "md", "mdx"],
                exportPathMap: async function(
                    defaultPathMap,
                    { dev, dir, outDir, distDir, buildId }
                ) {
                    if (dev) {
                        return defaultPathMap;
                    }
                    await copyFile(
                        path.join(dir, "my-worker.js"),
                        path.join(outDir, "my-worker.js")
                    );
                    return defaultPathMap;
                },
                webpack: function(config, { dev }) {
                    config.node = {
                        fs: "empty"
                    };
                    // parse yaml so we can use config.yml
                    config.module.rules.push({
                        test: /\.ya?ml$/,
                        use: "js-yaml-loader"
                    });
                    return config;
                }
            })
        )
    );
};
