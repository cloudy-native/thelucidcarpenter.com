import { HStack, Tag } from '@chakra-ui/react'
import React from "react"

function Materials({ materials }) {
    return (
        <HStack spacing={2}>
            {
                materials.map((material) => <Tag key={material}>{material}</Tag>)
            }
        </HStack>
    )
}

export default Materials
