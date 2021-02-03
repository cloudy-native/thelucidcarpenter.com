import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import Layout from './components/layout'
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox';

export function wrapPageElement({ element }) {
    return (
        <ChakraProvider resetCSS>
            <SimpleReactLightbox>
                <Layout>{element}</Layout>
            </SimpleReactLightbox>
        </ChakraProvider>
    )
}