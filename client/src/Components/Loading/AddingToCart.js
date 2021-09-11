import React from 'react'
import { useGlobalContext } from '../../Context/Context'
import "./AddingToCart.css"
import LoadingSmall from "./LoadingSmall"

export default function AddingToCart() {
    const { addingToCart, time, setTime } = useGlobalContext()

    React.useEffect(() => {
        document.querySelector("#add_to_cart").addEventListener('click', () => {
            setTimeout(() => { setTime(false) }, 2000)
        })
        return (
            document.querySelector("#add_to_cart").removeEventListener('click',
                setTimeout, { passive: true }
            )
        )
    }, [time, setTime])


    if (addingToCart) {
        return (
            <LoadingSmall />
        )
    }
    return (
        time ? <div className="added">
            Item added to cart
        </div> : null



    )
}
