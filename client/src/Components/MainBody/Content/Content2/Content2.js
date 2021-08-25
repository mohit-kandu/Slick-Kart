import React, { useState, useEffect } from 'react'
import Content from "../Content"
import { useGlobalContext } from '../../../../Context/Context'
import axios from "axios"


export default function Content1({ title }) {
    const { setIsLoading, productsFootwear } = useGlobalContext()
    return (
        <>
            <Content title={title} products={productsFootwear} contentID="content2" />
        </>
    )
}
