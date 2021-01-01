import { Box, Flex, Heading, Image, VStack } from "@chakra-ui/react";
import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import { StarIcon } from '@chakra-ui/icons'

function ProductCard({ product }) {
  console.log('product', product)
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="base">
      <Link to={`/listing/${product.id}`}>
        <Image src={product.childrenEtsyListingImage[0].url_570xN} />
      </Link>

      <VStack m="6" align="right">
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {product.title}
        </Box>

        <Box>
          ${product.price}
        </Box>

        <Box d="flex" mt="2" alignItems="center">
          {Array(5)
            .fill("")
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < 4 ? "yellow.500" : "gray.500"}
              />
            ))}
        </Box>
        <Box as="span" ml="2" color="gray.600" fontSize="sm">
          {product.views} views
          </Box>
      </VStack>
    </Box>
  );
};

export default ProductCard;
