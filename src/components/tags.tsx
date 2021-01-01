import {
    HStack,
    Tag,
    Text,
    Box
} from '@chakra-ui/react'
import React from "react"

function Tags({ tags }) {
    return (
        <Box>
        {
            tags.map((tag) => <Tag>{tag}</Tag>)
        }
        </Box>
    )
}

export default Tags
