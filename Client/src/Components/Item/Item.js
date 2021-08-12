import React from 'react'
import { Link, useParams } from "react-router-dom"

// const SingleItem = (id, title) => {
//     window.open(`/item?itemID=${id}`).focus()
//     return <h1 style={{ marginTop: '3.5rem' }}>
//         Hello world
//     </h1>
// }

export default function Item(props) {
    const { id, title, price, image } = props.product

    return <Link to={{ pathname: `/singleItem/${id}` }} style={{ textDecoration: "none", color: "black" }}>
        <div className="content_suggested_item" key={id} id={id}>
            <img src={image} alt="product_thumbnail" />
            <h4 id="content_suggested_name">{title}</h4>
            <span>${price}</span>
        </div>
    </Link>
}
// export default function Item(props) {
//     const { id, title, price, image } = props.product

//     return <Link to={{ pathname: `/singleItem/${id}`, state: { itemID: id } }} style={{ textDecoration: "none", color: "black" }}>
//         <div className="content_suggested_item" key={id}  >
//             <img src={image} alt="product_thumbnail" />
//             <h4 id="content_suggested_name">{title}</h4>
//             <span>${price}</span>
//         </div>
//     </Link>
// }
// djn3krnkbbKBKJBK$BK4bj54kj5bK$JB$KJbkB$jbkj4BK$JN