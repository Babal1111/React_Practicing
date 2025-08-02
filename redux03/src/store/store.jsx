

import { useEffect } from "react";
import cartReducer, { ADD_TO_CART, addToCart, decreaseItemQuantity } from "./cartReducer";
import productReducer from "./productReducer";
import wishlistReducer, { ADD_TO_WISHLIST } from "./wishlistReducer";
import {combineReducers,createStore} from 'redux'

// const initalState = { 
//   products : productsList,
//   cartItems :[],
//   wishlistItems :[]
// }
const reducer = combineReducers({ //combine reducers make same structure as above
  products : productReducer,
  cartItems:cartReducer,
  wishlistItems:wishlistReducer
})
export const store = createStore(reducer);
