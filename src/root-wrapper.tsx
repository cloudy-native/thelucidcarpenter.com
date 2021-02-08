import { ChakraProvider } from '@chakra-ui/react';
import theme from "@chakra-ui/theme";
import React from 'react';
import SimpleReactLightbox from 'simple-react-lightbox';
import Layout from './components/layout';

export function wrapPageElement({ element }) {
    return (
        <ChakraProvider resetCSS>
            <SimpleReactLightbox>
                <Layout>{element}</Layout>
            </SimpleReactLightbox>
        </ChakraProvider>
    )
}
