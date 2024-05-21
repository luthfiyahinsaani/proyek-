/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

const { postcss } = require('tailwindcss')

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
}

// posts.forEach(({ node }, index) => {
//   createPages({
//     path: node.fields.slug,
//     // values in the context object are passed in as variables to page quaries
//     context: {
//       title: node.title,// "Using a Theme"
//     },
//   })
// })
