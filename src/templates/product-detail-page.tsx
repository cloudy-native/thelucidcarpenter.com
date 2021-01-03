import { StarIcon, ViewIcon } from "@chakra-ui/icons";
import { Box, Button, SimpleGrid, HStack, Spacer, Text, VStack, Flex } from "@chakra-ui/react";
import Img from 'gatsby-image';
import React from "react";
import Layout from "../components/layout";
import Materials from "../components/materials";

// function Carousel({ childrenEtsyListingImage }) {
//   return (
//     <>
//       <Box width="100%">
//       </Box>
//       {/* <Slider {...sliderSettings}>
//       {
//         // node.childrenEtsyListingImage.map(image =>  <Text>{JSON.stringify(image.childFile.childImageSharp.fluid)}</Text>)
//         childrenEtsyListingImage.map(image =>  <Img fluid={image.childFile.childImageSharp.fluid}/>)
//       }
//     </Slider> */}
//     </>
//     // <Img fluid={images[0].childFile.childImageSharp.fluid} />
//     // <VStack>
//     //   {/* <Slider {...sliderSettings} > */}
//     //   {
//     //     images.map((image) => <FluidImage image={image} />)
//     //   }
//     //   {/* </Slider> */}
//     // </VStack>
//   )
// }
function ImageAndDescription({ description, childrenEtsyListingImage }) {
  return (
    <VStack spacing={8}>
      {/* {
        childrenEtsyListingImage.map(image => <Text fontSize="xs">{JSON.stringify(image.childFile.childImageSharp.fluid.originalImg, null, 2)}</Text>)
      } */}
      {/* {
        // childrenEtsyListingImage.map(image => <Center bg="green.500">
        //   <Text>{JSON.stringify(image.childFile.childImageSharp.fixed.srcWebp, null, 2)}</Text>
        // </Center>)
        childrenEtsyListingImage.map(image => <Img fluid={image.childFile.childImageSharp.fluid} />)
      } */}
      {/* <Carousel childrenEtsyListingImage={childrenEtsyListingImage} /> */}
      {/* <Image objectFit="scale-down" src={images[0].url_570xN} /> */}

    </VStack>
  )
}

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
    <SimpleGrid width="100%" columns={[1, 2, 3]} spacing={4} >
      {
        childrenEtsyListingImage.map(image => <ImageCard image={image} />)
      }
    </SimpleGrid>
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
  console.log('pageContext >>', pageContext)
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
