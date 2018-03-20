import React from "react"
import Link from "gatsby-link"
import get from "lodash/get"
import Helmet from "react-helmet"

import { rhythm } from "../../utils/typography"
import '../../stylesheets/scss/config.scss';

class Contact extends React.Component {
  render() {
    // console.log("props", this.props)
    const pageLinks = []
    const siteTitle = get(this, "props.data.site.siteMetadata.title")
    

    return (
      <div>
        <Helmet title={get(this, "props.data.site.siteMetadata.title")} />
        <section>
          <h3>Leave a message after the . . . . beep</h3>
          <form action="//formspree.io/cullan.luther@gmail.com" method="POST">
             <div className="clear">
              <div className="grouped-field">
                <label htmlFor="frmName">
                  Full Name</label>
                <input className="-m-break" id="frmName" name="name" required="" autoComplete="name" />
              </div>
              <div className="grouped-field">
                <label htmlFor="frmEmail">Email</label>
                <input className="-m-break" type="email" id="frmEmail" name="_replyto" required="" autoComplete="email" />
              </div>
              <input type="hidden" name="_subject" value="New Blog Submission!" />
              <div className="grouped-field"><label htmlFor="frmMessage">Message</label>
                <textarea className="-m-break" type="text" name="message"></textarea>
              </div>
            </div> 
             <input name="_gotcha" style={{display: "none"}} />
             <input type="submit" value="Send" />
            <input type="hidden" name="_next" value="/" /> 
          </form>
        </section>
      </div>
    )
  }
}

Contact.propTypes = {
  route: React.PropTypes.object,
}

export default Contact

// export const pageQuery = graphql`
//   query IndexQuery {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
//       edges {
//         node {
//           frontmatter {
//             path
//           }
//           frontmatter {
//             title
//           }
//         }
//       }
//     }
//   }
// `