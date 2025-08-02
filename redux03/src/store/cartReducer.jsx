// Actions
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const INC_ITEM_QUANTITY = 'INC_ITEM_QUANTITY';
export const DEC_ITEM_QUANTITY = 'DEC_ITEM_QUANTITY';


export function decreaseItemQuantity(productId){
  return {
    type: DEC_ITEM_QUANTITY,
    payload: {productId: productId}
  }
}
export function addToCart(productId,quantity=1){
  return{
    type: ADD_TO_CART,
    payload:{
      productId:productId,
      quantity:quantity
    }
  }
}

// Reducer
const initialCartState = [];

export default function cartReducer(state = initialCartState, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      const existingItem = state.find(item => item.productId === action.payload.productId);
      if (existingItem) {
        return state.map(item =>
          item.productId === action.payload.productId
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        );
      } else {
        return [...state, action.payload];
      }
    }

    case INC_ITEM_QUANTITY:
      return state.map(item =>
        item.productId === action.payload.productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

    case DEC_ITEM_QUANTITY:
      return state
        .map(item =>
          item.productId === action.payload.productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0); // Remove item if quantity becomes 0

    case REMOVE_FROM_CART:
      return state.filter(item => item.productId !== action.payload.productId);

    default:
      return state;
  }
}
