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
            <div 
                className="sidebar" 
                id="sidebar"
                style={{
                        position: "fixed",
    top: "0",
    bottom: "0",
    left: "-14rem",
    width: "14rem",
    overflowY: "auto",
    fontSize: ".875rem",
    zIndex: "1",
    color: "rgba(255, 255, 255, 0.6)",
    backgroundColor: "#202020",
    transition: "all 0.3s ease-in-out",
    backfaceVisibility: "hidden",
                }}>
                <nav 
                className="sidebar-nav"
                style={{
                    color: "white",
                    padding: "0 1.5rem",
                    marginTop: "6rem",
                    }}
                >

                        <Link
                            className="sidebar-nav-item"
                            style={{
                                boxShadow: "none",
                                textDecoration: "none",
                                color: "inherit",
                                display: "block",
                                padding: "0.8rem 1rem",
                                position: "relative",
                            }}
                            to={"/"}
                        >
                            Home<i className="fa fa-circle-thin"></i><i className="fa fa-circle"></i>
                    </Link> 
                    <Link
                        className="sidebar-nav-item"    
                        style={{
                            boxShadow: "none",
                            textDecoration: "none",
                            color: "inherit",
                            display: "block",
                            padding: "0.8rem 1rem",
                            position: "relative",
                        }}
                        to={"/blog/"}
                        >
                        Blog<i className="fa fa-circle-thin"></i><i className="fa fa-circle"></i>
                    </Link>
                    <Link
                        className="sidebar-nav-item"    
                        style={{
                            boxShadow: "none",
                            textDecoration: "none",
                            color: "inherit",
                            display: "block",
                            padding: "0.8rem 1rem",
                            position: "relative",
                        }}
                        to={"/work/"}
                        >
                        Work<i className="fa fa-circle-thin"></i><i className="fa fa-circle"></i>
                    </Link>
                    <Link
                        className="sidebar-nav-item"    
                        style={{
                            boxShadow: "none",
                            textDecoration: "none",
                            color: "inherit",
                            display: "block",
                            padding: "0.8rem 1rem",
                            position: "relative",
                        }}
                        to={"/contact/"}
                        >
                        Contact<i className="fa fa-circle-thin"></i><i className="fa fa-circle"></i>
                    </Link>
                    <div className="social">
                        <a
                            className="sidebar-nav-social-item"
                            style={{ boxShadow: "none",color: "white" }}
                            href="https://github.com/blumed">
                            <i className="fa fa-github"></i>
                        </a>
                        <a
                            className="sidebar-nav-social-item"
                            style={{
                                boxShadow: "none",
                                color: "white"
                            }}
                            href="https://twitter.com/cullanluther">
                            <i className="fa fa-twitter"></i>
                        </a>
                        <a
                            className="sidebar-nav-social-item"
                            style={{
                                boxShadow: "none",
                                color: "white"
                            }}
                            href="http://codepen.io/Blummed/">
                            <i className="fa fa-codepen"></i>
                        </a>
                        <a
                            className="sidebar-nav-social-item"
                            style={{
                                boxShadow: "none",
                                color: "white"
                            }}
                            href="http://feeds.feedburner.com/CullanLuther">
                            <i className="fa fa-rss"></i>
                        </a>
                    </div>

                </nav>

                <div className="sidebar-btn"
                style={{
                    width: "100%",
    padding: "0 2.5rem",
    display: "flex",
    textAlign: "center",
    color: "white"
                }}>
                    <Link
                        className="btn"    
                        style={{
                            boxShadow: "none",
                            textDecoration: "none",
                            color: "inherit",
                            width: "100%",
                        }}
                        to={"/contact/"}
                        >
                        <span className="text-center">Hire Me</span>
                    </Link>
                </div>
                <div className="sidebar-item">
                    <p style={{color: "white"}}>
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