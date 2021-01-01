import { ChevronRightIcon } from '@chakra-ui/icons'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'
import React from "react"

function TaxonomyPath({ taxonomy }) {
    return (
        <Breadcrumb spacing="8px" separator={<ChevronRightIcon color="gray.500" />}>
            {
                taxonomy.map((level) => <BreadcrumbItem> <BreadcrumbLink href="#">{level}</BreadcrumbLink></BreadcrumbItem>)
            }
        </Breadcrumb>
    )
}

export default TaxonomyPath
