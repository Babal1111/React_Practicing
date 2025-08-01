import { useState } from 'react'
import { useEffect } from 'react'
import { combineReducers, createStore } from 'redux'
import cartReducer, { ADD_TO_CART,REMOVE_FROM_CART,INC_ITEM_QUANTITY,DEC_ITEM_QUANTITY, decreaseItemQuantity } from './multipleReducers/cartReducer';
import wishlistReducer, { ADD_TO_WISHLIST,REMOVE_FROM_WISHLIST } from './multipleReducers/wishlistReducer';
import { productsList } from '../../redux/src/productsList';
import productReducer from './multipleReducers/productsReducer';

// const initalState = {
//   products : productsList,
//   cartItems :[],
//   wishlistItems :[]
// }
const reducer = combineReducers({
  product : productReducer,
  cartItems:cartReducer,
  wishlistItems:wishlistReducer
})
const store = createStore(reducer);

function App() {

  useEffect(()=>{
    console.log(store.getState());
    store.dispatch({type:ADD_TO_CART,payload:{
      productId:1,quantity:1
    }})
    store.dispatch({type:ADD_TO_CART,payload:{
      productId:2,quantity:1
    }})

    store.dispatch({type:ADD_TO_WISHLIST,payload:{productId:1}});

   console.log("in redux2 ",store.getState());

   store.dispatch(decreaseItemQuantity(2));//passing action as fuction which we made in cartReducer for better code, called ACTION CREATORS
  console.log("in redux2 after decrease qty ",store.getState());



  },[])

  return (
    <>
      <h4>hi thhis is app.jsk</h4>
    </>
  )
}

export default App
