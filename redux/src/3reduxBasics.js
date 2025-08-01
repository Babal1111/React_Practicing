
console.log("----------redux lib--------------")


import {createStore} from 'redux';
let initialState = {
    name: 'John Doe',
    posts:0
}
const IncByItna = 'INC_BY';//chandg in reducer also

// passing inmitial state is must otherwise how we'll getState()(initially if no action is taken)
function stateUpdater(state= initialState, action){
    if(action.type==="INC_POST"){
        return {...state,posts: state.posts+1}
    }
    else if(action.type==='DEC_POST'){
        return {...state,posts: state.posts-1}
    }
    else if(action.type===IncByItna){
        return {...state,posts: state.posts+action.payload}
    }
    return state;// by fAULt
}
console.log(createStore);
const store = createStore(stateUpdater);// param reducer
console.log(store);
//console.log(store.getState());

store.subscribe(()=>{ // bar bar console krne ki jaroort nhi, whenever statecahnges it is called
    console.log(store.getState());
})

store.dispatch({type:'abcd'});
//console.log(store.getState());
// nothing happens as its abcd is not defined

store.dispatch({type:'INC_POST'});
//console.log(store.getState());
store.dispatch({type:'INC_BY',payload:20});
//console.log(store.getState());


// better we can also define action as variable so that it can be changed easily in future
store.dispatch({type:IncByItna,payload:20});
// or
const actionEx = {type:'INC_BY',payload:20};
store.dispatch(actionEx);

// better optimised with switch case
function stateUpdater(state= initialState, action){
    switch(action.type){
     case 'INC_POST':
        return {...state,posts: state.posts+1}
     case 'DEC_POST':
        return {...state,posts: state.posts-1}
     case IncByItna:
        return {...state,posts: state.posts+action.payload}
    default:
    return state;// by fAULt
}
}