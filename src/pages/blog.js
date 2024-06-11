import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

const BlogPage = ({ data }) => {
    return (
        <Layout>
            <div className="text-slate-900 ml-80 mt-6">
                {
                    data.allMdx.nodes.map((node) => (
                        <article key={node.id}>
                            <h2 className="text-4xl">{node.frontmatter.title}</h2>
                            <p className="text-2xl">Posted: {node.frontmatter.date}</p>
                            <p className="text-2xl">Author: {node.frontmatter.author}</p>
                            <p>{node.excerpt}</p>
                        </article>
                    ))
                }
            </div>
        </Layout>
    );
}

export const query = graphql`
    query {
        allMdx(sort: { frontmatter: { date: DESC } }) {
            nodes {
                frontmatter {
                    date(formatString: "MMMM D, YYYY")
                    title
                    author
                }
                id
                excerpt
            }
        }
    }
`;

export default BlogPage;
