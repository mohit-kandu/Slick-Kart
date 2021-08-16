import React, { useContext, useState, useReducer, useEffect } from 'react'
import axios from "axios"
import reducer from "../Reducer/reducer"
// import cartItems from "./temp"

const url = "https://fakestoreapi.com/products"

// CART SETUP
const initialState = {
    loading: false,
    cart: [],
    total: 0,
    amount: 0
}



const GlobalContext = React.createContext()

export default function AppProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState)
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [modalIsOpen, setIsOpen] = useState(false);
    const [isCartEmpty, setIsCartEmpty] = useState(true)
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [authSuccess, setAuthSuccess] = useState(true)
    const [isLoggingIn, setIsLoggingIn] = useState(false)
    const [addingToCart, setAddingToCart] = useState(false)
    const [time, setTime] = React.useState(false)


    const fetchData = async () => {

        await axios.get(url)
            .then(res => setProducts(res.data))
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
        authSuccess ? setIsOpen(false) : setIsOpen(true)
        setIsLoggingIn(false)
    }

    const handleLogin = (e) => {
        e.target.name === "userName" && setUserName(e.target.value)
        e.target.name === "userPass" && setPassword(e.target.value)
    }



    // REDUX


    const addItem = async (id) => {
        const resp = await fetch(`https://fakestoreapi.com/products/${id}`)
        const data = await resp.json()
        dispatch({ type: 'ADD_ITEM', payload: data })
    }

    const clearCart = () => {
        dispatch({ type: 'CLEAR_CART' })
    }
    const remove = (id) => {
        dispatch({ type: 'REMOVE', payload: id })
    }
    const increase = (id) => {
        dispatch({ type: 'INCREASE', payload: id })
    }
    const decrease = (id) => {
        dispatch({ type: 'DECREASE', payload: id })
    }

    const fetchCartData = async () => {
        dispatch({ type: 'LOADING' })
        let newCart = state.cart
        dispatch({ type: 'DISPLAY_ITEMS', payload: newCart })
    }
    const toggleAmount = (id, type) => {
        dispatch({ type: 'TOGGLE_AMOUNT', payload: { id, type } })
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
            increase,
            decrease,
            toggleAmount,
            isLoading,
            time,
            products,
            addingToCart,
            isLoggedIn,
            modalIsOpen,
            isCartEmpty,
            userName,
            password,
            authSuccess,
            isLoggingIn,
            handleLogin,
            setIsOpen,
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