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
  const etsyStore = useStaticQuery(graphql`
    {
      etsyStore(data: {}) {
        data {
          shop_id
          shop_name
          user_id
          creation_tsz
          title
          currency_code
          is_vacation
          last_updated_tsz
          listing_active_count
          digital_listing_count
          login_name
          accepts_custom_requests
          policy_has_private_receipt_info
          url
          num_favorers
          icon_url_fullxfull
          is_using_structured_policies
          has_onboarded_structured_policies
          has_unstructured_policies
          include_dispute_form_link
          is_direct_checkout_onboarded
          is_calculated_eligible
          is_opted_in_to_buyer_promise
          is_shop_us_based
        }
      }
    }
  `)

  const store = etsyStore?.etsyStore?.data[0]
  const title = store.title || `Title`

  const siteTheme = {
    ...theme,
    fonts: {
      body: "Open Sans, sans-serif",
      heading: "Open Sans, serif",
      mono: "Menlo, monospace",
    }
  }

  return (
    <ChakraProvider theme={siteTheme}>
      <Container maxW="4xl">
        <VStack spacing={6}>
          <NavBar title={title} />
          <Divider />
          <main><Box>{children}</Box></main>
          <Divider />
          <Flex width="100%">
            <Text fontSize="sm">© {new Date().getFullYear()} {` `} {title}</Text>
            <Spacer />
            <Text fontSize="sm">Website made from scratch with ❤️ by Stephen Harrison</Text>
          </Flex>
          <Flex width="100%">
            {
              store.is_vacation && <Text>We're on vacation</Text>
            }
            {
              store.is_shop_us_based && <Text>Proudly made in USA</Text>
            }
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
