import React, { Component } from "react";
import Link from "next/link";
import { FaTimes } from "react-icons/fa";
import { config } from "../config/config.yml";

export const NavigationItem = props => (
    <li>
        <Link prefetch href={props.data.link}>
            <a onClick={props.handleToggleNav}>{props.data.text}</a>
        </Link>
        <style jsx>{`
            li {
                list-style-type: none;
                height: 40px;
                min-width: 100%;
                border-bottom: 1px solid ${config.css.lightGray};
                display: flex;
                align-items: center;
            }
            a {
                text-decoration: none;
                font-size: 20px;
            }
        `}</style>
    </li>
);

const CloseButton = props => (
    <button
        role="button"
        aria-label="close navigation"
        className="icon-button"
        onClick={props.close}
        type="button">
        <FaTimes size={20} />
        <style jsx>{`
            .icon-button {
                height: 30px;
                position: absolute;
                right: 0;
            }
        `}</style>
    </button>
);

export default class Navigation extends Component {
    state = { navOpen: false };

    handleToggleNav = () => {
        this.props.toggleNavigation();
    };

    render() {
        // there is a click handler on div.backdrop to close the
        // nav if the user clicks outside of the navigation component
        return (
            <div
                className={
                    this.props.open ? `navigation` : `navigation closed`
                }>
                <div onClick={this.handleToggleNav} className="backdrop" />
                <ul>
                    <li className="button-li">
                        <CloseButton close={this.handleToggleNav} />
                    </li>
                    {config.navigation.map(navData => {
                        return (
                            <NavigationItem
                                key={navData.link}
                                data={navData}
                                handleToggleNav={this.handleToggleNav}
                            />
                        );
                    })}
                </ul>
                <style jsx>{`
                    .navigation {
                        position: fixed;
                        z-index: 4; /* the hamburger menu is z-index: 3 */
                    }
                    .navigation ul {
                        height: 100vh;
                        width: 380px;
                        background-color: #fff;
                        box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.2);
                        border-right: 1px solid rgba(0, 0, 0, 0.2);
                        position: absolute;
                        top: 0;
                        left: 0;
                        margin: 0;
                        padding: 10px;
                        transition: 0.2s ease-in-out;
                    }
                    .navigation.closed ul {
                        left: -450px;
                        transition: 0.2s ease-in-out;
                    }
                    .button-li {
                        height: 0;
                        position: relative;
                    }
                    .backdrop {
                        position: absolute;
                        width: 100vw;
                        height: 100vh;
                        top: 0;
                        left: 0;
                        background-color: rgba(0, 0, 0, 0.2);
                        transition: background-color 0.2s;
                    }
                    .navigation.closed .backdrop {
                        position: absolute;
                        width: 0;
                        height: 0;
                        top: 0;
                        background-color: rgba(0, 0, 0, 0);
                        transition: background-color 0.2s;
                    }
                `}</style>
            </div>
        );
    }
}
