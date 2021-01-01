import {
    Box,
    Tag
} from '@chakra-ui/react'
import React from "react"

function Materials({ materials ,...rest}) {
    return (
        <Box>
            {
                materials.map((material) => <Tag {...rest}>{material}</Tag>)
            }
        </Box>
    )
}

export default Materials
