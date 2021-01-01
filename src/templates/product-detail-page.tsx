import { StarIcon, ViewIcon, } from "@chakra-ui/icons";
import { Box, Grid, GridItem, Image, Spacer, Text, VStack } from "@chakra-ui/react";
import React from "react";
import Layout from "../components/layout";
import Materials from "../components/materials";
import TaxonomyPath from "../components/taxonomy-path";

function ProductDetailPage({ pageContext }) {
  const { node } = pageContext
  const { childrenEtsyListingImage, description, materials, price, title, views, num_favorers, taxonomy_path } = node
  console.log('pageContext', pageContext)

  return (
    <Layout>
      {/* <TaxonomyPath taxonomy={taxonomy_path}/> */}
      <Grid templateColumns="repeat(5, 1fr)" gap={8} >
        <GridItem colSpan={3}  >
          <VStack spacing={8}>
            <Image objectFit="scale-down" src={childrenEtsyListingImage[0].url_570xN} />
            <Text fontSize="sm">
              <div dangerouslySetInnerHTML={{ __html: description }}></div>
            </Text>
          </VStack>
        </GridItem>
        <GridItem colSpan={2}  >
          <VStack alignItems="flex-start">
            <Text fontSize="md" >{title}</Text>
            <Text mt={8}>${price}</Text>
            {
              materials && materials.length > 0 && <Materials mt={8} materials={materials} />
            }
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
            <Spacer />
            <Box color="gray.600" fontSize="sm">
              <ViewIcon/> {views}
          </Box>
            <Box color="gray.600" fontSize="sm">
              ❤️ {num_favorers}
          </Box>
          </VStack>
        </GridItem>
      </Grid>
    </Layout>
  )
};

export default ProductDetailPage;
