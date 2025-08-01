
let reduxState = {
    name: 'John Doe',
    age: 30,
    count:0
}


let stateUpdater = ()=>{
    reduxState = {...reduxState,count : reduxState.count}
} // normaly

//but reducer
 
function reducer(state){
    return {...state,count : state.count+1};

}

reducer(reduxState);
console.log("reducer will return updated value ",reducer(reduxState));
//or 

reduxState = reducer(reduxState); // we store it in itself, or it updates itself
console.log("reducer will return updated value ",reduxState);

reduxState = reducer(reduxState);
reduxState = reducer(reduxState);
reduxState = reducer(reduxState);

console.log("reducer will return updated value ",reduxState);

console.log("----------------");
let st = {
    name: 'John Doe',
    posts:0
}
function reducerr(state, action){
    if(action.type==="INC_POST"){
        return {...state,posts: state.posts+1}
    }
    else if(action.type==='DEC_POST'){
        return {...state,posts: state.posts-1}
    }
}
st = reducerr(st,{type:'INC_POST'});
console.log("reducer will return updated value ",st);

st = reducerr(st,{type:'DEC_POST'});
console.log("reducer will return updated value ",st);


let action = {
    type: 'INC_POST',

}

////

function reducerr2(state, action){
    if(action.type==="INC_POST"){
        return {...state,posts: state.posts+1}
    }
    else if(action.type==='DEC_POST'){
        return {...state,posts: state.posts-1}
    }
    else if(action.type==='INC_BY'){
        return {...state,posts: state.posts+action.payload}
    }
}
st = reducerr2(st,{type:'INC_BY',payload:101});
console.log("reducer will return updated value ",st);

