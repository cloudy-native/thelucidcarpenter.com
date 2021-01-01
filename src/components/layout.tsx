import {
  ChakraProvider,
  Container,
  Divider,
  Flex,
  Spacer,
  Text,

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
      <Container mt={4} maxW="90%">
        <VStack spacing={5}>
          <NavBar title={title} />
          <Divider />
          <main>{children}</main>
          <Divider />
          <footer >
            <Flex justify="space-between">
              <Text fontSize="sm">© {new Date().getFullYear()} {` `} {title}</Text>
              <Spacer />
              <Text fontSize="sm">Made with ❤️ by Stephen Harrison</Text>
            </Flex>
          </footer>
        </VStack>
      </Container>
    </ChakraProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
