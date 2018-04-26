import React from 'react'
import Link from 'gatsby-link'
import { Container } from 'react-responsive-grid'
import Sidebar from "../components/sidebar"

import { rhythm, scale } from '../utils/typography'
import "../stylesheets/scss/config.scss"
// let stylesStr
// if (process.env.NODE_ENV === `production`) {
//   try {
//     stylesStr = require(`!raw-loader!../public/styles.css`)
//   } catch (e) {
//     console.log(e)
//   }
// }
class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }
    // let css
    // if (process.env.NODE_ENV === `production`) {
    //   css = (
    //     <style
    //       id="gatsby-inlined-css"
    //       dangerouslySetInnerHTML={{ __html: stylesStr }}
    //     />
    //   )
    // }
    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            fontWeight: 100,
            letterSpacing: '.125rem',
            textTransform: 'uppercase',
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >

        </h1>
      )
    } else {
      header = (
        <h1
          style={{
            marginTop: 0,
            fontWeight: 100,
            letterSpacing: '.125rem',
            textTransform: 'uppercase',
            marginBottom: rhythm(-1),
          }}
        >

            {this.props.location.pathname.slice(1, -1)}
         
        </h1>
      )
    }
    return (
      <div>
        <input type="checkbox" className="sidebar-checkbox" id="sidebar-checkbox" />
        <Sidebar />
        <Container

          style={{
            maxWidth: rhythm(24),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
          className="wrap"
        >
          <div

            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {header}
          {children()}
        </Container>
        <label htmlFor="sidebar-checkbox" className="sidebar-toggle triangle slide-down" title="menu"><i className="fa fa-circle-thin grow-in"></i></label>
        {this.props.postBodyComponents}
        <script src="https://use.fontawesome.com/93eb216ac8.js"></script>

      </div>
    )
  }
}

export default Template
