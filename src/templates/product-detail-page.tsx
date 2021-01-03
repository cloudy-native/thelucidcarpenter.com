import { StarIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, HStack, Spacer, Text, VStack } from "@chakra-ui/react";
import Img from 'gatsby-image';
import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Layout from "../components/layout";

function Details({ materials, views, num_favorers, url, price, title }) {
  return (
    <VStack spacing={4}>
      <Text mt={8}>${price}</Text>
      <Button as="a" href={url} colorScheme="yellow" >Buy Now</Button>
      {/* {
        materials && materials.length > 0 && <Materials mt={8} spacing={4} materials={materials} />
      } */}
    </VStack>
  )
}

function ImageCard({ image }) {
  return (
    <Box borderWidth="1px" borderRadius="md" overflow="hidden" boxShadow="base">
      <Img fluid={image.childFile.childImageSharp.fluid} />
    </Box>
  )
}

function ImageGrid({ childrenEtsyListingImage }) {
  return (
    <Carousel
      infiniteLoop
      useKeyboardArrows
      renderItem={(item: React.ReactNode) => <Box>{item}</Box>}
      renderThumbs={(children: React.ReactChild[]) => children.map(child => <Box>{child}</Box>)}
    >
      {
        childrenEtsyListingImage.map(image => <div><ImageCard image={image} /></div>)
      }
    </Carousel>
  )
}

function Description({ description }) {
  return (
    <Text fontSize="sm">
      <div dangerouslySetInnerHTML={{ __html: description }}></div>
    </Text>
  )
}

function Title({ title }) {
  return (
    <Flex width="100%" alignContent="space-between">
      <Text fontSize="2xl" >{title}</Text>
      <Spacer />
      <Box as="span" d="flex" alignItems="center" fontSize="sm">
        {Array(5)
          .fill("")
          .map((_, i) => (
            <StarIcon
              key={i}
              color={i < 5 ? "yellow.500" : "gray.500"}
            />
          ))}
      </Box>
    </Flex>
  )
}
function ProductDetailPage({ pageContext }) {
  const { node } = pageContext
  const { url, childrenEtsyListingImage, description, materials, price, title, views, num_favorers, taxonomy_path } = node

  return (
    <Layout>
      <VStack width="100%" spacing={8}>
        <Title title={title} />
        <HStack width="100%" >
          <Box width="60%">
            <ImageGrid childrenEtsyListingImage={childrenEtsyListingImage} />
          </Box>
          <Spacer />
          <Box width="40%">
            <Details materials={materials} num_favorers={num_favorers} price={price} title={title} url={url} views={views} />
          </Box>
        </HStack>
        <Description description={description} />
      </VStack>
    </Layout>
  )
};

export default ProductDetailPage;
