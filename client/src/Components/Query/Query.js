import React, { useEffect, useState } from 'react'
import "./Query.css"
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import { useGlobalContext } from '../../Context/Context'
import Loading from "../Loading/Loading"

export default function Query() {
    const { isLoading, setIsLoading, url } = useGlobalContext()
    const [queryResult, setQueryResult] = useState([])
    const { query } = useParams()
    const queryValue = query.split('=')[1]

    useEffect(() => {
        async function fetchData() {
            setIsLoading(true)
            await axios.get(`${url}/products?title=${queryValue}`).then(resp => setQueryResult(resp.data.data))
            setIsLoading(false)
        }
        fetchData()
    }, [queryValue])

    if (isLoading) {
        return <Loading />
    }

    // to handle the sort filter
    const handleSort = (sortBy) => {

    }

    return (
        <>
            <div className="query_wrapper">
                <div className="query_filters">
                    <h2>Filters</h2>
                    <ul>
                        <li className="filters_title">Sort by price</li>
                        <li onClick={() => handleSort("low")}>Low to high</li>
                        <li onClick={() => handleSort("high")}>High to low</li>
                    </ul>
                </div>
                <div className="query_container">
                    <div className="query_result_title">{queryResult.length} results found</div>
                    <div className="query_content">
                        {
                            queryResult.map((item) => {
                                return <Link to={{ pathname: `/singleItem/${item._id}` }} style={{ textDecoration: "none", color: "black" }} key={item._id}>
                                    <div className="query_item">
                                        <div className="query_image_container">
                                            <img src={item.image} alt="" />
                                        </div>
                                        <div>
                                            <h2>{item.title}</h2>
                                        </div>
                                        <div>
                                            <h4>{item.price}</h4>

                                        </div>
                                    </div>
                                </Link>
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
