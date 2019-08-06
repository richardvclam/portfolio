/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path")

const makeRequest = (graphql, request) =>
  new Promise((resolve, reject) => {
    // Query for nodes to use in creating pages.
    resolve(
      graphql(request).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        return result
      })
    )
  })

// Implement the Gatsby API "createPages". This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const getProjects = makeRequest(
    graphql,
    `
      {
          allStrapiProject {
              edges {
                  node {
                      slug
                  }
              }
          }
      }
      `
  )
    .then(result => {
      console.log("result", result)

      // Create pages for each project
      result.data.allStrapiProject.edges.forEach(({ node }) => {
        createPage({
          path: `/projects/${node.slug}`,
          component: path.resolve(`./src/templates/project.tsx`),
          context: {
            slug: node.slug,
          },
        })
      })
    })
    .catch(err => {
      console.error(err)
    })

  // Query for projects nodes to use in creating pages.
  return getProjects
}

// export default {
//   createPages: ({ actions, graphql }) => {
//     const { createPage } = actions

//     const getProjects = makeRequest(
//       graphql,
//       `
//       {
//           allStrapiProject {
//               edges {
//                   node {
//                       slug
//                   }
//               }
//           }
//       }
//       `
//     )
//       .then(result => {
//         console.log("result", result)

//         // Create pages for each project
//         result.data.allStrapiProject.edges.forEach(({ node }) => {
//           createPage({
//             path: `/projects/${node.slug}`,
//             component: path.resolve(`./src/templates/project.tsx`),
//             context: {
//               slug: node.slug,
//             },
//           })
//         })
//       })
//       .catch(err => {
//         console.error(err)
//       })

//     // Query for projects nodes to use in creating pages.
//     return getProjects
//   },
// }
