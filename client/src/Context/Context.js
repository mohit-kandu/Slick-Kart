import React, { useContext, useState, useReducer, useEffect } from 'react'
import axios from "axios"
import cartReducer from "../Reducer/cartReducer"

// CART SETUP
const initialState = {
    loading: false,
    cart: [],
    total: 0,
    amount: 0,
    itemIDs: []
}

const GlobalContext = React.createContext()

export default function AppProvider({ children }) {
    const [enterPressed, setEnterPressed] = useState(false)
    const [state, dispatch] = useReducer(cartReducer, initialState)
    const [url, setUrl] = useState('/api/v1')
    const [productsClothing, setProductsClothing] = useState([])
    const [productsFootwear, setProductsFootwear] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [orderModalIsOpen, setOrderModalIsOpen] = useState(false)
    const [isCartEmpty, setIsCartEmpty] = useState(true)
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [authSuccess, setAuthSuccess] = useState(true)
    const [isLoggingIn, setIsLoggingIn] = useState(false)
    const [addingToCart, setAddingToCart] = useState(false)
    const [time, setTime] = useState(false)

    useEffect(() => {
        try {
            const fetchProductsClothing = async () => {
                setIsLoading(true)
                await axios.get(`${url}/products`)
                    .then(resp => setProductsClothing(resp.data.data))
                // const res = fetch(`${url}/products`)
                //     .then(res => res.json()).then(data => setProductsClothing(data.data))
                setIsLoading(false)
            }
            const fetchproductsFootwear = async () => {
                setIsLoading(true)
                await axios.get(`${url}/footwears`)
                    .then(resp => setProductsFootwear(resp.data.data)).then(console.log())
                setIsLoading(false)

            }

            fetchProductsClothing()
            fetchproductsFootwear()

        } catch (error) {
            console.log(error)
            setIsLoading(false)
        }
    }, [url])

    // CONTROL LEFT OR RIGHT BUTTONS FOR CONTENT
    const handleChange = (e, itemToDisplace) => {
        if (e.target.className === "prev")
            itemToDisplace.scrollBy({
                left: -500,
                behavior: 'smooth'
            });

        if (e.target.className === "next")
            itemToDisplace.scrollBy({
                left: 500,
                behavior: 'smooth'
            });
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoggingIn(true)
        await axios.post('https://fakestoreapi.com/auth/login',
            {
                username: userName,
                password: password

            }).then(token => (Object.keys(token.data).length === 1) && setAuthSuccess(true))
        authSuccess ? setModalIsOpen(false) : setModalIsOpen(true)
        setIsLoggingIn(false)
    }

    const handleLogin = (e) => {
        e.target.name === "userName" && setUserName(e.target.value)
        e.target.name === "userPass" && setPassword(e.target.value)
    }



    // REDUX


    const addItem = async (itemID) => {
        // const data = await axios.get(`${url}/${id}`)
        let temp
        await axios.get(`${url}/products/${itemID}`).then(resp => temp = resp.data.product).catch(err => console.log("Can't fetch single item", err))

        if (!temp) {
            await axios.get(`${url}/footwears/${itemID}`).then(resp => temp = resp.data.product).catch(err => console.log("Can't fetch single item", err))
        }

        dispatch({ type: 'ADD_ITEM', payload: temp })
    }
    const clearCart = () => {
        dispatch({ type: 'CLEAR_CART' })
    }
    const remove = (_id) => {
        dispatch({ type: 'REMOVE', payload: _id })
    }
    const fetchCartData = async () => {
        dispatch({ type: 'LOADING' })
        let newCart = state.cart
        dispatch({ type: 'DISPLAY_ITEMS', payload: newCart })
    }
    const toggleAmount = (_id, type) => {
        dispatch({ type: 'TOGGLE_AMOUNT', payload: { _id, type } })
    }

    useEffect(() => {
        fetchCartData()
    }, [])

    useEffect(() => {
        dispatch({ type: 'GET_TOTALS' })
    }, [state.cart])


    return (
        <GlobalContext.Provider value={{
            ...state,
            clearCart,
            remove,
            productsClothing,
            orderModalIsOpen,
            productsFootwear,
            url,
            toggleAmount,
            isLoading,
            time,
            addingToCart,
            isLoggedIn,
            modalIsOpen,
            isCartEmpty,
            userName,
            password,
            authSuccess,
            isLoggingIn,
            enterPressed,
            setUrl,
            setOrderModalIsOpen,
            setEnterPressed,
            handleLogin,
            setModalIsOpen,
            handleSubmit,
            handleChange,
            setIsLoading,
            setIsLoggingIn,
            setAddingToCart,
            addItem,
            setTime,
            setIsCartEmpty,
            setIsLoggedIn
        }}>{children}</GlobalContext.Provider>
    )


}
export const useGlobalContext = () => {
    return useContext(GlobalContext)
}

export { AppProvider }