import React, { useContext, useState } from 'react'


const url = "https://fakestoreapi.com/products"
const GlobalContext = React.createContext()

export default function AppProvider({ children }) {
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [modalIsOpen, setIsOpen] = useState(false);
    const [isCartEmpty, setIsCartEmpty] = useState(true)



    const fetchData = async () => {
        await fetch(url) //for now just pulling data from front end
            .then(res => res.json())
            .then(productData => setProducts(productData))
        setIsLoading(false)
    }

    React.useEffect(() => {
        try {
            fetchData()
        } catch (error) {
            console.log(error)
            setIsLoading(false)
        }
    }, [])

    const handleChange = (e, itemToDisplace) => {
        if (e.target.className === "prev")
            itemToDisplace.scrollBy({
                left: -250,
                behavior: 'smooth'
            });

        if (e.target.className === "next")
            itemToDisplace.scrollBy({
                left: 250,
                behavior: 'smooth'
            });
    }
    return (
        <GlobalContext.Provider value={{ isLoading, products, modalIsOpen, isCartEmpty, setIsOpen, handleChange }}>{children}</GlobalContext.Provider>
    )


}
export const useGlobalContext = () => {
    return useContext(GlobalContext)
}

export { AppProvider }