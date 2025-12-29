import { createContext, useContext, useMemo, useReducer } from 'react'

const CartContext = createContext()
const initial = { items: {} } // { [id]: { product, qty } }

function reducer(state, action) {
  switch (action.type) {
    case 'ADD': {
      const { product, qty = 1 } = action
      const prev = state.items[product.id]?.qty || 0
      return { items: { ...state.items, [product.id]: { product, qty: prev + qty } } }
    }
    case 'REMOVE': {
      const { id } = action
      const next = { ...state.items }
      delete next[id]
      return { items: next }
    }
    case 'SET_QTY': {
      const { id, qty } = action
      if (qty <= 0) {
        const next = { ...state.items }
        delete next[id]
        return { items: next }
      }
      return { items: { ...state.items, [id]: { ...state.items[id], qty } } }
    }
    case 'CLEAR':
      return initial
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initial)
  const totalItems = useMemo(
    () => Object.values(state.items).reduce((sum, i) => sum + i.qty, 0),
    [state.items]
  )
  const subtotal = useMemo(
    () => Object.values(state.items).reduce((sum, i) => sum + i.qty * i.product.price, 0),
    [state.items]
  )

  const value = { state, dispatch, totalItems, subtotal }
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export const useCart = () => useContext(CartContext)
