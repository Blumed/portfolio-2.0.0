import React from "react"
import Link from "gatsby-link"
import get from "lodash/get"
import Helmet from "react-helmet"
// Import typefaces
import "typeface-montserrat"
import "typeface-merriweather"

import { rhythm } from "../../utils/typography"

class Sidebar extends React.Component {
    render() {

        return (
            <div className="sidebar" id="sidebar">
                <div>Hi</div>
                <nav className="sidebar-nav">
                    <div className="social">
                        <Link
                            className="sidebar-nav-item"
                            style={{
                                boxShadow: "none",
                                textDecoration: "none",
                                color: "inherit",
                            }}
                            to={"/"}
                        >
                            Home
                    </Link> 
                    <Link
                        className="sidebar-nav-item"    
                        style={{
                            boxShadow: "none",
                            textDecoration: "none",
                            color: "inherit",
                        }}
                        to={"/about/"}
                        >
                        About
                    </Link>
                    <Link
                        className="sidebar-nav-item"    
                        style={{
                            boxShadow: "none",
                            textDecoration: "none",
                            color: "inherit",
                        }}
                        to={"/work/"}
                        >
                        Work
                    </Link>
                    <Link
                        className="sidebar-nav-item"    
                        style={{
                            boxShadow: "none",
                            textDecoration: "none",
                            color: "inherit",
                        }}
                        to={"/contact/"}
                        >
                        Contact
                    </Link>
                        <a
                            className="sidebar-nav-social-item"
                            style={{ boxShadow: "none" }}
                            href="https://github.com/blumed">
                            <i className="fa fa-github"></i>
                        </a>
                        <a
                            className="sidebar-nav-social-item"
                            style={{
                                boxShadow: "none"
                            }}
                            href="twitter">
                            <i className="fa fa-twitter"></i>
                        </a>
                        <a
                            className="sidebar-nav-social-item"
                            style={{
                                boxShadow: "none"
                            }}
                            href="http://codepen.io/Blummed/">
                            <i className="fa fa-codepen"></i>
                        </a>
                        <a
                            className="sidebar-nav-social-item"
                            style={{
                                boxShadow: "none"
                            }}
                            href="http://feeds.feedburner.com/CullanLuther">
                            <i className="fa fa-rss"></i>
                        </a>
                    </div>

                </nav>

                <div className="sidebar-btn">
                    <a className="btn is-full-width" href="/contact">
                        <span className="text-center">Hire Me</span>
                    </a>
                </div>
                <div className="sidebar-item">
                    <p>
                        &copy; settime here. All rights reserved.
                    </p>

                </div>
            </div>

        )
    }
}

Sidebar.propTypes = {
    route: React.PropTypes.object,
}
// Sidebar.propTypes = {   route: React.PropTypes.object, }

export default Sidebar