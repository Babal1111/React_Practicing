
export const ADD_TO_WISHLIST= 'ADD_TO_WISHLIST';
export const REMOVE_FROM_WISHLIST = 'REMOVE_FROM_WISHLIST';

export default function wishlistReducer(state= [], action){
    switch(action.type){
        
        case ADD_TO_WISHLIST:
            return[...state,action.payload]
        
        case REMOVE_FROM_WISHLIST:
            return state.filter((wishlistItem)=>
               wishlistItem.productId !== action.payload.productId
            )
        default:
            return state;
    }
}