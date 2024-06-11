import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";

const AboutPage = ({data}) => {
    return (
        <Layout>
            <div>
                <p className="text-slate-900 text-base mt-8">{data.site.siteMetadata.about}</p>
            </div>
        </Layout>
    );
}

export const query = graphql `
  query IndexPageQuery {
    site {
      siteMetadata {
        about
      }
    }
  }
`
export default AboutPage;
