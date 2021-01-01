import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
    Container,
    Flex,
    Heading,
    useColorMode,
    useColorModeValue,
    Box
} from "@chakra-ui/react";
import { Link } from "gatsby";
import React from "react";

function Switcher() {
    const { toggleColorMode: toggleMode } = useColorMode()
    const text = useColorModeValue(<SunIcon />, <MoonIcon />)
    return <button onClick={toggleMode}>{text}</button>
}

function NavBar({ title }) {
    return (
        <Flex width="100%" as="nav" justify="space-between">
            <Heading as="h1" >
                <Link to="/">
                    {title}
                </Link>
            </Heading>
            <Switcher />
        </Flex>
    );
};

export default NavBar;
