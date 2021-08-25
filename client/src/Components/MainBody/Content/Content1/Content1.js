import React from 'react'
import { useGlobalContext } from '../../../../Context/Context'
import Content from "../Content"

export default function Content1({ title }) {
    const { productsClothing } = useGlobalContext()

    return (
        <>
            <Content title={title} products={productsClothing} contentID="content1" />
        </>
    )
}
