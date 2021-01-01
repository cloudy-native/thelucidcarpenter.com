import { Box, Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import ProductCard from "./product-card";

function FrontPage() {
  const data = useStaticQuery(graphql`
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
  `)

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 4 }}
      spacing={4}
    >
      {
        data.allEtsyListing.edges.map(({ node }) => <ProductCard product={node} />)
      }
    </SimpleGrid>
  )
};

export default FrontPage;
