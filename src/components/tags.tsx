import { Box, Tag } from '@chakra-ui/react'
import React from "react"

function Tags({ tags, ...rest }) {
    return (
        <Box>
            {
                tags.map((tag) => <Tag {...rest} key="tag">{tag}</Tag>)
            }
        </Box>
    )
}

export default Tags
