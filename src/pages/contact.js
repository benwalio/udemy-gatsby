import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { Form, FormSubmit, SectionTitle, SectionContent } from "../styles/styledTest";

export const query = graphql`
  {
    prismic {
      allContact_pages {
        edges {
          node {
            form_fields {
              field_type
              name
              required
            }
            form_title
            form_description
          }
        }
      }
    }
  }
`;

function Contact(props) {
    const formNode = props.data.prismic.allContact_pages.edges[0].node;
  return (
    <Layout>
    <SectionTitle render={formNode.form_title} />
    <SectionContent render = {formNode.form_description} />
      <Form onSubmit={(e) => e.preventDefault}>
        {formNode.form_fields.map(
          (field, idx) => {
            if (field.field_type === "textarea") {
              return (
                <div key={idx}>
                  <textarea
                    required={field.required === "yes"}
                    placeholder={field.name}
                  />
                </div>
              );
            } else {
              return (
                <div key={idx}>
                  <input
                    placeholder={field.name}
                    required={field.required === "yes"}
                    type={field.field_type}
                  />
                </div>
              );
            }
          }
        )}
        <FormSubmit type="submit">submit</FormSubmit>
      </Form>
    </Layout>
  );
}

export default Contact;
