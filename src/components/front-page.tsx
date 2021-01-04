
import { Box, Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import ProductCard from "../templates/product-card";

function FrontPage() {
  const listings = useStaticQuery(graphql`
  query {
    allEtsyListing {
      nodes {
        id
        description
        title
        price
        views
        is_customizable
        num_favorers
        childrenEtsyListingImage {
          childFile {
            childImageSharp {
              fixed {
                tracedSVG
                aspectRatio
                srcWebp
                srcSetWebp
                originalName
              }
              fluid {
                base64
                tracedSVG
                srcWebp
                srcSetWebp
                originalImg
                originalName
              }
            }
          }
        }
      }
    }
  }
`)

  console.log('listings', listings)

  return (
    <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={4} >
      {
        listings.data.allEtsyListing.nodes.map(({ node }) => <ProductCard product={node} />)
      }
    </SimpleGrid>
  )
};

export default FrontPage;
