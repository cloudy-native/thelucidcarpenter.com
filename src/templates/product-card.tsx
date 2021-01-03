import { StarIcon } from '@chakra-ui/icons';
import { Box, Image, VStack, Text, Spacer, Flex } from "@chakra-ui/react";
import { Link } from "gatsby";
import React from "react";

function ProductCard({ product }) {
  return (
    <Box borderWidth="1px" borderRadius="md" overflow="hidden" boxShadow="base">
      <Link to={`/listing/${product.id}`}>
        <Image src={product.childrenEtsyListingImage[0].url_570xN} />
      </Link>

      <VStack m="6" align="right">
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated>
          {product.title}
        </Box>

        <Box>${product.price}</Box>

        <Flex>
          <Box d="flex" mt="2" alignItems="center">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <StarIcon
                  key={i}
                  color={i < 5 ? "yellow.500" : "gray.500"}
                />
              ))}
          </Box>
          <Spacer />
          <Text>
            {product.views} ratings
        </Text>
        </Flex>
      </VStack>
    </Box>
  );
};

export default ProductCard;
