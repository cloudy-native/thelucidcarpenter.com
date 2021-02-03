import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Button, ButtonGroup, Flex, Spacer, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { Link } from "gatsby";
import React from "react";

function NavBar({ title }) {
    const { toggleColorMode: toggleMode } = useColorMode()
    const text = useColorModeValue(<MoonIcon />, <SunIcon />)

    return (
        <Flex mt={4} width="100%" as="nav" align="center">
            <Text fontSize="4xl" >
                <Link aria-label="home" to="/">{title}</Link>
            </Text>
            <Spacer />
            <ButtonGroup variant="link" spacing={6}>
                <Button aria-label="home"><Link to="/">Home</Link></Button>
                <Button aria-label="about"><Link to="/about">About</Link></Button>
                <Button aria-label="toggle light dark mode" onClick={toggleMode}>{text}</Button>
            </ButtonGroup>
        </Flex>
    );
};

export default NavBar;
