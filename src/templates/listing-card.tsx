import { Box, VStack } from "@chakra-ui/react";
import { Link } from "gatsby";
import Img from 'gatsby-image';
import React from "react";

function ListingCard({ listing, ...rest }) {
  return (
    <Box {...rest} overflow="hidden">
      <Link to={`/listing/${listing.id}`}>
        <Img fluid={listing.childrenEtsyListingImage[0].childFile.childImageSharp.fluid} />

        <VStack m="3" align="left">
          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated>
            {listing.title}
          </Box>

          <Box>${listing.price}</Box>
        </VStack>
      </Link>
    </Box>
  );
};

export default ListingCard;
