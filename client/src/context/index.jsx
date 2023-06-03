import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => {
  // shopping cart item count
const [count, setCount] = useState(0)

// close/open aside
const [isAsideOpen, setIsAsideOpen] = useState(false)
const openAside = () => setIsAsideOpen(true)
const closeAside = () => setIsAsideOpen(false)

// set product details
const [productDetails, setProductDetails] = useState(null)

  return <ShoppingCartContext.Provider value={{
    count, setCount, isAsideOpen, openAside, closeAside,
    productDetails, setProductDetails
  }}>
    {children}
  </ShoppingCartContext.Provider>
}

ShoppingCartProvider.propTypes = {
  children: PropTypes.node
}