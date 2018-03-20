import React from "react"
import Link from "gatsby-link"
import get from "lodash/get"
import Helmet from "react-helmet"

//Tell Webpack Where images are
import caribou from "./images/caribou/caribou_logo.jpg"
import tyson from "./images/photo-gallery/tyson-crockett-photography.jpg"
import looksee from "./images/looksee/looksee-css-border-debugging-chrome-extension.png"
import celadon from "./images/celadon/celadon.jpg"
import rubbermaid from "./images/rubbermaid/rubbermaid.jpg"
import levolor from "./images/levolor/levolor.jpg"
import sleepnumber from "./images/sleepnumber/sleepnumber.jpg"
import deviceinfo from "./images/deviceinfo/deviceinfo-logo.png"
import notetaker from "./images/notetaker/notetaker.jpg"


import {rhythm} from "../../utils/typography"

class Work extends React.Component {
    render() {
        // console.log("props", this.props)
        const pageLinks = []
        const siteTitle = get(this, "props.data.site.siteMetadata.title")

        return (
            <div className="clear">
                <Helmet title={get(this, "props.data.site.siteMetadata.title")} />
                <nav className="tabs" >
                    <button className="tab active" id="all">All</button>
                    <button  className="tab" id="projects">Projects</button>
                    <button  className="tab" id="sites">Sites</button>
                </nav>
                <section className="work is-site">
                    <a href="https://www.caribouperks.com/">
                        <img className="is-full-width is-hard" src={caribou} alt="Caribou Perks Website" />
                    </a>
                    <h2><a href="https://www.caribouperks.com/">Caribou Perks</a></h2>
                    <p>My first project with Horizontal Integration. Caribou is often changing their look and feel. We had an awesome oportunity to updated their perks section. My first time using HI's Hive build system, which was really fun and powerful. Go over and peep the web app we made. Proud of how well this project turned out.</p>
                            <ul className="styless -inline -paddingless">
                            <li>Technology &mdash;</li>
                            <li><a href="http://sass-lang.com/">Scss</a></li>
                            <li><a href="https://mozilla.github.io/nunjucks/">nunjucks</a></li>
                            <li><a href="http://gulpjs.com/">Gulp</a></li>
                            <li><a href=" https://webpack.github.io/">Webpack</a></li>
                            <li><a href="http://www.sitecore.net/">Sitecore</a></li>
                            <li><a href="https://jquery.com/">jQuery</a></li>
                            <li><a href="http://scrollmagic.io/">Picturefill</a></li>
                            <li><a href="http://kenwheeler.github.io/slick/">Slick Slider</a></li>
                            <li><a href="https://bitbucket.org/">Bitbucket</a></li>
                            <li><a href="http://getbootstrap.com/">Bootstrap</a></li>
                            <li><a href="https://www.atlassian.com/software/jira">Jira</a></li>
                        </ul>
                </section>
                <section className="work is-site">
                    <a href="https://tysoncrockett.com">
                        <img className="is-full-width is-hard" src={tyson} alt="Celadon Wealth Responsive Website" />
                    </a>
                    <div className="text-body">
                        <h2><a href="https://tysoncrockett.com">Tyson Crockett Photographer</a></h2>
                        <p>Tyson is a friend of mine that was not happy with the template website cluttering of the modern web. We looked at wordpress/cloud cannon/squarespace and security/none developer friendly/customizable pushed us in the direction we ended up taking. He needed a simple minimal website that shows his work. The site speaks for itself and frames his amazing photography front and center. </p>
                        <ul className="styless -inline -paddingless">
                            <li>Technology &mdash;</li>
                            <li><a href="http://sass-lang.com/">Scss</a></li>
                            <li><a href="http://jekyllrb.com/">Jekyll</a></li>
                            <li><a href="http://gulpjs.com/">Gulp</a></li>
                            <li><a href="https://jquery.com/">jQuery</a></li>
                            <li><a href="http://kenwheeler.github.io/slick/">Slick Slider</a></li>
                            <li><a href="https://trello.com/">Trello</a></li>
                            <li><a href="https://git-scm.com/">Git</a></li>
                        </ul>
                    </div>
                </section>
                <section className="work is-project">
                    <a rel="chrome-webstore-item" href="https://chrome.google.com/webstore/detail/looksee/mbfdhnjobheppodaolenppfegicnhmhp">
                        <img className="is-full-width is-hard" src={looksee} alt="Looksee Chrome Extension for debugging css using borders on the fly" />
                    </a>
                    <div className="text-body">
                        <h2><a rel="chrome-webstore-item" href="https://chrome.google.com/webstore/detail/looksee/mbfdhnjobheppodaolenppfegicnhmhp">Looksee</a></h2>
                        <p>I made a Chrome Extension for debugging layout on the fly. All you need to do is add a class, id, or selector. Concat them with a coma. It uses the power of sizzle syntax found in jQuery. Additionally you can apply a shader as well. This gives you a little peek as to how elements are layering in your window. The chrome extension is constently changing. Give it a shot! I would love your feedback. If you would like to contribute, <a href="https://github.com/Blumed/looksee">here is the repo.</a></p>
                        <ul className="styless -inline -paddingless">
                            <li>Technology &mdash;</li>
                            <li><a href="http://sass-lang.com/">Scss</a></li>
                            <li><a href="http://gulpjs.com/">Gulp</a></li>
                            <li><a href="https://jquery.com/">jQuery</a></li>
                            <li><a href="https://www.sketchapp.com/">Sketch</a></li>
                            <li><a href="https://trello.com/">Trello</a></li>
                            <li><a href="https://git-scm.com/">Git</a></li>
                        </ul>
                    </div>
                </section>
                <section className="work is-site">
                    <a href="http://www.celadonwealth.com/">
                        <img className="is-full-width is-hard" src={celadon} alt="Celadon Wealth Responsive Website" />
                    </a>
                    <div className="text-body">
                        <h2><a href="http://www.celadonwealth.com/">Celadon Managed Wealth</a></h2>
                        <p>Celadon has been with Hellmoon for sometime now. We gave the site a small face lift to make the previous design mobile friendly. Rebuilt the site using Hellomoon's typography centric less system. My biggest take away was learning the power of inline-block.</p>
                        <ul className="styless -inline -paddingless">
                            <li>Technology &mdash;</li>
                            <li><a href="http://lesscss.org/">LESS</a></li>
                            <li><a href="http://jekyllrb.com/">Jekyll</a></li>
                            <li><a href="http://gulpjs.com/">Gulp</a></li>
                            <li><a href="https://jquery.com/">jQuery</a></li>
                            <li><a href="https://www.sketchapp.com/">Sketch</a></li>
                            <li><a href="https://trello.com/">Trello</a></li>
                            <li><a href="https://git-scm.com/">Git</a></li>
                        </ul>
                    </div>
                </section>
                <section className="work is-site">
                    <a href="http://newell.hellomoon.net/">
                        <img className="is-full-width is-hard" src={rubbermaid} alt="Newell Rubbermaid Animated Responsive Website" />
                    </a>
                    <div className="text-body">
                        <h2><a href="http://newell.hellomoon.net/">Newell Rubbermaid</a></h2>
                        <p>This was a really fun challenge, and my first project with Hellomoon. The site is fully responsive with plenty of animation, which works perfectly in all screen sizes. First time using <a href="http://scrollmagic.io/">scrollmagic.io</a> and <a href="https://greensock.com/">green sock</a>. Two completely awesome javascript libraries.</p>
                        <ul className="styless -inline -paddingless">
                            <li>Technology &mdash;</li>
                            <li><a href="http://lesscss.org/">LESS</a></li>
                            <li><a href="http://jekyllrb.com/">Jekyll</a></li>
                            <li><a href="http://gulpjs.com/">Gulp</a></li>
                            <li><a href="https://jquery.com/">jQuery</a></li>
                            <li><a href="http://scrollmagic.io/">Scroll Magic</a></li>
                            <li><a href="https://greensock.com/">Green Sock</a></li>
                            <li><a href="https://trello.com/">Trello</a></li>
                            <li><a href="https://www.atlassian.com/software/jira">Jira</a></li>
                            <li><a href="https://git-scm.com/">Git</a></li>
                        </ul>
                    </div>
                </section>
                <section className="work is-site">
                    <a href="http://www.levolor.com/">
                        <img className="is-full-width is-hard" src={levolor} alt="levolor blinds ecommerce responsive website" />
                    </a>
                    <div className="text-body">
                        <h2><a href="http://www.levolor.com/">Levolor</a></h2>
                        <p>Entered the project right after launch. Big focus on browser compatibility including specific android versions. Launched tablet version of the site for <a href="http://lowes.levolor.com/">Lowes </a> kiosk display. This project is currently still in progress.</p>
                        <ul className="styless -inline -paddingless">
                            <li>Technology &mdash;</li>
                            <li><a href="http://lesscss.org/">LESS</a></li>
                            <li><a href="http://gulpjs.com/">Gulp</a></li>
                            <li><a href="https://jquery.com/">jQuery</a></li>
                            <li><a href="http://blesscss.com/">Bliss</a></li>
                            <li><a href="http://getbootstrap.com/">Bootstrap</a></li>
                            <li><a href="https://magento.com/">Magento</a></li>
                            <li><a href="https://trello.com/">Trello</a></li>
                            <li><a href="https://git-scm.com/">Git</a></li>
                        </ul>
                    </div>
                </section>
                <section className="work is-site">
                        <a href="http://www.sleepnumber.com/">
                            <img className="is-full-width is-hard" src={sleepnumber} alt="sleepnumber beds ecommerce responsive website" />
                        </a>
                    <div className="text-body">
                        <h2><a href="http://www.sleepnumber.com/">Sleep Number</a></h2>
                        <p>Was one of two front end developers working to maintain the code base. Started out as a contractor and was hired on within 6 months. First big role with the company was to help facilitate <a href="http://www.hybris.com/en/">Hybris</a> enterprise CMS integration. Second big project was the redesign. We made a fully responsive ecommerce site using <a href="https://github.com/larsonjj/generator-yeogurt">Yeogurt</a> templating system. Introduced <a href="https://trello.com/">Trello</a> to better organize our agile and diverse digital marketing team.</p>
                        <ul className="styless -inline -paddingless">
                            <li>Technology &mdash;</li>
                            <li><a href="http://sass-lang.com/">Scss</a></li>
                            <li><a href="http://gruntjs.com/">Grunt</a></li>
                            <li><a href="https://jquery.com/">jQuery</a></li>
                            <li><a href="http://www.hybris.com/en/">Hybris</a></li>
                            <li><a href="http://getbootstrap.com/">Bootstrap</a></li>
                            <li><a href="https://github.com/larsonjj/generator-yeogurt">Yeogurt</a></li>
                            <li><a href="http://jade-lang.com/">Jade</a></li>
                            <li><a href="http://scottjehl.github.io/picturefill/">Picturefill</a></li>
                            <li><a href="https://trello.com/">Trello</a></li>
                            <li><a href="https://git-scm.com/">Git</a></li>
                        </ul>
                    </div>
                </section>
                <section className="work is-project">
                    <a href="https://deviceinfo.io/">
                        <img className="is-full-width is-hard" src={deviceinfo} alt="sublime text plugin for impex files" /></a>
                    <div className="text-body">
                        <h2><a href="https://deviceinfo.io/">Device Info IO</a></h2>
                        <p>Device Info IO are a few tools I created to help fellow web developers and clients communicate about devices for accurete bug tracking</p>
                        <ul className="styless -inline -paddingless">
                            <li><a href="https://jquery.com/">jQuery</a></li>
                            <li><a href="http://www.regular-expressions.info/">Regex</a></li>
                        </ul>
                    </div>
                </section>
                <section className="work is-project">
                    <a href="/project/note-taker">
                        <img className="is-full-width is-hard" src={notetaker} alt="simple note taker" />
                    </a>
                    <div className="text-body">
                        <h2><a href="/project/note-taker">Simple Note Taker</a></h2>
                        <p>Often I create small personal projects. One such project is a simple note taker, which I made to be mobile friendly. Built the app to be minimal and simple. The first section with a plus sign is going to be the file name. The gray section is the body of your note. Once you're done typing the save button will prompt.</p>
                        <ul className="styless -inline -paddingless">
                            <li>Technology &mdash;</li>
                            <li><a href="https://jquery.com/">jQuery</a></li>
                            <li><a href="http://knockoutjs.com/">knockout.js</a></li>
                        </ul>
                    </div>
                </section>
            </div>
        )
    }
}
Work.propTypes = {
    route: React.PropTypes.object
}

export default Work
// export const pageQuery = graphql` // query IndexQuery {//     site {       siteMetadata {         title       }     }
// allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
// edges {         node {           frontmatter {             path           }
//        frontmatter {             title           }         }       }     } }