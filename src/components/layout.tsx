import {
  ChakraProvider,
  Container,
  Divider,
  Flex,
  Spacer,
  Text,
Box,
  VStack
} from '@chakra-ui/react'
import theme from "@chakra-ui/theme"
import { graphql, useStaticQuery } from 'gatsby'
import PropTypes from "prop-types"
import React from "react"
import NavBar from './navbar'

function Layout({ children }) {
  const data = useStaticQuery(graphql`
      query SiteTitleQuery {
      site {
          siteMetadata {
          title
          }
      }
    }
  `)

  const title = data.site.siteMetadata?.title || `Title`

  return (
    <ChakraProvider theme={theme}>
      <Container maxW="4xl">
        <VStack>
          <NavBar title={title} />
          <Divider />
          <main> <Box mt={6}>{children}</Box></main>
          <Divider />
          <Flex mt={6} width="100%">
            <Text fontSize="sm">© {new Date().getFullYear()} {` `} {title}</Text>
            <Spacer />
            <Text fontSize="sm">Made with ❤️ by Stephen Harrison</Text>
          </Flex>
        </VStack>
      </Container>
    </ChakraProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
