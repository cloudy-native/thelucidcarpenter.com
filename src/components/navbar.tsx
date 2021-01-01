import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
    Flex,
    Heading,
    Text,
    Spacer,
    useColorMode,
    useColorModeValue
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
        <Flex width="100%" as="nav" >
            <Text fontSize="4xl" >
                <Link to="/">
                    {title}
                </Link>
            </Text>
            <Spacer />
            <Switcher />
        </Flex>
    );
};

export default NavBar;
