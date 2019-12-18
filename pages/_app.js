import App, { Container } from "next/app";
import Head from "next/head";
import NextSeo from "next-seo";
import Navigation from "../components/Navigation";
import { createSEOConfig } from "../utils/seo";
import getPostData from "../utils/get-post-data";
import BlogEngine from "../utils/blog-engine";
import { renderLayout } from "../utils/render-app-layout";
import Footer from "../components/Footer";
import { checkForSW } from "../utils/check-for-sw";
import { FaBars } from "react-icons/fa";
import { globalStyles } from "../styles";

export default class MyApp extends App {
    constructor(props) {
        super(props);
        this.state = { navOpen: false, postData: props.postData };
    }

    static async getInitialProps({ Component, router, ctx }) {
        let pageProps = {};

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        const [allData, postData] = await Promise.all([
            BlogEngine(),
            getPostData(router)
        ]).catch(error =>
            console.error("Error in _app.js getInitialProps()", error)
        );

        const propsObj = Object.assign(
            {},
            { router, postData, allData, ...pageProps }
        );

        return { ...propsObj };
    }

    async componentDidMount() {
        await checkForSW();
    }

    async componentDidUpdate(prevProps, prevState) {
        const postData = await getPostData(this.props.router);
        if (!prevState.postData || postData.name !== this.state.postData.name) {
            this.setState({ postData });
        }
    }

    handleToggleNavigation = () => {
        this.setState({
            navOpen: !this.state.navOpen
        });
    };

    render() {
        const { postData } = this.state;

        const seoData = createSEOConfig(postData);
        if (postData) {
            const tagsString = postData.tags.join(", ");
            return (
                <React.Fragment>
                    {/* (1) SEO  */}
                    <Head>
                        <meta name="keywords" content={tagsString} />
                    </Head>
                    <NextSeo config={seoData} />

                    {/* (2) navigation */}
                    <Navigation
                        open={this.state.navOpen}
                        toggleNavigation={this.handleToggleNavigation}
                    />
                    <button
                        type="button"
                        role="button"
                        aria-label="open navigation"
                        className="icon-button hamburger"
                        onClick={this.handleToggleNavigation}>
                        <FaBars size={20} />
                    </button>

                    {/* (3) page body */}
                    <React.Fragment>
                        {renderLayout(this.props, this.state)}
                    </React.Fragment>

                    {/* (4) footer */}
                    <Footer />

                    {/* (5) global and local styles */}
                    <style global jsx>
                        {globalStyles}
                    </style>
                    <style jsx>{`
                        .icon-button {
                            margin: 15px;
                        }
                    `}</style>
                </React.Fragment>
            );
        } else {
            return null;
        }
    }
}
