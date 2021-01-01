import { StarIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, Image, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import Layout from "../components/layout";
import Materials from "../components/materials";

function ProductDetailPage({ pageContext }) {
  const { node } = pageContext
  const { id, childrenEtsyListingImage, description, materials, price, tags, title, views } = node
  console.log('pageContext', pageContext)

  return (
    <Layout>
      <Flex justify="space-between">
        <Image objectFit="scale-down" src={childrenEtsyListingImage[0].url_570xN} />
        <Spacer p={5} />
        <Flex flexDirection="column" >
          <Heading as="h3" >{title}</Heading>
          <Text as="p" mt={8}>
            <div dangerouslySetInnerHTML={{ __html: description }}></div>
          </Text>
          {
            materials && materials.length > 0 && <Materials mt={8} materials={materials} />
          }
          <Text as="p" mt={8}>Price: ${price}</Text>
          <Spacer />
          <Flex justify="space-between">
            <Box as="span" d="flex" alignItems="center" fontSize="sm">
              {Array(5)
                .fill("")
                .map((_, i) => (
                  <StarIcon
                    key={i}
                    color={i < 4 ? "yellow.500" : "gray.500"}
                  />
                ))}
            </Box>
            <Box as="span" color="gray.600" fontSize="sm">
              {views} views
          </Box>
          </Flex>
        </Flex>
      </Flex>
    </Layout>
  )
};

export default ProductDetailPage;
