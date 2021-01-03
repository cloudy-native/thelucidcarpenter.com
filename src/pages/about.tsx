import {
  Text,
  VStack
} from '@chakra-ui/react'
import { graphql, useStaticQuery } from 'gatsby'
import React from "react"
import Layout from '../components/layout'

function About() {
  const aboutQueryData = useStaticQuery(graphql`
    {
      aboutEtsyStore {
        id
        data {
          shop_id
          status
          story_headline
          story_leading_paragraph
          story
          url
        }
      }
    }
  `)

  const about = aboutQueryData?.aboutEtsyStore?.data[0]

  return (
    <Layout>
      <VStack spacing={4}>
        <Text fontSize="xl"><div dangerouslySetInnerHTML={{ __html: about.story_headline }}></div></Text>
        <Text fontSize="sm"><div dangerouslySetInnerHTML={{ __html: about.story_leading_paragraph }}></div></Text>
        <Text><div dangerouslySetInnerHTML={{ __html: about.story }}></div></Text>
      </VStack>
    </Layout>
  )
}

export default About
