
import { SimpleGrid } from "@chakra-ui/react";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import ListingCard from "../templates/listing-card";

function StoreFront() {
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
    }`
  )

  return (
    <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={4} >
      {
        listings.allEtsyListing.nodes.map((listing) => <ListingCard key={listing.id} listing={listing} />)
      }
    </SimpleGrid>
  )
};

export default StoreFront;
