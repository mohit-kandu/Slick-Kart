const cartReducer = (state, action) => {

  if (action.type === 'ADD_ITEM') {
    let tempCart
    let itemAlreadyExists = false
    let tempIDs = []

    if (state.cart !== []) {
      tempCart = state.cart.map((cartItem) => {
        if (cartItem._id === action.payload._id) {
          itemAlreadyExists = true
          return { ...cartItem, amount: cartItem.amount + 1 }
        }
        return cartItem
      })
    }

    if (!itemAlreadyExists) {
      itemAlreadyExists = false
      tempCart = [...state.cart, action.payload]
      tempIDs.push(...state.itemIDs, action.payload._id)
    }
    return { ...state, cart: tempCart, itemIDs: tempIDs }
  }


  if (action.type === 'CLEAR_CART') {
    return { ...state, cart: [] }
  }
  if (action.type === 'REMOVE') {
    return {
      ...state,
      cart: state.cart.filter((cartItem) => cartItem._id !== action.payload)
    }
  }
  if (action.type === 'GET_TOTALS') {
    let { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { price, amount } = cartItem
        const itemTotal = price * amount

        cartTotal.total += itemTotal
        cartTotal.amount += amount
        return cartTotal
      },
      {
        total: 0,
        amount: 0,
      }
    )
    total = parseFloat(total.toFixed(2))
    // if (localStorage === "undefined" || localStorage === "0") {
    // }
    return { ...state, total, amount }
  }
  if (action.type === 'LOADING') {
    return { ...state, loading: true }
  }
  if (action.type === 'DISPLAY_ITEMS') {
    return { ...state, cart: action.payload, loading: false }
  }
  if (action.type === 'TOGGLE_AMOUNT') {
    let tempCart = state.cart
      .map((cartItem) => {
        if (cartItem._id === action.payload._id) {
          if (action.payload.type === 'inc') {
            return { ...cartItem, amount: cartItem.amount + 1 }
          }
          if (action.payload.type === 'dec') {
            return { ...cartItem, amount: cartItem.amount - 1 }
          }
        }
        return cartItem
      })
      .filter((cartItem) => cartItem.amount !== 0)
    return { ...state, cart: tempCart }
  }
  throw new Error('no matching action type')
}


export default cartReducer
