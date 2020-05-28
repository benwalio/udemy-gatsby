import React from "react";
import { graphql } from "gatsby";
import { RichText } from "prismic-reactjs";
import Layout from "../components/layout";
import SliceZone from '../components/sliceZone';

export const query = graphql`
  query PageQuery($id: String) {
    prismic {
      allPages(id: $id) {
        edges {
          node {
            _meta {
              uid
              id
            }
            body {
              ... on PRISMIC_PageBodyCall_to_action_grid {
                type
                primary {
                  section_title
                }
                fields {
                  action_button
                  action_content
                  action_image
                  action_title
                  button_destination {
                    ... on PRISMIC_Contact_page {
                      _meta {
                        uid
                      }
                    }
                  }
                }
              }
            }
            content
            page_title
          }
        }
      }
    }
  }
`;

const Page = (props) => {
  const pageTitle = props.data.prismic.allPages.edges[0].node.page_title;
  const pageContent = props.data.prismic.allPages.edges[0].node.content;
  return (
    <Layout>
      <RichText render={pageTitle} />
      <RichText render={pageContent} />
      <SliceZone body={props.data.prismic.allPages.edges[0].node.body} />
    </Layout>
  );
};

export default Page;
