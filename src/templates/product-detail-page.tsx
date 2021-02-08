import { Box, Button, Flex, HStack, Spacer, Text, VStack } from "@chakra-ui/react";
import Img from "gatsby-image";
import React from "react";
import StackGrid from "react-stack-grid";
import { SRLWrapper } from "simple-react-lightbox";
import { expandNewlines } from "../utils/util";

function Details({ url, price }) {
  return (
    <VStack spacing={4}>
      <Text mt={8}>${price}</Text>
      <Button aria-label="buy now" as="a" href={url} colorScheme="yellow" >Buy Now</Button>
      {/* {
        materials && materials.length > 0 && <Materials mt={8} spacing={4} materials={materials} />
      } */}
    </VStack>
  )
}

function ImageCard({ image, ...rest }) {
  return (
    <Img {...rest} fluid={image.childFile.childImageSharp.fluid} />
  )
}

function ImageGrid({ childrenEtsyListingImage }) {
  return (
    <SRLWrapper>
      <StackGrid> 
        {
          childrenEtsyListingImage.map((image, index) => <div key={index} ><ImageCard image={image} /></div>)
        }
      </StackGrid>
    </SRLWrapper>
  )
}

function Description({ description }) {
  return (
    <Text>
      <div dangerouslySetInnerHTML={{ __html: expandNewlines(description) }}></div>
    </Text>
  )
}

function Title({ title }) {
  return (
    <Flex width="100%" alignContent="space-between">
      <Text fontSize="2xl" >{title}</Text>
      <Spacer />
    </Flex>
  )
}
function ProductDetailPage({ pageContext }) {
  const { node } = pageContext
  const { url, childrenEtsyListingImage, description, materials, price, title, views, num_favorers, taxonomy_path } = node

  return (
    <>
      <VStack width="100%" spacing={8}>
        <Title title={title} />
        <HStack width="100%" >
          <Box width="60%">
            <ImageGrid childrenEtsyListingImage={childrenEtsyListingImage} />
          </Box>
          <Spacer />
          <Box width="40%">
            <Details price={price} url={url} />
          </Box>
        </HStack>
        <Description description={description} />
      </VStack>
    </>
  )
};

export default ProductDetailPage;
