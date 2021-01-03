
import { Box, Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import ProductCard from "../templates/product-card";

function FrontPage() {
  const listings = useStaticQuery(graphql`
    {
      allEtsyListing {
        edges {
          node {
            id
            description
            title
            materials
            price
            tags
            views
            is_customizable
            item_dimensions_unit
            item_height
            item_length
            item_weight
            item_weight_unit
            shipping_template_id
            taxonomy_path
            num_favorers
            childrenEtsyListingImage {
              url_170x135
              url_570xN
              url_75x75
              url_fullxfull
            }
          }
        }
      }
    }
  `)

  return (
    <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={4} >
      {
        listings.allEtsyListing.edges.map(({ node }) => <ProductCard product={node} />)
      }
    </SimpleGrid>
  )
};

export default FrontPage;
