import React from "react";
import{ graphql, useStaticQuery } from "gatsby";

const Footer = () => {

    const data = useStaticQuery(graphql`
        query {
            site {
            siteMetadata {
            author
                }
            }
        }
    `)
    
    return (
        <footer className="text-center py-96">
            <span>©{data.site.siteMetadata.author} - 2024</span>
        </footer>
    )
}

export default Footer