import React from "react";
import { graphql, useStaticQuery } from "gatsby";

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
        site {
        siteMetadata {
        title
           }
        }
    }
`)

  return (
    <div>
      <p className=" bg-yellow-600 text-5xl text-center py-10 text-gray-100 font-semibold font-['rammentto']">{data.site.siteMetadata.title}</p>
    </div>
  )
}

export default Header