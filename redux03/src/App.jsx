

import { useEffect } from "react";
// all the logic of store is moved to store.js
// import { productsList } from "./store/productList";
import Product from "./components/Product";
import "./App.css";
import { store } from "./store/store";
import { useSelector } from "react-redux";

function App() {

  // console.log(store);
  // console.log(store.getState());
  // wecan use "store.getState().product.map" instead of productlist.map
  // but it is also inefficiet ttherfore we ll use react-redux library

  const productList = useSelector((state)=> state.products);
  console.log("useSelector : ",productList);
  return (
    <>
      <h4>hi this is app.js (integrating redux in react)</h4>
      
      <div className="products-container">
        {/* {was store.getState().products} */}
       {productList.map(({ id,title, rating, price, image }) => (
     <Product
    key = {id}
    title={title}
    rating={rating.rate}
    price={price}
    imageUrl={image}
  />
))}
      
      </div>
    </>
  )
}

export default App
