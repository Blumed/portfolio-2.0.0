import React from 'react'
import Link from 'gatsby-link'
import { Container } from 'react-responsive-grid'
import Sidebar from "../components/sidebar/Sidebar"

import { rhythm, scale } from '../utils/typography'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }
    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            Gatsby Starter Blog
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: 'Montserrat, sans-serif',
            marginTop: 0,
            marginBottom: rhythm(-1),
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            Gatsby Starter Blog
          </Link>
        </h3>
      )
    }
    return (
      <Container
      
        style={{
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >  
          <input type="checkbox" className="sidebar-checkbox" id="sidebar-checkbox" />
          <Sidebar />
          <div
            className="wrap"
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          <label htmlFor="sidebar-checkbox" className="sidebar-toggle triangle slide-down" title="menu"><i className="fa fa-circle-thin grow-in"></i></label>
          {this.props.postBodyComponents}
          <script src="https://use.fontawesome.com/93eb216ac8.js"></script>
        
        {header}
        {children()}
      </Container>
    )
  }
}

export default Template
