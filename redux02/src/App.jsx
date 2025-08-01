import { useState } from 'react'
import { useEffect } from 'react'
import { combineReducers, createStore } from 'redux'
import cartReducer, { ADD_TO_CART,REMOVE_FROM_CART,INC_ITEM_QUANTITY,DEC_ITEM_QUANTITY } from './multipleReducers/cartReducer';
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
      productId:1,quanity:1
    }})
    store.dispatch({type:ADD_TO_CART,payload:{
      productId:2,quanity:1
    }})

    store.dispatch({type:ADD_TO_WISHLIST,payload:{productId:1}});

   console.log("in redux2 ",store.getState());


  },[])

  return (
    <>
      <h4>hi thhis is app.jsk</h4>
    </>
  )
}

export default App
