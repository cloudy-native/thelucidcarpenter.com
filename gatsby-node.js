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
    listings.data.allEtsyListing.nodes.forEach(node => {
      createPage({
        path: `/listing/${node.id}/`,
        component: productDetailTemplate,
        context: { node }, 
      })
    })
  })
}
