
const initialState = {
  name:"Babal",
  count:0
}
function reducer(state=initialState,action){
  switch(action.type){
    case 'ADD':
      return {count:state.count+1};
    case 'DEL':
      return {count:state.count-1};
    default:
      return state;
  }

}
function MyCreateStore(){
let state
let listeners=[]
    const store ={
        getState(){
            return state;
        },
        dispatch(action){
            //bina type dekhe reducer ko pass
            state = reducer(state,action);
            listeners.forEach((listner)=>{
                listner();
            }) 
        },
        subscribe(listener){
            listeners.push(listener)

        },
    }

    store.dispatch({type :'@@INIT'});
    return store;
}

export default MyCreateStore;