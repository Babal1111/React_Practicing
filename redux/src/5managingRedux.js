import { productsList } from "./productsList";
import { createStore } from "redux";


const initialState = {
    productsList:productsList,
    cartItems:[],
    wishlist:[]
}

const INC = 'INC_STATE';
const DEC = 'DEC_STATE';
const ADD_TO_CART = 'ADD_TO_CART';
const ADD_TO_WISHLIST = 'ADD_TO_WISHLIST';
const REMOVE_FROM_WISHLIST = 'REMOVE_FROM_WISHLIST';
function reducer(state = initialState,action){
    console.log(action);
    switch(action.type){
        case 'ADD_TO_CART':
            return {...state,cartItems:[...state.cartItems,action.payload]}
        case 'INC_ITEM_QUANTITY':
            return {...state,cartItems: state.cartItems.map((cartItem)=>{
                if(cartItem.productId === action.payload.productId){
                    return{...cartItem,quantity:cartItem.quantity +1 }
                }
                return cartItem;
            })}
            case 'DEC_ITEM_QUANTITY':
            return {...state,cartItems: state.cartItems.map((cartItem)=>{
                if(cartItem.productId === action.payload.productId){
                    return{...cartItem,quantity:cartItem.quantity -1 }
                }
                return cartItem;
            }).filter((cartItem)=> cartItem.quantity>0)}
            // agar quantit
        case 'REMOVE_ITEM':
            return {...state, cartItems: state.cartItems.filter((cartItem)=> cartItem.productId !== action.payload.productId),}

            ///...means returngi the whole state, cartItem: means we Are only cahngig thes caritems

        case ADD_TO_WISHLIST:
            return{...state,wishlist:[...state.wishlist,action.payload]}
        
        case REMOVE_FROM_WISHLIST:
            return{...state,wishlist: state.wishlist.filter((wishlistItem)=>
               wishlistItem.productId !== action.payload.productId
            )}
        
    default:
    return state;
        
}
}

// const store = createStore(reducer);
// store.dispatch({type:'ADD_TO_CART',payload:{productId:1, quantity: 1}} )
// const myStore = MyCreateStore(reducer);
export default reducer;