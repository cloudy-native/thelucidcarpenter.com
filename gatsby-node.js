const path = require("path")
const productDetailTemplate = path.resolve(
  `./src/templates/product-detail-page.tsx`
)

exports.createPages = ({ graphql, actions }, options) => {
  const { createPage } = actions

  return graphql(`
    {
      allEtsyListing {
        edges {
          node {
            id
            currency_code
            description
            title
            materials
            price
            tags
            views
            childrenEtsyListingImage {
              url_170x135
              url_570xN
              url_75x75
              url_fullxfull
              saturation
              rank
            }
          }
        }
      }
    }
  `).then(listings => {
    listings.data.allEtsyListing.edges.forEach(({ node }) => {
      console.log("node", node)

      createPage({
        path: `/listing/${node.id}/`,
        component: productDetailTemplate,
        context: { node },
      })
    })
  })
}
