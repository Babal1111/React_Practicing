import { configureStore } from "@reduxjs/toolkit";

const incriment = 'incriment'
const decriment = 'decriment'

const initialState = {
    count :0
}

function countReducer(state = initialState,action){
    switch(action.type){
        case incriment:
            return {count:state.count+1}

        case decriment:
            return {count:state.count-1}

        default:
            return state
    }
}
const store = configureStore({
    reducer: countReducer
})

export default store
export{incriment,decriment}