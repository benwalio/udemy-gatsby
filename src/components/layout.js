/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql, Link } from "gatsby";
import "../styles/layout.css";
import {
  Main,
  NavLink,
  Brand,
  BrandLink,
  BrandInk,
  NavLinks,
  Header,
} from "../styles/styledTest";

import "./layout.css";

// const Main = styled.main`
//   max-width: 800px;
//   margin: 0 auto;
// `

export const NavlinkQuery = graphql`
{
  prismic {
    allAppnavbars {
      edges {
        node {
          navigation_links {
            link {
              ... on PRISMIC_Page {
                _meta {
                  uid
                }
              }
              ... on PRISMIC_Contact_page {
                _meta {
                  uid
                }
              }
            }
            label
          }
          brand_ink
          branding
        }
      }
    }
  }
}
`;

const Layout = ({ children }) => {
  return (
    <>
      <Header>
        <StaticQuery
          query={`${NavlinkQuery}`}
          render={(data) => {
            return (
              <>
                <Brand>
                  <BrandLink>
                    <Link to="/">
                      {data.prismic.allAppnavbars.edges[0].node.branding}
                    </Link>
                  </BrandLink>
                  <BrandInk>
                      {data.prismic.allAppnavbars.edges[0].node.brand_ink}
                    </BrandInk>
                </Brand>
                <NavLinks>
                  {data.prismic.allAppnavbars.edges[0].node.navigation_links.map(
                    (link) => {
                      return (
                        <NavLink key={link.link._meta.uid}>
                          <Link to={`/${link.link._meta.uid}`}>
                            {link.label}
                          </Link>
                        </NavLink>
                      );
                    }
                  )}
                </NavLinks>
              </>
            );
          }}
        />
      </Header>
      <Main>{children}</Main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
