import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";

const IndexPage = ({data}) => {
  return (
      <Layout>
      <p className="text-slate-900 text-base ml-20 mt-8">{data.site.siteMetadata.description}</p>
      </Layout>
  )
}

export const query = graphql `
  query IndexPageQuery {
    site {
      siteMetadata {
        description
      }
    }
  }
`
export default IndexPage 