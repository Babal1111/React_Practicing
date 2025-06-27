import {configureStore} from "@reduxjs/toolkit";

export const store = configureStore({
    reducer:{
        userDetails:(state=null,action)=>{ // agar action nhi hoga pta nhi lgega consa reducer call krna, bydefault react sare reducers ko call kr dega
            switch(action.type){
                case 'SET_USER':
                    return action.payload;
                    // return{
                    //     ...state,
                    //     ...action.payload 
                    //     // it will represet new value
                    // };
                    
                    case 'CLEAR_USER':
                        return null;//this case will help in resetting userDetails if some other state value gets changed
                    default:
                        return state;

            }
        }
    }
})