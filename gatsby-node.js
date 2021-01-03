const path = require("path")
const productDetailTemplate = path.resolve(
  `./src/templates/product-detail-page.tsx`
)

exports.createPages = ({ graphql, actions }, options) => {
  const { createPage } = actions

  return graphql(`
    query {
      allEtsyListing {
        nodes {
          id
          title
          description
          materials
          price
          url
          views
          num_favorers
          taxonomy_path
          childrenEtsyListingImage {
            childFile {
              childImageSharp {
                fluid {
                  aspectRatio
                  src
                  srcSet
                  srcWebp
                  srcSetWebp
                  originalName
                  originalImg
                  presentationHeight
                  presentationWidth
                  sizes
                }
              }
            }
          }
        }
      }
    }
  `).then(listings => {
    console.log("listings.data.allEtsyListing.nodes > ", JSON.stringify(listings?.data?.allEtsyListing?.nodes, null, 2))
    listings.data.allEtsyListing.nodes.forEach(node => {
      console.log("node > ", JSON.stringify(node, null, 2))
      createPage({
        path: `/listing/${node.id}/`,
        component: productDetailTemplate,
        context: { node }, 
      })
    })
  })
}
