import Document, { Head, Main, NextScript } from "next/document";
import { config } from "../config/config.yml";

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <html lang="en">
                <Head>
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1"
                    />
                    <link rel="icon" href="/static/icons/favicon.ico" />

                    <link rel="manifest" href="/static/manifest.json" />
                    <meta
                        name="theme-color"
                        content={config.css.primaryColor}
                    />

                    <link
                        rel="icon"
                        type="image/png"
                        sizes="32x32"
                        href="/static/icons/icon_32.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="48x48"
                        href="/static/icons/icon_48.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="128x128"
                        href="/static/icons/icon_128.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="256x256"
                        href="/static/icons/icon_256.png"
                    />

                    <meta
                        name="apple-mobile-web-app-title"
                        content={config.siteName}
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="152x152"
                        href="/static/icons/icon_180.png"
                    />

                    <meta
                        name="msapplication-TileColor"
                        content={config.css.primaryColor}
                    />
                    <meta
                        name="msapplication-TileImage"
                        content="/static/icons/icon_150.png"
                    />
                    {/* 
                    <script>
                         Add a Google Analytics script here.
                    </script>
                    */}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}
