import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SliceZone from '../components/sliceZone'

export const query = graphql`
{
  prismic {
    allHomepages {
      edges {
        node {
          body {
            ... on PRISMIC_HomepageBodyHero {
              type
              label
              primary {
                hero_content
                hero_title
                hero_image
              }
            }
            ... on PRISMIC_HomepageBodyCall_to_action_grid {
              type
              fields {
                action_button
                action_content
                action_image
                action_title
                button_destination {
                  ... on PRISMIC_Page {
                    _meta {
                      uid
                    }
                  }
                }
              }
              primary {
                section_title
              }
            }
          }
        }
      }
    }
  }
}
`;

const IndexPage = (props) => {
  return (
    <Layout>
      <SliceZone body={props.data.prismic.allHomepages.edges[0].node.body} />
    </Layout>
  );
};

export default IndexPage;
