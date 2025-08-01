import './App.css';
// import MyCreateStore
// from './4my-redux';
import { createStore } from 'redux';
import reducer from './5managingRedux';
import { useEffect } from 'react';
// const initialState = {
//   name:"Babal",
//   count:0
// }
// function reducer(state=initialState,action){
//   switch(action.type){
//     case 'ADD':
//       return {count:state.count+1};
//     case 'DEL':
//       return {count:state.count-1};
//     default:
//       return state;
//   }

// }
// const store = createStore(reducer);

// const MyStore = MyCreateStore(reducer);
// console.log("store :",store);

// console.log("Mystore :",MyStore);
// MyStore.subscribe(()=>{
//   console.log("store changed");
//   console.log(MyStore.getState());
// })
// MyStore.dispatch({type:'ADD'});
// MyStore.dispatch({type:'ADD'});

const store = createStore(reducer);
function App() {
  useEffect(() => {
    
  store.dispatch({type:'ADD_TO_CART', payload:{productId:1, quantity:1}});
  store.dispatch({type:'ADD_TO_CART', payload:{productId:10, quantity:1}});
  store.dispatch({type:'ADD_TO_CART', payload:{productId:111, quantity:1}});
store.dispatch({type:'ADD_TO_CART', payload:{productId:2, quantity:20}});
  store.dispatch({type:'REMOVE_ITEM',payload:{productId: 1}});
  console.log("getItems after dispatch:", store.getState());

  store.dispatch({type:'INC_ITEM_QUANTITY',payload:{productId:10}});
      console.log("getItems after dispatch:", store.getState());


  //// adding to wishlist
  store.dispatch({type:'ADD_TO_WISHLIST',payload:{productId:123}});
   store.dispatch({type:'ADD_TO_WISHLIST',payload:{productId:456}});
   store.dispatch({type:'ADD_TO_WISHLIST',payload:{productId:789}});
  console.log("getItems after adding to wishlist:", store.getState());

  store.dispatch({type:'REMOVE_FROM_WISHLIST',payload:{productId:456}});
  console.log("getItems after removing from wishlist:", store.getState());


  },[])
    
    // console.log("getItems:",store.getState());
  return (
    <>
    <h4>hi this is app.js </h4>
    
    </>
  );
}

export default App;
